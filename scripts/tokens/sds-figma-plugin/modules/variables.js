// ===== FIGMA VARIABLES API MODULE =====
// This module handles Variables API integration following Figma documentation patterns
// Replaces manual SDS_DESIGN_TOKENS with proper Figma Variables API calls

/**
 * Get all local variable collections from the current document
 * Uses getLocalVariableCollectionsAsync() pattern from Figma docs
 */
async function getLocalVariables() {
  try {
    const collections = await figma.variables.getLocalVariableCollectionsAsync();
    console.log('📊 Retrieved variable collections:', collections.length);
    
    const variableMap = {};
    
    for (const collection of collections) {
      console.log(`📋 Processing collection: ${collection.name}`);
      
      // Get all variables in this collection
      const variables = await Promise.all(
        collection.variableIds.map(id => figma.variables.getVariableByIdAsync(id))
      );
      
      for (const variable of variables) {
        if (variable) {
          // Organize variables by type and name
          const category = getCategoryFromVariableName(variable.name);
          if (!variableMap[category]) {
            variableMap[category] = {};
          }
          
          // Store variable with its values for different modes
          variableMap[category][variable.name] = {
            id: variable.id,
            name: variable.name,
            resolvedType: variable.resolvedType,
            values: variable.valuesByMode,
            scopes: variable.scopes,
            collection: collection.name
          };
        }
      }
    }
    
    return variableMap;
  } catch (error) {
    console.error('❌ Error getting local variables:', error);
    return getFallbackVariables();
  }
}

/**
 * Get bound variables for a specific node
 * Uses proper boundVariables pattern from Figma docs
 */
async function getBoundVariables(node) {
  try {
    if (!node.boundVariables) {
      return {};
    }
    
    const boundVars = {};
    
    for (const [property, variableAlias] of Object.entries(node.boundVariables)) {
      if (variableAlias && variableAlias.id) {
        const variable = await figma.variables.getVariableByIdAsync(variableAlias.id);
        if (variable) {
          boundVars[property] = {
            variable: variable,
            value: getVariableValue(variable),
            sdsToken: mapVariableToSdsToken(variable)
          };
        }
      }
    }
    
    return boundVars;
  } catch (error) {
    console.error('❌ Error getting bound variables for node:', error);
    return {};
  }
}

/**
 * Get variable value for current mode
 */
function getVariableValue(variable) {
  try {
    // Get the current mode (usually default mode)
    const currentMode = Object.keys(variable.valuesByMode)[0];
    return variable.valuesByMode[currentMode];
  } catch (error) {
    console.error('❌ Error getting variable value:', error);
    return null;
  }
}

/**
 * Map Figma variable to SDS design token
 * Follows SDS naming conventions and token structure
 */
function mapVariableToSdsToken(variable) {
  const name = variable.name.toLowerCase();
  
  // Color variables
  if (variable.resolvedType === 'COLOR') {
    if (name.includes('background')) {
      return mapToSdsColorToken(name, 'background');
    } else if (name.includes('text')) {
      return mapToSdsColorToken(name, 'text');
    } else if (name.includes('border')) {
      return mapToSdsColorToken(name, 'border');
    } else if (name.includes('icon')) {
      return mapToSdsColorToken(name, 'icon');
    }
    return `var(--sds-color-${name.replace(/[^a-z0-9]/g, '-')})`;
  }
  
  // Float variables (spacing, radius, etc.)
  if (variable.resolvedType === 'FLOAT') {
    if (name.includes('space') || name.includes('padding') || name.includes('margin')) {
      return mapToSdsSpacingToken(name);
    } else if (name.includes('radius')) {
      return mapToSdsRadiusToken(name);
    }
    return `var(--sds-size-${name.replace(/[^a-z0-9]/g, '-')})`;
  }
  
  // String variables (typography)
  if (variable.resolvedType === 'STRING') {
    return `var(--sds-typography-${name.replace(/[^a-z0-9]/g, '-')})`;
  }
  
  // Default fallback
  return `var(--sds-${name.replace(/[^a-z0-9]/g, '-')})`;
}

/**
 * Map color variable to SDS color token
 */
function mapToSdsColorToken(name, category) {
  // Extract semantic meaning from variable name
  let semantic = 'default';
  let variant = 'default';
  
  if (name.includes('primary')) semantic = 'brand';
  else if (name.includes('secondary')) semantic = 'neutral';
  else if (name.includes('success') || name.includes('positive')) semantic = 'positive';
  else if (name.includes('error') || name.includes('danger')) semantic = 'danger';
  else if (name.includes('warning')) semantic = 'warning';
  
  if (name.includes('hover')) variant = 'hover';
  else if (name.includes('secondary')) variant = 'secondary';
  else if (name.includes('tertiary')) variant = 'tertiary';
  
  return `var(--sds-color-${category}-${semantic}-${variant})`;
}

/**
 * Map spacing variable to SDS spacing token
 */
function mapToSdsSpacingToken(name) {
  // Extract size from name (e.g., "space-16" -> "400")
  const sizeMatch = name.match(/(\d+)/);
  if (sizeMatch) {
    const size = parseInt(sizeMatch[1]);
    // Map to SDS spacing scale (16px = 400, 24px = 600, etc.)
    const sdsSize = Math.round(size / 4) * 100;
    return `var(--sds-size-space-${sdsSize})`;
  }
  
  return `var(--sds-size-space-400)`; // default
}

/**
 * Map radius variable to SDS radius token
 */
function mapToSdsRadiusToken(name) {
  const sizeMatch = name.match(/(\d+)/);
  if (sizeMatch) {
    const size = parseInt(sizeMatch[1]);
    // Map to SDS radius scale
    if (size <= 4) return 'var(--sds-size-radius-100)';
    else if (size <= 8) return 'var(--sds-size-radius-200)';
    else if (size <= 16) return 'var(--sds-size-radius-400)';
    else return 'var(--sds-size-radius-full)';
  }
  
  return 'var(--sds-size-radius-200)'; // default
}

/**
 * Get category from variable name for organization
 */
function getCategoryFromVariableName(name) {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('color') || lowerName.includes('background') || 
      lowerName.includes('text') || lowerName.includes('border') || 
      lowerName.includes('icon')) {
    return 'colors';
  }
  
  if (lowerName.includes('space') || lowerName.includes('padding') || 
      lowerName.includes('margin') || lowerName.includes('gap')) {
    return 'spacing';
  }
  
  if (lowerName.includes('radius') || lowerName.includes('corner')) {
    return 'radius';
  }
  
  if (lowerName.includes('font') || lowerName.includes('text') || 
      lowerName.includes('typography')) {
    return 'typography';
  }
  
  if (lowerName.includes('shadow') || lowerName.includes('elevation')) {
    return 'effects';
  }
  
  return 'other';
}

/**
 * Fallback variables when Variables API is not available
 * Uses the original SDS_DESIGN_TOKENS structure
 */
function getFallbackVariables() {
  console.log('🔄 Using fallback variables (Variables API not available)');
  
  return {
    colors: {
      '#e75715': 'var(--sds-color-background-brand-default)',
      '#111111': 'var(--sds-color-text-default-default)',
      '#ffffff': 'var(--sds-color-background-default-default)',
      '#f5f5f5': 'var(--sds-color-background-default-secondary)',
      '#757575': 'var(--sds-color-text-default-secondary)'
    },
    spacing: {
      8: 'var(--sds-size-space-200)',
      16: 'var(--sds-size-space-400)',
      24: 'var(--sds-size-space-600)',
      32: 'var(--sds-size-space-800)',
      48: 'var(--sds-size-space-1200)'
    },
    radius: {
      4: 'var(--sds-size-radius-100)',
      8: 'var(--sds-size-radius-200)',
      16: 'var(--sds-size-radius-400)'
    },
    typography: {
      12: 'var(--sds-typography-scale-01)',
      14: 'var(--sds-typography-scale-02)',
      16: 'var(--sds-typography-scale-03)',
      20: 'var(--sds-typography-scale-04)',
      24: 'var(--sds-typography-scale-05)',
      400: 'var(--sds-typography-weight-regular)',
      500: 'var(--sds-typography-weight-medium)',
      600: 'var(--sds-typography-weight-semibold)',
      700: 'var(--sds-typography-weight-bold)'
    }
  };
}

/**
 * Convert Figma color to CSS color string
 */
function figmaColorToCss(color) {
  if (typeof color === 'object' && color.r !== undefined) {
    const r = Math.round(color.r * 255);
    const g = Math.round(color.g * 255);
    const b = Math.round(color.b * 255);
    const a = color.a !== undefined ? color.a : 1;
    
    if (a < 1) {
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    } else {
      return `rgb(${r}, ${g}, ${b})`;
    }
  }
  
  return color;
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getLocalVariables,
    getBoundVariables,
    getVariableValue,
    mapVariableToSdsToken,
    figmaColorToCss,
    getFallbackVariables
  };
} else {
  // For Figma plugin environment
  window.variablesModule = {
    getLocalVariables,
    getBoundVariables,
    getVariableValue,
    mapVariableToSdsToken,
    figmaColorToCss,
    getFallbackVariables
  };
}
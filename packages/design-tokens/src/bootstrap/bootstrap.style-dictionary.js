/**
 * Bootstrap Style Dictionary Extension
 * 
 * Custom transforms and formats for generating Bootstrap-compatible SCSS files
 * from SDS design tokens using the bootstrap mapping configuration.
 */

import StyleDictionary from 'style-dictionary';
import { bootstrapMapping, mapperConfig } from './bootstrap5.mapping.js';
import { TokenAnalyzer } from './token-analyzer.js';

/**
 * Custom transform: SDS token to Bootstrap variable
 * Converts SDS design tokens to Bootstrap SCSS variables using the mapping configuration
 */
StyleDictionary.registerTransform({
  name: 'name/bootstrap/scss-variable',
  type: 'name',
  matcher: (token) => {
    // Only apply to tokens that have Bootstrap mappings
    return Object.values(bootstrapMapping).some(mapping => 
      mapping.token === token.name || mapping.token === `@${token.name}`
    );
  },
  transformer: (token, options) => {
    // Find the Bootstrap variable name for this token
    const mappingEntry = Object.entries(bootstrapMapping).find(([bootstrapVar, mapping]) => {
      const tokenName = mapping.token.startsWith('@') ? mapping.token.slice(1) : mapping.token;
      const currentTokenName = token.name.startsWith('@') ? token.name.slice(1) : token.name;
      return tokenName === currentTokenName;
    });
    
    if (mappingEntry) {
      return mappingEntry[0]; // Return the Bootstrap variable name (e.g., '$primary')
    }
    
    // Fallback: convert token path to Bootstrap-style variable
    return `$${token.path.join('-')}`;
  }
});

/**
 * Custom transform: Apply Bootstrap value transformations
 * Applies semantic transformations based on mapperConfig rules
 */
StyleDictionary.registerTransform({
  name: 'value/bootstrap/semantic',
  type: 'value',
  matcher: (token) => {
    return Object.values(bootstrapMapping).some(mapping => 
      mapping.token === token.name || mapping.token === `@${token.name}`
    );
  },
  transformer: (token, options) => {
    // Find the mapping configuration for this token
    const mappingEntry = Object.entries(bootstrapMapping).find(([bootstrapVar, mapping]) => {
      const tokenName = mapping.token.startsWith('@') ? mapping.token.slice(1) : mapping.token;
      const currentTokenName = token.name.startsWith('@') ? token.name.slice(1) : token.name;
      return tokenName === currentTokenName;
    });
    
    if (!mappingEntry) {
      return token.value;
    }
    
    const [bootstrapVar, mapping] = mappingEntry;
    const transformation = mapping.transformation;
    
    // Apply transformations based on type
    if (transformation) {
      switch (transformation.type) {
        case 'semantic_color':
          // For semantic colors, use the raw token value
          return token.value;
          
        case 'typography_scale':
          // For typography, ensure proper units
          if (typeof token.value === 'number') {
            return `${token.value}px`;
          }
          return token.value;
          
        case 'spacing_scale':
          // For spacing, convert to rem if needed
          if (typeof token.value === 'string' && token.value.endsWith('px')) {
            const pxValue = parseFloat(token.value);
            return `${pxValue / 16}rem`;
          }
          return token.value;
          
        case 'direct_mapping':
        default:
          return token.value;
      }
    }
    
    return token.value;
  }
});

/**
 * Custom format: Bootstrap SCSS Variables
 * Generates Bootstrap-compatible SCSS variable file
 */
StyleDictionary.registerFormat({
  name: 'scss/bootstrap-variables',
  formatter: ({ dictionary, options }) => {
    const { prefix = 'bootstrap' } = options;
    
    // Initialize token analyzer to validate tokens
    const analyzer = new TokenAnalyzer();
    
    // Group variables by Bootstrap categories for better organization
    const categories = {
      colors: [],
      typography: [],
      spacing: [],
      borders: [],
      shadows: [],
      components: [],
      utilities: []
    };
    
    // Process each Bootstrap mapping
    Object.entries(bootstrapMapping).forEach(([bootstrapVar, mapping]) => {
      const tokenPath = mapping.token.startsWith('@') ? mapping.token.slice(1) : mapping.token;
      
      // Try to find the token in the dictionary
      const token = dictionary.allTokens.find(t => {
        const tName = t.name || t.path?.join('.');
        return tName === tokenPath || tName === mapping.token;
      });
      
      if (token) {
        // Categorize the variable
        let category = 'utilities'; // default
        
        if (bootstrapVar.includes('color') || bootstrapVar.includes('primary') || bootstrapVar.includes('secondary') || 
            bootstrapVar.includes('success') || bootstrapVar.includes('danger') || bootstrapVar.includes('warning') ||
            bootstrapVar.includes('info') || bootstrapVar.includes('light') || bootstrapVar.includes('dark')) {
          category = 'colors';
        } else if (bootstrapVar.includes('font') || bootstrapVar.includes('text') || bootstrapVar.includes('line-height')) {
          category = 'typography';
        } else if (bootstrapVar.includes('spacer') || bootstrapVar.includes('margin') || bootstrapVar.includes('padding')) {
          category = 'spacing';
        } else if (bootstrapVar.includes('border') || bootstrapVar.includes('radius')) {
          category = 'borders';
        } else if (bootstrapVar.includes('shadow') || bootstrapVar.includes('box-shadow')) {
          category = 'shadows';
        } else if (bootstrapVar.includes('btn') || bootstrapVar.includes('card') || bootstrapVar.includes('modal') ||
                   bootstrapVar.includes('navbar') || bootstrapVar.includes('table') || bootstrapVar.includes('alert')) {
          category = 'components';
        }
        
        categories[category].push({
          name: bootstrapVar,
          value: token.value,
          token: token,
          mapping: mapping,
          description: mapping.description || token.$description
        });
      } else {
        console.warn(`Token not found for Bootstrap variable: ${bootstrapVar} -> ${mapping.token}`);
      }
    });
    
    // Generate SCSS output
    let output = `//
// Bootstrap Variables
// Generated from SDS Design Tokens via Style Dictionary
// 
// This file contains Bootstrap-compatible SCSS variables mapped from the SDS design system.
// Do not edit this file directly - update the source design tokens instead.
//

`;
    
    // Add configuration note
    output += `// Configuration
// Mapping: ${Object.keys(bootstrapMapping).length} Bootstrap variables
// Tokens: ${dictionary.allTokens.length} available SDS tokens
// Generated: ${new Date().toISOString()}

`;
    
    // Generate variables by category
    Object.entries(categories).forEach(([categoryName, variables]) => {
      if (variables.length > 0) {
        output += `// ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}\n`;
        output += `// =============================================\n\n`;
        
        variables.forEach(variable => {
          if (variable.description) {
            output += `// ${variable.description}\n`;
          }
          output += `${variable.name}: ${variable.value};\n`;
          
          // Add token reference as comment for debugging
          const tokenRef = variable.mapping.token;
          output += `// Token: ${tokenRef}\n\n`;
        });
        
        output += '\n';
      }
    });
    
    // Add default Bootstrap configuration if needed
    output += `// Bootstrap Configuration\n`;
    output += `// =============================================\n\n`;
    output += `// Enable responsive font sizes\n`;
    output += `$enable-responsive-font-sizes: true !default;\n\n`;
    output += `// Enable grid classes\n`;
    output += `$enable-grid-classes: true !default;\n\n`;
    output += `// Enable utilities\n`;
    output += `$enable-utilities: true !default;\n\n`;
    
    return output;
  }
});

/**
 * Custom format: Bootstrap CSS Custom Properties
 * Generates CSS custom properties for Bootstrap integration
 */
StyleDictionary.registerFormat({
  name: 'css/bootstrap-custom-properties',
  formatter: ({ dictionary, options }) => {
    const { prefix = 'bs' } = options;
    
    let output = `/*
 * Bootstrap CSS Custom Properties
 * Generated from SDS Design Tokens
 */

:root {
`;
    
    // Process Bootstrap mappings
    Object.entries(bootstrapMapping).forEach(([bootstrapVar, mapping]) => {
      const tokenPath = mapping.token.startsWith('@') ? mapping.token.slice(1) : mapping.token;
      
      const token = dictionary.allTokens.find(t => {
        const tName = t.name || t.path?.join('.');
        return tName === tokenPath || tName === mapping.token;
      });
      
      if (token) {
        // Convert Bootstrap variable to CSS custom property
        const cssVarName = bootstrapVar.replace('$', `--${prefix}-`);
        const description = mapping.description ? ` /* ${mapping.description} */` : '';
        output += `  ${cssVarName}: ${token.value};${description}\n`;
      }
    });
    
    output += `}\n`;
    
    return output;
  }
});

/**
 * Bootstrap Style Dictionary Configuration
 * Extended configuration for Bootstrap SCSS generation
 */
export const bootstrapStyleDictionaryConfig = {
  source: ['tokens/**/*.json'],
  platforms: {
    bootstrap_scss: {
      transformGroup: 'scss',
      prefix: 'bootstrap',
      buildPath: 'dist/bootstrap/',
      transforms: [
        'attribute/cti',
        'name/bootstrap/scss-variable',
        'value/bootstrap/semantic',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/css'
      ],
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/bootstrap-variables',
          options: {
            showFileHeader: false
          }
        }
      ]
    },
    bootstrap_css: {
      transformGroup: 'css',
      prefix: 'bs',
      buildPath: 'dist/bootstrap/',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'value/bootstrap/semantic',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/css'
      ],
      files: [
        {
          destination: 'bootstrap-tokens.css',
          format: 'css/bootstrap-custom-properties',
          options: {
            showFileHeader: false
          }
        }
      ]
    }
  }
};

export default bootstrapStyleDictionaryConfig;
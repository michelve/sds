// Simplified version that only gets variables (colors) without effects/styles
// This avoids the JavaScript compatibility issues

function processVariables() {
  try {
    const variables = [];
    const collections = figma.variables.getLocalVariableCollections();
    
    collections.forEach(function(collection) {
      const collectionModes = collection.modes;
      const variableIds = collection.variableIds;
      
      variableIds.forEach(function(variableId) {
        try {
          const variable = figma.variables.getVariableById(variableId);
          if (!variable) return;
          
          const name = variable.name;
          const resolvedType = variable.resolvedType;
          const valuesByMode = variable.valuesByMode;
          
          // Process each mode
          collectionModes.forEach(function(mode) {
            const modeId = mode.modeId;
            const modeName = mode.name;
            const value = valuesByMode[modeId];
            
            if (value && typeof value === 'object' && value.r !== undefined) {
              // This is a color value
              const colorHex = rgbToHex(value.r, value.g, value.b, value.a || 1);
              
              variables.push({
                name: name,
                type: resolvedType,
                mode: modeName,
                value: colorHex,
                collection: collection.name
              });
            } else if (value !== undefined) {
              // Other types of values
              variables.push({
                name: name,
                type: resolvedType,
                mode: modeName,
                value: value,
                collection: collection.name
              });
            }
          });
        } catch (e) {
          console.log('Error processing variable:', e);
        }
      });
    });
    
    return JSON.stringify(variables, null, 2);
  } catch (e) {
    return JSON.stringify({ error: e.toString() }, null, 2);
  }
}

function rgbToHex(r, g, b, a) {
  function componentToHex(c) {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  const hexR = componentToHex(r);
  const hexG = componentToHex(g);
  const hexB = componentToHex(b);
  
  if (a !== undefined && a !== 1) {
    const hexA = componentToHex(a);
    return "#" + hexR + hexG + hexB + hexA;
  }
  
  return "#" + hexR + hexG + hexB;
}

// Main execution
const result = processVariables();
figma.showUI(__html__, { width: 800, height: 600 });
figma.ui.postMessage({ type: 'variables', data: result });
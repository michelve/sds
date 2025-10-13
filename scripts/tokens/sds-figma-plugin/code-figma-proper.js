// ===== SDS FIGMA PLUGIN - CODE CONNECT INTEGRATION =====
// Main plugin file using Code Connect mappings instead of hardcoded detection
// Runs in the main thread sandbox (not iframe) - no DOM/browser APIs available

console.log('🚀 SDS Component Scanner starting with Code Connect integration');

// ===== GLOBAL PLUGIN STATE =====

let isInitialized = false;
let currentDevMode = false;
let configManager = null;
let codeConnectDetector = null;

/**
 * Initialize the plugin with Code Connect integration
 */
async function initializePlugin() {
  if (isInitialized) {
    console.log('✅ Plugin already initialized');
    return;
  }

  try {
    console.log('🔧 Initializing SDS Code Connect integration...');
    
    // Check if we're in dev mode
    currentDevMode = figma.editorType === 'dev';
    console.log(`📍 Editor type: ${figma.editorType}`);
    
    // Initialize configuration manager
    configManager = new window.SDSConfigurationManager();
    await configManager.initialize();
    
    // Initialize Code Connect detector
    codeConnectDetector = new window.SDSCodeConnectDetector(configManager);
    console.log('✅ Code Connect detector initialized');
    
    // Load any required fonts for text manipulation
    try {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      console.log('✅ Default font loaded');
    } catch (fontError) {
      console.warn('⚠️ Could not load Inter font, using system default');
    }

    // Show UI with our external HTML file
    figma.showUI(__html__, { 
      width: 360, 
      height: 480,
      themeColors: true  // Enable Figma CSS variables
    });

    // Set up selection change listener
    figma.on('selectionchange', handleSelectionChange);
    
    // Set up message handler for UI communication
    figma.ui.onmessage = handleUIMessage;

    isInitialized = true;
    console.log('✅ SDS Plugin initialized successfully');
    
    // Send initialization success to UI
    figma.ui.postMessage({
      type: 'plugin-ready',
      message: 'SDS Code Connect integration ready'
    });

  } catch (error) {
    console.error('❌ Plugin initialization failed:', error);
    figma.ui.postMessage({
      type: 'error',
      error: error.message
    });
  }
}

/**
 * Handle selection changes
 */
function handleSelectionChange() {
  const selection = figma.currentPage.selection;
  console.log(`📍 Selection changed: ${selection.length} items selected`);
  
  // Send selection info to UI
  figma.ui.postMessage({
    type: 'selection-changed',
    count: selection.length
  });
}

/**
 * Handle messages from UI
 */
async function handleUIMessage(message) {
  try {
    console.log('📨 Received UI message:', message.type);
    
    switch (message.type) {
      case 'scan-selection':
        await handleScanSelection();
        break;
        
      case 'generate-code':
        await handleGenerateCode(message.componentData);
        break;
        
      default:
        console.warn('⚠️ Unknown UI message type:', message.type);
    }
  } catch (error) {
    console.error('❌ Error handling UI message:', error);
    figma.ui.postMessage({
      type: 'error',
      error: error.message
    });
  }
}

/**
 * Handle scan selection request using Code Connect detection
 */
async function handleScanSelection() {
  const selection = figma.currentPage.selection;
  
  if (selection.length === 0) {
    figma.ui.postMessage({
      type: 'no-selection',
      message: 'Please select one or more elements in Figma first'
    });
    return;
  }

  console.log(`🔍 Scanning ${selection.length} selected items with Code Connect...`);
  
  try {
    // Use Code Connect detector to analyze selection
    const results = [];
    
    for (const node of selection) {
      const detectedComponents = await codeConnectDetector.detectComponents(node);
      
      if (detectedComponents.length > 0) {
        results.push({
          id: node.id,
          name: node.name,
          type: node.type,
          components: detectedComponents.map(result => ({
            component: result.mapping.component,
            type: result.mapping.type,
            import: result.mapping.import,
            path: result.mapping.path,
            props: result.mapping.props || [],
            confidence: result.confidence,
            source: result.source,
            codeConnectKey: result.mapping.key
          }))
        });
      }
    }

    console.log(`✅ Found ${results.length} mappable components`);
    
    // Send results to UI
    figma.ui.postMessage({
      type: 'analysis-complete',
      results: results,
      message: `Found ${results.length} SDS components using Code Connect mappings`
    });
    
  } catch (error) {
    console.error('❌ Error during scan:', error);
    figma.ui.postMessage({
      type: 'error',
      error: error.message
    });
  }
}

/**
 * Generate SDS-ready code using Code Connect mappings
 */
async function handleGenerateCode(componentData) {
  try {
    console.log('🎯 Generating code for components:', componentData);
    
    const code = generateSDSCodeFromComponents(componentData);
    
    figma.ui.postMessage({
      type: 'code-generated',
      code: code
    });
    
  } catch (error) {
    console.error('❌ Error generating code:', error);
    figma.ui.postMessage({
      type: 'error',
      error: error.message
    });
  }
}

/**
 * Generate SDS code from detected components using Code Connect mappings
 */
function generateSDSCodeFromComponents(componentData) {
  if (!componentData || componentData.length === 0) {
    return '// No components selected or detected';
  }

  // Generate imports based on detected components
  const imports = new Set();
  const codeSegments = [];

  componentData.forEach(item => {
    if (item.components && item.components.length > 0) {
      item.components.forEach(comp => {
        // Add import
        imports.add(comp.import);
        
        // Generate component usage
        const props = generatePropsFromNode(comp);
        codeSegments.push(`        <${comp.component}${props}>${getComponentChildren(comp)}</${comp.component}>`);
      });
    }
  });

  // Build final code
  let code = '// Generated SDS Code using Code Connect mappings\n';
  code += 'import React from "react";\n';
  
  // Add unique imports
  for (const importStatement of imports) {
    code += importStatement + '\n';
  }
  
  code += 'import { Flex, Section } from "layout";\n\n';
  code += 'export default function GeneratedComponent() {\n';
  code += '  return (\n';
  code += '    <Section padding="600">\n';
  code += '      <Flex direction="column" gap="400">\n';
  
  codeSegments.forEach(segment => {
    code += segment + '\n';
  });
  
  code += '      </Flex>\n';
  code += '    </Section>\n';
  code += '  );\n';
  code += '}\n';
  
  return code;
}

/**
 * Generate props string for a component
 */
function generatePropsFromNode(component) {
  const props = [];
  
  // Add default props based on component type
  switch (component.type) {
    case 'button':
      props.push('variant="primary"');
      break;
    case 'input':
      props.push('placeholder="Enter text"');
      break;
    case 'card':
      props.push('title="Card Title"');
      break;
  }
  
  return props.length > 0 ? ' ' + props.join(' ') : '';
}

/**
 * Get children content for a component
 */
function getComponentChildren(component) {
  switch (component.type) {
    case 'button':
      return 'Button Text';
    case 'text':
      return 'Text Content';
    case 'input':
      return '';
    default:
      return component.component.includes('Text') ? 'Text Content' : '';
  }
}

// ===== PLUGIN LIFECYCLE =====

// Initialize when plugin starts
initializePlugin();
    console.log('✅ Plugin initialization complete');
    
    // Send initial selection to UI
    handleSelectionChange();

  } catch (error) {
    console.error('❌ Plugin initialization failed:', error);
    figma.ui.postMessage({
      type: 'error',
      error: error.message
    });
  }
}

/**
 * Handle selection changes
 */
function handleSelectionChange() {
  const selection = figma.currentPage.selection;
  console.log(`📋 Selection changed: ${selection.length} items`);
  
  // Send selection info to UI
  figma.ui.postMessage({
    type: 'selection-changed',
    selection: selection.map(node => ({
      id: node.id,
      name: node.name,
      type: node.type
    }))
  });
}

/**
 * Handle messages from UI
 */
async function handleUIMessage(message) {
  console.log('📬 Received UI message:', message.type);
  
  try {
    switch (message.type) {
      case 'get-selection':
        // Send current selection to UI
        handleSelectionChange();
        break;
        
      case 'scan-selection':
        await handleScanSelection();
        break;
        
      case 'generate-code':
        await handleGenerateCode(message.componentData);
        break;
        
      default:
        console.warn('⚠️ Unknown UI message type:', message.type);
    }
  } catch (error) {
    console.error('❌ Error handling UI message:', error);
    figma.ui.postMessage({
      type: 'error',
      error: error.message
    });
  }
}

/**
 * Generate SDS-ready code from selection
 */
function generateSDSCode(selection) {
  if (!selection || selection.length === 0) {
    return '// No components selected';
  }

  let code = '// Generated SDS Code\n';
  code += 'import React from "react";\n';
  code += 'import { Button, Text, Flex, Section } from "ui/primitives";\n\n';
  
  code += 'export default function GeneratedComponent() {\n';
  code += '  return (\n';
  code += '    <Section padding="600">\n';
  code += '      <Flex direction="column" gap="400">\n';
  
  for (let i = 0; i < selection.length; i++) {
    const node = selection[i];
    code += generateNodeCode(node, '        ');
  }
  
  code += '      </Flex>\n';
  code += '    </Section>\n';
  code += '  );\n';
  code += '}\n';
  
  return code;
}

/**
 * Generate code for individual node
 */
function generateNodeCode(node, indent = '') {
  switch (node.type) {
    case 'TEXT':
      return `${indent}<Text>${node.characters || 'Text Content'}</Text>\n`;
    
    case 'RECTANGLE':
    case 'FRAME':
      if (node.name.toLowerCase().includes('button')) {
        return `${indent}<Button variant="primary">${node.name}</Button>\n`;
      }
      return `${indent}<div className="frame">{/* ${node.name} */}</div>\n`;
    
    case 'COMPONENT':
    case 'INSTANCE': {
      const componentName = node.name.replace(/\s+/g, '');
      return `${indent}<${componentName} />\n`;
    }
    
    default:
      return `${indent}{/* ${node.type}: ${node.name} */}\n`;
  }
}

/**
 * Handle scan selection request
 */
async function handleScanSelection() {
  const selection = figma.currentPage.selection;
  
  if (selection.length === 0) {
    figma.ui.postMessage({
      type: 'analysis-complete',
      data: null
    });
    return;
  }

  console.log(`🔍 Scanning ${selection.length} selected items...`);
  
  // Analyze each selected node
  const results = [];
  
  for (const node of selection) {
    try {
      // Basic node analysis
      const analysisResult = {
        id: node.id,
        name: node.name,
        type: node.type,
        detectedComponents: [],
        properties: {}
      };

      // Component detection based on node properties
      if (node.type === 'COMPONENT' || node.type === 'INSTANCE') {
        analysisResult.detectedComponents.push({
          component: 'Component',
          type: 'component',
          path: 'src/ui/primitives/Component',
          import: "import { Component } from 'primitives';"
        });
      }

      if (node.type === 'TEXT') {
        const isHeading = node.name.toLowerCase().includes('heading') || 
                         node.name.toLowerCase().includes('title');
        analysisResult.detectedComponents.push({
          component: isHeading ? 'TextHeading' : 'Text',
          type: 'text',
          path: isHeading ? 'src/ui/primitives/Text/TextHeading' : 'src/ui/primitives/Text/Text',
          import: isHeading ? "import { TextHeading } from 'primitives';" : "import { Text } from 'primitives';"
        });
        analysisResult.properties.textContent = node.characters;
      }

      if (node.type === 'RECTANGLE' || node.type === 'FRAME') {
        if (node.name.toLowerCase().includes('button')) {
          analysisResult.detectedComponents.push({
            component: 'Button',
            type: 'button',
            path: 'src/ui/primitives/Button/Button',
            import: "import { Button } from 'primitives';"
          });
        } else if (node.name.toLowerCase().includes('card')) {
          analysisResult.detectedComponents.push({
            component: 'Card',
            type: 'card',
            path: 'src/ui/compositions/Cards/Card',
            import: "import { Card } from 'compositions';"
          });
        } else if (node.name.toLowerCase().includes('header')) {
          analysisResult.detectedComponents.push({
            component: 'Header',
            type: 'header',
            path: 'src/ui/compositions/Headers/Header',
            import: "import { Header } from 'compositions';"
          });
        }
        
        analysisResult.properties.width = node.width;
        analysisResult.properties.height = node.height;
      }

      // Extract basic fill color
      if (node.fills && Array.isArray(node.fills) && node.fills.length > 0) {
        const fill = node.fills[0];
        if (fill.type === 'SOLID') {
          analysisResult.properties.fillColor = {
            r: Math.round(fill.color.r * 255),
            g: Math.round(fill.color.g * 255),
            b: Math.round(fill.color.b * 255)
          };
        }
      }

      results.push(analysisResult);

    } catch (nodeError) {
      console.error(`❌ Error analyzing node ${node.name}:`, nodeError);
    }
  }

  console.log('✅ Scan complete:', results);
  
  figma.ui.postMessage({
    type: 'analysis-complete',
    results: results
  });
}

// ===== FIGMA EVENT HANDLERS =====

// Handle plugin parameters (if provided)
figma.parameters.on('input', ({ parameters, key, query, result }) => {
  console.log('📝 Parameter input:', { key, query });
  
  switch (key) {
    case 'component-type': {
      const componentTypes = ['Button', 'Input', 'Card', 'Header', 'Form', 'Navigation'];
      result.setSuggestions(
        componentTypes
          .filter(type => type.toLowerCase().includes(query.toLowerCase()))
          .map(type => ({ name: type, data: { type } }))
      );
      break;
    }
      
    case 'include-variables':
      result.setSuggestions([
        { name: 'Yes', data: { include: true } },
        { name: 'No', data: { include: false } }
      ]);
      break;
  }
});

// Handle plugin run event (main entry point)
figma.on('run', async ({ command, parameters }) => {
  console.log('🏃 Plugin run event:', { command, parameters });
  
  try {
    await initializePlugin();
    
    // If parameters were provided, process them
    if (parameters) {
      console.log('📋 Processing parameters:', parameters);
      // Handle any parameter-specific logic here
    }
    
  } catch (error) {
    console.error('❌ Plugin run failed:', error);
    figma.notify('Plugin failed to start: ' + error.message, { error: true });
    figma.closePlugin();
  }
});

// Ensure proper cleanup
figma.on('close', () => {
  console.log('👋 Plugin closing...');
});

console.log('📋 SDS Component Scanner main thread code loaded');
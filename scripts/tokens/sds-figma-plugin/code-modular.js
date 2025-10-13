// ===== SDS FIGMA PLUGIN - MODULAR VERSION =====
// Main plugin file that loads and integrates all modules
// Follows Figma documentation patterns for Dev Mode, Variables API, and async operations

// Load all modules in the correct order
// These are loaded as script tags in the HTML, making them available as window globals

// This is the main plugin code that will be loaded by Figma
// The HTML file includes all module scripts before this main script

// ===== MODULE AVAILABILITY CHECK =====
function checkModuleAvailability() {
  const modules = {
    variables: typeof window.variablesModule !== 'undefined',
    components: typeof window.componentsModule !== 'undefined',
    codeGen: typeof window.codeGenModule !== 'undefined',
    devMode: typeof window.devModeModule !== 'undefined'
  };
  
  console.log('📦 Module availability:', modules);
  return modules;
}

// ===== CONFIGURATION =====
const SDS_CONFIG = {
  documentUrls: {
    BUTTON: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-22768&t=1b1mSdGJpZ8jMdwb-4",
    ICON_BUTTON: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-23138&t=1b1mSdGJpZ8jMdwb-4",
    INPUT_FIELD: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-24062&t=1b1mSdGJpZ8jMdwb-4",
    HEADER: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-22546&t=1b1mSdGJpZ8jMdwb-4",
    HEADER_AUTH: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-22577&t=1b1mSdGJpZ8jMdwb-4",
    NAVIGATION_PILL: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-23577&t=1b1mSdGJpZ8jMdwb-4",
    CARD: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-22423&t=1b1mSdGJpZ8jMdwb-4",
    PRICING_CARD: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-22454&t=1b1mSdGJpZ8jMdwb-4",
    RADIO_GROUP: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-23847&t=1b1mSdGJpZ8jMdwb-4",
    SEARCH: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-24185&t=1b1mSdGJpZ8jMdwb-4",
    TEXT: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-24308&t=1b1mSdGJpZ8jMdwb-4",
    TEXT_HEADING: "https://www.figma.com/design/DPLnlwrYBfNHBdmJiKSkCZ/SDS?node-id=2041-24339&t=1b1mSdGJpZ8jMdwb-4"
  }
};

// ===== MAIN PLUGIN FUNCTIONS =====

async function initializePlugin() {
  try {
    console.log('🚀 Initializing SDS Component Scanner (Modular Version)...');
    
    // Check module availability
    const modules = checkModuleAvailability();
    
    // Initialize Variables API if available
    if (modules.variables && window.variablesModule) {
      try {
        const variables = await window.variablesModule.getLocalVariables();
        console.log('✅ Variables API initialized:', Object.keys(variables).length, 'categories');
      } catch (error) {
        console.log('⚠️ Variables API fallback mode:', error.message);
      }
    }
    
    // Initialize Dev Mode if available
    if (modules.devMode && window.devModeModule) {
      try {
        const devConfig = await window.devModeModule.initializeDevMode();
        console.log('🔧 Dev Mode configured:', devConfig);
      } catch (error) {
        console.log('⚠️ Dev Mode initialization failed:', error.message);
      }
    }
    
    // Send initialization complete message
    figma.ui.postMessage({
      type: 'plugin-ready',
      config: SDS_CONFIG,
      modules: modules,
      version: 'modular-v1.0'
    });
    
    console.log('✅ SDS Component Scanner ready (Modular Version)!');
    
  } catch (error) {
    console.error('❌ Error initializing plugin:', error);
    figma.ui.postMessage({
      type: 'initialization-error',
      error: error.message
    });
  }
}

// ===== MESSAGE HANDLERS =====

async function handleScanSelection() {
  try {
    if (!window.componentsModule) {
      throw new Error('Components module not available');
    }
    
    console.log('🔍 Scanning current selection with components module...');
    await window.componentsModule.analyzeSelection();
    
  } catch (error) {
    console.error('❌ Error scanning selection:', error);
    figma.ui.postMessage({
      type: 'error',
      message: error.message
    });
  }
}

async function handleGenerateCode(componentData) {
  try {
    if (!window.codeGenModule) {
      throw new Error('Code generation module not available');
    }
    
    console.log('⚡ Generating code with codeGen module...');
    const code = await window.codeGenModule.generateSdsCode(componentData);
    
    figma.ui.postMessage({
      type: 'code-generated',
      code: code,
      componentName: componentData.name
    });
    
  } catch (error) {
    console.error('❌ Error generating code:', error);
    figma.ui.postMessage({
      type: 'error',
      message: 'Code generation failed: ' + error.message
    });
  }
}

async function handleInspectNode(nodeId) {
  try {
    if (!window.devModeModule) {
      throw new Error('Dev Mode module not available');
    }
    
    console.log('🔍 Inspecting node with devMode module:', nodeId);
    const details = await window.devModeModule.getNodeDetailsForInspection(nodeId);
    
    figma.ui.postMessage({
      type: 'node-details',
      details: details,
      nodeId: nodeId
    });
    
  } catch (error) {
    console.error('❌ Error inspecting node:', error);
    figma.ui.postMessage({
      type: 'error',
      message: 'Node inspection failed: ' + error.message
    });
  }
}

async function handleGetVariables() {
  try {
    if (!window.variablesModule) {
      throw new Error('Variables module not available');
    }
    
    console.log('📊 Getting variables with variables module...');
    const variables = await window.variablesModule.getLocalVariables();
    
    figma.ui.postMessage({
      type: 'variables-loaded',
      variables: variables
    });
    
  } catch (error) {
    console.error('❌ Error getting variables:', error);
    figma.ui.postMessage({
      type: 'error',
      message: 'Variables loading failed: ' + error.message
    });
  }
}

// ===== LEGACY FUNCTION SUPPORT =====
// These maintain compatibility with the existing UI

function scanCurrentSelection() {
  handleScanSelection();
}

function generateComponentCode(analysisResult) {
  handleGenerateCode(analysisResult);
}

// ===== PLUGIN INITIALIZATION =====

// Show the UI
figma.showUI(__html__, { width: 400, height: 600 });

// Set up message handling
figma.ui.onmessage = async (msg) => {
  console.log('📨 Received message:', msg.type);
  
  try {
    switch (msg.type) {
      case 'scan-selection':
        await handleScanSelection();
        break;
        
      case 'generate-code':
        await handleGenerateCode(msg.componentData);
        break;
        
      case 'inspect-node':
        await handleInspectNode(msg.nodeId);
        break;
        
      case 'get-variables':
        await handleGetVariables();
        break;
        
      case 'resize-ui':
        if (window.devModeModule) {
          window.devModeModule.resizeUIForDevMode(msg.width, msg.height);
        } else {
          figma.ui.resize(msg.width, msg.height);
        }
        break;
        
      case 'health-check':
        const modules = checkModuleAvailability();
        figma.ui.postMessage({
          type: 'health-status',
          modules: modules,
          timestamp: Date.now()
        });
        break;
        
      default:
        console.log('⚠️ Unknown message type:', msg.type);
    }
    
  } catch (error) {
    console.error('❌ Error handling message:', error);
    figma.ui.postMessage({
      type: 'error',
      message: error.message,
      originalType: msg.type
    });
  }
};

// Auto-resize UI
figma.ui.resize(400, 600);

// Initialize plugin after a short delay to ensure modules are loaded
setTimeout(initializePlugin, 250);

console.log('📦 SDS Figma Plugin (Modular Version) loaded - waiting for initialization...');
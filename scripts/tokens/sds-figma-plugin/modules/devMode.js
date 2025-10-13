// ===== DEV MODE MODULE =====
// This module handles Dev Mode specific features and UI interactions
// Follows Figma documentation patterns for read-only access and proper selection handling

/**
 * Dev Mode configuration and state management
 * Follows Figma documentation patterns for read-only access
 */
const DevModeConfig = {
  isDevMode: false,
  hasInspectAccess: false,
  supportsVariables: false,
  supportsCodeGeneration: false
};

/**
 * Initialize Dev Mode features
 * Checks capabilities and sets up appropriate UI
 */
async function initializeDevMode() {
  try {
    // Check if we're in Dev Mode environment
    DevModeConfig.isDevMode = figma.editorType === 'dev';
    
    // Check available capabilities
    DevModeConfig.hasInspectAccess = checkInspectCapability();
    DevModeConfig.supportsVariables = checkVariablesSupport();
    DevModeConfig.supportsCodeGeneration = checkCodeGenerationSupport();
    
    console.log('🔧 Dev Mode initialized:', DevModeConfig);
    
    // Set up Dev Mode specific UI
    if (DevModeConfig.isDevMode) {
      setupDevModeUI();
      enableInspectMode();
    } else {
      setupDesignModeUI();
    }
    
    // Set up selection listeners with proper Dev Mode patterns
    setupSelectionListeners();
    
    return DevModeConfig;
    
  } catch (error) {
    console.error('❌ Error initializing Dev Mode:', error);
    return DevModeConfig;
  }
}

/**
 * Check if inspect capability is available
 * Based on Figma Dev Mode documentation
 */
function checkInspectCapability() {
  try {
    // Check manifest capabilities for 'inspect'
    return true; // Assume available based on manifest configuration
  } catch (error) {
    console.error('❌ Error checking inspect capability:', error);
    return false;
  }
}

/**
 * Check if Variables API is supported
 */
function checkVariablesSupport() {
  try {
    return figma.variables && 
           typeof figma.variables.getLocalVariableCollectionsAsync === 'function';
  } catch (error) {
    console.error('❌ Error checking variables support:', error);
    return false;
  }
}

/**
 * Check if code generation is supported
 */
function checkCodeGenerationSupport() {
  try {
    // Check if we have access to necessary modules
    return window.componentsModule && window.codeGenModule;
  } catch (error) {
    console.error('❌ Error checking code generation support:', error);
    return false;
  }
}

/**
 * Setup Dev Mode specific UI
 * Responsive design for inspect panel
 */
function setupDevModeUI() {
  console.log('🎨 Setting up Dev Mode UI');
  
  figma.ui.postMessage({
    type: 'setup-dev-mode',
    config: DevModeConfig,
    features: {
      inspect: DevModeConfig.hasInspectAccess,
      variables: DevModeConfig.supportsVariables,
      codeGeneration: DevModeConfig.supportsCodeGeneration
    }
  });
}

/**
 * Setup Design Mode UI (fallback)
 */
function setupDesignModeUI() {
  console.log('✏️ Setting up Design Mode UI');
  
  figma.ui.postMessage({
    type: 'setup-design-mode',
    config: DevModeConfig,
    message: 'This plugin is optimized for Dev Mode. Switch to Dev Mode for full functionality.'
  });
}

/**
 * Enable inspect mode for Dev Mode
 * Follows read-only access patterns
 */
function enableInspectMode() {
  try {
    if (!DevModeConfig.hasInspectAccess) {
      console.log('ℹ️ Inspect mode not available');
      return;
    }
    
    console.log('🔍 Enabling inspect mode');
    
    // Set up read-only inspection patterns
    setupReadOnlyInspection();
    
  } catch (error) {
    console.error('❌ Error enabling inspect mode:', error);
  }
}

/**
 * Setup read-only inspection following Figma patterns
 * Dev Mode has read-only access to document
 */
function setupReadOnlyInspection() {
  // In Dev Mode, we can only read document properties
  // No modifications are allowed
  
  figma.ui.postMessage({
    type: 'inspect-mode-ready',
    capabilities: {
      canRead: true,
      canModify: false,
      canAnalyze: true,
      canGenerateCode: DevModeConfig.supportsCodeGeneration
    }
  });
}

/**
 * Setup selection listeners with Dev Mode patterns
 * Handles selection changes and updates UI accordingly
 */
function setupSelectionListeners() {
  // Listen for selection changes
  figma.on('selectionchange', async () => {
    try {
      await handleSelectionChange();
    } catch (error) {
      console.error('❌ Error handling selection change:', error);
    }
  });
  
  // Listen for document changes (if in Design Mode)
  if (!DevModeConfig.isDevMode) {
    figma.on('documentchange', () => {
      handleDocumentChange();
    });
  }
}

/**
 * Handle selection changes with async patterns
 * Updates UI with selection information
 */
async function handleSelectionChange() {
  const selection = figma.currentPage.selection;
  
  console.log(`📋 Selection changed: ${selection.length} items`);
  
  if (selection.length === 0) {
    figma.ui.postMessage({
      type: 'selection-cleared',
      message: 'No elements selected'
    });
    return;
  }
  
  // Get basic selection info immediately
  const selectionInfo = selection.map(node => ({
    id: node.id,
    name: node.name,
    type: node.type,
    width: node.width,
    height: node.height
  }));
  
  figma.ui.postMessage({
    type: 'selection-changed',
    selection: selectionInfo,
    count: selection.length
  });
  
  // Perform detailed analysis if supported
  if (DevModeConfig.supportsCodeGeneration) {
    try {
      await performSelectionAnalysis(selection);
    } catch (error) {
      console.error('❌ Error analyzing selection:', error);
    }
  }
}

/**
 * Perform detailed selection analysis for Dev Mode
 * Uses async patterns for thorough component detection
 */
async function performSelectionAnalysis(selection) {
  if (!window.componentsModule) {
    console.log('ℹ️ Component analysis not available');
    return;
  }
  
  console.log('🔍 Performing detailed selection analysis...');
  
  figma.ui.postMessage({
    type: 'analysis-started',
    message: 'Analyzing selection for SDS components...'
  });
  
  try {
    // Use components module for analysis
    const results = await Promise.all(
      selection.map(node => window.componentsModule.analyzeNodeAsync(node))
    );
    
    figma.ui.postMessage({
      type: 'analysis-complete',
      results: results,
      devMode: true
    });
    
  } catch (error) {
    console.error('❌ Error in selection analysis:', error);
    figma.ui.postMessage({
      type: 'analysis-error',
      error: error.message
    });
  }
}

/**
 * Handle document changes (Design Mode only)
 */
function handleDocumentChange() {
  if (DevModeConfig.isDevMode) {
    return; // No document modification in Dev Mode
  }
  
  console.log('📝 Document changed');
  
  figma.ui.postMessage({
    type: 'document-changed',
    message: 'Document has been modified'
  });
}

/**
 * Get node details for Dev Mode inspection
 * Read-only access with comprehensive property extraction
 */
async function getNodeDetailsForInspection(nodeId) {
  try {
    const node = await figma.getNodeByIdAsync(nodeId);
    
    if (!node) {
      throw new Error(`Node with ID ${nodeId} not found`);
    }
    
    // Load node for detailed inspection
    await node.loadAsync();
    
    const details = {
      // Basic properties
      id: node.id,
      name: node.name,
      type: node.type,
      visible: node.visible,
      
      // Dimensions
      width: node.width,
      height: node.height,
      x: node.x,
      y: node.y,
      
      // Visual properties
      fills: node.fills,
      strokes: node.strokes,
      cornerRadius: node.cornerRadius,
      opacity: node.opacity,
      
      // Layout properties
      layoutMode: node.layoutMode,
      itemSpacing: node.itemSpacing,
      paddingLeft: node.paddingLeft,
      paddingRight: node.paddingRight,
      paddingTop: node.paddingTop,
      paddingBottom: node.paddingBottom,
      
      // Variables (if supported)
      boundVariables: DevModeConfig.supportsVariables ? 
        (window.variablesModule && await window.variablesModule.getBoundVariables(node)) : null,
      
      // Component information
      componentProperties: node.componentProperties,
      variantProperties: node.variantProperties,
      
      // Children info
      childrenCount: node.children ? node.children.length : 0,
      hasChildren: node.children && node.children.length > 0
    };
    
    // Add text-specific properties
    if (node.type === 'TEXT') {
      details.textProperties = {
        characters: node.characters,
        fontSize: node.fontSize,
        fontName: node.fontName,
        fontWeight: node.fontWeight,
        textAlignHorizontal: node.textAlignHorizontal,
        textAlignVertical: node.textAlignVertical,
        lineHeight: node.lineHeight,
        letterSpacing: node.letterSpacing
      };
    }
    
    return details;
    
  } catch (error) {
    console.error('❌ Error getting node details:', error);
    throw error;
  }
}

/**
 * Generate code for Dev Mode inspection
 * Integrates with code generation module
 */
async function generateCodeForInspection(analysisResult) {
  if (!DevModeConfig.supportsCodeGeneration || !window.codeGenModule) {
    throw new Error('Code generation not supported in current environment');
  }
  
  try {
    console.log('⚡ Generating code for Dev Mode inspection');
    
    const code = await window.codeGenModule.generateSdsCode(analysisResult);
    
    figma.ui.postMessage({
      type: 'code-generated',
      code: code,
      componentName: analysisResult.name,
      devMode: true
    });
    
    return code;
    
  } catch (error) {
    console.error('❌ Error generating code for inspection:', error);
    throw error;
  }
}

/**
 * Export node data for external tools (VSCode, etc.)
 * Follows Dev Mode integration patterns
 */
async function exportNodeData(nodeId, format = 'json') {
  try {
    const details = await getNodeDetailsForInspection(nodeId);
    
    let exportData;
    
    switch (format) {
      case 'json':
        exportData = JSON.stringify(details, null, 2);
        break;
        
      case 'summary':
        exportData = generateNodeSummary(details);
        break;
        
      case 'tokens':
        exportData = extractDesignTokens(details);
        break;
        
      default:
        exportData = details;
    }
    
    figma.ui.postMessage({
      type: 'node-exported',
      data: exportData,
      format: format,
      nodeId: nodeId
    });
    
    return exportData;
    
  } catch (error) {
    console.error('❌ Error exporting node data:', error);
    throw error;
  }
}

/**
 * Generate human-readable node summary
 */
function generateNodeSummary(details) {
  let summary = `## ${details.name} (${details.type})\n\n`;
  
  summary += `- **Dimensions**: ${details.width} × ${details.height}\n`;
  summary += `- **Position**: (${details.x}, ${details.y})\n`;
  
  if (details.fills && details.fills.length > 0) {
    summary += `- **Background**: ${details.fills[0].type}\n`;
  }
  
  if (details.boundVariables && Object.keys(details.boundVariables).length > 0) {
    summary += `- **Design Tokens**: ${Object.keys(details.boundVariables).length} variables\n`;
  }
  
  if (details.hasChildren) {
    summary += `- **Children**: ${details.childrenCount} elements\n`;
  }
  
  return summary;
}

/**
 * Extract design tokens from node details
 */
function extractDesignTokens(details) {
  const tokens = {};
  
  if (details.boundVariables) {
    Object.entries(details.boundVariables).forEach(([property, bound]) => {
      if (bound.sdsToken) {
        tokens[property] = bound.sdsToken;
      }
    });
  }
  
  return tokens;
}

/**
 * Resize UI for Dev Mode responsiveness
 * Adapts to different screen sizes and contexts
 */
function resizeUIForDevMode(width, height) {
  const minWidth = 320;
  const minHeight = 400;
  const maxWidth = 800;
  const maxHeight = 1200;
  
  const clampedWidth = Math.max(minWidth, Math.min(maxWidth, width));
  const clampedHeight = Math.max(minHeight, Math.min(maxHeight, height));
  
  figma.ui.resize(clampedWidth, clampedHeight);
  
  figma.ui.postMessage({
    type: 'ui-resized',
    width: clampedWidth,
    height: clampedHeight,
    responsive: true
  });
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DevModeConfig,
    initializeDevMode,
    setupDevModeUI,
    setupSelectionListeners,
    handleSelectionChange,
    getNodeDetailsForInspection,
    generateCodeForInspection,
    exportNodeData,
    resizeUIForDevMode
  };
} else {
  // For Figma plugin environment
  if (typeof window !== 'undefined') {
    window.devModeModule = {
      DevModeConfig,
      initializeDevMode,
      setupDevModeUI,
      setupSelectionListeners,
      handleSelectionChange,
      getNodeDetailsForInspection,
      generateCodeForInspection,
      exportNodeData,
      resizeUIForDevMode
    };
    console.log('📦 DevMode module exported to window.devModeModule');
  } else {
    console.warn('⚠️ Window object not available for devMode module export');
  }
}
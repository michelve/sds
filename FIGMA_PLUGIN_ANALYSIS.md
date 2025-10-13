# Figma Plugin Codebase Analysis & Figma API Implementation

## Overview

This document summarizes the analysis of the SDS Figma plugin codebase and the proper application of Figma API patterns for plugin development.

## Plugin Architecture Analysis

### Two Implementation Approaches Found:

#### 1. `code-figma-proper.js` ✅ **CORRECT APPROACH**
- **Architecture**: Modern Figma plugin patterns with proper API usage
- **Main Thread Context**: Correctly uses `figma` global API in sandbox context
- **Lifecycle Management**: Uses `figma.on('run')` for proper plugin initialization
- **UI Communication**: Proper `figma.ui.postMessage` and `figma.ui.onmessage` setup
- **Selection Handling**: Uses `figma.on('selectionchange')` for real-time updates
- **Status**: ✅ **ACTIVE** - Updated manifest to use this file

#### 2. `code-modular.js` ❌ **BROKEN APPROACH**
- **Architecture**: Attempted modular approach with fundamental flaw
- **Critical Error**: Tries to access `window.componentsModule` from main thread
- **Context Violation**: Main thread cannot access UI iframe window objects
- **Error Message**: "cannot read property 'componentsModule' of undefined"
- **Status**: ❌ **DEPRECATED** - Removed from manifest

## Figma API Patterns Applied

### 1. **Plugin Lifecycle Management**
```javascript
// Modern approach using figma.on('run')
figma.on('run', async ({ command, parameters }) => {
  await initializePlugin();
  // Plugin logic here
});

// Proper cleanup
figma.on('close', () => {
  console.log('🔄 Plugin closed');
});
```

### 2. **UI Communication Architecture**
```javascript
// Initialize UI
figma.showUI(__html__, {
  width: 400,
  height: 480,
  themeColors: true
});

// Set up message handling
figma.ui.onmessage = handleUIMessage;

// Send data to UI
figma.ui.postMessage({
  type: 'selection-changed',
  selection: selectionData
});
```

### 3. **Selection Change Handling**
```javascript
// Real-time selection monitoring
figma.on('selectionchange', handleSelectionChange);

function handleSelectionChange() {
  const selection = figma.currentPage.selection;
  figma.ui.postMessage({
    type: 'selection-changed',
    selection: analyzeSelection(selection)
  });
}
```

### 4. **Component Analysis & Code Generation**
```javascript
// Analyze Figma nodes for SDS components
async function handleScanSelection() {
  const selection = figma.currentPage.selection;
  const analysis = analyzeNodesForSDSComponents(selection);
  
  figma.ui.postMessage({
    type: 'analysis-complete',
    results: [{ // UI expects results array format
      name: 'Selection Analysis',
      detectedComponents: analysis
    }]
  });
}

// Generate SDS-compatible code
async function handleGenerateCode(componentData) {
  const code = generateSDSCodeFromComponent(componentData);
  figma.ui.postMessage({
    type: 'code-generated',
    code: code
  });
}
```

## Key Figma API Concepts Applied

### 1. **Thread Separation**
- **Main Thread (Sandbox)**: Has access to `figma` API, runs plugin logic
- **UI Thread (Iframe)**: Has access to DOM/window, runs UI code
- **Communication**: Only through `postMessage` - no shared objects

### 2. **Node Access Patterns**
```javascript
// Current selection access
const selection = figma.currentPage.selection;

// Node property access
node.name, node.type, node.width, node.height

// Text node specific
if (node.type === 'TEXT') {
  const text = node.characters;
  const fontFamily = node.fontName.family;
}

// Frame/Component specific
if (node.type === 'FRAME' || node.type === 'COMPONENT') {
  const children = node.children;
}
```

### 3. **Plugin Permissions & Capabilities**
```javascript
// Read access to document
figma.currentPage.selection
figma.currentPage.findAll()

// UI management
figma.showUI()
figma.ui.postMessage()
figma.closePlugin()

// User feedback
figma.notify('Message', { error: false })
```

## SDS-Specific Implementation

### 1. **Component Detection Logic**
- Analyzes Figma nodes to identify SDS component patterns
- Maps visual properties to SDS component props
- Detects layout patterns (Flex, Section usage)

### 2. **Code Generation Strategy**
- Generates React components using SDS primitives
- Maps Figma styles to SDS design tokens
- Creates proper import statements for SDS components

### 3. **Design Token Integration**
- Reads Figma variables and local styles
- Maps to CSS custom properties in SDS theme
- Ensures generated code uses design tokens not hardcoded values

## Fixed Issues

### 1. **Architecture Problem**
- **Issue**: Plugin using broken modular approach
- **Solution**: Switched to proper Figma API patterns in `code-figma-proper.js`
- **Result**: Plugin now follows Figma's recommended architecture

### 2. **Data Format Compatibility**
- **Issue**: UI expected `results` array with `detectedComponents`
- **Solution**: Updated scan function to send compatible data format
- **Result**: UI can now properly display analysis results

### 3. **Message Handling**
- **Issue**: Missing handler for `generate-code` message type
- **Solution**: Added `handleGenerateCode` function with proper SDS code generation
- **Result**: Full UI workflow now supported

## Plugin Structure Summary

```
sds-figma-plugin/
├── manifest.json           # Plugin configuration (updated to use code-figma-proper.js)
├── code-figma-proper.js    # ✅ Main plugin file (ACTIVE)
├── code-modular.js         # ❌ Broken implementation (DEPRECATED)
├── ui-enhanced.html        # Plugin UI interface
└── modules/                # UI-side modules (only accessible in iframe)
    └── [various modules]
```

## Best Practices Applied

1. **Proper Context Separation**: Main thread vs UI thread responsibilities clearly defined
2. **Modern Lifecycle**: Using `figma.on('run')` instead of immediate execution
3. **Real-time Updates**: Selection change monitoring for better UX
4. **Error Handling**: Comprehensive try-catch blocks with user feedback
5. **SDS Integration**: Generated code follows SDS patterns and design tokens
6. **Message Protocol**: Consistent message types and data formats

## Conclusion

The plugin now follows proper Figma API patterns with:
- ✅ Correct thread architecture (main vs UI)
- ✅ Modern lifecycle management
- ✅ Proper UI communication
- ✅ SDS-compatible code generation
- ✅ Real-time selection monitoring
- ✅ Error handling and user feedback

The plugin is ready for use with the SDS design system and follows Figma's recommended development patterns.
// ===== SDS FIGMA PLUGIN - PROPER FIGMA EXECUTION MODEL =====
// Main plugin file following Figma's recommended patterns
// Runs in the main thread sandbox (not iframe) - no DOM/browser APIs available

console.log('🚀 SDS Component Scanner starting in main thread');

// ===== FIGMA PLUGIN LIFECYCLE =====

// Global state for the plugin
let isInitialized = false;
let currentDevMode = false;

/**
 * Initialize the plugin following Figma's execution model
 */
async function initializePlugin() {
  if (isInitialized) {
    console.log('✅ Plugin already initialized');
    return;
  }

  try {
    console.log('🔧 Initializing SDS Component Scanner...');
    
    // Check if we're in dev mode
    currentDevMode = figma.editorType === 'dev';
    console.log(`📍 Editor type: ${figma.editorType}`);
    
    // Load any required fonts for text manipulation
    try {
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      console.log('✅ Default font loaded');
    } catch (fontError) {
      console.warn('⚠️ Could not load Inter font, using system default');
    }

    // Set up the UI with proper theme support
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>SDS Component Scanner</title>
        <meta charset="utf-8">
        <style>
          body {
            font-family: var(--figma-color-text, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif);
            font-size: 12px;
            line-height: 1.5;
            margin: 0;
            padding: 16px;
            background: var(--figma-color-bg, #ffffff);
            color: var(--figma-color-text, #000000);
            min-height: 100vh;
          }
          .container {
            max-width: 400px;
            margin: 0 auto;
          }
          .header {
            background: var(--figma-color-bg-secondary, #f5f5f5);
            border: 1px solid var(--figma-color-border, #e6e6e6);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 16px;
            text-align: center;
          }
          .header h1 {
            margin: 0 0 8px 0;
            font-size: 18px;
            font-weight: 600;
            color: var(--figma-color-text, #000000);
          }
          .header p {
            margin: 0;
            color: var(--figma-color-text-secondary, #666666);
            font-size: 11px;
          }
          .status {
            padding: 8px 12px;
            border-radius: 4px;
            margin: 8px 0;
            font-weight: 500;
            font-size: 11px;
          }
          .success { 
            background: var(--figma-color-bg-success-tertiary, #cff7d3); 
            color: var(--figma-color-text-success, #009951);
            border: 1px solid var(--figma-color-border-success, #aff4c6);
          }
          .error { 
            background: var(--figma-color-bg-danger-tertiary, #ffe2e0); 
            color: var(--figma-color-text-danger, #dc3412);
            border: 1px solid var(--figma-color-border-danger, #ffc7c2);
          }
          .warning { 
            background: var(--figma-color-bg-warning-tertiary, #fff1c2); 
            color: var(--figma-color-text-warning, #b86200);
            border: 1px solid var(--figma-color-border-warning, #ffe8a3);
          }
          .info { 
            background: var(--figma-color-bg-selected-tertiary, #f2f9ff); 
            color: var(--figma-color-text-brand, #007be5);
            border: 1px solid var(--figma-color-border-brand, #bde3ff);
          }
          button {
            background: var(--figma-color-bg-brand, #007bff);
            color: var(--figma-color-text-onbrand, #ffffff);
            border: none;
            padding: 10px 16px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            margin: 4px;
            font-weight: 500;
          }
          button:hover:not(:disabled) {
            background: var(--figma-color-bg-brand-hover, #0056b3);
          }
          button:disabled {
            background: var(--figma-color-bg-disabled, #d9d9d9);
            color: var(--figma-color-text-disabled, #666666);
            cursor: not-allowed;
          }
          .panel {
            background: var(--figma-color-bg, #ffffff);
            border: 1px solid var(--figma-color-border, #e6e6e6);
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 16px;
          }
          .panel h3 {
            margin: 0 0 12px 0;
            font-size: 14px;
            font-weight: 600;
            color: var(--figma-color-text, #000000);
          }
          .selection-info {
            background: var(--figma-color-bg-secondary, #f5f5f5);
            border: 1px solid var(--figma-color-border, #e6e6e6);
            border-radius: 4px;
            padding: 12px;
            margin: 8px 0;
            font-size: 11px;
          }
          .log-container {
            max-height: 200px;
            overflow-y: auto;
            background: var(--figma-color-bg-inverse, #2c2c2c);
            color: var(--figma-color-text-oninverse, #ffffff);
            padding: 12px;
            border-radius: 4px;
            font-family: 'Monaco', 'Menlo', 'Consolas', monospace;
            font-size: 10px;
            line-height: 1.4;
            margin: 8px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 SDS Component Scanner</h1>
            <p>Select components to generate SDS-ready code</p>
          </div>

          <div class="panel">
            <h3>📊 Plugin Status</h3>
            <div id="plugin-status">
              <div class="status info">Plugin initializing...</div>
            </div>
          </div>

          <div class="panel">
            <h3>🎨 Current Selection</h3>
            <div id="selection-info" class="selection-info">
              No components selected
            </div>
            <button id="scan-button" onclick="scanSelection()" disabled>
              Scan Selection
            </button>
          </div>

          <div class="panel">
            <h3>📋 Results</h3>
            <div id="results"></div>
          </div>

          <div class="panel">
            <h3>🔍 Debug Log</h3>
            <button onclick="clearLog()">Clear Log</button>
            <div id="console-log" class="log-container"></div>
          </div>
        </div>

        <script>
          console.log('🎨 UI script starting...');
          
          // Global state
          let isPluginReady = false;
          let currentSelection = [];
          
          // Enhanced console logging
          const originalLog = console.log;
          const originalWarn = console.warn;
          const originalError = console.error;
          
          function appendToLog(message, type = 'log') {
            const logContainer = document.getElementById('console-log');
            const timestamp = new Date().toLocaleTimeString();
            const logLine = document.createElement('div');
            logLine.style.color = type === 'error' ? '#ff6b6b' : type === 'warn' ? '#ffd93d' : '#ffffff';
            logLine.textContent = '[' + timestamp + '] ' + message;
            logContainer.appendChild(logLine);
            logContainer.scrollTop = logContainer.scrollHeight;
          }
          
          console.log = function(...args) {
            originalLog.apply(console, args);
            appendToLog(args.join(' '), 'log');
          };
          
          console.warn = function(...args) {
            originalWarn.apply(console, args);
            appendToLog(args.join(' '), 'warn');
          };
          
          console.error = function(...args) {
            originalError.apply(console, args);
            appendToLog(args.join(' '), 'error');
          };
          
          function clearLog() {
            document.getElementById('console-log').innerHTML = '';
          }
          
          function updatePluginStatus(status, type = 'info') {
            const statusElement = document.getElementById('plugin-status');
            statusElement.innerHTML = '<div class="status ' + type + '">' + status + '</div>';
          }
          
          function updateSelectionInfo(selection) {
            const selectionInfo = document.getElementById('selection-info');
            const scanButton = document.getElementById('scan-button');
            
            if (!selection || selection.length === 0) {
              selectionInfo.textContent = 'No components selected';
              scanButton.disabled = true;
            } else {
              selectionInfo.textContent = 'Selected: ' + selection.length + ' item(s)';
              scanButton.disabled = !isPluginReady;
            }
          }
          
          function scanSelection() {
            if (!isPluginReady) {
              console.warn('⚠️ Plugin not ready for scanning');
              return;
            }
            
            console.log('🔍 Requesting selection scan...');
            parent.postMessage({ 
              pluginMessage: { 
                type: 'scan-selection',
                timestamp: Date.now()
              } 
            }, '*');
          }
          
          // Message handling from main thread
          window.addEventListener('message', (event) => {
            const message = event.data.pluginMessage;
            if (!message) return;
            
            console.log('📨 Received:', message.type);
            
            switch (message.type) {
              case 'plugin-ready':
                isPluginReady = true;
                updatePluginStatus('✅ Plugin ready', 'success');
                updateSelectionInfo(currentSelection);
                break;
                
              case 'selection-changed':
                currentSelection = message.selection || [];
                updateSelectionInfo(currentSelection);
                break;
                
              case 'scan-result':
                const results = document.getElementById('results');
                if (message.data) {
                  results.innerHTML = '<div class="status success">✅ Scan complete</div><pre>' + JSON.stringify(message.data, null, 2) + '</pre>';
                } else {
                  results.innerHTML = '<div class="status warning">⚠️ No components found</div>';
                }
                break;
                
              case 'error':
                console.error('❌ Plugin error:', message.error);
                updatePluginStatus('❌ Error: ' + message.error, 'error');
                break;
                
              default:
                console.log('📬 Unknown message type:', message.type);
            }
          });
          
          // Initialize UI
          updatePluginStatus('⏳ Waiting for plugin...', 'info');
          console.log('✅ UI initialized');
        </script>
      </body>
      </html>
    `;

    // Show UI with theme support
    figma.showUI(htmlContent, { 
      width: 480, 
      height: 720,
      themeColors: true  // Enable Figma CSS variables
    });

    // Set up selection change listener
    figma.on('selectionchange', handleSelectionChange);
    
    // Set up message handler for UI communication
    figma.ui.onmessage = handleUIMessage;

    isInitialized = true;
    console.log('✅ Plugin initialization complete');
    
    // Notify UI that plugin is ready
    figma.ui.postMessage({
      type: 'plugin-ready',
      devMode: currentDevMode
    });
    
    // Send initial selection
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
      case 'scan-selection':
        await handleScanSelection();
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
 * Handle scan selection request
 */
async function handleScanSelection() {
  const selection = figma.currentPage.selection;
  
  if (selection.length === 0) {
    figma.ui.postMessage({
      type: 'scan-result',
      data: null
    });
    return;
  }

  console.log(`🔍 Scanning ${selection.length} selected items...`);
  
  // Basic component analysis
  const results = {
    components: [],
    variables: {},
    metadata: {
      scanTime: new Date().toISOString(),
      itemCount: selection.length,
      devMode: currentDevMode
    }
  };

  for (const node of selection) {
    try {
      // Basic node analysis
      const component = {
        id: node.id,
        name: node.name,
        type: node.type,
        properties: {},
        suggestions: []
      };

      // Analyze based on node type
      if (node.type === 'COMPONENT' || node.type === 'INSTANCE') {
        component.suggestions.push('This is a component or instance - consider mapping to SDS component');
        component.properties.isComponent = true;
      }

      if (node.type === 'TEXT') {
        component.suggestions.push('Text node - use SDS typography tokens');
        component.properties.textContent = node.characters;
      }

      if (node.type === 'RECTANGLE' || node.type === 'FRAME') {
        component.suggestions.push('Layout element - consider using SDS layout components');
        component.properties.width = node.width;
        component.properties.height = node.height;
      }

      // Check for bound variables (if available)
      if (node.boundVariables) {
        component.properties.hasVariables = true;
        component.suggestions.push('Has bound variables - map to SDS design tokens');
      }

      // Basic fill analysis
      if (node.fills && Array.isArray(node.fills) && node.fills.length > 0) {
        const fill = node.fills[0];
        if (fill.type === 'SOLID') {
          component.properties.fillColor = {
            r: Math.round(fill.color.r * 255),
            g: Math.round(fill.color.g * 255),
            b: Math.round(fill.color.b * 255)
          };
          component.suggestions.push('Use SDS color tokens instead of hardcoded colors');
        }
      }

      results.components.push(component);

    } catch (nodeError) {
      console.error(`❌ Error analyzing node ${node.name}:`, nodeError);
    }
  }

  console.log('✅ Scan complete:', results);
  
  figma.ui.postMessage({
    type: 'scan-result',
    data: results
  });
}

// ===== FIGMA EVENT HANDLERS =====

// Handle plugin parameters (if provided)
figma.parameters.on('input', ({ parameters, key, query, result }) => {
  console.log('📝 Parameter input:', { key, query });
  
  switch (key) {
    case 'component-type':
      const componentTypes = ['Button', 'Input', 'Card', 'Header', 'Form', 'Navigation'];
      result.setSuggestions(
        componentTypes
          .filter(type => type.toLowerCase().includes(query.toLowerCase()))
          .map(type => ({ name: type, data: { type } }))
      );
      break;
      
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
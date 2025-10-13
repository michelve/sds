// ===== SDS FIGMA PLUGIN - CONSOLIDATED VERSION =====
// All Code Connect logic consolidated into main plugin file
// to avoid context separation issues between main thread and UI thread

// Global plugin state
let configManager;
let codeConnectDetector;
let initialized = false;

// ===== CONFIGURATION MANAGEMENT =====
class SDSConfigurationManager {
  constructor() {
    this.config = null;
    this.documentUrls = new Map();
    this.initialized = false;
  }

  async initialize() {
    try {
      console.log('📄 Loading SDS configuration...');
      
      // Embedded configuration (since Figma plugins can't read workspace files directly)
      const config = {
        codeConnect: {
          documentUrlSubstitutions: {
            // Essential SDS component mappings from figma.config.json
            "<FIGMA_ICONS_BASE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho",
            "<FIGMA_ACCORDION_ACCORDION_ITEM>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7753-4634",
            "<FIGMA_ACCORDION_ACCORDION>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7753-4779",
            "<FIGMA_AVATARS_AVATAR_BLOCK>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2010-15581",
            "<FIGMA_AVATARS_AVATAR_GROUP>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=56-15608",
            "<FIGMA_AVATARS_AVATAR>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1103",
            "<FIGMA_BUTTONS_BUTTON_DANGER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=185-852",
            "<FIGMA_BUTTONS_BUTTON_GROUP>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2072-9432",
            "<FIGMA_BUTTONS_BUTTON>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:426",
            "<FIGMA_BUTTONS_ICON_BUTTON>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=11-11508",
            "<FIGMA_CARDS_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2142-11380",
            "<FIGMA_CARDS_PRICING_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=1444-11846",
            "<FIGMA_CARDS_PRODUCT_INFO_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7753-4465",
            "<FIGMA_CARDS_REVIEW_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2236-16106",
            "<FIGMA_CARDS_STATS_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2236-15082",
            "<FIGMA_CARDS_TESTIMONIAL_CARD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7717-3946",
            "<FIGMA_DIALOG_DIALOG>": "https://www.figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=192-31534",
            "<FIGMA_DIALOG_DIALOG_BODY>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762-696",
            "<FIGMA_FORMS_FORM_CONTACT>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19741",
            "<FIGMA_FORMS_FORM_FORGOT_PASSWORD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19744",
            "<FIGMA_FORMS_FORM_LOG_IN>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19740",
            "<FIGMA_FORMS_FORM_NEWSLETTER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19743",
            "<FIGMA_FORMS_FORM_REGISTER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19742",
            "<FIGMA_FORMS_FORM_SHIPPING>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:23153",
            "<FIGMA_INPUTS_CHECKBOX_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1441",
            "<FIGMA_INPUTS_CHECKBOX_GROUP>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1426",
            "<FIGMA_INPUTS_INPUT_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2136-2263",
            "<FIGMA_INPUTS_RADIO_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1412",
            "<FIGMA_INPUTS_RADIO_GROUP>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=624-23642",
            "<FIGMA_INPUTS_SEARCH>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2236-14989",
            "<FIGMA_INPUTS_SELECT_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2136-2336",
            "<FIGMA_INPUTS_SLIDER_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=589-17676",
            "<FIGMA_INPUTS_SWITCH_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1902",
            "<FIGMA_INPUTS_TEXTAREA_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762-3088",
            "<FIGMA_MENU_MENU_HEADER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:728",
            "<FIGMA_MENU_MENU_HEADING>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:760",
            "<FIGMA_MENU_MENU_ITEM>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:743",
            "<FIGMA_MENU_MENU_SEPARATOR>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:731",
            "<FIGMA_NAVIGATION_NAVIGATION_PILL>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1357",
            "<FIGMA_NAVIGATION_PAGINATION>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2236-15181",
            "<FIGMA_NAVIGATION_TABS>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:792",
            "<FIGMA_SECTIONS_HEADER_AUTH>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:20132",
            "<FIGMA_SECTIONS_HEADER>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19734",
            "<FIGMA_TEXT_TEXT_CONTENT_HEADING>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1255",
            "<FIGMA_TEXT_TEXT_CONTENT_TITLE>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1273",
            "<FIGMA_TEXT_TEXT_HEADING>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1218",
            "<FIGMA_TEXT_TEXT_SMALL>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1236",
            "<FIGMA_TEXT_TEXT>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1200"
          }
        }
      };
      
      this.config = config;
      this.processDocumentUrls();
      this.initialized = true;
      
      console.log('✅ SDS configuration loaded successfully');
      console.log('📊 Loaded ' + this.documentUrls.size + ' component URL mappings');
      
      return this.config;
      
    } catch (error) {
      console.error('❌ Error loading SDS configuration:', error);
      this.loadFallbackConfiguration();
      return this.config;
    }
  }

  processDocumentUrls() {
    if (!this.config || !this.config.codeConnect || !this.config.codeConnect.documentUrlSubstitutions) return;
    
    const substitutions = this.config.codeConnect.documentUrlSubstitutions;
    for (const [key, url] of Object.entries(substitutions)) {
      this.documentUrls.set(key, url);
    }
  }

  loadFallbackConfiguration() {
    console.log('🔄 Loading fallback configuration...');
    this.config = {
      codeConnect: {
        documentUrlSubstitutions: {
          "<FIGMA_BUTTONS_BUTTON>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:426",
          "<FIGMA_INPUTS_INPUT_FIELD>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2136-2263",
          "<FIGMA_TEXT_TEXT>": "https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1200"
        }
      }
    };
    this.processDocumentUrls();
    this.initialized = true;
  }

  getDocumentUrlSubstitutions() {
    return (this.config && this.config.codeConnect && this.config.codeConnect.documentUrlSubstitutions) || {};
  }

  getComponentByNodeId(nodeId) {
    const urlSubstitutions = this.getDocumentUrlSubstitutions();
    for (const [key, url] of Object.entries(urlSubstitutions)) {
      if (url.includes('node-id=' + nodeId)) {
        return { key: key, url: url, nodeId: nodeId };
      }
    }
    return null;
  }
}

// ===== CODE CONNECT INTEGRATION =====
class SDSCodeConnectDetector {
  constructor(configManager) {
    this.config = configManager;
    this.componentMappings = this.createComponentMappings();
  }

  createComponentMappings() {
    const urlSubstitutions = this.config.getDocumentUrlSubstitutions();
    const mappings = new Map();

    for (const [key, url] of Object.entries(urlSubstitutions)) {
      const mapping = this.parseCodeConnectKey(key, url);
      if (mapping) {
        mappings.set(key, mapping);
        mappings.set(mapping.component.toLowerCase(), mapping);
      }
    }

    return mappings;
  }

  parseCodeConnectKey(key, url) {
    const cleanKey = key.replace(/[<>]/g, '');
    const parts = cleanKey.split('_');
    
    if (parts.length < 3 || parts[0] !== 'FIGMA') {
      return null;
    }

    const page = parts[1].toLowerCase();
    const component = parts.slice(2).join('_').toLowerCase();
    const nodeId = this.extractNodeIdFromUrl(url);
    const details = this.getComponentDetails(page, component);

    return {
      key: key,
      url: url,
      nodeId: nodeId,
      page: page,
      componentName: component,
      component: details.component,
      import: details.import,
      path: details.path,
      type: details.type,
      props: details.props
    };
  }

  extractNodeIdFromUrl(url) {
    const match = url.match(/node-id=([^&]+)/);
    return match ? match[1] : null;
  }

  getComponentDetails(page, component) {
    const componentMap = {
      // Buttons
      'buttons_button': {
        component: 'Button',
        import: "import { Button } from 'primitives';",
        path: 'src/ui/primitives/Button',
        type: 'button',
        props: ['variant', 'size', 'children']
      },
      'buttons_icon_button': {
        component: 'IconButton', 
        import: "import { IconButton } from 'primitives';",
        path: 'src/ui/primitives/IconButton',
        type: 'button',
        props: ['variant', 'size', 'icon']
      },

      // Inputs
      'inputs_input_field': {
        component: 'Input',
        import: "import { Input } from 'primitives';",
        path: 'src/ui/primitives/Input',
        type: 'input',
        props: ['label', 'placeholder', 'value', 'type']
      },
      'inputs_search': {
        component: 'Search',
        import: "import { Search } from 'primitives';",
        path: 'src/ui/primitives/Search', 
        type: 'input',
        props: ['placeholder', 'value']
      },

      // Cards  
      'cards_card': {
        component: 'Card',
        import: "import { Card } from 'primitives';",
        path: 'src/ui/primitives/Card',
        type: 'card',
        props: ['title', 'children']
      },
      'cards_pricing_card': {
        component: 'PricingCard',
        import: "import { PricingCard } from 'compositions';",
        path: 'src/ui/compositions/Cards/PricingCard',
        type: 'card',
        props: ['title', 'price', 'features', 'variant']
      },

      // Text
      'text_text': {
        component: 'Text',
        import: "import { Text } from 'primitives';",
        path: 'src/ui/primitives/Text',
        type: 'text',
        props: ['children']
      },
      'text_text_heading': {
        component: 'TextHeading',
        import: "import { TextHeading } from 'primitives';",
        path: 'src/ui/primitives/Text', 
        type: 'text',
        props: ['children']
      }
    };

    const key = page + '_' + component;
    return componentMap[key] || {
      component: this.capitalize(component),
      import: 'import { ' + this.capitalize(component) + ' } from \'primitives\';',
      path: 'src/ui/primitives/' + this.capitalize(component),
      type: 'unknown',
      props: ['children']
    };
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  async detectComponents(node) {
    const results = [];

    // Check if this node is a component instance
    if (node.type === 'INSTANCE') {
      try {
        const mainComponent = await node.getMainComponentAsync();
        if (mainComponent) {
          const mapping = this.findComponentByNodeId(mainComponent.id);
          if (mapping) {
            results.push({
              node: node,
              mapping: mapping,
              confidence: 1.0,
              method: 'code_connect_instance'
            });
          }
        }
      } catch (error) {
        console.warn('Error getting main component for instance:', error);
      }
    }

    // Check node name against component mappings
    const nameMapping = this.findComponentByName(node.name);
    if (nameMapping) {
      results.push({
        node: node,
        mapping: nameMapping,
        confidence: 0.8,
        method: 'code_connect_name'
      });
    }

    // Traverse children if the node has them
    if ('children' in node && node.children) {
      for (const child of node.children) {
        try {
          const childResults = await this.detectComponents(child);
          for (let i = 0; i < childResults.length; i++) {
            results.push(childResults[i]);
          }
        } catch (error) {
          console.warn('Error processing child node:', error);
        }
      }
    }

    return results;
  }

  findComponentByNodeId(nodeId) {
    for (const [key, mapping] of this.componentMappings) {
      if (mapping.nodeId === nodeId) {
        return mapping;
      }
    }
    return null;
  }

  findComponentByName(nodeName) {
    if (!nodeName) return null;
    
    const normalizedName = nodeName.toLowerCase();
    
    // Direct lookup
    if (this.componentMappings.has(normalizedName)) {
      return this.componentMappings.get(normalizedName);
    }

    // Fuzzy matching
    for (const [key, mapping] of this.componentMappings) {
      if (key.includes('figma_') && mapping.component) {
        const componentName = mapping.component.toLowerCase();
        if (normalizedName.includes(componentName) || componentName.includes(normalizedName)) {
          return mapping;
        }
      }
    }

    return null;
  }
}

// ===== CODE GENERATION =====
function generateReactCode(detectedComponents) {
  if (!detectedComponents || detectedComponents.length === 0) {
    return "// No SDS components detected\n\nconst Component = () => {\n  return (\n    <div>\n      {/* Add your content here */}\n    </div>\n  );\n};\n\nexport default Component;";
  }

  // Collect unique imports
  const imports = new Set();
  detectedComponents.forEach(detection => {
    if (detection.mapping && detection.mapping.import) {
      imports.add(detection.mapping.import);
    }
  });

  // Generate component JSX
  const jsx = detectedComponents.map(detection => {
    const { node, mapping } = detection;
    const componentName = (mapping && mapping.component) || 'div';
    
    // Basic props based on node properties
    const props = [];
    
    if (node.name && node.name !== componentName) {
      props.push('// ' + node.name);
    }

    const propsStr = props.length > 0 ? ' ' + props.join(' ') : '';
    const children = getNodeContent(node);
    
    if (children) {
      return '    <' + componentName + propsStr + '>\n      ' + children + '\n    </' + componentName + '>';
    } else {
      return '    <' + componentName + propsStr + ' />';
    }
  }).join('\n');

  // Combine into full component
  const importStatements = Array.from(imports).join('\n');
  
  return importStatements + '\n\nconst Component = () => {\n  return (\n    <div>\n' + jsx + '\n    </div>\n  );\n};\n\nexport default Component;';
}

function getNodeContent(node) {
  if (node.type === 'TEXT') {
    return node.characters || '';
  }
  
  if ('children' in node && node.children && node.children.length > 0) {
    // If has children, indicate it's a container
    return '// Container with children';
  }
  
  return null;
}

// ===== MAIN PLUGIN LOGIC =====
async function initializePlugin() {
  try {
    console.log('🚀 Initializing SDS Figma Plugin...');
    
    // Initialize configuration
    configManager = new SDSConfigurationManager();
    await configManager.initialize();
    
    // Initialize Code Connect detector
    codeConnectDetector = new SDSCodeConnectDetector(configManager);
    
    initialized = true;
    console.log('✅ Plugin initialized successfully');
    
  } catch (error) {
    console.error('❌ Plugin initialization failed:', error);
    figma.notify('Failed to initialize SDS plugin: ' + error.message, { error: true });
  }
}

async function analyzeSelection() {
  if (!initialized) {
    await initializePlugin();
  }

  const selection = figma.currentPage.selection;
  
  if (selection.length === 0) {
    figma.notify('Please select some nodes to analyze');
    return;
  }

  console.log('🔍 Analyzing ' + selection.length + ' selected node(s)...');
  
  try {
    const allDetections = [];
    
    for (const node of selection) {
      const detections = await codeConnectDetector.detectComponents(node);
      for (let i = 0; i < detections.length; i++) {
        allDetections.push(detections[i]);
      }
    }
    
    console.log('🎯 Found ' + allDetections.length + ' component matches');
    
    // Generate code
    const code = generateReactCode(allDetections);
    
    // Send results to UI
    figma.ui.postMessage({
      type: 'analysis-results',
      data: {
        detections: allDetections,
        code: code,
        timestamp: Date.now()
      }
    });
    
    figma.notify('Generated code for ' + allDetections.length + ' components');
    
  } catch (error) {
    console.error('❌ Analysis failed:', error);
    figma.notify('Analysis failed: ' + error.message, { error: true });
  }
}

// ===== PLUGIN ENTRY POINT =====
console.log('📦 SDS Figma Plugin Loading...');

// Handle plugin commands
if (figma.command === 'analyze') {
  analyzeSelection();
} else {
  // Default command
  analyzeSelection();
}

// Show UI
figma.showUI(__html__, { 
  width: 400, 
  height: 600,
  title: 'SDS Code Generator'
});

// Handle UI messages
figma.ui.onmessage = async (msg) => {
  console.log('📨 Received message:', msg.type);
  
  switch (msg.type) {
    case 'analyze-selection':
      await analyzeSelection();
      break;
      
    case 'close-plugin':
      figma.closePlugin();
      break;
      
    default:
      console.log('❓ Unknown message type:', msg.type);
  }
};

// Initialize on startup
initializePlugin();
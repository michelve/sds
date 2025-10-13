// ===== SDS FIGMA PLUGIN TEST SCRIPT =====
// This script helps test the plugin functionality and validate component mappings

console.log('🧪 SDS Figma Plugin Test Script');

// Mock Figma environment for testing
const mockFigma = {
  currentPage: {
    selection: []
  },
  editorType: 'dev',
  loadFontAsync: async () => {},
  showUI: (html, options) => {
    console.log('📱 UI would be shown with options:', options);
  },
  on: (event, callback) => {
    console.log('📡 Event listener registered for:', event);
  },
  ui: {
    onmessage: null,
    postMessage: (message) => {
      console.log('📤 UI message sent:', message);
    }
  },
  notify: (message, options) => {
    console.log('🔔 Notification:', message, options);
  },
  closePlugin: () => {
    console.log('❌ Plugin closed');
  }
};

// Mock __html__ for testing
const mockHtml = '<html><body>Test UI</body></html>';

// Test configuration
function testConfiguration() {
  console.log('🔧 Testing Configuration...');
  
  const configManager = new SDSConfigurationManager();
  configManager.initialize().then(() => {
    console.log('✅ Configuration loaded successfully');
    console.log('📊 Component mappings:', configManager.documentUrls.size);
    
    // Test component detection
    const detector = new SDSCodeConnectDetector(configManager);
    console.log('✅ Code Connect detector initialized');
    console.log('📊 Component mappings created:', detector.componentMappings.size);
    
    // Test component details
    const buttonDetails = detector.getComponentDetails('buttons', 'button');
    console.log('🔘 Button component details:', buttonDetails);
    
    const inputDetails = detector.getComponentDetails('inputs', 'input_field');
    console.log('📝 Input component details:', inputDetails);
    
  }).catch(error => {
    console.error('❌ Configuration test failed:', error);
  });
}

// Test component detection
function testComponentDetection() {
  console.log('🔍 Testing Component Detection...');
  
  // Mock nodes for testing
  const mockNodes = [
    {
      id: 'test-button',
      name: 'Button Primary',
      type: 'INSTANCE',
      children: []
    },
    {
      id: 'test-input',
      name: 'Input Field',
      type: 'COMPONENT',
      children: []
    },
    {
      id: 'test-form',
      name: 'Contact Form',
      type: 'FRAME',
      children: [
        {
          id: 'form-input',
          name: 'Email Input',
          type: 'INSTANCE',
          children: []
        }
      ]
    }
  ];
  
  const configManager = new SDSConfigurationManager();
  configManager.initialize().then(() => {
    const detector = new SDSCodeConnectDetector(configManager);
    
    mockNodes.forEach(async (node) => {
      try {
        const detections = await detector.detectComponents(node);
        console.log(`🎯 Detections for ${node.name}:`, detections);
      } catch (error) {
        console.error(`❌ Detection failed for ${node.name}:`, error);
      }
    });
  });
}

// Test code generation
function testCodeGeneration() {
  console.log('⚙️ Testing Code Generation...');
  
  const mockDetections = [
    {
      node: { id: 'test-button', name: 'Button Primary', type: 'INSTANCE' },
      mapping: {
        component: 'Button',
        import: "import { Button } from 'primitives';",
        path: 'src/ui/primitives/Button',
        type: 'button',
        props: ['variant', 'size', 'children']
      },
      confidence: 1.0,
      method: 'code_connect_instance'
    },
    {
      node: { id: 'test-input', name: 'Email Input', type: 'INSTANCE' },
      mapping: {
        component: 'Input',
        import: "import { Input } from 'primitives';",
        path: 'src/ui/primitives/Input',
        type: 'input',
        props: ['label', 'placeholder', 'value', 'type']
      },
      confidence: 0.8,
      method: 'code_connect_name'
    }
  ];
  
  const generatedCode = generateReactCode(mockDetections);
  console.log('📝 Generated Code:');
  console.log(generatedCode);
}

// Run tests
console.log('🚀 Starting SDS Plugin Tests...');

// Test configuration
testConfiguration();

// Test component detection
setTimeout(() => {
  testComponentDetection();
}, 1000);

// Test code generation
setTimeout(() => {
  testCodeGeneration();
}, 2000);

console.log('✅ Test script completed');

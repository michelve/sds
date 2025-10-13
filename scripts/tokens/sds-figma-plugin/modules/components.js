// ===== COMPONENT DETECTION MODULE =====
// This module handles component detection and analysis with async patterns
// Follows Figma documentation patterns for document access and node analysis

/**
 * SDS Component Detection Patterns
 * Each pattern includes detection logic and mapping to SDS components
 */
const SDS_COMPONENT_PATTERNS = {
  // Forms - from compositions
  'login_form': {
    detect: (node) => {
      const isForm = node.name.toLowerCase().includes('form') || 
        node.name.toLowerCase().includes('login') ||
        node.name.toLowerCase().includes('sign in');
      const hasInputs = node.children && node.children.some(child => 
        child.name.toLowerCase().includes('input') ||
        child.name.toLowerCase().includes('field') ||
        child.name.toLowerCase().includes('email') ||
        child.name.toLowerCase().includes('password')
      );
      return isForm && hasInputs;
    },
    component: 'LoginForm',
    import: "import { LoginForm } from 'compositions';",
    path: 'src/ui/compositions/Forms/LoginForm',
    type: 'form'
  },
  
  'register_form': {
    detect: (node) => {
      const isRegister = node.name.toLowerCase().includes('register') ||
        node.name.toLowerCase().includes('signup') ||
        node.name.toLowerCase().includes('sign up');
      const hasMultipleInputs = node.children && node.children.filter(child =>
        child.name.toLowerCase().includes('input') ||
        child.name.toLowerCase().includes('field')
      ).length >= 2;
      return isRegister && hasMultipleInputs;
    },
    component: 'RegisterForm',
    import: "import { RegisterForm } from 'compositions';",
    path: 'src/ui/compositions/Forms/RegisterForm',
    type: 'form'
  },
  
  'contact_form': {
    detect: (node) => {
      const isContact = node.name.toLowerCase().includes('contact');
      const hasTextArea = node.children && node.children.some(child =>
        child.name.toLowerCase().includes('message') ||
        child.name.toLowerCase().includes('textarea')
      );
      return isContact && hasTextArea;
    },
    component: 'ContactForm',
    import: "import { ContactForm } from 'compositions';",
    path: 'src/ui/compositions/Forms/ContactForm',
    type: 'form'
  },
  
  'newsletter_form': {
    detect: (node) => {
      const isNewsletter = node.name.toLowerCase().includes('newsletter') ||
        node.name.toLowerCase().includes('subscribe');
      const hasEmailInput = node.children && node.children.some(child =>
        child.name.toLowerCase().includes('email')
      );
      return isNewsletter && hasEmailInput;
    },
    component: 'NewsletterForm',
    import: "import { NewsletterForm } from 'compositions';",
    path: 'src/ui/compositions/Forms/NewsletterForm',
    type: 'form'
  },
  
  // Headers - from compositions
  'header_basic': {
    detect: (node) => {
      const isHeader = node.name.toLowerCase().includes('header');
      const hasLogo = node.children && node.children.some(child => 
        child.name.toLowerCase().includes('logo')
      );
      const hasNavigation = node.children && node.children.some(child => 
        child.name.toLowerCase().includes('nav') ||
        child.name.toLowerCase().includes('menu')
      );
      return isHeader && (hasLogo || hasNavigation);
    },
    component: 'Header',
    import: "import { Header } from 'compositions';",
    path: 'src/ui/compositions/Headers/Header',
    type: 'header'
  },
  
  'header_auth': {
    detect: (node) => {
      const isHeader = node.name.toLowerCase().includes('header');
      const hasAuth = node.children && node.children.some(child => 
        child.name.toLowerCase().includes('sign in') ||
        child.name.toLowerCase().includes('login') ||
        child.name.toLowerCase().includes('user')
      );
      return isHeader && hasAuth;
    },
    component: 'HeaderAuth',
    import: "import { HeaderAuth } from 'compositions';",
    path: 'src/ui/compositions/Headers/HeaderAuth',
    type: 'header'
  },
  
  // Buttons - from primitives
  'button_primary': {
    detect: (node) => {
      return node.type === 'COMPONENT' && 
        node.name.toLowerCase().includes('button') &&
        !node.name.toLowerCase().includes('icon');
    },
    component: 'Button',
    import: "import { Button } from 'primitives';",
    path: 'src/ui/primitives/Button/Button',
    type: 'button'
  },
  
  'icon_button': {
    detect: (node) => {
      return node.type === 'COMPONENT' && 
        node.name.toLowerCase().includes('icon') &&
        node.name.toLowerCase().includes('button');
    },
    component: 'IconButton',
    import: "import { IconButton } from 'primitives';",
    path: 'src/ui/primitives/IconButton/IconButton',
    type: 'button'
  },
  
  // Inputs
  'input_field': {
    detect: (node) => {
      return node.name.toLowerCase().includes('input') ||
        node.name.toLowerCase().includes('field') ||
        node.name.toLowerCase().includes('textbox');
    },
    component: 'Input',
    import: "import { Input } from 'primitives';",
    path: 'src/ui/primitives/Input/Input',
    type: 'input'
  },
  
  'radio_group': {
    detect: (node) => {
      const hasRadio = node.name.toLowerCase().includes('radio');
      const hasMultipleOptions = node.children && node.children.length > 1;
      return hasRadio && hasMultipleOptions;
    },
    component: 'Radio',
    import: "import { Radio } from 'primitives';",
    path: 'src/ui/primitives/Radio/Radio',
    type: 'input'
  },
  
  'search_field': {
    detect: (node) => {
      return node.name.toLowerCase().includes('search');
    },
    component: 'Search',
    import: "import { Search } from 'primitives';",
    path: 'src/ui/primitives/Search/Search',
    type: 'input'
  },
  
  // Navigation
  'navigation_pills': {
    detect: (node) => {
      const hasNavigation = node.name.toLowerCase().includes('nav') ||
        node.name.toLowerCase().includes('pill');
      const hasMultipleItems = node.children && node.children.length > 1;
      return hasNavigation && hasMultipleItems;
    },
    component: 'Navigation',
    import: "import { Navigation, NavigationPill } from 'primitives';",
    path: 'src/ui/primitives/Navigation/Navigation',
    type: 'navigation'
  },
  
  // Cards
  'card_basic': {
    detect: (node) => {
      return node.name.toLowerCase().includes('card') &&
        !node.name.toLowerCase().includes('pricing') &&
        !node.name.toLowerCase().includes('product');
    },
    component: 'Card',
    import: "import { Card } from 'compositions';",
    path: 'src/ui/compositions/Cards/Card',
    type: 'card'
  },
  
  'pricing_card': {
    detect: (node) => {
      return node.name.toLowerCase().includes('pricing') ||
        (node.children && node.children.some(child => 
          child.name.toLowerCase().includes('price') ||
          child.name.toLowerCase().includes('$')
        ));
    },
    component: 'PricingCard',
    import: "import { PricingCard } from 'compositions';",
    path: 'src/ui/compositions/Cards/PricingCard',
    type: 'card'
  },
  
  // Text elements
  'text_heading': {
    detect: (node) => {
      return node.type === 'TEXT' && 
        (node.name.toLowerCase().includes('heading') ||
         node.name.toLowerCase().includes('title'));
    },
    component: 'TextHeading',
    import: "import { TextHeading } from 'primitives';",
    path: 'src/ui/primitives/Text/TextHeading',
    type: 'text'
  },
  
  'text_body': {
    detect: (node) => {
      return node.type === 'TEXT' && 
        !node.name.toLowerCase().includes('heading') &&
        !node.name.toLowerCase().includes('title');
    },
    component: 'Text',
    import: "import { Text } from 'primitives';",
    path: 'src/ui/primitives/Text/Text',
    type: 'text'
  }
};

/**
 * Analyze current selection using async patterns
 * Follows Figma documentation for proper selection handling
 */
async function analyzeSelection() {
  try {
    const selection = figma.currentPage.selection;
    
    if (selection.length === 0) {
      figma.ui.postMessage({
        type: 'no-selection',
        message: 'Please select at least one element in Figma to scan for components.'
      });
      return;
    }
    
    console.log(`🔍 Analyzing ${selection.length} selected nodes...`);
    
    // Use Promise.all for concurrent analysis
    const results = await Promise.all(
      selection.map(node => analyzeNodeAsync(node))
    );
    
    figma.ui.postMessage({
      type: 'analysis-complete',
      results: results
    });
    
  } catch (error) {
    console.error('❌ Error analyzing selection:', error);
    figma.ui.postMessage({
      type: 'error',
      message: 'Error analyzing selection: ' + error.message
    });
  }
}

/**
 * Analyze a single node with async patterns
 * Uses loadAsync for proper document access
 */
async function analyzeNodeAsync(node) {
  try {
    console.log(`📋 Analyzing node: ${node.name} (${node.type})`);
    
    // Ensure node is loaded for analysis
    await node.loadAsync();
    
    const detectedComponents = [];
    
    // Check each pattern against the node
    for (const [patternKey, pattern] of Object.entries(SDS_COMPONENT_PATTERNS)) {
      try {
        if (pattern.detect(node)) {
          detectedComponents.push({
            pattern: patternKey,
            component: pattern.component,
            import: pattern.import,
            path: pattern.path,
            type: pattern.type
          });
          console.log(`✅ Detected: ${pattern.component}`);
        }
      } catch (error) {
        console.error(`❌ Error checking pattern ${patternKey}:`, error);
      }
    }
    
    // Extract design properties using Variables API
    const designProperties = await extractDesignPropertiesAsync(node);
    
    // Get child components if this is a container
    const childComponents = await analyzeChildComponents(node);
    
    return {
      name: node.name,
      type: node.type,
      id: node.id,
      detectedComponents,
      designProperties,
      childComponents,
      children: (node.children && node.children.length) || 0
    };
    
  } catch (error) {
    console.error(`❌ Error analyzing node ${node.name}:`, error);
    return {
      name: node.name,
      type: node.type,
      id: node.id,
      error: error.message,
      detectedComponents: [],
      designProperties: {},
      childComponents: [],
      children: 0
    };
  }
}

/**
 * Extract design properties using Variables API
 * Integrates with variables module for proper token mapping
 */
async function extractDesignPropertiesAsync(node) {
  const properties = {};
  
  try {
    // Get bound variables for this node
    if (window.variablesModule) {
      const boundVars = await window.variablesModule.getBoundVariables(node);
      properties.boundVariables = boundVars;
    }
    
    // Extract fills (background colors)
    if (node.fills && node.fills.length > 0) {
      const fill = node.fills[0];
      if (fill.type === 'SOLID') {
        properties.backgroundColor = window.variablesModule ? 
          window.variablesModule.figmaColorToCss(fill.color) : 
          rgbToHex(fill.color.r * 255, fill.color.g * 255, fill.color.b * 255);
      }
    }
    
    // Extract strokes (border colors)
    if (node.strokes && node.strokes.length > 0) {
      const stroke = node.strokes[0];
      if (stroke.type === 'SOLID') {
        properties.borderColor = window.variablesModule ? 
          window.variablesModule.figmaColorToCss(stroke.color) : 
          rgbToHex(stroke.color.r * 255, stroke.color.g * 255, stroke.color.b * 255);
      }
    }
    
    // Extract spacing (padding/margin)
    if (node.paddingLeft !== undefined) {
      properties.padding = {
        left: node.paddingLeft,
        right: node.paddingRight,
        top: node.paddingTop,
        bottom: node.paddingBottom
      };
    }
    
    // Extract border radius
    if (node.cornerRadius !== undefined) {
      properties.borderRadius = node.cornerRadius;
    }
    
    // Extract typography for text nodes
    if (node.type === 'TEXT') {
      properties.typography = {
        fontSize: node.fontSize,
        fontWeight: node.fontWeight,
        fontFamily: node.fontName && node.fontName.family,
        textAlign: node.textAlignHorizontal,
        lineHeight: node.lineHeight
      };
    }
    
    // Extract dimensions
    properties.width = node.width;
    properties.height = node.height;
    
    // Extract layout properties for auto-layout
    if (node.layoutMode && node.layoutMode !== 'NONE') {
      properties.layout = {
        mode: node.layoutMode,
        primaryAxis: node.primaryAxisAlignItems,
        counterAxis: node.counterAxisAlignItems,
        spacing: node.itemSpacing,
        padding: {
          left: node.paddingLeft,
          right: node.paddingRight,
          top: node.paddingTop,
          bottom: node.paddingBottom
        }
      };
    }
    
  } catch (error) {
    console.error('❌ Error extracting design properties:', error);
  }
  
  return properties;
}

/**
 * Analyze child components recursively
 * Uses async patterns for deep component analysis
 */
async function analyzeChildComponents(node) {
  try {
    if (!node.children || node.children.length === 0) {
      return [];
    }
    
    const childComponents = [];
    
    // Analyze children concurrently but limit to avoid performance issues
    const maxConcurrent = 5;
    for (let i = 0; i < node.children.length; i += maxConcurrent) {
      const batch = node.children.slice(i, i + maxConcurrent);
      const batchResults = await Promise.all(
        batch.map(async (child) => {
          // Only analyze if the child might be a component
          if (child.type === 'COMPONENT' || child.type === 'INSTANCE' || 
              (child.children && child.children.length > 0)) {
            return await analyzeNodeAsync(child);
          }
          return null;
        })
      );
      
      childComponents.push(...batchResults.filter(result => result !== null));
    }
    
    return childComponents;
    
  } catch (error) {
    console.error('❌ Error analyzing child components:', error);
    return [];
  }
}

/**
 * Find components by type
 * Helper function for specific component queries
 */
function findComponentsByType(analysisResults, componentType) {
  const components = [];
  
  function searchInResult(result) {
    if (result.detectedComponents) {
      const typeComponents = result.detectedComponents.filter(
        comp => comp.type === componentType
      );
      components.push(...typeComponents);
    }
    
    if (result.childComponents) {
      result.childComponents.forEach(child => searchInResult(child));
    }
  }
  
  analysisResults.forEach(result => searchInResult(result));
  return components;
}

/**
 * Get component hierarchy
 * Returns structured tree of detected components
 */
function getComponentHierarchy(analysisResults) {
  return analysisResults.map(result => ({
    name: result.name,
    type: result.type,
    components: result.detectedComponents,
    children: result.childComponents ? 
      getComponentHierarchy(result.childComponents) : []
  }));
}

/**
 * Utility function for RGB to Hex conversion
 */
function rgbToHex(r, g, b) {
  return ((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b))
    .toString(16).slice(1);
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    SDS_COMPONENT_PATTERNS,
    analyzeSelection,
    analyzeNodeAsync,
    extractDesignPropertiesAsync,
    analyzeChildComponents,
    findComponentsByType,
    getComponentHierarchy
  };
} else {
  // For Figma plugin environment
  window.componentsModule = {
    SDS_COMPONENT_PATTERNS,
    analyzeSelection,
    analyzeNodeAsync,
    extractDesignPropertiesAsync,
    analyzeChildComponents,
    findComponentsByType,
    getComponentHierarchy
  };
}
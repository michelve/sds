// 🎯 SDS Component Scanner - Enhanced with Real SDS Configuration
// Scans Figma selections and maps to your actual React Native codebase

console.log('🚀 SDS Component Scanner Plugin Loaded - Enhanced Version');

// ===== ACTUAL SDS CONFIGURATION =====
// Based on figma.config.json and tokens.json from the real codebase

const SDS_CONFIG = {
  // From figma.config.json - Code Connect import paths
  importPaths: {
    'ui/compositions/**/*': 'compositions',
    'ui/icons/*': 'icons', 
    'ui/images/*': 'images',
    'ui/layout/**/*': 'layout',
    'ui/primitives/**/*': 'primitives'
  },
  
  // From figma.config.json - Component paths
  paths: {
    compositions: ['src/ui/compositions'],
    hooks: ['src/ui/hooks'],
    icons: ['src/ui/icons'],
    images: ['src/ui/images'],
    layout: ['src/ui/layout'],
    primitives: ['src/ui/primitives'],
    providers: ['src/ui/providers'],
    utils: ['src/ui/utils']
  },

  // From figma.config.json - Document URL substitutions for precise component mapping
  documentUrls: {
    // Forms
    'FORM_CONTACT': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19741',
    'FORM_LOG_IN': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19740',
    'FORM_REGISTER': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19742',
    'FORM_NEWSLETTER': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19743',
    'FORM_FORGOT_PASSWORD': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:19744',
    'FORM_SHIPPING': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=197:23153',
    
    // Headers
    'HEADER': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2287-22651',
    'HEADER_AUTH': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=18-9389',
    
    // Buttons
    'BUTTON': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:426',
    'BUTTON_DANGER': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=185-852',
    'ICON_BUTTON': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=11-11508',
    
    // Inputs
    'INPUT_FIELD': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2136-2263',
    'RADIO_FIELD': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1412',
    'RADIO_GROUP': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=624-23642',
    'CHECKBOX_FIELD': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=9762:1441',
    'SELECT_FIELD': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2136-2336',
    'SEARCH': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2236-14989',
    
    // Navigation
    'NAVIGATION_PILL': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7768-19970',
    'NAVIGATION_BUTTON': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=515-5459',
    
    // Cards
    'CARD': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2142-11380',
    'PRICING_CARD': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=1444-11846',
    'PRODUCT_INFO_CARD': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=7753-4465',
    
    // Text
    'TEXT': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8487',
    'TEXT_HEADING': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8488',
    'TEXT_TITLE_PAGE': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8490',
    'TEXT_TITLE_HERO': 'https://figma.com/design/QkCVMrKpIW8zdiI05xNLho?node-id=2087-8491'
  }
};

// ===== ACTUAL SDS DESIGN TOKENS =====
// Based on tokens.json from the real codebase - W3C Token Format

const SDS_DESIGN_TOKENS = {
  // Color tokens from @color and @color_primitives
  colors: {
    // Brand colors
    '#e75715': 'var(--sds-color-brand-800)',
    '#d64910': 'var(--sds-color-brand-900)', 
    '#f5f5f5': 'var(--sds-color-brand-100)',
    '#e6e6e6': 'var(--sds-color-brand-200)',
    '#d9d9d9': 'var(--sds-color-brand-300)',
    '#b3b3b3': 'var(--sds-color-brand-400)',
    '#757575': 'var(--sds-color-brand-500)',
    '#444444': 'var(--sds-color-brand-600)',
    '#383838': 'var(--sds-color-brand-700)',
    '#1e1e1e': 'var(--sds-color-brand-900)',
    '#111111': 'var(--sds-color-brand-1000)',
    
    // Gray scale
    '#f3f3f3': 'var(--sds-color-background-default-default)',
    '#e3e3e3': 'var(--sds-color-background-default-secondary)',
    '#cdcdcd': 'var(--sds-color-background-default-tertiary)',
    
    // Semantic colors
    '#14ae5c': 'var(--sds-color-positive-default)',
    '#009951': 'var(--sds-color-positive-hover)',
    '#008043': 'var(--sds-color-positive-secondary)',
    
    '#ec221f': 'var(--sds-color-danger-default)',
    '#c00f0c': 'var(--sds-color-danger-hover)', 
    '#900b09': 'var(--sds-color-danger-secondary)',
    
    '#e8b931': 'var(--sds-color-warning-default)',
    '#e5a000': 'var(--sds-color-warning-hover)',
    '#bf6a02': 'var(--sds-color-warning-secondary)',
    
    // Text colors
    '#ffffff': 'var(--sds-color-text-on-brand)',
    '#000000': 'var(--sds-color-text-default-default)'
  },
  
  // Spacing tokens from @size.space
  spacing: {
    0: 'var(--sds-size-space-0)',
    2: 'var(--sds-size-space-050)',
    4: 'var(--sds-size-space-100)',
    6: 'var(--sds-size-space-150)',
    8: 'var(--sds-size-space-200)',
    12: 'var(--sds-size-space-300)',
    16: 'var(--sds-size-space-400)',
    24: 'var(--sds-size-space-600)',
    32: 'var(--sds-size-space-800)',
    48: 'var(--sds-size-space-1200)',
    64: 'var(--sds-size-space-1600)',
    96: 'var(--sds-size-space-2400)',
    160: 'var(--sds-size-space-4000)'
  },
  
  // Border radius from @size.radius
  borderRadius: {
    4: 'var(--sds-size-radius-100)',
    8: 'var(--sds-size-radius-200)',
    16: 'var(--sds-size-radius-400)',
    9999: 'var(--sds-size-radius-full)'
  },
  
  // Typography from @typography
  typography: {
    // Font sizes
    12: 'var(--sds-typography-body-size-small)',
    14: 'var(--sds-typography-body-size-small)',
    16: 'var(--sds-typography-body-size-medium)', 
    20: 'var(--sds-typography-body-size-large)',
    24: 'var(--sds-typography-heading-size-small)',
    32: 'var(--sds-typography-heading-size-large)',
    40: 'var(--sds-typography-subtitle-size-large)',
    48: 'var(--sds-typography-title-page-size-base)',
    64: 'var(--sds-typography-title-page-size-large)',
    72: 'var(--sds-typography-title-hero-size)',
    
    // Font weights
    400: 'var(--sds-typography-body-font-weight-regular)',
    500: 'var(--sds-typography-heading-font-weight)',
    600: 'var(--sds-typography-heading-font-weight)',
    700: 'var(--sds-typography-title-page-font-weight)',
    
    // Font families
    'Inter': 'var(--sds-typography-family-sans)',
    'Noto Serif': 'var(--sds-typography-family-serif)',
    'Roboto Mono': 'var(--sds-typography-family-mono)'
  },
  
  // Icon sizes from @size.icon
  iconSizes: {
    24: 'var(--sds-size-icon-small)',
    32: 'var(--sds-size-icon-medium)',
    40: 'var(--sds-size-icon-large)'
  }
};

// ===== SDS COMPONENT PATTERNS =====
// Enhanced patterns based on actual SDS component library

const SDS_COMPONENT_PATTERNS = {
  // Forms - from figma.config.json documentUrlSubstitutions
  'form_contact': {
    detect: (node) => {
      const nodeId = node.id;
      const isContactForm = node.name.toLowerCase().includes('contact') ||
        (node.children && node.children.some(child => child.name.toLowerCase().includes('message')));
      return isContactForm;
    },
    component: 'ContactForm', 
    import: "import { ContactForm } from 'compositions';",
    path: 'src/ui/compositions/Forms/ContactForm',
    figmaUrl: SDS_CONFIG.documentUrls.FORM_CONTACT
  },
  
  'form_login': {
    detect: (node) => {
      const hasEmail = node.children && node.children.some(child => 
        child.name.toLowerCase().includes('email') ||
        child.name.toLowerCase().includes('username')
      );
      const hasPassword = node.children && node.children.some(child => 
        child.name.toLowerCase().includes('password')
      );
      return hasEmail && hasPassword;
    },
    component: 'LoginForm',
    import: "import { LoginForm } from 'compositions';",
    path: 'src/ui/compositions/Forms/LoginForm',
    figmaUrl: SDS_CONFIG.documentUrls.FORM_LOG_IN
  },
  
  'form_register': {
    detect: (node) => {
      const hasMultipleInputs = node.children && node.children.filter(child => 
        child.name.toLowerCase().includes('input') ||
        child.name.toLowerCase().includes('field')
      ).length >= 3;
      const hasSignUp = node.children && node.children.some(child => 
        child.name.toLowerCase().includes('sign up') ||
        child.name.toLowerCase().includes('register')
      );
      return hasMultipleInputs && hasSignUp;
    },
    component: 'RegisterForm',
    import: "import { RegisterForm } from 'compositions';",
    path: 'src/ui/compositions/Forms/RegisterForm',
    figmaUrl: SDS_CONFIG.documentUrls.FORM_REGISTER
  },
  
  'form_newsletter': {
    detect: (node) => {
      const hasEmailInput = node.children && node.children.some(child => 
        child.name.toLowerCase().includes('email')
      );
      const hasSubscribe = node.children && node.children.some(child => 
        child.name.toLowerCase().includes('subscribe') ||
        child.name.toLowerCase().includes('newsletter')
      );
      return hasEmailInput && hasSubscribe;
    },
    component: 'NewsletterForm',
    import: "import { NewsletterForm } from 'compositions';",
    path: 'src/ui/compositions/Forms/NewsletterForm',
    figmaUrl: SDS_CONFIG.documentUrls.FORM_NEWSLETTER
  },
  
  // Headers
  'header_main': {
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
    figmaUrl: SDS_CONFIG.documentUrls.HEADER
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
    figmaUrl: SDS_CONFIG.documentUrls.HEADER_AUTH
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
    figmaUrl: SDS_CONFIG.documentUrls.BUTTON
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
    figmaUrl: SDS_CONFIG.documentUrls.ICON_BUTTON
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
    figmaUrl: SDS_CONFIG.documentUrls.INPUT_FIELD
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
    figmaUrl: SDS_CONFIG.documentUrls.RADIO_GROUP
  },
  
  'search_field': {
    detect: (node) => {
      return node.name.toLowerCase().includes('search');
    },
    component: 'Search',
    import: "import { Search } from 'primitives';",
    path: 'src/ui/primitives/Search/Search',
    figmaUrl: SDS_CONFIG.documentUrls.SEARCH
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
    figmaUrl: SDS_CONFIG.documentUrls.NAVIGATION_PILL
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
    figmaUrl: SDS_CONFIG.documentUrls.CARD
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
    figmaUrl: SDS_CONFIG.documentUrls.PRICING_CARD
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
    figmaUrl: SDS_CONFIG.documentUrls.TEXT_HEADING
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
    figmaUrl: SDS_CONFIG.documentUrls.TEXT
  }
};

// ===== DESIGN TOKEN MAPPING FUNCTIONS =====

function mapColorToSDS(figmaColor) {
  if (typeof figmaColor === 'object' && figmaColor.r !== undefined) {
    // Convert Figma RGB to hex
    const hex = rgbToHex(figmaColor.r * 255, figmaColor.g * 255, figmaColor.b * 255);
    return SDS_DESIGN_TOKENS.colors[hex] || `#${hex}`;
  }
  return SDS_DESIGN_TOKENS.colors[figmaColor] || figmaColor;
}

function mapSpacingToSDS(figmaSpacing) {
  const spacing = Math.round(figmaSpacing);
  return SDS_DESIGN_TOKENS.spacing[spacing] || `${spacing}px`;
}

function mapTypographyToSDS(figmaTypography) {
  const result = {};
  
  if (figmaTypography.fontSize) {
    result.fontSize = SDS_DESIGN_TOKENS.typography[figmaTypography.fontSize] || `${figmaTypography.fontSize}px`;
  }
  
  if (figmaTypography.fontWeight) {
    result.fontWeight = SDS_DESIGN_TOKENS.typography[figmaTypography.fontWeight] || figmaTypography.fontWeight;
  }
  
  if (figmaTypography.fontFamily) {
    result.fontFamily = SDS_DESIGN_TOKENS.typography[figmaTypography.fontFamily] || figmaTypography.fontFamily;
  }
  
  return result;
}

function mapBorderRadiusToSDS(figmaRadius) {
  const radius = Math.round(figmaRadius);
  return SDS_DESIGN_TOKENS.borderRadius[radius] || `${radius}px`;
}

// ===== COMPONENT ANALYSIS FUNCTIONS =====

function analyzeSelection() {
  const selection = figma.currentPage.selection;
  
  if (selection.length === 0) {
    figma.ui.postMessage({
      type: 'no-selection',
      message: 'Please select at least one element in Figma to scan for components.'
    });
    return;
  }
  
  console.log(`🔍 Analyzing ${selection.length} selected nodes...`);
  
  const results = selection.map(node => analyzeNode(node));
  
  figma.ui.postMessage({
    type: 'analysis-complete',
    results: results
  });
}

function analyzeNode(node) {
  console.log(`📋 Analyzing node: ${node.name} (${node.type})`);
  
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
          figmaUrl: pattern.figmaUrl,
          type: getComponentType(pattern.component)
        });
        console.log(`✅ Detected: ${pattern.component}`);
      }
    } catch (error) {
      console.error(`❌ Error checking pattern ${patternKey}:`, error);
    }
  }
  
  // Extract design properties
  const designProperties = extractDesignProperties(node);
  
  return {
    name: node.name,
    type: node.type,
    id: node.id,
    detectedComponents,
    designProperties,
    children: (node.children && node.children.length) || 0
  };
}

function extractDesignProperties(node) {
  const properties = {};
  
  try {
    // Extract fills (background colors)
    if (node.fills && node.fills.length > 0) {
      const fill = node.fills[0];
      if (fill.type === 'SOLID') {
        properties.backgroundColor = mapColorToSDS(fill.color);
      }
    }
    
    // Extract strokes (border colors)
    if (node.strokes && node.strokes.length > 0) {
      const stroke = node.strokes[0];
      if (stroke.type === 'SOLID') {
        properties.borderColor = mapColorToSDS(stroke.color);
      }
    }
    
    // Extract spacing (padding/margin)
    if (node.paddingLeft !== undefined) {
      properties.padding = mapSpacingToSDS(node.paddingLeft);
    }
    
    // Extract border radius
    if (node.cornerRadius !== undefined) {
      properties.borderRadius = mapBorderRadiusToSDS(node.cornerRadius);
    }
    
    // Extract typography for text nodes
    if (node.type === 'TEXT') {
      properties.typography = mapTypographyToSDS({
        fontSize: node.fontSize,
        fontWeight: node.fontWeight,
        fontFamily: node.fontName && node.fontName.family
      });
    }
    
    // Extract dimensions
    properties.width = node.width;
    properties.height = node.height;
    
  } catch (error) {
    console.error('Error extracting design properties:', error);
  }
  
  return properties;
}

function getComponentType(componentName) {
  if (['LoginForm', 'RegisterForm', 'ContactForm', 'NewsletterForm'].includes(componentName)) {
    return 'form';
  }
  if (['Header', 'HeaderAuth'].includes(componentName)) {
    return 'header';
  }
  if (['Button', 'IconButton'].includes(componentName)) {
    return 'button';
  }
  if (['Input', 'Radio', 'Search'].includes(componentName)) {
    return 'input';
  }
  if (['Card', 'PricingCard'].includes(componentName)) {
    return 'card';
  }
  if (['Text', 'TextHeading'].includes(componentName)) {
    return 'text';
  }
  return 'component';
}

// ===== CODE GENERATION =====

function generateSdsCode(analysisResult) {
  if (!analysisResult.detectedComponents.length) {
    return `// No SDS components detected for: ${analysisResult.name}
// Consider using existing SDS components from primitives or compositions`;
  }
  
  const detectedComponent = analysisResult.detectedComponents[0];
  const props = analysisResult.designProperties;
  
  // Generate imports
  const imports = [`import React from 'react';`];
  if (detectedComponent.import) {
    imports.push(detectedComponent.import);
  }
  
  // Add layout and styling imports for React Native
  imports.push(`import { View } from 'react-native';`);
  imports.push(`import { useVariants } from 'react-exo/utils';`);
  
  // Generate component code based on detected type
  let componentCode = '';
  
  switch (detectedComponent.type) {
    case 'form':
      componentCode = generateFormCode(detectedComponent, props);
      break;
    case 'header':
      componentCode = generateHeaderCode(detectedComponent, props);
      break;
    case 'button':
      componentCode = generateButtonCode(detectedComponent, props);
      break;
    case 'input':
      componentCode = generateInputCode(detectedComponent, props);
      break;
    case 'card':
      componentCode = generateCardCode(detectedComponent, props);
      break;
    default:
      componentCode = generateGenericCode(detectedComponent, props);
  }
  
  return `${imports.join('\n')}

${componentCode}`;
}

function generateFormCode(component, props) {
  const componentName = component.component.replace('Form', '');
  
  return `const ${componentName}Form = () => {
  const containerVariants = useVariants({
    platform: {
      Mobile: { 
        padding: '${mapSpacingToSDS(props.padding || 24)}',
        gap: '${mapSpacingToSDS(16)}'
      },
      Desktop: { 
        padding: '${mapSpacingToSDS(props.padding || 48)}',
        gap: '${mapSpacingToSDS(24)}'
      }
    }
  });

  return (
    <View style={containerVariants()}>
      <${component.component} 
        onSubmit={(data) => {
          // Handle form submission
          console.log('Form submitted:', data);
        }}
      />
    </View>
  );
};

export default ${componentName}Form;`;
}

function generateHeaderCode(component, props) {
  return `const AppHeader = () => {
  const headerVariants = useVariants({
    platform: {
      Mobile: { 
        padding: '${mapSpacingToSDS(16)}',
        height: 64
      },
      Desktop: { 
        padding: '${mapSpacingToSDS(24)}',
        height: 80
      }
    }
  });

  return (
    <View style={headerVariants()}>
      <${component.component} 
        showAuth={true}
        navigation={true}
      />
    </View>
  );
};

export default AppHeader;`;
}

function generateButtonCode(component, props) {
  return `const ActionButton = () => {
  return (
    <${component.component}
      variant="primary"
      size="medium"
      onPress={() => {
        // Handle button press
      }}
    >
      Button Text
    </${component.component}>
  );
};

export default ActionButton;`;
}

function generateInputCode(component, props) {
  return `const FormInput = () => {
  const [value, setValue] = React.useState('');

  return (
    <${component.component}
      value={value}
      onChangeText={setValue}
      placeholder="Enter text..."
      style={{
        marginBottom: '${mapSpacingToSDS(16)}'
      }}
    />
  );
};

export default FormInput;`;
}

function generateCardCode(component, props) {
  return `const ContentCard = () => {
  const cardVariants = useVariants({
    platform: {
      Mobile: { 
        padding: '${mapSpacingToSDS(16)}',
        margin: '${mapSpacingToSDS(8)}'
      },
      Desktop: { 
        padding: '${mapSpacingToSDS(24)}',
        margin: '${mapSpacingToSDS(12)}'
      }
    }
  });

  return (
    <View style={cardVariants()}>
      <${component.component}
        title="Card Title"
        content="Card content here..."
      />
    </View>
  );
};

export default ContentCard;`;
}

function generateGenericCode(component, props) {
  return `const ${component.component}Component = () => {
  const componentVariants = useVariants({
    platform: {
      Mobile: { 
        padding: '${mapSpacingToSDS(16)}'
      },
      Desktop: { 
        padding: '${mapSpacingToSDS(24)}'
      }
    }
  });

  return (
    <View style={componentVariants()}>
      <${component.component} />
    </View>
  );
};

export default ${component.component}Component;`;
}

// ===== UTILITY FUNCTIONS =====

function rgbToHex(r, g, b) {
  return ((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1);
}

function scanCurrentSelection() {
  analyzeSelection();
}

function generateComponentCode(analysisResult) {
  return generateSdsCode(analysisResult);
}

// ===== PLUGIN INITIALIZATION =====

// Show the UI
figma.showUI(__html__, { width: 400, height: 600 });

// Listen for UI messages
figma.ui.onmessage = (msg) => {
  if (msg.type === 'scan-selection') {
    scanCurrentSelection();
  } else if (msg.type === 'generate-code') {
    const code = generateComponentCode(msg.componentData);
    figma.ui.postMessage({
      type: 'code-generated',
      code: code
    });
  }
};

// Auto-resize UI
figma.ui.resize(400, 600);

console.log('✅ SDS Component Scanner ready with real configuration!');
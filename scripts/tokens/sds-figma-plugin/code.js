// 🎯 SDS Component Scanner - Main Plugin Code
// This scans Figma selections and maps to your actual codebase

console.log('🚀 SDS Component Scanner Plugin Loaded');

// Component detection patterns based on your codebase structure
const COMPONENT_PATTERNS = {
  'form': {
    detect: (node) => {
      const hasInputs = node.children?.some(child => 
        child.name.toLowerCase().includes('input') ||
        child.name.toLowerCase().includes('field') ||
        child.name.toLowerCase().includes('textbox')
      );
      const hasButtons = node.children?.some(child => 
        child.name.toLowerCase().includes('button') ||
        child.name.toLowerCase().includes('submit')
      );
      return hasInputs && hasButtons;
    },
    component: 'FormBox',
    import: "import {FormBox} from 'components/compositions/forms/form-box';",
    path: 'components/compositions/forms/form-box'
  },
  
  'header': {
    detect: (node) => 
      node.name.toLowerCase().includes('header') ||
      node.children?.some(child => child.name.toLowerCase().includes('logo')),
    component: 'Header',
    import: "import {Header} from 'components/sections/header/header';",
    path: 'components/sections/header/header'
  },
  
  'button': {
    detect: (node) => 
      node.type === 'COMPONENT' && 
      node.name.toLowerCase().includes('button'),
    component: 'Button',
    import: "import {Button} from 'components/primitives/button/button';",
    path: 'components/primitives/button/button'
  },
  
  'input': {
    detect: (node) =>
      node.name.toLowerCase().includes('input') ||
      node.name.toLowerCase().includes('field') ||
      node.name.toLowerCase().includes('textbox'),
    component: 'Input',
    import: "import {Input} from 'components/primitives/input/input';",
    path: 'components/primitives/input/input'
  },
  
  'radio': {
    detect: (node) =>
      node.name.toLowerCase().includes('radio') ||
      node.name.toLowerCase().includes('option'),
    component: 'Radio',
    import: "import {Radio} from 'components/primitives/radio/radio';",
    path: 'components/primitives/radio/radio'
  },
  
  'hero': {
    detect: (node) =>
      node.name.toLowerCase().includes('hero'),
    component: 'HeroActions',
    import: "import {HeroActions} from 'components/sections/hero-sections/hero-actions';",
    path: 'components/sections/hero-sections/hero-actions'
  }
};

// Design token mapping from Figma values to your SDS tokens
const DESIGN_TOKEN_MAP = {
  // Colors
  '#ffffff': 'sds.color.background.default.default',
  '#e75715': 'sds.color.background.brand.default',
  '#111111': 'sds.color.text.default.default',
  '#f5f5f5': 'sds.color.background.default.secondary',
  
  // Spacing (convert px to your tokens)
  '16': 'sds.size.space.400',
  '24': 'sds.size.space.600',
  '32': 'sds.size.space.800',
  '48': 'sds.size.space.1200',
  '64': 'sds.size.space.1600',
  
  // Border radius
  '4': 'sds.size.radius.100',
  '8': 'sds.size.radius.200',
  '16': 'sds.size.radius.400'
};

// Main plugin function
figma.showUI(__html__, { width: 450, height: 600 });

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

async function analyzeSelection(selection) {
  const results = [];
  
  for (const node of selection) {
    const analysis = await analyzeNode(node);
    results.push(analysis);
  }
  
  return results;
}

async function analyzeNode(node) {
  console.log('🔍 Analyzing node:', node.name, node.type);
  
  // Detect component type
  const detectedComponents = [];
  for (const [type, pattern] of Object.entries(COMPONENT_PATTERNS)) {
    if (pattern.detect(node)) {
      detectedComponents.push({
        type,
        component: pattern.component,
        import: pattern.import,
        path: pattern.path
      });
    }
  }
  
  // Extract styles and map to design tokens
  const styles = await extractStyles(node);
  const mappedTokens = mapStylesToTokens(styles);
  
  // Analyze children for form detection
  const children = await analyzeChildren(node);
  
  return {
    id: node.id,
    name: node.name,
    type: node.type,
    detectedComponents,
    styles: mappedTokens,
    children,
    figmaNode: {
      width: node.width,
      height: node.height,
      x: node.x,
      y: node.y
    }
  };
}

async function extractStyles(node) {
  const styles = {};
  
  // Extract fills (background colors)
  if (node.fills && node.fills.length > 0) {
    const fill = node.fills[0];
    if (fill.type === 'SOLID') {
      const color = fill.color;
      const hex = rgbToHex(color.r, color.g, color.b);
      styles.backgroundColor = hex;
    }
  }
  
  // Extract effects (shadows, etc.)
  if (node.effects && node.effects.length > 0) {
    styles.effects = node.effects.map(effect => effect.type);
  }
  
  // Extract corner radius
  if (node.cornerRadius !== undefined) {
    styles.borderRadius = node.cornerRadius;
  }
  
  // Extract padding (from auto layout)
  if (node.paddingTop !== undefined) {
    styles.padding = {
      top: node.paddingTop,
      right: node.paddingRight,
      bottom: node.paddingBottom,
      left: node.paddingLeft
    };
  }
  
  return styles;
}

function mapStylesToTokens(styles) {
  const mappedStyles = {};
  
  for (const [property, value] of Object.entries(styles)) {
    if (property === 'backgroundColor' && DESIGN_TOKEN_MAP[value]) {
      mappedStyles.backgroundColor = DESIGN_TOKEN_MAP[value];
    } else if (property === 'borderRadius' && DESIGN_TOKEN_MAP[value.toString()]) {
      mappedStyles.borderRadius = DESIGN_TOKEN_MAP[value.toString()];
    } else if (property === 'padding') {
      mappedStyles.padding = {};
      for (const [side, val] of Object.entries(value)) {
        mappedStyles.padding[side] = DESIGN_TOKEN_MAP[val.toString()] || val;
      }
    } else {
      mappedStyles[property] = value;
    }
  }
  
  return mappedStyles;
}

async function analyzeChildren(node) {
  if (!node.children) return [];
  
  const childAnalysis = [];
  
  for (const child of node.children) {
    const childData = {
      name: child.name,
      type: child.type,
      detectedType: null
    };
    
    // Detect child component types
    for (const [type, pattern] of Object.entries(COMPONENT_PATTERNS)) {
      if (pattern.detect(child)) {
        childData.detectedType = type;
        childData.component = pattern.component;
        childData.import = pattern.import;
        break;
      }
    }
    
    childAnalysis.push(childData);
  }
  
  return childAnalysis;
}

function generateComponentCode(componentData) {
  const { detectedComponents, styles, children, name } = componentData;
  
  if (detectedComponents.length === 0) {
    return generateGenericCode(componentData);
  }
  
  const primaryComponent = detectedComponents[0];
  const componentName = name.replace(/\s+/g, '');
  
  // Generate imports
  const imports = [
    "import {useVariants} from 'react-exo/utils';",
    "import {StyleSheet} from 'react-native-unistyles';",
    "import {View} from 'react-native';",
    primaryComponent.import
  ];
  
  // Add child component imports
  children.forEach(child => {
    if (child.component && child.import) {
      imports.push(child.import);
    }
  });
  
  const uniqueImports = [...new Set(imports)];
  
  // Generate component code
  return `// 🎯 GENERATED FROM FIGMA: ${name}
${uniqueImports.join('\n')}

export interface ${componentName}Props {
  platform: typeof ${componentName}Variants.platform[number],
  style?: StyleProp<ViewStyle>,
  testID?: string,
}

export const ${componentName}Variants = {
  platform: ['Mobile', 'Desktop'],
} as const;

export function ${componentName}(props: ${componentName}Props) {
  const {platform} = props;
  const {vstyles} = useVariants(${componentName}Variants, {platform}, styles);

  return (
    <View testID={props.testID ?? "${componentData.id}"} style={[vstyles.root(), props.style]}>
      ${generateChildComponents(children, primaryComponent)}
    </View>
  );
}

const styles = StyleSheet.create(theme => ({
  root: {
    ${generateStyleProperties(styles)}
  },
  ${generateChildStyles(children)}
}));

// 📋 COPY THIS CODE TO YOUR PROJECT
// File location: src/components/${primaryComponent.path.split('/').slice(-1)[0]}/${componentName}.tsx`;
}

function generateChildComponents(children, primaryComponent) {
  if (children.length === 0) {
    return `<${primaryComponent.component} 
        platform={props.platform}
        style={vstyles.${primaryComponent.component.toLowerCase()}()}
      />`;
  }
  
  return children.map(child => {
    if (child.component) {
      return `      <${child.component} 
        platform={props.platform}
        style={vstyles.${child.component.toLowerCase()}()}
      />`;
    }
    return `      {/* ${child.name} - Map to your component */}`;
  }).join('\n');
}

function generateStyleProperties(styles) {
  const properties = [];
  
  if (styles.backgroundColor) {
    properties.push(`backgroundColor: '${styles.backgroundColor}',`);
  }
  if (styles.borderRadius) {
    properties.push(`borderRadius: '${styles.borderRadius}',`);
  }
  if (styles.padding) {
    properties.push(`padding: '${styles.padding.top || 'sds.size.space.400'}',`);
  }
  
  properties.push("flexDirection: 'column',");
  
  return properties.join('\n    ');
}

function generateChildStyles(children) {
  return children.filter(child => child.component)
    .map(child => `${child.component.toLowerCase()}: {
    // Add styles for ${child.component}
  }`)
    .join(',\n  ');
}

function generateGenericCode(componentData) {
  return `// ❌ No component mapping found for: ${componentData.name}
// Add this component to COMPONENT_PATTERNS in the plugin

import {View, Text} from 'react-native';

export function ${componentData.name.replace(/\s+/g, '')}() {
  return (
    <View style={{ padding: 16 }}>
      <Text>Unmapped component: ${componentData.name}</Text>
    </View>
  );
}`;
}

// Utility functions
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (Math.round(r * 255) << 16) + (Math.round(g * 255) << 8) + Math.round(b * 255)).toString(16).slice(1);
}

console.log('✅ SDS Component Scanner Ready');
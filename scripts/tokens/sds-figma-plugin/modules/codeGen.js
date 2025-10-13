// ===== CODE GENERATION MODULE =====
// This module handles React Native code generation with SDS patterns
// Uses modular templates and async patterns for code generation

/**
 * Generate SDS-compliant React Native code for analyzed components
 * Integrates with Variables API for proper design token usage
 */
async function generateSdsCode(analysisResult) {
  try {
    if (!analysisResult.detectedComponents.length) {
      return generateEmptyComponentCode(analysisResult);
    }
    
    const detectedComponent = analysisResult.detectedComponents[0];
    const props = analysisResult.designProperties;
    
    // Generate imports
    const imports = await generateImports(detectedComponent, analysisResult);
    
    // Generate component code based on detected type
    const componentCode = await generateComponentByType(detectedComponent, props, analysisResult);
    
    return `${imports.join('\n')}

${componentCode}`;
    
  } catch (error) {
    console.error('❌ Error generating SDS code:', error);
    return generateErrorCode(analysisResult, error);
  }
}

/**
 * Generate appropriate imports based on component and context
 */
async function generateImports(detectedComponent, analysisResult) {
  const imports = [`import React from 'react';`];
  
  // Add component-specific import
  if (detectedComponent.import) {
    imports.push(detectedComponent.import);
  }
  
  // Add React Native base imports
  imports.push(`import { View } from 'react-native';`);
  
  // Add SDS styling utilities
  imports.push(`import { useVariants } from 'react-exo/utils';`);
  
  // Add conditional imports based on component type
  if (detectedComponent.type === 'text') {
    imports.push(`import { Text } from 'react-native';`);
  }
  
  if (detectedComponent.type === 'input' || detectedComponent.type === 'form') {
    imports.push(`import { useState } from 'react';`);
  }
  
  // Add icon imports if needed
  if (analysisResult.name.toLowerCase().includes('icon') || 
      detectedComponent.component.includes('Icon')) {
    imports.push(`import { IconChevronLeft } from 'icons';`);
  }
  
  return imports;
}

/**
 * Generate component code based on detected type
 */
async function generateComponentByType(detectedComponent, props, analysisResult) {
  switch (detectedComponent.type) {
    case 'form':
      return generateFormCode(detectedComponent, props, analysisResult);
    case 'header':
      return generateHeaderCode(detectedComponent, props, analysisResult);
    case 'button':
      return generateButtonCode(detectedComponent, props, analysisResult);
    case 'input':
      return generateInputCode(detectedComponent, props, analysisResult);
    case 'card':
      return generateCardCode(detectedComponent, props, analysisResult);
    case 'text':
      return generateTextCode(detectedComponent, props, analysisResult);
    case 'navigation':
      return generateNavigationCode(detectedComponent, props, analysisResult);
    default:
      return generateGenericCode(detectedComponent, props, analysisResult);
  }
}

/**
 * Generate form component code
 */
function generateFormCode(component, props, analysisResult) {
  const componentName = component.component.replace('Form', '');
  const spacing = getSpacingFromProps(props);
  
  return `const ${componentName}Form = () => {
  const containerVariants = useVariants({
    platform: {
      Mobile: { 
        padding: '${spacing.padding}',
        gap: '${spacing.gap}'
      },
      Desktop: { 
        padding: '${getDesktopSpacing(spacing.padding)}',
        gap: '${getDesktopSpacing(spacing.gap)}'
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

/**
 * Generate header component code
 */
function generateHeaderCode(component, props, analysisResult) {
  const spacing = getSpacingFromProps(props);
  const hasAuth = component.component === 'HeaderAuth';
  
  return `const AppHeader = () => {
  const headerVariants = useVariants({
    platform: {
      Mobile: { 
        padding: '${spacing.padding}',
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      Desktop: { 
        padding: '${getDesktopSpacing(spacing.padding)}',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }
  });

  return (
    <View style={headerVariants()}>
      <${component.component} 
        showAuth={${hasAuth}}
        navigation={true}
        ${hasAuth ? 'onAuthAction={(action) => console.log(action)}' : ''}
      />
    </View>
  );
};

export default AppHeader;`;
}

/**
 * Generate button component code
 */
function generateButtonCode(component, props, analysisResult) {
  const isIconButton = component.component === 'IconButton';
  const backgroundColor = getBackgroundColorToken(props);
  
  return `const ActionButton = () => {
  return (
    <${component.component}
      variant="primary"
      size="medium"${isIconButton ? '\n      icon={<IconChevronLeft />}' : ''}
      onPress={() => {
        // Handle button press
        console.log('Button pressed');
      }}${backgroundColor ? `\n      style={{ backgroundColor: '${backgroundColor}' }}` : ''}
    >${isIconButton ? '' : '\n      Button Text\n    '}
    </${component.component}>
  );
};

export default ActionButton;`;
}

/**
 * Generate input component code
 */
function generateInputCode(component, props, analysisResult) {
  const isRadio = component.component === 'Radio';
  const isSearch = component.component === 'Search';
  const spacing = getSpacingFromProps(props);
  
  if (isRadio) {
    return `const RadioSelection = () => {
  const [selectedValue, setSelectedValue] = React.useState('');

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  return (
    <View style={{ gap: '${spacing.gap}' }}>
      <${component.component}
        options={options}
        value={selectedValue}
        onValueChange={setSelectedValue}
      />
    </View>
  );
};

export default RadioSelection;`;
  }
  
  if (isSearch) {
    return `const SearchField = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <${component.component}
      value={searchValue}
      onChangeText={setSearchValue}
      placeholder="Search..."
      onSearch={(query) => {
        console.log('Searching for:', query);
      }}
      style={{ marginBottom: '${spacing.margin}' }}
    />
  );
};

export default SearchField;`;
  }
  
  return `const FormInput = () => {
  const [value, setValue] = React.useState('');

  return (
    <${component.component}
      value={value}
      onChangeText={setValue}
      placeholder="Enter text..."
      style={{
        marginBottom: '${spacing.margin}'
      }}
    />
  );
};

export default FormInput;`;
}

/**
 * Generate card component code
 */
function generateCardCode(component, props, analysisResult) {
  const isPricingCard = component.component === 'PricingCard';
  const spacing = getSpacingFromProps(props);
  const borderRadius = getBorderRadiusToken(props);
  
  if (isPricingCard) {
    return `const PricingOption = () => {
  const cardVariants = useVariants({
    platform: {
      Mobile: { 
        padding: '${spacing.padding}',
        margin: '${spacing.margin}',
        borderRadius: '${borderRadius}'
      },
      Desktop: { 
        padding: '${getDesktopSpacing(spacing.padding)}',
        margin: '${getDesktopSpacing(spacing.margin)}',
        borderRadius: '${borderRadius}'
      }
    }
  });

  return (
    <View style={cardVariants()}>
      <${component.component}
        title="Premium Plan"
        price="$29"
        period="month"
        features={[
          'Feature 1',
          'Feature 2', 
          'Feature 3'
        ]}
        onSelect={() => console.log('Plan selected')}
      />
    </View>
  );
};

export default PricingOption;`;
  }
  
  return `const ContentCard = () => {
  const cardVariants = useVariants({
    platform: {
      Mobile: { 
        padding: '${spacing.padding}',
        margin: '${spacing.margin}',
        borderRadius: '${borderRadius}'
      },
      Desktop: { 
        padding: '${getDesktopSpacing(spacing.padding)}',
        margin: '${getDesktopSpacing(spacing.margin)}',
        borderRadius: '${borderRadius}'
      }
    }
  });

  return (
    <View style={cardVariants()}>
      <${component.component}
        title="Card Title"
        content="Card content here..."
        onPress={() => console.log('Card pressed')}
      />
    </View>
  );
};

export default ContentCard;`;
}

/**
 * Generate text component code
 */
function generateTextCode(component, props, analysisResult) {
  const isHeading = component.component === 'TextHeading';
  const typography = getTypographyTokens(props);
  
  return `const ${isHeading ? 'Heading' : 'BodyText'} = () => {
  return (
    <${component.component}${typography ? `\n      style={${JSON.stringify(typography, null, 8)}}` : ''}
    >
      ${isHeading ? 'Section Heading' : 'Body text content goes here'}
    </${component.component}>
  );
};

export default ${isHeading ? 'Heading' : 'BodyText'};`;
}

/**
 * Generate navigation component code
 */
function generateNavigationCode(component, props, analysisResult) {
  const spacing = getSpacingFromProps(props);
  
  return `const NavigationTabs = () => {
  const [selectedTab, setSelectedTab] = React.useState('tab1');

  const navigationVariants = useVariants({
    platform: {
      Mobile: { 
        padding: '${spacing.padding}',
        gap: '${spacing.gap}',
        flexDirection: 'row'
      },
      Desktop: { 
        padding: '${getDesktopSpacing(spacing.padding)}',
        gap: '${getDesktopSpacing(spacing.gap)}',
        flexDirection: 'row'
      }
    }
  });

  return (
    <View style={navigationVariants()}>
      <${component.component} direction="row">
        <NavigationPill 
          isSelected={selectedTab === 'tab1'}
          onPress={() => setSelectedTab('tab1')}
        >
          Tab 1
        </NavigationPill>
        <NavigationPill 
          isSelected={selectedTab === 'tab2'}
          onPress={() => setSelectedTab('tab2')}
        >
          Tab 2
        </NavigationPill>
        <NavigationPill 
          isSelected={selectedTab === 'tab3'}
          onPress={() => setSelectedTab('tab3')}
        >
          Tab 3
        </NavigationPill>
      </${component.component}>
    </View>
  );
};

export default NavigationTabs;`;
}

/**
 * Generate generic component code
 */
function generateGenericCode(component, props, analysisResult) {
  const spacing = getSpacingFromProps(props);
  
  return `const ${component.component}Component = () => {
  const componentVariants = useVariants({
    platform: {
      Mobile: { 
        padding: '${spacing.padding}'
      },
      Desktop: { 
        padding: '${getDesktopSpacing(spacing.padding)}'
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

/**
 * Generate code when no components are detected
 */
function generateEmptyComponentCode(analysisResult) {
  return `// No SDS components detected for: ${analysisResult.name}
// Consider using existing SDS components from primitives or compositions

import React from 'react';
import { View } from 'react-native';
import { useVariants } from 'react-exo/utils';

const CustomComponent = () => {
  const containerVariants = useVariants({
    platform: {
      Mobile: { 
        padding: 'var(--sds-size-space-400)',
        gap: 'var(--sds-size-space-200)'
      },
      Desktop: { 
        padding: 'var(--sds-size-space-800)',
        gap: 'var(--sds-size-space-400)'
      }
    }
  });

  return (
    <View style={containerVariants()}>
      {/* Add your custom implementation here */}
    </View>
  );
};

export default CustomComponent;`;
}

/**
 * Generate error code when generation fails
 */
function generateErrorCode(analysisResult, error) {
  return `// Error generating code for: ${analysisResult.name}
// Error: ${error.message}

import React from 'react';
import { View, Text } from 'react-native';

const ErrorComponent = () => {
  return (
    <View style={{ padding: 16 }}>
      <Text>Error generating component code</Text>
      <Text>Check console for details</Text>
    </View>
  );
};

export default ErrorComponent;`;
}

// ===== UTILITY FUNCTIONS =====

/**
 * Extract spacing values from props with SDS token mapping
 */
function getSpacingFromProps(props) {
  const defaultSpacing = {
    padding: 'var(--sds-size-space-400)',
    margin: 'var(--sds-size-space-400)',
    gap: 'var(--sds-size-space-200)'
  };
  
  if (!props) return defaultSpacing;
  
  // Map from bound variables if available
  if (props.boundVariables) {
    const spacingVars = Object.values(props.boundVariables)
      .filter(bound => bound.variable && bound.variable.name.toLowerCase().includes('space'));
    
    if (spacingVars.length > 0) {
      return {
        padding: spacingVars[0].sdsToken || defaultSpacing.padding,
        margin: spacingVars[0].sdsToken || defaultSpacing.margin,
        gap: spacingVars[0].sdsToken || defaultSpacing.gap
      };
    }
  }
  
  // Fallback to extracted properties
  if (props.padding) {
    const paddingValue = typeof props.padding === 'object' ? 
      props.padding.left || props.padding.top : props.padding;
    return {
      padding: mapSpacingToSdsToken(paddingValue),
      margin: mapSpacingToSdsToken(paddingValue / 2),
      gap: mapSpacingToSdsToken(paddingValue / 4)
    };
  }
  
  return defaultSpacing;
}

/**
 * Get desktop spacing (typically 1.5x mobile)
 */
function getDesktopSpacing(mobileSpacing) {
  // Extract numeric value and multiply
  const match = mobileSpacing.match(/--sds-size-space-(\d+)/);
  if (match) {
    const value = parseInt(match[1]);
    const desktopValue = Math.min(value * 1.5, 2400); // Cap at largest token
    return `var(--sds-size-space-${Math.round(desktopValue / 100) * 100})`;
  }
  return mobileSpacing;
}

/**
 * Get background color token from props
 */
function getBackgroundColorToken(props) {
  if (!props) return null;
  
  if (props.boundVariables) {
    const colorVars = Object.values(props.boundVariables)
      .filter(bound => bound.variable && bound.variable.resolvedType === 'COLOR');
    
    if (colorVars.length > 0) {
      return colorVars[0].sdsToken;
    }
  }
  
  if (props.backgroundColor) {
    return mapColorToSdsToken(props.backgroundColor);
  }
  
  return null;
}

/**
 * Get border radius token from props
 */
function getBorderRadiusToken(props) {
  if (!props) return 'var(--sds-size-radius-200)';
  
  if (props.borderRadius !== undefined) {
    return mapBorderRadiusToSdsToken(props.borderRadius);
  }
  
  return 'var(--sds-size-radius-200)';
}

/**
 * Get typography tokens from props
 */
function getTypographyTokens(props) {
  if (!props || !props.typography) return null;
  
  const typography = {};
  
  if (props.typography.fontSize) {
    typography.fontSize = mapTypographyToSdsToken(props.typography.fontSize, 'size');
  }
  
  if (props.typography.fontWeight) {
    typography.fontWeight = mapTypographyToSdsToken(props.typography.fontWeight, 'weight');
  }
  
  if (props.typography.fontFamily) {
    typography.fontFamily = mapTypographyToSdsToken(props.typography.fontFamily, 'family');
  }
  
  return Object.keys(typography).length > 0 ? typography : null;
}

/**
 * Map spacing to SDS token
 */
function mapSpacingToSdsToken(spacing) {
  const size = Math.round(spacing);
  
  if (size <= 2) return 'var(--sds-size-space-050)';
  if (size <= 4) return 'var(--sds-size-space-100)';
  if (size <= 6) return 'var(--sds-size-space-150)';
  if (size <= 8) return 'var(--sds-size-space-200)';
  if (size <= 12) return 'var(--sds-size-space-300)';
  if (size <= 16) return 'var(--sds-size-space-400)';
  if (size <= 24) return 'var(--sds-size-space-600)';
  if (size <= 32) return 'var(--sds-size-space-800)';
  if (size <= 48) return 'var(--sds-size-space-1200)';
  if (size <= 64) return 'var(--sds-size-space-1600)';
  if (size <= 96) return 'var(--sds-size-space-2400)';
  
  return 'var(--sds-size-space-4000)';
}

/**
 * Map color to SDS token (simplified)
 */
function mapColorToSdsToken(color) {
  // This would integrate with the variables module for proper mapping
  return 'var(--sds-color-background-default-default)';
}

/**
 * Map border radius to SDS token
 */
function mapBorderRadiusToSdsToken(radius) {
  const size = Math.round(radius);
  
  if (size <= 4) return 'var(--sds-size-radius-100)';
  if (size <= 8) return 'var(--sds-size-radius-200)';
  if (size <= 16) return 'var(--sds-size-radius-400)';
  
  return 'var(--sds-size-radius-full)';
}

/**
 * Map typography to SDS token
 */
function mapTypographyToSdsToken(value, type) {
  switch (type) {
    case 'size':
      if (value <= 12) return 'var(--sds-typography-scale-01)';
      if (value <= 14) return 'var(--sds-typography-scale-02)';
      if (value <= 16) return 'var(--sds-typography-scale-03)';
      if (value <= 20) return 'var(--sds-typography-scale-04)';
      if (value <= 24) return 'var(--sds-typography-scale-05)';
      return 'var(--sds-typography-scale-06)';
      
    case 'weight':
      if (value <= 300) return 'var(--sds-typography-weight-light)';
      if (value <= 400) return 'var(--sds-typography-weight-regular)';
      if (value <= 500) return 'var(--sds-typography-weight-medium)';
      if (value <= 600) return 'var(--sds-typography-weight-semibold)';
      return 'var(--sds-typography-weight-bold)';
      
    case 'family':
      if (typeof value === 'string' && value.toLowerCase().includes('mono')) {
        return 'var(--sds-typography-family-mono)';
      }
      return 'var(--sds-typography-family-sans)';
      
    default:
      return value;
  }
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generateSdsCode,
    generateImports,
    generateComponentByType,
    generateFormCode,
    generateHeaderCode,
    generateButtonCode,
    generateInputCode,
    generateCardCode,
    generateTextCode,
    generateNavigationCode,
    generateGenericCode
  };
} else {
  // For Figma plugin environment
  window.codeGenModule = {
    generateSdsCode,
    generateImports,
    generateComponentByType,
    generateFormCode,
    generateHeaderCode,
    generateButtonCode,
    generateInputCode,
    generateCardCode,
    generateTextCode,
    generateNavigationCode,
    generateGenericCode
  };
}
# 🎯 SDS Component Scanner - Enhanced Figma Plugin

An intelligent Figma plugin that scans your designs and maps them to your actual React Native SDS (Simple Design System) codebase. Get copy-ready code with proper imports, design tokens, and component patterns.

## 🚀 Features

- **Real SDS Integration**: Uses your actual `figma.config.json` and `tokens.json` configuration
- **Intelligent Component Detection**: Recognizes forms, headers, buttons, inputs, cards, and text elements
- **Design Token Mapping**: Converts Figma styles to your W3C design token format
- **React Native Code Generation**: Generates ready-to-use code with `react-exo/utils` and `react-native-unistyles`
- **Copy-Ready Output**: One-click copying of generated code
- **Real Component Mapping**: Maps to your actual SDS component library paths

## 📋 What It Detects

### Forms
- **Contact Forms**: Detects forms with message fields → `ContactForm` component
- **Login Forms**: Detects email/password combinations → `LoginForm` component  
- **Registration Forms**: Detects multi-field signup forms → `RegisterForm` component
- **Newsletter Forms**: Detects email + subscribe patterns → `NewsletterForm` component

### Headers
- **Main Headers**: Detects headers with logo/navigation → `Header` component
- **Auth Headers**: Detects headers with sign-in elements → `HeaderAuth` component

### Buttons & Inputs
- **Buttons**: Maps to `Button` component with proper variants
- **Icon Buttons**: Maps to `IconButton` component
- **Input Fields**: Maps to `Input` component with validation
- **Radio Groups**: Maps to `Radio` component with options
- **Search Fields**: Maps to `Search` component

### Cards & Content
- **Basic Cards**: Maps to `Card` component
- **Pricing Cards**: Detects price elements → `PricingCard` component
- **Text Elements**: Maps to `Text` and `TextHeading` components

## 📦 Installation

### Method 1: Development Plugin (Recommended)
1. **Open Figma Desktop App**
2. **Go to Plugins Menu**: `Plugins` → `Development` → `Import plugin from manifest...`
3. **Select Manifest**: Navigate to `/sds-figma-plugin/manifest.json`
4. **Install**: Click "Import" to add the plugin to your development plugins

### Method 2: Local Plugin for Testing
1. **Zip the Plugin**: Create a zip file with all plugin files
2. **Import**: Use Figma's plugin import feature
3. **Test**: Run the plugin in any Figma file

## 🚀 Usage Guide

### Basic Workflow
1. **Open any Figma file** with UI components
2. **Select components** (forms, headers, buttons, inputs, etc.)
3. **Run Plugin**: `Plugins` → `Development` → `SDS Component Scanner`
4. **Click "Scan"** to analyze your selection
5. **Review Results** to see detected components
6. **Generate Code** for any detected component
7. **Copy Code** and paste into your React Native project

### What Gets Detected
The plugin intelligently detects:
- ✅ **Forms** (fields, submit buttons, validation)
- ✅ **Headers** (navigation, titles, user sections)
- ✅ **Buttons** (primary, secondary, icon buttons)
- ✅ **Inputs** (text fields, search, dropdowns)
- ✅ **Radio Groups** (selection lists)
- ✅ **Navigation** (tabs, menus, breadcrumbs)

### Generated Code Features
- 🎯 **Component Mapping**: Uses your actual React Native components
- 🎨 **Design Tokens**: Converts Figma values to your SDS tokens
- 📱 **Platform Variants**: Includes Mobile/Desktop responsive patterns
- 📦 **Proper Imports**: Generates correct import statements
- 🔧 **useVariants Hook**: Uses your styling patterns

## 📝 Example Usage

### Input: Figma Form Selection
When you select a login form in Figma:

### Output: Generated React Native Code
```tsx
import React from 'react';
import { View } from 'react-native';
import { useVariants } from 'react-exo/utils';
import { 
  Section, 
  Input, 
  Button, 
  Text 
} from '@/components';

const LoginForm = () => {
  const sectionVariants = useVariants({
    platform: {
      Mobile: { padding: 'sds.size.space.600' },
      Desktop: { padding: 'sds.size.space.1200' }
    }
  });

  return (
    <View style={sectionVariants()}>
      <Text variant="heading">Welcome Back</Text>
      
      <Input 
        placeholder="Email"
        keyboardType="email-address"
        style={{ marginBottom: 'sds.size.space.400' }}
      />
      
      <Input 
        placeholder="Password"
        secureTextEntry
        style={{ marginBottom: 'sds.size.space.600' }}
      />
      
      <Button variant="primary" size="large">
        Sign In
      </Button>
    </View>
  );
};

export default LoginForm;
```

## 🔧 Customization

### Adding New Component Patterns
Edit `code.js` and add to `COMPONENT_PATTERNS`:

```javascript
COMPONENT_PATTERNS.CUSTOM_COMPONENT = {
  detect: (node) => {
    // Your detection logic
    return node.name.toLowerCase().includes('custom');
  },
  type: 'custom',
  component: 'CustomComponent',
  path: '@/components/CustomComponent'
};
```

### Adding Design Tokens
Add to `DESIGN_TOKEN_MAP` in `code.js`:

```javascript
DESIGN_TOKEN_MAP.spacing[24] = 'sds.size.space.600';
DESIGN_TOKEN_MAP.colors['#FF5722'] = 'sds.color.brand.800';
```

## 🐛 Troubleshooting

### Plugin Not Appearing
- ✅ Ensure you're using **Figma Desktop App** (not browser)
- ✅ Check that `manifest.json` is valid
- ✅ Restart Figma after installation

### No Components Detected
- ✅ **Select actual components** in Figma (not just empty frames)
- ✅ **Name components clearly** (e.g., "Login Form", "Submit Button")
- ✅ Check that your selection includes recognizable UI patterns

### Code Generation Issues
- ✅ **Review console** for any JavaScript errors
- ✅ **Check component patterns** match your Figma naming
- ✅ **Verify token mappings** in DESIGN_TOKEN_MAP

### UI Not Loading
- ✅ **Check `ui.html`** file is in the same directory
- ✅ **Ensure network permissions** in manifest.json
- ✅ **Clear Figma cache** and restart

## 📊 Plugin Architecture

### Core Files
- **`manifest.json`**: Plugin configuration and permissions
- **`code.js`**: Main plugin logic and component detection
- **`ui.html`**: User interface with scan/generate functionality

### Key Functions
- **`analyzeSelection()`**: Scans Figma nodes for component patterns
- **`generateComponentCode()`**: Creates React Native code from detected components
- **`mapDesignTokens()`**: Converts Figma values to SDS tokens

## 🎯 Use Cases

### For Developers
1. **Quick Implementation**: Copy-paste ready code for Figma designs
2. **Consistent Patterns**: Ensures use of actual codebase components
3. **Token Accuracy**: Automatic design token mapping
4. **Time Saving**: No manual component mapping or guessing

### For Design Teams
1. **Design Validation**: See how designs map to actual components
2. **Component Discovery**: Find existing components for reuse
3. **Implementation Preview**: See generated code before handoff

### For Product Teams
1. **Implementation Speed**: Faster design-to-code workflow
2. **Consistency**: Ensures designs use existing component library
3. **Documentation**: Generated code serves as implementation reference

## 🔄 Workflow Integration

### Design Handoff Process
1. **Designer**: Creates/updates designs in Figma
2. **Designer**: Runs plugin to verify component mapping
3. **Designer**: Shares generated code with implementation notes
4. **Developer**: Uses generated code as starting point
5. **Developer**: Customizes and integrates into project

### Development Workflow
1. **Select Design**: Choose components to implement
2. **Scan & Generate**: Use plugin to create base code
3. **Copy & Customize**: Paste code and add business logic
4. **Test & Iterate**: Verify implementation matches design

## 📈 Future Enhancements

### Planned Features
- 🎯 **Component Library Sync**: Automatic detection of new components
- 🎨 **Style Export**: Generate complete stylesheets
- 📱 **Platform Optimization**: Better Mobile/Desktop variant handling
- 🔧 **Custom Hooks**: Generate useVariants patterns automatically
- 📊 **Usage Analytics**: Track component usage patterns

### Contributing
To enhance the plugin:
1. **Fork/Clone** the plugin files
2. **Modify** detection patterns and code generation
3. **Test** with your specific component patterns
4. **Document** new features and patterns

## 📞 Support

### Common Issues
- **Component not detected**: Add pattern to `COMPONENT_PATTERNS`
- **Wrong token generated**: Update `DESIGN_TOKEN_MAP`
- **Code format issues**: Modify `generateComponentCode` function

### Getting Help
- Check the plugin console for detailed error messages
- Review the component detection patterns
- Verify your Figma selection includes recognizable UI elements
- Ensure your components are properly named and structured

---

**Ready to scan your first component?** 🚀 
Install the plugin and select any form, header, or button in Figma to get started!
# SDS Figma Plugin - Enhanced Code Connect Integration

⚡ **UPDATED**: Enhanced with latest Figma API 1.0.0 features and improved Code Connect integration!

A powerful Figma plugin that analyzes selected components and generates corresponding React code using the Simple Design System (SDS) architecture. Built with the latest Figma Plugin API and enhanced Code Connect integration for accurate component detection and code generation.

## 🎯 Enhanced Features

### ✅ What's New in This Version
- **Latest Figma API 1.0.0**: Uses newest API features and capabilities
- **Enhanced Code Connect**: Improved component detection with fuzzy matching
- **Better UI/UX**: Modern interface with component usage visualization
- **Advanced Code Generation**: Smart prop detection and variant mapping
- **Real-time Feedback**: Live selection updates and confidence scoring
- **Export Options**: Copy to clipboard and download functionality

### 🔧 Architecture Improvements
- **Enhanced Detection**: Multiple detection methods (exact match, fuzzy match, pattern-based)
- **Smart Props**: Automatic prop generation based on component types and node properties
- **Confidence Scoring**: Visual confidence indicators for component matches
- **Error Handling**: Robust error handling and user feedback
- **Performance**: Optimized for large selections and complex components

## 🚀 Key Features

### Component Detection
- **Exact Matching**: Uses Code Connect node IDs for precise component identification
- **Fuzzy Matching**: Intelligent name-based component detection
- **Pattern Recognition**: Recognizes common component patterns and structures
- **Confidence Scoring**: Provides confidence levels for each detected component

### Code Generation
- **React Components**: Generates clean, production-ready React code
- **Smart Imports**: Automatically includes necessary import statements
- **Prop Detection**: Extracts and maps component properties from Figma nodes
- **Variant Support**: Detects and applies component variants (primary, secondary, etc.)
- **Size Detection**: Automatically detects component sizes (small, medium, large)

### User Interface
- **Modern Design**: Clean, intuitive interface using Figma's design tokens
- **Real-time Updates**: Live selection feedback and component counting
- **Visual Feedback**: Color-coded confidence indicators and status messages
- **Export Options**: Easy copy and download functionality

## 📋 Supported Components

### Forms
- **Contact Forms**: `ContactForm` component with proper validation
- **Login Forms**: `LoginForm` with email/password handling
- **Registration Forms**: `RegisterForm` with multi-field support
- **Newsletter Forms**: `NewsletterForm` with email capture

### Headers & Navigation
- **Main Headers**: `Header` component with navigation
- **Auth Headers**: `HeaderAuth` with user authentication elements
- **Navigation Pills**: `NavigationPill` for tab-like navigation
- **Tabs**: `Tabs` component with active state management

### Buttons & Inputs
- **Buttons**: `Button` with variant and size support
- **Icon Buttons**: `IconButton` for icon-only actions
- **Input Fields**: `Input` with label and validation support
- **Search Fields**: `Search` component for search functionality
- **Radio Groups**: `Radio` with option management
- **Checkboxes**: `Checkbox` with label support
- **Textareas**: `Textarea` with configurable rows

### Cards & Content
- **Basic Cards**: `Card` component for content containers
- **Pricing Cards**: `PricingCard` with price and feature display
- **Product Cards**: `ProductCard` with product information
- **Text Elements**: `Text` and `TextHeading` components

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
3. **Run Plugin**: `Plugins` → `Development` → `SDS Code Generator`
4. **Click "Analyze Selection"** to scan your components
5. **Review Results** to see detected components with confidence scores
6. **Copy or Download** the generated React code
7. **Paste into your project** and customize as needed

### Advanced Usage
- **Multi-Component Selection**: Select multiple components to generate composite code
- **Pattern Recognition**: The plugin can detect complex patterns and compositions
- **Confidence Indicators**: Use confidence scores to verify component matches
- **Export Options**: Choose between clipboard copy or file download

## 🎯 Component Detection Methods

### 1. Exact Match (100% Confidence)
- Uses Code Connect node IDs for precise identification
- Highest accuracy for components with established mappings
- Recommended for production use

### 2. Fuzzy Match (80% Confidence)
- Name-based detection with intelligent matching
- Good for components with descriptive names
- Useful for rapid prototyping

### 3. Pattern Match (Variable Confidence)
- Recognizes common component patterns
- Useful for custom or unmapped components
- Provides fallback detection

## 🔧 Configuration

### Code Connect Integration
The plugin uses your existing `figma.config.json` configuration:
```json
{
  "codeConnect": {
    "documentUrlSubstitutions": {
      "<FIGMA_BUTTONS_BUTTON>": "https://figma.com/design/...",
      "<FIGMA_INPUTS_INPUT_FIELD>": "https://figma.com/design/..."
    }
  }
}
```

### Component Mappings
Components are automatically mapped based on:
- **Node IDs**: Direct mapping from Figma to code components
- **Component Names**: Intelligent name-based matching
- **Pattern Recognition**: Common UI patterns and structures

## 🛠️ Development

### File Structure
```
sds-figma-plugin/
├── manifest.json          # Plugin configuration
├── code.js               # Main plugin logic
├── ui.html               # User interface
├── README.md             # This file
└── modules/              # Modular components (legacy)
    ├── config.js
    ├── codeConnect.js
    └── ...
```

### Key Classes
- **SDSConfigurationManager**: Handles configuration and Code Connect mappings
- **SDSCodeConnectDetector**: Main component detection logic
- **Code Generation Functions**: React code generation utilities

### Adding New Components
1. **Update figma.config.json** with new component mappings
2. **Add component details** in `getComponentDetails()` method
3. **Test detection** with sample Figma components
4. **Update documentation** with new component information

## 🐛 Troubleshooting

### Common Issues

#### No Components Detected
- **Check Selection**: Ensure components are properly selected
- **Verify Mappings**: Confirm Code Connect mappings are correct
- **Try Fuzzy Matching**: Some components may need name-based detection

#### Low Confidence Scores
- **Improve Naming**: Use descriptive component names
- **Add Mappings**: Create explicit Code Connect mappings
- **Check Patterns**: Verify component structure matches expected patterns

#### Code Generation Issues
- **Check Imports**: Verify component import paths are correct
- **Validate Props**: Ensure component props match SDS component API
- **Test Components**: Verify generated code works in your project

### Debug Mode
Enable debug logging by opening browser console in Figma:
1. **Open Figma in Browser**
2. **Open Developer Tools** (F12)
3. **Run Plugin** and check console for detailed logs

## 📚 API Reference

### Plugin Messages
- `scan-selection`: Analyze selected components
- `generate-code`: Generate code for specific components
- `close-plugin`: Close the plugin

### Response Messages
- `plugin-ready`: Plugin initialization complete
- `selection-changed`: Selection updated
- `analysis-complete`: Component analysis finished
- `code-generated`: Code generation complete
- `error`: Error occurred during processing

## 🤝 Contributing

### Adding New Component Types
1. **Identify Component Pattern**: Analyze Figma component structure
2. **Create Mapping**: Add to `getComponentDetails()` method
3. **Test Detection**: Verify detection works with sample components
4. **Update Documentation**: Add component to supported list

### Improving Detection
1. **Analyze False Positives**: Identify incorrect detections
2. **Enhance Patterns**: Improve pattern recognition logic
3. **Add Fuzzy Matching**: Improve name-based detection
4. **Test Edge Cases**: Verify with complex component structures

## 📄 License

This plugin is part of the Simple Design System (SDS) and follows the same licensing terms.

## 🆘 Support

For issues, questions, or contributions:
1. **Check Documentation**: Review this README and code comments
2. **Test with Samples**: Try with known working components
3. **Enable Debug Mode**: Check console for detailed error information
4. **Report Issues**: Include component examples and error details

---

**Happy Coding! 🎨✨**
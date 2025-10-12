# SDS Component Scanner - Figma Plugin

A Figma plugin that scans selected design elements and maps them to the corresponding Simple Design System (SDS) React Native components.

## Features

- **Component Detection**: Automatically identifies SDS components like forms, buttons, cards, headers, and more
- **Design Token Mapping**: Maps Figma design tokens to SDS CSS variables
- **Code Generation**: Generates ready-to-copy React Native code with proper imports
- **Real SDS Integration**: Uses actual `figma.config.json` and `tokens.json` configurations

## Installation for Development

1. Open Figma
2. Go to Plugins → Development → Import plugin from manifest...
3. Navigate to `/Users/michel/GitHub/sds/scripts/tokens/sds-figma-plugin/`
4. Select `manifest.json`

## Usage

1. **Select elements** in your Figma design (forms, buttons, cards, etc.)
2. **Run the plugin** from Plugins → Development → SDS Component Scanner
3. **Click "Scan Selection"** to analyze the selected elements
4. **View detected components** and their mappings
5. **Click "Generate Code"** to create React Native code
6. **Copy the code** and use it in your SDS project

## Supported Components

### Forms
- Contact forms (`ContactForm`)
- Login forms (`LoginForm`) 
- Registration forms (`RegisterForm`)
- Newsletter signup (`NewsletterForm`)

### Headers
- Main headers (`Header`)
- Authentication headers (`HeaderAuth`)

### Primitives
- Buttons (`Button`)
- Icon buttons (`IconButton`)
- Input fields (`Input`)
- Radio groups (`Radio`)
- Search fields (`Search`)
- Navigation pills (`Navigation`)

### Cards
- Basic cards (`Card`)
- Pricing cards (`PricingCard`)

## Design Token Support

The plugin automatically maps Figma design tokens to SDS variables:

- **Colors**: `#e75715` → `var(--sds-color-brand-800)`
- **Spacing**: `16px` → `var(--sds-size-space-400)`
- **Typography**: Font sizes and weights → `var(--sds-typography-*)`
- **Border Radius**: `8px` → `var(--sds-size-radius-200)`

## Generated Code Example

```jsx
import { ContactForm } from 'compositions';
import { Button } from 'primitives';
import { Input } from 'primitives';

export default function MyComponent() {
  return (
    <ContactForm>
      <Input placeholder="Enter your message" />
      <Button variant="primary">Send Message</Button>
    </ContactForm>
  );
}
```

## Development Notes

- Plugin runs locally with no network access required
- Compatible with both Figma design mode and Dev Mode
- Uses actual SDS configuration files for accurate component mapping
- All optional chaining syntax removed for Figma compatibility

## Troubleshooting

- **Plugin won't load**: Check that all files are in the correct directory
- **No components detected**: Ensure your Figma elements follow SDS naming conventions
- **Syntax errors**: The plugin avoids modern JavaScript features not supported in Figma

## File Structure

```
sds-figma-plugin/
├── manifest.json        # Plugin configuration
├── code-enhanced.js     # Main plugin logic with SDS integration
├── ui.html             # Plugin user interface
└── PLUGIN_USAGE.md     # This documentation
```
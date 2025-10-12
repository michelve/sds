# Figma Code Connect Configuration

This project uses Figma Code Connect to sync UI components between Figma and our codebase. With our organized design tokens system, components can maintain perfect design-code consistency.

## Configuration Overview

### File Structure
```
figma-demo/
├── figma.config.json              # Figma Code Connect configuration
├── src/
│   ├── components/ui/             # UI components with Figma mappings
│   │   └── Button/
│   │       ├── Button.jsx         # React component
│   │       ├── Button.css         # Component styles using design tokens
│   │       ├── Button.figma.tsx   # Figma Code Connect mapping
│   │       └── index.js           # Component exports
│   ├── styles/
│   │   ├── tokens/                # Design tokens (colors, typography, spacing)
│   │   │   ├── colors.css
│   │   │   ├── typography.css
│   │   │   ├── spacing.css
│   │   │   ├── components.css
│   │   │   └── index.css
│   │   └── pages/                 # Page-specific styles
│   │       └── ComponentsDemo.css
│   └── pages/
│       └── ComponentsDemo.jsx     # Demo page showcasing components
```

## Design Tokens Integration

Our design tokens are organized in `src/styles/tokens/` and provide:

### Colors (`colors.css`)
- Primary, secondary, accent color scales
- Semantic colors (success, warning, error)
- Component-specific color mappings
- Dark theme support

### Typography (`typography.css`)
- Font families and weights
- Font size scale (xs to 9xl)
- Line heights and letter spacing
- Component-specific typography tokens

### Spacing (`spacing.css`)
- Consistent spacing scale (0-96)
- Component dimensions and padding
- Border radius values
- Layout utilities

### Components (`components.css`)
- Box shadows and transitions
- Focus states and interactions
- Layout utilities (flex, grid)
- Component-specific design tokens

## Figma Code Connect Usage

### Setup Commands
```bash
# Initialize Figma Code Connect (first time only)
npm run figma:connect:init

# Create new component mappings
npm run figma:connect:create

# Publish components to Figma
npm run figma:connect:publish

# List published components
npm run figma:connect:list
```

### Component Development Workflow

1. **Design in Figma**: Create component in Figma with proper naming
2. **Extract Tokens**: Use design tokens for colors, spacing, typography
3. **Build Component**: Create React component using design tokens
4. **Map to Figma**: Create .figma.tsx file with property mappings
5. **Publish**: Run `npm run figma:connect:publish` to sync with Figma

### Button Component Example

**Component Structure:**
```
src/components/ui/Button/
├── Button.jsx          # React component
├── Button.css          # Styles using design tokens
├── Button.figma.tsx    # Figma Code Connect mapping
└── index.js            # Exports
```

**Design Token Usage in CSS:**
```css
.btn {
  font-family: var(--button-font-family);
  font-weight: var(--button-font-weight);
  padding: var(--button-padding-md);
  border-radius: var(--button-radius);
  transition: var(--button-transition);
}

.btn--primary {
  background-color: var(--color-button-primary);
  color: var(--color-button-primary-text);
}
```

**Figma Code Connect Mapping:**
```tsx
// Button.figma.tsx
import figma from '@figma/code-connect'
import Button from './Button'

figma.connect(Button, 'YOUR_FIGMA_BUTTON_URL', {
  props: {
    variant: figma.enum('variant', {
      primary: 'primary',
      secondary: 'secondary',
      outline: 'outline'
    }),
    size: figma.enum('size', {
      small: 'sm',
      medium: 'md',
      large: 'lg'
    }),
    children: figma.string('text'),
    icon: figma.instance('icon')
  }
})
```

## Configuration Details

### figma.config.json
- **include**: Specifies which component files to scan
- **exclude**: Files to ignore (tests, stories, build files)
- **designTokens**: References to our token files
- **components**: Component metadata and paths
- **pages**: Demo pages and documentation

### Design Token Benefits
1. **Consistency**: Single source of truth for design values
2. **Maintainability**: Easy updates across all components
3. **Scalability**: Simple to add new components and variants
4. **Dark Mode**: Built-in theme switching support
5. **Accessibility**: Consistent focus states and interactions

## Best Practices

### Component Development
1. Use design tokens instead of hardcoded values
2. Create semantic token mappings for component-specific values
3. Test all variants and sizes with design tokens
4. Ensure dark theme compatibility

### Figma Mapping
1. Map component props to Figma properties accurately
2. Use semantic naming for variants and properties
3. Include all interactive states (hover, focus, disabled)
4. Document prop types and expected values

### Token Management
1. Group related tokens logically
2. Use semantic naming conventions
3. Create component-specific tokens for complex components
4. Test token changes across all consuming components

## Troubleshooting

### Common Issues
1. **Build errors**: Check import paths after reorganization
2. **Missing tokens**: Ensure design tokens are imported in index.css
3. **Figma sync**: Verify component URLs in .figma.tsx files
4. **Style conflicts**: Check CSS specificity and token precedence

### Debug Commands
```bash
# Check current configuration
npm run figma:connect:list

# Validate component mappings
npm run figma:connect:publish --dry-run

# Test development server
npm run dev
```

## Next Steps

1. **Add More Components**: Follow the Button pattern for new components
2. **Enhance Tokens**: Add more semantic tokens as needed
3. **Theme System**: Extend dark mode support
4. **Documentation**: Create component documentation pages
5. **Testing**: Add visual regression tests for components
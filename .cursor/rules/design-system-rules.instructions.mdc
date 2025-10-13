---
description: Design system rules for Figma MCP integration and consistent code generation
applyTo: "**"
---

# Design System Rules for Figma MCP Integration

## Overview

This document provides comprehensive rules for integrating Figma designs using the Model Context Protocol (MCP) with our React-based design system. These rules ensure consistent code generation that aligns with our existing architecture and design tokens.

## Design System Structure

### 1. Token Definitions

**Location**: `src/styles/tokens/`

**Primary Files**:

- `figma-tokens.json` - Complete token definitions from Figma
- `colors.css` - CSS custom properties for colors
- `spacing.css` - Spacing and layout tokens
- `typography.css` - Font and text styling tokens
- `components.css` - Component-specific tokens

**Format**: CSS Custom Properties with semantic naming

```css
/* Example token structure */
:root {
  --color-primary-600: #2563eb;
  --spacing-component: 16px;
  --font-size-base: 16px;
  --radius-md: 6px;
}
```

**Token Transformation**: Figma tokens are imported via `figma-tokens.json` and transformed to CSS custom properties.

### 2. Component Library

**Location**: `src/components/ui/`

**Architecture**:

- Component-per-folder structure
- Each component has: `Component.jsx`, `Component.css`, `Component.figma.tsx`, `index.js`
- Uses class-variance-authority (CVA) for variant management
- Follows compound component pattern where applicable

**Example Structure**:

```text
src/components/ui/Button/
├── Button.jsx          # Main component
├── Button.css          # Component styles
├── Button.figma.tsx    # Code Connect definition
└── index.js            # Barrel export
```

**Component Documentation**: Code Connect integration with Figma for live documentation.

### 3. Frameworks & Libraries

**Core Framework**: React 18+ with Vite

**Styling**:

- CSS Modules approach with BEM-like naming
- CSS Custom Properties for design tokens
- class-variance-authority for variant management
- clsx for conditional class composition

**Build System**: Vite with PostCSS for CSS processing

### 4. Asset Management

**Location**: `src/assets/` (for MCP-generated assets)
**Storage**: Local file system with optimization

**Reference Pattern**:

```jsx
// MCP-generated assets
const image = '/Users/michel/GitHub/figma-demo/src/assets/generated-asset.png'
<img src={image} alt="Description" />
```

**Optimization**: Vite handles asset optimization during build

### 5. Icon System

**Current**: Basic icon integration (to be expanded)
**Usage Pattern**: Import icons as React components
**Convention**: PascalCase naming for icon components

### 6. Styling Approach

**Methodology**: Component-scoped CSS with design tokens
**Global Styles**: Defined in `src/index.css` and `src/styles/tokens/index.css`
**Responsive Design**: Mobile-first approach using custom breakpoint tokens

**CSS Structure**:

```css
/* Component.css */
.btn {
  /* Base styles using design tokens */
  padding: var(--spacing-component);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
}

.btn--primary {
  background-color: var(--color-primary-600);
  color: var(--color-primary-contrast);
}
```

### 7. Project Structure

```text
src/
├── components/
│   ├── ui/              # Design system components
│   └── index.js         # Component barrel exports
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
├── styles/              # Global styles and tokens
│   ├── tokens/          # Design token definitions
│   └── README.md        # Styling guidelines
└── App.jsx              # Root component
```

## MCP Integration Rules

### 1. Component Generation Rules

**CRITICAL**: When generating components from Figma:

1. **Use Existing Components**: Always check Code Connect mappings first
2. **Follow Token System**: Use CSS custom properties, never hardcoded values
3. **Maintain Architecture**: Follow CVA pattern for variants
4. **Preserve Structure**: Keep component folder organization

**Code Generation Template**:

```jsx
import React from "react";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import "./ComponentName.css";

const componentVariants = cva(
  "component-base", // Base classes
  {
    variants: {
      variant: {
        primary: "component--primary",
        secondary: "component--secondary",
      },
      size: {
        sm: "component--sm",
        md: "component--md",
        lg: "component--lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const ComponentName = React.forwardRef(
  (
    { variant = "primary", size = "md", className, children, ...props },
    ref
  ) => {
    return (
      <element
        ref={ref}
        className={clsx(componentVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </element>
    );
  }
);

ComponentName.displayName = "ComponentName";

export default ComponentName;
```

### 2. Styling Rules

**Token Usage**: Always use design tokens from the token system

```css
/* CORRECT */
.component {
  color: var(--color-foreground);
  background: var(--color-primary-600);
  padding: var(--spacing-component);
  border-radius: var(--radius-md);
}

/* INCORRECT */
.component {
  color: #18181b;
  background: #2563eb;
  padding: 16px;
  border-radius: 6px;
}
```

**Class Naming**: Follow BEM-like convention with component prefix

```css
.btn {
  /* Base component */
}
.btn--primary {
  /* Modifier */
}
.btn--sm {
  /* Size modifier */
}
.btn__icon {
  /* Element */
}
.btn--primary.btn--sm {
  /* Combined modifiers */
}
```

### 3. Asset Integration Rules

**Generated Assets**: Save to `src/assets/` with descriptive names
**Optimization**: Let Vite handle asset optimization
**Usage**: Import assets as constants and use in JSX

### 4. Code Connect Integration

**File Naming**: `ComponentName.figma.tsx` for Code Connect definitions
**Import Strategy**: Use existing components via Code Connect mappings
**Snippet Handling**: Remove `CodeConnectSnippet` wrapper elements from final code

### 5. Token Extraction Rules

When extracting design tokens from Figma:

1. **Map to Existing Tokens**: Use existing token names when possible
2. **Create New Tokens**: Add to appropriate token files for new values
3. **Maintain Hierarchy**: Follow semantic token naming (primitive → semantic → component)

**Token Mapping Examples**:

```css
/* Figma Variable → CSS Custom Property */
typography/font-size/lg → var(--font-size-lg)
spacing/tight → var(--spacing-tight)
button/primary/text → var(--button-primary-text)
```

### 6. Responsive Design Rules

**Breakpoint Strategy**: Mobile-first responsive design
**Token Usage**: Use spacing and sizing tokens for responsive values
**Implementation**: CSS custom properties with media queries

### 7. Error Handling & Validation

**Missing Tokens**: Log warnings for unmapped Figma variables
**Component Validation**: Ensure generated components follow architecture
**Build Integration**: Validate token usage during build process

## Quality Assurance

### 1. Code Generation Checklist

- [ ] Uses existing Code Connect components when available
- [ ] All styles use design tokens (no hardcoded values)
- [ ] Follows CVA pattern for variants
- [ ] Includes proper TypeScript/PropTypes definitions
- [ ] Maintains component folder structure
- [ ] Assets are properly imported and optimized

### 2. Token Validation

- [ ] All Figma variables are mapped to CSS custom properties
- [ ] New tokens follow semantic naming convention
- [ ] Token hierarchy is maintained (primitive → semantic → component)
- [ ] No hardcoded values in generated styles

### 3. Integration Testing

- [ ] Generated components render correctly
- [ ] Design tokens are applied properly
- [ ] Code Connect mappings are accurate
- [ ] Build process completes without errors

## Examples

### Button Component Integration

**Figma Selection** → **Generated Code**:

```jsx
// Generated from Figma using existing Code Connect mapping
import Button from "src/components/ui/Button/Button.jsx";

export default function ButtonExample() {
  return (
    <Button variant="primary" size="md" iconPosition="left">
      Click me
    </Button>
  );
}
```

**Corresponding CSS** (using design tokens):

```css
.btn {
  padding: var(--spacing-component);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  transition: var(--transition-base);
}

.btn--primary {
  background-color: var(--action-primary);
  color: var(--button-primary-text);
  border: 1px solid var(--action-primary);
}
```

## Maintenance

### Token Updates

1. Import new tokens from Figma via `figma-tokens.json`
2. Transform to CSS custom properties
3. Update component styles to use new tokens
4. Validate existing components still work

### Component Updates

1. Update Code Connect definitions when components change
2. Maintain backward compatibility where possible
3. Document breaking changes

### Documentation

1. Keep this rules file updated with new patterns
2. Document exceptions and special cases
3. Maintain examples for common use cases

---

_This document should be updated whenever design system architecture changes or new patterns are established._

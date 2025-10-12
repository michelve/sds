# Component Definitions Guide

## 📋 Overview

This guide covers how to properly define components for Figma Code Connect, including naming conventions, annotations, metadata, and best practices for maintainable design-to-code connections.

## 🏗️ Component Definition Fundamentals

### Basic Component Structure

```typescript
// src/components/ui/Button/Button.tsx
import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  onClick
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  };
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Code Connect Definition File

```typescript
// src/components/ui/Button/Button.figma.tsx
import React from 'react';
import { figma } from '@figma/code-connect';
import { Button } from './Button';

/**
 * Figma Component: https://www.figma.com/file/YOUR_FILE_KEY?node-id=123:456
 * 
 * This connects the Button component to its Figma counterpart.
 * Maps Figma properties to React props automatically.
 */
figma.connect(
  Button,
  'https://www.figma.com/file/YOUR_FILE_KEY?node-id=123:456',
  {
    // Map Figma properties to React props
    props: {
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Danger: 'danger'
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium',
        Large: 'large'
      }),
      disabled: figma.boolean('Disabled'),
      children: figma.textContent('Button Text')
    },
    
    // Example usage in Figma
    example: () => (
      <Button variant="primary" size="medium">
        Click me
      </Button>
    ),
    
    // Variants mapping
    variants: {
      'Variant=Primary, Size=Medium': () => (
        <Button variant="primary" size="medium">
          Primary Button
        </Button>
      ),
      'Variant=Secondary, Size=Small': () => (
        <Button variant="secondary" size="small">
          Secondary
        </Button>
      )
    }
  }
);
```

## 🎯 Component Annotation Patterns

### 1. Property Mapping

```typescript
// Basic property mapping
figma.connect(Component, nodeUrl, {
  props: {
    // String property
    title: figma.string('Title'),
    
    // Enum/Select property
    variant: figma.enum('Variant', {
      'Option A': 'valueA',
      'Option B': 'valueB'
    }),
    
    // Boolean property
    isActive: figma.boolean('Active'),
    
    // Number property
    count: figma.number('Count'),
    
    // Text content
    children: figma.textContent('Label'),
    
    // Instance swap
    icon: figma.instance('Icon'),
    
    // Nested text content
    description: figma.nestedProps('Content', {
      text: figma.textContent('Description')
    })
  }
});
```

### 2. Complex Property Mapping

```typescript
// Advanced property mapping with transformations
figma.connect(Card, nodeUrl, {
  props: {
    // Conditional mapping
    variant: figma.enum('Type', {
      'Product Card': 'product',
      'User Card': 'user',
      'Default': 'default'
    }),
    
    // Array mapping from instances
    actions: figma.children(['Action Button']),
    
    // Computed property
    isHighlighted: figma.boolean('Highlight', {
      true: true,
      false: false
    }),
    
    // Complex nested structure
    content: figma.nestedProps('Content', {
      title: figma.textContent('Title'),
      subtitle: figma.textContent('Subtitle'),
      image: figma.nestedProps('Image', {
        src: figma.string('Image URL'),
        alt: figma.string('Alt Text')
      })
    })
  }
});
```

### 3. Dynamic Content Mapping

```typescript
// Handle dynamic content from Figma
figma.connect(ProductGrid, nodeUrl, {
  props: {
    // Map all children of a certain type
    products: figma.children(['Product Card'], (child) => ({
      id: child.textContent('Product ID'),
      name: child.textContent('Product Name'),
      price: child.textContent('Price'),
      image: child.instance('Product Image')
    })),
    
    // Conditional rendering based on Figma state
    showFilters: figma.boolean('Show Filters'),
    
    // Layout configuration
    columns: figma.enum('Columns', {
      '2 Columns': 2,
      '3 Columns': 3,
      '4 Columns': 4
    })
  }
});
```

## 📝 Naming Conventions

### Component Naming

```typescript
// ✅ Good: Clear, descriptive names
export const Button = () => { /* ... */ };
export const ProductCard = () => { /* ... */ };
export const NavigationMenu = () => { /* ... */ };

// ❌ Avoid: Generic or ambiguous names
export const Component = () => { /* ... */ };
export const Item = () => { /* ... */ };
export const Thing = () => { /* ... */ };
```

### File Naming

```text
✅ Recommended Structure:
src/components/ui/Button/
├── Button.tsx          # Main component
├── Button.figma.tsx    # Figma connection
├── Button.test.tsx     # Tests
├── Button.stories.tsx  # Storybook stories
└── index.ts            # Exports

✅ Alternative Structure:
src/components/
├── Button.tsx          # Main component
├── Button.figma.tsx    # Figma connection
└── index.ts            # Barrel exports
```

### Property Naming

```typescript
// ✅ Good: Consistent with React conventions
interface ButtonProps {
  variant?: 'primary' | 'secondary';  // Use variant for style variations
  size?: 'small' | 'medium' | 'large'; // Use size for sizing options
  disabled?: boolean;                   // Use boolean props for states
  onClick?: () => void;                // Use onClick for click handlers
  children: React.ReactNode;           // Use children for content
}

// ❌ Avoid: Inconsistent or unclear naming
interface ButtonProps {
  type?: string;          // Too generic
  buttonSize?: string;    // Redundant prefix
  isDisabled?: boolean;   // Inconsistent with HTML
  clickHandler?: () => void; // Verbose
}
```

## 🔗 Figma Component Organization

### Figma Component Naming

```text
✅ Recommended Figma Structure:
Components/
├── Atoms/
│   ├── Button/Primary
│   ├── Button/Secondary
│   └── Input/Text Field
├── Molecules/
│   ├── Search Bar
│   └── Card/Product
└── Organisms/
    ├── Header/Navigation
    └── Product Grid

✅ Alternative Structure:
UI Components/
├── Button
│   ├── Primary
│   ├── Secondary
│   └── Danger
├── Form/
│   ├── Input
│   ├── Select
│   └── Checkbox
```

### Component Properties in Figma

```text
✅ Good Property Names:
- Variant (Primary, Secondary, Danger)
- Size (Small, Medium, Large) 
- State (Default, Hover, Disabled)
- Content (Show/Hide optional content)

❌ Avoid:
- Type (too generic)
- Style (ambiguous)
- Mode (unclear)
- Option (vague)
```

## 🏗️ Component Metadata

### Component Documentation

```typescript
// src/components/ui/Button/Button.figma.tsx
import React from 'react';
import { figma } from '@figma/code-connect';
import { Button } from './Button';

/**
 * Button Component
 * 
 * Primary interactive element for user actions.
 * Supports multiple variants, sizes, and states.
 * 
 * @figma https://www.figma.com/file/YOUR_FILE_KEY?node-id=123:456
 * @example
 * <Button variant="primary" onClick={handleClick}>
 *   Save Changes
 * </Button>
 */
figma.connect(
  Button,
  'https://www.figma.com/file/YOUR_FILE_KEY?node-id=123:456',
  {
    // Component metadata
    meta: {
      displayName: 'Button',
      description: 'Primary interactive element for user actions',
      category: 'Atoms',
      status: 'stable', // 'draft' | 'review' | 'stable' | 'deprecated'
      version: '1.2.0',
      lastUpdated: '2024-10-01',
      maintainer: 'Design System Team'
    },
    
    // Usage guidelines
    guidelines: {
      usage: 'Use for primary and secondary actions in forms and dialogs',
      accessibility: 'Always include meaningful text or aria-label',
      doNots: [
        'Do not use for navigation (use Link instead)',
        'Do not stack multiple primary buttons'
      ]
    },
    
    // Property mapping
    props: {
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Danger: 'danger'
      }),
      size: figma.enum('Size', {
        Small: 'small',
        Medium: 'medium', 
        Large: 'large'
      }),
      disabled: figma.boolean('Disabled'),
      children: figma.textContent('Button Text')
    }
  }
);
```

### Component Variants Documentation

```typescript
// Document all component variants
figma.connect(Button, nodeUrl, {
  variants: {
    // Primary variants
    'Variant=Primary, Size=Small': () => (
      <Button variant="primary" size="small">Small Primary</Button>
    ),
    'Variant=Primary, Size=Medium': () => (
      <Button variant="primary" size="medium">Medium Primary</Button>
    ),
    'Variant=Primary, Size=Large': () => (
      <Button variant="primary" size="large">Large Primary</Button>
    ),
    
    // Secondary variants  
    'Variant=Secondary, Size=Small': () => (
      <Button variant="secondary" size="small">Small Secondary</Button>
    ),
    'Variant=Secondary, Size=Medium': () => (
      <Button variant="secondary" size="medium">Medium Secondary</Button>
    ),
    
    // State variants
    'Variant=Primary, Disabled=true': () => (
      <Button variant="primary" disabled>Disabled Primary</Button>
    )
  }
});
```

## 🎨 Design Token Integration

### Using Design Tokens in Components

```typescript
// src/components/ui/Button/Button.tsx
import React from 'react';
import { tokens } from '../../../design-tokens';

export const Button: React.FC<ButtonProps> = ({ variant, size, children }) => {
  const styles = {
    // Use design tokens instead of hard-coded values
    borderRadius: tokens.border.radius.md,
    fontFamily: tokens.typography.fontFamily.sans,
    fontWeight: tokens.typography.fontWeight.medium,
    
    // Variant-specific tokens
    ...(variant === 'primary' && {
      backgroundColor: tokens.colors.primary[600],
      color: tokens.colors.white,
      '&:hover': {
        backgroundColor: tokens.colors.primary[700]
      }
    }),
    
    // Size-specific tokens
    ...(size === 'medium' && {
      padding: `${tokens.spacing[2]} ${tokens.spacing[4]}`,
      fontSize: tokens.typography.fontSize.base
    })
  };

  return (
    <button style={styles}>
      {children}
    </button>
  );
};
```

### Mapping Design Tokens in Figma Connect

```typescript
// Map Figma variables to design tokens
figma.connect(Button, nodeUrl, {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary'
    }),
    // Map design token values
    backgroundColor: figma.variable('Background Color', {
      'Primary 600': tokens.colors.primary[600],
      'Gray 200': tokens.colors.gray[200]
    }),
    borderRadius: figma.variable('Border Radius', {
      'Medium': tokens.border.radius.md,
      'Large': tokens.border.radius.lg
    })
  }
});
```

## ✅ Component Definition Best Practices

### 1. Consistency

```typescript
// ✅ Use consistent prop naming across components
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

interface CardProps {
  variant?: 'elevated' | 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}
```

### 2. Type Safety

```typescript
// ✅ Use strict TypeScript types
type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
}
```

### 3. Documentation

```typescript
// ✅ Document component purpose and usage
/**
 * Button component for user interactions
 * 
 * @param variant - Visual style variant
 * @param size - Size of the button
 * @param disabled - Whether button is disabled
 * @param children - Button content
 */
export const Button: React.FC<ButtonProps> = ({ ... }) => { ... };
```

### 4. Accessibility

```typescript
// ✅ Include accessibility considerations
export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  'aria-label': ariaLabel,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
```

## 🚨 Common Definition Issues

### Issue 1: Missing Property Mapping

```typescript
// ❌ Problem: Figma property not mapped
figma.connect(Button, nodeUrl, {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary'
      // Missing Secondary and Danger mappings
    })
  }
});

// ✅ Solution: Map all variants
figma.connect(Button, nodeUrl, {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary',
      Danger: 'danger'
    })
  }
});
```

### Issue 2: Inconsistent Naming

```typescript
// ❌ Problem: Mismatched names between Figma and code
// Figma: "Button Type" property with "Main" option
// Code: variant prop with "primary" value

// ✅ Solution: Consistent mapping
figma.connect(Button, nodeUrl, {
  props: {
    variant: figma.enum('Button Type', {
      Main: 'primary',      // Map Figma name to code value
      Secondary: 'secondary'
    })
  }
});
```

---

> 💡 **Next Step**: Learn how to [Connect Components](./component-connections.md)
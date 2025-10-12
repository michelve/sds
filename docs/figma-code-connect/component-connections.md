# Component Connections Guide

## 📋 Overview

This guide covers how to connect React components to Figma components using the Code Connect API, including automated discovery, manual connections, and advanced connection patterns.

## 🚀 Quick Start

### Basic Connection Workflow

```bash
# 1. Generate connections for all components
figma connect create --all

# 2. Generate connection for specific component
figma connect create src/components/Button/Button.tsx

# 3. Validate connections
figma connect validate

# 4. Publish to Figma
figma connect publish
```

## 🔗 Connection Methods

### Method 1: Automatic Discovery

```bash
# Auto-discover and connect all components
figma connect create --all --auto-discover

# Auto-discover with specific patterns
figma connect create --pattern "src/components/**/*.tsx" --auto-discover
```

**How it works:**
- Scans your codebase for React components
- Matches component names with Figma component names
- Creates connection files automatically
- Suggests property mappings based on prop interfaces

### Method 2: Manual Component Connection

```bash
# Create connection for specific component
figma connect create src/components/ui/Button/Button.tsx

# With explicit Figma node URL
figma connect create src/components/ui/Button/Button.tsx \
  --figma-url "https://www.figma.com/file/YOUR_KEY?node-id=123:456"
```

### Method 3: Interactive Connection

```bash
# Launch interactive connection wizard
figma connect create --interactive

# Follow prompts to:
# 1. Select component file
# 2. Choose Figma component
# 3. Map properties
# 4. Define variants
```

## 🎯 Connection API Reference

### Basic figma.connect() Usage

```typescript
import { figma } from '@figma/code-connect';
import { Button } from './Button';

// Basic connection
figma.connect(
  Button,                                           // React component
  'https://www.figma.com/file/KEY?node-id=123:456', // Figma component URL
  {
    props: {
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary'
      }),
      children: figma.textContent('Button Text')
    }
  }
);
```

### Advanced Connection Configuration

```typescript
figma.connect(Button, figmaUrl, {
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
    children: figma.textContent('Button Text'),
    icon: figma.instance('Icon')
  },
  
  // Variant examples
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
  },
  
  // Import statement for generated docs
  imports: ['import { Button } from "./Button"'],
  
  // Example usage
  example: () => (
    <Button variant="primary" onClick={() => console.log('clicked')}>
      Click me
    </Button>
  )
});
```

## 🏗️ Property Mapping Patterns

### String Properties

```typescript
// Simple string mapping
title: figma.string('Title')

// String with default value
title: figma.string('Title', 'Default Title')

// Conditional string mapping
status: figma.enum('Status', {
  'In Progress': 'in-progress',
  'Completed': 'completed',
  'Pending': 'pending'
})
```

### Boolean Properties

```typescript
// Boolean mapping
disabled: figma.boolean('Disabled')

// Boolean with custom mapping
isVisible: figma.boolean('Visible', {
  true: true,
  false: false
})

// Inverted boolean
isHidden: figma.boolean('Visible', {
  true: false,    // Figma "Visible=true" maps to isHidden=false
  false: true     // Figma "Visible=false" maps to isHidden=true
})
```

### Enum Properties

```typescript
// Basic enum mapping
variant: figma.enum('Variant', {
  'Primary Button': 'primary',
  'Secondary Button': 'secondary',
  'Danger Button': 'danger'
})

// Enum with transformation
alignment: figma.enum('Text Align', {
  'Left': 'start',
  'Center': 'center', 
  'Right': 'end'
})
```

### Text Content Mapping

```typescript
// Simple text content
children: figma.textContent('Button Text')

// Nested text content
title: figma.textContent('Card Title'),
subtitle: figma.textContent('Card Subtitle')

// Text with fallback
description: figma.textContent('Description', 'No description available')
```

### Instance Swapping

```typescript
// Map instance swaps to React components
icon: figma.instance('Icon Slot', {
  'ChevronDown': <ChevronDownIcon />,
  'ChevronUp': <ChevronUpIcon />,
  'Close': <CloseIcon />
})

// Instance with component mapping
avatar: figma.instance('Avatar', (instance) => {
  return <Avatar src={instance.getProperty('Image URL')} />
})
```

### Nested Properties

```typescript
// Nested object properties
content: figma.nestedProps('Content Container', {
  title: figma.textContent('Title'),
  description: figma.textContent('Description'),
  image: figma.nestedProps('Image', {
    src: figma.string('Image URL'),
    alt: figma.string('Alt Text')
  })
})
```

### Children Mapping

```typescript
// Map children components
buttons: figma.children(['Action Button'], (child) => (
  <Button
    variant={child.getProperty('Variant')}
    onClick={() => console.log('clicked')}
  >
    {child.textContent('Button Text')}
  </Button>
))

// Map list items
items: figma.children(['List Item'], (item, index) => ({
  id: index,
  title: item.textContent('Item Title'),
  selected: item.getProperty('Selected')
}))
```

## 🔧 Advanced Connection Patterns

### Conditional Rendering

```typescript
figma.connect(Modal, figmaUrl, {
  props: {
    isOpen: figma.boolean('Visible'),
    title: figma.textContent('Modal Title'),
    
    // Conditional content based on Figma state
    showFooter: figma.boolean('Show Footer'),
    actions: figma.children(['Footer Button'], (button) => {
      // Only render if showFooter is true
      return figma.boolean('Show Footer') ? (
        <Button variant={button.getProperty('Variant')}>
          {button.textContent('Button Text')}
        </Button>
      ) : null;
    })
  },
  
  variants: {
    'Visible=true, Show Footer=true': () => (
      <Modal isOpen={true} title="Modal with Footer">
        <p>Modal content</p>
        <Button>Close</Button>
      </Modal>
    ),
    'Visible=true, Show Footer=false': () => (
      <Modal isOpen={true} title="Simple Modal">
        <p>Modal content</p>
      </Modal>
    )
  }
});
```

### Dynamic Lists

```typescript
figma.connect(ProductGrid, figmaUrl, {
  props: {
    columns: figma.enum('Columns', {
      '2 Columns': 2,
      '3 Columns': 3,
      '4 Columns': 4
    }),
    
    // Map product cards to array of props
    products: figma.children(['Product Card'], (card) => ({
      id: card.textContent('Product ID'),
      name: card.textContent('Product Name'), 
      price: card.textContent('Price'),
      image: card.instance('Product Image'),
      onSale: card.getProperty('On Sale')
    }))
  },
  
  example: () => (
    <ProductGrid columns={3}>
      {[1, 2, 3, 4, 5, 6].map(id => (
        <ProductCard
          key={id}
          name={`Product ${id}`}
          price="$99"
          image="/placeholder.jpg"
        />
      ))}
    </ProductGrid>
  )
});
```

### Form Components

```typescript
figma.connect(FormField, figmaUrl, {
  props: {
    label: figma.textContent('Field Label'),
    required: figma.boolean('Required'),
    error: figma.textContent('Error Message'),
    
    // Map input type based on Figma variant
    type: figma.enum('Input Type', {
      'Text Field': 'text',
      'Email Field': 'email',
      'Password Field': 'password',
      'Number Field': 'number'
    }),
    
    // Conditional error state
    hasError: figma.boolean('Has Error'),
    placeholder: figma.string('Placeholder Text')
  },
  
  variants: {
    'Input Type=Text Field, Required=true': () => (
      <FormField
        label="Full Name"
        type="text"
        required={true}
        placeholder="Enter your full name"
      />
    ),
    'Input Type=Email Field, Has Error=true': () => (
      <FormField
        label="Email Address"
        type="email"
        hasError={true}
        error="Please enter a valid email address"
      />
    )
  }
});
```

## 🔍 Connection Discovery

### Component Matching Strategies

```javascript
// figma.config.js - Configure matching
module.exports = {
  matching: {
    // Strategy for matching components
    strategy: 'name-based', // 'name-based' | 'pattern-based' | 'manual'
    
    // Name transformation rules
    nameTransform: {
      // Remove prefixes from Figma component names
      removePrefix: ['Component/', 'UI/', 'Atoms/', 'Molecules/'],
      
      // Remove suffixes
      removeSuffix: [' Component', ' Element'],
      
      // Case conversion
      caseTransform: 'PascalCase', // 'PascalCase' | 'camelCase'
      
      // Custom mappings
      customMappings: {
        'Button / Primary': 'Button',
        'Text Input Field': 'TextInput',
        'Card / Product': 'ProductCard'
      }
    },
    
    // Pattern-based matching
    patterns: [
      {
        figmaPattern: 'Button/*',
        codePattern: 'src/components/**/Button.tsx'
      },
      {
        figmaPattern: 'Form/*',
        codePattern: 'src/components/forms/**/*.tsx'
      }
    ]
  }
};
```

### Automated Property Detection

```typescript
// Auto-detect properties from TypeScript interfaces
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: React.ReactNode;
}

// Code Connect can auto-generate this mapping:
figma.connect(Button, figmaUrl, {
  props: {
    // Auto-detected from ButtonProps interface
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
});
```

## 🎯 Connection Validation

### Validate Connections

```bash
# Validate all connections
figma connect validate

# Validate specific component
figma connect validate src/components/Button/Button.tsx

# Validate with detailed output
figma connect validate --verbose

# Check for missing mappings
figma connect validate --check-missing
```

### Validation Output

```text
✅ Button (src/components/Button/Button.tsx)
   - Connected to: Button / Primary (123:456)
   - Props mapped: variant, size, disabled, children
   - Variants defined: 3

❌ Card (src/components/Card/Card.tsx)
   - Error: Missing Figma component URL
   - Warning: Property 'elevation' not mapped

⚠️  ProductGrid (src/components/ProductGrid/ProductGrid.tsx)
   - Connected to: Product Grid (789:012)
   - Warning: Figma property 'Show Filters' not mapped to code
   - Suggestion: Add showFilters prop to component
```

## 📊 Connection Management

### Publishing Connections

```bash
# Publish all connections to Figma
figma connect publish

# Publish specific component
figma connect publish src/components/Button/Button.tsx

# Publish with custom message
figma connect publish --message "Updated button variants"

# Dry run (preview changes)
figma connect publish --dry-run
```

### Syncing Changes

```bash
# Sync changes from Figma
figma connect sync

# Watch for changes (development mode)
figma connect watch

# Pull latest component definitions
figma connect pull
```

### Connection Status

```bash
# Check connection status
figma connect status

# List all connected components
figma connect list

# Show component details
figma connect info src/components/Button/Button.tsx
```

## 🚨 Troubleshooting Connections

### Common Connection Issues

#### Issue 1: Component Not Found

```bash
# Error: Component not found in Figma
# Solution: Check Figma URL and component visibility

# Verify URL format
figma connect validate --check-urls

# List available components in Figma file
figma connect list --figma-file
```

#### Issue 2: Property Mapping Failed

```typescript
// Error: Property 'variant' not found in Figma component
// Solution: Check Figma property names

// List Figma component properties
figma connect inspect "https://www.figma.com/file/KEY?node-id=123:456"

// Update mapping with correct property name
props: {
  variant: figma.enum('Button Type', {  // Correct property name
    Primary: 'primary',
    Secondary: 'secondary'
  })
}
```

#### Issue 3: Instance Swapping Not Working

```typescript
// Error: Instance swap property not recognized
// Solution: Check instance swap configuration in Figma

// Ensure Figma component has instance swap property
// Update mapping to match Figma instance names
icon: figma.instance('Icon', {
  'icon-chevron-down': <ChevronDownIcon />,  // Match exact Figma instance name
  'icon-chevron-up': <ChevronUpIcon />
})
```

### Debug Commands

```bash
# Debug connection issues
figma connect debug src/components/Button/Button.tsx

# Inspect Figma component
figma connect inspect --figma-url "https://www.figma.com/file/KEY?node-id=123:456"

# Test connection locally
figma connect test src/components/Button/Button.tsx

# Generate connection report
figma connect report --output connections-report.json
```

## ✅ Connection Best Practices

### 1. Consistent Naming

```typescript
// ✅ Use consistent naming between Figma and code
// Figma: "Button / Primary"
// Code: Button component with variant="primary"

figma.connect(Button, figmaUrl, {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',    // Match naming conventions
      Secondary: 'secondary'
    })
  }
});
```

### 2. Complete Property Mapping

```typescript
// ✅ Map all relevant Figma properties
figma.connect(Button, figmaUrl, {
  props: {
    variant: figma.enum('Variant', { /* all variants */ }),
    size: figma.enum('Size', { /* all sizes */ }),
    disabled: figma.boolean('Disabled'),
    children: figma.textContent('Button Text'),
    icon: figma.instance('Icon')  // Don't forget optional props
  }
});
```

### 3. Comprehensive Variants

```typescript
// ✅ Define examples for all major variant combinations
figma.connect(Button, figmaUrl, {
  variants: {
    'Variant=Primary, Size=Small': () => <Button variant="primary" size="small">Small</Button>,
    'Variant=Primary, Size=Medium': () => <Button variant="primary" size="medium">Medium</Button>,
    'Variant=Primary, Size=Large': () => <Button variant="primary" size="large">Large</Button>,
    'Variant=Secondary, Size=Medium': () => <Button variant="secondary" size="medium">Secondary</Button>,
    'Disabled=true': () => <Button disabled>Disabled</Button>
  }
});
```

### 4. Documentation

```typescript
// ✅ Include clear documentation
/**
 * Connects Button component to Figma
 * 
 * Figma Component: https://www.figma.com/file/KEY?node-id=123:456
 * 
 * Mapped Properties:
 * - Variant: Controls button style (primary, secondary, danger)
 * - Size: Controls button size (small, medium, large)
 * - Disabled: Disables button interaction
 * - Icon: Optional icon instance swap
 */
figma.connect(Button, figmaUrl, { /* ... */ });
```

---

> 💡 **Next Step**: Explore [Examples & Patterns](./examples.md) for real-world implementations
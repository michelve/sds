# Multi-Framework Figma Code Connect Configuration

This document explains how the SDS monorepo supports multiple frameworks (React, Angular, Vue, Web Components) with Figma Code Connect.

## Configuration Structure

The `figma.config.json` is configured as an array of framework-specific configurations, each with its own parser and path mappings:

```json
{
  "codeConnect": [
    {
      "label": "React",
      "include": ["packages/ui-react/src/**/*"],
      "parser": "react",
      // React-specific configuration
    },
    {
      "label": "Angular", 
      "include": ["packages/ui-angular/src/**/*"],
      "parser": "typescript",
      // Angular-specific configuration
    },
    {
      "label": "Vue",
      "include": ["packages/ui-vue/src/**/*"], 
      "parser": "vue",
      // Vue-specific configuration
    },
    {
      "label": "Web Components",
      "include": ["packages/ui-web-components/src/**/*"],
      "parser": "typescript",
      // Web Components configuration
    }
  ],
  "shared": {
    "documentUrlSubstitutions": {
      // Shared Figma node URLs
    }
  }
}
```

## Framework-Specific Setups

### 1. React Implementation
- **Parser**: `react`
- **Location**: `packages/ui-react/src/`
- **File Pattern**: `*.figma.tsx`
- **Import Aliases**: `compositions`, `layout`, `primitives`, etc.

**Example React Code Connect file:**
```typescript
// packages/ui-react/src/figma/primitives/Button.figma.tsx
import figma from '@figma/code-connect';
import { Button } from 'primitives';

figma.connect(Button, 'https://figma.com/design/...', {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary'
    })
  }
});
```

### 2. Angular Implementation  
- **Parser**: `typescript`
- **Location**: `packages/ui-angular/src/`
- **File Pattern**: `*.figma.ts`
- **Import Aliases**: `@sds/components`, `@sds/directives`, `@sds/services`

**Example Angular Code Connect file:**
```typescript
// packages/ui-angular/src/figma/button.figma.ts
import figma from '@figma/code-connect';

figma.connect('https://figma.com/design/...', {
  template: `
    <sds-button 
      [variant]="{{variant}}"
      [disabled]="{{disabled}}">
      {{children}}
    </sds-button>
  `,
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary'
    }),
    disabled: figma.boolean('Disabled')
  }
});
```

### 3. Vue Implementation
- **Parser**: `vue` 
- **Location**: `packages/ui-vue/src/`
- **File Pattern**: `*.figma.vue` or `*.figma.js`
- **Import Aliases**: `@sds/components`, `@sds/composables`, `@sds/utils`

**Example Vue Code Connect file:**
```javascript
// packages/ui-vue/src/figma/SdsButton.figma.js
import figma from '@figma/code-connect';

figma.connect('https://figma.com/design/...', {
  template: `
    <SdsButton 
      :variant="{{variant}}"
      :disabled="{{disabled}}">
      {{children}}
    </SdsButton>
  `,
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary'  
    }),
    disabled: figma.boolean('Disabled')
  }
});
```

### 4. Web Components Implementation
- **Parser**: `typescript`
- **Location**: `packages/ui-web-components/src/`  
- **File Pattern**: `*.figma.ts`
- **Import Aliases**: `@sds/elements`, `@sds/mixins`

**Example Web Components Code Connect file:**
```typescript
// packages/ui-web-components/src/figma/sds-button.figma.ts
import figma from '@figma/code-connect';

figma.connect('https://figma.com/design/...', {
  template: `
    <sds-button 
      variant="{{variant}}"
      {{#disabled}}disabled{{/disabled}}>
      {{children}}
    </sds-button>
  `,
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary', 
      Secondary: 'secondary'
    }),
    disabled: figma.boolean('Disabled')
  }
});
```

## Directory Structure

```
packages/
├── ui-react/
│   └── src/
│       ├── figma/
│       │   ├── primitives/
│       │   │   ├── Button.figma.tsx
│       │   │   ├── Input.figma.tsx
│       │   │   └── ...
│       │   └── compositions/
│       │       ├── Card.figma.tsx
│       │       └── ...
│       ├── primitives/
│       ├── compositions/
│       └── ...
├── ui-angular/
│   └── src/
│       ├── figma/
│       │   ├── button.figma.ts
│       │   ├── input.figma.ts
│       │   └── ...
│       └── lib/
│           ├── components/
│           ├── directives/ 
│           └── services/
├── ui-vue/
│   └── src/
│       ├── figma/
│       │   ├── SdsButton.figma.js
│       │   ├── SdsInput.figma.js
│       │   └── ...
│       └── components/
├── ui-web-components/
│   └── src/
│       ├── figma/
│       │   ├── sds-button.figma.ts
│       │   ├── sds-input.figma.ts  
│       │   └── ...
│       └── elements/
```

## Publishing Commands

### Publish All Frameworks
```bash
# Publishes all framework configurations
npx @figma/code-connect connect publish

# With explicit token
FIGMA_ACCESS_TOKEN=your_token npx @figma/code-connect connect publish
```

### Publish Specific Framework
```bash
# Publish only React components
npx @figma/code-connect connect publish --include "packages/ui-react/**/*"

# Publish only Angular components  
npx @figma/code-connect connect publish --include "packages/ui-angular/**/*"

# Publish only Vue components
npx @figma/code-connect connect publish --include "packages/ui-vue/**/*"
```

### Development & Testing
```bash
# Parse and validate without publishing
npx @figma/code-connect connect parse

# Dry run to see what would be published
npx @figma/code-connect connect publish --dry-run

# Parse specific framework
npx @figma/code-connect connect parse --include "packages/ui-react/**/*"
```

## Best Practices

### 1. Consistent Component Mapping
- Map the same Figma component to equivalent implementations in each framework
- Use consistent prop names across frameworks where possible
- Document framework-specific differences

### 2. Shared Documentation URLs  
- Use the `shared.documentUrlSubstitutions` for Figma node URLs
- This ensures all frameworks reference the same Figma components
- Makes maintenance easier when Figma URLs change

### 3. Framework-Specific Patterns
- **React**: Use JSX syntax and React-specific patterns
- **Angular**: Use Angular template syntax and directives
- **Vue**: Use Vue template syntax and v-directives  
- **Web Components**: Use standard HTML attributes and properties

### 4. Import Path Consistency
- Use consistent import aliases across frameworks when possible
- Follow each framework's conventions for component organization
- Document the mapping between Figma layers and code imports

### 5. Testing Strategy
- Test Code Connect files for each framework separately
- Validate that generated code examples work in each framework
- Use dry-run publishing to catch issues before publishing

## Troubleshooting

### Import Resolution Issues
If you see "Import could not be resolved" errors:

1. Check that the `paths` configuration matches your actual file structure
2. Verify that `include` globs are correct for each framework
3. Ensure import aliases in `importPaths` match your component exports

### Parser Issues  
- **React**: Ensure `.figma.tsx` files use proper TypeScript syntax
- **Angular**: Use `.figma.ts` files with proper Angular imports
- **Vue**: Use `.figma.js` or `.figma.vue` files as appropriate
- **Web Components**: Use `.figma.ts` files with proper element imports

### Publishing Issues
- Run with `--dry-run` first to identify issues
- Check that FIGMA_ACCESS_TOKEN is properly set
- Verify file paths match the `include` patterns
- Ensure no syntax errors in Code Connect files

## Benefits of Multi-Framework Setup

1. **Single Source of Truth**: One Figma file drives multiple framework implementations
2. **Consistent Design**: All frameworks stay in sync with the design system
3. **Developer Experience**: Developers see framework-specific code in Figma Dev Mode
4. **Maintenance**: Centralized configuration with shared URLs and mappings
5. **Flexibility**: Each framework can have its own conventions while sharing designs

## Future Considerations

- Add support for additional frameworks (Svelte, Solid, etc.)
- Consider automated testing for Code Connect files
- Implement CI/CD integration for automatic publishing
- Add validation for cross-framework consistency
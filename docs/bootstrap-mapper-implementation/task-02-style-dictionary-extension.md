# Task 02: Style Dictionary Extension

## 🎯 User Story

**As a developer**, I want Style Dictionary to automatically transform SDS tokens into Bootstrap-compatible SCSS variables using the mapping configuration, so that I can generate Bootstrap theme overrides without manual intervention.

## 📋 Description

Extend the existing Style Dictionary configuration with Bootstrap-specific transforms and formats. This will consume the mapping configuration from Task 01 and generate valid Bootstrap SCSS variable overrides.

## 🎨 Technical Requirements

### 1. Bootstrap Transform Registration

**Location**: `/packages/design-tokens/src/transforms/bootstrap.js`

```javascript
import StyleDictionary from 'style-dictionary';
import { bootstrap5Mapping } from '../mappings/bootstrap5.mapping.js';

// Transform SDS token names to Bootstrap variable names
StyleDictionary.registerTransform({
  name: 'name/bootstrap5',
  type: 'name',
  matcher: (token) => {
    // Only transform tokens that have Bootstrap mappings
    const tokenPath = token.path.join('.');
    return bootstrap5Mapping.mappings.colors[tokenPath] ||
           bootstrap5Mapping.mappings.spacing[tokenPath] ||
           bootstrap5Mapping.mappings.typography[tokenPath] ||
           bootstrap5Mapping.mappings.borders[tokenPath];
  },
  transformer: (token, options) => {
    const tokenPath = token.path.join('.');
    
    // Check all mapping categories
    for (const category of ['colors', 'spacing', 'typography', 'borders']) {
      const mapping = bootstrap5Mapping.mappings[category][tokenPath];
      if (mapping) {
        return mapping;
      }
    }
    
    // Fallback to SDS-prefixed variable
    return `$sds-${token.path.join('-')}`;
  }
});

// Transform values for Bootstrap compatibility
StyleDictionary.registerTransform({
  name: 'value/bootstrap5',
  type: 'value',
  matcher: (token) => true,
  transformer: (token, options) => {
    // Handle special Bootstrap value transformations
    if (token.path.includes('spacing')) {
      return handleSpacingCalculation(token);
    }
    
    // Handle color values
    if (token.$type === 'color') {
      return token.$value;
    }
    
    // Handle dimension values
    if (token.$type === 'dimension') {
      return convertToBootstrapUnits(token.$value);
    }
    
    return token.$value;
  }
});

function handleSpacingCalculation(token) {
  const tokenPath = token.path.join('.');
  const multiplier = bootstrap5Mapping.calculations.spacerMultipliers[tokenPath];
  
  if (multiplier !== undefined) {
    if (multiplier === 1) {
      return '$spacer';
    } else {
      return `$spacer * ${multiplier}`;
    }
  }
  
  return token.$value;
}

function convertToBootstrapUnits(value) {
  // Convert px to rem if needed
  if (typeof value === 'string' && value.endsWith('px')) {
    const pxValue = parseFloat(value);
    return `${pxValue / 16}rem`;
  }
  return value;
}
```

### 2. Bootstrap Format Registration

**Location**: `/packages/design-tokens/src/formats/bootstrap.js`

```javascript
import StyleDictionary from 'style-dictionary';

StyleDictionary.registerFormat({
  name: 'scss/bootstrap-overrides',
  formatter: ({ dictionary, options }) => {
    const { framework = 'Bootstrap' } = options;
    
    // Filter tokens that have Bootstrap mappings
    const mappedTokens = dictionary.allTokens.filter(token => {
      return token.name && token.name.startsWith('$');
    });
    
    // Group tokens by category for better organization
    const categories = {
      colors: [],
      spacing: [],
      typography: [],
      borders: [],
      other: []
    };
    
    mappedTokens.forEach(token => {
      const category = categorizeToken(token);
      categories[category].push(token);
    });
    
    // Generate SCSS output
    let output = `// ${framework} 5.3 Variable Overrides\n`;
    output += `// Generated from SDS Design Tokens\n`;
    output += `// DO NOT EDIT MANUALLY\n\n`;
    
    // Output each category
    Object.entries(categories).forEach(([categoryName, tokens]) => {
      if (tokens.length > 0) {
        output += `// ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}\n`;
        
        tokens.forEach(token => {
          const comment = token.comment ? ` // ${token.comment}` : '';
          output += `${token.name}: ${token.value} !default;${comment}\n`;
        });
        
        output += '\n';
      }
    });
    
    output += `// Import Bootstrap after setting overrides\n`;
    output += `// @import "bootstrap";\n`;
    
    return output;
  }
});

function categorizeToken(token) {
  if (token.name.includes('primary') || token.name.includes('success') || 
      token.name.includes('danger') || token.name.includes('warning')) {
    return 'colors';
  }
  if (token.name.includes('spacer') || token.name.includes('gutter')) {
    return 'spacing';
  }
  if (token.name.includes('font') || token.name.includes('line-height')) {
    return 'typography';
  }
  if (token.name.includes('border') || token.name.includes('radius')) {
    return 'borders';
  }
  return 'other';
}
```

### 3. Style Dictionary Config Extension

**Location**: Modify `/packages/design-tokens/style-dictionary.config.js`

```javascript
// Add imports for Bootstrap extensions
import './src/transforms/bootstrap.js';
import './src/formats/bootstrap.js';

// Add Bootstrap platform to existing config
export default {
  // ... existing configuration ...
  
  platforms: {
    // ... existing platforms (css, scss, js, json) ...
    
    // NEW: Bootstrap platform
    bootstrap5: {
      transformGroup: 'scss',
      prefix: '', // No prefix, we want native Bootstrap variable names
      buildPath: 'dist/bootstrap/',
      transforms: [
        'name/bootstrap5',     // Custom Bootstrap name transform
        'value/bootstrap5',    // Custom Bootstrap value transform
        'value/figma/color',   // Existing color transform
        'value/figma/size'     // Existing size transform
      ],
      files: [
        {
          destination: '_sds-bootstrap-overrides.scss',
          format: 'scss/bootstrap-overrides',
          filter: (token) => {
            // Only include tokens that map to Bootstrap variables
            return token.name && token.name.startsWith('$');
          },
          options: {
            framework: 'Bootstrap',
            showFileHeader: false
          }
        }
      ]
    }
  }
};
```

## ✅ Acceptance Criteria

### Functional Requirements

- [ ] Bootstrap-specific transforms registered in Style Dictionary
- [ ] Name transform converts SDS paths to Bootstrap variable names
- [ ] Value transform handles Bootstrap-specific value formats
- [ ] SCSS format generates valid Bootstrap variable overrides
- [ ] Existing Style Dictionary functionality remains unchanged
- [ ] Generated SCSS uses `!default` flags for proper Bootstrap override behavior

### Technical Requirements

- [ ] Transforms use mapping configuration from Task 01
- [ ] Generated SCSS is syntactically valid
- [ ] Build process includes Bootstrap platform
- [ ] Error handling for unmapped tokens
- [ ] Performance optimized for build-time execution

### Quality Requirements

- [ ] Generated overrides work with Bootstrap 5.3 build process
- [ ] Clear comments and documentation in generated SCSS
- [ ] Organized output with logical token grouping
- [ ] No breaking changes to existing token outputs

## 🔍 Implementation Details

### Transform Chain Strategy

1. **Token Filtering**: Only process tokens with Bootstrap mappings
2. **Name Transform**: Convert SDS token paths to Bootstrap variables
3. **Value Transform**: Handle Bootstrap-specific value requirements
4. **Format Output**: Generate organized SCSS with proper Bootstrap conventions

### Error Handling

```javascript
// Graceful handling of unmapped tokens
transformer: (token, options) => {
  try {
    return applyBootstrapMapping(token);
  } catch (error) {
    console.warn(`Bootstrap mapping failed for token: ${token.name}`);
    return generateFallbackVariable(token);
  }
}
```

### Performance Considerations

- Lazy loading of mapping configuration
- Efficient token filtering to avoid unnecessary processing
- Minimal memory footprint during transformation

## 🧪 Testing Strategy

### Unit Tests

```javascript
describe('Bootstrap Transforms', () => {
  test('should transform SDS color tokens to Bootstrap variables', () => {
    const token = { path: ['color', 'primary', 'default'], $value: '#0066cc' };
    const result = nameTransform(token);
    expect(result).toBe('$primary');
  });
  
  test('should handle spacing calculations', () => {
    const token = { path: ['size', 'spacing', '2'], $value: '0.5rem' };
    const result = valueTransform(token);
    expect(result).toBe('$spacer * 0.5');
  });
});
```

### Integration Tests

- Generate Bootstrap overrides and validate SCSS syntax
- Test with actual Bootstrap build process
- Verify generated variables override Bootstrap defaults correctly

## 📝 Output Example

Expected generated file: `dist/bootstrap/_sds-bootstrap-overrides.scss`

```scss
// Bootstrap 5.3 Variable Overrides
// Generated from SDS Design Tokens
// DO NOT EDIT MANUALLY

// Colors
$primary: #14ae5c !default; // SDS Primary Color
$success: #14ae5c !default; // SDS Success Color
$danger: #dc3545 !default; // SDS Danger Color
$warning: #ffc107 !default; // SDS Warning Color

// Spacing
$spacer: 1rem !default; // SDS Base Spacing
$grid-gutter-width: $spacer * 1.5 !default;

// Typography
$font-family-base: 'Inter', sans-serif !default; // SDS Sans Font Family
$font-size-base: 1rem !default; // SDS Base Font Size

// Borders
$border-radius: 4px !default; // SDS Default Border Radius
$border-radius-sm: 2px !default; // SDS Small Border Radius

// Import Bootstrap after setting overrides
// @import "bootstrap";
```

## 🔗 Dependencies

- Task 01 (Bootstrap Mapping Configuration) must be completed
- Current Style Dictionary setup
- Bootstrap 5.3 SCSS source for validation

## 🚀 Next Steps

After completion, Task 03 will integrate this into the build system and create the Bootstrap build target platform.
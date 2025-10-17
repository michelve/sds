# Token Mapping Strategy

## 🎯 SDS → Bootstrap Mapping Approach

This document outlines the strategic approach for mapping SDS design tokens to Bootstrap 5.3 SCSS variables, ensuring semantic consistency and maintainability.

## 🧠 Mapping Philosophy

### Semantic Over Systematic
**Challenge**: SDS uses systematic token naming (color-primary-500) while Bootstrap uses semantic naming ($primary).

**Solution**: Map SDS semantic tokens to Bootstrap semantic variables, not primitive tokens.

```
✅ GOOD: sds-color-primary → $primary
❌ BAD:  sds-color-blue-500 → $primary
```

### Value Preservation
Maintain SDS design decisions while working within Bootstrap's constraints.

```scss
// SDS Intent: Primary color should be green #14ae5c
// Bootstrap Implementation: $primary: #14ae5c !default;
```

## 📊 Token Categories & Mapping Strategy

### 1. Colors - Semantic Mapping

**SDS Structure:**
```json
{
  "color": {
    "primary": { "default": "#14ae5c" },
    "success": { "default": "#14ae5c" },
    "danger": { "default": "#dc3545" },
    "warning": { "default": "#ffc107" }
  }
}
```

**Bootstrap Targets:**
```scss
$primary: #14ae5c !default;
$success: #14ae5c !default;
$danger: #dc3545 !default;
$warning: #ffc107 !default;
```

**Mapping Rules:**
- Direct semantic mapping where possible
- Fallback to closest semantic equivalent
- Generate SDS-prefixed variables for unmapped tokens

### 2. Spacing - Multiplicative System

**Challenge**: Bootstrap uses multiplicative spacing ($spacer * 0.5) while SDS uses absolute values.

**Solution**: Calculate multipliers based on SDS base spacing unit.

```javascript
// Mapping Logic:
const sdsBaseSpacing = getSdsToken('size.spacing.4'); // Assume this is base (1rem)
const multiplier = sdsTokenValue / sdsBaseSpacing;
return `$spacer * ${multiplier}`;
```

**Example:**
```scss
// SDS: size-spacing-2 = 0.5rem, size-spacing-4 = 1rem (base)
// Result: $spacer * 0.5 (where $spacer = 1rem)
```

### 3. Typography - Hierarchical Mapping

**SDS Structure:**
```json
{
  "typography": {
    "font-family": { "sans": "'Inter', sans-serif" },
    "font-size": { "base": "1rem" },
    "font-weight": { "normal": "400", "bold": "700" }
  }
}
```

**Bootstrap Mapping:**
```scss
$font-family-base: 'Inter', sans-serif !default;
$font-size-base: 1rem !default;
$font-weight-normal: 400 !default;
$font-weight-bold: 700 !default;
```

### 4. Borders & Radius - Size Mapping

**Strategy**: Map SDS border tokens to Bootstrap radius scale.

```
sds-size-border-radius-sm   → $border-radius-sm
sds-size-border-radius-md   → $border-radius
sds-size-border-radius-lg   → $border-radius-lg
```

## 🔄 Mapping Algorithm

### 1. Token Discovery
```javascript
function discoverMappableTokens(sdsTokens, bootstrapMapping) {
  const mappable = [];
  const unmappable = [];
  
  sdsTokens.forEach(token => {
    const mapping = findBootstrapMapping(token.path);
    if (mapping) {
      mappable.push({ token, mapping });
    } else {
      unmappable.push(token);
    }
  });
  
  return { mappable, unmappable };
}
```

### 2. Value Transformation
```javascript
function transformValue(sdsToken, bootstrapContext) {
  // Handle special cases
  if (isSpacingToken(sdsToken)) {
    return calculateSpacerMultiplier(sdsToken);
  }
  
  if (isColorToken(sdsToken)) {
    return transformColorValue(sdsToken);
  }
  
  // Default: use value as-is
  return sdsToken.value;
}
```

### 3. Fallback Generation
```javascript
function generateFallback(unmappedToken) {
  // Generate $sds-[token-path] for unmapped tokens
  const fallbackName = `$sds-${unmappedToken.path.join('-')}`;
  return {
    name: fallbackName,
    value: unmappedToken.value,
    comment: `Unmapped SDS token: ${unmappedToken.path.join('.')}`
  };
}
```

## 🎛️ Configuration Strategy

### Mapping Configuration Structure
```javascript
export const mappingConfig = {
  // Direct mappings: SDS path → Bootstrap variable
  direct: {
    'color.primary.default': '$primary',
    'typography.font-family.sans': '$font-family-base'
  },
  
  // Calculated mappings: require transformation logic
  calculated: {
    'size.spacing.*': {
      transformer: 'spacerMultiplier',
      base: 'size.spacing.4' // Base spacing unit
    }
  },
  
  // Pattern mappings: regex-based matching
  patterns: [
    {
      pattern: /^color\.([^.]+)\.default$/,
      template: '${{match[1]}}'
    }
  ],
  
  // Fallback configuration
  fallback: {
    prefix: 'sds-',
    generateUnmapped: true
  }
};
```

### Extensibility Design
```javascript
// Framework-agnostic base
export const baseMappingStrategy = {
  colors: 'semantic',
  spacing: 'multiplicative', 
  typography: 'hierarchical',
  borders: 'scale-based'
};

// Framework-specific extensions
export const bootstrap5Strategy = {
  ...baseMappingStrategy,
  spacingBase: '$spacer',
  colorFormat: 'scss-variable',
  fallbackPrefix: '$sds-'
};

export const tailwindStrategy = {
  ...baseMappingStrategy,
  spacingBase: 'theme.spacing',
  colorFormat: 'object-notation',
  fallbackPrefix: 'sds-'
};
```

## 🧪 Validation Strategy

### Mapping Completeness
```javascript
function validateMappingCompleteness(mappings) {
  const requiredBootstrapVars = [
    '$primary', '$success', '$danger', '$warning',
    '$spacer', '$font-family-base', '$border-radius'
  ];
  
  requiredBootstrapVars.forEach(variable => {
    if (!mappings.find(m => m.name === variable)) {
      throw new Error(`Missing required Bootstrap variable: ${variable}`);
    }
  });
}
```

### Bootstrap Compatibility
```javascript
function validateBootstrapCompatibility(generatedScss) {
  // Compile with Bootstrap to ensure compatibility
  const testScss = `
    ${generatedScss}
    @import "bootstrap";
    
    .test { 
      color: $primary; 
      padding: $spacer; 
    }
  `;
  
  return sass.compileString(testScss);
}
```

## 🚀 Implementation Phases

### Phase 1: Core Mapping
- Primary theme colors (primary, success, danger, warning)
- Base spacing unit ($spacer)
- Primary font family
- Default border radius

### Phase 2: Extended Mapping  
- Complete color palette
- Full spacing scale
- Typography scale
- Border variations

### Phase 3: Advanced Features
- Component-specific variables
- Calculated values and functions
- Theme mode support (light/dark)

### Phase 4: Optimization
- Performance improvements
- Advanced validation
- Error recovery strategies

## 📈 Success Metrics

### Coverage Metrics
- **Primary Coverage**: % of core Bootstrap variables mapped
- **Token Utilization**: % of SDS tokens successfully mapped
- **Fallback Rate**: % of tokens requiring fallback generation

### Quality Metrics
- **Compilation Success**: Generated SCSS compiles without errors
- **Visual Consistency**: Bootstrap components reflect SDS design
- **Performance Impact**: Build time overhead < 10%

### Developer Experience Metrics
- **Integration Time**: Time to integrate into existing Bootstrap project
- **Documentation Completeness**: All mapping decisions documented
- **Error Clarity**: Clear error messages for mapping failures

## 🔮 Future Considerations

### Multi-Framework Support
Design mapping strategy to support:
- Tailwind CSS (utility-first approach)
- Material UI (theme object structure)  
- Ant Design (theme configuration)
- Custom CSS frameworks

### Dynamic Mapping
Consider runtime mapping capabilities:
- Browser-based token updates
- Real-time design system synchronization
- A/B testing with different token values

### Advanced Transformations
Future enhancements:
- Color space transformations (HSL, LAB)
- Responsive token mapping
- Animation/transition token support
- Accessibility-aware transformations
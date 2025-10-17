# Bootstrap 5.3 Variable Analysis

## 📊 Core Bootstrap Variables for SDS Mapping

This document provides a comprehensive analysis of Bootstrap 5.3 SCSS variables that should be targeted by the SDS mapper system.

## 🎨 Color Variables

### Primary Theme Colors
```scss
// Core theme colors - highest priority for mapping
$primary:    #0d6efd !default;
$secondary:  #6c757d !default;
$success:    #198754 !default;
$info:       #0dcaf0 !default;
$warning:    #ffc107 !default;
$danger:     #dc3545 !default;
$light:      #f8f9fa !default;
$dark:       #212529 !default;
```

**SDS Mapping Strategy:**
- `sds-color-primary-500` → `$primary`
- `sds-color-success-500` → `$success`  
- `sds-color-danger-500` → `$danger`
- `sds-color-warning-500` → `$warning`

### Body & Text Colors
```scss
$body-bg:                   $white !default;
$body-color:                $gray-900 !default;
$body-text-align:           null !default;

$link-color:                              $primary !default;
$link-decoration:                         underline !default;
$link-hover-color:                        shift-color($link-color, -$link-shade-percentage) !default;
```

## 📏 Spacing System

### Base Spacer
```scss
$spacer: 1rem !default;
$spacers: (
  0: 0,
  1: $spacer * .25,    // 0.25rem
  2: $spacer * .5,     // 0.5rem  
  3: $spacer * .75,    // 0.75rem
  4: $spacer,          // 1rem
  5: $spacer * 1.25,   // 1.25rem
  6: $spacer * 1.5,    // 1.5rem
  7: $spacer * 1.75,   // 1.75rem
  8: $spacer * 3,      // 3rem
) !default;
```

**SDS Mapping Strategy:**
- Map SDS spacing tokens to spacer multipliers
- `sds-size-spacing-1` → `$spacer * 0.25`
- `sds-size-spacing-4` → `$spacer` (base)
- Allow custom spacer base value from SDS

### Grid System
```scss
$grid-columns:                12 !default;
$grid-gutter-width:           1.5rem !default;
$grid-row-columns:            6 !default;
```

## 🔤 Typography System

### Font Families
```scss
$font-family-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;
$font-family-base: var(--#{$prefix}font-sans-serif) !default;
```

**SDS Mapping:**
- `sds-typography-font-family-sans` → `$font-family-base`
- `sds-typography-font-family-mono` → `$font-family-monospace`

### Font Sizes
```scss
$font-size-root: null !default;
$font-size-base: 1rem !default; // 16px
$font-size-sm: $font-size-base * .875 !default;
$font-size-lg: $font-size-base * 1.25 !default;

$font-weight-lighter: lighter !default;
$font-weight-light: 300 !default;
$font-weight-normal: 400 !default;
$font-weight-medium: 500 !default;
$font-weight-semibold: 600 !default;
$font-weight-bold: 700 !default;
$font-weight-bolder: bolder !default;

$line-height-base: 1.5 !default;
$line-height-sm: 1.25 !default;
$line-height-lg: 2 !default;
```

### Headings
```scss
$headings-margin-bottom: $spacer * .5 !default;
$headings-font-family: null !default;
$headings-font-style: null !default;
$headings-font-weight: 500 !default;
$headings-line-height: 1.2 !default;
$headings-color: inherit !default;
```

## 🔲 Border & Radius System

### Border Variables
```scss
$border-width: 1px !default;
$border-widths: (
  1: 1px,
  2: 2px,
  3: 3px,
  4: 4px,
  5: 5px
) !default;

$border-style: solid !default;
$border-color: $gray-300 !default;
$border-color-translucent: rgba($black, .175) !default;
```

### Border Radius
```scss
$border-radius: .375rem !default;
$border-radius-xs: .125rem !default;
$border-radius-sm: .25rem !default;
$border-radius-lg: .5rem !default;
$border-radius-xl: 1rem !default;
$border-radius-2xl: 2rem !default;
$border-radius-pill: 50rem !default;
```

**SDS Mapping:**
- `sds-size-border-radius-sm` → `$border-radius-sm`
- `sds-size-border-radius-default` → `$border-radius`
- `sds-size-border-radius-lg` → `$border-radius-lg`

## 📦 Component-Specific Variables

### Buttons
```scss
$btn-padding-y: $input-btn-padding-y !default;
$btn-padding-x: $input-btn-padding-x !default;
$btn-font-family: $input-btn-font-family !default;
$btn-font-size: $input-btn-font-size !default;
$btn-line-height: $input-btn-line-height !default;

$btn-padding-y-sm: $input-btn-padding-y-sm !default;
$btn-padding-x-sm: $input-btn-padding-x-sm !default;
$btn-font-size-sm: $input-btn-font-size-sm !default;

$btn-padding-y-lg: $input-btn-padding-y-lg !default;
$btn-padding-x-lg: $input-btn-padding-x-lg !default;
$btn-font-size-lg: $input-btn-font-size-lg !default;

$btn-border-width: $input-border-width !default;
$btn-border-radius: $border-radius !default;
$btn-border-radius-sm: $border-radius-sm !default;
$btn-border-radius-lg: $border-radius-lg !default;
```

### Cards
```scss
$card-spacer-y: $spacer !default;
$card-spacer-x: $spacer !default;
$card-title-spacer-y: $spacer * .5 !default;
$card-title-color: null !default;
$card-subtitle-color: null !default;
$card-border-width: $border-width !default;
$card-border-color: rgba($black, .125) !default;
$card-border-radius: $border-radius !default;
$card-box-shadow: null !default;
$card-inner-border-radius: subtract($card-border-radius, $card-border-width) !default;
$card-cap-padding-y: $card-spacer-y * .5 !default;
$card-cap-padding-x: $card-spacer-x !default;
$card-cap-bg: rgba($black, .03) !default;
$card-cap-color: null !default;
$card-height: null !default;
$card-color: null !default;
$card-bg: $white !default;
$card-img-overlay-padding: $spacer !default;
$card-group-margin: $grid-gutter-width * .5 !default;
```

## 🎯 Priority Mapping Matrix

### High Priority (Essential)
1. **Primary theme colors** - Most visible impact
2. **Spacer system** - Affects all spacing utilities
3. **Font family base** - Typography consistency
4. **Border radius** - Visual consistency

### Medium Priority (Important)
1. **Component padding/margins** - Button, card spacing
2. **Font weights and sizes** - Typography scale
3. **Border widths** - Visual details
4. **Secondary/utility colors** - Complete color system

### Low Priority (Nice to have)
1. **Advanced component variables** - Specific component details  
2. **Animation/transition values** - Motion design
3. **Breakpoint customizations** - Responsive behavior

## 🔍 Bootstrap Version Compatibility

### Bootstrap 5.3.x Support
- Focus on stable variable API
- Avoid deprecated variables
- Target LTS-supported features

### Variable Stability Analysis
```scss
// Stable (safe to map):
$primary, $secondary, $success, $danger, $warning, $info
$spacer, $spacers
$font-family-base, $font-size-base
$border-radius, $border-width

// Semi-stable (use with caution):
$grid-gutter-width
$headings-font-weight
$btn-border-radius

// Unstable (avoid mapping):
Component-specific internal calculations
Experimental CSS custom property mappings
```

## 📝 Implementation Notes

### Variable Override Behavior
Bootstrap uses `!default` flags, meaning:
```scss
// If $primary is already defined, this won't override it
$primary: #0d6efd !default;

// SDS override MUST come before Bootstrap import:
$primary: #14ae5c; // SDS value
@import "bootstrap"; // Uses SDS value
```

### Sass Function Compatibility
Some Bootstrap variables use Sass functions:
```scss
$link-hover-color: shift-color($link-color, -$link-shade-percentage) !default;
```

SDS mapper should:
- Map base values that functions consume
- Avoid overriding calculated values
- Test function compatibility

### CSS Custom Property Integration
Bootstrap 5.3+ uses CSS custom properties:
```scss
$font-family-base: var(--#{$prefix}font-sans-serif) !default;
```

Consider mapping to both SCSS variables AND CSS custom properties for maximum compatibility.
/**
 * Bootstrap 5.3 Variable Mapping Configuration
 * Maps SDS design tokens to Bootstrap SCSS variables
 * 
 * This configuration defines how SDS tokens should be transformed into 
 * Bootstrap-compatible SCSS variables while maintaining the design system's integrity.
 */

export const bootstrap5Mapping = {
  // Bootstrap Colors -> SDS Color Primitives
  colors: {
    // Primary theme colors
    'primary': '@color_primitives.brand.500',
    'secondary': '@color_primitives.gray.500', 
    'success': '@color_primitives.green.500',
    'info': '@color_primitives.brand.400',
    'warning': '@color_primitives.yellow.500',
    'danger': '@color_primitives.red.500',
    'light': '@color_primitives.gray.100',
    'dark': '@color_primitives.gray.900',
    
    // Bootstrap color palette mapping
    'blue': '@color_primitives.brand.500',
    'indigo': '@color_primitives.brand.600',
    'purple': '@color_primitives.brand.700',
    'pink': '@color_primitives.pink.500',
    'red': '@color_primitives.red.500',
    'orange': '@color_primitives.yellow.600',
    'yellow': '@color_primitives.yellow.400',
    'green': '@color_primitives.green.500',
    'teal': '@color_primitives.green.400',
    'cyan': '@color_primitives.brand.300',
    
    // Gray scale
    'white': '@color_primitives.white.100',
    'gray-100': '@color_primitives.gray.100',
    'gray-200': '@color_primitives.gray.200',
    'gray-300': '@color_primitives.gray.300',
    'gray-400': '@color_primitives.gray.400',
    'gray-500': '@color_primitives.gray.500',
    'gray-600': '@color_primitives.gray.600',
    'gray-700': '@color_primitives.gray.700',
    'gray-800': '@color_primitives.gray.800',
    'gray-900': '@color_primitives.gray.900',
    'black': '@color_primitives.black.900',
    
    // Body colors
    'body-bg': '@color_primitives.white.100',
    'body-color': '@color_primitives.gray.900',
    'body-secondary-bg': '@color_primitives.gray.100',
    'body-secondary-color': '@color_primitives.gray.700',
    'body-tertiary-bg': '@color_primitives.gray.200',
    'body-tertiary-color': '@color_primitives.gray.600',
    
    // Component colors
    'component-active-color': '@color_primitives.white.100',
    'component-active-bg': '@color_primitives.brand.500',
    'text-muted': '@color_primitives.gray.600'
  },

  // Bootstrap Typography -> SDS Typography
  typography: {
    // Font families
    'font-family-sans-serif': '@typography_primitives.family-sans',
    'font-family-monospace': '@typography_primitives.family-mono',
    'font-family-base': '@typography_primitives.family-sans',
    
    // Font sizes
    'font-size-root': '@typography_primitives.scale-03', // Base font size
    'font-size-base': '@typography_primitives.scale-03',
    'font-size-sm': '@typography_primitives.scale-02',
    'font-size-lg': '@typography_primitives.scale-04',
    
    // Font weights  
    'font-weight-lighter': '@typography_primitives.weight-light',
    'font-weight-light': '@typography_primitives.weight-light',
    'font-weight-normal': '@typography_primitives.weight-regular',
    'font-weight-medium': '@typography_primitives.weight-medium',
    'font-weight-semibold': '@typography_primitives.weight-semibold',
    'font-weight-bold': '@typography_primitives.weight-bold',
    'font-weight-bolder': '@typography_primitives.weight-extra-bold',
    
    // Line heights
    'line-height-base': '1.5',
    'line-height-sm': '1.25',
    'line-height-lg': '2',
    
    // Heading sizes
    'h1-font-size': '@typography.title-hero.size',
    'h2-font-size': '@typography.title-page.size-base',
    'h3-font-size': '@typography.heading.size-large',
    'h4-font-size': '@typography.heading.size-base',
    'h5-font-size': '@typography.heading.size-small',
    'h6-font-size': '@typography.subheading.size-medium',
    
    // Display headings
    'display-font-sizes': {
      1: '@typography.title-hero.size',
      2: '@typography.title-page.size-large', 
      3: '@typography.title-page.size-base',
      4: '@typography.title-page.size-small',
      5: '@typography.heading.size-large',
      6: '@typography.heading.size-base'
    },
    
    'display-font-family': '@typography.title-hero.font-family',
    'display-font-weight': '@typography.title-hero.font-weight',
    'display-line-height': '1.2'
  },

  // Bootstrap Spacing -> SDS Size
  spacing: {
    // Spacer scale (Bootstrap uses 0.25rem increments by default)
    'spacer': '@size.space.400', // Base spacer (1rem equivalent)
    'spacers': {
      0: '@size.space.0',
      1: '@size.space.100', // 0.25rem
      2: '@size.space.200', // 0.5rem  
      3: '@size.space.300', // 0.75rem
      4: '@size.space.400', // 1rem
      5: '@size.space.600', // 1.5rem (closest to 1.25rem)
      6: '@size.space.800', // 2rem (closest to 1.5rem)
      7: '@size.space.1200', // 3rem (closest to 1.75rem)
      8: '@size.space.1600', // 4rem (closest to 2rem)
      9: '@size.space.2400', // 6rem (closest to 2.25rem)
      10: '@size.space.4000' // 10rem (closest to 2.5rem)
    }
  },

  // Bootstrap Border Radius -> SDS Size
  borderRadius: {
    'border-radius': '@size.radius.200', // Medium radius
    'border-radius-sm': '@size.radius.100', // Small radius
    'border-radius-lg': '@size.radius.400', // Large radius
    'border-radius-xl': '@size.radius.400', // Extra large radius (same as lg)
    'border-radius-xxl': '@size.radius.400', // XXL radius (same as lg)
    'border-radius-pill': '@size.radius.full' // Fully rounded
  },

  // Bootstrap Grid Breakpoints -> SDS Breakpoints (if available)
  breakpoints: {
    'grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px', 
      lg: '992px',
      xl: '1200px',
      xxl: '1400px'
    }
  },

  // Bootstrap Shadows -> Custom values (no SDS effects tokens available)
  shadows: {
    'box-shadow': '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
    'box-shadow-sm': '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
    'box-shadow-lg': '0 1rem 3rem rgba(0, 0, 0, 0.175)',
    'box-shadow-inset': 'inset 0 1px 2px rgba(0, 0, 0, 0.075)'
  },

  // Bootstrap Form Controls
  forms: {
    // Input styling
    'input-bg': '@color_primitives.white.100',
    'input-disabled-bg': '@color_primitives.gray.100',
    'input-disabled-border-color': '@color_primitives.gray.300',
    'input-color': '@color_primitives.gray.900',
    'input-border-color': '@color_primitives.gray.400',
    'input-border-width': '1px',
    'input-border-radius': '@size.radius.200',
    'input-focus-bg': '@color_primitives.white.100',
    'input-focus-border-color': '@color_primitives.brand.500',
    'input-focus-color': '@color_primitives.gray.900',
    
    // Input sizes
    'input-padding-y': '@size.space.300',
    'input-padding-x': '@size.space.400',
    'input-padding-y-sm': '@size.space.200',
    'input-padding-x-sm': '@size.space.300',
    'input-padding-y-lg': '@size.space.600',
    'input-padding-x-lg': '@size.space.800',
    
    // Input font sizes
    'input-font-size': '@typography.body.size-medium',
    'input-font-size-sm': '@typography.body.size-small',
    'input-font-size-lg': '@typography.body.size-large',
    
    // Form labels
    'form-label-margin-bottom': '@size.space.200',
    'form-label-font-size': '@typography.body.size-medium',
    'form-label-font-weight': '@typography.body.font-weight-regular',
    'form-label-color': '@color_primitives.gray.700'
  },

  // Bootstrap Buttons  
  buttons: {
    // Button padding
    'btn-padding-y': '@size.space.300',
    'btn-padding-x': '@size.space.600',
    'btn-padding-y-sm': '@size.space.200',
    'btn-padding-x-sm': '@size.space.400',
    'btn-padding-y-lg': '@size.space.600',
    'btn-padding-x-lg': '@size.space.1200',
    
    // Button font
    'btn-font-family': '@typography.body.font-family',
    'btn-font-size': '@typography.body.size-medium',
    'btn-font-size-sm': '@typography.body.size-small',
    'btn-font-size-lg': '@typography.body.size-large',
    'btn-font-weight': '@typography.body.font-weight-regular',
    'btn-line-height': '1.5',
    
    // Button styling
    'btn-white-space': 'nowrap',
    'btn-border-width': '1px',
    'btn-border-radius': '@size.radius.200',
    'btn-border-radius-sm': '@size.radius.100',
    'btn-border-radius-lg': '@size.radius.400',
    
    // Button focus
    'btn-focus-width': '2px',
    'btn-focus-box-shadow': '0 0 0 2px rgba(var(--#{$prefix}primary-rgb), 0.25)'
  },

  // Bootstrap Cards
  cards: {
    'card-spacer-y': '@size.space.400',
    'card-spacer-x': '@size.space.400',
    'card-title-spacer-y': '@size.space.200',
    'card-border-width': '1px',
    'card-border-color': '@color_primitives.gray.300',
    'card-border-radius': '@size.radius.400',
    'card-bg': '@color_primitives.white.100',
    'card-cap-bg': '@color_primitives.gray.100',
    'card-cap-color': '@color_primitives.gray.700'
  },

  // Bootstrap Tables
  tables: {
    'table-cell-padding-y': '@size.space.200',
    'table-cell-padding-x': '@size.space.200',
    'table-cell-padding-y-sm': '@size.space.100',
    'table-cell-padding-x-sm': '@size.space.100',
    'table-striped-bg': '@color_primitives.gray.100',
    'table-hover-bg': '@color_primitives.gray.100',
    'table-border-color': '@color_primitives.gray.300',
    'table-group-separator-color': '@color_primitives.gray.400'
  },

  // Bootstrap Navbar
  navbar: {
    'navbar-padding-y': '@size.space.200',
    'navbar-padding-x': '@size.space.400',
    'navbar-brand-font-size': '@typography.heading.size-base',
    'navbar-brand-font-weight': '@typography.heading.font-weight',
    'navbar-toggler-padding-y': '@size.space.100',
    'navbar-toggler-padding-x': '@size.space.200',
    'navbar-toggler-border-radius': '@size.radius.200'
  },

  // Bootstrap Modal
  modal: {
    'modal-content-border-color': '@color_primitives.gray.300',
    'modal-content-border-radius': '@size.radius.400',
    'modal-backdrop-bg': '@color_primitives.black.500',
    'modal-header-border-color': '@color_primitives.gray.300',
    'modal-footer-border-color': '@color_primitives.gray.300',
    'modal-sm': '300px',
    'modal-md': '500px',
    'modal-lg': '800px',
    'modal-xl': '1140px'
  },

  // Bootstrap Alerts
  alerts: {
    'alert-padding-y': '@size.space.300',
    'alert-padding-x': '@size.space.400',
    'alert-margin-bottom': '@size.space.400',
    'alert-border-radius': '@size.radius.200',
    'alert-border-width': '1px'
  },

  // Bootstrap Progress
  progress: {
    'progress-height': '@size.space.400',
    'progress-font-size': '@typography.body.size-small',
    'progress-bg': '@color_primitives.gray.200',
    'progress-border-radius': '@size.radius.200',
    'progress-bar-bg': '@color_primitives.brand.500'
  },

  // Bootstrap List Group
  listGroup: {
    'list-group-bg': '@color_primitives.white.100',
    'list-group-border-color': '@color_primitives.gray.300',
    'list-group-border-width': '1px',
    'list-group-border-radius': '@size.radius.200',
    'list-group-item-padding-y': '@size.space.300',
    'list-group-item-padding-x': '@size.space.400',
    'list-group-hover-bg': '@color_primitives.gray.100',
    'list-group-active-bg': '@color_primitives.brand.500',
    'list-group-active-color': '@color_primitives.white.100'
  },

  // Bootstrap Utilities
  utilities: {
    // Z-index scale
    'zindex-dropdown': '1000',
    'zindex-sticky': '1020',
    'zindex-fixed': '1030',
    'zindex-modal-backdrop': '1040',
    'zindex-modal': '1050',
    'zindex-popover': '1060',
    'zindex-tooltip': '1070',
    
    // Aspect ratios
    'aspect-ratios': {
      '1x1': '100%',
      '4x3': '75%',
      '16x9': '56.25%',
      '21x9': '42.857142857%'
    }
  }
};

/**
 * Configuration for the bootstrap mapper
 */
export const mapperConfig = {
  // Output configuration
  output: {
    // Where to generate the Bootstrap SCSS file
    file: 'dist/bootstrap/bootstrap-variables.scss',
    // SCSS variable prefix
    prefix: '$',
    // Whether to include !default flag
    includeDefault: true,
    // Header comment for generated file
    header: `/**
 * Bootstrap 5.3 Variables Override
 * Generated from SDS Design Tokens
 * 
 * This file contains Bootstrap variable overrides that use values from 
 * the Simple Design System (SDS) token architecture. These variables 
 * allow Bootstrap components to use SDS design tokens while maintaining
 * Bootstrap's component structure and behavior.
 * 
 * Import this file before Bootstrap's main SCSS to override default values.
 */`
  },
  
  // Transformation rules
  transform: {
    // How to handle token references
    tokenReference: {
      // Convert @token.path to CSS custom property var(--sds-token-path)
      toCssCustomProperty: true,
      // Prefix for CSS custom properties
      cssPrefix: 'sds',
      // Whether to preserve original token references as comments
      includeTokenComments: true
    },
    
    // Value transformations
    values: {
      // Convert px to rem for dimensional values
      pxToRem: true,
      // Base pixel size for rem calculations
      basePxSize: 16,
      // Handle color format transformations
      colorFormat: 'preserve', // 'hex', 'rgb', 'hsl', or 'preserve'
      // Handle font family fallbacks
      fontFamilyFallbacks: true
    },
    
    // SCSS specific transformations
    scss: {
      // Whether to include !default flags
      includeDefault: true,
      // Variable naming convention
      variableNaming: 'kebab-case', // 'kebab-case', 'camelCase', 'snake_case'
      // Whether to group related variables
      groupVariables: true,
      // Section comments
      includeSectionComments: true
    }
  },
  
  // Validation rules
  validation: {
    // Ensure all referenced tokens exist
    validateTokenReferences: true,
    // Warn about missing Bootstrap variables
    warnMissingBootstrapVars: true,
    // Bootstrap 5.3 required variables (comprehensive list)
    requiredBootstrapVars: [
      // Theme colors
      'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark',
      
      // Grayscale colors
      'white', 'gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500', 
      'gray-600', 'gray-700', 'gray-800', 'gray-900', 'black',
      
      // Typography fundamentals
      'font-family-sans-serif', 'font-family-monospace', 'font-size-root', 
      'font-size-base', 'font-weight-normal', 'line-height-base',
      
      // Spacing system
      'spacer',
      
      // Border system
      'border-radius', 'border-width',
      
      // Component essentials
      'body-bg', 'body-color', 'component-active-bg', 'component-active-color',
      
      // Form controls
      'input-bg', 'input-border-color', 'input-border-radius', 'input-focus-border-color',
      
      // Buttons
      'btn-padding-y', 'btn-padding-x', 'btn-font-weight', 'btn-border-radius',
      
      // Cards
      'card-spacer-y', 'card-spacer-x', 'card-border-color', 'card-border-radius'
    ]
  }
};

export default bootstrap5Mapping;
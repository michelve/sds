#!/usr/bin/env node

/**
 * Bootstrap Build Script
 * 
 * Generates Bootstrap-compatible SCSS and CSS files from SDS design tokens
 * using the bootstrap mapping configuration and Style Dictionary.
 */

import StyleDictionary from 'style-dictionary';
import { bootstrapStyleDictionaryConfig } from './bootstrap.style-dictionary.js';
import { TokenAnalyzer } from './token-analyzer.js';
import { bootstrapMapping } from './bootstrap5.mapping.js';
import fs from 'fs';
import path from 'path';

// Color utilities for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logHeader(message) {
  log('\n' + '='.repeat(60), 'blue');
  log(` ${message}`, 'bright');
  log('='.repeat(60), 'blue');
}

function logSuccess(message) {
  log(`✅ ${message}`, 'green');
}

function logWarning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

function logError(message) {
  log(`❌ ${message}`, 'red');
}

async function validateTokens() {
  logHeader('Validating Bootstrap Token Mappings');
  
  try {
    const analyzer = new TokenAnalyzer();
    
    // Load tokens
    log('Loading SDS tokens...', 'cyan');
    const tokensPath = path.resolve(process.cwd(), 'tokens.json');
    
    if (!fs.existsSync(tokensPath)) {
      throw new Error(`Tokens file not found: ${tokensPath}`);
    }
    
    analyzer.loadTokens(tokensPath);
    logSuccess(`Loaded ${analyzer.getTokenCount()} SDS tokens`);
    
    // Validate mappings
    log('Validating Bootstrap mappings...', 'cyan');
    let validMappings = 0;
    let invalidMappings = 0;
    const errors = [];
    
    for (const [bootstrapVar, mapping] of Object.entries(bootstrapMapping)) {
      const tokenExists = analyzer.hasToken(mapping.token);
      
      if (tokenExists) {
        validMappings++;
      } else {
        invalidMappings++;
        errors.push(`${bootstrapVar} -> ${mapping.token}`);
      }
    }
    
    logSuccess(`Valid mappings: ${validMappings}/${Object.keys(bootstrapMapping).length}`);
    
    if (invalidMappings > 0) {
      logWarning(`Invalid mappings: ${invalidMappings}`);
      errors.slice(0, 5).forEach(error => log(`  - ${error}`, 'yellow'));
      if (errors.length > 5) {
        log(`  ... and ${errors.length - 5} more`, 'yellow');
      }
    }
    
    return { validMappings, invalidMappings, errors };
    
  } catch (error) {
    logError(`Validation failed: ${error.message}`);
    throw error;
  }
}

async function buildBootstrapFiles() {
  logHeader('Building Bootstrap Files');
  
  try {
    // Import and register our custom transforms and formats
    log('Registering Bootstrap transforms...', 'cyan');
    await import('./bootstrap.style-dictionary.js');
    logSuccess('Bootstrap transforms registered');
    
    // Create Style Dictionary instance
    log('Creating Style Dictionary instance...', 'cyan');
    const sd = StyleDictionary.extend(bootstrapStyleDictionaryConfig);
    
    // Ensure output directories exist
    const bootstrapDir = path.resolve(process.cwd(), 'dist/bootstrap');
    if (!fs.existsSync(bootstrapDir)) {
      fs.mkdirSync(bootstrapDir, { recursive: true });
      log(`Created output directory: ${bootstrapDir}`, 'cyan');
    }
    
    // Build all platforms
    log('Building Bootstrap SCSS variables...', 'cyan');
    sd.buildPlatform('bootstrap_scss');
    logSuccess('Generated _variables.scss');
    
    log('Building Bootstrap CSS custom properties...', 'cyan');
    sd.buildPlatform('bootstrap_css');
    logSuccess('Generated bootstrap-tokens.css');
    
    // Generate additional files
    await generateBootstrapMixin();
    await generateBootstrapImport();
    
    return true;
    
  } catch (error) {
    logError(`Build failed: ${error.message}`);
    throw error;
  }
}

async function generateBootstrapMixin() {
  log('Generating Bootstrap mixin file...', 'cyan');
  
  const mixinContent = `//
// Bootstrap SDS Integration Mixin
// 
// This mixin applies SDS design tokens to Bootstrap components
//

@mixin sds-bootstrap-integration {
  // Import SDS-generated Bootstrap variables
  @import 'variables';
  
  // Custom Bootstrap overrides using SDS tokens
  
  // Button customizations
  .btn {
    --bs-btn-font-family: #{$font-family-sans-serif};
    --bs-btn-font-weight: #{$btn-font-weight};
    --bs-btn-line-height: #{$btn-line-height};
    --bs-btn-border-radius: #{$btn-border-radius};
  }
  
  // Card customizations
  .card {
    --bs-card-border-color: #{$card-border-color};
    --bs-card-border-radius: #{$card-border-radius};
    --bs-card-spacer-y: #{$card-spacer-y};
    --bs-card-spacer-x: #{$card-spacer-x};
  }
  
  // Navigation customizations
  .navbar {
    --bs-navbar-padding-x: #{$navbar-padding-x};
    --bs-navbar-padding-y: #{$navbar-padding-y};
    --bs-navbar-brand-font-size: #{$navbar-brand-font-size};
  }
  
  // Form customizations
  .form-control {
    --bs-form-control-border-radius: #{$input-border-radius};
    --bs-form-control-font-family: #{$input-font-family};
    --bs-form-control-font-size: #{$input-font-size};
  }
  
  // Table customizations
  .table {
    --bs-table-border-color: #{$table-border-color};
    --bs-table-striped-bg: #{$table-striped-bg};
    --bs-table-hover-bg: #{$table-hover-bg};
  }
}

// Utility: Apply SDS tokens to Bootstrap
@mixin use-sds-bootstrap {
  @include sds-bootstrap-integration;
}
`;
  
  const mixinPath = path.resolve(process.cwd(), 'dist/bootstrap/_mixins.scss');
  fs.writeFileSync(mixinPath, mixinContent);
  logSuccess('Generated _mixins.scss');
}

async function generateBootstrapImport() {
  log('Generating Bootstrap import file...', 'cyan');
  
  const importContent = `//
// Bootstrap + SDS Integration
// 
// Main entry point for using Bootstrap with SDS design tokens
//

// 1. Import SDS-generated Bootstrap variables first
@import 'variables';

// 2. Import Bootstrap framework
// Note: You'll need to install Bootstrap via npm and adjust this path
// @import '~bootstrap/scss/bootstrap';

// 3. Apply SDS customizations
@import 'mixins';

// 4. Optional: Include SDS integration mixin
:root {
  @include sds-bootstrap-integration;
}

// Usage Example:
// 1. npm install bootstrap
// 2. Uncomment the Bootstrap import above
// 3. Import this file in your main SCSS file
// 4. Use Bootstrap classes with SDS design tokens applied automatically
`;
  
  const importPath = path.resolve(process.cwd(), 'dist/bootstrap/bootstrap-sds.scss');
  fs.writeFileSync(importPath, importContent);
  logSuccess('Generated bootstrap-sds.scss');
}

async function generateUsageDocumentation() {
  logHeader('Generating Documentation');
  
  const docContent = `# Bootstrap + SDS Integration

## Generated Files

This build process generates the following files in \`dist/bootstrap/\`:

### Core Files
- \`_variables.scss\` - Bootstrap variables mapped to SDS design tokens
- \`bootstrap-tokens.css\` - CSS custom properties for Bootstrap integration
- \`_mixins.scss\` - SCSS mixins for applying SDS tokens to Bootstrap components
- \`bootstrap-sds.scss\` - Main integration file

### Usage

#### Option 1: SCSS Integration
\`\`\`scss
// In your main SCSS file
@import 'path/to/dist/bootstrap/bootstrap-sds';
\`\`\`

#### Option 2: CSS Custom Properties
\`\`\`html
<!-- In your HTML head -->
<link rel="stylesheet" href="path/to/dist/bootstrap/bootstrap-tokens.css">
<link rel="stylesheet" href="path/to/bootstrap.min.css">
\`\`\`

#### Option 3: Manual Variable Import
\`\`\`scss
// Import just the variables
@import 'path/to/dist/bootstrap/_variables';

// Then use with Bootstrap
@import '~bootstrap/scss/bootstrap';
\`\`\`

## Token Mapping

This integration maps ${Object.keys(bootstrapMapping).length} Bootstrap variables to SDS design tokens:

### Color Variables
- \`$primary\` → \`@color_primitives.brand.500\`
- \`$secondary\` → \`@color_primitives.neutral.500\`
- \`$success\` → \`@color_primitives.success.500\`
- \`$danger\` → \`@color_primitives.error.500\`
- \`$warning\` → \`@color_primitives.warning.500\`
- \`$info\` → \`@color_primitives.info.500\`

### Typography Variables
- \`$font-family-sans-serif\` → \`@typography.families.sans-serif\`
- \`$font-size-base\` → \`@typography.size.body\`
- \`$line-height-base\` → \`@typography.lineheight.normal\`

### Spacing Variables
- \`$spacer\` → \`@size.spacing.4\`
- \`$border-radius\` → \`@size.radius.md\`

## Customization

To customize the integration:

1. Edit \`src/bootstrap/bootstrap5.mapping.js\` to change token mappings
2. Run \`npm run bootstrap:build\` to regenerate files
3. The changes will be reflected in all generated files

## Development Workflow

\`\`\`bash
# Generate Bootstrap files from current SDS tokens
npm run bootstrap:build

# Validate token mappings
npm run bootstrap:validate

# Watch for token changes and rebuild
npm run bootstrap:watch
\`\`\`

Generated on: ${new Date().toISOString()}
Mapped variables: ${Object.keys(bootstrapMapping).length}
`;
  
  const docPath = path.resolve(process.cwd(), 'dist/bootstrap/README.md');
  fs.writeFileSync(docPath, docContent);
  logSuccess('Generated README.md');
}

async function showSummary(validationResult) {
  logHeader('Build Summary');
  
  log('📊 Bootstrap Integration Statistics:', 'bright');
  log(`   • Mapped Variables: ${Object.keys(bootstrapMapping).length}`);
  log(`   • Valid Mappings: ${validationResult.validMappings}`);
  log(`   • Invalid Mappings: ${validationResult.invalidMappings}`);
  log(`   • Success Rate: ${Math.round((validationResult.validMappings / Object.keys(bootstrapMapping).length) * 100)}%`);
  
  log('\n📁 Generated Files:', 'bright');
  log('   • dist/bootstrap/_variables.scss');
  log('   • dist/bootstrap/bootstrap-tokens.css');
  log('   • dist/bootstrap/_mixins.scss');
  log('   • dist/bootstrap/bootstrap-sds.scss');
  log('   • dist/bootstrap/README.md');
  
  if (validationResult.invalidMappings === 0) {
    logSuccess('✨ All Bootstrap variables successfully mapped to SDS tokens!');
  } else {
    logWarning(`⚠️  ${validationResult.invalidMappings} mappings need attention`);
  }
  
  log('\n🚀 Next Steps:', 'bright');
  log('   1. Install Bootstrap: npm install bootstrap');
  log('   2. Import generated files in your SCSS');
  log('   3. Use Bootstrap classes with SDS design tokens');
  log('   4. Check README.md for detailed usage instructions');
}

// Main execution
async function main() {
  try {
    logHeader('Bootstrap + SDS Build Process');
    
    // Step 1: Validate tokens
    const validationResult = await validateTokens();
    
    // Step 2: Build files
    await buildBootstrapFiles();
    
    // Step 3: Generate documentation
    await generateUsageDocumentation();
    
    // Step 4: Show summary
    await showSummary(validationResult);
    
    log('\n🎉 Bootstrap build completed successfully!', 'green');
    
  } catch (error) {
    logError(`\nBuild failed: ${error.message}`);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as buildBootstrap, validateTokens, buildBootstrapFiles };
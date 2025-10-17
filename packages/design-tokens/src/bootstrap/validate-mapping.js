/**
 * Bootstrap Mapping Validation Script
 * Tests the bootstrap mapping configuration against actual SDS tokens
 */

import { TokenAnalyzer, tokenUtils } from './token-analyzer.js';
import { bootstrap5Mapping, mapperConfig } from './bootstrap5.mapping.js';
import path from 'path';

/**
 * Main validation function
 */
async function validateBootstrapMapping() {
  console.log('🔍 Validating Bootstrap 5.3 mapping configuration...\n');

  try {
    // Initialize token analyzer
    const tokensPath = path.resolve(process.cwd(), 'tokens.json');
    const analyzer = new TokenAnalyzer(tokensPath);
    
    console.log(`📁 Loading tokens from: ${tokensPath}`);
    await analyzer.loadTokens();
    
    // Generate token report
    const report = analyzer.generateReport();
    console.log(`\n📊 Token Analysis Summary:`);
    console.log(`   Total tokens: ${report.summary.totalTokens}`);
    console.log(`   Collections: ${report.summary.collections}`);
    console.log(`   Available collections: ${report.summary.collectionNames.join(', ')}\n`);

    // Validate the mapping configuration
    console.log('🧪 Validating mapping configuration...');
    const validation = analyzer.validateMapping(bootstrap5Mapping);
    
    if (validation.valid) {
      console.log('✅ All token references in mapping are valid!');
    } else {
      console.log('❌ Found invalid token references:');
      validation.errors.forEach(error => console.log(`   • ${error}`));
    }
    
    console.log(`\n📈 Mapping Statistics:`);
    console.log(`   Total mappings: ${validation.stats.totalMappings}`);
    console.log(`   Valid mappings: ${validation.stats.validMappings}`);
    console.log(`   Invalid mappings: ${validation.stats.invalidMappings}\n`);

    // Test specific token lookups
    console.log('🔍 Testing specific token lookups:');
    const testTokens = [
      '@color_primitives.brand.500',
      '@color_primitives.neutral.100',
      '@typography_primitives.Family Sans',
      '@typography_primitives.Scale 03',
      '@size.space.400',
      '@size.radius.300'
    ];

    for (const tokenPath of testTokens) {
      const exists = analyzer.validateTokenReference(tokenPath);
      const token = analyzer.getToken(tokenPath.slice(1)); // Remove @
      const status = exists ? '✅' : '❌';
      const value = token ? ` (${token.value})` : '';
      console.log(`   ${status} ${tokenPath}${value}`);
    }

    // Show color token analysis
    console.log('\n🎨 Available Color Collections:');
    const colorTokens = analyzer.getColorTokens();
    for (const [colorName, shades] of colorTokens) {
      const availableShades = Array.from(shades.keys()).sort((a, b) => 
        parseInt(a) - parseInt(b)
      );
      console.log(`   ${colorName}: ${availableShades.join(', ')}`);
    }

    // Show typography token analysis  
    console.log('\n📝 Available Typography Tokens:');
    const typographyTokens = analyzer.getTypographyTokens();
    for (const [category, properties] of typographyTokens) {
      const props = Array.from(properties.keys());
      console.log(`   ${category}: ${props.join(', ')}`);
    }

    // Show size token analysis
    console.log('\n📏 Available Size Collections:');
    const sizeTokens = analyzer.getSizeTokens();
    for (const [category, scales] of sizeTokens) {
      const availableScales = Array.from(scales.keys());
      console.log(`   ${category}: ${availableScales.join(', ')}`);
    }

    // Test CSS custom property conversion
    console.log('\n🔧 CSS Custom Property Conversion Examples:');
    const exampleTokens = [
      '@color_primitives.brand.500',
      '@typography_primitives.Scale 03', 
      '@size.space.400'
    ];

    for (const tokenPath of exampleTokens) {
      const cssVar = tokenUtils.tokenToCssVar(tokenPath);
      const scssVar = tokenUtils.tokenToScssVar(tokenPath);
      console.log(`   ${tokenPath}`);
      console.log(`     → CSS: var(${cssVar})`);
      console.log(`     → SCSS: ${scssVar}`);
    }

    // Generate suggestions for missing mappings
    console.log('\n💡 Suggested Additional Mappings:');
    const suggestions = analyzer.getSuggestedMappings();
    
    console.log('   Colors:');
    let count = 0;
    for (const [name, tokenPath] of suggestions.colors) {
      if (count < 5) { // Limit output
        console.log(`     ${name}: ${tokenPath}`);
        count++;
      }
    }
    if (suggestions.colors.size > 5) {
      console.log(`     ... and ${suggestions.colors.size - 5} more`);
    }

    console.log('\n🎯 Validation Complete!');
    
    if (validation.valid) {
      console.log('✨ Bootstrap mapping configuration is ready for implementation.');
    } else {
      console.log('⚠️  Please fix the invalid token references before proceeding.');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Validation failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

/**
 * Test bootstrap specific mappings
 */
function testBootstrapSpecificMappings(analyzer) {
  console.log('\n🅱️  Testing Bootstrap-specific mappings:');
  
  // Test primary theme colors
  const primaryColors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
  for (const color of primaryColors) {
    const mapping = bootstrap5Mapping.colors[color];
    if (mapping) {
      const exists = analyzer.validateTokenReference(mapping);
      const status = exists ? '✅' : '❌';
      console.log(`   ${status} ${color}: ${mapping}`);
    }
  }

  // Test typography mappings
  const typographyProps = ['font-family-base', 'font-size-base', 'font-weight-normal'];
  for (const prop of typographyProps) {
    const mapping = bootstrap5Mapping.typography[prop];
    if (mapping) {
      const exists = analyzer.validateTokenReference(mapping);
      const status = exists ? '✅' : '❌';
      console.log(`   ${status} ${prop}: ${mapping}`);
    }
  }

  // Test spacing mappings
  console.log('   Spacing scale validation:');
  for (const [scale, tokenPath] of Object.entries(bootstrap5Mapping.spacing.spacers)) {
    const exists = analyzer.validateTokenReference(tokenPath);
    const status = exists ? '✅' : '❌';
    console.log(`     ${status} spacer-${scale}: ${tokenPath}`);
  }
}

// Run validation if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  validateBootstrapMapping().catch(console.error);
}

export { validateBootstrapMapping, testBootstrapSpecificMappings };
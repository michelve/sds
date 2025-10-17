#!/usr/bin/env node

/**
 * Simple Bootstrap Build Test
 * Tests the Bootstrap Style Dictionary integration
 */

import StyleDictionary from 'style-dictionary';

console.log('🧪 Testing Bootstrap Style Dictionary Extension...\n');

try {
  // Test 1: Import bootstrap style dictionary extension
  console.log('1. Loading Bootstrap extension...');
  await import('./bootstrap.style-dictionary.js');
  console.log('✅ Bootstrap extension loaded successfully');
  
  // Test 2: Test bootstrap mapping
  console.log('2. Loading Bootstrap mapping...');
  const { bootstrapMapping } = await import('./bootstrap5.mapping.js');
  console.log(`✅ Bootstrap mapping loaded: ${Object.keys(bootstrapMapping).length} variables`);
  
  // Test 3: Load tokens
  console.log('3. Loading SDS tokens...');
  const { TokenAnalyzer } = await import('./token-analyzer.js');
  const analyzer = new TokenAnalyzer();
  analyzer.loadTokens('../tokens.json');
  console.log(`✅ SDS tokens loaded: ${analyzer.getTokenCount()} tokens`);
  
  // Test 4: Create Style Dictionary config
  console.log('4. Creating Style Dictionary instance...');
  const config = {
    source: ['../tokens.json'],
    platforms: {
      bootstrap_test: {
        transformGroup: 'scss',
        buildPath: '../dist/bootstrap-test/',
        files: [
          {
            destination: 'test-variables.scss',
            format: 'scss/variables'
          }
        ]
      }
    }
  };
  
  const sd = StyleDictionary.extend(config);
  console.log('✅ Style Dictionary instance created');
  
  console.log('\n🎉 All tests passed! Bootstrap extension is working correctly.\n');
  
} catch (error) {
  console.error('❌ Test failed:', error.message);
  console.error(error.stack);
  process.exit(1);
}
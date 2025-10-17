/**
 * Debug script to see what tokens are actually loaded
 */

import fs from 'fs';
import path from 'path';

const tokensPath = path.resolve(process.cwd(), 'tokens.json');

console.log('🔍 Debug Token Structure');
console.log('========================\n');

try {
  const tokensData = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
  console.log('✅ Tokens loaded successfully');
  
  // Check top-level structure
  console.log('\n📁 Top-level collections:');
  for (const [key] of Object.entries(tokensData)) {
    if (!key.startsWith('$')) {
      console.log(`   - ${key}`);
    }
  }
  
  // Check if @color_primitives exists and has brand
  if (tokensData['@color_primitives']) {
    console.log('\n🎨 @color_primitives structure:');
    for (const [key] of Object.entries(tokensData['@color_primitives'])) {
      if (!key.startsWith('$')) {
        console.log(`   - ${key}`);
      }
    }
    
    // Check brand specifically
    if (tokensData['@color_primitives']['brand']) {
      console.log('\n🏷️  @color_primitives.brand structure:');
      for (const [key] of Object.entries(tokensData['@color_primitives']['brand'])) {
        if (!key.startsWith('$')) {
          console.log(`   - ${key}`);
        }
      }
      
      // Check if 500 exists
      if (tokensData['@color_primitives']['brand']['500']) {
        console.log('\n✅ Found @color_primitives.brand.500:');
        console.log(`   Value: ${tokensData['@color_primitives']['brand']['500'].$value}`);
      }
    }
  }
  
  // Flatten and show first 20 tokens
  const flatTokens = new Map();
  
  function flattenTokens(obj, path = []) {
    for (const [key, value] of Object.entries(obj)) {
      if (key.startsWith('$')) continue;
      
      const currentPath = [...path, key];
      
      if (value && typeof value === 'object' && value.$value !== undefined) {
        const tokenPath = currentPath.join('.');
        flatTokens.set(tokenPath, value.$value);
      } else if (value && typeof value === 'object') {
        flattenTokens(value, currentPath);
      }
    }
  }
  
  flattenTokens(tokensData);
  
  console.log(`\n📊 Total flattened tokens: ${flatTokens.size}`);
  console.log('\n🔍 First 20 token paths:');
  let count = 0;
  for (const [path] of flatTokens) {
    if (count < 20) {
      console.log(`   ${count + 1}. ${path}`);
      count++;
    } else {
      break;
    }
  }
  
  // Test specific lookups
  console.log('\n🧪 Testing specific token lookups:');
  const testPaths = [
    '@color_primitives.brand.500',
    'color_primitives.brand.500',
    '@color_primitives.brand.500',
  ];
  
  for (const testPath of testPaths) {
    const cleanPath = testPath.startsWith('@') ? testPath.slice(1) : testPath;
    const exists = flatTokens.has(testPath) || flatTokens.has(cleanPath);
    const value = flatTokens.get(testPath) || flatTokens.get(cleanPath);
    console.log(`   ${exists ? '✅' : '❌'} ${testPath} ${exists ? `(${value})` : '(not found)'}`);
  }
  
} catch (error) {
  console.error('❌ Debug failed:', error.message);
}
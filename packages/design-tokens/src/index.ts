// Re-export generated tokens
export * from '../dist/js/tokens.js';

// Export CSS import path for direct use
export const cssTokens = '@sds/design-tokens/dist/css/tokens.css';

// Export platform-specific formats paths
export const tokens = {
  css: '@sds/design-tokens/dist/css/tokens.css',
  scss: '@sds/design-tokens/dist/scss/tokens.scss',
  json: '@sds/design-tokens/dist/json/tokens.json',
  js: '@sds/design-tokens/dist/js/tokens.js',
  reactNative: '@sds/design-tokens/dist/react-native/tokens.js',
  ios: '@sds/design-tokens/dist/ios/tokens.h',
  android: '@sds/design-tokens/dist/android/colors.xml'
};
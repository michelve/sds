/**
 * Token Analyzer Utility
 * Analyzes SDS design tokens structure and provides utilities for mapping
 */

import fs from 'fs';
import path from 'path';

/**
 * TokenAnalyzer class for parsing and analyzing SDS tokens
 */
export class TokenAnalyzer {
  constructor(tokensPath = null) {
    this.tokensPath = tokensPath || path.resolve(process.cwd(), 'tokens.json');
    this.tokens = null;
    this.flatTokens = new Map();
    this.collections = new Set();
  }

  /**
   * Load and parse tokens from JSON file
   */
  async loadTokens() {
    try {
      const tokensData = await fs.promises.readFile(this.tokensPath, 'utf8');
      this.tokens = JSON.parse(tokensData);
      this._analyzeTokenStructure();
      return this.tokens;
    } catch (error) {
      throw new Error(`Failed to load tokens from ${this.tokensPath}: ${error.message}`);
    }
  }

  /**
   * Analyze the token structure and build internal indexes
   * @private
   */
  _analyzeTokenStructure() {
    if (!this.tokens) {
      throw new Error('Tokens not loaded. Call loadTokens() first.');
    }

    // Clear previous analysis
    this.flatTokens.clear();
    this.collections.clear();

    // Flatten tokens for easier lookup
    this._flattenTokens(this.tokens, []);
  }

  /**
   * Recursively flatten token structure
   * @private
   */
  _flattenTokens(obj, path) {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = [...path, key];
      
      // Skip metadata keys
      if (key.startsWith('$')) {
        continue;
      }

      // Track collections (top-level token groups)
      if (path.length === 0 && key.startsWith('@')) {
        this.collections.add(key);
      }

      // If this is a token (has $value), store it
      if (value && typeof value === 'object' && value.$value !== undefined) {
        const tokenPath = currentPath.join('.');
        this.flatTokens.set(tokenPath, {
          path: currentPath,
          value: value.$value,
          type: value.$type,
          description: value.$description || '',
          rawToken: value
        });
      } else if (value && typeof value === 'object') {
        // Continue flattening nested objects
        this._flattenTokens(value, currentPath);
      }
    }
  }

  /**
   * Get all available token collections
   */
  getCollections() {
    return Array.from(this.collections);
  }

  /**
   * Get all tokens in a specific collection
   */
  getTokensByCollection(collection) {
    const collectionTokens = new Map();
    
    for (const [path, token] of this.flatTokens) {
      if (path.startsWith(collection)) {
        collectionTokens.set(path, token);
      }
    }
    
    return collectionTokens;
  }

  /**
   * Get all tokens by type
   */
  getTokensByType(type) {
    const typeTokens = new Map();
    
    for (const [path, token] of this.flatTokens) {
      if (token.type === type) {
        typeTokens.set(path, token);
      }
    }
    
    return typeTokens;
  }

  /**
   * Check if a token path exists
   */
  hasToken(tokenPath) {
    // Try both with and without @ prefix
    return this.flatTokens.has(tokenPath) || this.flatTokens.has(tokenPath.replace(/^@/, ''));
  }

  /**
   * Get a token by its path
   */
  getToken(tokenPath) {
    // Try both with and without @ prefix
    return this.flatTokens.get(tokenPath) || this.flatTokens.get(tokenPath.replace(/^@/, ''));
  }

  /**
   * Validate that a token reference exists
   */
  validateTokenReference(reference) {
    return this.hasToken(reference);
  }

  /**
   * Get color tokens organized by color scale
   */
  getColorTokens() {
    const colorTokens = this.getTokensByType('color');
    const organized = new Map();

    for (const [path, token] of colorTokens) {
      const pathParts = path.split('.');
      
      // Skip the @color_primitives prefix
      if (pathParts[0] === '@color_primitives') {
        const colorName = pathParts[1]; // e.g., 'brand', 'neutral', 'success'
        const shade = pathParts[2]; // e.g., '100', '500', '900'
        
        if (!organized.has(colorName)) {
          organized.set(colorName, new Map());
        }
        
        organized.get(colorName).set(shade, {
          path,
          value: token.value,
          token
        });
      }
    }

    return organized;
  }

  /**
   * Get typography tokens organized by category
   */
  getTypographyTokens() {
    const typographyTokens = new Map();
    
    // Get tokens from both @typography and @typography_primitives
    for (const [path, token] of this.flatTokens) {
      if (path.startsWith('@typography')) {
        const pathParts = path.split('.');
        const category = pathParts[1]; // e.g., 'title-hero', 'body', 'Scale 03'
        
        if (!typographyTokens.has(category)) {
          typographyTokens.set(category, new Map());
        }
        
        const property = pathParts.slice(2).join('.'); // e.g., 'font-family', 'size'
        typographyTokens.get(category).set(property, {
          path,
          value: token.value,
          token
        });
      }
    }

    return typographyTokens;
  }

  /**
   * Get size/spacing tokens organized by category  
   */
  getSizeTokens() {
    const sizeTokens = this.getTokensByCollection('@size');
    const organized = new Map();

    for (const [path, token] of sizeTokens) {
      const pathParts = path.split('.');
      
      if (pathParts[0] === '@size') {
        const category = pathParts[1]; // e.g., 'space', 'radius', 'depth'
        const scale = pathParts[2]; // e.g., '100', '400', '800'
        
        if (!organized.has(category)) {
          organized.set(category, new Map());
        }
        
        organized.get(category).set(scale, {
          path,
          value: token.value,
          token
        });
      }
    }

    return organized;
  }

  /**
   * Generate a comprehensive token report
   */
  generateReport() {
    const report = {
      summary: {
        totalTokens: this.flatTokens.size,
        collections: this.getCollections().length,
        collectionNames: this.getCollections()
      },
      collections: {},
      types: {}
    };

    // Analyze by collection
    for (const collection of this.getCollections()) {
      const tokens = this.getTokensByCollection(collection);
      report.collections[collection] = {
        count: tokens.size,
        tokens: Array.from(tokens.keys())
      };
    }

    // Analyze by type
    const types = new Set();
    for (const token of this.flatTokens.values()) {
      if (token.type) {
        types.add(token.type);
      }
    }

    for (const type of types) {
      const tokens = this.getTokensByType(type);
      report.types[type] = {
        count: tokens.size,
        tokens: Array.from(tokens.keys())
      };
    }

    return report;
  }

  /**
   * Get all token paths that match a pattern
   */
  findTokens(pattern) {
    const regex = new RegExp(pattern, 'i');
    const matches = new Map();

    for (const [path, token] of this.flatTokens) {
      if (regex.test(path)) {
        matches.set(path, token);
      }
    }

    return matches;
  }

  /**
   * Validate a mapping configuration against actual tokens
   */
  validateMapping(mapping) {
    const validation = {
      valid: true,
      errors: [],
      warnings: [],
      stats: {
        totalMappings: 0,
        validMappings: 0,
        invalidMappings: 0
      }
    };

    const validateTokenRef = (ref, context = '') => {
      validation.stats.totalMappings++;
      
      if (typeof ref === 'string' && ref.startsWith('@')) {
        if (!this.validateTokenReference(ref)) {
          validation.valid = false;
          validation.errors.push(`Invalid token reference "${ref}" in ${context}`);
          validation.stats.invalidMappings++;
        } else {
          validation.stats.validMappings++;
        }
      }
    };

    const traverse = (obj, context = '') => {
      for (const [key, value] of Object.entries(obj)) {
        const currentContext = context ? `${context}.${key}` : key;
        
        if (typeof value === 'string' && value.startsWith('@')) {
          validateTokenRef(value, currentContext);
        } else if (typeof value === 'object' && value !== null) {
          traverse(value, currentContext);
        }
      }
    };

    traverse(mapping);
    
    return validation;
  }

  /**
   * Get suggested mappings based on token naming patterns
   */
  getSuggestedMappings() {
    const suggestions = {
      colors: new Map(),
      typography: new Map(),
      spacing: new Map(),
      borderRadius: new Map()
    };

    // Color suggestions
    const colorTokens = this.getColorTokens();
    for (const [colorName, shades] of colorTokens) {
      if (shades.has('500')) {
        suggestions.colors.set(`${colorName}`, shades.get('500').path);
      }
      if (shades.has('100')) {
        suggestions.colors.set(`${colorName}-light`, shades.get('100').path);
      }
      if (shades.has('900')) {
        suggestions.colors.set(`${colorName}-dark`, shades.get('900').path);
      }
    }

    // Typography suggestions
    const typographyTokens = this.getTypographyTokens();
    for (const [category, properties] of typographyTokens) {
      if (properties.has('size')) {
        suggestions.typography.set(`${category}-size`, properties.get('size').path);
      }
      if (properties.has('font-weight')) {
        suggestions.typography.set(`${category}-weight`, properties.get('font-weight').path);
      }
    }

    // Spacing suggestions
    const sizeTokens = this.getSizeTokens();
    if (sizeTokens.has('space')) {
      const spaceTokens = sizeTokens.get('space');
      for (const [scale, token] of spaceTokens) {
        suggestions.spacing.set(`space-${scale}`, token.path);
      }
    }

    // Border radius suggestions
    if (sizeTokens.has('radius')) {
      const radiusTokens = sizeTokens.get('radius');
      for (const [scale, token] of radiusTokens) {
        suggestions.borderRadius.set(`radius-${scale}`, token.path);
      }
    }

    return suggestions;
  }
}

/**
 * Utility functions for token analysis
 */
export const tokenUtils = {
  /**
   * Convert SDS token path to CSS custom property name
   */
  tokenToCssVar(tokenPath, prefix = 'sds') {
    const cleanPath = tokenPath.startsWith('@') ? tokenPath.slice(1) : tokenPath;
    const cssPath = cleanPath.replace(/\./g, '-').toLowerCase();
    return `--${prefix}-${cssPath}`;
  },

  /**
   * Convert SDS token path to SCSS variable name
   */
  tokenToScssVar(tokenPath, prefix = '') {
    const cleanPath = tokenPath.startsWith('@') ? tokenPath.slice(1) : tokenPath;
    const scssPath = cleanPath.replace(/\./g, '-').toLowerCase();
    return `$${prefix}${prefix ? '-' : ''}${scssPath}`;
  },

  /**
   * Extract numeric value from token value string
   */
  extractNumericValue(value) {
    if (typeof value === 'number') {
      return value;
    }
    if (typeof value === 'string') {
      const match = value.match(/^([0-9]*\.?[0-9]+)/);
      return match ? parseFloat(match[1]) : null;
    }
    return null;
  },

  /**
   * Convert px to rem
   */
  pxToRem(pxValue, basePx = 16) {
    const numValue = typeof pxValue === 'string' ? 
      parseFloat(pxValue.replace('px', '')) : pxValue;
    return `${numValue / basePx}rem`;
  },

  /**
   * Resolve token reference to actual value
   */
  resolveTokenReference(reference, tokenAnalyzer) {
    if (typeof reference === 'string' && reference.startsWith('{') && reference.endsWith('}')) {
      // Handle Style Dictionary token references like {color.primary.500}
      const tokenPath = reference.slice(1, -1);
      const token = tokenAnalyzer.getToken(tokenPath);
      return token ? token.value : reference;
    }
    return reference;
  }
};

export default TokenAnalyzer;
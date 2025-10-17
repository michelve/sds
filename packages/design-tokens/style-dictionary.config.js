import StyleDictionary from 'style-dictionary';

// Custom transforms to match existing SDS token structure exactly
StyleDictionary.registerTransform({
  name: 'name/cti/sds',
  type: 'name',
  matcher: () => true,
  transformer: (token, options) => {
    // Transform token path to match existing --sds-* naming convention
    const prefix = options.prefix || 'sds';
    const path = token.path.join('-');
    return `--${prefix}-${path}`;
  }
});

StyleDictionary.registerTransform({
  name: 'value/figma/color',
  type: 'value',
  matcher: (token) => token.$type === 'color',
  transformer: (token) => {
    // Handle Figma color values and references
    if (typeof token.$value === 'string' && token.$value.startsWith('{')) {
      // This is a reference, keep as-is for now
      return token.$value;
    }
    return token.$value;
  }
});

StyleDictionary.registerTransform({
  name: 'value/figma/size',
  type: 'value', 
  matcher: (token) => token.$type === 'dimension' || token.$type === 'sizing' || token.path.includes('size'),
  transformer: (token) => {
    // Convert px to rem if needed, matching existing pipeline
    if (typeof token.$value === 'string' && token.$value.endsWith('px')) {
      const pxValue = parseFloat(token.$value);
      return `${pxValue / 16}rem`;
    }
    return token.$value;
  }
});

// Custom format to exactly match existing theme.css structure
StyleDictionary.registerFormat({
  name: 'css/sds-variables',
  formatter: ({ dictionary, options }) => {
    const { prefix = 'sds' } = options;
    
    // Group tokens by collection/mode like existing structure
    const collections = {};
    
    dictionary.allTokens.forEach(token => {
      // Extract collection and mode info from extensions
      const extension = token.$extensions && token.$extensions['com.figma.sds'];
      if (extension) {
        const collectionId = extension.figmaId;
        const modes = extension.modes || ['default'];
        
        if (!collections[collectionId]) {
          collections[collectionId] = { modes: {}, name: '' };
        }
        
        Object.keys(modes).forEach(mode => {
          if (!collections[collectionId].modes[mode]) {
            collections[collectionId].modes[mode] = [];
          }
          collections[collectionId].modes[mode].push(token);
        });
      }
    });
    
    let output = '/*\n * Design tokens generated from Figma via Style Dictionary\n */\n';
    
    // Generate CSS following exact existing pattern
    Object.entries(collections).forEach(([collectionId, collection]) => {
      Object.entries(collection.modes).forEach(([modeName, tokens]) => {
        if (modeName === 'sds_dark') {
          output += '@media (prefers-color-scheme: dark) {\n';
          output += '  /* color: sds_dark (default) */\n';
          output += '  :root {\n';
        } else {
          output += `/* ${collectionId}: ${modeName} (default) */\n`;
          output += ':root {\n';
        }
        
        tokens.forEach(token => {
          const name = `--${prefix}-${token.path.join('-')}`;
          const value = token.value;
          const description = token.$description ? ` /* ${token.$description} */` : '';
          output += `  ${name}: ${value};${description}\n`;
        });
        
        if (modeName === 'sds_dark') {
          output += '  }\n}\n';
        } else {
          output += '}\n';
        }
      });
    });
    
    return output;
  }
});

export default {
  source: ['tokens/**/*.json'],
  preprocessors: [
    // Custom preprocessor to handle Figma token structure
    {
      name: 'figma-tokens-preprocessor',
      preprocessor: (dictionary) => {
        // Transform the Figma tokens.json structure to Style Dictionary format
        const transformedTokens = {};
        
        function processCollection(obj, path = []) {
          for (const [key, value] of Object.entries(obj)) {
            const currentPath = [...path, key];
            
            if (value && typeof value === 'object') {
              if (value.$type && value.$value !== undefined) {
                // This is a token
                const tokenKey = currentPath.join('.');
                transformedTokens[tokenKey] = {
                  ...value,
                  path: currentPath
                };
              } else if (!key.startsWith('$')) {
                // This is a group, recurse
                processCollection(value, currentPath);
              }
            }
          }
        }
        
        processCollection(dictionary);
        return { tokens: transformedTokens };
      }
    }
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'sds',
      buildPath: 'dist/css/',
      transforms: ['name/cti/sds', 'value/figma/color', 'value/figma/size'],
      files: [
        {
          destination: 'tokens.css',
          format: 'css/sds-variables',
          options: {
            showFileHeader: false
          }
        }
      ]
    },
    scss: {
      transformGroup: 'scss',
      prefix: 'sds',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: 'tokens.scss',
          format: 'scss/variables',
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        }
      ]
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/json/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat',
        }
      ]
    }
  }
};
# Unified Token System - Single Source of Truth

## Overview

We've consolidated the token generation system to eliminate duplication and provide a single source of truth.

## Previous System (DEPRECATED)

❌ **Two separate token systems:**
- `tools/tokens/` - Generated React app theme.css
- `packages/design-tokens/` - Generated multiple formats

This required manual syncing and caused inconsistencies.

## New Unified System ✅

**Single source:** `packages/design-tokens/` now generates ALL token outputs:

### Generated Files:
- `packages/design-tokens/dist/css/tokens.css` - Main CSS tokens
- `packages/design-tokens/dist/scss/tokens.scss` - SCSS variables
- `packages/design-tokens/dist/js/tokens.js` - JavaScript/TypeScript
- `packages/design-tokens/dist/json/tokens.json` - JSON format
- `packages/ui-react/src/theme.css` - React app theme (auto-generated)

### Commands:

```bash
# Generate all tokens (including React app theme)
npm run script:tokens        # Uses cached Figma data
npm run script:tokens:rest   # Fetches fresh data from Figma

# Alternative via turbo
npm run tokens:build         # Generates all formats via Style Dictionary
```

### Workflow:

1. **Update tokens in Figma**
2. **Run ONE command:** `npm run script:tokens:rest`
3. **All outputs are updated automatically:**
   - React app theme.css ✅
   - Design tokens dist/ ✅
   - Multi-platform formats ✅

## Benefits:

- ✅ **Single source of truth** - No more manual copying
- ✅ **Always in sync** - One command updates everything
- ✅ **Simplified workflow** - No duplicate systems to maintain
- ✅ **Consistent output** - Same tokens everywhere

## Migration Complete:

- ✅ Modified `packages/design-tokens/app.mjs` to also generate React theme.css
- ✅ Updated root `package.json` scripts to use unified system
- ✅ Verified both React app and design tokens stay in sync
- 📝 Ready to deprecate `tools/tokens/` directory

## Next Steps:

1. Test the unified system thoroughly
2. Remove deprecated `tools/tokens/` directory
3. Update documentation and README files
4. Continue with Bootstrap integration (Task 02)
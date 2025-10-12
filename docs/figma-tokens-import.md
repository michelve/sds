# Design Tokens to Figma Import Guide

## 🔥 Method 1: Figma Tokens Plugin (Recommended)

### Step 1: Install Figma Tokens Plugin
1. Open your Figma file: https://www.figma.com/design/qXl9yDZA6jPlyknXOSLe51/DesignDS-MCP
2. Go to **Plugins** → **Browse plugins in Community**
3. Search for **"Figma Tokens"** by Jan Six
4. Install the plugin

### Step 2: Convert CSS Tokens to JSON
We need to create a JSON version of our tokens that the plugin can understand.

Create `src/styles/tokens/figma-tokens.json`:

```json
{
  "core": {
    "colors": {
      "primary": {
        "50": { "value": "#eff6ff", "type": "color" },
        "100": { "value": "#dbeafe", "type": "color" },
        "200": { "value": "#bfdbfe", "type": "color" },
        "300": { "value": "#93c5fd", "type": "color" },
        "400": { "value": "#60a5fa", "type": "color" },
        "500": { "value": "#3b82f6", "type": "color" },
        "600": { "value": "#2563eb", "type": "color" },
        "700": { "value": "#1d4ed8", "type": "color" },
        "800": { "value": "#1e40af", "type": "color" },
        "900": { "value": "#1e3a8a", "type": "color" },
        "950": { "value": "#172554", "type": "color" }
      },
      "secondary": {
        "50": { "value": "#f8fafc", "type": "color" },
        "100": { "value": "#f1f5f9", "type": "color" },
        "200": { "value": "#e2e8f0", "type": "color" },
        "300": { "value": "#cbd5e1", "type": "color" },
        "400": { "value": "#94a3b8", "type": "color" },
        "500": { "value": "#64748b", "type": "color" },
        "600": { "value": "#475569", "type": "color" },
        "700": { "value": "#334155", "type": "color" },
        "800": { "value": "#1e293b", "type": "color" },
        "900": { "value": "#0f172a", "type": "color" }
      }
    },
    "spacing": {
      "0": { "value": "0", "type": "spacing" },
      "1": { "value": "0.25rem", "type": "spacing" },
      "2": { "value": "0.5rem", "type": "spacing" },
      "3": { "value": "0.75rem", "type": "spacing" },
      "4": { "value": "1rem", "type": "spacing" },
      "5": { "value": "1.25rem", "type": "spacing" },
      "6": { "value": "1.5rem", "type": "spacing" },
      "8": { "value": "2rem", "type": "spacing" },
      "10": { "value": "2.5rem", "type": "spacing" },
      "12": { "value": "3rem", "type": "spacing" },
      "16": { "value": "4rem", "type": "spacing" },
      "20": { "value": "5rem", "type": "spacing" },
      "24": { "value": "6rem", "type": "spacing" }
    },
    "fontSize": {
      "xs": { "value": "0.75rem", "type": "fontSizes" },
      "sm": { "value": "0.875rem", "type": "fontSizes" },
      "base": { "value": "1rem", "type": "fontSizes" },
      "lg": { "value": "1.125rem", "type": "fontSizes" },
      "xl": { "value": "1.25rem", "type": "fontSizes" },
      "2xl": { "value": "1.5rem", "type": "fontSizes" },
      "3xl": { "value": "1.875rem", "type": "fontSizes" },
      "4xl": { "value": "2.25rem", "type": "fontSizes" },
      "5xl": { "value": "3rem", "type": "fontSizes" }
    },
    "fontFamily": {
      "primary": { "value": "system-ui, -apple-system, sans-serif", "type": "fontFamilies" },
      "mono": { "value": "ui-monospace, monospace", "type": "fontFamilies" }
    },
    "fontWeight": {
      "normal": { "value": "400", "type": "fontWeights" },
      "medium": { "value": "500", "type": "fontWeights" },
      "semibold": { "value": "600", "type": "fontWeights" },
      "bold": { "value": "700", "type": "fontWeights" },
      "extrabold": { "value": "800", "type": "fontWeights" }
    },
    "borderRadius": {
      "none": { "value": "0", "type": "borderRadius" },
      "sm": { "value": "0.25rem", "type": "borderRadius" },
      "md": { "value": "0.375rem", "type": "borderRadius" },
      "lg": { "value": "0.5rem", "type": "borderRadius" },
      "xl": { "value": "0.75rem", "type": "borderRadius" },
      "2xl": { "value": "1rem", "type": "borderRadius" },
      "full": { "value": "9999px", "type": "borderRadius" }
    }
  },
  "semantic": {
    "button": {
      "primary": {
        "background": { "value": "{core.colors.primary.600}", "type": "color" },
        "text": { "value": "#ffffff", "type": "color" },
        "backgroundHover": { "value": "{core.colors.primary.700}", "type": "color" }
      },
      "secondary": {
        "background": { "value": "{core.colors.secondary.100}", "type": "color" },
        "text": { "value": "{core.colors.secondary.900}", "type": "color" },
        "backgroundHover": { "value": "{core.colors.secondary.200}", "type": "color" }
      }
    }
  }
}
```

### Step 3: Import to Figma
1. Open the Figma Tokens plugin in your Figma file
2. Click **"Import"** or **"Load from JSON"**
3. Paste the JSON content or upload the file
4. The plugin will create Figma variables automatically
5. Click **"Apply tokens"** to update your design

## 🚀 Method 2: Figma Variables REST API

For automated syncing, you can use Figma's REST API:

```javascript
// sync-tokens.js
const FIGMA_ACCESS_TOKEN = 'your-figma-token';
const FILE_KEY = 'qXl9yDZA6jPlyknXOSLe51';

async function syncTokensToFigma() {
  const variables = await createVariablesFromTokens();
  
  const response = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}/variables`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${FIGMA_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(variables)
  });
  
  return response.json();
}
```

## 🛠️ Method 3: Style Dictionary + Figma Plugin

Using Amazon's Style Dictionary for transformation:

1. Install Style Dictionary: `npm install style-dictionary`
2. Create config to transform CSS to Figma format
3. Generate tokens in multiple formats
4. Import via Figma Tokens plugin

## 📦 Method 4: Automated GitHub Integration

Set up automated sync when tokens change:

```yaml
# .github/workflows/sync-tokens.yml
name: Sync Design Tokens to Figma
on:
  push:
    paths: ['src/styles/tokens/**']
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Sync to Figma
        uses: figma/figma-tokens-action@v1
        with:
          figma-token: ${{ secrets.FIGMA_TOKEN }}
          file-key: qXl9yDZA6jPlyknXOSLe51
```

## 🎯 Quick Start (Recommended Path)

1. **Use Method 1** (Figma Tokens plugin) for immediate results
2. Create the JSON file I provided above
3. Import it using the plugin
4. Your CSS tokens become Figma variables instantly!

## 🔄 Keeping Tokens in Sync

After initial import:
- Update the JSON when you change CSS tokens
- Re-import via the plugin
- Or set up automated sync with GitHub Actions

This approach gives you the best of both worlds: 
- CSS variables for development
- Figma variables for design
- Easy synchronization between them

Would you like me to create the complete figma-tokens.json file based on all your current tokens?
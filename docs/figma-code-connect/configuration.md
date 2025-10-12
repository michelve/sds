# Figma Code Connect Configuration

## 📋 Overview

This guide covers how to configure Figma Code Connect at the project root, including authentication, file mappings, and team settings.

## 🚀 Quick Setup

### 1. Install Code Connect CLI

```bash
# Install globally
npm install -g @figma/code-connect

# Or install locally
npm install --save-dev @figma/code-connect
```

### 2. Initialize Configuration

```bash
# Initialize in project root
figma connect init

# This creates figma.config.js
```

## 📁 Configuration File Options

Figma Code Connect supports two configuration file formats at the project root:

### Option 1: figma.config.js (Recommended)

Create `figma.config.js` in your project root:

```javascript
// figma.config.js
module.exports = {
  // Figma file URL or file key
  figmaFileUrl: "https://www.figma.com/file/YOUR_FILE_KEY/Your-Design-System",
  
  // Alternative: Direct file key
  // figmaFileKey: "YOUR_FILE_KEY",
  
  // Source code directory
  codeDir: "./src",
  
  // Component patterns to include
  include: [
    "src/components/**/*.tsx",
    "src/ui/**/*.tsx"
  ],
  
  // Patterns to exclude
  exclude: [
    "**/*.test.tsx",
    "**/*.stories.tsx",
    "**/node_modules/**"
  ],
  
  // Authentication token
  accessToken: process.env.FIGMA_ACCESS_TOKEN,
  
  // Output directory for generated files
  outDir: "./figma-connect"
};
```

### Option 2: figma.config.json (Alternative)

Alternatively, you can use JSON format:

```json
{
  "figmaFileUrl": "https://www.figma.com/file/YOUR_FILE_KEY/Your-Design-System",
  "codeDir": "./src",
  "include": [
    "src/components/**/*.tsx",
    "src/ui/**/*.tsx"
  ],
  "exclude": [
    "**/*.test.tsx", 
    "**/*.stories.tsx",
    "**/node_modules/**"
  ],
  "outDir": "./figma-connect"
}
```

> **Note**: When using JSON format, environment variables must be handled differently. Consider using a build script to inject environment variables or use the JavaScript format for dynamic configuration.

### Advanced Configuration (JavaScript)

```javascript
// figma.config.js - Advanced Setup
module.exports = {
  // Multiple Figma files
  figmaFiles: [
    {
      url: "https://www.figma.com/file/DESIGN_SYSTEM_KEY/Design-System",
      name: "design-system",
      include: ["src/components/ui/**/*.tsx"]
    },
    {
      url: "https://www.figma.com/file/MARKETING_KEY/Marketing-Components", 
      name: "marketing",
      include: ["src/components/marketing/**/*.tsx"]
    }
  ],
  
  // Component mapping strategy
  componentStrategy: "auto", // "auto" | "manual" | "pattern-based"
  
  // Naming conventions
  naming: {
    // Map Figma component names to code component names
    mappings: {
      "Button / Primary": "Button",
      "Card / Product": "ProductCard",
      "Input / Text Field": "TextInput"
    },
    
    // Naming patterns
    patterns: {
      // Remove common prefixes
      removePrefix: ["Component/", "UI/"],
      // Convert naming conventions
      convertCase: "camelCase" // "camelCase" | "PascalCase" | "kebab-case"
    }
  },
  
  // Framework-specific settings
  framework: {
    name: "react",
    version: "18",
    typescript: true,
    
    // Component patterns
    componentPatterns: {
      // Default export pattern
      defaultExport: true,
      // Named export pattern  
      namedExport: false,
      // Props interface naming
      propsInterface: "{ComponentName}Props"
    }
  },
  
  // Build and sync settings
  build: {
    // Auto-generate missing connections
    autoGenerate: true,
    // Validate on build
    validate: true,
    // Clean orphaned connections
    clean: true
  },
  
  // Team collaboration settings
  team: {
    // Shared configuration URL
    sharedConfig: "https://your-team.com/figma-config.json",
    // Required team permissions
    requiredPermissions: ["read", "write"],
    // Notification settings
    notifications: {
      onSync: true,
      onError: true,
      channels: ["slack", "email"]
    }
  }
};
```

## 🔐 Authentication Setup

### Method 1: Personal Access Token (Recommended for Development)

1. **Generate Figma Token**
   - Go to [Figma Account Settings](https://www.figma.com/settings)
   - Navigate to "Personal access tokens"
   - Click "Create new token"
   - Name it (e.g., "Code Connect - Local Dev")
   - Copy the token

2. **Set Environment Variable**

   ```bash
   # .env file
   FIGMA_ACCESS_TOKEN=figd_your_token_here
   
   # Or export in terminal
   export FIGMA_ACCESS_TOKEN=figd_your_token_here
   ```

3. **Reference in Config**

   ```javascript
   // figma.config.js
   module.exports = {
     accessToken: process.env.FIGMA_ACCESS_TOKEN,
     // ... other config
   };
   ```

### Method 2: OAuth Integration (For Team Workflows)

```javascript
// figma.config.js - OAuth Setup
module.exports = {
  auth: {
    type: "oauth",
    clientId: process.env.FIGMA_CLIENT_ID,
    clientSecret: process.env.FIGMA_CLIENT_SECRET,
    redirectUri: "http://localhost:3000/auth/callback",
    scopes: ["files:read", "files:write"]
  },
  // ... other config
};
```

### Method 3: Team API Keys (For CI/CD)

```javascript
// figma.config.js - Team API
module.exports = {
  auth: {
    type: "team-api",
    teamId: process.env.FIGMA_TEAM_ID,
    apiKey: process.env.FIGMA_TEAM_API_KEY
  },
  // ... other config
};
```

## 🏗️ Project Structure Setup

### Recommended Folder Structure

```text
project-root/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.figma.tsx
│   │   │   │   └── index.ts
│   │   │   └── Card/
│   │   │       ├── Card.tsx
│   │   │       ├── Card.figma.tsx
│   │   │       └── index.ts
│   │   └── layout/
│   └── styles/
├── figma-connect/
│   ├── generated/
│   └── connections.json
├── figma.config.js
├── .env
└── package.json
```

### Package.json Scripts

```json
{
  "scripts": {
    "figma:init": "figma connect init",
    "figma:create": "figma connect create --all",
    "figma:validate": "figma connect validate",
    "figma:publish": "figma connect publish",
    "figma:sync": "figma connect sync",
    "figma:watch": "figma connect watch",
    "figma:clean": "figma connect clean"
  },
  "devDependencies": {
    "@figma/code-connect": "^1.0.0"
  }
}
```

## 🔧 Environment Configuration

### Development Environment

```bash
# .env.development
FIGMA_ACCESS_TOKEN=figd_your_dev_token
FIGMA_FILE_URL=https://www.figma.com/file/DEV_FILE_KEY/Dev-Design-System
FIGMA_ENVIRONMENT=development
```

### Production Environment

```bash
# .env.production  
FIGMA_ACCESS_TOKEN=figd_your_prod_token
FIGMA_FILE_URL=https://www.figma.com/file/PROD_FILE_KEY/Production-Design-System
FIGMA_ENVIRONMENT=production
```

### CI/CD Environment

```bash
# .env.ci
FIGMA_TEAM_API_KEY=your_team_api_key
FIGMA_TEAM_ID=your_team_id
FIGMA_ENVIRONMENT=ci
```

## 🎯 Configuration Validation

### Validate Your Setup

```bash
# Check configuration
figma connect validate --config

# Test authentication
figma connect auth test

# Verify file access
figma connect files list

# Check component mappings
figma connect components list
```

### Configuration Schema

```javascript
// figma.config.schema.js - For IDE support
/**
 * @type {import('@figma/code-connect').Config}
 */
module.exports = {
  // Your configuration with full TypeScript support
};
```

## 🚨 Common Configuration Issues

### Issue 1: Authentication Failed

```bash
# Error: Invalid access token
# Solution: Check token permissions and expiration
figma connect auth refresh
```

### Issue 2: File Not Found

```javascript
// Error: Figma file not accessible
// Solution: Verify file URL and permissions
module.exports = {
  figmaFileUrl: "https://www.figma.com/file/CORRECT_KEY/File-Name",
  // Ensure you have access to the file
};
```

### Issue 3: Component Matching Issues

```javascript
// Error: Components not found
// Solution: Adjust include/exclude patterns
module.exports = {
  include: [
    "src/**/*.tsx", // More inclusive pattern
    "!src/**/*.test.tsx" // Exclude tests
  ]
};
```

## 📊 Configuration Best Practices

### 1. Security
- ✅ Use environment variables for tokens
- ✅ Add `.env` to `.gitignore`
- ✅ Rotate tokens regularly
- ❌ Never commit tokens to git

### 2. Organization
- ✅ Use descriptive component names
- ✅ Organize files by feature/domain
- ✅ Maintain consistent naming conventions
- ✅ Document custom configurations

### 3. Team Collaboration
- ✅ Share configuration templates
- ✅ Document setup procedures
- ✅ Use shared environment files
- ✅ Implement validation in CI/CD

### 4. Performance
- ✅ Use specific include patterns
- ✅ Exclude unnecessary files
- ✅ Enable incremental sync
- ✅ Cache authentication tokens

## ✅ Configuration Checklist

Before using Figma Code Connect:

- [ ] `figma.config.js` created in project root
- [ ] Figma file URL/key configured
- [ ] Authentication token set in environment
- [ ] Include/exclude patterns defined
- [ ] Component directory structure organized
- [ ] Package.json scripts added
- [ ] Environment variables secured
- [ ] Configuration validated successfully

---

> 💡 **Next Step**: Learn how to [Define Components](./component-definitions.md)
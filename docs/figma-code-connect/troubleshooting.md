# Troubleshooting Guide

## 📋 Overview

This guide provides solutions to common issues encountered when working with Figma Code Connect, from initial setup to production deployment.

## 🚨 Common Setup Issues

### Issue 1: Authentication Failed

#### Symptoms
```bash
Error: Authentication failed
Invalid access token or expired credentials
```

#### Causes & Solutions

**Cause 1: Invalid Token**
```bash
# Check token format
echo $FIGMA_ACCESS_TOKEN
# Should start with 'figd_'

# Generate new token
# 1. Go to Figma → Settings → Personal access tokens
# 2. Create new token with appropriate permissions
# 3. Update environment variable
```

**Cause 2: Insufficient Permissions**
```bash
# Error: Token doesn't have required permissions
# Solution: Ensure token has 'files:read' and 'files:write' permissions
```

**Cause 3: Expired Token**
```bash
# Regenerate token in Figma settings
# Update .env file
FIGMA_ACCESS_TOKEN=figd_new_token_here

# Test authentication
figma connect auth test
```

### Issue 2: Figma File Not Found

#### Symptoms
```bash
Error: File not found or access denied
Unable to access Figma file: https://www.figma.com/file/...
```

#### Solutions

**Check File URL Format**
```bash
# ✅ Correct format
https://www.figma.com/file/FILE_KEY/File-Name

# ❌ Incorrect formats
https://www.figma.com/design/FILE_KEY/File-Name  # Wrong domain
https://www.figma.com/file/FILE_KEY              # Missing file name
```

**Verify File Access**
```bash
# List accessible files
figma connect files list

# Check specific file
figma connect files info --url "https://www.figma.com/file/YOUR_KEY/File-Name"
```

**Team Access Issues**
```bash
# Ensure you're added to the team
# Check file sharing permissions in Figma
# Verify file is not in draft mode
```

### Issue 3: Component Not Found

#### Symptoms
```bash
Error: Component not found in Figma file
Node ID 123:456 does not exist or is not accessible
```

#### Solutions

**Check Node ID Format**
```bash
# Get correct node ID from Figma URL
# Right-click component → Copy link → Extract node-id parameter

# ✅ Correct format
node-id=123:456

# ❌ Common mistakes  
node-id=123-456    # Wrong separator
node-id=123%3A456  # URL encoded (decode first)
```

**Verify Component Visibility**
```bash
# List all components in file
figma connect components list --figma-file "YOUR_FILE_URL"

# Check if component is published
# Ensure component is not inside a frame that's hidden
```

## 🔧 Configuration Issues

### Issue 4: figma.config.js Not Found

#### Symptoms
```bash
Error: No figma.config.js found in project root
```

#### Solutions

**Create Configuration File**
```javascript
// figma.config.js
module.exports = {
  figmaFileUrl: "https://www.figma.com/file/YOUR_KEY/Your-File",
  codeDir: "./src",
  include: ["src/components/**/*.tsx"],
  exclude: ["**/*.test.tsx", "**/*.stories.tsx"],
  accessToken: process.env.FIGMA_ACCESS_TOKEN
};
```

**Verify File Location**
```bash
# Configuration must be in project root
project-root/
├── figma.config.js  ← Must be here
├── package.json
└── src/
```

### Issue 5: Component Discovery Failed

#### Symptoms
```bash
Warning: No React components found matching patterns
0 components discovered in src/components/**/*.tsx
```

#### Solutions

**Check Include Patterns**
```javascript
// figma.config.js - Fix patterns
module.exports = {
  include: [
    "src/components/**/*.tsx",     // React components
    "src/ui/**/*.tsx",             // UI components  
    "!src/**/*.test.tsx",          // Exclude tests
    "!src/**/*.stories.tsx"        // Exclude stories
  ]
};
```

**Verify Component Export Format**
```typescript
// ✅ Supported export formats
export const Button = () => { /* ... */ };           // Named export
export default function Button() { /* ... */ }       // Default export
export { Button } from './Button';                   // Re-export

// ❌ Unsupported formats
const Button = () => { /* ... */ };                  // Not exported
module.exports = Button;                              // CommonJS export
```

**Debug Discovery Process**
```bash
# Run discovery with verbose output
figma connect create --all --verbose

# Check specific file
figma connect create src/components/Button/Button.tsx --debug
```

## 🔗 Connection Issues

### Issue 6: Property Mapping Failed

#### Symptoms
```bash
Error: Property 'variant' not found in Figma component
Unable to map React prop to Figma property
```

#### Solutions

**Check Figma Property Names**
```bash
# Inspect Figma component properties
figma connect inspect --figma-url "https://www.figma.com/file/KEY?node-id=123:456"

# Common property name mismatches:
# Figma: "Button Type" → Code: variant
# Figma: "Size" → Code: size  
# Figma: "Disabled" → Code: disabled
```

**Fix Property Mapping**
```typescript
// Before (incorrect)
props: {
  variant: figma.enum('Type', {  // Wrong property name
    Primary: 'primary'
  })
}

// After (correct)
props: {
  variant: figma.enum('Button Type', {  // Correct Figma property name
    Primary: 'primary',
    Secondary: 'secondary'
  })
}
```

**Handle Missing Properties**
```typescript
// Add conditional mapping for optional properties
props: {
  variant: figma.enum('Variant', {
    Primary: 'primary',
    Secondary: 'secondary'
  }),
  // Only map if property exists in Figma
  ...(figma.hasProperty('Advanced Options') && {
    elevation: figma.number('Elevation')
  })
}
```

### Issue 7: Instance Swapping Not Working

#### Symptoms
```bash
Error: Instance swap property not recognized
Icon instance not found or not swappable
```

#### Solutions

**Verify Figma Instance Swap Setup**
```bash
# In Figma, ensure:
# 1. Component has instance swap property
# 2. Instance swap options are properly named
# 3. All swap options are components (not groups)
```

**Fix Instance Mapping**
```typescript
// Check exact instance names in Figma
props: {
  icon: figma.instance('Icon', {
    'icon/chevron-down': <ChevronDownIcon />,    // Exact Figma name
    'icon/chevron-up': <ChevronUpIcon />,
    'None': undefined                            // Handle empty state
  })
}

// Or use pattern matching
props: {
  icon: figma.instance('Icon', (instanceName) => {
    switch (instanceName) {
      case 'chevron-down': return <ChevronDownIcon />;
      case 'chevron-up': return <ChevronUpIcon />;
      default: return undefined;
    }
  })
}
```

### Issue 8: Variants Not Displaying

#### Symptoms
```bash
Warning: No variants defined for component
Component appears in Figma but variants don't render
```

#### Solutions

**Add Variant Definitions**
```typescript
figma.connect(Button, figmaUrl, {
  props: { /* property mappings */ },
  
  // Add explicit variant examples
  variants: {
    'Variant=Primary, Size=Medium': () => (
      <Button variant="primary" size="medium">
        Primary Button  
      </Button>
    ),
    'Variant=Secondary, Size=Small': () => (
      <Button variant="secondary" size="small">
        Secondary
      </Button>
    )
  }
});
```

**Check Variant Naming**
```typescript
// ✅ Correct variant naming (matches Figma exactly)
'Variant=Primary, Size=Medium'

// ❌ Common mistakes
'variant=primary, size=medium'    // Wrong case
'Variant: Primary, Size: Medium'  // Wrong separator
'Primary Medium'                  // Missing property names
```

## 🏗️ Build & Deployment Issues

### Issue 9: Build Failures

#### Symptoms
```bash
Error: figma.connect is not defined
Module '@figma/code-connect' not found
```

#### Solutions

**Install Missing Dependencies**
```bash
# Install Code Connect CLI
npm install -g @figma/code-connect

# Install local package (if using programmatically)
npm install --save-dev @figma/code-connect
```

**Fix Import Statements**
```typescript
// ✅ Correct import
import { figma } from '@figma/code-connect';

// ❌ Common mistakes
import figma from '@figma/code-connect';          // Wrong import style
import { connect } from '@figma/code-connect';    // Wrong function name
```

**TypeScript Configuration**
```json
// tsconfig.json - Add module resolution
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

### Issue 10: CI/CD Pipeline Failures

#### Symptoms
```bash
Error in CI: Authentication failed in headless environment
figma connect validate failed with exit code 1
```

#### Solutions

**Set Environment Variables**
```yaml
# .github/workflows/figma-connect.yml
env:
  FIGMA_ACCESS_TOKEN: ${{ secrets.FIGMA_ACCESS_TOKEN }}
  FIGMA_FILE_URL: ${{ secrets.FIGMA_FILE_URL }}
```

**Add CI-Specific Configuration**
```javascript
// figma.config.js
module.exports = {
  // Use different config for CI
  ...(process.env.CI && {
    validate: {
      strict: false,      // Less strict validation in CI
      timeout: 30000,     // Longer timeout
      retries: 3          // Retry failed validations
    }
  })
};
```

**Handle Network Issues**
```bash
# Add retry logic to CI commands
figma connect validate --retry 3 --timeout 30s
```

## 🔍 Debug Commands

### Diagnostic Commands

```bash
# General health check
figma connect doctor

# Detailed connection info
figma connect info src/components/Button/Button.tsx

# Validate with verbose output
figma connect validate --verbose --debug

# Test authentication
figma connect auth test

# List all connections
figma connect list --status

# Check configuration
figma connect config validate
```

### Debug Environment

```bash
# Enable debug logging
export DEBUG=figma-connect:*
figma connect create --all

# Check version compatibility
figma connect --version
npm list @figma/code-connect

# Test network connectivity
curl -H "Authorization: Bearer $FIGMA_ACCESS_TOKEN" \
  "https://api.figma.com/v1/files/YOUR_FILE_KEY"
```

### Component-Specific Debugging

```typescript
// Add debug logging to connection file
figma.connect(Button, figmaUrl, {
  props: {
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary'
    }, {
      debug: true  // Enable debug output
    })
  },
  
  // Add validation hooks
  onValidate: (props, figmaProps) => {
    console.log('Validating props:', props);
    console.log('Figma props:', figmaProps);
  }
});
```

## 📊 Performance Issues

### Issue 11: Slow Connection Generation

#### Symptoms
```bash
Warning: Connection generation taking longer than expected
Timeout after 30 seconds
```

#### Solutions

**Optimize Include Patterns**
```javascript
// figma.config.js - Use specific patterns
module.exports = {
  include: [
    "src/components/ui/**/*.tsx",     // Specific path
    "!src/**/*.test.tsx",             // Exclude tests
    "!src/**/*.stories.tsx"           // Exclude stories
  ],
  
  // Add performance settings
  performance: {
    maxConcurrency: 5,    // Limit concurrent operations
    timeout: 60000,       // Increase timeout
    cacheEnabled: true    // Enable caching
  }
};
```

**Use Incremental Updates**
```bash
# Only update changed components
figma connect sync --incremental

# Use watch mode for development
figma connect watch --debounce 1000
```

### Issue 12: Large File Performance

#### Symptoms
```bash
Error: File too large to process
Memory usage exceeded limits
```

#### Solutions

**Split Large Files**
```javascript
// figma.config.js - Process files separately
module.exports = {
  figmaFiles: [
    {
      url: "https://www.figma.com/file/ATOMS_KEY/Atoms",
      include: ["src/components/atoms/**/*.tsx"]
    },
    {
      url: "https://www.figma.com/file/MOLECULES_KEY/Molecules", 
      include: ["src/components/molecules/**/*.tsx"]
    }
  ]
};
```

**Optimize Component Selection**
```bash
# Process specific pages only
figma connect sync --pages "Components,Design System"

# Skip unused components
figma connect sync --skip-unused
```

## 🆘 Getting Help

### When to Seek Help

- Configuration issues persist after trying solutions
- Authentication problems with team setup
- Complex component mapping requirements
- Performance issues with large design systems
- Integration problems with existing tooling

### Resources

- **Official Documentation**: [Figma Code Connect Docs](https://www.figma.com/developers/code-connect)
- **Community Forum**: [Figma Community](https://forum.figma.com)
- **GitHub Issues**: [Code Connect Repository](https://github.com/figma/code-connect)
- **Team Support**: Internal design system team

### Information to Include When Reporting Issues

```bash
# Generate diagnostic report
figma connect doctor --report > debug-report.txt

# Include:
# - Error messages (full stack trace)
# - figma.config.js (without sensitive tokens)
# - Component code example
# - Figma component URL
# - Environment details (Node.js version, OS)
# - Steps to reproduce
```

---

> 💡 **Still need help?** Contact the design system team or create an issue in the project repository.
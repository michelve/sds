# Task 03: Bootstrap Build Target Integration

## 🎯 User Story

**As a developer**, I want the Bootstrap SCSS overrides to be automatically generated as part of the standard build process, so that I can easily include them in my Bootstrap projects without manual intervention.

## 📋 Description

Integrate the Bootstrap transformation capability into the existing build system, add it as a new platform target, and ensure seamless generation of Bootstrap overrides alongside existing token outputs.

## 🎨 Technical Requirements

### 1. Build Process Integration

**Modify**: `/packages/design-tokens/package.json`

```json
{
  "scripts": {
    "build": "npm run tokens:build && npm run build:js",
    "tokens:build": "node --env-file=../../.env app.mjs --skip-rest-api",
    "tokens:build:bootstrap": "style-dictionary build --config style-dictionary.config.js --platform bootstrap5",
    "tokens:build:all": "npm run tokens:build && npm run tokens:build:bootstrap",
    "tokens:fetch": "node --env-file=../../.env app.mjs",
    "build:js": "tsc",
    "dev": "npm run build && npm run watch",
    "watch": "npm run tokens:build && npm run build:js -- --watch",
    "watch:bootstrap": "npm run tokens:build:all && npm run build:js -- --watch",
    "type-check": "tsc --noEmit"
  }
}
```

### 2. Root Package.json Integration

**Modify**: `/package.json` (root)

Add Bootstrap-specific scripts:

```json
{
  "scripts": {
    "tokens:build": "turbo run tokens:build",
    "tokens:build:bootstrap": "turbo run tokens:build:bootstrap",
    "tokens:build:all": "turbo run tokens:build:all",
    "bootstrap:generate": "npm run tokens:build:bootstrap",
    "bootstrap:preview": "npm run bootstrap:generate && cat packages/design-tokens/dist/bootstrap/_sds-bootstrap-overrides.scss"
  }
}
```

### 3. Build Output Structure

Ensure proper directory structure is created:

```
packages/design-tokens/dist/
├── css/
│   └── tokens.css              (existing)
├── scss/
│   └── tokens.scss             (existing)
├── js/
│   └── tokens.js               (existing)
├── json/
│   └── tokens.json             (existing)
└── bootstrap/                  (NEW)
    ├── _sds-bootstrap-overrides.scss
    ├── bootstrap-integration-guide.md
    └── usage-examples/
        ├── basic-usage.scss
        └── advanced-customization.scss
```

### 4. Integration Documentation Generator

**Location**: `/packages/design-tokens/src/generators/bootstrap-docs.js`

```javascript
import fs from 'fs';
import path from 'path';

export function generateBootstrapDocs(tokens, outputPath) {
  const integrationGuide = `# SDS → Bootstrap Integration Guide

## Quick Start

1. Import the SDS Bootstrap overrides before importing Bootstrap:

\`\`\`scss
// Import SDS overrides first
@import "@sds/design-tokens/dist/bootstrap/sds-bootstrap-overrides";

// Then import Bootstrap
@import "bootstrap";
\`\`\`

2. Your Bootstrap components now use SDS design tokens!

## Available Overrides

${generateVariableList(tokens)}

## Usage Examples

### Basic Button Styling
\`\`\`html
<button class="btn btn-primary">SDS Primary Button</button>
<button class="btn btn-success">SDS Success Button</button>
\`\`\`

### Custom Spacing
\`\`\`html
<div class="p-3">Uses SDS spacing-3 value</div>
<div class="m-4">Uses SDS spacing-4 value</div>
\`\`\`

### Typography
\`\`\`html
<h1>Uses SDS font family and sizing</h1>
<p class="lead">SDS typography system applied</p>
\`\`\`

## Advanced Customization

You can override individual variables:

\`\`\`scss
// Override specific SDS → Bootstrap mappings
$primary: #custom-color;

// Import SDS overrides
@import "@sds/design-tokens/dist/bootstrap/sds-bootstrap-overrides";

// Import Bootstrap
@import "bootstrap";
\`\`\`
`;

  // Write integration guide
  fs.writeFileSync(
    path.join(outputPath, 'bootstrap-integration-guide.md'),
    integrationGuide
  );
  
  // Generate usage examples
  generateUsageExamples(tokens, outputPath);
}

function generateVariableList(tokens) {
  return tokens.map(token => `- \`${token.name}\`: ${token.value}`).join('\n');
}

function generateUsageExamples(tokens, outputPath) {
  const basicUsage = `// Basic SDS + Bootstrap Integration
@import "@sds/design-tokens/dist/bootstrap/sds-bootstrap-overrides";
@import "bootstrap";

// Your custom styles here
.custom-component {
  background-color: $primary;
  padding: $spacer;
  border-radius: $border-radius;
}`;

  const advancedUsage = `// Advanced SDS + Bootstrap Customization
// 1. Override specific variables if needed
$primary: #custom-brand-color;

// 2. Import SDS overrides
@import "@sds/design-tokens/dist/bootstrap/sds-bootstrap-overrides";

// 3. Override Bootstrap variables if needed
$enable-rounded: true;
$enable-shadows: true;

// 4. Import Bootstrap
@import "bootstrap";

// 5. Your custom components
.branded-card {
  @extend .card;
  border-color: $primary;
  
  .card-header {
    background-color: rgba($primary, 0.1);
    border-bottom-color: $primary;
  }
}`;

  fs.mkdirSync(path.join(outputPath, 'usage-examples'), { recursive: true });
  fs.writeFileSync(path.join(outputPath, 'usage-examples/basic-usage.scss'), basicUsage);
  fs.writeFileSync(path.join(outputPath, 'usage-examples/advanced-customization.scss'), advancedUsage);
}
```

### 5. Build Validation

**Location**: `/packages/design-tokens/src/validators/bootstrap-validator.js`

```javascript
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

export async function validateBootstrapOutput(outputPath) {
  const scssFile = path.join(outputPath, '_sds-bootstrap-overrides.scss');
  
  // Check if file exists
  if (!fs.existsSync(scssFile)) {
    throw new Error('Bootstrap overrides file not generated');
  }
  
  // Validate SCSS syntax
  await validateScssyntax(scssFile);
  
  // Check for required Bootstrap variables
  await validateBootstrapCompatibility(scssFile);
  
  console.log('✅ Bootstrap overrides validated successfully');
}

async function validateScssyntax(filePath) {
  return new Promise((resolve, reject) => {
    // Use sass compiler to validate syntax
    const sass = spawn('sass', ['--check', filePath]);
    
    sass.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`SCSS syntax validation failed for ${filePath}`));
      }
    });
  });
}

async function validateBootstrapCompatibility(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check for required Bootstrap variable patterns
  const requiredPatterns = [
    /\$primary:\s*[^;]+;\s*!default/,
    /\$spacer:\s*[^;]+;\s*!default/,
    /\$font-family-base:\s*[^;]+;\s*!default/
  ];
  
  requiredPatterns.forEach((pattern, index) => {
    if (!pattern.test(content)) {
      throw new Error(`Missing required Bootstrap variable pattern ${index + 1}`);
    }
  });
}
```

## ✅ Acceptance Criteria

### Functional Requirements

- [ ] Bootstrap overrides generated automatically with `npm run build`
- [ ] Separate npm script for Bootstrap-only generation
- [ ] Generated files placed in proper dist directory structure
- [ ] Integration documentation automatically generated
- [ ] Usage examples provided for developers

### Technical Requirements

- [ ] Build process validates generated SCSS syntax
- [ ] Output files follow Bootstrap naming conventions
- [ ] Build fails gracefully if Bootstrap generation fails
- [ ] Existing build process remains unchanged
- [ ] Build performance impact is minimal

### Quality Requirements

- [ ] Generated overrides work with Bootstrap 5.3 build process
- [ ] Clear error messages if build fails
- [ ] Documentation is comprehensive and accurate
- [ ] Examples demonstrate real-world usage patterns

## 🔍 Implementation Details

### Build Process Flow

1. **Token Sync**: Fetch latest tokens from Figma (existing)
2. **Style Dictionary Build**: Generate CSS, SCSS, JS outputs (existing)
3. **Bootstrap Generation**: NEW - Generate Bootstrap overrides
4. **Documentation Generation**: Create integration guides and examples
5. **Validation**: Verify SCSS syntax and Bootstrap compatibility
6. **TypeScript Compilation**: Build TypeScript definitions (existing)

### Error Handling Strategy

```javascript
// Graceful build failure handling
try {
  await generateBootstrapOverrides();
  await validateBootstrapOutput();
  console.log('✅ Bootstrap overrides generated successfully');
} catch (error) {
  console.warn('⚠️  Bootstrap override generation failed:', error.message);
  console.log('Continuing with standard token build...');
  // Don't fail entire build process
}
```

### Performance Optimization

- Generate Bootstrap overrides in parallel with other outputs
- Cache mapping configuration to avoid re-parsing
- Skip Bootstrap generation if no relevant tokens changed

## 🧪 Testing Strategy

### Integration Tests

```javascript
describe('Bootstrap Build Integration', () => {
  test('should generate Bootstrap overrides during build', async () => {
    await runBuild();
    expect(fs.existsSync('dist/bootstrap/_sds-bootstrap-overrides.scss')).toBe(true);
  });
  
  test('should generate valid SCSS syntax', async () => {
    await runBuild();
    await expect(validateScssyntax('dist/bootstrap/_sds-bootstrap-overrides.scss')).resolves.not.toThrow();
  });
  
  test('should include integration documentation', async () => {
    await runBuild();
    expect(fs.existsSync('dist/bootstrap/bootstrap-integration-guide.md')).toBe(true);
  });
});
```

### End-to-End Tests

- Create test Bootstrap project using generated overrides
- Verify Bootstrap components reflect SDS design tokens
- Test build performance impact

## 📝 Expected Output Structure

After successful build:

```
packages/design-tokens/dist/bootstrap/
├── _sds-bootstrap-overrides.scss      # Main override file
├── bootstrap-integration-guide.md     # How-to guide
└── usage-examples/
    ├── basic-usage.scss               # Simple integration
    └── advanced-customization.scss    # Advanced patterns
```

## 🔗 Dependencies

- Task 01 (Bootstrap Mapping Configuration)
- Task 02 (Style Dictionary Extension)
- Sass compiler for validation (dev dependency)
- Existing Style Dictionary build process

## 🚀 Next Steps

After completion, Task 04 will create developer-friendly npm scripts and CLI commands for easier Bootstrap integration workflow.
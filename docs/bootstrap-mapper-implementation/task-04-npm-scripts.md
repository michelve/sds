# Task 04: Developer Experience & NPM Scripts

## 🎯 User Story

**As a developer**, I want simple, intuitive commands to generate and work with Bootstrap overrides, so that I can quickly integrate SDS tokens into my Bootstrap projects without complex configuration.

## 📋 Description

Create a comprehensive developer experience with easy-to-use npm scripts, CLI commands, and workflow tools that make Bootstrap integration seamless and productive.

## 🎨 Technical Requirements

### 1. Enhanced NPM Scripts

**Root Package.json** `/package.json`:

```json
{
  "scripts": {
    "bootstrap:generate": "npm run tokens:build:bootstrap",
    "bootstrap:preview": "npm run bootstrap:generate && cat packages/design-tokens/dist/bootstrap/_sds-bootstrap-overrides.scss",
    "bootstrap:validate": "cd packages/design-tokens && npm run validate:bootstrap",
    "bootstrap:docs": "cd packages/design-tokens && npm run generate:bootstrap-docs",
    "bootstrap:example": "npm run bootstrap:generate && node scripts/bootstrap-example.js",
    "bootstrap:watch": "nodemon --watch packages/design-tokens/tokens.json --exec 'npm run bootstrap:generate'",
    
    "framework:bootstrap": "npm run bootstrap:generate",
    "framework:preview": "npm run bootstrap:preview",
    "framework:list": "echo 'Available frameworks: bootstrap5 (more coming soon!)'",
    
    "help:bootstrap": "node scripts/bootstrap-help.js"
  }
}
```

**Design Tokens Package** `/packages/design-tokens/package.json`:

```json
{
  "scripts": {
    "tokens:build:bootstrap": "style-dictionary build --config style-dictionary.config.js --platform bootstrap5",
    "validate:bootstrap": "node src/validators/bootstrap-validator.js",
    "generate:bootstrap-docs": "node src/generators/bootstrap-docs.js",
    "preview:bootstrap": "node scripts/preview-bootstrap.js",
    "test:bootstrap": "jest --testPathPattern=bootstrap",
    "lint:bootstrap": "sass-lint dist/bootstrap/_sds-bootstrap-overrides.scss"
  }
}
```

### 2. Interactive CLI Helper

**Location**: `/scripts/bootstrap-help.js`

```javascript
#!/usr/bin/env node

import chalk from 'chalk';
import { readFileSync } from 'fs';
import path from 'path';

console.log(chalk.blue.bold('\n🎨 SDS Bootstrap Integration Helper\n'));

console.log(chalk.green('Available Commands:'));
console.log('');

const commands = [
  {
    command: 'npm run bootstrap:generate',
    description: 'Generate Bootstrap SCSS overrides from SDS tokens',
    example: 'Creates dist/bootstrap/_sds-bootstrap-overrides.scss'
  },
  {
    command: 'npm run bootstrap:preview',
    description: 'Generate and display the Bootstrap overrides',
    example: 'Shows the generated SCSS content in terminal'
  },
  {
    command: 'npm run bootstrap:validate',
    description: 'Validate generated Bootstrap overrides',
    example: 'Checks SCSS syntax and Bootstrap compatibility'
  },
  {
    command: 'npm run bootstrap:example',
    description: 'Create a complete Bootstrap integration example',
    example: 'Generates example project structure'
  },
  {
    command: 'npm run bootstrap:watch',
    description: 'Watch for token changes and auto-regenerate',
    example: 'Useful during development'
  }
];

commands.forEach(({ command, description, example }) => {
  console.log(chalk.yellow(`  ${command}`));
  console.log(`    ${description}`);
  console.log(chalk.gray(`    ${example}`));
  console.log('');
});

console.log(chalk.blue('Quick Start:'));
console.log(chalk.white('1. npm run bootstrap:generate'));
console.log(chalk.white('2. Copy dist/bootstrap/_sds-bootstrap-overrides.scss to your project'));
console.log(chalk.white('3. Import before Bootstrap: @import "sds-bootstrap-overrides";'));
console.log(chalk.white('4. Import Bootstrap: @import "bootstrap";'));
console.log('');

console.log(chalk.blue('Documentation:'));
console.log(chalk.white('  View: packages/design-tokens/dist/bootstrap/bootstrap-integration-guide.md'));
console.log(chalk.white('  Examples: packages/design-tokens/dist/bootstrap/usage-examples/'));
console.log('');
```

### 3. Bootstrap Example Generator

**Location**: `/scripts/bootstrap-example.js`

```javascript
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const EXAMPLE_DIR = './bootstrap-example';

async function generateBootstrapExample() {
  console.log(chalk.blue('🚀 Generating Bootstrap + SDS Example Project...\n'));
  
  // Create example directory structure
  const dirs = [
    EXAMPLE_DIR,
    `${EXAMPLE_DIR}/scss`,
    `${EXAMPLE_DIR}/css`,
    `${EXAMPLE_DIR}/js`
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
  
  // Generate example SCSS
  const mainScss = `// SDS + Bootstrap Integration Example
// Import SDS Bootstrap overrides first
@import "../packages/design-tokens/dist/bootstrap/sds-bootstrap-overrides";

// Import Bootstrap
@import "bootstrap";

// Custom styles using SDS tokens via Bootstrap variables
.hero-section {
  background-color: $primary;
  color: white;
  padding: $spacer * 4;
  text-align: center;
  border-radius: $border-radius-lg;
}

.custom-button {
  @extend .btn, .btn-primary;
  font-family: $font-family-base;
  font-weight: 600;
  padding: $spacer * 0.75 $spacer * 2;
}

.feature-card {
  @extend .card;
  border-color: $primary;
  margin-bottom: $spacer * 2;
  
  .card-header {
    background-color: rgba($primary, 0.1);
    border-bottom-color: $primary;
  }
}`;

  // Generate example HTML
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SDS + Bootstrap Example</title>
    <link href="css/main.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div class="hero-section mb-5">
            <h1>SDS + Bootstrap Integration</h1>
            <p class="lead">Bootstrap components with SDS design tokens</p>
            <button class="custom-button">Get Started</button>
        </div>
        
        <div class="row">
            <div class="col-md-4">
                <div class="feature-card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Design Consistency</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">All Bootstrap components use SDS design tokens automatically.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="feature-card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Easy Integration</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Just import SDS overrides before Bootstrap - no code changes needed.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="feature-card">
                    <div class="card-header">
                        <h5 class="card-title mb-0">Rapid Development</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Use familiar Bootstrap classes with SDS visual consistency.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="alert alert-primary" role="alert">
            <h6>Color System</h6>
            <div class="d-flex gap-2 mt-2">
                <span class="badge bg-primary">Primary</span>
                <span class="badge bg-success">Success</span>
                <span class="badge bg-danger">Danger</span>
                <span class="badge bg-warning text-dark">Warning</span>
            </div>
        </div>
        
        <div class="mb-4">
            <h6>Buttons</h6>
            <button class="btn btn-primary me-2">Primary</button>
            <button class="btn btn-success me-2">Success</button>
            <button class="btn btn-danger me-2">Danger</button>
            <button class="btn btn-warning me-2">Warning</button>
            <button class="btn btn-outline-primary">Outline</button>
        </div>
        
        <div>
            <h6>Spacing & Typography</h6>
            <p class="p-3 bg-light rounded">This paragraph uses SDS spacing (p-3) and typography system.</p>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`;

  // Generate package.json
  const packageJson = `{
  "name": "sds-bootstrap-example",
  "version": "1.0.0",
  "description": "Example project using SDS design tokens with Bootstrap",
  "scripts": {
    "build": "sass scss/main.scss css/main.css",
    "watch": "sass --watch scss/main.scss css/main.css",
    "serve": "python -m http.server 8080"
  },
  "devDependencies": {
    "sass": "^1.69.0"
  }
}`;

  // Generate README
  const readme = `# SDS + Bootstrap Example

This example demonstrates how to integrate SDS design tokens with Bootstrap 5.3.

## Quick Start

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Build CSS:
   \`\`\`bash
   npm run build
   \`\`\`

3. Serve locally:
   \`\`\`bash
   npm run serve
   \`\`\`

4. Open http://localhost:8080

## How it Works

1. **SDS Overrides**: \`scss/main.scss\` imports SDS Bootstrap overrides first
2. **Bootstrap Import**: Then imports Bootstrap normally  
3. **Custom Styles**: Adds custom components using Bootstrap variables (which now contain SDS values)

## File Structure

- \`scss/main.scss\` - Main stylesheet with SDS + Bootstrap integration
- \`index.html\` - Example HTML using Bootstrap classes
- \`css/main.css\` - Compiled CSS (generated)

## Key Features Demonstrated

- ✅ SDS colors applied to Bootstrap components
- ✅ SDS spacing system via Bootstrap utilities  
- ✅ SDS typography in Bootstrap text styles
- ✅ Custom components extending Bootstrap with SDS values
- ✅ No JavaScript changes needed - pure CSS integration`;

  // Write files
  fs.writeFileSync(`${EXAMPLE_DIR}/scss/main.scss`, mainScss);
  fs.writeFileSync(`${EXAMPLE_DIR}/index.html`, indexHtml);
  fs.writeFileSync(`${EXAMPLE_DIR}/package.json`, packageJson);
  fs.writeFileSync(`${EXAMPLE_DIR}/README.md`, readme);
  
  console.log(chalk.green('✅ Example project generated successfully!'));
  console.log(chalk.white(`📁 Location: ${EXAMPLE_DIR}/`));
  console.log('');
  console.log(chalk.blue('Next steps:'));
  console.log(chalk.white(`1. cd ${EXAMPLE_DIR}`));
  console.log(chalk.white('2. npm install'));
  console.log(chalk.white('3. npm run build'));
  console.log(chalk.white('4. npm run serve'));
  console.log('');
}

generateBootstrapExample().catch(console.error);
```

### 4. Watch Mode Implementation

**Location**: `/scripts/bootstrap-watch.js`

```javascript
#!/usr/bin/env node

import chokidar from 'chokidar';
import { spawn } from 'child_process';
import chalk from 'chalk';
import path from 'path';

const TOKENS_PATH = './packages/design-tokens/tokens.json';
const MAPPING_PATH = './packages/design-tokens/src/mappings/bootstrap5.mapping.js';

console.log(chalk.blue('👀 Watching for SDS token changes...\n'));

let isBuilding = false;

const watcher = chokidar.watch([TOKENS_PATH, MAPPING_PATH], {
  persistent: true
});

watcher.on('change', async (filePath) => {
  if (isBuilding) {
    console.log(chalk.yellow('⏳ Build in progress, skipping...'));
    return;
  }
  
  console.log(chalk.green(`📝 Changed: ${path.basename(filePath)}`));
  
  isBuilding = true;
  
  try {
    await regenerateBootstrap();
    console.log(chalk.green('✅ Bootstrap overrides updated successfully\n'));
  } catch (error) {
    console.log(chalk.red('❌ Bootstrap generation failed:'), error.message);
  } finally {
    isBuilding = false;
  }
});

function regenerateBootstrap() {
  return new Promise((resolve, reject) => {
    console.log(chalk.blue('🔄 Regenerating Bootstrap overrides...'));
    
    const child = spawn('npm', ['run', 'bootstrap:generate'], {
      stdio: 'pipe'
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Build failed with code ${code}`));
      }
    });
  });
}

console.log(chalk.gray('Watching:'));
console.log(chalk.gray(`  - ${TOKENS_PATH}`));
console.log(chalk.gray(`  - ${MAPPING_PATH}`));
console.log(chalk.gray('Press Ctrl+C to stop\n'));
```

### 5. Preview Tool

**Location**: `/packages/design-tokens/scripts/preview-bootstrap.js`

```javascript
#!/usr/bin/env node

import fs from 'fs';
import chalk from 'chalk';
import path from 'path';

const BOOTSTRAP_OUTPUT = './dist/bootstrap/_sds-bootstrap-overrides.scss';

function previewBootstrap() {
  if (!fs.existsSync(BOOTSTRAP_OUTPUT)) {
    console.log(chalk.red('❌ Bootstrap overrides not found. Run npm run bootstrap:generate first.'));
    return;
  }
  
  const content = fs.readFileSync(BOOTSTRAP_OUTPUT, 'utf8');
  const lines = content.split('\n');
  
  console.log(chalk.blue.bold('\n📋 SDS Bootstrap Overrides Preview\n'));
  
  // Count variables by category
  const stats = {
    colors: 0,
    spacing: 0,
    typography: 0,
    borders: 0,
    other: 0
  };
  
  const variables = [];
  
  lines.forEach(line => {
    const match = line.match(/^\$([^:]+):\s*([^;]+);/);
    if (match) {
      const [, name, value] = match;
      variables.push({ name: `$${name}`, value: value.trim() });
      
      // Categorize
      if (name.includes('primary') || name.includes('success') || name.includes('danger')) {
        stats.colors++;
      } else if (name.includes('spacer') || name.includes('gutter')) {
        stats.spacing++;
      } else if (name.includes('font') || name.includes('line-height')) {
        stats.typography++;
      } else if (name.includes('border') || name.includes('radius')) {
        stats.borders++;
      } else {
        stats.other++;
      }
    }
  });
  
  // Display statistics
  console.log(chalk.green('📊 Variable Summary:'));
  Object.entries(stats).forEach(([category, count]) => {
    if (count > 0) {
      console.log(`  ${category}: ${chalk.yellow(count)} variables`);
    }
  });
  console.log(`  ${chalk.bold('Total')}: ${chalk.yellow(variables.length)} variables\n`);
  
  // Display variables by category
  ['colors', 'spacing', 'typography', 'borders', 'other'].forEach(category => {
    const categoryVars = variables.filter(v => {
      const name = v.name.toLowerCase();
      switch (category) {
        case 'colors': return name.includes('primary') || name.includes('success') || name.includes('danger');
        case 'spacing': return name.includes('spacer') || name.includes('gutter');
        case 'typography': return name.includes('font') || name.includes('line-height');
        case 'borders': return name.includes('border') || name.includes('radius');
        default: return true;
      }
    });
    
    if (categoryVars.length > 0) {
      console.log(chalk.blue(`${category.charAt(0).toUpperCase() + category.slice(1)}:`));
      categoryVars.forEach(({ name, value }) => {
        console.log(`  ${chalk.yellow(name.padEnd(25))} ${value}`);
      });
      console.log('');
    }
  });
  
  console.log(chalk.gray(`📁 Full file: ${BOOTSTRAP_OUTPUT}`));
  console.log(chalk.gray('📚 Integration guide: ./dist/bootstrap/bootstrap-integration-guide.md\n'));
}

previewBootstrap();
```

## ✅ Acceptance Criteria

### Functional Requirements

- [ ] Intuitive npm scripts for all Bootstrap operations
- [ ] Interactive help system with examples
- [ ] Complete example project generator
- [ ] Watch mode for development workflow
- [ ] Preview tool for generated overrides

### Developer Experience Requirements

- [ ] Clear, descriptive command names
- [ ] Helpful error messages with guidance
- [ ] Progress indicators for long operations  
- [ ] Comprehensive documentation and examples
- [ ] Easy copy-paste integration instructions

### Quality Requirements

- [ ] Scripts work on macOS, Windows, and Linux
- [ ] Minimal dependencies for CLI tools
- [ ] Fast execution times
- [ ] Graceful handling of edge cases

## 🔍 Implementation Details

### Command Design Philosophy

- **Predictable**: Consistent naming pattern (`bootstrap:action`)
- **Discoverable**: Help commands and clear descriptions
- **Composable**: Scripts can be combined and piped
- **Safe**: Preview before applying changes

### Error Handling Strategy

```javascript
// Graceful error handling with helpful messages
try {
  await generateBootstrap();
} catch (error) {
  console.log(chalk.red('❌ Bootstrap generation failed'));
  console.log(chalk.yellow('💡 Try running: npm run tokens:build first'));
  console.log(chalk.gray(`Error details: ${error.message}`));
  process.exit(1);
}
```

## 🧪 Testing Strategy

### CLI Testing

```javascript
describe('Bootstrap CLI Commands', () => {
  test('bootstrap:generate should create overrides file', async () => {
    await execCommand('npm run bootstrap:generate');
    expect(fs.existsSync('packages/design-tokens/dist/bootstrap/_sds-bootstrap-overrides.scss')).toBe(true);
  });
  
  test('bootstrap:preview should display variable summary', async () => {
    const output = await execCommand('npm run bootstrap:preview');
    expect(output).toContain('Variable Summary');
    expect(output).toContain('colors:');
  });
});
```

### User Experience Testing

- Time how long it takes new users to integrate Bootstrap
- Validate generated examples work in real Bootstrap projects
- Test error scenarios and message clarity

## 🔗 Dependencies

- Tasks 01-03 must be completed
- Node.js CLI libraries: chalk, chokidar
- Sass for validation (dev dependency)

## 🚀 Next Steps

After completion, Task 05 will implement comprehensive testing and validation to ensure production readiness.
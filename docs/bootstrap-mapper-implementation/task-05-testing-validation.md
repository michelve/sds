# Task 05: Testing & Validation

## 🎯 User Story

**As a maintainer**, I want comprehensive tests and validation to ensure the Bootstrap mapper works reliably across different scenarios, so that developers can trust the generated overrides in production environments.

## 📋 Description

Implement a complete testing suite covering unit tests, integration tests, validation tools, and end-to-end scenarios to ensure the Bootstrap mapper system is production-ready and maintainable.

## 🎨 Technical Requirements

### 1. Test Suite Structure

**Directory Structure**:
```
packages/design-tokens/
├── __tests__/
│   ├── unit/
│   │   ├── bootstrap-mapping.test.js
│   │   ├── bootstrap-transforms.test.js
│   │   └── bootstrap-formats.test.js
│   ├── integration/
│   │   ├── bootstrap-build.test.js
│   │   ├── scss-validation.test.js
│   │   └── bootstrap-compatibility.test.js
│   └── e2e/
│       ├── bootstrap-example.test.js
│       └── real-world-integration.test.js
├── test-fixtures/
│   ├── sample-tokens.json
│   ├── bootstrap-test-project/
│   └── expected-outputs/
└── jest.config.js
```

### 2. Unit Tests

**Location**: `/packages/design-tokens/__tests__/unit/bootstrap-mapping.test.js`

```javascript
import { bootstrap5Mapping } from '../../src/mappings/bootstrap5.mapping.js';
import { analyzeTokenMapping, validateMapping } from '../../src/utils/token-analyzer.js';

describe('Bootstrap Mapping Configuration', () => {
  test('should have valid mapping structure', () => {
    expect(bootstrap5Mapping).toHaveProperty('framework', 'bootstrap');
    expect(bootstrap5Mapping).toHaveProperty('version', '5.3.x');
    expect(bootstrap5Mapping).toHaveProperty('mappings');
    expect(bootstrap5Mapping.mappings).toHaveProperty('colors');
    expect(bootstrap5Mapping.mappings).toHaveProperty('spacing');
  });

  test('should map core color tokens correctly', () => {
    const colorMappings = bootstrap5Mapping.mappings.colors;
    expect(colorMappings).toHaveProperty('color.primary.default', '$primary');
    expect(colorMappings).toHaveProperty('color.success.default', '$success');
    expect(colorMappings).toHaveProperty('color.danger.default', '$danger');
    expect(colorMappings).toHaveProperty('color.warning.default', '$warning');
  });

  test('should handle spacer calculations', () => {
    const spacerMultipliers = bootstrap5Mapping.calculations.spacerMultipliers;
    expect(spacerMultipliers).toHaveProperty('size.spacing.1', 0.25);
    expect(spacerMultipliers).toHaveProperty('size.spacing.4', 1);
    expect(spacerMultipliers).toHaveProperty('size.spacing.6', 1.5);
  });

  test('should validate mapping configuration', () => {
    expect(() => validateMapping(bootstrap5Mapping)).not.toThrow();
  });

  test('should handle missing mappings gracefully', () => {
    const mockTokens = [
      { path: ['unknown', 'token'] },
      { path: ['color', 'primary', 'default'] }
    ];
    
    const analysis = analyzeTokenMapping(mockTokens, bootstrap5Mapping);
    expect(analysis.unmappedTokens).toHaveLength(1);
    expect(analysis.mappedTokens).toHaveLength(1);
  });
});
```

**Location**: `/packages/design-tokens/__tests__/unit/bootstrap-transforms.test.js`

```javascript
import StyleDictionary from 'style-dictionary';
import '../../src/transforms/bootstrap.js';

describe('Bootstrap Transforms', () => {
  let sd;

  beforeEach(() => {
    sd = StyleDictionary.extend({
      tokens: {
        color: {
          primary: {
            default: {
              $type: 'color',
              $value: '#0066cc',
              path: ['color', 'primary', 'default']
            }
          }
        },
        size: {
          spacing: {
            '2': {
              $type: 'dimension',
              $value: '0.5rem',
              path: ['size', 'spacing', '2']
            }
          }
        }
      }
    });
  });

  test('name/bootstrap5 transform should convert SDS names to Bootstrap variables', () => {
    const transform = sd.transform['name/bootstrap5'];
    
    const primaryToken = {
      path: ['color', 'primary', 'default'],
      name: 'color-primary-default'
    };
    
    expect(transform.transformer(primaryToken)).toBe('$primary');
  });

  test('value/bootstrap5 transform should handle spacing calculations', () => {
    const transform = sd.transform['value/bootstrap5'];
    
    const spacingToken = {
      path: ['size', 'spacing', '2'],
      $value: '0.5rem'
    };
    
    expect(transform.transformer(spacingToken)).toBe('$spacer * 0.5');
  });

  test('should handle unmapped tokens with fallback', () => {
    const transform = sd.transform['name/bootstrap5'];
    
    const unknownToken = {
      path: ['unknown', 'token'],
      name: 'unknown-token'
    };
    
    expect(transform.transformer(unknownToken)).toBe('$sds-unknown-token');
  });

  test('should convert px values to rem', () => {
    const transform = sd.transform['value/bootstrap5'];
    
    const pxToken = {
      path: ['size', 'border', 'width'],
      $value: '16px'
    };
    
    expect(transform.transformer(pxToken)).toBe('1rem');
  });
});
```

### 3. Integration Tests

**Location**: `/packages/design-tokens/__tests__/integration/bootstrap-build.test.js`

```javascript
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import StyleDictionary from 'style-dictionary';

describe('Bootstrap Build Integration', () => {
  const outputDir = './test-output';
  const expectedFile = path.join(outputDir, 'bootstrap', '_sds-bootstrap-overrides.scss');

  beforeEach(() => {
    // Clean up test output
    if (fs.existsSync(outputDir)) {
      fs.rmSync(outputDir, { recursive: true });
    }
  });

  afterEach(() => {
    // Clean up after tests
    if (fs.existsSync(outputDir)) {
      fs.rmSync(outputDir, { recursive: true });
    }
  });

  test('should generate Bootstrap overrides during build', async () => {
    // Run the bootstrap build
    execSync('npm run tokens:build:bootstrap', { 
      cwd: process.cwd(),
      stdio: 'pipe'
    });

    expect(fs.existsSync('dist/bootstrap/_sds-bootstrap-overrides.scss')).toBe(true);
  });

  test('should generate valid SCSS syntax', async () => {
    execSync('npm run tokens:build:bootstrap', { stdio: 'pipe' });
    
    const scssContent = fs.readFileSync('dist/bootstrap/_sds-bootstrap-overrides.scss', 'utf8');
    
    // Check for basic SCSS patterns
    expect(scssContent).toMatch(/\$[a-zA-Z-]+:\s*[^;]+;\s*!default;/);
    expect(scssContent).not.toContain('undefined');
    expect(scssContent).not.toContain('null');
  });

  test('should include required Bootstrap variables', async () => {
    execSync('npm run tokens:build:bootstrap', { stdio: 'pipe' });
    
    const scssContent = fs.readFileSync('dist/bootstrap/_sds-bootstrap-overrides.scss', 'utf8');
    
    // Check for essential Bootstrap variables
    expect(scssContent).toMatch(/\$primary:\s*[^;]+;\s*!default/);
    expect(scssContent).toMatch(/\$spacer:\s*[^;]+;\s*!default/);
    expect(scssContent).toMatch(/\$font-family-base:\s*[^;]+;\s*!default/);
  });

  test('should generate integration documentation', async () => {
    execSync('npm run bootstrap:docs', { stdio: 'pipe' });
    
    expect(fs.existsSync('dist/bootstrap/bootstrap-integration-guide.md')).toBe(true);
    expect(fs.existsSync('dist/bootstrap/usage-examples/basic-usage.scss')).toBe(true);
  });

  test('should validate generated SCSS passes sass compilation', async () => {
    execSync('npm run tokens:build:bootstrap', { stdio: 'pipe' });
    
    // Try to compile the generated SCSS
    expect(() => {
      execSync('sass --check dist/bootstrap/_sds-bootstrap-overrides.scss', { 
        stdio: 'pipe' 
      });
    }).not.toThrow();
  });
});
```

### 4. SCSS Validation Tests

**Location**: `/packages/design-tokens/__tests__/integration/scss-validation.test.js`

```javascript
import sass from 'sass';
import fs from 'fs';

describe('SCSS Validation', () => {
  let generatedScss;

  beforeAll(() => {
    // Generate fresh SCSS for testing
    execSync('npm run tokens:build:bootstrap', { stdio: 'pipe' });
    generatedScss = fs.readFileSync('dist/bootstrap/_sds-bootstrap-overrides.scss', 'utf8');
  });

  test('should compile without errors using Dart Sass', () => {
    expect(() => {
      sass.compileString(generatedScss);
    }).not.toThrow();
  });

  test('should not contain invalid SCSS syntax', () => {
    // Check for common SCSS syntax issues
    expect(generatedScss).not.toMatch(/\$[^:]*;/); // Variables without values
    expect(generatedScss).not.toMatch(/:\s*;/); // Empty values
    expect(generatedScss).not.toMatch(/\${[^}]*}[^;]*$/m); // Unclosed interpolations
  });

  test('should use proper !default flags', () => {
    const variableLines = generatedScss.split('\n').filter(line => 
      line.trim().startsWith('$') && line.includes(':')
    );
    
    variableLines.forEach(line => {
      expect(line).toMatch(/!default\s*;/);
    });
  });

  test('should have consistent spacing and formatting', () => {
    const variableLines = generatedScss.split('\n').filter(line => 
      line.trim().startsWith('$')
    );
    
    variableLines.forEach(line => {
      // Check format: $variable: value !default;
      expect(line).toMatch(/^\$[a-zA-Z0-9-]+:\s+[^;]+\s+!default;/);
    });
  });

  test('should compile successfully with Bootstrap 5.3', async () => {
    // Create test SCSS that imports our overrides with Bootstrap
    const testScss = `
      ${generatedScss}
      
      // Mock Bootstrap imports for testing
      $enable-grid-classes: true !default;
      $enable-utilities: true !default;
      
      // Test that our variables work in Bootstrap context
      .test-component {
        background-color: $primary;
        padding: $spacer;
        font-family: $font-family-base;
        border-radius: $border-radius;
      }
    `;
    
    expect(() => {
      sass.compileString(testScss);
    }).not.toThrow();
  });
});
```

### 5. End-to-End Tests

**Location**: `/packages/design-tokens/__tests__/e2e/bootstrap-example.test.js`

```javascript
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

describe('Bootstrap Example E2E', () => {
  const exampleDir = './test-bootstrap-example';
  let browser, page;

  beforeAll(async () => {
    // Generate example project
    execSync('npm run bootstrap:example', { stdio: 'pipe' });
    
    // Rename to avoid conflicts
    if (fs.existsSync(exampleDir)) {
      fs.rmSync(exampleDir, { recursive: true });
    }
    fs.renameSync('./bootstrap-example', exampleDir);
    
    // Build the example
    execSync('npm install', { cwd: exampleDir, stdio: 'pipe' });
    execSync('npm run build', { cwd: exampleDir, stdio: 'pipe' });
    
    // Start browser for testing
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    if (browser) {
      await browser.close();
    }
    
    // Clean up
    if (fs.existsSync(exampleDir)) {
      fs.rmSync(exampleDir, { recursive: true });
    }
  });

  test('should generate working example project', () => {
    expect(fs.existsSync(path.join(exampleDir, 'scss/main.scss'))).toBe(true);
    expect(fs.existsSync(path.join(exampleDir, 'css/main.css'))).toBe(true);
    expect(fs.existsSync(path.join(exampleDir, 'index.html'))).toBe(true);
  });

  test('should compile SCSS successfully', () => {
    const compiledCss = fs.readFileSync(path.join(exampleDir, 'css/main.css'), 'utf8');
    expect(compiledCss).toContain('.btn-primary');
    expect(compiledCss).toContain('.hero-section');
  });

  test('should render HTML without errors', async () => {
    const htmlPath = path.resolve(exampleDir, 'index.html');
    await page.goto(`file://${htmlPath}`);
    
    // Check that page loads without console errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });

  test('should apply SDS colors to Bootstrap components', async () => {
    const htmlPath = path.resolve(exampleDir, 'index.html');
    await page.goto(`file://${htmlPath}`);
    
    // Check that primary button has SDS primary color
    const primaryButton = await page.$('.btn-primary');
    const buttonColor = await primaryButton.evaluate(el => 
      getComputedStyle(el).backgroundColor
    );
    
    // Should not be default Bootstrap blue
    expect(buttonColor).not.toBe('rgb(13, 110, 253)'); // Default Bootstrap primary
  });

  test('should use SDS spacing system', async () => {
    const htmlPath = path.resolve(exampleDir, 'index.html');
    await page.goto(`file://${htmlPath}`);
    
    const heroSection = await page.$('.hero-section');
    const padding = await heroSection.evaluate(el => 
      getComputedStyle(el).padding
    );
    
    // Should have padding applied (exact value depends on SDS tokens)
    expect(padding).not.toBe('0px');
  });
});
```

### 6. Performance & Load Testing

**Location**: `/packages/design-tokens/__tests__/performance/bootstrap-performance.test.js`

```javascript
import { performance } from 'perf_hooks';
import { execSync } from 'child_process';

describe('Bootstrap Build Performance', () => {
  test('should generate Bootstrap overrides within reasonable time', () => {
    const start = performance.now();
    
    execSync('npm run tokens:build:bootstrap', { stdio: 'pipe' });
    
    const end = performance.now();
    const duration = end - start;
    
    // Should complete within 10 seconds
    expect(duration).toBeLessThan(10000);
  });

  test('should not significantly impact existing build time', () => {
    // Measure baseline build time
    const baselineStart = performance.now();
    execSync('npm run tokens:build', { stdio: 'pipe' });
    const baselineEnd = performance.now();
    const baselineDuration = baselineEnd - baselineStart;
    
    // Measure full build time with Bootstrap
    const fullStart = performance.now();
    execSync('npm run tokens:build:all', { stdio: 'pipe' });
    const fullEnd = performance.now();
    const fullDuration = fullEnd - fullStart;
    
    // Bootstrap build should add less than 50% to build time
    const overhead = fullDuration - baselineDuration;
    expect(overhead).toBeLessThan(baselineDuration * 0.5);
  });

  test('should handle large token sets efficiently', () => {
    // This would test with a large number of mock tokens
    const mockTokenCount = 1000;
    // Implementation would create mock token set and test performance
  });
});
```

### 7. Jest Configuration

**Location**: `/packages/design-tokens/jest.config.js`

```javascript
export default {
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/__tests__'],
  testMatch: [
    '**/__tests__/**/*.test.js',
  ],
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/setup.js'],
  testTimeout: 30000, // Allow time for builds
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
```

## ✅ Acceptance Criteria

### Test Coverage Requirements

- [ ] Unit test coverage > 90% for Bootstrap-specific code
- [ ] Integration tests validate end-to-end Bootstrap workflow  
- [ ] E2E tests verify real-world Bootstrap integration
- [ ] Performance tests ensure reasonable build times
- [ ] All tests pass in CI/CD pipeline

### Quality Requirements

- [ ] Tests are deterministic and reliable
- [ ] Clear test names and descriptions
- [ ] Proper test isolation and cleanup
- [ ] Fast test execution (< 2 minutes total)
- [ ] Comprehensive error scenario coverage

### Production Readiness

- [ ] Generated Bootstrap overrides work with Bootstrap 5.3.x
- [ ] No breaking changes to existing functionality
- [ ] Proper error handling and user feedback
- [ ] Documentation matches implementation
- [ ] Security considerations addressed

## 🧪 Testing Strategy

### Test Pyramid Approach

1. **Unit Tests (70%)**: Fast, isolated component testing
2. **Integration Tests (20%)**: Build process and file generation
3. **E2E Tests (10%)**: Real-world usage scenarios

### Continuous Integration

```yaml
# .github/workflows/bootstrap-mapper.yml
name: Bootstrap Mapper Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run test:bootstrap
      - run: npm run bootstrap:validate
      - run: npm run bootstrap:example
      - name: Test example project
        run: |
          cd bootstrap-example
          npm install
          npm run build
```

## 📝 Quality Gates

### Pre-commit Validation

- All tests pass
- SCSS syntax validation
- Code coverage thresholds met
- Documentation updated

### Release Criteria

- 100% test pass rate
- Real Bootstrap project integration verified
- Performance benchmarks met
- Security review completed

## 🔗 Dependencies

- All previous tasks (01-04) completed
- Jest testing framework
- Sass compiler for SCSS validation
- Puppeteer for E2E testing
- Mock Bootstrap project for integration testing

## 🚀 Next Steps

After successful testing validation, the Bootstrap mapper will be ready for:

1. **Production Release**: Merge to main branch
2. **Documentation Publishing**: Update public docs
3. **Community Feedback**: Gather user feedback and iterate
4. **Framework Extension**: Apply learnings to Tailwind, Material UI mappers
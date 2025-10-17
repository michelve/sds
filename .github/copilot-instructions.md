# Simple Design System (SDS) - AI Coding Guide

## Project Architecture

This is a **Turborepo monorepo** containing a multi-framework design system with tight Figma integration. The system is built around:

- **Design tokens** generated from Figma Variables → CSS/JS tokens via Style Dictionary
- **React + Angular packages** with shared design tokens
- **Figma Code Connect** integration for design-code synchronization
- **Automated tooling** for icons, tokens, and GitHub PR workflows

## Key Directories & Purpose

- `packages/ui-react/` - React component library using React Aria Components
- `packages/ui-angular/` - Angular component library
- `packages/design-tokens/` - Style Dictionary config that generates tokens from Figma
- `packages/docs-site/` - Storybook documentation site
- `tools/` & `scripts/` - Node.js automation scripts for Figma sync
- `samples/figma/` - Example workflows for Figma MCP integration

## Essential Commands

```bash
# Development (runs all packages in parallel via Turbo)
npm run dev                    # Start all dev servers
npm run app:dev               # React app only (port 8000)
npm run docs:dev              # Storybook only (port 6006)

# Angular Development (library package - no dev server)
cd packages/ui-angular && npm run build:watch  # Watch mode for Angular library

# Design Token Workflows
npm run tokens:build          # Generate tokens from Style Dictionary
npm run script:tokens        # Fetch latest tokens from Figma API
npm run script:tokens:rest    # Full token sync with Figma REST API

# Icon Management
npm run script:icons          # Generate React icon components from Figma
npm run script:icons:rest     # Full icon sync with Figma REST API

# Figma Code Connect
npm run figma:connect         # Sync component mappings to Figma
npm run figma:connect:publish # Publish Code Connect docs

# GitHub Integration
npm run github:pr:create      # Auto-create PRs with token changes
npm run figma:pr             # Create PR with Figma-sourced updates
```

## Critical Development Patterns

### 1. Design Tokens Architecture

- **Source**: Figma Variables → `tools/tokens/app.mjs` → Style Dictionary → CSS/JS
- **Never hardcode** design values - always use tokens from `@sds/design-tokens`
- Token collections: `color`, `color_primitives`, `size`, `typography_primitives`
- CSS custom properties follow pattern: `--sds-[category]-[token-name]`

### 2. Component Structure (React)

```
packages/ui-react/src/
├── primitives/        # Basic UI components (Button, Input, etc.)
├── compositions/      # Complex composed components
├── icons/            # Auto-generated from Figma
├── figma/           # Code Connect mapping files
└── hooks/           # Shared React hooks
```

### 3. Figma Integration Workflows

- **Icons**: Scripts auto-generate React components from Figma icon variants
- **Tokens**: Style Dictionary transforms Figma Variables to multi-platform tokens
- **Code Connect**: Manual `.figma.tsx` files map components to Figma designs
- **File Key**: Environment variable `FIGMA_FILE_KEY` points to source Figma file

### 4. Environment Setup

Required `.env` variables:

```bash
FIGMA_ACCESS_TOKEN=    # Figma API token with Code Connect + Variables scopes
FIGMA_FILE_KEY=        # File ID from Figma URL
```

## Component Development Guidelines

### Adding New Components

1. Create in `packages/ui-react/src/primitives/` or `compositions/`
2. Use design tokens - import from `@sds/design-tokens`
3. Create `.figma.tsx` file for Code Connect mapping
4. Use React Aria Components for accessibility
5. Export from package `index.ts`

### Token Usage Example

```tsx
// ❌ Don't hardcode values
const button = { backgroundColor: "#0066cc", padding: "12px 24px" };

// ✅ Use design tokens
const button = {
  backgroundColor: "var(--sds-color-primary-500)",
  padding: "var(--sds-size-spacing-3) var(--sds-size-spacing-6)",
};
```

### Code Connect Integration

- Map Figma components using `figma.connect()` in `.figma.tsx` files
- Use `documentUrlSubstitutions` in `figma.config.json` for file-agnostic URLs
- Pattern: `<FIGMA_[PAGE_NAME]_[COMPONENT_NAME]>` for substitution keys

## Build & Deployment

- **Turbo** orchestrates all builds with dependency caching
- **TypeScript** compilation for all packages
- **Vite** for React package bundling
- **Storybook** for documentation deployment
- **Chromatic** for visual regression testing

## Common Pitfalls

1. **Token Sync**: Always run `npm run tokens:build` after Figma Variable changes
2. **Icon Updates**: Re-run `npm run script:icons` when Figma icons change
3. **Package Dependencies**: Update `package.json` in relevant packages, not root
4. **Environment Variables**: Scripts require `.env` file in project root
5. **Code Connect**: Changes to `.figma.tsx` files require `figma:connect:publish`

## Integration Points

- **React Aria Components**: Accessibility-first component foundation
- **Style Dictionary**: Multi-platform token transformation
- **Figma REST API**: Automated design asset synchronization
- **GitHub API**: Automated PR creation for design updates
- **Turborepo**: Monorepo task orchestration and caching

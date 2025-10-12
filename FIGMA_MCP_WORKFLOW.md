# Simple Design System (SDS) - Comprehensive Integration Guide

## 🏗️ Architecture Overview

### Repository Structure Analysis

```text
sds/
├── 🎨 Design System Core
│   ├── src/ui/                    # Component library
│   │   ├── primitives/            # Atomic components (Button, Input, etc.)
│   │   ├── compositions/          # Complex components (Cards, Forms, etc.)
│   │   ├── layout/               # Layout components (Flex, Section, Grid)
│   │   ├── hooks/                # UI-specific hooks
│   │   ├── icons/                # Icon components
│   │   └── utils/                # Utility functions
│   └── src/theme.css             # Generated design tokens (CSS variables)
│
├── 📊 Data Management
│   └── src/data/                 # Data layer
│       ├── providers/            # Context providers (Auth, Pricing, Products)
│       ├── hooks/               # Data hooks (useAuth, usePricing, etc.)
│       ├── services/            # API services
│       └── types/               # TypeScript definitions
│
├── 🎯 Examples & Demos
│   ├── src/examples/            # Complete page examples
│   ├── src/stories/             # Storybook documentation
│   └── src/App.tsx              # Demo application
│
├── 🔌 Figma Integration
│   ├── src/figma/               # Code Connect definitions
│   ├── scripts/tokens/          # Design token sync
│   ├── scripts/icons/           # Icon sync
│   └── figma.config.json        # Figma Code Connect configuration
│
└── 🛠️ Development Tools
    ├── .vscode/tasks.json       # VS Code automation
    ├── .storybook/              # Storybook configuration
    └── vite.config.ts           # Build & alias configuration
```

## 🎨 Component Architecture

### 1. **Primitives** (`src/ui/primitives/`)

Single-purpose, reusable atomic components:

- ✅ **Available**: Button, Input, Text, Avatar, Navigation, etc.
- 🔗 **Figma Connected**: Each has corresponding `*.figma.tsx` file
- 📱 **Responsive**: Built with React Aria for accessibility
- 🎯 **Import**: `import { Button, Input } from "primitives"`

### 2. **Compositions** (`src/ui/compositions/`)

Complex, pre-built component patterns:

- ✅ **Available**: Cards, Forms, Headers, Footers, Sections
- 🏗️ **Composed**: Built from primitives + layout components
- 🎯 **Import**: `import { Header, Footer } from "compositions"`

### 3. **Layout** (`src/ui/layout/`)

Structural components for positioning:

- ✅ **Available**: Flex, Section, Grid
- 📐 **Responsive**: Mobile-first design patterns
- 🎯 **Import**: `import { Flex, Section } from "layout"`

### 4. **Data Layer** (`src/data/`)

State management and business logic:

- 🔄 **Providers**: AllProviders, AuthProvider, PricingProvider, ProductsProvider
- 🪝 **Hooks**: useAuth, usePricing, useProducts, useMediaQuery
- 🎯 **Import**: `import { useAuth, AllProviders } from "data"`

## 🔗 Figma Integration Workflow

### Design Token System

1. **Source**: Figma Variables → `scripts/tokens/tokens.json` (W3C format)
2. **Processing**: `npm run script:tokens` → generates `src/theme.css`
3. **Usage**: CSS custom properties like `var(--sds-color-brand-800)`

### Code Connect Integration

1. **Mapping**: `src/figma/*.figma.tsx` maps Figma components to React components
2. **Configuration**: `figma.config.json` defines paths and URL substitutions
3. **Publishing**: `npm run figma:connect:publish` syncs to Figma

## 🚀 Figma MCP Official Workflow

### Prerequisites

- ✅ Figma Desktop App installed
- ✅ MCP client (Claude, Cursor, etc.) with Figma MCP server
- ✅ Design system components already built and Code Connected

### Workflow Steps

#### 1. **Design Creation Phase**

```bash
# In Figma:
1. Create/update design using SDS components
2. Ensure components use SDS variables (colors, spacing, typography)
3. Name layers semantically (not "Frame 123")
4. Use Auto Layout for responsive behavior
```

#### 2. **MCP Analysis Phase**

```bash
# In MCP client (e.g., Claude):
"Generate code for my Figma selection using SDS components"

# MCP Tools Used:
- get_code → Generates React code
- get_variable_defs → Extracts design tokens
- get_code_connect_map → Maps to existing components
- get_screenshot → Visual reference
```

#### 3. **Component Reuse Detection**

The MCP will identify:

- ✅ **Existing SDS Components**: Button, Input, Text, etc.
- ✅ **Layout Patterns**: Flex, Section arrangements
- ✅ **Design Tokens**: Colors, spacing, typography variables
- ⚠️ **Custom Elements**: New patterns not yet in SDS

#### 4. **Code Generation**

MCP generates code like:

```tsx
import { Button, Input, Text } from "primitives";
import { Flex, Section } from "layout";
import { useMediaQuery } from "hooks";

export function LoginForm() {
  const { isMobile } = useMediaQuery();
  
  return (
    <Section padding={isMobile ? "600" : "1600"}>
      <Flex direction="column" gap="400" alignPrimary="center">
        <Text variant="heading">Welcome Back</Text>
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Button variant="primary">Sign In</Button>
      </Flex>
    </Section>
  );
}
```

#### 5. **Integration into Project**

```bash
# 1. Create new page/component file
touch src/examples/LoginPage.tsx

# 2. Paste generated code
# 3. Import into main app
# 4. Test with Storybook
npm run storybook

# 5. Build and preview
npm run app:build
npm run app:preview
```

## 📋 Detailed Instructions

### A. Setting Up Figma MCP Integration

#### Step 1: Configure MCP Client

```bash
# In your MCP client configuration:
{
  "mcpServers": {
    "figma": {
      "command": "figma-mcp-server",
      "args": ["--local"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "your-token-if-using-remote"
      }
    }
  }
}
```

#### Step 2: Prepare Figma File

1. **Use SDS Components**: Ensure design uses components from SDS library
2. **Apply Variables**: Use SDS color/spacing/typography variables
3. **Semantic Naming**: Replace "Frame 123" with meaningful names like "LoginForm"
4. **Auto Layout**: Set up responsive behavior with Auto Layout
5. **Component Variants**: Use proper component states (hover, disabled, etc.)

#### Step 3: Generate Code with MCP

```bash
# Basic code generation:
"Generate React code for my Figma selection"

# SDS-specific generation:
"Generate code for my Figma selection using SDS components from primitives, layout, and compositions"

# With specific framework:
"Generate this design using SDS components with TypeScript and responsive behavior"
```

### B. Working with Existing SDS Components

#### Import Patterns

```tsx
// ✅ Correct imports using aliases
import { Button, Input, Text } from "primitives";
import { Header, Footer, Cards } from "compositions";
import { Flex, Section } from "layout";
import { useAuth, usePricing } from "data";
import { IconHome, IconUser } from "icons";

// ❌ Wrong - don't import from React Aria directly
import { Button } from "react-aria-components"; // DON'T DO THIS
```

#### Component Usage Examples

```tsx
// Primitive usage
<Button 
  variant="primary" 
  size="medium"
  onPress={() => {}}
>
  Click me
</Button>

// Layout with responsive behavior
const { isMobile } = useMediaQuery();

<Section padding={isMobile ? "600" : "1600"}>
  <Flex 
    direction="column" 
    gap="400" 
    alignPrimary="center"
    container
  >
    {/* Content */}
  </Flex>
</Section>

// Data integration
const { user, login } = useAuth();
const { plans } = usePricing();
```

### C. Creating New Pages

#### Page Structure Template

```tsx
// src/examples/NewPage.tsx
import { useMediaQuery } from "hooks";
import { Flex, Section } from "layout";
import { Button, Text } from "primitives";
import { Header, Footer } from "compositions";
import { useAuth } from "data";

export function NewPage() {
  const { isMobile } = useMediaQuery();
  const { user } = useAuth();
  
  return (
    <>
      <Header />
      <Section padding={isMobile ? "600" : "1600"}>
        <Flex direction="column" gap="1200" container>
          {/* Page content using SDS components */}
        </Flex>
      </Section>
      <Footer />
    </>
  );
}
```

#### Integration into App

```tsx
// src/App.tsx
import { AllProviders } from "data";
import { NewPage } from "./examples/NewPage";

function App() {
  return (
    <AllProviders>
      <NewPage />
    </AllProviders>
  );
}
```

### D. Design Token Workflow

#### When Colors/Tokens Change in Figma

```bash
# Option 1: Using Figma Plugin (current setup)
1. Run SDS Figma Plugin in Figma
2. Copy first textarea content
3. Paste into scripts/tokens/tokens.json
4. Run: npm run script:tokens
5. Verify: src/theme.css updated

# Option 2: Using API (enterprise)
1. Set FIGMA_ACCESS_TOKEN in .env
2. Run: npm run script:tokens:rest
3. Auto-updates tokens.json and theme.css
```

#### Verifying Token Updates

```bash
# Check if new tokens are generated
grep "brand-800" src/theme.css
# Should show: --sds-color-brand-800: #your-new-color;

# Test in Storybook
npm run storybook
# Navigate to Button stories to see color changes
```

### E. Code Connect Management

#### Publishing Component Mappings

```bash
# Initialize Code Connect
npm run figma:connect:init

# Create new mappings
npm run figma:connect:create

# Publish to Figma
npm run figma:connect:publish
```

#### Adding New Component Mapping

```tsx
// src/figma/primitives/NewComponent.figma.tsx
import figma from "@figma/code-connect";
import { NewComponent } from "primitives";

figma.connect(NewComponent, "<FIGMA_COMPONENT_URL>", {
  props: {
    variant: figma.enum("Variant", {
      Primary: "primary",
      Secondary: "secondary",
    }),
    size: figma.enum("Size", {
      Small: "small",
      Medium: "medium",
      Large: "large",
    }),
    label: figma.string("Label"),
  },
  example: (props) => (
    <NewComponent {...props} />
  ),
});
```

### F. Quality Assurance Checklist

#### Before Using MCP-Generated Code

- [ ] All imports use SDS aliases (`primitives`, `layout`, etc.)
- [ ] No hardcoded colors/spacing (uses CSS variables)
- [ ] Responsive behavior with `useMediaQuery` hook
- [ ] Semantic component names and props
- [ ] Accessibility considered (labels, roles, etc.)

#### After Integration

- [ ] Components render correctly in Storybook
- [ ] Responsive behavior works on mobile/desktop
- [ ] Design tokens are applied correctly
- [ ] No console errors or warnings
- [ ] Code follows TypeScript patterns

## 🎯 Best Practices for MCP Workflow

### 1. **Prompt Engineering**

```bash
# ✅ Good prompts:
"Generate this design using SDS primitives and layout components with responsive behavior"
"Convert this Figma component to React using existing SDS design tokens"
"Create this page layout using SDS compositions and proper data hooks"

# ❌ Poor prompts:
"Make this into code"
"Generate a component"
```

### 2. **Component Discovery**

Before generating new components, check:

- [ ] `src/ui/primitives/` - atomic components
- [ ] `src/ui/compositions/` - complex patterns
- [ ] `src/ui/layout/` - layout solutions
- [ ] `src/examples/` - page patterns

### 3. **Iterative Improvement**

1. **Generate**: Use MCP to create initial code
2. **Review**: Check against SDS patterns
3. **Refine**: Adjust to use proper components/tokens
4. **Test**: Verify in Storybook and app
5. **Document**: Add to examples or stories

## 🚨 Common Pitfalls & Solutions

### Problem: MCP generates non-SDS components

**Solution**: Use specific prompts mentioning SDS components and provide context about available primitives.

### Problem: Hardcoded values in generated code

**Solution**: Replace with CSS variables and add responsive behavior using `useMediaQuery`.

### Problem: Components don't match Figma exactly

**Solution**: Update design tokens in Figma or extend SDS components with new variants.

### Problem: Code Connect mappings not working

**Solution**: Verify `figma.config.json` paths and publish latest mappings with `npm run figma:connect:publish`.

## 🎉 Success Metrics

### Efficient Workflow Achieved When

- ✅ MCP generates 80%+ correct SDS component usage
- ✅ Minimal manual adjustment needed for generated code
- ✅ Design tokens automatically applied from Figma
- ✅ New pages integrate seamlessly into existing app structure
- ✅ Responsive behavior works out-of-the-box
- ✅ Storybook documentation stays current

This comprehensive integration creates a seamless design-to-code workflow where Figma designs translate directly into production-ready React components using the established SDS architecture.
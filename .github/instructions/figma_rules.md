---
description: Comprehensive Figma MCP integration rules for SDS design system
applyTo: "**"
---

# Simple Design System (SDS) - Figma MCP Integration Rules

## 🏗️ Design System Architecture

### 1. Token Definitions

**Location**: Design tokens are defined in multiple places:

- **Source**: `scripts/tokens/tokens.json` - W3C format tokens from Figma Variables
- **Generated**: `src/theme.css` - CSS custom properties automatically generated
- **Namespace**: All tokens use `com.figma.sds` extension namespace

**Token Structure**:

```json
{
  "@color_primitives": {
    "brand": {
      "800": {
        "$type": "color",
        "$value": "#e75715",
        "$extensions": { "com.figma.sds": { "figmaId": "VariableID:3919:36621" } }
      }
    }
  }
}
```

**CSS Output Format**:

```css
:root {
  --sds-color-brand-800: #e75715;
  --sds-size-space-400: 1rem;
  --sds-typography-scale-03: 1rem;
  --sds-font-body-base: normal var(--sds-typography-body-font-weight-regular) var(--sds-typography-body-size-medium) var(--sds-typography-body-font-family);
}
```

**Token Transformation Process**:

1. **Figma Variables** → `scripts/tokens/app.mjs` → `scripts/tokens/tokens.json` (W3C format)
2. **Token Processing**: Convert rem units, apply semantic naming, handle light/dark modes
3. **CSS Generation**: Create CSS custom properties with `--sds-` prefix
4. **Commands**: `npm run script:tokens` (plugin) or `npm run script:tokens:rest` (API)

### 2. Component Library Architecture

**Location**: `src/ui/` with three-tier structure:

**Primitives** (`src/ui/primitives/`):

- **Purpose**: Atomic, single-purpose components
- **Count**: 24+ components (Button, Input, Text, Avatar, Navigation, etc.)
- **Pattern**: Each component has: `Component.tsx`, `component.css`, `Component.figma.tsx`
- **Foundation**: Built on React Aria Components for accessibility
- **Example**:

```tsx
// src/ui/primitives/Button/Button.tsx
import { Button as RACButton } from "react-aria-components";
import "./button.css";

export const Button = React.forwardRef(function Button(
  { variant = "primary", size = "medium", ...props }: ButtonProps,
  ref
) {
  return (
    <RACButton
      className={clsx("button", `button-size-${size}`, `button-variant-${variant}`)}
      ref={ref}
      {...props}
    />
  );
});
```

**Compositions** (`src/ui/compositions/`):

- **Purpose**: Complex, pre-built component patterns
- **Available**: Cards, Forms, Headers, Footers, Sections
- **Pattern**: Built from primitives + layout components
- **Example**: `<Header />`, `<Footer />`, `<FormBox />`

**Layout** (`src/ui/layout/`):

- **Purpose**: Structural positioning components
- **Components**: Flex, Section, Grid
- **Responsive**: Mobile-first design with breakpoint variables
- **Example**:

```tsx
<Section padding="1600">
  <Flex direction="column" gap="400" alignPrimary="center" container>
    {children}
  </Flex>
</Section>
```

**Code Connect Integration**:

- **Mapping Files**: `src/figma/*.figma.tsx` mirror ui/ structure
- **Configuration**: `figma.config.json` defines import paths and URL substitutions
- **Example**:

```tsx
// src/figma/primitives/Button.figma.tsx
import figma from "@figma/code-connect";
import { Button } from "primitives";

figma.connect(Button, "<FIGMA_BUTTONS_BUTTON>", {
  props: {
    variant: figma.enum("Variant", { Primary: "primary", Secondary: "secondary" }),
    size: figma.enum("Size", { Small: "small", Medium: "medium" })
  }
});
```

### 3. Frameworks & Libraries

**Core Framework**:

- **React 18+** with TypeScript
- **Vite** as build system and dev server (port 8000)
- **React Aria Components** for accessibility foundation
- **clsx** for conditional class composition

**Styling System**:

- **CSS Strategy**: Component-scoped CSS with BEM-like naming
- **No CSS-in-JS**: Plain CSS files with design token CSS variables
- **PostCSS**: For CSS processing and optimization
- **Example Pattern**:

```css
.button {
  background: var(--button-background-color);
  color: var(--button-color);
  padding: var(--button-padding-y) var(--button-padding-x);
  border-radius: var(--sds-size-radius-200);
}
.button-variant-primary {
  --button-background-color: var(--sds-color-background-brand-default);
  --button-color: var(--sds-color-text-brand-on-brand);
}
```

**Documentation & Testing**:

- **Storybook**: Component documentation at `localhost:6006`
- **Stories Location**: `src/stories/` mirroring ui/ structure
- **Commands**: `npm run storybook`, `npm run storybook:build`

**Import Aliases** (configured in `vite.config.ts`):

```tsx
import { Button, Input } from "primitives";
import { Header, Footer } from "compositions";
import { Flex, Section } from "layout";
import { useAuth, AllProviders } from "data";
import { IconHome } from "icons";
import { placeholder } from "images";
```

### 4. Asset Management

**Icons** (`src/ui/icons/`):

- **Count**: 200+ generated React components
- **Source**: Figma icon components via `scripts/icons/app.mjs`
- **Pattern**: Individual TSX files (`IconHome.tsx`, `IconUser.tsx`, etc.)
- **Usage**: Import as React components with consistent `IconProps`
- **Generation**: `npm run script:icons` (plugin) or `npm run script:icons:rest` (API)
- **Example**:

```tsx
// Generated icon component
export const IconHome = (props: IconProps) => (
  <Icon {...props}>
    <path d="..." stroke="var(--svg-stroke-color)" strokeWidth="1.6"/>
  </Icon>
);

// Usage in components
import { IconHome } from "icons";
<Button><IconHome />Home</Button>
```

**Images** (`src/ui/images/`):

- **Current**: Minimal - only placeholder.svg
- **Pattern**: SVG assets exported from Figma as needed
- **Import**: Direct imports in components
- **Optimization**: Handled by Vite during build

**Asset Commands**:

- **Icons**: `npm run script:icons` (uses plugin), `npm run script:icons:rest` (uses API)
- **Dev Resources**: `npm run script:dev-resources` (generates Storybook links)

### 5. Styling Approach

**CSS Methodology**:

- **Component-scoped CSS** with semantic class names
- **BEM-like naming**: `.button`, `.button-variant-primary`, `.button-size-medium`
- **CSS Custom Properties**: All styling uses design tokens
- **No hardcoded values**: Everything references `--sds-*` variables

**Global Styles**:

- **Reset**: `src/reset.css` - Minimal reset for form elements
- **Theme**: `src/theme.css` - Generated design tokens (never edit manually)
- **Responsive**: `src/responsive.css` - Breakpoint variables and grid ratios
- **Icons**: `src/icons.css` - Icon-specific styles

**Responsive Design**:

- **Strategy**: Mobile-first with CSS custom properties for breakpoints
- **Breakpoints**: 600px (tablet), 1024px (desktop)
- **Grid Ratios**: Responsive column ratios for layout components
- **Example**:

```css
/* Mobile default */
:root {
  --sds-responsive-ratio-column-third-major: 3;
  --sds-responsive-ratio-column-third-minor: 3;
}
/* Desktop */
@media (min-width: 1024px) {
  :root {
    --sds-responsive-ratio-column-third-major: 2;
    --sds-responsive-ratio-column-third-minor: 1;
  }
}
```

**JavaScript Responsive Handling**:

```tsx
import { useMediaQuery } from "hooks";

const { isMobile } = useMediaQuery();
<Section padding={isMobile ? "600" : "1600"}>
```

### 6. Project Structure

```text
sds/
├── 🎨 Component Library
│   └── src/ui/
│       ├── primitives/          # 24+ atomic components
│       ├── compositions/        # 5 complex patterns
│       ├── layout/             # 3 layout components (Flex, Section, Grid)
│       ├── hooks/              # useMediaQuery + others
│       ├── icons/              # 200+ generated icon components
│       ├── images/             # SVG assets
│       └── utils/              # Utility functions
│
├── 📊 Data Management
│   └── src/data/
│       ├── providers/          # AllProviders, AuthProvider, PricingProvider, ProductsProvider
│       ├── hooks/              # useAuth, usePricing, useProducts
│       ├── services/           # API services
│       └── types/              # TypeScript definitions
│
├── 🎯 Examples & Documentation
│   ├── src/examples/           # 7 complete page examples
│   ├── src/stories/            # Storybook stories
│   ├── .storybook/             # Storybook configuration
│   └── src/App.tsx             # Demo application
│
├── 🔌 Figma Integration
│   ├── src/figma/              # Code Connect definitions
│   ├── scripts/tokens/         # Design token generation
│   ├── scripts/icons/          # Icon generation
│   ├── scripts/dev-resources/  # Development utilities
│   └── figma.config.json       # Figma Code Connect configuration
│
├── 🎨 Generated Styles
│   ├── src/theme.css           # Auto-generated design tokens
│   ├── src/reset.css           # CSS reset
│   ├── src/responsive.css      # Responsive utilities
│   └── src/icons.css           # Icon styles
│
└── 🛠️ Build & Config
    ├── vite.config.ts          # Build configuration + import aliases
    ├── package.json            # Scripts and dependencies
    ├── tsconfig.json           # TypeScript configuration
    └── .vscode/tasks.json      # VS Code automation
```

## 🚀 Figma MCP Integration Workflow

### Required MCP Flow (Never Skip Steps)

1. **Extract Design Data**:

```bash
# Get structured component/layout data
get_code

# If response is too large, get overview first:
get_metadata
# Then re-run get_code for specific nodes
```

1. **Visual Reference**:

```bash
# Always get visual reference for accuracy
get_screenshot
```

1. **Design Token Extraction**:

```bash
# Extract Figma variables used in selection
get_variable_defs
```

1. **Component Mapping**:

```bash
# Check existing Code Connect mappings
get_code_connect_map
```

### Component Translation Rules

#### CRITICAL: Always Use SDS Components

✅ **Correct Pattern**:

```tsx
// Import from SDS aliases
import { Button, Input, Text } from "primitives";
import { Flex, Section } from "layout";
import { Header } from "compositions";
import { useMediaQuery } from "hooks";

// Use SDS components with design tokens
export function LoginForm() {
  const { isMobile } = useMediaQuery();
  
  return (
    <Section padding={isMobile ? "600" : "1600"}>
      <Flex direction="column" gap="400" alignPrimary="center">
        <Text variant="heading">Welcome Back</Text>
        <Input placeholder="Email" />
        <Button variant="primary">Sign In</Button>
      </Flex>
    </Section>
  );
}
```

❌ **Never Do This**:

```tsx
// DON'T import from React Aria directly
import { Button } from "react-aria-components";

// DON'T use hardcoded styles
<div style={{ color: "#111", padding: "16px" }}>

// DON'T use Tailwind classes
<div className="bg-blue-500 p-4">

// DON'T create custom layout CSS
<div className="grid grid-cols-3 gap-4">
```

### Design Token Usage Rules

**Always Use CSS Variables**:

```css
/* ✅ Correct */
.component {
  color: var(--sds-color-text-default-default);
  background: var(--sds-color-background-brand-default);
  padding: var(--sds-size-space-400);
  font: var(--sds-font-body-base);
}

/* ❌ Never hardcode */
.component {
  color: #111111;
  background: #e75715;
  padding: 16px;
  font-size: 16px;
}
```

**Token Categories**:

- **Colors**: `--sds-color-{semantic}-{role}-{state}`
- **Spacing**: `--sds-size-space-{scale}` (0, 100, 200, 400, 600, 800, 1200, 1600, 2400, 4000)
- **Typography**: `--sds-font-{role}` or `--sds-typography-{property}`
- **Sizes**: `--sds-size-{type}-{scale}`
- **Effects**: `--sds-effects-{type}-{name}`

### Layout System Rules

**Use SDS Layout Components**:

```tsx
// ✅ Responsive layout with SDS
<Section padding="1600" variant="subtle">
  <Flex direction="column" gap="400" container alignPrimary="center">
    <Flex direction="row" gap="200" type="third">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Flex>
  </Flex>
</Section>

// ✅ Grid layout when needed
<Grid columns="repeat(3, 1fr)" gap="400" container>
  <GridItem>Content</GridItem>
</Grid>
```

### Responsive Implementation

**Use useMediaQuery Hook**:

```tsx
import { useMediaQuery } from "hooks";

function ResponsiveComponent() {
  const { isMobile } = useMediaQuery();
  
  return (
    <Section padding={isMobile ? "600" : "1600"}>
      <Flex 
        direction={isMobile ? "column" : "row"}
        gap={isMobile ? "400" : "800"}
      >
        {content}
      </Flex>
    </Section>
  );
}
```

### File Organization Rules

**New Components** (if needed):

```text
src/ui/primitives/NewComponent/
├── NewComponent.tsx      # Main component
├── newComponent.css      # Styles with design tokens
└── index.ts             # Export
```

**New Pages/Examples**:

```text
src/examples/
├── NewPage.tsx          # Page implementation
└── index.ts             # Export for App.tsx
```

**Figma Integration**:

```text
src/figma/primitives/
└── NewComponent.figma.tsx  # Code Connect mapping
```

### Quality Assurance Checklist

**Before Implementation**:

- [ ] Extracted design data with `get_code`
- [ ] Captured visual reference with `get_screenshot`
- [ ] Identified existing SDS components to reuse
- [ ] Checked for design token mappings

**During Implementation**:

- [ ] Using SDS import aliases (`primitives`, `layout`, etc.)
- [ ] All styles use CSS variables (`--sds-*`)
- [ ] Responsive behavior with `useMediaQuery`
- [ ] Semantic component structure
- [ ] No hardcoded colors, spacing, or typography

**After Implementation**:

- [ ] Component renders in Storybook correctly
- [ ] Responsive behavior works on mobile/desktop  
- [ ] Design matches Figma exactly
- [ ] No console errors or warnings
- [ ] Code follows TypeScript patterns

### Integration Commands

**Token Sync**:

```bash
# After Figma variable changes
npm run script:tokens        # Using plugin data
npm run script:tokens:rest   # Using Figma API
```

**Icon Sync**:

```bash
# After Figma icon changes  
npm run script:icons         # Using plugin data
npm run script:icons:rest    # Using Figma API
```

**Code Connect**:

```bash
# Publish component mappings to Figma
npm run figma:connect:publish
```

**Development**:

```bash
npm run app:dev              # Start dev server (localhost:8000)
npm run storybook            # Start Storybook (localhost:6006)
```

### Error Prevention

**Common MCP Translation Mistakes**:

1. **Wrong Imports**: Using React Aria directly instead of SDS aliases
2. **Hardcoded Values**: Not using design tokens for colors/spacing
3. **Missing Responsive**: Not implementing mobile-first responsive behavior
4. **Layout Reinvention**: Creating custom CSS instead of using Flex/Section
5. **Token Misuse**: Using primitive tokens instead of semantic tokens

**Solution Pattern**:

1. **Map MCP output** to existing SDS components first
2. **Replace hardcoded values** with appropriate design tokens
3. **Add responsive behavior** using useMediaQuery hook
4. **Use layout components** for all positioning
5. **Test in Storybook** before considering complete

This comprehensive ruleset ensures that Figma MCP integration produces clean, maintainable code that follows SDS architecture patterns and design token system.

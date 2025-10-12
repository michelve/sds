# How to Use TalkToFigma

## ⚠️ Important: MCP Server Selection

When you have multiple Figma MCP servers configured (like both the official Figma MCP and TalkToFigma), you need to be explicit in your prompts to ensure the correct server is used.

### Prompt Prefix Options

#### Option 1: Use "@TalkToFigma" prefix

```bash
# Explicitly mention TalkToFigma
@TalkToFigma get my Figma selection

# Or use "using TalkToFigma"
generate React component from my Figma selection using TalkToFigma
```

#### Option 2: Use "local" prefix (since TalkToFigma is local-only)

```bash
# Specify local MCP server
use local Figma MCP to get my selection

# Or mention local socket
get my Figma selection from local socket
```

## 🚀 Essential First Step: Join Channel

**CRITICAL**: Before using any TalkToFigma features, you must join the communication channel:

```bash
@TalkToFigma join channel
```

> ⚠️ **Required Setup**: This establishes the connection between VS Code and your Figma desktop app via the plugin.

## 🛠️ Available MCP Tools

TalkToFigma provides **6 core MCP tools** for Figma integration:

| Tool | Purpose | Required Channel | Example Usage |
|------|---------|------------------|---------------|
| `get_document_info` | Get current document info | ✅ Yes | "What's the current document?" |
| `get_selection` | Get selected elements | ✅ Yes | "Get my Figma selection" |
| `join_channel` | Join communication channel | ❌ No | "Join Figma channel" |
| `set_selection` | Set selection by ID | ✅ Yes | "Select element 123:456" |
| `send_message` | Send messages to Figma | ✅ Yes | "Send message to Figma" |
| `get_page` | Get current page info | ✅ Yes | "What page am I on?" |

## 🔄 Basic Workflow

### 1. **Join Channel (Required First Step)**

```bash
@TalkToFigma join channel
```

**Expected Response:**

- Connection status confirmation
- Channel ID or communication established

### 2. **Get Document Context**

```bash
@TalkToFigma get current document information
```

**Response Includes:**

- Document name and ID
- Available pages
- Current selection
- File metadata

### 3. **Work with Selections**

```bash
# Get current selection
@TalkToFigma get my current selection

# Set selection to specific element
@TalkToFigma select element with ID "123:456"
```

> ⚠️ **Note**: Official Figma MCP requires authentication and works with URLs, while TalkToFigma works with your current selection in the desktop app.

## 🎯 Basic Workflow

1. **Open Figma** with your design file
2. **Select** the element you want to extract
3. **Use prompts** in VS Code to generate code (with TalkToFigma prefix)
4. **Customize** the output as needed

## 🗣️ Available Prompts

### Code Generation

#### Basic Code Extraction
```bash
# Generate React component from selection
TalkToFigma: get my Figma selection

# Generate with specific framework
TalkToFigma: generate my Figma selection in Vue
TalkToFigma: generate my Figma selection in plain HTML + CSS
TalkToFigma: generate my Figma selection in iOS
```

#### Component Integration
```bash
# Use existing components
TalkToFigma: generate my Figma selection using components from src/components/ui

# Combine with styling framework
TalkToFigma: generate my Figma selection using components from src/ui and style with Tailwind
```

### Design Variables

#### Extract Design Tokens
```bash
# Get all variables used
TalkToFigma: get the variables used in my Figma selection

# Focus on specific types
TalkToFigma: what color and spacing variables are used in my Figma selection?

# Get names and values
TalkToFigma: list the variable names and their values used in my Figma selection
```

### Information Gathering

#### Selection Info
```bash
# Get current selection details
what is currently selected in Figma?

# Get node information
get information about my Figma selection

# Get document structure
show me the Figma document structure
```

#### Component Mapping
```bash
# Find code connections
get code connect mapping for my selection

# List local components
show me available Figma components
```

## 🛠️ Advanced Usage

### Multi-Element Selection

```bash
# Work with multiple elements
generate code for all selected Figma elements

# Create component library
export all components from this Figma page
```

### Custom Styling

```bash
# Generate with custom CSS framework
generate my Figma selection using Styled Components

# Generate with specific design system
generate my Figma selection using Material-UI components

# Generate with CSS modules
generate my Figma selection with CSS modules
```

### Design System Integration

```bash
# Create design system rules
create design system rules for this project

# Generate with design tokens
generate my Figma selection using design tokens from Figma variables

# Export style guide
create style guide from Figma styles and variables
```

## 🎨 Working with Design Elements

### Buttons and Interactive Elements

```bash
# Generate button component
generate button component from my Figma selection

# Include hover states
generate my Figma selection with all interaction states

# Generate with accessibility attributes
generate accessible component from my Figma selection
```

### Layout Components

```bash
# Generate responsive layout
generate responsive component from my Figma selection

# Generate with CSS Grid
generate my Figma selection using CSS Grid layout

# Generate with Flexbox
generate my Figma selection using Flexbox
```

### Forms and Inputs

```bash
# Generate form component
generate form component from my Figma selection

# Include validation
generate form with validation from my Figma selection

# Generate with form library
generate my Figma selection using React Hook Form
```

## 📱 Framework-Specific Prompts

### React

```bash
# Generate React component
generate React component from my Figma selection

# Generate with TypeScript
generate TypeScript React component from my Figma selection

# Generate with hooks
generate React component with useState and useEffect from my Figma selection
```

### Vue

```bash
# Generate Vue component
generate Vue 3 component from my Figma selection

# Generate with Composition API
generate Vue component using Composition API from my Figma selection
```

### Native Development

```bash
# Generate React Native
generate React Native component from my Figma selection

# Generate SwiftUI
generate SwiftUI view from my Figma selection

# Generate Flutter
generate Flutter widget from my Figma selection
```

## 🔧 Customization Options

### Output Formatting

```bash
# Generate with specific naming convention
generate my Figma selection using kebab-case for CSS classes

# Generate with BEM methodology
generate my Figma selection using BEM CSS naming

# Generate with specific file structure
generate my Figma selection as separate component files
```

### Code Quality

```bash
# Generate with ESLint compliance
generate ESLint-compliant component from my Figma selection

# Generate with accessibility
generate WCAG-compliant component from my Figma selection

# Generate with performance optimization
generate optimized component from my Figma selection
```

## 📋 Best Practices

### Before Generating Code

1. **Clean up Figma layers** - Use descriptive names
2. **Organize components** - Group related elements
3. **Set proper constraints** - For responsive behavior
4. **Use Figma variables** - For consistent design tokens

### Prompt Optimization

1. **Be specific** - Include framework and styling preferences
2. **Use component libraries** - Reference existing components
3. **Specify requirements** - Mention accessibility, responsiveness
4. **Test iteratively** - Start simple, then add complexity

### Code Review

1. **Check responsiveness** - Verify mobile compatibility
2. **Validate accessibility** - Test with screen readers
3. **Optimize performance** - Remove unnecessary code
4. **Maintain consistency** - Follow project conventions

## 🐛 Troubleshooting Usage

### Common Issues

| Problem | Solution |
|---------|----------|
| **"No selection found"** | Ensure element is selected in Figma |
| **"Request timeout"** | Check Figma plugin is running |
| **"Code generation failed"** | Try simpler prompt or smaller selection |
| **"Variables not found"** | Ensure Figma variables are published |

### Debug Steps

1. **Verify connection**:
   ```bash
   # Check if Figma is responding
   get current Figma document info
   ```

2. **Test selection**:
   ```bash
   # Confirm selection is active
   what is selected in Figma?
   ```

3. **Simplify request**:
   ```bash
   # Start with basic extraction
   get my Figma selection
   ```

## 💡 Pro Tips

- **Use layer names** - Figma layer names become component props
- **Set up components** - Figma components map to React components
- **Use auto-layout** - Enables better responsive code generation
- **Apply variables** - Figma variables become CSS custom properties
- **Test frequently** - Generate code early and often during design

---

> 💡 **Next Step**: See practical examples in [Demo](./demo.md)
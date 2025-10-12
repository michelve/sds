---
description: Instructions for using the Official Figma MCP Server
applyTo: "**"
---

# Official Figma MCP Server Instructions

## Overview

The Official Figma MCP (Model Context Protocol) server enables AI agents to read and extract context from Figma designs, facilitating seamless design-to-code workflows. Unlike the community version that focuses on bidirectional communication and design modification, the official Figma MCP server specializes in extracting design context and generating production-ready code.

**Key Capabilities:**

- **Code Generation**: Convert Figma designs to React, Vue, HTML/CSS, iOS, and other frameworks
- **Design Token Extraction**: Extract variables, colors, spacing, and typography
- **Component Mapping**: Connect Figma components to real codebase components via Code Connect
- **Make Integration**: Fetch prototype context from Make projects
- **Design System Rules**: Create rules for consistent code generation

## Prerequisites

### Required Software

- **Figma Desktop App**: Required for local MCP server
- **AI Agent with MCP Support**: Claude, Cursor, or other MCP-compatible clients
- **Node.js**: For running the MCP server
- **Code Connect** (optional): For component mapping and reuse

### Account Requirements

- **Figma Account**: Professional or higher for advanced features
- **File Access**: Edit or view permissions for target Figma files

## Installation Methods

### Method A: Local Server (Recommended)

The local server connects directly to your Figma desktop app for real-time access.

```bash
# 1. Install via npm
npm install -g @figma/mcp-server

# 2. Configure MCP client
# Add to your MCP configuration file (e.g., ~/.cursor/mcp.json):
{
  "mcpServers": {
    "figma": {
      "command": "figma-mcp-server",
      "args": ["--local"]
    }
  }
}

# 3. Start Figma Desktop App
# The MCP server will connect automatically when Figma is running
```

### Method B: Remote Server

Access Figma files via URLs without requiring the desktop app.

```bash
# 1. Configure MCP with remote access
{
  "mcpServers": {
    "figma": {
      "command": "figma-mcp-server",
      "args": ["--remote"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "your-figma-access-token"
      }
    }
  }
}

# 2. Get Figma Access Token
# Visit: https://figma.com/developers/api (access-tokens section)
# Generate a personal access token with appropriate permissions
```

## Available MCP Tools

### Core Tools

#### `get_code`

**Purpose**: Generate code from your Figma selection
**Default Output**: React + Tailwind CSS
**Customization**: Can be modified through prompts

**Usage Examples**:

```bash
# Basic code generation
"Generate code for my Figma selection"

# Framework-specific
"Generate my Figma selection in Vue"
"Generate my Figma selection in plain HTML + CSS"
"Generate my Figma selection in iOS SwiftUI"

# Using existing components
"Generate my Figma selection using components from src/components/ui"
"Generate my Figma selection using components from src/ui and style with Tailwind"
```

#### `get_variable_defs` (Local Only)

**Purpose**: Extract design tokens and variables from your selection
**Returns**: Colors, spacing, typography variables and their values

**Usage Examples**:

```bash
# List all tokens
"Get the variables used in my Figma selection"

# Focus on specific types
"What color and spacing variables are used in my Figma selection?"

# Get names and values
"List the variable names and their values used in my Figma selection"
```

#### `get_code_connect_map` (Local Only)

**Purpose**: Retrieve mapping between Figma components and codebase components
**Returns**: Object mapping Figma node IDs to code component locations

**Usage Examples**:

```bash
# Get component mappings
"Show me the Code Connect mappings for this selection"
"What code components are connected to these Figma components?"
```

#### `get_screenshot`

**Purpose**: Capture visual representation of your selection
**Use Case**: Preserve layout fidelity in generated code
**Recommendation**: Keep enabled unless concerned about token limits

#### `get_metadata`

**Purpose**: Get sparse XML representation with basic properties
**Returns**: Layer IDs, names, types, positions, and sizes
**Use Case**: Large designs where `get_code` produces excessive output

**Usage Examples**:

```bash
# Get structure overview
"Get the metadata structure of my selection"
"Show me the layer hierarchy of this design"
```

### Advanced Tools

#### `create_design_system_rules`

**Purpose**: Generate rule files for consistent code generation
**Output**: Rules file aligned with your design system and tech stack
**Important**: Save output to `rules/` directory

**Usage Examples**:

```bash
# Generate design system rules
"Create design system rules for our React + TypeScript + Tailwind stack"
"Generate rules for our Vue + Material UI design system"
```

## Make Integration (MCP Resources)

### Bringing Make Context to Your Agent

Connect Make prototypes directly to your agent for enhanced design-to-code workflows.

**Capabilities**:

- Fetch project context from Make (individual files or entire projects)
- Use existing code components instead of starting from scratch
- Extend prototypes with real data for validation and production

### How It Works

1. **Provide Make Link**: Share a valid Make project link with your agent
2. **Browse Available Files**: Receive a list of available files from the Make project
3. **Download Context**: Select and download the files you want to use

### Example Workflow

**Goal**: Implement a popup component matching Make prototype behavior

```bash
# Step 1: Share Make project link
"Here's my Make project: [make-project-url]"

# Step 2: Request specific component context
"I want to get the popup component behavior and styles from this Make file and implement it using my popup component"

# Result: Agent fetches Make context and guides implementation
```

## Best Practices for Figma File Structure

### 1. Use Components Consistently

- Convert repeated elements (buttons, cards, inputs) into components
- Enables better code reuse, especially with Code Connect
- Keeps files cleaner and more maintainable

### 2. Implement Code Connect

- **Top recommendation** for consistent component reuse
- Links Figma components to real code implementations
- Prevents AI from guessing component structure

### 3. Apply Figma Variables

- Use variables for spacing, colors, border radius, and typography
- Ensures design tokens are properly extracted and used in code
- Maintains consistency across generated components

### 4. Use Semantic Naming

- Replace default names (`Frame1268`, `Group5`) with meaningful ones
- Use intent-driven names like `CardContainer`, `ProductImage`, `CTA_Button`
- Helps AI understand component purpose and intended functionality

### 5. Implement Auto Layout

- Makes designs responsive and communicates layout intent
- Avoids absolute positioning in generated code
- Results in cleaner, more predictable code structure
- **Tip**: Resize frames in Figma to test behavior before code generation

### 6. Add Annotations (Coming Soon)

- Convey design intent that's hard to capture visually
- Specify behavior, alignment, and responsiveness requirements
- Guide AI on implementation details beyond visual appearance

## Writing Effective Prompts

### Prompt Structure Guidelines

The MCP provides structured Figma data, but output quality depends on prompt specificity.

### What Good Prompts Achieve

- **Framework Alignment**: Target specific frameworks or styling systems
- **Codebase Integration**: Follow your conventions for file structure and naming
- **File Path Specification**: Generate code in correct locations (`src/pages`, `components/ui`)
- **Code Modification**: Add or modify existing files instead of creating new ones
- **Layout System Compliance**: Follow specific layout patterns (flexbox, grid, absolute)

### Effective Prompt Examples

#### Framework-Specific Generation

```bash
# iOS Development
"Generate iOS SwiftUI code from the selected Figma frame"

# Component Libraries
"Implement the selected frame using ShadCN UI components"
"Create this using Material-UI components with TypeScript"

# Styling Systems
"Generate this component using Styled Components"
"Implement with CSS Modules and semantic HTML"
```

#### Codebase Integration

```bash
# Component Reuse
"Generate this using components from src/components/ui"
"Implement using our existing design system components"

# File Integration
"Add this component to src/components/marketing/PricingCard.tsx"
"Update the existing LoginForm component with this design"

# Layout Systems
"Implement this using our Stack layout component"
"Use our Grid system for this layout"
```

#### Design Token Integration

```bash
# Variable Usage
"Generate code using the design tokens from this selection"
"Extract and use the color and spacing variables in the implementation"

# System Alignment
"Implement using our design system tokens and existing component patterns"
```

### Prompt Specificity Principle

**Treat prompts like briefing a teammate** - the clearer your intent, the better the output.

**Poor Prompt**: "Make this into code"
**Good Prompt**: "Generate a React component using Tailwind CSS, extract the color variables, and save it to src/components/ui/ProductCard.tsx"

## Triggering Specific Tools

### When to Be Explicit

The MCP supports multiple tools, and sometimes the AI doesn't automatically select the right one. Be explicit about which tool you need.

### Tool-Specific Prompts

#### For Code Generation (`get_code`)

```bash
"Generate React code for this selection"
"Get the code implementation of this design"
"Convert this Figma frame to HTML/CSS"
```

#### For Variable Extraction (`get_variable_defs`)

```bash
"Get the variable names and values used in this frame"
"Extract the design tokens from this selection"
"What variables are being used here?"
```

#### For Component Mapping (`get_code_connect_map`)

```bash
"Show me the Code Connect mappings for this selection"
"What components are linked to this design?"
"Get the component connections for this frame"
```

#### For Structure Analysis (`get_metadata`)

```bash
"Get the metadata structure of this design"
"Show me the layer hierarchy"
"What's the component structure here?"
```

### Example: Common Issue Resolution

**Problem**: Users wanted variable values but received raw code instead

**Solution**: Change from generic prompt to specific tool request:

- **Before**: "Tell me about this design"
- **After**: "Get the variable names and values used in this frame"

## Workflow Integration

### Standard Design-to-Code Workflow

1. **Prepare Figma File**

   - Structure with components, variables, and semantic naming
   - Set up Code Connect mappings (if applicable)
   - Ensure Auto Layout is properly configured

2. **Select Target Elements**

   - Choose specific components or frames to convert
   - Consider component boundaries and reusability

3. **Generate Code with Context**

   - Use specific prompts targeting your tech stack
   - Include component reuse and design token requirements
   - Specify file paths and integration points

4. **Iterate and Refine**
   - Test generated code in your environment
   - Refine prompts based on output quality
   - Update Figma structure if needed for better results

### Advanced Workflows

#### Make Prototype Integration

1. Share Make project link with agent
2. Specify desired component or behavior to extract
3. Guide implementation using existing codebase components
4. Validate and extend with real data

#### Design System Rule Creation

1. Run `create_design_system_rules` tool
2. Save rules to appropriate directory (`rules/` or `instructions/`)
3. Reference rules in subsequent code generation prompts
4. Maintain and update rules as design system evolves

## Troubleshooting

### Common Issues

#### Tool Selection Problems

**Symptoms**: Wrong type of output (code instead of variables, etc.)
**Solution**: Be explicit about the tool you want to trigger in your prompt

#### Code Quality Issues

**Symptoms**: Generated code doesn't match expectations
**Solutions**:

- Improve Figma file structure (components, variables, naming)
- Use more specific prompts with framework and styling requirements
- Set up Code Connect for better component reuse

#### Connection Issues (Local Server)

**Symptoms**: MCP can't access Figma data
**Solutions**:

- Ensure Figma Desktop App is running
- Check MCP server configuration
- Verify file permissions and access

#### Token Extraction Problems

**Symptoms**: Design tokens not properly extracted
**Solutions**:

- Ensure variables are properly applied in Figma
- Use explicit prompts for variable extraction
- Check variable naming conventions

### Performance Optimization

#### For Large Files

- Use `get_metadata` first to understand structure
- Target specific components rather than entire pages
- Consider breaking large designs into smaller selections

#### For Better Code Quality

- Set up Code Connect mappings
- Use consistent naming conventions
- Apply variables consistently
- Structure components hierarchically

## Integration with Development Workflow

### File Organization

```bash
# Recommended structure for generated code
src/
  components/
    ui/          # Generated UI components
    marketing/   # Generated marketing components
    layout/      # Generated layout components
  styles/
    tokens/      # Extracted design tokens
    themes/      # Theme configurations
  rules/         # Design system rules
```

### Version Control

- Commit generated code as starting points
- Review and refine before merging
- Track design system rules changes
- Document component mappings

### Team Collaboration

- Share design system rules across team
- Maintain consistent Code Connect mappings
- Document prompt patterns that work well
- Regular review of generated code quality

## Resources

- **Official Documentation**: https://developers.figma.com/docs/figma-mcp-server/
- **MCP Documentation**: https://modelcontextprotocol.io/
- **Code Connect Setup**: https://figma.com/developers/code-connect
- **Figma API Documentation**: https://figma.com/developers/api
- **Community Forum**: https://forum.figma.com/
- **Discord Server**: https://discord.gg/xzQhe2Vcvx

## License

The official Figma MCP server is provided by Figma Inc. See official documentation for license terms and usage guidelines.

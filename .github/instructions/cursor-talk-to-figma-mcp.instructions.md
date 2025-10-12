---
description: Instructions for using the Cursor Talk to Figma MCP server
applyTo: "**"
---

# Cursor Talk to Figma MCP Instructions

## Overview

The Cursor Talk to Figma MCP (Model Context Protocol) server enables bidirectional communication between Cursor AI and Figma, allowing automated design operations, reading design information, and modifying Figma documents programmatically.

**Key Components:**

- **MCP Server**: TypeScript server that provides AI tools to interact with Figma
- **WebSocket Server**: Facilitates real-time communication between MCP and Figma
- **Figma Plugin**: Connects Figma to the WebSocket server for command execution

## Resources

- **Official Repository**: https://github.com/grab/cursor-talk-to-figma-mcp
- **Figma Plugin**: https://www.figma.com/community/plugin/1485687494525374295/cursor-talk-to-figma-mcp-plugin
- **Alternative Setup Guide**: https://lobehub.com/mcp/ysocrius-talk-to-figma-cursor
- **MCP Documentation**: https://modelcontextprotocol.io/
- **Cursor IDE**: https://cursor.sh/
- **Bun Runtime**: https://bun.sh/

## Prerequisites

### Required Software

- **Cursor IDE**: Download from https://cursor.sh/
- **Bun Runtime**: Install with `curl -fsSL https://bun.sh/install | bash`
- **Git**: Required for cloning the repository
- **Figma Account**: Access to Figma with plugin installation permissions

### System Requirements

- **macOS/Linux**: Native support
- **Windows**: Use WSL2 for best compatibility
- **Node.js v18+**: Alternative to Bun (if Bun unavailable)

## Installation Methods

### Method A: Full Installation (Recommended)

Use when you have admin access and want a complete setup.

```bash
# 1. Install Bun if not available
curl -fsSL https://bun.sh/install | bash

# 2. Clone repository in Cursor
# File > Clone Repository > https://github.com/grab/cursor-talk-to-figma-mcp

# 3. Install dependencies and configure MCP
bun install
bun setup

# 4. Verify MCP configuration created
test -f .cursor/mcp.json && echo "✅ MCP configured" || echo "❌ Setup failed"
```

### Method B: Manual Installation

Use when automated setup fails or for custom configurations.

```bash
# 1. Clone and navigate to repository
git clone https://github.com/grab/cursor-talk-to-figma-mcp.git
cd cursor-talk-to-figma-mcp

# 2. Install dependencies
bun install

# 3. Manual MCP configuration
mkdir -p .cursor
cat > .cursor/mcp.json << 'EOF'
{
  "mcpServers": {
    "TalkToFigma": {
      "command": "bunx",
      "args": ["cursor-talk-to-figma-mcp@latest"]
    }
  }
}
EOF

# 4. Open project in Cursor
cursor .
```

### Method C: Development Setup

Use for development or when you need to modify the server code.

```bash
# 1. Clone repository
git clone https://github.com/grab/cursor-talk-to-figma-mcp.git
cd cursor-talk-to-figma-mcp

# 2. Install dependencies
bun install

# 3. Build the project
bun run build

# 4. Configure MCP to use local development server
mkdir -p .cursor
cat > .cursor/mcp.json << EOF
{
  "mcpServers": {
    "TalkToFigma": {
      "command": "bun",
      "args": ["$(pwd)/src/talk_to_figma_mcp/server.ts"]
    }
  }
}
EOF
```

### Method D: NPX Installation (Alternative)

Use when you prefer NPX over Bun or need Windows compatibility.

```bash
# 1. Ensure Node.js is installed
node -v && npx -v

# 2. Configure MCP to use NPX
mkdir -p .cursor
cat > .cursor/mcp.json << 'EOF'
{
  "mcpServers": {
    "TalkToFigma": {
      "command": "npx",
      "args": ["cursor-talk-to-figma-mcp@latest"]
    }
  }
}
EOF

# 3. For Windows compatibility (if needed)
cat > .cursor/mcp.json << 'EOF'
{
  "mcpServers": {
    "TalkToFigma-mcp": {
      "command": "cmd",
      "args": [
        "bash",
        "-c",
        "cmd /c npx -y cursor-talk-to-figma-mcp@latest"
      ]
    }
  }
}
EOF
```

EOF

````

## Configuration and Setup

### 1. Verify MCP Connection

**In Cursor IDE:**

1. Open Settings (`Cmd+,` on Mac, `Ctrl+,` on Windows/Linux)
2. Search for "MCP"
3. Verify "TalkToFigma" shows as "Connected" status
4. If not connected, restart Cursor IDE

### 2. Start WebSocket Server

**CRITICAL**: The WebSocket server must be running for Figma communication.

**Option A: Automatic Startup (Recommended for this workspace)**

If you're working in the figma-demo workspace, the WebSocket server will start automatically when you open the workspace thanks to the configured VS Code task.

```bash
# The task "Start Figma WebSocket Server" runs automatically with:
npm run figma-socket
# Which executes: bunx cursor-talk-to-figma-socket
```

You can verify the task is running by:
1. Open VS Code Terminal
2. Look for "Start Figma WebSocket Server" terminal tab
3. Check for "WebSocket server running" message

**Option B: Manual Startup**

```bash
# Start WebSocket server (keeps terminal occupied)
bun socket

# Alternative: Run with logging
bun socket > websocket.log 2>&1

# Using npm script (same as automatic task)
npm run figma-socket

# Verify server is running
curl -I http://localhost:3055 2>/dev/null && echo "✅ Server running" || echo "❌ Server down"
````

**Important Notes:**

- Keep the WebSocket terminal open during use
- Default port is 3055 (configurable)
- For Windows WSL, uncomment `hostname: "0.0.0.0"` in `src/socket.ts`

### 3. Install and Configure Figma Plugin

**Option A: Community Plugin (Recommended)**

1. Visit: https://www.figma.com/community/plugin/1485687494525374295/cursor-talk-to-figma-mcp-plugin
2. Click "Install" to add to your Figma account
3. Open any Figma file
4. Go to `Plugins` → `Cursor Talk to Figma MCP Plugin`

**Option B: Development Plugin**

1. In Figma: `Plugins` → `Development` → `New Plugin`
2. Choose "Link existing plugin"
3. Select `src/cursor_mcp_plugin/manifest.json` file
4. Plugin appears in development plugins

**Plugin Configuration:**

1. In plugin panel, set WebSocket URL to: `ws://localhost:3055`
2. Click "Connect"
3. Verify "Connected" status appears
4. Plugin should show green indicator

## Available MCP Tools

### Document & Selection Tools

- **`get_document_info`**: Get current Figma document information
- **`get_selection`**: Get information about current selection
- **`read_my_design`**: Get detailed info about selection without parameters
- **`get_node_info`**: Get detailed information about specific node by ID
- **`get_nodes_info`**: Get information about multiple nodes by IDs
- **`set_focus`**: Select and scroll to specific node
- **`set_selections`**: Select multiple nodes and scroll to show them

### Creation Tools

- **`create_rectangle`**: Create rectangle with position, size, optional name
- **`create_frame`**: Create frame with position, size, optional name
- **`create_text`**: Create text node with customizable font properties

### Text Operations

- **`scan_text_nodes`**: Scan text nodes with intelligent chunking
- **`set_text_content`**: Set text content of single text node
- **`set_multiple_text_contents`**: Batch update multiple text nodes

### Styling Tools

- **`set_fill_color`**: Set fill color (RGBA)
- **`set_stroke_color`**: Set stroke color and weight
- **`set_corner_radius`**: Set corner radius with per-corner control

### Layout & Auto Layout Tools

- **`set_layout_mode`**: Set layout mode (NONE, HORIZONTAL, VERTICAL)
- **`set_padding`**: Set padding for auto-layout frames
- **`set_axis_align`**: Set primary/counter axis alignment
- **`set_layout_sizing`**: Set sizing modes (FIXED, HUG, FILL)
- **`set_item_spacing`**: Set distance between children
- **`move_node`**: Move node to new position
- **`resize_node`**: Resize node with new dimensions

### Component & Instance Tools

- **`get_local_components`**: Get information about local components
- **`create_component_instance`**: Create component instance
- **`get_instance_overrides`**: Extract override properties from instance
- **`set_instance_overrides`**: Apply overrides to target instances

### Annotation Tools

- **`get_annotations`**: Get all annotations in document/node
- **`set_annotation`**: Create/update annotation with markdown support
- **`set_multiple_annotations`**: Batch create/update annotations
- **`scan_nodes_by_types`**: Scan for nodes by type (for annotation targets)

### Prototyping Tools

- **`get_reactions`**: Get prototype reactions with visual highlighting
- **`set_default_connector`**: Set copied connector as default style
- **`create_connections`**: Create FigJam connector lines between nodes

### Utility Tools

- **`delete_node`**: Delete single node
- **`delete_multiple_nodes`**: Delete multiple nodes efficiently
- **`clone_node`**: Create copy of existing node with position offset
- **`export_node_as_image`**: Export node as image (PNG, JPG, SVG, PDF)
- **`get_styles`**: Get information about local styles

### Connection Management

- **`join_channel`**: Join specific channel for Figma communication

### Helper Prompts

- **`design_strategy`**: Best practices for working with Figma designs
- **`read_design_strategy`**: Best practices for reading designs
- **`text_replacement_strategy`**: Systematic text replacement approach
- **`annotation_conversion_strategy`**: Convert manual to native annotations
- **`swap_overrides_instances`**: Transfer overrides between instances
- **`reaction_to_connector_strategy`**: Convert prototype reactions to connectors

## Usage Workflow

### Basic Workflow

1. **Start WebSocket Server**: `npm run figma-socket` (or automatic via VS Code task)
2. **Verify MCP Connection**: Check Cursor settings for "TalkToFigma" connected
3. **Open Figma**: Launch any Figma file
4. **Run Plugin**: Open "Cursor Talk to Figma MCP Plugin"
5. **Connect Plugin**: Set URL to `ws://localhost:3055` and connect
6. **🚨 CRITICAL FIRST STEP: Join Channel**: Use `join_channel` tool in Cursor to establish communication
7. **Verify Channel Connection**: Ensure the channel connection is successful before proceeding
8. **Execute Commands**: Use any MCP tool to interact with Figma

### Channel Connection Requirements

**⚠️ MANDATORY**: Before using any other MCP tools, you MUST first establish a channel connection:

1. **Get Channel Name from Figma Plugin**:

   - In the Figma plugin panel, look for the green connected status message
   - Note the channel name displayed (e.g., "959ykpvn")
   - The plugin must show "Connected" status with localhost enabled on port 3055

2. **Join Channel in Cursor**:

   ```bash
   # Replace [CHANNEL_NAME] with the actual channel from Figma plugin
   join_channel
   # When prompted, enter the channel name from the Figma plugin
   ```

3. **Verify Connection Success**:
   - You should receive a "Successfully joined channel" message
   - Any other response indicates connection failure
   - If connection fails, troubleshoot WebSocket server and plugin connection first

**❌ Common Error**: If you see "Must join a channel" errors, it means you haven't completed this step successfully.

### Example Usage in Cursor Chat

```bash
# 🚨 STEP 1: MANDATORY - Join communication channel FIRST
join_channel
# Wait for "Successfully joined channel" confirmation before proceeding

# STEP 2: Get document overview (only after successful channel join)
get_document_info

# STEP 3: Get current selection
get_selection

# STEP 4: Create a rectangle
create_rectangle({
  "x": 100,
  "y": 100,
  "width": 200,
  "height": 150,
  "name": "My Rectangle"
})

# STEP 5: Set fill color
set_fill_color({
  "nodeId": "rectangle-id",
  "r": 255,
  "g": 0,
  "b": 0,
  "a": 1
})
```

**⚠️ Important**: ALL commands will fail if you haven't successfully joined a channel first. Always verify channel connection before attempting any Figma operations.

## Best Practices

### General Practices

1. **Always join channel first** before sending commands
2. **Get document overview** using `get_document_info` initially
3. **Check current selection** with `get_selection` before modifications
4. **Use appropriate creation tools** based on needs
5. **Verify changes** using `get_node_info` after modifications
6. **Handle errors appropriately** as all commands can throw exceptions

### Performance Optimization

7. **For large designs**: Use chunking parameters in `scan_text_nodes`
8. **Use batch operations** when possible (`set_multiple_text_contents`)
9. **Monitor progress** through WebSocket updates for long operations
10. **Implement error handling** for large batch operations

### Component Best Practices

11. **Use component instances** for consistency when possible
12. **Preserve relationships** by using instance overrides vs direct manipulation
13. **Verify component structure** before applying bulk changes

### Annotation Workflow

14. **Scan text nodes** to identify numbered markers and descriptions
15. **Use `scan_nodes_by_types`** to find UI elements annotations refer to
16. **Match markers with targets** using path, name, or proximity
17. **Categorize annotations** appropriately with `get_annotations`
18. **Create native annotations** with `set_multiple_annotations` in batches
19. **Verify annotation links** to their targets
20. **Delete legacy annotation nodes** after successful conversion

### Prototyping Workflow

21. **Use `get_reactions`** to extract prototype flows
22. **Set default connector** with `set_default_connector`
23. **Generate connector lines** with `create_connections` for visual flow mapping

## Troubleshooting

### Common Issues

#### Channel Connection Failed (Most Common)

**Symptoms**: "Must join a channel" errors or commands not responding
**Solutions**:

```bash
# 1. Verify WebSocket server is running
lsof -i :3055 && echo "✅ Server running" || echo "❌ Start server with: bun socket"

# 2. Check Figma plugin connection
# - Plugin should show "Connected" status with green indicator
# - Verify WebSocket URL is set to: ws://localhost:3055

# 3. Get channel name from Figma plugin and join in Cursor
join_channel
# Enter the channel name exactly as shown in Figma plugin (e.g., "959ykpvn")

# 4. Verify successful connection
# You should see: "Successfully joined channel: [CHANNEL_NAME]"
```

#### MCP Not Connected

**Symptoms**: "TalkToFigma" shows as disconnected in Cursor settings
**Solutions**:

```bash
# Check if in correct project directory
pwd | grep "cursor-talk-to-figma-mcp"

# Verify MCP config exists
test -f .cursor/mcp.json && echo "Config exists" || echo "Missing config"

# Recreate MCP config
bun setup

# Restart Cursor
cursor .
```

#### WebSocket Connection Failed

**Symptoms**: Plugin shows "Connection failed" or timeouts
**Solutions**:

```bash
# Check if server is running
lsof -i :3055

# Restart WebSocket server
pkill -f "bun socket"
bun socket

# For Windows WSL, edit src/socket.ts:
# Uncomment: hostname: "0.0.0.0"

# Check firewall settings
curl -I http://localhost:3055
```

#### Plugin Not Responding

**Symptoms**: Commands timeout or return no data
**Solutions**:

1. **Refresh Figma page** and reconnect plugin
2. **Verify WebSocket URL** is `ws://localhost:3055`
3. **Check WebSocket logs** for connection messages
4. **Restart plugin** in Figma
5. **Use `join_channel`** to re-establish communication

#### Permission Denied Errors

**Symptoms**: "Permission denied" or "Access denied" errors
**Solutions**:

```bash
# Fix file permissions
chmod +x scripts/setup.sh

# For Bun installation issues
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# For Node.js alternative
npm install -g @modelcontextprotocol/cli
```

### Diagnostic Commands

```bash
# System verification
echo "=== SYSTEM DIAGNOSTIC ==="
which cursor && echo "✅ Cursor available" || echo "❌ Cursor missing"
which git && echo "✅ Git available" || echo "❌ Git missing"
which bun && echo "✅ Bun available" || echo "❌ Bun missing"

# Project verification
echo "=== PROJECT DIAGNOSTIC ==="
test -f package.json && echo "✅ Package.json exists" || echo "❌ Not in project root"
test -d src && echo "✅ Source directory exists" || echo "❌ Invalid project structure"
test -f .cursor/mcp.json && echo "✅ MCP config exists" || echo "❌ MCP not configured"

# Process verification
echo "=== PROCESS DIAGNOSTIC ==="
lsof -i :3055 >/dev/null 2>&1 && echo "✅ WebSocket server running" || echo "❌ Server not running"
curl -I http://localhost:3055 >/dev/null 2>&1 && echo "✅ Server responding" || echo "❌ Server not responding"
```

### Error Recovery

#### Complete Reset

```bash
# Stop all processes
pkill -f "bun socket"
pkill -f "cursor-talk-to-figma"

# Clean installation
rm -rf node_modules .cursor/mcp.json
bun install
bun setup

# Restart services
bun socket &
cursor .
```

#### Alternative Runtime

If Bun fails, use Node.js:

```bash
# Install with npm
npm install
npm run build

# Update MCP config for Node.js
cat > .cursor/mcp.json << 'EOF'
{
  "mcpServers": {
    "TalkToFigma": {
      "command": "node",
      "args": ["dist/server.js"]
    }
  }
}
EOF
```

## Environment-Specific Notes

### Windows WSL Setup

```bash
# Install Bun in PowerShell
powershell -c "irm bun.sh/install.ps1|iex"

# Edit socket configuration for WSL
# In src/socket.ts, uncomment:
hostname: "0.0.0.0"

# Start server
bun socket
```

### macOS/Linux Setup

Standard installation should work without modifications.

### Development Environment

For development or customization:

```bash
# Development build
bun run build:dev

# Watch mode
bun run dev

# Local MCP server
cat > .cursor/mcp.json << EOF
{
  "mcpServers": {
    "TalkToFigma": {
      "command": "bun",
      "args": ["$(pwd)/src/talk_to_figma_mcp/server.ts"]
    }
  }
}
EOF
```

## Security Considerations

1. **Local Network Only**: WebSocket server runs on localhost by default
2. **No Authentication**: Local development environment assumed
3. **Figma Permissions**: Plugin respects Figma's built-in permissions
4. **File Access**: MCP server only accesses specified project directory
5. **Network Traffic**: All communication stays within local machine

## Integration Examples

### Bulk Text Replacement

```javascript
// 1. Scan all text nodes
scan_text_nodes();

// 2. Replace specific text content
set_multiple_text_contents({
  updates: [
    { nodeId: "text1", content: "New content 1" },
    { nodeId: "text2", content: "New content 2" },
  ],
});
```

### Component Instance Management

```javascript
// 1. Get overrides from source instance
get_instance_overrides({ nodeId: "source-instance-id" });

// 2. Apply to multiple targets
set_instance_overrides({
  sourceInstanceId: "source-instance-id",
  targetNodeIds: ["target1", "target2", "target3"],
});
```

### Prototype to Connectors

```javascript
// 1. Get prototype reactions
get_reactions();

// 2. Set default connector style
set_default_connector({ connectorId: "connector-id" });

// 3. Create connections based on reactions
create_connections({
  connections: [{ startNodeId: "frame1", endNodeId: "frame2", text: "Next" }],
});
```

## Advanced Configuration

### Custom WebSocket Port

```bash
# Edit src/socket.ts
const PORT = process.env.WEBSOCKET_PORT || 3055;

# Set environment variable
export WEBSOCKET_PORT=8080
bun socket
```

### Multiple Figma Documents

Each Figma document requires a separate plugin connection, but can share the same WebSocket server and MCP configuration.

### Remote Server Setup

For team usage, modify socket configuration to accept external connections (requires proper security setup).

## Resources

- **Official Repository**: https://github.com/grab/cursor-talk-to-figma-mcp
- **Figma Plugin**: https://www.figma.com/community/plugin/1485687494525374295/cursor-talk-to-figma-mcp-plugin
- **MCP Documentation**: https://modelcontextprotocol.io/
- **Cursor IDE**: https://cursor.sh/
- **Bun Runtime**: https://bun.sh/

## License

This MCP server is released under the MIT License. See the official repository for complete license terms.

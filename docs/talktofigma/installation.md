# Installation & Setup

## 🚀 Quick Setup

### 1. Install Bun (if not already installed)

```bash
# Install Bun package manager
curl -fsSL https://bun.sh/install | bash

# For Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1|iex"
```

### 2. Run Automated Setup

```bash
# This installs dependencies and configures MCP automatically
bun setup
```

### 3. Configure VS Code MCP (Alternative Method)

If manual configuration is needed, create or update `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "TalkToFigma": {
      "command": "bunx",
      "args": [
        "cursor-talk-to-figma-mcp@latest"
      ]
    }
  }
}
```

### 4. Start WebSocket Server

```bash
# Start the communication bridge between Cursor and Figma
bun socket
```

Create `.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Figma Socket",
      "type": "shell",
      "command": "npm",
      "args": ["run", "figma-socket"],
      "group": "build",
      "isBackground": true,
      "runOptions": {
        "runOn": "folderOpen"
      },
      "presentation": {
        "echo": true,
        "reveal": "silent",
        "focus": false,
        "panel": "shared"
      },
      "problemMatcher": []
    }
  ]
}
```

## 🔌 Figma Plugin Setup

### Method 1: Community Plugin (Recommended)

1. **Install from Figma Community**
   - Visit: [Figma Community Plugin](https://www.figma.com/community/plugin/1485687494525374295/cursor-talk-to-figma-mcp-plugin)
   - Click **"Install"** to add to your Figma account

2. **Open Figma and Run Plugin**
   - Open any Figma file (or create new one)
   - Go to `Plugins` → `Cursor Talk to Figma MCP Plugin`
   - The plugin panel will open

3. **Configure WebSocket Connection**
   - In plugin panel, set WebSocket URL to: `ws://localhost:3055`
   - Click **"Connect"** to establish connection
   - Look for green "Connected" status

### Method 2: Local Development Plugin

For development or if community plugin unavailable:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/grab/cursor-talk-to-figma-mcp.git
   cd cursor-talk-to-figma-mcp
   ```

2. **Install in Figma**
   - In Figma: `Plugins` → `Development` → `New Plugin`
   - Choose **"Link existing plugin"**
   - Select `src/cursor_mcp_plugin/manifest.json`
   - Plugin appears in development plugins list

### Windows + WSL Configuration

For Windows WSL users, additional setup required:

1. **Update Socket Configuration**

   Edit `src/socket.ts` and uncomment:

   ```typescript
   // Uncomment this line for Windows WSL
   hostname: "0.0.0.0",
   ```

2. **Restart WebSocket Server**

   ```bash
   bun socket
   ```

## ⚙️ VS Code Configuration

### Enable MCP Support

1. **Open VS Code Settings** (Ctrl+,)
2. **Search for** "copilot mcp"
3. **Enable** "GitHub Copilot: Enable MCP servers"
4. **Restart** VS Code

### Verify Installation

Check MCP server is recognized:

1. **Open Command Palette** (Ctrl+Shift+P)
2. **Type** "MCP"
3. **Verify** TalkToFigma appears in available servers

## 🔧 Project Configuration

### Tailwind CSS Setup

Ensure Tailwind is configured for design token extraction:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Custom design tokens will be added here
    },
  },
  plugins: [],
}
```

### Component Structure

Create recommended folder structure:

```text
src/
├── components/
│   ├── ui/          # Generated Figma components
│   ├── Icons.jsx    # Icon components
│   └── ...
├── styles/
│   ├── globals.css  # Global styles
│   └── tokens.css   # Design tokens
└── ...
```

## 🧪 Test Installation

### 1. Start Services

```bash
# Terminal 1: Start development server
npm run dev

# Terminal 2: Start Figma socket
npm run figma-socket
```

### 2. Verify Socket Connection

```bash
# Check if socket is running
curl -X GET http://localhost:3055/health
# Should return: WebSocket server running
```

### 3. Test Figma Connection

1. **Open Figma** with any design file
2. **Select** an element in Figma
3. **In VS Code**, try: "get my Figma selection"
4. **Should return** element information

## 🐛 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **Port 3055 in use** | Kill existing process: `netstat -ano \| findstr :3055` |
| **Figma timeout** | Ensure Figma plugin is running and element is selected |
| **MCP not found** | Restart VS Code and verify `.cursor/mcp.json` syntax |
| **Permission errors** | Run with admin privileges or check file permissions |

### Debug Commands

```bash
# Check processes
Get-Process | Where-Object {$_.ProcessName -like "*figma*"}

# Test network connection
Test-NetConnection -ComputerName localhost -Port 3055

# Verify npm script
npm run figma-socket --verbose
```

## ✅ Verification Checklist

- [ ] TalkToFigma package installed
- [ ] MCP configuration file created
- [ ] VS Code MCP support enabled
- [ ] Figma plugin installed and running
- [ ] Socket connection successful (port 3055)
- [ ] Test selection from Figma works
- [ ] Auto-start tasks configured

---

> 💡 **Next Step**: Learn [How to Use](./usage.md) TalkToFigma
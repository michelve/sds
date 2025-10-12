# TalkToFigma Requirements

## �️ System Requirements

### Required Software

| Component | Requirement | Notes |
|-----------|-------------|-------|
| **Figma Desktop** | Latest version | Required (browser version not supported) |
| **VS Code** | v1.80+ | With MCP support enabled |
| **Bun** | v1.0+ | JavaScript runtime and package manager |
| **Node.js** | v18+ | Alternative to Bun if needed |

### Platform Support

✅ **Windows** (Native + WSL)  
✅ **macOS** (Intel + Apple Silicon)  
✅ **Linux** (Ubuntu/Debian/Fedora)

## � Installation Prerequisites

### 1. Bun Installation

**Windows (PowerShell):**
```powershell
irm bun.sh/install.ps1 | iex
```

**macOS/Linux:**
```bash
curl -fsSL https://bun.sh/install | bash
```

**Verify Installation:**
```bash
bun --version
# Should output: bun 1.x.x
```

### 2. VS Code MCP Support

**Enable MCP in VS Code:**
1. Open VS Code settings (Ctrl/Cmd + ,)
2. Search for "MCP"
3. Enable "Model Context Protocol" support
4. Restart VS Code

**Alternative: Manual Configuration**
Create or edit `.cursor/mcp.json` in your workspace

### 3. Figma Desktop App

**Download:**
- Visit [figma.com/downloads](https://www.figma.com/downloads/)
- Install for your platform
- Sign in to your Figma account

**Verify:**
- Open Figma Desktop
- Create or open any design file
- Confirm plugins menu is accessible

## 🌐 Network Requirements

### Port Configuration

| Port | Service | Usage |
|------|---------|-------|
| **3055** | WebSocket Server | TalkToFigma communication |
| **5173** | Vite Dev Server | Development (optional) |

### Firewall Settings

**Windows Firewall:**
- Allow incoming connections on port 3055
- Add exception for Node.js/Bun if prompted

**Corporate Networks:**
- WebSocket traffic on localhost:3055 must be allowed
- No external internet access required

## � MCP Server Requirements

### VS Code Extensions

**Required Extensions:**
- GitHub Copilot (for MCP support)
- Any language extensions for your project

**Configuration Location:**
```text
.cursor/mcp.json      # Cursor editor
.vscode/mcp.json      # VS Code (manual setup)
```

### Memory Requirements

**Minimum:**
- 4GB RAM available
- 1GB free disk space

**Recommended:**
- 8GB+ RAM for large Figma files
- SSD storage for better performance

## 🔒 Security Requirements

### Permissions

**File System:**
- Read/write access to project directory
- Execute permissions for Bun/Node.js

**Network:**
- Localhost WebSocket connections
- No external API access required

### Data Privacy

✅ **Local-only operation**  
✅ **No data sent to external servers**  
✅ **Figma data stays on your machine**  
❌ **No cloud dependencies**

## ✅ Pre-Installation Checklist

- [ ] Figma Desktop installed and signed in
- [ ] VS Code with MCP support enabled
- [ ] Bun runtime installed and working
- [ ] Port 3055 available (not in use)
- [ ] Admin/sudo access if needed
- [ ] Stable internet for initial setup

---

> 💡 **Next Step**: Proceed to [Installation Guide](./installation.md)
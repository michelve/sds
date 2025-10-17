# GitHub Pull Request Integration

This directory contains scripts and functionality to automatically create GitHub pull requests when design tokens are updated from Figma.

## 🚀 Quick Start

### 1. Setup Environment Variables

Copy `.env-rename` to `.env` and fill in your tokens:

```bash
cp .env-rename .env
```

Required environment variables:
- `GITHUB_TOKEN`: GitHub personal access token with repo permissions
- `GITHUB_REPO_OWNER`: Your GitHub username or organization
- `GITHUB_REPO_NAME`: Repository name
- `FIGMA_ACCESS_TOKEN`: Figma access token with variables scope
- `FIGMA_FILE_KEY`: Your Figma file key

### 2. Install Dependencies

```bash
npm install
```

### 3. Create GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with these permissions:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
3. Copy the token to your `.env` file

## 📋 Usage

### From Figma Plugin

1. Open the Figma Token JSON plugin
2. Export your tokens
3. Click "Create Pull Request" button
4. Tokens will be saved and you'll get instructions to run the PR creation

### From Command Line

```bash
# Create a PR with current tokens
npm run github:pr:create

# Show repository information
npm run github:pr:info

# List recent pull requests
npm run github:pr:list
```

### Direct Script Usage

```bash
# Create PR with specific tokens file
cd scripts/github
node --env-file=../../.env github-pr.mjs create ../../scripts/tokens/tokens.json

# Show repo info
node --env-file=../../.env github-pr.mjs info

# List recent PRs
node --env-file=../../.env github-pr.mjs list
```

## 🔧 How It Works

### Workflow

1. **Figma Plugin**: User clicks "Create Pull Request" in the Figma plugin
2. **Token Export**: Plugin exports current Figma variables and effects
3. **Auto-Stash**: Script automatically stashes any uncommitted changes
4. **File Save**: Tokens are saved to `scripts/tokens/tokens.json`
5. **Git Operations**: Script creates a new branch, commits changes, and pushes
6. **PR Creation**: GitHub API creates a pull request with proper description
7. **Restore Changes**: Script restores previously stashed changes
8. **Notification**: User gets PR URL and branch information

### Generated Pull Request

Each PR includes:
- **Title**: "🎨 Update Design Tokens from Figma"
- **Description**: Detailed changelog with testing checklist
- **Branch**: `figma-tokens-update-{timestamp}`
- **Commit Message**: Semantic commit with timestamp
- **Files Changed**: `scripts/tokens/tokens.json`

### Branch Management

- Creates unique branches: `figma-tokens-update-{timestamp}`
- Automatically switches back to main branch after completion
- Handles cleanup on errors

## 🛠️ Script Details

### `github-pr.mjs`

Main script that handles:
- Git operations (branch creation, commits, pushes)
- GitHub API integration
- Error handling and cleanup
- CLI interface

**Key Functions:**
- `createPullRequest()`: Main PR creation workflow
- `getRepositoryInfo()`: Fetch repo details
- `listRecentPRs()`: Show recent pull requests

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GITHUB_TOKEN` | GitHub personal access token | ✅ |
| `GITHUB_REPO_OWNER` | GitHub username/organization | ✅ |
| `GITHUB_REPO_NAME` | Repository name | ✅ |
| `FIGMA_FILE_KEY` | Figma file key (for PR descriptions) | ❌ |

## 🔒 Security

- GitHub token should have minimal required permissions
- Tokens are stored in `.env` file (not committed to git)
- Script validates repository access before operations
- Automatic cleanup on errors

## 🐛 Troubleshooting

### Common Issues

1. **"Repository not found"**
   - Check `GITHUB_REPO_OWNER` and `GITHUB_REPO_NAME`
   - Verify GitHub token has repo access

2. **"Authentication failed"**
   - Verify `GITHUB_TOKEN` is correct
   - Check token hasn't expired
   - Ensure token has required permissions

3. **"Git operations failed"**
   - Ensure you're in a git repository
   - Check git remote is configured
   - Verify you have push permissions

4. **"Tokens file not found"**
   - Run Figma plugin first to generate tokens
   - Check file path in script

### Debug Mode

Add `DEBUG=true` to your environment for verbose logging:

```bash
DEBUG=true npm run github:pr:create
```

## 📚 API Reference

### GitHub PR Manager Class

```javascript
import { GitHubPRManager } from './github-pr.mjs';

const manager = new GitHubPRManager();

// Create a PR
const result = await manager.createPullRequest(
  tokensData,     // JSON data
  commitMessage,  // Git commit message
  prTitle,        // PR title
  prDescription   // PR description
);

// Get repository info
const repo = await manager.getRepositoryInfo();

// List recent PRs
const prs = await manager.listRecentPRs(limit);
```

## 🔄 Integration with Figma Plugin

The Figma plugin (`figma-plugin-token-json/code.js`) includes:

- **UI Button**: "Create Pull Request" button in footer
- **Message Handler**: Handles PR creation requests
- **File Writing**: Saves tokens to local file
- **User Feedback**: Shows success/error notifications

## 📈 Future Enhancements

- [ ] Automatic PR creation without manual command
- [ ] PR template customization
- [ ] Multiple repository support
- [ ] Slack/Teams notifications
- [ ] Automated testing integration
- [ ] Token validation before PR creation
- [ ] Rollback functionality
- [ ] PR review automation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the GitHub PR functionality
5. Submit a pull request

## 📄 License

This project is part of the SDS (Simple Design System) and follows the same license terms.

#!/usr/bin/env node

import { Octokit } from '@octokit/rest';
import { simpleGit } from 'simple-git';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const REPO_OWNER = process.env.GITHUB_REPO_OWNER || 'michelve';
const REPO_NAME = process.env.GITHUB_REPO_NAME || 'sds';
const MAIN_BRANCH = 'main';
const TOKENS_FILE_PATH = 'scripts/tokens/tokens.json';

class TokenPRManager {
  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    // Set git to run from project root
    const projectRoot = path.resolve(__dirname, '..', '..');
    this.git = simpleGit(projectRoot);
  }

  async createPRFromClipboard() {
    try {
      console.log('🚀 Creating PR from clipboard tokens...');
      
      // Read tokens from clipboard (user needs to paste them)
      console.log('📋 Please paste your tokens JSON and press Enter twice to finish:');
      
      const readline = await import('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      let tokensJson = '';
      let emptyLineCount = 0;

      for await (const line of rl) {
        if (line.trim() === '') {
          emptyLineCount++;
          if (emptyLineCount >= 2) {
            break;
          }
        } else {
          emptyLineCount = 0;
        }
        tokensJson += line + '\n';
      }

      rl.close();

      if (!tokensJson.trim()) {
        console.log('❌ No tokens provided');
        return { success: false, error: 'No tokens provided' };
      }

      // Parse and validate JSON
      let tokensData;
      try {
        tokensData = JSON.parse(tokensJson);
      } catch (error) {
        console.log('❌ Invalid JSON format');
        return { success: false, error: 'Invalid JSON format' };
      }

      // Create PR
      return await this.createPullRequest(tokensData);

    } catch (error) {
      console.error('❌ Error:', error.message);
      return { success: false, error: error.message };
    }
  }

  async createPullRequest(tokensData) {
    try {
      console.log('🚀 Starting GitHub PR creation process...');

      // 0. Stash any uncommitted changes
      console.log('📦 Stashing uncommitted changes...');
      try {
        await this.git.stash();
      } catch (stashError) {
        // Ignore if nothing to stash
        console.log('   No changes to stash');
      }

      // 1. Create a new branch
      const branchName = `figma-tokens-update-${Date.now()}`;
      console.log(`📝 Creating branch: ${branchName}`);
      
      await this.git.checkout(MAIN_BRANCH);
      await this.git.pull('origin', MAIN_BRANCH);
      await this.git.checkoutLocalBranch(branchName);

      // 2. Update the tokens file
      console.log('📄 Updating tokens.json file...');
      const projectRoot = path.resolve(__dirname, '..', '..');
      const tokensFilePath = path.join(projectRoot, TOKENS_FILE_PATH);
      await fs.writeFile(tokensFilePath, JSON.stringify(tokensData, null, 2));

      // 3. Commit the changes
      console.log('💾 Committing changes...');
      await this.git.add(TOKENS_FILE_PATH);
      await this.git.commit(`feat: update design tokens from Figma\n\n- Updated tokens from Figma plugin\n- Generated on ${new Date().toISOString()}`);

      // 4. Push the branch
      console.log('📤 Pushing branch to GitHub...');
      await this.git.push('origin', branchName);

      // 5. Create the pull request
      console.log('🔀 Creating pull request...');
      const { data: pr } = await this.octokit.rest.pulls.create({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        title: '🎨 Update Design Tokens from Figma',
        head: branchName,
        base: MAIN_BRANCH,
        body: `
## 📋 Description
This PR updates the design tokens from Figma using the automated token export plugin.

## 🔄 Changes
- Updated \`scripts/tokens/tokens.json\` with latest Figma variables
- Generated automatically from Figma plugin

## 🧪 Testing
- [ ] Verify tokens are correctly formatted
- [ ] Check that all variables are properly mapped
- [ ] Test token usage in components

## 📸 Screenshots
<!-- Add screenshots if applicable -->

## 🔗 Related
- Generated from Figma file: ${process.env.FIGMA_FILE_KEY || 'N/A'}
- Created: ${new Date().toISOString()}
        `,
      });

      console.log(`✅ Pull request created successfully!`);
      console.log(`🔗 PR URL: ${pr.html_url}`);
      console.log(`📊 PR Number: #${pr.number}`);

      // Restore stashed changes
      console.log('📦 Restoring stashed changes...');
      try {
        await this.git.stash(['pop']);
      } catch (popError) {
        // Ignore if nothing was stashed
        console.log('   No stashed changes to restore');
      }

      return {
        success: true,
        prUrl: pr.html_url,
        prNumber: pr.number,
        branchName: branchName,
      };

    } catch (error) {
      console.error('❌ Error creating pull request:', error.message);
      
      // Cleanup: switch back to main branch
      try {
        await this.git.checkout(MAIN_BRANCH);
        // Restore stashed changes on error too
        try {
          await this.git.stash(['pop']);
        } catch (popError) {
          // Ignore if nothing was stashed
        }
      } catch (cleanupError) {
        console.error('⚠️ Warning: Could not switch back to main branch:', cleanupError.message);
      }

      return {
        success: false,
        error: error.message,
      };
    }
  }
}

// CLI usage
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === 'clipboard') {
    console.log(`
🎨 Figma Tokens to GitHub PR

This tool helps create pull requests for design token updates from Figma.

Instructions:
1. Copy your tokens JSON from the Figma plugin
2. Paste them below and press Enter twice to finish
3. The script will create a PR automatically

Environment Variables Required:
  GITHUB_TOKEN    - GitHub personal access token with repo permissions
  GITHUB_REPO_OWNER - GitHub username/organization (default: michel)
  GITHUB_REPO_NAME - Repository name (default: sds)

Starting in 3 seconds...
    `);
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const manager = new TokenPRManager();
    const result = await manager.createPRFromClipboard();
    
    if (result.success) {
      console.log(`\n🎉 Success! Pull request created:`);
      console.log(`   URL: ${result.prUrl}`);
      console.log(`   Branch: ${result.branchName}`);
    } else {
      console.log(`\n💥 Failed to create pull request: ${result.error}`);
      process.exit(1);
    }
  } else {
    console.log(`
Usage: node figma-pr.mjs [clipboard]

Commands:
  clipboard (default)  Create PR from clipboard tokens
  help                Show this help message

Examples:
  node figma-pr.mjs
  node figma-pr.mjs clipboard
    `);
  }
}

// Export for use as module
export { TokenPRManager };

// Run CLI if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

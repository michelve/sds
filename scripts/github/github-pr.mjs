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

class GitHubPRManager {
  constructor() {
    this.octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });
    // Set git to run from project root
    const projectRoot = path.resolve(__dirname, '..', '..');
    this.git = simpleGit(projectRoot);
  }

  async createPullRequest(tokensData, commitMessage, prTitle, prDescription) {
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
      await this.git.commit(commitMessage);

      // 4. Push the branch
      console.log('📤 Pushing branch to GitHub...');
      await this.git.push('origin', branchName);

      // 5. Create the pull request
      console.log('🔀 Creating pull request...');
      const { data: pr } = await this.octokit.rest.pulls.create({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        title: prTitle,
        head: branchName,
        base: MAIN_BRANCH,
        body: prDescription,
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

  async getRepositoryInfo() {
    try {
      const { data: repo } = await this.octokit.rest.repos.get({
        owner: REPO_OWNER,
        repo: REPO_NAME,
      });
      return repo;
    } catch (error) {
      console.error('❌ Error getting repository info:', error.message);
      return null;
    }
  }

  async listRecentPRs(limit = 5) {
    try {
      const { data: prs } = await this.octokit.rest.pulls.list({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        state: 'all',
        per_page: limit,
        sort: 'updated',
        direction: 'desc',
      });
      return prs;
    } catch (error) {
      console.error('❌ Error listing pull requests:', error.message);
      return [];
    }
  }
}

// CLI usage
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
Usage: node github-pr.mjs <command> [options]

Commands:
  create <tokens-file>     Create a PR with updated tokens
  info                    Show repository information
  list                    List recent pull requests
  help                    Show this help message

Examples:
  node github-pr.mjs create ./tokens.json
  node github-pr.mjs info
  node github-pr.mjs list
    `);
    return;
  }

  const command = args[0];
  const manager = new GitHubPRManager();

  switch (command) {
    case 'create': {
      const tokensFile = args[1];
      if (!tokensFile) {
        console.error('❌ Please provide a tokens file path');
        return;
      }

      try {
        const tokensData = JSON.parse(await fs.readFile(tokensFile, 'utf8'));
        const commitMessage = `feat: update design tokens from Figma\n\n- Updated tokens from Figma plugin\n- Generated on ${new Date().toISOString()}`;
        const prTitle = `🎨 Update Design Tokens from Figma`;
        const prDescription = `
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
        `;

        const result = await manager.createPullRequest(tokensData, commitMessage, prTitle, prDescription);
        
        if (result.success) {
          console.log(`\n🎉 Success! Pull request created:`);
          console.log(`   URL: ${result.prUrl}`);
          console.log(`   Branch: ${result.branchName}`);
        } else {
          console.log(`\n💥 Failed to create pull request: ${result.error}`);
          process.exit(1);
        }
      } catch (error) {
        console.error('❌ Error reading tokens file:', error.message);
        process.exit(1);
      }
      break;
    }

    case 'info': {
      const repo = await manager.getRepositoryInfo();
      if (repo) {
        console.log(`\n📊 Repository Information:`);
        console.log(`   Name: ${repo.full_name}`);
        console.log(`   Description: ${repo.description || 'No description'}`);
        console.log(`   Default Branch: ${repo.default_branch}`);
        console.log(`   Stars: ${repo.stargazers_count}`);
        console.log(`   Forks: ${repo.forks_count}`);
        console.log(`   URL: ${repo.html_url}`);
      }
      break;
    }

    case 'list': {
      const prs = await manager.listRecentPRs();
      if (prs.length > 0) {
        console.log(`\n📋 Recent Pull Requests:`);
        prs.forEach(pr => {
          const status = pr.state === 'open' ? '🟢' : pr.state === 'closed' ? '🔴' : '🟡';
          console.log(`   ${status} #${pr.number}: ${pr.title}`);
          console.log(`      URL: ${pr.html_url}`);
          console.log(`      Updated: ${new Date(pr.updated_at).toLocaleString()}`);
          console.log('');
        });
      } else {
        console.log('📭 No pull requests found');
      }
      break;
    }

    case 'help':
    default:
      console.log(`
GitHub PR Manager for Design Tokens

This tool helps create pull requests for design token updates from Figma.

Environment Variables Required:
  GITHUB_TOKEN    - GitHub personal access token with repo permissions
  FIGMA_FILE_KEY  - Figma file key (optional, for PR descriptions)

Commands:
  create <file>    Create a PR with updated tokens
  info            Show repository information  
  list            List recent pull requests
  help            Show this help message
      `);
      break;
  }
}

// Export for use as module
export { GitHubPRManager };

// Run CLI if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

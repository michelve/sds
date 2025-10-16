#!/usr/bin/env node

import { readFileSync } from 'fs';
import { TokenPRManager } from './figma-pr.mjs';

async function testPR() {
  try {
    console.log('🧪 Testing GitHub PR Integration...\n');

    // Read current tokens
    const tokensData = JSON.parse(readFileSync('../../scripts/tokens/tokens.json', 'utf8'));

    // Add a test update marker
    tokensData['_github_pr_test'] = {
      timestamp: new Date().toISOString(),
      note: "Test update from GitHub PR integration - this proves the workflow works!",
      version: "1.0.0"
    };

    console.log('📝 Modified tokens.json with test marker');
    console.log('🚀 Creating pull request...\n');

    // Create PR
    const manager = new TokenPRManager();
    const result = await manager.createPullRequest(tokensData);

    if (result.success) {
      console.log('\n✅ SUCCESS! Pull request created:');
      console.log(`   🔗 URL: ${result.prUrl}`);
      console.log(`   🌿 Branch: ${result.branchName}`);
      console.log(`   📊 PR #${result.prNumber}`);
      console.log('\n🎉 GitHub PR integration is working perfectly!');
    } else {
      console.log(`\n❌ Failed: ${result.error}`);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

testPR();


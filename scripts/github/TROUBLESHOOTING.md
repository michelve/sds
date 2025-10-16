# GitHub PR Integration Troubleshooting

## ❌ Current Issue: "Not Found" Error When Creating PRs

### Problem Diagnosis

Your GitHub token **does not have the required `repo` scope** to create pull requests.

**Current Token Scopes:**
```
✅ admin:repo_hook
✅ audit_log
✅ codespace
✅ gist
✅ notifications
✅ project
✅ read:user
✅ repo:status          ⚠️ Partial repo access (NOT enough)
✅ repo_deployment      ⚠️ Partial repo access (NOT enough)
✅ write:discussion
```

**Required Scopes for PR Creation:**
```
❌ repo (Full control of private repositories)
   ├─ repo:status       ✅ You have this
   ├─ repo_deployment   ✅ You have this  
   ├─ public_repo       ❌ Missing - needed for PRs on public repos
   ├─ repo:invite       ❌ Missing
   └─ security_events   ❌ Missing
```

## 🔧 Solution: Update Your GitHub Token

### Step 1: Create a New GitHub Personal Access Token

1. Go to [GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)

2. Click "Generate new token" → "Generate new token (classic)"

3. **Token Details:**
   - **Note**: `SDS Design Tokens PR Automation`
   - **Expiration**: Choose your preferred expiration (90 days recommended)

4. **Select Scopes** - Check these boxes:
   - ✅ **`repo`** ← **CRITICAL: Check this one!**
     - Full control of private repositories
     - This includes: repo:status, repo_deployment, public_repo, repo:invite, security_events
   - ✅ `workflow` (if you want to update GitHub Actions)

5. Click "Generate token"

6. **IMPORTANT**: Copy the token immediately (you won't see it again!)

### Step 2: Update Your .env File

1. Open your `.env` file:
   ```bash
   code .env
   ```

2. Replace the old `GITHUB_TOKEN` value with your new token:
   ```bash
   GITHUB_TOKEN=ghp_YOUR_NEW_TOKEN_HERE
   ```

3. Save the file

### Step 3: Test the Integration

Run these commands to verify everything works:

```bash
# Test repository access
npm run github:pr:info

# Should show:
# ✅ Repository Information:
#    Name: michelve/sds
#    Description: Simple Design System
#    ...
```

### Step 4: Try Creating a PR

```bash
# Run the Figma PR script
npm run figma:pr

# Paste your tokens JSON (or test with a small JSON object)
# Press Enter twice
# Should create a PR successfully!
```

## 📋 Token Scope Quick Reference

| Scope | Purpose | Required for PR? |
|-------|---------|------------------|
| `repo` | Full repository control | ✅ **YES** |
| `public_repo` | Access public repositories | ✅ **YES** (included in `repo`) |
| `repo:status` | Access commit status | ⚠️ Not enough alone |
| `repo_deployment` | Access deployment status | ⚠️ Not enough alone |
| `workflow` | Update GitHub Action workflows | ❌ Optional |

## 🔒 Security Best Practices

1. **Use Fine-Grained Tokens** (Recommended for better security):
   - Go to [GitHub Settings → Developer settings → Personal access tokens → Fine-grained tokens](https://github.com/settings/personal-access-tokens/new)
   - Select specific repositories (only `michelve/sds`)
   - Grant only `Contents: Read and write` and `Pull requests: Read and write`
   - More secure than classic tokens

2. **Set Token Expiration**:
   - Don't use "No expiration"
   - Recommended: 90 days
   - Set a calendar reminder to regenerate

3. **Limit Token Scope**:
   - Only grant permissions you need
   - For this project: `repo` scope is sufficient

4. **Store Securely**:
   - Never commit `.env` file to git (it's in `.gitignore`)
   - Never share your token
   - Regenerate if compromised

## 🐛 Common Errors and Solutions

### Error: "Not Found"
**Cause**: Missing `repo` scope  
**Solution**: Follow steps above to regenerate token with `repo` scope

### Error: "Bad credentials"
**Cause**: Invalid or expired token  
**Solution**: Generate a new token and update `.env`

### Error: "Resource not accessible by personal access token"
**Cause**: Token doesn't have required permissions  
**Solution**: Regenerate with correct scopes

### Error: "validation failed"
**Cause**: Branch doesn't exist or base/head branches are wrong  
**Solution**: Check your branch names in the script

## 📞 Still Having Issues?

1. **Verify Token Scopes**:
   ```bash
   curl -I -H "Authorization: token YOUR_TOKEN" https://api.github.com/user | grep x-oauth-scopes
   ```
   Should include `repo` in the output

2. **Check Repository Access**:
   ```bash
   curl -H "Authorization: token YOUR_TOKEN" https://api.github.com/repos/michelve/sds
   ```
   Should return repository details

3. **Test PR Creation**:
   ```bash
   npm run figma:pr
   ```
   Should work without "Not Found" error

## ✅ Success Checklist

- [ ] Created new GitHub token with `repo` scope
- [ ] Updated `.env` file with new token
- [ ] Ran `npm run github:pr:info` successfully
- [ ] Can see repository information
- [ ] No "Not Found" errors
- [ ] Ready to create PRs from Figma tokens!

---

**Last Updated**: 2025-10-16  
**Script Version**: 1.0.0


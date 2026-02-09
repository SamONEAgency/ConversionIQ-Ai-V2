# Netlify Deployment Guide for ConversionIQ

This guide will walk you through deploying your Next.js application to Netlify.

## Prerequisites

1. A Netlify account (sign up at https://www.netlify.com if you don't have one)
2. Your code in a Git repository (GitHub, GitLab, or Bitbucket)

## Option 1: Deploy via Netlify UI (Recommended for First Time)

### Step 1: Push Your Code to Git

1. Make sure your code is committed to a Git repository:
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

### Step 2: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your repository (`conversioniq-homepage` or the name of your repo)

### Step 3: Configure Build Settings

Netlify should auto-detect Next.js, but verify these settings:

- **Base directory:** Leave empty (or `conversioniq-homepage` if your repo root is one level up)
- **Build command:** `npm run build`
- **Publish directory:** `.next` (Netlify's Next.js plugin handles this automatically)

**Important:** Make sure the **"Next.js Runtime"** option is enabled (it should be by default with the `@netlify/plugin-nextjs` plugin).

### Step 4: Deploy

1. Click **"Deploy site"**
2. Netlify will start building your site
3. Wait for the build to complete (usually 2-5 minutes)
4. Your site will be live at a URL like `https://random-name-123.netlify.app`

### Step 5: Set Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to connect your domain

---

## Option 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This will open your browser to authenticate.

### Step 3: Initialize Site

```bash
cd conversioniq-homepage
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name (or leave blank for auto-generated)
- Build command: `npm run build`
- Directory to deploy: `.next` (or leave blank, Netlify handles it)

### Step 4: Deploy

```bash
netlify deploy --prod
```

For a draft deployment first (to test):
```bash
netlify deploy
```

---

## Environment Variables (If Needed)

If your app uses environment variables:

1. Go to **Site settings** → **Environment variables**
2. Add any variables your app needs (e.g., API keys, database URLs)
3. Redeploy after adding variables

---

## Build Settings Summary

- **Framework:** Next.js
- **Build command:** `npm run build`
- **Publish directory:** `.next` (handled by Netlify plugin)
- **Node version:** 20 (specified in netlify.toml)

---

## Troubleshooting

### Build Fails

1. Check the build logs in Netlify dashboard
2. Common issues:
   - Missing dependencies: Make sure `package.json` has all dependencies
   - TypeScript errors: Fix any TS errors locally first
   - Memory issues: Netlify provides 1.5GB by default (usually sufficient)

### Site Works Locally But Not on Netlify

1. Check that all file paths are correct (case-sensitive)
2. Verify environment variables are set
3. Check the build logs for specific errors

### Next.js Image Optimization

Netlify automatically handles Next.js Image Optimization. No additional configuration needed.

---

## Continuous Deployment

Once connected to Git, Netlify will automatically:
- Deploy when you push to your main branch
- Create preview deployments for pull requests
- Show build status in your Git provider

---

## Need Help?

- Netlify Docs: https://docs.netlify.com
- Next.js on Netlify: https://docs.netlify.com/integrations/frameworks/nextjs/
- Netlify Support: https://www.netlify.com/support/


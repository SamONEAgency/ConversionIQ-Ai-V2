# GitHub Setup Guide for ConversionIQ

This guide will help you set up GitHub and push your code so you can deploy to Netlify.

## Step 1: Create a GitHub Account (if you don't have one)

1. Go to [https://github.com](https://github.com)
2. Click "Sign up" in the top right
3. Follow the prompts to create your account
4. Verify your email address

## Step 2: Create a New Repository on GitHub

1. Once logged in, click the **"+"** icon in the top right → **"New repository"**
2. Fill in the details:
   - **Repository name:** `conversioniq-homepage` (or any name you prefer)
   - **Description:** "ConversionIQ marketing website"
   - **Visibility:** Choose **Private** (recommended) or **Public**
   - **DO NOT** check "Initialize this repository with a README" (we already have code)
   - **DO NOT** add .gitignore or license (we already have these)
3. Click **"Create repository"**

## Step 3: Connect Your Local Code to GitHub

After creating the repository, GitHub will show you instructions. Here's what to do:

### Option A: If you haven't committed your recent changes yet

Run these commands in your terminal (from the `conversioniq-homepage` directory):

```bash
# Navigate to your project
cd "/Users/stephanaobrien/Library/CloudStorage/GoogleDrive-stephan.obrien@oneagency.com/Shared drives/Design Team Shared Drive ONE Agency/ConversionIQ/Website Code Base/conversioniq-homepage"

# Add all your files
git add .

# Commit your changes
git commit -m "Initial commit - ready for Netlify deployment"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/conversioniq-homepage.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: If you want to use SSH instead of HTTPS

1. First, set up SSH keys (if you haven't):
   ```bash
   # Check if you have SSH keys
   ls -al ~/.ssh
   
   # If no keys exist, generate one:
   ssh-keygen -t ed25519 -C "your_email@example.com"
   # Press Enter to accept default location
   # Optionally set a passphrase
   
   # Start the ssh-agent
   eval "$(ssh-agent -s)"
   
   # Add your SSH key
   ssh-add ~/.ssh/id_ed25519
   
   # Copy your public key
   cat ~/.ssh/id_ed25519.pub
   # Copy the output
   ```

2. Add SSH key to GitHub:
   - Go to GitHub → Settings → SSH and GPG keys
   - Click "New SSH key"
   - Paste your public key
   - Save

3. Then use SSH URL instead:
   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/conversioniq-homepage.git
   git push -u origin main
   ```

## Step 4: Verify Your Code is on GitHub

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/conversioniq-homepage`
2. You should see all your files there
3. Check that `netlify.toml` is included

## Step 5: Connect to Netlify

Now that your code is on GitHub, you can connect it to Netlify:

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select your repository: `conversioniq-homepage`
6. Netlify will auto-detect Next.js settings
7. Click **"Deploy site"**

## Troubleshooting

### Authentication Issues

If you get authentication errors when pushing:

**For HTTPS:**
- GitHub now requires a Personal Access Token instead of password
- Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token with `repo` permissions
- Use this token as your password when pushing

**For SSH:**
- Make sure your SSH key is added to GitHub
- Test connection: `ssh -T git@github.com`

### Large Files

If you have large files (videos, images), consider:
- Using Git LFS: `git lfs install` then `git lfs track "*.mp4"`
- Or add them to `.gitignore` and host them elsewhere

### Permission Denied

If you get permission errors:
- Make sure you're the owner of the repository
- Or you've been added as a collaborator

## Next Steps

Once your code is on GitHub and connected to Netlify:
- Every push to `main` branch will trigger a new deployment
- Pull requests will get preview deployments
- You can set up custom domains in Netlify


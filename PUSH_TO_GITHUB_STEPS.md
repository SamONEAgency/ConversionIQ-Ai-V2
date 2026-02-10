# Step-by-Step: Push Your Code to GitHub

Follow these exact steps in order.

## STEP 1: Create a GitHub Personal Access Token

1. **Open your web browser**
2. **Go to:** https://github.com
3. **Make sure you're logged in** (top right should show your profile picture/name)
4. **Click your profile picture** (top right corner)
5. **Click "Settings"** (bottom of the dropdown menu)
6. **Scroll down** on the left sidebar until you see "Developer settings"
7. **Click "Developer settings"**
8. **Click "Personal access tokens"** (in the left sidebar)
9. **Click "Tokens (classic)"** (under Personal access tokens)
10. **Click the green button "Generate new token"** → **"Generate new token (classic)"**
11. **Fill in the form:**
    - **Note:** Type `Netlify Deployment` (or any name you want)
    - **Expiration:** Choose "90 days" or "No expiration" (your choice)
    - **Select scopes:** Check the box next to **"repo"** (this will check all repo permissions)
12. **Scroll to the bottom** and click the green **"Generate token"** button
13. **IMPORTANT:** Copy the token immediately! It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
    - You won't be able to see it again
    - Paste it somewhere safe (like a text file) temporarily

## STEP 2: Push Your Code Using the Token

1. **Open Terminal** (on Mac: Press Cmd + Space, type "Terminal", press Enter)

2. **Copy and paste this exact command** (one line at a time):

```bash
cd "/Users/stephanaobrien/Library/CloudStorage/GoogleDrive-stephan.obrien@oneagency.com/Shared drives/Design Team Shared Drive ONE Agency/ConversionIQ/Website Code Base/conversioniq-homepage"
```

Press Enter

3. **Copy and paste this command:**

```bash
git push -u origin main
```

Press Enter

4. **When it asks for "Username":**
   - Type: `SamONEAgency`
   - Press Enter

5. **When it asks for "Password":**
   - **DO NOT type your GitHub password**
   - **Paste the token you copied in Step 1** (the `ghp_xxxxxxxxxxxx` one)
   - Press Enter

6. **Wait** - it should say something like "Writing objects" and show progress

7. **When it's done**, you should see: `Branch 'main' set up to track remote branch 'main' from 'origin'`

## STEP 3: Verify It Worked

1. **Go to:** https://github.com/SamONEAgency/ConversionIQ-Ai-V2
2. **You should see all your files** (not "This repository is empty")
3. **Look for:** `netlify.toml`, `package.json`, `app/` folder, etc.

## STEP 4: Connect to Netlify

1. **Go to:** https://app.netlify.com
2. **If you don't have an account:**
   - Click "Sign up" (top right)
   - Choose "Sign up with GitHub"
   - Authorize Netlify
3. **If you already have an account:**
   - Click "Log in"
   - Log in with your email/password

4. **Once logged in:**
   - Click the big **"Add new site"** button (or "Add a new site")
   - Click **"Import an existing project"**

5. **Connect to Git:**
   - Click **"GitHub"** (or the GitHub logo)
   - If asked, click **"Authorize Netlify"** or **"Configure Netlify on GitHub"**
   - You might need to click "Install" or "Authorize" again
   - **Select your account** if asked (SamONEAgency)

6. **Select your repository:**
   - You should see a list of repositories
   - Find and click **"ConversionIQ-Ai-V2"**

7. **Configure build settings:**
   - Netlify should auto-detect Next.js
   - **Build command:** Should say `npm run build` (leave it)
   - **Publish directory:** Leave empty (Netlify handles this)
   - **Base directory:** Leave empty (unless your repo is in a subfolder)

8. **Click the green "Deploy site" button**

9. **Wait 2-5 minutes** - You'll see build progress

10. **When done:**
    - You'll see "Site is live"
    - Your site URL will be something like: `https://random-name-123.netlify.app`
    - Click the URL to see your site!

## Troubleshooting

### If push fails with "authentication failed":
- Make sure you used the TOKEN (ghp_xxx), not your password
- Make sure the token has "repo" permissions checked
- Try generating a new token

### If Netlify can't find your repo:
- Make sure you authorized Netlify to access GitHub
- Try disconnecting and reconnecting GitHub in Netlify settings

### If build fails on Netlify:
- Check the build logs in Netlify dashboard
- Look for error messages
- Common issues: missing dependencies, TypeScript errors


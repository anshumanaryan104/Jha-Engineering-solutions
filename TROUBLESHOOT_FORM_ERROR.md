# Troubleshooting: "Form is not configured" Error

## Problem
You're seeing "Form is not configured. Please contact the administrator." even though:
- ✅ Environment variable is set in AWS Amplify
- ✅ Deployment status is successful

## Root Cause
The environment variable might not be accessible at runtime, or there's a configuration issue in Amplify.

## Solution Steps

### Step 1: Verify Environment Variable in Amplify

1. Go to **AWS Amplify Console** → Your App
2. Click **"Environment variables"** (left sidebar)
3. **Check these details:**
   - Variable name: Must be exactly `GOOGLE_APPS_SCRIPT_URL` (uppercase, no spaces)
   - Variable value: Should be your complete Google Apps Script URL
   - **Branch**: Make sure it's set for the correct branch (usually `main` or `master`)

### Step 2: Delete and Re-add the Variable

Sometimes Amplify caches the old value. Try this:

1. **Delete the variable:**
   - In Environment Variables, find `GOOGLE_APPS_SCRIPT_URL`
   - Click the delete/trash icon
   - Confirm deletion

2. **Add it again:**
   - Click **"Add variable"**
   - Key: `GOOGLE_APPS_SCRIPT_URL` (exact, case-sensitive)
   - Value: Your Google Apps Script URL (copy fresh from Google Apps Script)
   - Click **"Save"**

3. **Verify the URL:**
   - Go to [Google Apps Script](https://script.google.com/)
   - Open your project
   - Click **"Deploy"** → **"Manage deployments"**
   - Click the edit icon (pencil)
   - Copy the **"Web app URL"** again
   - Make sure it ends with `/exec`
   - Make sure it's set to **"Anyone"** access

### Step 3: Clear Build Cache and Redeploy

1. **In Amplify Console:**
   - Go to **"Deployments"** tab
   - Find the latest deployment
   - Click the **three dots (⋮)** menu
   - Select **"Redeploy this version"**
   - **IMPORTANT**: Check the box for **"Clear cache and redeploy"** if available
   - Click **"Redeploy"**

2. **Wait for deployment to complete** (3-5 minutes)

### Step 4: Check Build Logs

After redeployment, check if the variable is being read:

1. Go to **"Deployments"** tab
2. Click on the latest deployment
3. Click on the **build** step
4. Look for the log line: `"GOOGLE_APPS_SCRIPT_URL is set: YES"`
5. If it says "NO", the variable is not being passed to the build

### Step 5: Verify Variable is Set for Correct Branch

1. In **Environment Variables**, check the **"Branch"** dropdown
2. Make sure it's set to the branch you're deploying (usually `main`)
3. If you have multiple branches, you might need to set it for each branch

### Step 6: Test the Form Again

1. Wait for deployment to complete
2. Visit your live website
3. Go to Contact page
4. Submit the form
5. Check if it works

## Alternative: Check CloudWatch Logs

If the issue persists, check runtime logs:

1. In Amplify Console, go to **"Monitoring"** or **"Logs"**
2. Look for any errors related to `GOOGLE_APPS_SCRIPT_URL`
3. Check if the variable is undefined in the logs

## Common Issues and Fixes

### Issue 1: Variable Not Available at Runtime
**Fix**: Make sure you redeployed AFTER adding the variable. Environment variables only take effect after redeployment.

### Issue 2: Wrong Branch
**Fix**: Check that the environment variable is set for the branch you're deploying (usually `main`).

### Issue 3: Cached Build
**Fix**: Clear the build cache and redeploy (Step 3 above).

### Issue 4: Variable Name Typo
**Fix**: Double-check the variable name is exactly `GOOGLE_APPS_SCRIPT_URL` (all uppercase, underscores, no spaces).

### Issue 5: URL Format Issue
**Fix**: Make sure the URL:
- Starts with `https://script.google.com/macros/s/`
- Ends with `/exec`
- Has no extra spaces or characters
- Is the deployment URL, not the editor URL

## Quick Verification Checklist

- [ ] Variable name is exactly: `GOOGLE_APPS_SCRIPT_URL`
- [ ] Variable value is the complete Google Apps Script URL
- [ ] Variable is set for the correct branch (main/master)
- [ ] Variable was added/updated AFTER the last deployment
- [ ] You redeployed AFTER adding/updating the variable
- [ ] Build logs show "GOOGLE_APPS_SCRIPT_URL is set: YES"
- [ ] Google Apps Script is deployed with "Anyone" access
- [ ] Google Apps Script URL ends with `/exec`

## Still Not Working?

If none of the above works:

1. **Try a different variable name** (temporarily):
   - Add a new variable: `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`
   - Set it to the same URL
   - Redeploy
   - The code will try this as a fallback

2. **Check Amplify Build Settings**:
   - Go to **"Build settings"**
   - Make sure environment variables are being passed correctly
   - Check if there are any build-time restrictions

3. **Contact AWS Support**:
   - There might be an Amplify-specific issue
   - Provide them with your app ID and the error

## Test Your Google Apps Script URL

Before troubleshooting further, test if your Google Apps Script URL works:

1. Open the URL in a browser
2. You should see a simple response (not an error)
3. If it shows an error, fix the Google Apps Script first

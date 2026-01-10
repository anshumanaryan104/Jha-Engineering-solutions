# Fix "Form is not configured" Error on AWS

## Problem
The contact form is showing: **"Form is not configured. Please contact the administrator."**

This means the `GOOGLE_APPS_SCRIPT_URL` environment variable is not set in your AWS Amplify deployment.

## Solution: Add Environment Variable in AWS Amplify

### Step 1: Get Your Google Apps Script URL

1. Go to [Google Apps Script](https://script.google.com/)
2. Open your project (the one you created for the contact form)
3. Click **"Deploy"** → **"Manage deployments"**
4. Click the **edit icon (pencil)** next to your active deployment
5. Copy the **"Web app URL"** - it should look like:
   ```
   https://script.google.com/macros/s/AKfycbybP-ZW3kg.../exec
   ```

### Step 2: Add Environment Variable in AWS Amplify

1. **Go to AWS Amplify Console**
   - Visit: https://console.aws.amazon.com/amplify/
   - Sign in to your AWS account

2. **Select Your App**
   - Click on your app name (e.g., "jha-engineering-solutions")

3. **Navigate to Environment Variables**
   - In the left sidebar, find **"Environment variables"** (under "App settings")
   - Click on **"Environment variables"**

4. **Add the Variable**
   - Click **"Manage variables"** or **"Add variable"** button
   - In the form:
     - **Key**: `GOOGLE_APPS_SCRIPT_URL`
     - **Value**: Paste your Google Apps Script URL (from Step 1)
   - **Important**: 
     - The key name must be **exactly** `GOOGLE_APPS_SCRIPT_URL` (case-sensitive)
     - Make sure there are no extra spaces
   - Click **"Save"**

### Step 3: Redeploy Your App

**IMPORTANT**: After adding the environment variable, you MUST redeploy for it to take effect.

**Option A: Redeploy Current Version (Recommended)**
1. Go to the **"Deployments"** tab (or main app page)
2. Find the latest deployment
3. Click the **three dots (⋮)** menu next to the deployment
4. Select **"Redeploy this version"**
5. Wait for the deployment to complete (usually 3-5 minutes)

**Option B: Trigger New Deployment**
1. Make a small change to your code (or just add a comment)
2. Commit and push to your GitHub repository
3. Amplify will automatically detect the change and redeploy

### Step 4: Verify It Works

1. Wait for the deployment to complete
2. Visit your website
3. Go to the Contact page
4. Try submitting the form
5. The error message should be gone, and you should see a success message after submission

## Troubleshooting

### Still Seeing the Error?

1. **Check Variable Name**
   - Go back to Environment Variables in Amplify
   - Verify the key is exactly: `GOOGLE_APPS_SCRIPT_URL`
   - No typos, no extra spaces, case-sensitive

2. **Check Variable Value**
   - Make sure the URL is complete
   - Should start with `https://script.google.com/macros/s/`
   - Should end with `/exec`
   - No extra spaces before or after

3. **Verify Redeployment**
   - Make sure you redeployed after adding the variable
   - Check the deployment logs to ensure it completed successfully
   - Environment variables only take effect after redeployment

4. **Check Google Apps Script**
   - Verify your Google Apps Script is still deployed
   - Make sure it's set to "Anyone" access
   - Test the URL directly in a browser (should show a simple response)

5. **Check Build Logs**
   - In Amplify Console, go to the latest deployment
   - Click on the build to see logs
   - Look for any errors related to environment variables

### Verify Environment Variable is Set

To verify the variable is accessible:

1. In Amplify Console, go to your app
2. Click **"Environment variables"**
3. You should see `GOOGLE_APPS_SCRIPT_URL` listed with your URL as the value
4. If it's not there, add it again and redeploy

## Quick Checklist

- [ ] Google Apps Script URL copied correctly
- [ ] Environment variable added in AWS Amplify
- [ ] Variable name is exactly: `GOOGLE_APPS_SCRIPT_URL`
- [ ] Variable value is the complete Google Apps Script URL
- [ ] App has been redeployed after adding the variable
- [ ] Deployment completed successfully
- [ ] Tested the form on the live website

## Still Need Help?

If you're still having issues:

1. **Double-check the Google Apps Script URL**
   - Make sure it's the correct deployment
   - Verify it's accessible (try opening it in a browser)

2. **Check AWS Amplify Logs**
   - Look for any errors in the build or runtime logs
   - Check if the environment variable is being read correctly

3. **Verify Google Apps Script is Working**
   - Test the script URL directly
   - Make sure your Google Sheet is set up correctly
   - Check that the script has the right permissions

## Common Mistakes

❌ **Wrong variable name**: `google_apps_script_url` (should be uppercase)
❌ **Extra spaces**: `GOOGLE_APPS_SCRIPT_URL ` (trailing space)
❌ **Forgot to redeploy**: Variable added but app not redeployed
❌ **Wrong URL**: Using the script editor URL instead of deployment URL
❌ **Incomplete URL**: Missing `/exec` at the end

✅ **Correct**: `GOOGLE_APPS_SCRIPT_URL` = `https://script.google.com/macros/s/AKfycbybP-ZW3kg.../exec`

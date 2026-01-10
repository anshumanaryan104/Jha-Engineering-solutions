# Fix: Environment Variable Not Accessible in AWS Amplify

## Problem
Environment variable `GOOGLE_APPS_SCRIPT_URL` is set for all branches in Amplify, but the form still shows "Form is not configured" error.

## Root Cause
AWS Amplify might not be passing environment variables to the Next.js runtime environment correctly, or there's a configuration issue.

## Solution: Verify and Fix

### Step 1: Check Amplify Environment Variable Configuration

1. **Go to AWS Amplify Console** → Your App
2. **Click "Environment variables"**
3. **Verify these details:**
   - Variable name: `GOOGLE_APPS_SCRIPT_URL` (exact match, case-sensitive)
   - Variable value: Complete Google Apps Script URL
   - **Scope**: Should be "All branches" or your specific branch
   - **No extra spaces** before or after the value

### Step 2: Check Amplify Build Settings

1. In Amplify Console, go to **"Build settings"**
2. Look for **"Environment variables"** section
3. Make sure `GOOGLE_APPS_SCRIPT_URL` is listed there
4. If it's not in Build settings, it might only be in Runtime settings

### Step 3: Check CloudWatch Logs

After the next form submission, check the logs:

1. In Amplify Console, go to **"Monitoring"** or **"Logs"**
2. Look for the error message: `"=== FORM CONFIGURATION ERROR ==="`
3. Check what environment variables are available
4. This will tell us if the variable is being passed to the runtime

### Step 4: Try Adding Variable to Build Settings

Sometimes Amplify needs the variable in both places:

1. Go to **"Build settings"** → **"Environment variables"**
2. Add the variable there as well:
   - Key: `GOOGLE_APPS_SCRIPT_URL`
   - Value: Your Google Apps Script URL
3. Save and redeploy

### Step 5: Verify Variable Format

Make sure your Google Apps Script URL:
- ✅ Starts with `https://script.google.com/macros/s/`
- ✅ Ends with `/exec`
- ✅ Has no spaces or line breaks
- ✅ Is the deployment URL (not the editor URL)

### Step 6: Test with a Simple Check

1. After redeploying, submit the form
2. Check CloudWatch logs for the debug output
3. Look for: `"GOOGLE_APPS_SCRIPT_URL is set, length: XX"`
4. If you see this, the variable is accessible
5. If you see the error log, check what variables are available

## Alternative Solution: Use NEXT_PUBLIC_ Prefix

If the above doesn't work, try using `NEXT_PUBLIC_` prefix (though this exposes it to client-side, which we want to avoid for security):

1. In Amplify, add a new variable:
   - Key: `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`
   - Value: Your Google Apps Script URL
2. Keep the original `GOOGLE_APPS_SCRIPT_URL` as well
3. Redeploy
4. The code will try both

## Check Build Logs

After redeployment, check the build logs:

1. Go to **"Deployments"** tab
2. Click on the latest deployment
3. Click on the **build** step
4. Look for: `"GOOGLE_APPS_SCRIPT_URL is set: YES"`
5. If it says "NO", the variable isn't being passed to the build

## Most Common Fix

**Delete and re-add the variable, then clear cache and redeploy:**

1. Delete `GOOGLE_APPS_SCRIPT_URL` from Environment Variables
2. Wait 30 seconds
3. Add it again with the exact same name and value
4. Go to Deployments → Latest deployment → Three dots → **"Redeploy this version"**
5. **Check "Clear cache"** if available
6. Wait for deployment to complete
7. Test the form

## Still Not Working?

If none of the above works, the issue might be:

1. **Amplify Region Issue**: Make sure your Amplify app and environment variables are in the same AWS region
2. **Next.js Version**: Some Next.js versions have issues with environment variables in Amplify
3. **Amplify Service Issue**: There might be a temporary issue with Amplify

**Next Steps:**
1. Check CloudWatch logs after form submission
2. Share the log output showing what environment variables are available
3. We can then determine if it's an Amplify configuration issue or a code issue

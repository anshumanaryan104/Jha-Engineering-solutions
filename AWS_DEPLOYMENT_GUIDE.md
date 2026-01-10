# AWS Deployment Guide for JHA Engineering Solutions

This guide will help you deploy your Next.js application to AWS using **AWS Amplify**, which is the recommended and easiest way to host Next.js applications on AWS.

## Prerequisites

1. **AWS Account**: Sign up at [aws.amazon.com](https://aws.amazon.com) if you don't have one
2. **GitHub Account**: Your code should be in a GitHub repository (recommended) or use AWS CodeCommit
3. **Google Apps Script URL**: Make sure you have your Google Apps Script web app URL ready (from `GOOGLE_APPS_SCRIPT_SETUP.md`)

## Option 1: Deploy via AWS Amplify Console (Recommended)

### Step 1: Push Code to GitHub

1. Initialize git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click **"New app"** → **"Host web app"**
3. Select **"GitHub"** as your source
4. Authorize AWS Amplify to access your GitHub account
5. Select your repository and branch (usually `main`)
6. Click **"Next"**

### Step 3: Configure Build Settings

AWS Amplify will auto-detect Next.js. The build settings should be:

- **App name**: `jha-engineering-solutions` (or your preferred name)
- **Environment**: `amplify.yml` (this file is already created in your project)
- **Build settings**: Should auto-detect from `amplify.yml`

If you need to manually configure, use these settings:

**Build settings:**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### Step 4: Configure Environment Variables

1. In the Amplify Console, go to your app
2. Click **"Environment variables"** in the left sidebar
3. Add the following environment variable:
   - **Key**: `GOOGLE_APPS_SCRIPT_URL`
   - **Value**: Your Google Apps Script web app URL (from `GOOGLE_APPS_SCRIPT_SETUP.md`)
   - Click **"Save"**

### Step 5: Deploy

1. Click **"Save and deploy"**
2. AWS Amplify will:
   - Install dependencies
   - Build your Next.js application
   - Deploy to a global CDN
3. Wait for the deployment to complete (usually 5-10 minutes)

### Step 6: Access Your Application

Once deployment is complete, you'll get a URL like:
```
https://main.xxxxxxxxxxxxx.amplifyapp.com
```

You can also set up a custom domain:
1. Go to **"Domain management"** in Amplify Console
2. Click **"Add domain"**
3. Enter your domain name
4. Follow the DNS configuration instructions

## Option 2: Deploy via AWS CLI

If you prefer using the command line:

### Step 1: Install AWS CLI

Download and install from: [aws.amazon.com/cli](https://aws.amazon.com/cli/)

### Step 2: Configure AWS CLI

```bash
aws configure
```

Enter your:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., `us-east-1`)
- Default output format (e.g., `json`)

### Step 3: Install Amplify CLI

```bash
npm install -g @aws-amplify/cli
```

### Step 4: Initialize Amplify

```bash
amplify init
```

Follow the prompts:
- Project name: `jha-engineering-solutions`
- Environment: `dev` (or `production`)
- Default editor: Your preferred editor
- App type: `javascript`
- Framework: `react`
- Source directory: `.`
- Distribution directory: `.next`
- Build command: `npm run build`
- Start command: `npm run start`

### Step 5: Add Hosting

```bash
amplify add hosting
```

Select:
- Hosting with Amplify Console
- Manual deployment

### Step 6: Publish

```bash
amplify publish
```

## Environment Variables Setup

Make sure to set the following environment variable in AWS Amplify:

1. Go to **AWS Amplify Console** → Your App → **Environment variables**
2. Add:
   ```
   GOOGLE_APPS_SCRIPT_URL = https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

## Post-Deployment Checklist

- [ ] Verify the site loads correctly
- [ ] Test navigation between pages
- [ ] Test the contact form submission
- [ ] Verify Google Sheets receives form submissions
- [ ] Check that all images load correctly
- [ ] Test on mobile devices
- [ ] Set up custom domain (optional)
- [ ] Configure SSL certificate (automatic with Amplify)

## Custom Domain Setup

1. In Amplify Console, go to **"Domain management"**
2. Click **"Add domain"**
3. Enter your domain (e.g., `jhaengineering.com`)
4. AWS will provide DNS records to add to your domain registrar
5. Add the CNAME records to your DNS provider
6. Wait for DNS propagation (can take up to 48 hours)
7. SSL certificate is automatically provisioned by AWS

## Troubleshooting

### Build Fails

- Check build logs in Amplify Console
- Ensure `package.json` has all dependencies
- Verify Node.js version (Amplify uses Node 18 by default)

### Environment Variables Not Working

- Make sure variable name matches exactly: `GOOGLE_APPS_SCRIPT_URL`
- Redeploy after adding environment variables
- Check server-side code uses `process.env.GOOGLE_APPS_SCRIPT_URL`

### Images Not Loading

- Verify all images are in the `public/` folder
- Check image paths in code (should start with `/`)
- Clear browser cache

### Contact Form Not Working

- Verify `GOOGLE_APPS_SCRIPT_URL` is set correctly
- Check Google Apps Script is deployed as web app
- Ensure Google Apps Script has "Anyone" access
- Check browser console for errors

## Cost Estimation

**AWS Amplify Free Tier:**
- 1,000 build minutes per month
- 15 GB storage
- 5 GB served per month

**Beyond Free Tier:**
- Build minutes: $0.01 per minute
- Storage: $0.023 per GB/month
- Data transfer: $0.15 per GB

For a small business website, you'll likely stay within the free tier.

## Additional Resources

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [AWS Amplify Pricing](https://aws.amazon.com/amplify/pricing/)

## Support

If you encounter issues:
1. Check AWS Amplify build logs
2. Review Next.js build output
3. Check AWS CloudWatch logs (if enabled)
4. Verify environment variables are set correctly

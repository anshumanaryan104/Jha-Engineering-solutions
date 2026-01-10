# Quick Start: Deploy to AWS Amplify

## Fastest Path to Deployment (5 minutes)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Ready for AWS deployment"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Deploy on AWS Amplify

1. Go to: https://console.aws.amazon.com/amplify/
2. Click **"New app"** → **"Host web app"**
3. Connect to **GitHub** and select your repository
4. Click **"Next"** (build settings auto-detected)
5. Click **"Save and deploy"**

### 3. Add Environment Variable

After first deployment:
1. Go to **Environment variables** in Amplify Console
2. Add: `GOOGLE_APPS_SCRIPT_URL` = `your-google-script-url`
3. Click **"Redeploy this version"**

### 4. Done! 🎉

Your site will be live at: `https://main.xxxxx.amplifyapp.com`

---

**Need more details?** See `AWS_DEPLOYMENT_GUIDE.md` for complete instructions.

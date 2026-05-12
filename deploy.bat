@echo off
echo 🚀 Portfolio Website Deployment Script
echo ======================================

echo Step 1: Installing Vercel CLI...
npm install -g vercel

echo.
echo Step 2: Logging into Vercel...
vercel login

echo.
echo Step 3: Deploying Frontend...
vercel --prod

echo.
echo Step 4: Deploying Backend...
cd server
vercel --prod

echo.
echo ✅ Deployment complete!
echo.
echo Next steps:
echo 1. Set environment variables in Vercel dashboard
echo 2. Update VITE_API_URL to point to your backend
echo 3. Test your forms
echo.
pause
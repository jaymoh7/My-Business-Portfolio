# 🚀 Complete Deployment Guide

This guide covers multiple deployment options for your portfolio website with backend.

## 📋 Quick Overview

Your project has:
- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express + MongoDB
- **Forms**: Contact form and audit request form
- **Email**: Gmail/SendGrid integration

## 🎯 Deployment Options

### Option 1: Vercel (Recommended for Frontend + Backend)

#### 1.1 Frontend Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy frontend
vercel --prod
```

#### 1.2 Backend Deployment
```bash
# In server/ directory
vercel --prod
```

#### 1.3 Environment Variables
Set these in Vercel dashboard:
```
# Frontend
VITE_API_URL=https://your-backend.vercel.app

# Backend
MONGODB_URI=mongodb+srv://...
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

### Option 2: Netlify (Frontend) + Railway (Backend)

#### 2.1 Frontend on Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

#### 2.2 Backend on Railway
1. Go to [Railway.app](https://railway.app)
2. Connect GitHub repo
3. Set environment variables
4. Deploy

### Option 3: DigitalOcean App Platform

#### 3.1 Create App Spec
Create `app.yaml` in root:
```yaml
name: portfolio-app
services:
- name: frontend
  source_dir: /
  github:
    repo: your-username/your-repo
    branch: main
  run_command: npm run build
  build_command: npm install
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: VITE_API_URL
    value: ${backend.PUBLIC_URL}

- name: backend
  source_dir: server
  github:
    repo: your-username/your-repo
    branch: main
  run_command: npm start
  build_command: npm install
  instance_count: 1
  instance_size_slug: basic-xxs
  envs:
  - key: MONGODB_URI
    value: "your-mongodb-uri"
  - key: EMAIL_SERVICE
    value: "gmail"
  - key: EMAIL_USER
    value: "your-email@gmail.com"
  - key: EMAIL_PASS
    value: "your-app-password"
  - key: NODE_ENV
    value: "production"
  - key: FRONTEND_URL
    value: ${frontend.PUBLIC_URL}
```

### Option 4: Manual VPS Deployment

#### 4.1 Server Setup (Ubuntu/Debian)
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y
```

#### 4.2 Deploy Backend
```bash
# On server, in /var/www/portfolio
cd /var/www/portfolio/server
npm install --production
npm run build  # if needed

# Start with PM2
pm2 start index.js --name "portfolio-backend"
pm2 save
pm2 startup
```

#### 4.3 Deploy Frontend
```bash
# Build frontend
cd /var/www/portfolio
npm run build

# Serve with Nginx
sudo nano /etc/nginx/sites-available/portfolio

# Add this config:
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /var/www/portfolio/dist;
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🔧 Pre-Deployment Checklist

### Code Preparation
```bash
# Test build
npm run build

# Check for errors
npm run lint

# Backend tests (if any)
cd server && npm test
```

### Environment Setup
```bash
# Frontend .env (for local development)
VITE_API_URL=http://localhost:5000

# Backend .env (production)
MONGODB_URI=mongodb+srv://...
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=production
FRONTEND_URL=https://your-domain.com
```

### Database Setup
```bash
# MongoDB Atlas (recommended)
1. Create cluster
2. Create database user
3. Whitelist IP (0.0.0.0/0 for development)
4. Get connection string
```

### Domain & SSL
```bash
# For HTTPS (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## 🚀 Quick Deploy (Vercel)

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Deploy Frontend
```bash
# Login to Vercel
vercel login

# Deploy frontend
vercel --prod

# Set environment variable
vercel env add VITE_API_URL
# Enter: https://your-backend.vercel.app
```

### Step 3: Deploy Backend
```bash
# In server directory
cd server
vercel --prod

# Set environment variables
vercel env add MONGODB_URI
vercel env add EMAIL_SERVICE
vercel env add EMAIL_USER
vercel env add EMAIL_PASS
vercel env add NODE_ENV
vercel env add FRONTEND_URL
```

### Step 4: Update Frontend API URL
```bash
# Update VITE_API_URL in Vercel dashboard
# Point to your backend URL
```

## 🔍 Testing Deployment

### Health Check
```bash
# Test backend
curl https://your-backend-url/health

# Should return: {"status":"ok","timestamp":"..."}
```

### Form Testing
1. Visit your deployed site
2. Fill out contact form
3. Fill out audit form
4. Check email notifications
5. Verify database entries

## 🛠️ Troubleshooting

### Common Issues

**404 on API calls:**
- Check VITE_API_URL is correct
- Ensure backend is deployed and running

**Email not sending:**
- Verify email credentials
- Check spam folder
- Test with Gmail app password

**Database connection:**
- Check MongoDB URI
- Verify IP whitelist
- Test connection locally first

**Build failures:**
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check for TypeScript errors

## 📊 Monitoring

### Logs
```bash
# Vercel logs
vercel logs

# PM2 logs (VPS)
pm2 logs portfolio-backend
```

### Database
- Monitor MongoDB Atlas dashboard
- Check collection sizes
- Set up alerts for connection issues

## 🔒 Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables not in code
- [ ] Database credentials secure
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] Input validation working
- [ ] No sensitive data in logs

## 💰 Cost Estimates

**Free Tier:**
- Vercel: 100GB bandwidth/month
- MongoDB Atlas: 512MB storage
- Railway: $5/month free

**Paid Plans:**
- Vercel Pro: $20/month
- MongoDB Atlas M0: $0/month (with limits)
- Railway: $5-15/month

---

🎉 **Your portfolio website is now ready for the world!**
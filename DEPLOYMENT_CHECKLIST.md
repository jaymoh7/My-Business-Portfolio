# Deployment Checklist

## Pre-Deployment

### Code Quality
- [ ] All code is committed to git
- [ ] No console.log() left in production code
- [ ] No commented-out code
- [ ] All TODOs are addressed or documented
- [ ] ESLint passes: `npm run lint`
- [ ] Frontend builds without errors: `npm run build`
- [ ] No TypeScript errors: Check terminal on `npm run dev`

### Backend Configuration
- [ ] All required `.env` variables are set
- [ ] `.env` file is NOT in git (check .gitignore)
- [ ] MongoDB production database is set up
- [ ] Email credentials are correct and tested
- [ ] Email sender address is verified with provider
- [ ] Production email notifications are configured
- [ ] CORS origins include production domain
- [ ] NODE_ENV=production in production .env

### Frontend Configuration
- [ ] `VITE_API_URL` points to production backend
- [ ] Environment file is NOT in git
- [ ] Build is optimized: `npm run build`
- [ ] dist/ folder is ready to deploy
- [ ] No hardcoded localhost URLs
- [ ] All API calls use VITE_API_URL

### Database
- [ ] MongoDB collections are created
- [ ] Indexes are created
- [ ] Backup strategy is in place
- [ ] Database user has appropriate permissions
- [ ] Production database is separate from development

### Security
- [ ] No API keys in source code
- [ ] No passwords in source code
- [ ] .env files are not committed
- [ ] HTTPS is enabled on backend
- [ ] CORS is restrictive (not allowing all origins)
- [ ] Rate limiting is in place
- [ ] Email validation is working
- [ ] Input sanitization is implemented

### Testing
- [ ] Audit form works end-to-end
- [ ] Contact form works end-to-end
- [ ] Confirmation emails are received
- [ ] Business emails are received
- [ ] MongoDB saves data correctly
- [ ] Error cases are handled gracefully
- [ ] Form validation works correctly
- [ ] Duplicate prevention works
- [ ] Rate limiting works

---

## Backend Deployment

### Choose Hosting Platform
Choose one:
- [ ] Heroku
- [ ] Render.com
- [ ] Railway
- [ ] AWS (EC2, Elastic Beanstalk)
- [ ] DigitalOcean
- [ ] Fly.io
- [ ] Glitch.com
- [ ] Other: _______

### Deployment Steps

**Step 1: Prepare Code**
```bash
# Ensure all changes are committed
git status
git add .
git commit -m "Ready for deployment"

# Verify no sensitive files are tracked
git ls-files | grep .env
```

**Step 2: Push to Git**
```bash
git push origin main
# or main/master/whatever your branch is
```

**Step 3: Set Environment Variables**
Platform → Settings/Environment Variables → Add:
```
PORT=5000
NODE_ENV=production
MONGODB_URI=<production-mongodb-uri>
EMAIL_SERVICE=gmail (or sendgrid)
EMAIL_USER=<your-email>
EMAIL_PASS=<your-app-password>
BUSINESS_EMAIL=<business-email>
BUSINESS_NAME=<your-name>
BUSINESS_PHONE=<phone>
FRONTEND_URL_PROD=<production-frontend-url>
```

**Step 4: Deploy**
- [ ] Follow platform-specific deployment steps
- [ ] Check deployment logs for errors
- [ ] Verify backend is running: `https://your-backend.com/health`

**Step 5: Verify Deployment**
```bash
# Test health endpoint
curl https://your-backend.com/health

# Test audit endpoint
curl -X POST https://your-backend.com/api/forms/audit \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com",...}'

# Check logs on platform
```

---

## Frontend Deployment

### Choose Hosting Platform
Choose one:
- [ ] Vercel (recommended)
- [ ] Netlify
- [ ] GitHub Pages
- [ ] AWS S3 + CloudFront
- [ ] Cloudflare Pages
- [ ] Firebase Hosting
- [ ] Other: _______

### Deployment Steps (Vercel Example)

**Step 1: Create Vercel Account**
- [ ] Go to vercel.com
- [ ] Sign up with GitHub
- [ ] Grant GitHub access

**Step 2: Import Project**
- [ ] Click "New Project"
- [ ] Select your repository
- [ ] Click Import

**Step 3: Configure Settings**
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Framework Preset: Vite
- [ ] Environment Variables → Add:
  ```
  VITE_API_URL=https://your-backend.com
  ```

**Step 4: Deploy**
- [ ] Click Deploy
- [ ] Wait for build to complete
- [ ] Check deployment logs

**Step 5: Verify Deployment**
- [ ] Open deployed URL
- [ ] Test audit form
- [ ] Test contact form
- [ ] Check browser console for errors
- [ ] Verify emails received

---

## Post-Deployment

### Verification
- [ ] Frontend loads successfully
- [ ] Audit form submits without errors
- [ ] Contact form submits without errors
- [ ] Confirmation email received by customer
- [ ] Notification email received by business
- [ ] Data appears in production database
- [ ] No errors in browser console
- [ ] No errors in backend logs
- [ ] CORS working correctly
- [ ] All pages load correctly

### Monitoring
- [ ] Set up error monitoring (Sentry, LogRocket)
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Set up email delivery monitoring
- [ ] Set up database monitoring
- [ ] Enable browser console monitoring

### Performance
- [ ] Frontend loads in < 3 seconds
- [ ] Form submission completes in < 5 seconds
- [ ] Email arrives within 1 minute
- [ ] No memory leaks
- [ ] No database query timeouts

### Security Check
- [ ] No sensitive data in logs
- [ ] HTTPS is enforced
- [ ] Security headers are set
- [ ] API rate limiting is working
- [ ] CORS is restrictive
- [ ] No console errors about insecure content

### Backup & Disaster Recovery
- [ ] Database backups are automated
- [ ] Backup retention is configured
- [ ] Test restore from backup
- [ ] Have deployment rollback plan
- [ ] Have database backup plan
- [ ] Document recovery procedures

---

## Custom Domain Setup

### DNS Configuration
- [ ] Add A record pointing to backend
- [ ] Add A record pointing to frontend
- [ ] Add MX records if needed
- [ ] Wait for DNS propagation (24 hours max)

### HTTPS/SSL
- [ ] Certificate is generated automatically (most platforms)
- [ ] Verify HTTPS works on both domains
- [ ] Update FRONTEND_URL in backend .env

---

## Maintenance

### Scheduled Tasks
- [ ] Daily: Check error logs
- [ ] Weekly: Review form submissions
- [ ] Weekly: Check database size
- [ ] Monthly: Review security
- [ ] Monthly: Check dependencies for updates
- [ ] Quarterly: Performance audit

### Monitoring Dashboard
Set up alerts for:
- [ ] Backend errors
- [ ] Failed emails
- [ ] High response times
- [ ] Database errors
- [ ] Deployments failing
- [ ] SSL certificate expiring

### Update Procedures
- [ ] Update dependencies: `npm update`
- [ ] Test updates locally: `npm run dev`
- [ ] Commit and push: `git push`
- [ ] Monitor production after update

---

## Troubleshooting Deployed Site

### Backend Not Responding
- [ ] Check backend logs on platform
- [ ] Verify environment variables are set
- [ ] Verify MongoDB connection
- [ ] Check if backend process is running
- [ ] Restart deployment

### Forms Not Working
- [ ] Check browser console for errors
- [ ] Verify API URL in frontend env
- [ ] Check Network tab in DevTools
- [ ] Verify CORS settings
- [ ] Check backend logs

### Emails Not Sending
- [ ] Verify email credentials
- [ ] Check email service status page
- [ ] Check email service logs
- [ ] Verify sender email is verified
- [ ] Check spam folder

### Slow Performance
- [ ] Check database query times
- [ ] Verify database indexes
- [ ] Check network latency
- [ ] Review monitoring data
- [ ] Consider upgrading resources

---

## Rollback Plan

If deployment fails:

```bash
# Step 1: Identify issue
# Check logs and monitoring data

# Step 2: Rollback frontend
# On Vercel/Netlify: Click "Rollback" on previous deployment

# Step 3: Rollback backend
# Redeploy previous working version from git tag

# Step 4: Restore database (if needed)
# Restore from backup

# Step 5: Test everything
# Verify forms work
# Verify emails work
# Check logs

# Step 6: Fix and redeploy
# Fix the issue
# Test locally
# Redeploy
```

---

## Incident Response

### If Site Goes Down

1. **Immediately:**
   - [ ] Check monitoring alerts
   - [ ] Check service status pages
   - [ ] Check social media for user reports

2. **Within 15 minutes:**
   - [ ] Check backend logs
   - [ ] Check frontend logs
   - [ ] Check database logs
   - [ ] Verify API is responding

3. **Within 30 minutes:**
   - [ ] Identify root cause
   - [ ] Implement fix or rollback
   - [ ] Verify systems are back up

4. **Within 1 hour:**
   - [ ] Notify users if affected
   - [ ] Post status update
   - [ ] Document incident

5. **Within 24 hours:**
   - [ ] Post-mortem report
   - [ ] Identify prevention measures
   - [ ] Update monitoring/alerts

---

## Performance Optimization (Optional)

### Frontend
- [ ] Enable gzip compression
- [ ] Optimize images
- [ ] Lazy load components
- [ ] Minify CSS/JS (automatic with build)
- [ ] Cache assets
- [ ] Use CDN

### Backend
- [ ] Add database query caching
- [ ] Optimize MongoDB indexes
- [ ] Implement response caching
- [ ] Use CDN for static assets
- [ ] Monitor query times

### Email
- [ ] Use async queue (Bull/RabbitMQ - optional)
- [ ] Batch emails if possible
- [ ] Monitor delivery rates

---

## Success Criteria

✅ Your deployment is successful when:
- Audit form works end-to-end
- Contact form works end-to-end
- Emails arrive within 1 minute
- No errors in browser console
- Backend responds in < 1 second
- Data persists in database
- Site is accessible via custom domain
- HTTPS is working
- Monitoring is active
- Backup strategy is in place

---

**Deployment Date:** _____________
**Backend URL:** _________________________
**Frontend URL:** _________________________
**Status:** ☐ Not Started ☐ In Progress ☐ Completed

**Notes:**

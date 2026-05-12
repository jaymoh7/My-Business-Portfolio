# Troubleshooting Guide

## Backend Issues

### ❌ MongoDB Connection Error

**Error:**
```
✗ MongoDB connection error: connect ECONNREFUSED 127.0.0.1:27017
```

**Solutions:**
1. **Using Local MongoDB:**
   ```bash
   # Make sure MongoDB is running
   mongod
   
   # Check if running on Windows
   net start MongoDB
   ```

2. **Using MongoDB Atlas (Cloud):**
   - Verify connection string format: `mongodb+srv://username:password@cluster.mongodb.net/database-name`
   - Check credentials are correct
   - IP whitelist: Go to MongoDB Atlas → Security → Network Access → Add IP Address
   - For development: Add 0.0.0.0/0 (whitelist all - not for production!)
   - Wait 5-10 minutes for changes to take effect

3. **Test Connection:**
   ```bash
   # In terminal
   npm install -g mongodb-shell
   mongosh "your-connection-string"
   ```

### ❌ "Cannot find module" Error

**Error:**
```
Error: Cannot find module 'express'
```

**Solution:**
```bash
cd server
npm install

# Or reinstall all dependencies
rm -rf node_modules
npm install
```

### ❌ Port Already in Use

**Error:**
```
Error: listen EADDRINUSE :::5000
```

**Solutions:**
1. **Change Port in .env:**
   ```env
   PORT=5001
   ```

2. **Kill Process Using Port (Windows):**
   ```bash
   netstat -ano | findstr :5000
   taskkill /PID <PID> /F
   ```

3. **Kill Process Using Port (macOS/Linux):**
   ```bash
   lsof -i :5000
   kill -9 <PID>
   ```

## Email Issues

### ❌ "Invalid Login" or "Authentication Failed"

**Error:**
```
Error: Invalid login - [SomeError]
```

**Solutions for Gmail:**
1. Use **App Password**, not regular password:
   - Go to myaccount.google.com/apppasswords
   - Create new app password
   - Copy the 16-character password
   - Use in `.env` as `EMAIL_PASS`

2. Enable "Less secure apps" (if not using app password):
   - Go to myaccount.google.com/security
   - Find "Less secure app access"
   - Turn it ON

3. Verify .env has correct values:
   ```env
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx
   ```

4. No spaces or quotes in .env:
   ```env
   # WRONG
   EMAIL_PASS="xxxx xxxx xxxx xxxx"
   
   # CORRECT
   EMAIL_PASS=xxxx xxxx xxxx xxxx
   ```

**Solutions for SendGrid:**
1. Create API key:
   - Go to sendgrid.com → Settings → API Keys
   - Create new key with Mail Send permission
   
2. Update .env:
   ```env
   EMAIL_SERVICE=sendgrid
   SENDGRID_API_KEY=SG.xxxxx...
   ```

3. Verify sender email:
   - SendGrid → Settings → Sender Authentication
   - Verify your email address

### ❌ Email Not Received

**Checklist:**
1. Check spam/junk folder
2. Verify `BUSINESS_EMAIL` is correct in .env
3. Check email service logs:
   - Gmail: myaccount.google.com/security
   - SendGrid: sendgrid.com → Mail → Message Events
4. Test email sending:
   ```bash
   curl -X POST http://localhost:5000/api/forms/contact \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test",
       "email": "your-email@example.com",
       "phone": "",
       "message": "Testing email functionality"
     }'
   ```

### ❌ "Sender Email Not Verified"

**Solution:**
- Email service requires sender to be verified
- Go to your email service settings
- Verify your sender email address
- Wait for verification email and click link

## Frontend Issues

### ❌ "404 Not Found" or API Call Fails

**Error:**
```
POST http://localhost:5000/api/forms/audit 404 (Not Found)
```

**Solutions:**
1. **Backend Server Running?**
   ```bash
   cd server
   npm run dev
   # Should see: ✓ Server running on http://localhost:5000
   ```

2. **Frontend Environment Variable:**
   ```bash
   # Check .env.local (create if missing)
   VITE_API_URL=http://localhost:5000
   ```

3. **Restart Frontend:**
   ```bash
   # Stop frontend (Ctrl+C)
   # Restart: npm run dev
   ```

### ❌ CORS Error

**Error in Console:**
```
Access to XMLHttpRequest at 'http://localhost:5000/api/forms/...' 
from origin 'http://localhost:8080' has been blocked by CORS policy
```

**Solutions:**
1. **Backend .env FRONTEND_URL:**
   ```env
   FRONTEND_URL=http://localhost:8080
   ```

2. **Restart Backend** after changing:
   ```bash
   cd server
   # Stop with Ctrl+C
   npm run dev
   ```

3. **Check Browser Console:**
   - Open F12 DevTools
   - Go to Console tab
   - Look for exact CORS error message

### ❌ "Connection Refused"

**Error:**
```
POST http://localhost:5000/api/forms/audit - Connection refused
```

**Solutions:**
1. Backend not running:
   ```bash
   cd server && npm run dev
   ```

2. Port mismatch - verify both are running:
   - Frontend: http://localhost:8080
   - Backend: http://localhost:5000

3. Firewall blocking:
   - Windows Defender firewall
   - Antivirus software
   - Check if Node.js is allowed

### ❌ Form Submission Returns Error

**Error in Response:**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [...]
}
```

**Solutions:**
1. Check validation errors in response
2. Verify all required fields are filled
3. Check email format: `test@example.com`
4. Check phone format: `+254...` or similar
5. Check message length (min 10 chars)

## Database Issues

### ❌ Cannot See Data in MongoDB

**Solutions:**
1. **Using MongoDB Compass:**
   - Download: mongodb.com/products/compass
   - Connect with your connection string
   - Look for `portfolio-db` database
   - Check `audit_submissions` and `contact_submissions` collections

2. **Collections Not Created:**
   - Submit a form to create collections
   - Or restart backend: `npm run dev`

3. **Wrong Database Name:**
   - MongoDB URI ends with `/database-name`
   - Check this matches what you're looking for

### ❌ "Database not initialized" Error

**Error:**
```
Error: Database not initialized
```

**Solution:**
- Backend didn't connect to MongoDB
- Check MongoDB connection string in .env
- Wait for "✓ MongoDB connected" message
- Restart backend

## Validation Issues

### ❌ "Validation failed" When Submitting

**Check:**
1. Name: At least 2 characters
2. Email: Valid format (test@example.com)
3. Phone: Valid international format (optional)
4. Business Name: At least 2 characters
5. Location: At least 2 characters
6. Industry: Must select one
7. Goals: Must select at least one (for audit)
8. Message: 10-5000 characters (for contact)

## Deployment Issues

### ❌ Deployment Platform Can't Find Dependencies

**Solution:**
```bash
# Ensure package-lock.json exists
npm install

# Push to git
git add .
git commit -m "Add dependencies"
git push
```

### ❌ Environment Variables Not Set

**For Heroku:**
```bash
heroku config:set PORT=5000
heroku config:set MONGODB_URI=your-connection-string
heroku config:set EMAIL_USER=your-email@gmail.com
```

**For Vercel/Netlify:**
- Go to project settings
- Environment Variables section
- Add each variable

### ❌ "Failed to parse .env"

**Causes:**
- Missing equals sign: `VARIABLE: value` ❌
- Should be: `VARIABLE=value` ✓
- Quotes around values: `VARIABLE="value"` ❌
- Should be: `VARIABLE=value` ✓

## Performance Issues

### ⚠️ Slow Form Submission

**Causes & Solutions:**
1. **Slow Email Service:**
   - Gmail: Normal (1-2 seconds)
   - SendGrid: Faster (< 1 second)
   - Try SendGrid for better performance

2. **Slow Database:**
   - Check MongoDB indexes
   - Verify MongoDB connection
   - Check network latency

3. **Slow Network:**
   - Test from same machine
   - Check internet connection
   - Test with curl: `curl -X POST ...`

### ⚠️ High Memory Usage

**Solutions:**
- Check if old processes still running
- Kill and restart: `npm run dev`
- Check for memory leaks in logs

## Getting More Help

### Check Logs

**Backend Logs:**
```bash
# All output in terminal where npm run dev is running
# Look for errors, warnings, timestamps
```

**Browser Logs:**
- F12 → Console tab
- Look for red errors and yellow warnings

**Email Service Logs:**
- Gmail: myaccount.google.com/security → Connected apps
- SendGrid: sendgrid.com → Mail → Message Events

### Debug Request

```bash
# Test audit endpoint
curl -X POST http://localhost:5000/api/forms/audit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "phone": "+254712345678",
    "businessName": "Test",
    "location": "Nairobi",
    "industry": "Restaurant",
    "goals": ["Goal1"]
  }'

# Test contact endpoint
curl -X POST http://localhost:5000/api/forms/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "message": "Test message here"
  }'

# Health check
curl http://localhost:5000/health
```

### Verify Everything

```bash
# 1. Backend running?
curl http://localhost:5000/health

# 2. MongoDB connected?
# Check terminal logs for: ✓ MongoDB connected

# 3. Email working?
# Check terminal logs for: ✓ Email service initialized

# 4. Frontend connected to backend?
# Check browser console for: Network tab shows successful POST to localhost:5000

# 5. Data saved?
# Check MongoDB Compass → portfolio-db → collections
```

---

**Still stuck?**
1. Check IMPLEMENTATION_SUMMARY.md
2. Read BACKEND_SETUP.md
3. Review QUICK_REFERENCE.md
4. Check error message carefully
5. Verify all .env variables
6. Restart both servers
7. Clear browser cache (Ctrl+Shift+Delete)

# Quick Reference Guide

## Running the Application

### First Time Setup
```bash
# Windows
setup.bat

# macOS/Linux
bash setup.sh
```

### Start Backend (Terminal 1)
```bash
cd server
npm run dev
```

### Start Frontend (Terminal 2)
```bash
npm run dev
```

Then open: `http://localhost:8080`

## Making Changes

### Frontend Changes
1. Edit files in `src/` directory
2. Changes automatically reload
3. Check browser console for errors

### Backend Changes
1. Edit files in `server/` directory
2. Server automatically restarts (with nodemon)
3. Check terminal for errors

### API Endpoints Changes
- Audit: `server/routes/forms.js`
- Contact: `server/routes/forms.js`
- Add new routes: Create file in `server/routes/` and import in `server/index.js`

## Debugging

### Backend Issues
```bash
# Check logs in terminal
# Look for error messages after form submission

# Test API health
curl http://localhost:5000/health

# Test audit API
curl -X POST http://localhost:5000/api/forms/audit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "businessName": "Test Business",
    "location": "Nairobi",
    "industry": "Restaurant",
    "goals": ["Get more customers"]
  }'
```

### Frontend Issues
- Open browser DevTools (F12)
- Check Console tab for errors
- Check Network tab to see API requests
- Look for CORS errors or failed requests

### Database Issues
- Open MongoDB Compass
- Connect to your MongoDB URI
- Check if collections exist: `audit_submissions`, `contact_submissions`
- Look for submitted data

## Common Commands

### Frontend
```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run lint       # Check code quality
npm run preview    # Preview production build
```

### Backend
```bash
npm run dev        # Start with auto-reload
npm start          # Start production server
```

## File Structure

```
Portfolio Website/
├── src/                    # Frontend React code
│   ├── components/
│   │   └── portfolio/
│   │       ├── Contact.tsx (MODIFIED - uses API)
│   │       └── constants.ts
│   └── pages/
│       └── Audit.tsx       (MODIFIED - uses API)
│
├── server/                 # Backend Express code
│   ├── config/
│   │   └── database.js     (MongoDB setup)
│   ├── middleware/
│   │   └── validation.js   (Form validation)
│   ├── routes/
│   │   └── forms.js        (API endpoints)
│   ├── services/
│   │   └── emailService.js (Email sending)
│   ├── .env.example        (Template - COPY TO .env)
│   ├── index.js            (Main server file)
│   └── package.json
│
├── .env.example            (Frontend config template)
├── BACKEND_SETUP.md        (Detailed setup guide)
└── setup.bat / setup.sh    (Quick setup script)
```

## Environment Variables

### Backend (.env - required)
```
PORT=5000
MONGODB_URI=your-mongodb-connection-string
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
BUSINESS_EMAIL=business@example.com
FRONTEND_URL=http://localhost:8080
```

### Frontend (.env.local - optional)
```
VITE_API_URL=http://localhost:5000
```

## Testing Forms

### Test Audit Form
1. Go to `http://localhost:8080/audit`
2. Fill all required fields
3. Submit
4. Check:
   - Success message appears
   - Email received at `BUSINESS_EMAIL`
   - Data in MongoDB

### Test Contact Form
1. Scroll to "Contact" section on home page
2. Fill form
3. Submit
4. Check:
   - Success message appears
   - Email received at `BUSINESS_EMAIL`
   - Data in MongoDB

## Adding New Features

### Add New Form
1. Create route in `server/routes/forms.js`
2. Add validation in `server/middleware/validation.js`
3. Create frontend component
4. Add API call in component
5. Test both directions

### Add Email Template
1. Create function in `server/services/emailService.js`
2. Call `sendEmail()` with template
3. Use in your route handler

### Add Database Model
1. Update `server/config/database.js`
2. Add collection schema
3. Create indexes if needed
4. Use in routes with `getDB().collection('name')`

## Deployment Checklist

### Backend (Node)
- [ ] Environment variables set in production platform
- [ ] MongoDB connection string working
- [ ] Email credentials verified
- [ ] FRONTEND_URL points to production domain
- [ ] Database backups configured
- [ ] Error logging configured

### Frontend (React)
- [ ] VITE_API_URL points to production API
- [ ] Build succeeds: `npm run build`
- [ ] Build is optimized
- [ ] Environment variables set in platform
- [ ] CORS working with backend

### After Deployment
- [ ] Test audit form end-to-end
- [ ] Test contact form end-to-end
- [ ] Verify emails received
- [ ] Check MongoDB for data
- [ ] Monitor error logs
- [ ] Set up alerts for errors

## Support Resources

- MongoDB Docs: https://docs.mongodb.com
- Express Docs: https://expressjs.com
- React Docs: https://react.dev
- Nodemailer Docs: https://nodemailer.com
- Vite Docs: https://vitejs.dev

---

**Quick Help:** If something breaks, check:
1. All `.env` variables are set
2. Backend server is running (`npm run dev` in `/server`)
3. Frontend is running (`npm run dev` in root)
4. MongoDB connection is working
5. Email credentials are correct
6. Browser console for errors
7. Terminal logs for backend errors

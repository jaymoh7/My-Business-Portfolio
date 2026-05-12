# Portfolio Backend Setup Guide

## Overview
This guide will help you set up the backend for your portfolio website's form handling and email notifications.

## Prerequisites
- Node.js (v18+) and npm
- MongoDB account (local or cloud - MongoDB Atlas recommended)
- Email account (Gmail with app password, SendGrid, or other SMTP provider)
- Git (optional, for version control)

## Quick Start

### 1. Backend Setup

#### 1.1 Install Backend Dependencies
```bash
cd server
npm install
```

#### 1.2 Configure Environment Variables
Create a `.env` file in the `server` directory:

```bash
cp .env.example .env
```

Edit `.env` with your actual values:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB (using MongoDB Atlas cloud)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio-db?retryWrites=true&w=majority

# Email Configuration (Gmail)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# Business Configuration
BUSINESS_EMAIL=your-business-email@gmail.com
BUSINESS_NAME=Your Name
BUSINESS_PHONE=+254741549320

# Frontend URL
FRONTEND_URL=http://localhost:8080
FRONTEND_URL_PROD=https://yourdomain.com
```

#### 1.3 MongoDB Setup

**Option A: MongoDB Atlas (Cloud - Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new project and cluster
4. Create a database user with a strong password
5. Whitelist your IP address (or 0.0.0.0 for development)
6. Copy the connection string and update `MONGODB_URI` in `.env`

**Option B: Local MongoDB**
```bash
# On Windows with MongoDB installed
mongod

# MONGODB_URI will be: mongodb://localhost:27017/portfolio-db
```

#### 1.4 Email Setup

**Gmail (Recommended for Testing)**
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Select Mail and Windows Computer (or your device)
3. Google will generate a 16-character password
4. Use this password in `.env` as `EMAIL_PASS`

**SendGrid (Better for Production)**
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Verify your sender email
3. Create an API key
4. Update `.env`:
```env
SENDGRID_API_KEY=your-sendgrid-api-key
EMAIL_SERVICE=sendgrid
```

#### 1.5 Start the Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

You should see:
```
🚀 Starting portfolio backend server...
✓ MongoDB connected
✓ audit_submissions collection created
✓ contact_submissions collection created
✓ Indexes created
✓ Email service initialized
✓ Server running on http://localhost:5000
```

### 2. Frontend Setup

#### 2.1 Configure Frontend Environment
Create `.env.local` in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
VITE_API_URL=http://localhost:5000
```

For production, use your backend URL:
```env
VITE_API_URL=https://api.yourdomain.com
```

#### 2.2 Start Frontend Dev Server
```bash
npm run dev
```

The frontend should now connect to your backend!

## API Endpoints

### Audit Form
**POST** `/api/forms/audit`

Request body:
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "businessName": "string (required)",
  "location": "string (required)",
  "listingUrl": "string (optional)",
  "industry": "string (required)",
  "customIndustry": "string (optional)",
  "goals": ["string array (required)"],
  "notes": "string (optional)"
}
```

Response:
```json
{
  "success": true,
  "message": "Audit request submitted successfully!",
  "submissionId": "objectId"
}
```

### Contact Form
**POST** `/api/forms/contact`

Request body:
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "message": "string (required, 10-5000 chars)"
}
```

Response:
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "submissionId": "objectId"
}
```

## Features

### Form Validation
- Email format validation
- Phone number format validation
- Required field validation
- Length constraints

### Spam Protection
- Duplicate submission detection (24-hour cooldown for audit forms)
- Rate limiting (5-minute cooldown for contact messages)

### Email Notifications
- Customer confirmation emails
- Business owner notification emails
- HTML email templates with branding

### Data Storage
- MongoDB collections for audit and contact submissions
- Timestamps for all submissions
- Status tracking (pending, reviewed, completed)
- Indexed queries for fast retrieval

## Deployment

### Deploy Backend (Heroku, Railway, Render, etc.)

#### Using Render.com (Easiest)
1. Push code to GitHub
2. Connect repository to [Render.com](https://render.com)
3. Set environment variables in Render dashboard
4. Deploy!

#### Using Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set EMAIL_USER=your-email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set FRONTEND_URL=https://yourdomain.com

# Deploy
git push heroku main
```

### Deploy Frontend (Vercel, Netlify, etc.)

#### Using Vercel
1. Push code to GitHub
2. Import project at [Vercel.com](https://vercel.com)
3. Set `VITE_API_URL` environment variable
4. Deploy!

#### Using Netlify
1. Push code to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set `VITE_API_URL` in environment variables
6. Deploy!

## Monitoring & Troubleshooting

### Check Email Configuration
```bash
# Add test email route to server/index.js temporarily
app.get('/test-email', async (req, res) => {
  try {
    await sendEmail(process.env.BUSINESS_EMAIL, 'Test Email', '<p>Test</p>');
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});
```

### MongoDB Connection Issues
- Check connection string format
- Verify IP whitelist in MongoDB Atlas
- Ensure credentials are correct
- Check network connectivity

### Email Not Sending
- Verify app password (not regular password) for Gmail
- Check `SENDER_EMAIL` is verified in SendGrid
- Review email logs in email service dashboard
- Check server logs for errors

### CORS Issues
- Ensure `FRONTEND_URL` is correctly set in backend `.env`
- Verify frontend is making requests to correct API endpoint
- Check browser console for specific CORS errors

## Next Steps

1. **Analytics**: Add tracking to form submissions
2. **Admin Panel**: Create dashboard to view submissions
3. **Email Templates**: Customize email designs further
4. **Webhooks**: Send data to CRM (Pipedrive, HubSpot, etc.)
5. **File Upload**: Allow clients to upload documents
6. **Scheduling**: Auto-send follow-up emails

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review server console logs
3. Check browser developer tools (Network tab)
4. Verify all environment variables are set
5. Test endpoints using Postman or curl

---

**Last Updated:** 2024

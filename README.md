# Portfolio Website - React + TypeScript + Vite

A modern, responsive portfolio website with contact forms and backend integration.

## 🚀 Features

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB
- **Forms**: Contact form and free audit request form
- **Email**: Gmail/SendGrid integration
- **UI**: Shadcn/ui components with Radix UI
- **Responsive**: Mobile-first design

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- Email account (Gmail recommended)

### Installation

1. **Clone and install dependencies:**
```bash
git clone <your-repo>
cd portfolio-website
npm install
cd server && npm install && cd ..
```

2. **Configure environment:**
```bash
# Frontend (.env)
VITE_API_URL=http://localhost:5000

# Backend (server/.env)
MONGODB_URI=mongodb://localhost:27017/portfolio-db
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

3. **Start development servers:**
```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
cd server && npm run dev
```

4. **Open browser:**
```
Frontend: http://localhost:8080
Backend API: http://localhost:5000
```

## 🚀 Deployment

### Quick Deploy (Vercel)
```bash
# Windows
deploy.bat

# Linux/Mac
bash deploy.sh
```

### Manual Deployment
See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

### Environment Variables

**Frontend (.env):**
```
VITE_API_URL=https://your-backend-url.vercel.app
```

**Backend (server/.env):**
```
MONGODB_URI=mongodb+srv://...
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
```

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── portfolio/      # Portfolio-specific components
│   │   └── ui/            # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities
│   └── contexts/          # React contexts
├── server/                # Backend API
│   ├── config/            # Database configuration
│   ├── routes/            # API routes
│   ├── services/          # Email service
│   └── middleware/        # Express middleware
├── dist/                  # Built frontend (generated)
└── docs/                  # Documentation
```

## 🧪 Testing

### Forms
- Contact form: Submit message → stored in DB + email sent
- Audit form: Submit request → stored in DB + email sent

### API Endpoints
- `POST /api/forms/contact` - Contact form submission
- `POST /api/forms/audit` - Audit request submission
- `GET /health` - Health check

## 📚 Documentation

- [Backend Setup](BACKEND_SETUP.md)
- [Deployment Guide](DEPLOYMENT_GUIDE.md)
- [Troubleshooting](TROUBLESHOOTING.md)
- [Quick Reference](QUICK_REFERENCE.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using React, TypeScript, and modern web technologies.

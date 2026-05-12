#!/bin/bash

# Portfolio Website - Backend & Frontend Quick Start
# This script sets up both frontend and backend servers

echo "🚀 Portfolio Website - Backend & Frontend Setup"
echo "================================================\n"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js is installed: $(node --version)"
echo "✓ npm is installed: $(npm --version)\n"

# Setup Frontend
echo "📦 Setting up Frontend..."
npm install
if [ $? -eq 0 ]; then
    echo "✓ Frontend dependencies installed\n"
else
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi

# Setup Backend
echo "📦 Setting up Backend..."
cd server
npm install
if [ $? -eq 0 ]; then
    echo "✓ Backend dependencies installed\n"
else
    echo "❌ Failed to install backend dependencies"
    exit 1
fi

# Copy env files if they don't exist
if [ ! -f .env ]; then
    cp .env.example .env
    echo "✓ Created .env file (backend)"
    echo "  ⚠️  Please edit .env with your configuration\n"
fi

cd ..
if [ ! -f .env.local ]; then
    cp .env.example .env.local
    echo "✓ Created .env.local file (frontend)"
    echo "  ⚠️  Please edit .env.local if needed\n"
fi

echo "================================================"
echo "✅ Setup complete!\n"
echo "📝 Next steps:"
echo "   1. Edit server/.env with your configuration"
echo "   2. Edit .env.local if changing API URL"
echo "   3. Start backend: cd server && npm run dev"
echo "   4. Start frontend: npm run dev (in another terminal)"
echo ""
echo "📖 For detailed instructions, see BACKEND_SETUP.md"
echo "================================================"

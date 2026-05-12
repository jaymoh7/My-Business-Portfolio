#!/bin/bash

# Deployment Health Check Script
echo "🔍 Checking deployment health..."

# Check if URLs are provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <frontend-url> <backend-url>"
    echo "Example: $0 https://myportfolio.vercel.app https://myportfolio-api.vercel.app"
    exit 1
fi

FRONTEND_URL=$1
BACKEND_URL=$2

echo "🌐 Frontend: $FRONTEND_URL"
echo "🔧 Backend: $BACKEND_URL"
echo ""

# Test backend health
echo "Testing backend health..."
HEALTH_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$BACKEND_URL/health")

if [ "$HEALTH_RESPONSE" = "200" ]; then
    echo "✅ Backend health check passed"
else
    echo "❌ Backend health check failed (HTTP $HEALTH_RESPONSE)"
fi

# Test frontend
echo ""
echo "Testing frontend..."
FRONTEND_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$FRONTEND_URL")

if [ "$FRONTEND_RESPONSE" = "200" ]; then
    echo "✅ Frontend is accessible"
else
    echo "❌ Frontend check failed (HTTP $FRONTEND_RESPONSE)"
fi

# Test API endpoints
echo ""
echo "Testing API endpoints..."
CONTACT_RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$BACKEND_URL/api/forms/contact" \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@example.com","message":"Test message"}')

if [ "$CONTACT_RESPONSE" = "200" ] || [ "$CONTACT_RESPONSE" = "400" ]; then
    echo "✅ Contact API endpoint accessible"
else
    echo "❌ Contact API check failed (HTTP $CONTACT_RESPONSE)"
fi

echo ""
echo "🎉 Health check complete!"
echo "If all checks passed, your deployment is working correctly."
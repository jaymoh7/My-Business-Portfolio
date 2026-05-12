@echo off
REM Portfolio Website - Backend & Frontend Quick Start (Windows)
REM This script sets up both frontend and backend servers

color 0A
cls
echo.
echo.
echo ==================================================
echo  Portfolio Website - Backend ^& Frontend Setup
echo ==================================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] Node.js is not installed. 
    echo     Please install from: https://nodejs.org/
    pause
    exit /b 1
)

echo [✓] Node.js is installed
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo     Version: %NODE_VERSION%
echo.

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] npm is not installed.
    pause
    exit /b 1
)

echo [✓] npm is installed
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo     Version: %NPM_VERSION%
echo.

REM Setup Frontend
echo [*] Setting up Frontend...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [X] Failed to install frontend dependencies
    pause
    exit /b 1
)
echo [✓] Frontend dependencies installed
echo.

REM Setup Backend
echo [*] Setting up Backend...
cd server
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [X] Failed to install backend dependencies
    cd ..
    pause
    exit /b 1
)
echo [✓] Backend dependencies installed
echo.

REM Copy env files
if not exist .env (
    copy .env.example .env
    echo [✓] Created .env file (backend)
    echo     ⚠️  Please edit with your configuration
    echo.
)

cd ..
if not exist .env.local (
    copy .env.example .env.local
    echo [✓] Created .env.local file (frontend)
    echo.
)

echo ==================================================
echo [✓] Setup Complete!
echo ==================================================
echo.
echo [*] Next steps:
echo     1. Edit server\.env with your configuration
echo     2. Edit .env.local if changing API URL
echo     3. Start backend: cd server ^& npm run dev
echo     4. Start frontend: npm run dev (in another terminal)
echo.
echo [*] For detailed instructions, see BACKEND_SETUP.md
echo.
pause

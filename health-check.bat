@echo off
echo ?? Checking deployment health...

if "%~2"=="" (
    echo Usage: %0 ^<frontend-url^> ^<backend-url^>
    echo Example: %0 https://myportfolio.vercel.app https://myportfolio-api.vercel.app
    exit /b 1
)

set FRONTEND_URL=%1
set BACKEND_URL=%2

echo ?? Frontend: %FRONTEND_URL%
echo ?? Backend: %BACKEND_URL%
echo.

echo Testing backend health...
curl -s -o nul -w "%%{http_code}" "%BACKEND_URL%/health" > temp.txt
set /p HEALTH_RESPONSE=<temp.txt
del temp.txt

if "%HEALTH_RESPONSE%"=="200" (
    echo ? Backend health check passed
) else (
    echo ? Backend health check failed (HTTP %HEALTH_RESPONSE%)
)

echo.
echo Testing frontend...
curl -s -o nul -w "%%{http_code}" "%FRONTEND_URL%" > temp.txt
set /p FRONTEND_RESPONSE=<temp.txt
del temp.txt

if "%FRONTEND_RESPONSE%"=="200" (
    echo ? Frontend is accessible
) else (
    echo ? Frontend check failed (HTTP %FRONTEND_RESPONSE%)
)

echo.
echo Testing API endpoints...
curl -s -o nul -w "%%{http_code}" -X POST "%BACKEND_URL%/api/forms/contact" -H "Content-Type: application/json" -d "{\"name\":\"Test\",\"email\":\"test@example.com\",\"message\":\"Test message\"}" > temp.txt
set /p CONTACT_RESPONSE=<temp.txt
del temp.txt

if "%CONTACT_RESPONSE%"=="200" (
    echo ? Contact API endpoint accessible
) else if "%CONTACT_RESPONSE%"=="400" (
    echo ? Contact API endpoint accessible (validation working)
) else (
    echo ? Contact API check failed (HTTP %CONTACT_RESPONSE%)
)

echo.
echo ?? Health check complete!
echo If all checks passed, your deployment is working correctly.
pause

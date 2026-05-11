@echo off
echo ===================================================
echo             Starting Vesta Servers...
echo ===================================================
echo.

echo [1/2] Starting Python Flask Backend...
start "Vesta Backend" cmd /k "cd backend && python app.py"

echo [2/2] Starting React Vite Frontend...
start "Vesta Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo All servers are starting up in separate windows!
echo Once the Vite server is ready, open http://localhost:5173 in your browser.
echo ===================================================
pause

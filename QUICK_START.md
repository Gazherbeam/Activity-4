# Quick Start Guide

Your NodeJS Backend Project is ready! 🚀

## Files Created

```
web-dev-backend/
├── server.js                    # Express version (requires npm install)
├── server-no-dependencies.js    # Works without npm (uses built-in Node modules)
├── index.html                   # Web application frontend
├── package.json                 # Node.js dependencies
├── README.md                    # Full documentation
├── INSTALLATION_HELP.md         # Installation troubleshooting
├── js/
│   ├── 1.js                    # API request handlers (GET, POST, DPWH)
│   └── 2.js                    # Tab navigation handlers
└── json/
    └── tabs.json               # Sample data for tabs
```

## Starting the Server

### Option 1: Without External Dependencies (Recommended - Works Now!)

```powershell
cd "c:\Users\User\files files and more files\web-dev-backend"
node server-no-dependencies.js
```

### Option 2: With Express & CORS (After fixing npm)

```powershell
cd "c:\Users\User\files files and more files\web-dev-backend"
npm install
npm start
```

## Testing the API

Once the server is running at `http://localhost:3000`, you can:

### Via Web Browser
1. Open http://localhost:3000 in your browser
2. Click the buttons to interact with API endpoints:
   - **GET** - Fetches user information
   - **POST** - Sends identity data to server
   - **EXPOSE DPWH** - Loads department data
   - **Tab Buttons** - Click Dogs, Cats, or Snails to fetch category data

### Via PowerShell (For Testing)
```powershell
# GET request
(Invoke-WebRequest -Uri "http://localhost:3000/" -Method GET).Content

# POST request
$body = @{ id = 1 } | ConvertTo-Json
(Invoke-WebRequest -Uri "http://localhost:3000/" -Method POST -Body $body -ContentType "application/json").Content

# GET department data
(Invoke-WebRequest -Uri "http://localhost:3000/department-public-work-highways").Content

# GET tab data
(Invoke-WebRequest -Uri "http://localhost:3000/tab?tab=0").Content
```

### Via curl (Git Bash or WSL)
```bash
# GET request
curl http://localhost:3000/

# POST request
curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"id":1}'

# GET department data
curl http://localhost:3000/department-public-work-highways

# GET tab data (0=Dogs, 1=Cats, 2=Snails)
curl http://localhost:3000/tab?tab=0
```

## API Endpoints Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Returns user data (name, age, description) |
| POST | `/` | Accepts ID, returns success/failure message |
| GET | `/department-public-work-highways` | Returns department data |
| GET | `/tab?tab=N` | Returns tab data (0=Dogs, 1=Cats, 2=Snails) |

## Frontend Features

✅ **GET Button** - Fetches and displays user information
✅ **POST Button** - Sends identity data to server with validation
✅ **EXPOSE DPWH Button** - Displays department information
✅ **Tab Buttons** - Click to load category descriptions
✅ **Success/Error Messages** - Visual feedback for all actions
✅ **Responsive Design** - Built with Tailwind CSS

## Browser Console

Open your browser's Developer Tools (F12) and check the **Console** tab to see:
- Detailed logs of all API requests
- Response data in JSON format
- Any errors or warnings

## Differences: server.js vs server-no-dependencies.js

| Feature | server.js | server-no-dependencies.js |
|---------|-----------|-------------------------|
| Framework | Express.js | Node.js built-in http |
| Dependencies | Requires express, cors | No external dependencies |
| File Size | Smaller code | Slightly larger code |
| Installation | Requires npm | No installation needed |
| Performance | Optimized | Sufficient for demo |
| Status | Ready (after npm fix) | ✅ Running now |

## Troubleshooting

### Server won't start
1. Make sure port 3000 is not in use: `netstat -ano | findstr :3000`
2. Kill any process on port 3000 if needed
3. Try a different port by editing the `port` variable in the server file

### CORS errors in browser
- Both server files handle CORS properly
- Make sure you're accessing http://localhost:3000 (not https)

### JSON data won't load
- Check browser console (F12) for specific error messages
- Ensure server is running and responding to requests

## Next Steps

1. ✅ Server is running
2. Open http://localhost:3000 in your browser
3. Try clicking each button to test the API
4. Check the browser console to see API responses
5. Modify json/tabs.json to change the data
6. Edit the server files to add more endpoints

## Project Based On

Reference: https://github.com/LecarreGavini/web-dev-1-backend

Enjoy building! 🎉

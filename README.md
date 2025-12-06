# Web Development Backend Project

A complete NodeJS backend API project with Express server and a web application frontend demonstrating GET/POST endpoints.

## Project Structure

```
web-dev-backend/
├── server.js           # Express server with API endpoints
├── index.html          # Web application frontend
├── package.json        # Node dependencies
├── js/
│   ├── 1.js           # API request handlers
│   └── 2.js           # Tab navigation handlers
└── json/
    └── tabs.json      # Sample data for tabs
```

## Features

### API Endpoints

1. **GET /** - Returns user data
   ```json
   {
     "name": "Lecarre",
     "age": 21,
     "description": "faculty"
   }
   ```

2. **POST /** - Receives ID and returns success/failure message
   - Send: `{ "id": 1 }`
   - Receives: `{ "success": true/false, "message": "..." }`

3. **GET /department-public-work-highways** - Returns department data
   ```json
   {
     "plundered": 700000000,
     "who": ["JR", "Mark", "AJ", "Christian", "Kat"]
   }
   ```

4. **GET /tab** - Returns tab data based on query parameter
   - Query: `?tab=0` (Dogs), `?tab=1` (Cats), `?tab=2` (Snails)

### Frontend Features

- **GET Button** - Fetch and display user information
- **POST Button** - Send identity data to server
- **EXPOSE DPWH Button** - Display department data
- **Tab Buttons** - Click to load category information (Dogs, Cats, Snails)
- Responsive UI with Tailwind CSS styling

## Installation

1. Navigate to the project directory:
   ```bash
   cd web-dev-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

1. Start the Node.js server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Interact with the web application:
   - Click the GET button to fetch user data
   - Enter an ID and click POST to submit data
   - Click EXPOSE DPWH to load department information
   - Click the tab buttons to load different category data

## Dependencies

- **express** - Web application framework for Node.js
- **cors** - Cross-Origin Resource Sharing middleware for handling cross-origin requests

## Port

The server runs on `http://localhost:3000`

## Notes

- The application uses CORS to allow cross-origin requests from the frontend
- All API responses are in JSON format
- The frontend uses Tailwind CSS for styling via CDN
- No database is required - all data is served from JSON files and hardcoded responses

## Browser Console

Open your browser's developer console (F12) to see detailed logs of all API requests and responses.

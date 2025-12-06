# Installation Troubleshooting Guide

## If npm install fails

If you encounter npm errors, try these solutions:

### Solution 1: Update npm
```powershell
npm install -g npm@latest
```

### Solution 2: Use yarn instead
```powershell
npm install -g yarn
cd "c:\Users\User\files files and more files\web-dev-backend"
yarn install
yarn start
```

### Solution 3: Manual installation via Direct Download
If npm is completely broken, you can:
1. Visit https://npmjs.com/package/express and https://npmjs.com/package/cors
2. Download the package tarballs
3. Extract them to the node_modules folder

### Solution 4: Use Node.js with different npm version
```powershell
# Reinstall Node.js from https://nodejs.org
# Choose the LTS version and ensure npm is properly installed
```

### Solution 5: Clear npm cache completely
```powershell
npm cache clean --force --prefix C:\
npm install --prefix "c:\Users\User\files files and more files\web-dev-backend"
```

### Alternative: Skip Dependencies
The server.js file can work without external dependencies if you modify it to use the built-in Node.js http module instead of Express. However, Express makes the code cleaner and more maintainable.

## Once npm works, run:
```powershell
cd "c:\Users\User\files files and more files\web-dev-backend"
npm install
npm start
```

Then open http://localhost:3000 in your browser.

# FIX: How to Reinstall Node.js and Fix npm

Your npm installation is corrupted and needs to be completely reset.

## Follow These Steps:

### Step 1: Uninstall Node.js
1. Go to **Control Panel** → **Programs** → **Programs and Features**
2. Find **Node.js** in the list
3. Click it and select **Uninstall**
4. Follow the prompts to complete the uninstall
5. **Restart your computer**

### Step 2: Download and Install Node.js
1. Go to https://nodejs.org/en/download
2. Download the **LTS version** (Long Term Support - currently 20.x or 22.x)
3. Choose the Windows installer (.msi) for your system (64-bit recommended)
4. Run the installer
5. Accept all defaults
6. **Restart your computer again**

### Step 3: Verify Installation
Open PowerShell and run:
```powershell
node --version
npm --version
```

Both should show version numbers (no errors).

### Step 4: Go to Your Project Directory
```powershell
cd "c:\Users\User\files files and more files\web-dev-backend"
```

### Step 5: Install Packages
```powershell
npm install express cors
npm install nodemon --save-dev
```

### Step 6: Verify package.json
Your package.json should now have these scripts:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

### Step 7: Start Your Server
```powershell
npm start
```

Or with auto-reload during development:
```powershell
npm run dev
```

## Why This Happens
- npm gets corrupted if Node.js is partially uninstalled or updated incorrectly
- The npm module becomes inaccessible
- Cleaning cache alone doesn't fix a corrupted installation

## After Reinstalling
Once you reinstall Node.js, all these commands will work:
✅ `npm install express`
✅ `npm install cors`
✅ `npm install nodemon --save-dev`
✅ `npm start`
✅ `npm run dev`

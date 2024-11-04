const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'icons', 'logo.png'),
    // icon: path.join(__dirname, 'path', 'to', 'icon.icns'),
    webPreferences: {
      nodeIntegration: false,
    },
  });

  win.loadURL('https://open.spotify.com'); // Replace with your React app URL

  // Open the DevTools (optional)
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
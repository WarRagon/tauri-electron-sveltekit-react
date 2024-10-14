import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = process.env.NODE_ENV === 'development';
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.mjs'),
            sandbox: false,
            nodeIntegration: false,
            contextIsolation: true,
        }
    });
    win.setMenuBarVisibility(false) 

    const url = isDev
        ? 'http://localhost:1420'
        : `file://${path.join(__dirname, '../dist/index.html')}`;

    win.loadURL(url);
    if (isDev) {
        win.webContents.openDevTools();
    }
}
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        app.quit();
});

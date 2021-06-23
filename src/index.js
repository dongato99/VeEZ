const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const DBClient = require('./postgresDB');

//if (process.env.NODE_ENV !== 'production') {
//  require('electron-reload')(__dirname, {
//  electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
//})
//}

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        show: false,
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    })
    mainWindow.loadFile(path.join(__dirname, 'views/index.html'));
    mainWindow.setMenuBarVisibility(false)
    mainWindow.webContents.openDevTools();
    mainWindow.webContents.on('did-finish-load', () => {
        //mainWindow.maximize();
        mainWindow.show()
    })
});

var dbClient = new DBClient()
ipcMain.on('registrarCliente', (event, arg) => {
    console.log(arg) // prints "ping"
    dbClient.registrarCliente(arg)
})
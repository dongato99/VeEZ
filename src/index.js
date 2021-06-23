const { app, BrowserWindow, Menu } = require('electron');

const url = require('url');
const path = require('path');
const nodeConsole = require('console');

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')

    })
}

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

    //mainWindow.setMenuBarVisibility(false)

    Menu.setApplicationMenu(Menu.buildFromTemplate(templateMenu));
    mainWindow.webContents.on('did-finish-load', () => {
        //mainWindow.maximize();
        mainWindow.show()
    })
});



const templateMenu = [


]

if (process.env.NODE_ENV !== 'production') {
    templateMenu.push({
        label: 'DevTools',
        submenu: [{
                label: 'Show/Hide Dev Tools',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}
const {app, BrowserWindow, Menu} = require('electron');

const url = require('url');
const path = require('path');
const nodeConsole = require('console');

if(process.env.NODE_ENV !== 'production'){
require('electron-reload')(__dirname,{
    electron: path.join(__dirname, '../node_modules','.bin','electron')

})
}

let mainWindow

app.on('ready',() =>{
    mainWindow = new BrowserWindow({
    })
    mainWindow.maximize();
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))

    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);
});

const templateMenu = [
    

]

if(process.env.NODE_ENV !== 'production'){
    templateMenu.push({
        label: 'DevTools',
        submenu: [
            {
                label: 'Show/Hide Dev Tools',
                click(item,focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role:'reload'
            }
        ]
    })
}


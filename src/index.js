const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const DBClient = require('./postgresDB');

let mainWindow
var dbClient

app.on('ready', async () => {
    mainWindow = new BrowserWindow({
        show: false,
        width: 1450,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    })
    mainWindow.loadFile(path.join(__dirname, 'views/index.html'));
    mainWindow.setMenuBarVisibility(false)
    mainWindow.webContents.openDevTools()
    dbClient = new DBClient(mainWindow)
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show()
    })
    await tests();
});
//end electron config -------------------------------------------------------------------------------------------------


//region crud----------------------------------------------------------------------------------------------------------
async function tests() {
    res = await dbClient.registrarCliente({})
    console.log(res)
}

ipcMain.on('registrarCliente', (event, arg) => {
    console.log(arg)
    dbClient.registrarCliente(arg)
})

ipcMain.on('clientesLista', (event, arg) => {
    dbClient.obtenerClientes()
})

ipcMain.on('borrarCliente', (event, arg) => {
    dbClient.borrarCliente(arg)
})

ipcMain.on('editarCliente', (event, arg) => {
        dbClient.editarCliente(arg)
    })
    //crud proveedores--------------------------------
ipcMain.on('registrarProveedor', (event, arg) => {
    console.log(arg)
    dbClient.registrarProveedor(arg)
})

ipcMain.on('proveedoresLista', (event, arg) => {
    dbClient.obtenerProveedores()
})

ipcMain.on('borrarProveedor', (event, arg) => {
    dbClient.borrarProveedor(arg)
})

ipcMain.on('editarProveedor', (event, arg) => {
        dbClient.editarProveedor(arg)
    })
    //crud productos--------------------------------
ipcMain.on('registrarProducto', (event, arg) => {
    console.log(arg)
    dbClient.registrarProducto(arg)
})

ipcMain.on('productosLista', (event, arg) => {
    dbClient.obtenerProductos()
})

ipcMain.on('borrarProducto', (event, arg) => {
    dbClient.borrarProducto(arg)
})

ipcMain.on('editarProducto', (event, arg) => {
    dbClient.editarProducto(arg)
})
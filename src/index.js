const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const DBClient = require('./postgresDB');

let mainWindow
var dbClient

app.on('ready', async() => {
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
    dbClient = new DBClient()
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.show()
    })
});
//end electron config -------------------------------------------------------------------------------------------------


//region crud----------------------------------------------------------------------------------------------------------


ipcMain.on('registrarCliente', async(event, arg) => {
    console.log(arg)
    await dbClient.registrarCliente(arg)
})

ipcMain.on('clientesLista', async(event, arg) => {
    clientes = await dbClient.obtenerClientes()
    mainWindow.webContents.send("clientesLista", clientes)
})

ipcMain.on('borrarCliente', async(event, arg) => {
    await dbClient.borrarCliente(arg)
})

ipcMain.on('editarCliente', async(event, arg) => {
    await dbClient.editarCliente(arg)
})

//crud proveedores--------------------------------
ipcMain.on('registrarProveedor', async(event, arg) => {
    console.log(arg)
    await dbClient.registrarProveedor(arg)
})

ipcMain.on('proveedoresLista', async(event, arg) => {
    proveedores = await dbClient.obtenerProveedores()
    mainWindow.webContents.send("proveedoresLista", proveedores)
})

ipcMain.on('borrarProveedor', async(event, arg) => {
    await dbClient.borrarProveedor(arg)
})

ipcMain.on('editarProveedor', async(event, arg) => {
    await dbClient.editarProveedor(arg)
})

//crud productos--------------------------------
ipcMain.on('registrarProducto', async(event, arg) => {
    console.log(arg)
    await dbClient.registrarProducto(arg)
})

ipcMain.on('productosLista', async(event, arg) => {
    productos = await dbClient.obtenerProductos()
    mainWindow.webContents.send("productosLista", productos)
})

ipcMain.on('borrarProducto', async(event, arg) => {
    await dbClient.borrarProducto(arg)
})

ipcMain.on('editarProducto', async(event, arg) => {
    await dbClient.editarProducto(arg)
})
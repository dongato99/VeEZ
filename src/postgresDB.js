const { Client } = require('pg')

class DBClient {

    constructor(mainWindow) {
        this.client = new Client({
            user: 'postgres',
            host: '192.168.1.114',
            database: 'VeEZ',
            password: 'pa$$word1',
            port: 5432,
        })
        this.mainWindow = mainWindow;
        this.client.connect()
    }

    // crud cliente---------------------------------------------------------------------------------
    registrarCliente(cliente) {
        var query = `insert into public.clientes values('${cliente.nombre}', '${cliente.dir}', '${cliente.date}', '${cliente.mail}','${cliente.tel}') ON CONFLICT (correo) DO NOTHING;`
        this.client.query(query, (err, res) => {
            if (err) {
                console.log("error registrando cliente: " + cliente + " error: " + err);
            }
        })
    }

    editarCliente(cliente) {
        var query = `update public.clientes set (nombre, direccion, "fechaNacimiento", numero) = ('${cliente.nombre}' ,'${cliente.dir}', '${cliente.date}', '${cliente.tel}') where correo = '${cliente.mail}'`
            //console.log(query)
        this.client.query(query, (err, res) => {
            if (err) {
                console.log("error editando cliente: " + cliente + " error: " + err);
            }
        })
    }

    borrarCliente(correo) {
        var query = `delete from public.clientes where correo = '${correo}'`
        this.client.query(query, (err, res) => {
            if (err) {
                console.log("error borrando cliente: " + err);
            }
        })
    }

    obtenerClientes() {
            var query = "select * from public.clientes"
            this.client.query(query, (err, res) => {
                if (err) {
                    console.log("error obteniendo clientes: " + err);
                } else {
                    //console.log(res.rows)
                    this.mainWindow.webContents.send("clientesLista", res.rows)
                }
            })
        }
        // crud cliente---------------------------------------------------------------------------------

    // crud proveedores---------------------------------------------------------------------------------
    registrarProveedor(proveedor) {
        var query = `insert into public.proveedores values('${proveedor.nombre}', '${proveedor.dir}', '${proveedor.mail}','${proveedor.tel}') ON CONFLICT (correo) DO NOTHING;`
        this.client.query(query, (err, res) => {
            if (err) {
                console.log("error registrando proveedor: " + proveedor + " error: " + err);
            }
        })
    }

    editarProveedor(proveedor) {
        var query = `update public.proveedores set (nombre, direccion, numero) = ('${proveedor.nombre}' ,'${proveedor.dir}', '${proveedor.tel}') where correo = '${proveedor.mail}'`
            //console.log(query)
        this.client.query(query, (err, res) => {
            if (err) {
                console.log("error editando proveedor: " + proveedor + " error: " + err);
            }
        })
    }

    borrarProveedor(correo) {
        var query = `delete from public.proveedores where correo = '${correo}'`
        this.client.query(query, (err, res) => {
            if (err) {
                console.log("error borrando proveedor: " + err);
            }
        })
    }

    obtenerProveedores() {
            var query = "select * from public.proveedores"
            this.client.query(query, (err, res) => {
                if (err) {
                    console.log("error obteniendo proveedores: " + err);
                } else {
                    //console.log(res.rows)
                    this.mainWindow.webContents.send("proveedoresLista", res.rows)
                }
            })
        }
        // crud proveedores---------------------------------------------------------------------------------
        // crud productos---------------------------------------------------------------------------------
    registrarProducto(producto) {
        var query = `insert into public.productos values('${producto.id}', '${producto.nombre}', 
        '${producto.desc}','${producto.categ}','${producto.pCompra}','${producto.pVenta}'
        ,'${producto.unidades}','${producto.uom}') ON CONFLICT (id) DO NOTHING;`
        this.client.query(query, (err, res) => {
            if (err) {
                console.log("error registrando producto: " + producto + " error: " + err);
            }
        })
    }

    editarProducto(producto) {
        var query = `update public.productos set 
        (id, nombre, descripcion, categoria, precio_compra, precio_venta, unidades, uom) = 
        ('${producto.id}' ,'${producto.nombre}', '${producto.desc}', '${producto.categ}'
        , '${producto.pCompra}', '${producto.pVenta}', '${producto.unidades}', '${producto.uom}')
         where id = '${producto.id}'`
            //console.log(query)
        this.client.query(query, (err, res) => {
            if (err) {
                console.log("error editando producto: " + proveedor + " error: " + err);
            }
        })
    }

    borrarProducto(id) {
        var query = `delete from public.productos where id = '${id}'`
        this.client.query(query, (err, res) => {
            if (err) {
                console.log("error borrando producto: " + err);
            }
        })
    }

    obtenerProductos() {
            var query = "select * from public.productos"
            this.client.query(query, (err, res) => {
                if (err) {
                    console.log("error obteniendo productos: " + err);
                } else {
                    //console.log(res.rows)
                    this.mainWindow.webContents.send("productosLista", res.rows)
                }
            })
        }
        // crud productos---------------------------------------------------------------------------------
}

module.exports = DBClient
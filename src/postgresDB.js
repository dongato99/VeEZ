const { Client } = require('pg')


class DBClient {

    constructor() {
        this.client = new Client({
            user: 'postgres',
            host: '192.168.1.114',
            database: 'VeEZ',
            password: 'pa$$word1',
            port: 5432,
        })
        this.client.connect()
    }


    verificarQuery(query) {
        if (query.includes("undefined")) {
            console.log("Query invalida: " + query)
            return false;
        }
        return true;
    }

    // crud cliente---------------------------------------------------------------------------------
    async registrarCliente(cliente) {
        var query = `insert into public.clientes values('${cliente.nombre}', '${cliente.dir}', '${cliente.date}', '${cliente.mail}','${cliente.tel}') ON CONFLICT (correo) DO NOTHING;`
        if (this.verificarQuery(query)) {
            try {
                await this.client.query(query)
                return true
            } catch (err) {
                console.log("error registrando cliente: " + cliente + " error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    async editarCliente(cliente) {
        var query = `update public.clientes set (nombre, direccion, "fechaNacimiento", numero) = ('${cliente.nombre}' ,'${cliente.dir}', '${cliente.date}', '${cliente.tel}') where correo = '${cliente.mail}'`
        if (this.verificarQuery(query)) {
            try {
                await this.client.query(query)
                return true
            } catch (err) {
                console.log("error editando cliente: " + cliente + " error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    async borrarCliente(correo) {
        var query = `delete from public.clientes where correo = '${correo}'`
        if (this.verificarQuery(query)) {
            try {
                await this.client.query(query)
                return true
            } catch (err) {
                console.log("error borrando cliente: " + correo + " error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    async obtenerClientes() {
        var query = "select * from public.clientes"
        if (this.verificarQuery(query)) {
            try {
                var res = await this.client.query(query)
                return res.rows
            } catch (err) {
                console.log("error obteniendo clientes error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    // crud cliente---------------------------------------------------------------------------------

    // crud proveedores---------------------------------------------------------------------------------
    async registrarProveedor(proveedor) {
        var query = `insert into public.proveedores values('${proveedor.nombre}', '${proveedor.dir}', '${proveedor.mail}','${proveedor.tel}') ON CONFLICT (correo) DO NOTHING;`
        if (this.verificarQuery(query)) {
            try {
                await this.client.query(query)
                return true
            } catch (err) {
                console.log("error registrando proveedor: " + proveedor + " error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    async editarProveedor(proveedor) {
        var query = `update public.proveedores set (nombre, direccion, numero) = ('${proveedor.nombre}' ,'${proveedor.dir}', '${proveedor.tel}') where correo = '${proveedor.mail}'`
        if (this.verificarQuery(query)) {
            try {
                await this.client.query(query)
                return true
            } catch (err) {
                console.log("error editando proveedor: " + proveedor + " error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    async borrarProveedor(correo) {
        var query = `delete from public.proveedores where correo = '${correo}'`
        if (this.verificarQuery(query)) {
            try {
                await this.client.query(query)
                return true
            } catch (err) {
                console.log("error borrando proveedor: " + correo + " error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    async obtenerProveedores() {
        var query = "select * from public.proveedores"
        if (this.verificarQuery(query)) {
            try {
                var res = await this.client.query(query)
                return res.rows
            } catch (err) {
                console.log("error obteniendo proveedores, error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    // crud proveedores---------------------------------------------------------------------------------
    // crud productos---------------------------------------------------------------------------------
    async registrarProducto(producto) {
        var query = `insert into public.productos values('${producto.id}', '${producto.nombre}', 
        '${producto.desc}','${producto.categ}','${producto.pCompra}','${producto.pVenta}'
        ,'${producto.unidades}','${producto.uom}') ON CONFLICT (id) DO NOTHING;`
        if (this.verificarQuery(query)) {
            try {
                await this.client.query(query)
                return true
            } catch (err) {
                console.log("error registrando producto: " + producto + " error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    async editarProducto(producto) {
        var query = `update public.productos set 
        (id, nombre, descripcion, categoria, precio_compra, precio_venta, unidades, uom) = 
        ('${producto.id}' ,'${producto.nombre}', '${producto.desc}', '${producto.categ}'
        , '${producto.pCompra}', '${producto.pVenta}', '${producto.unidades}', '${producto.uom}')
         where id = '${producto.id}'`
        if (this.verificarQuery(query)) {
            try {
                await this.client.query(query)
                return true
            } catch (err) {
                console.log("error editando producto: " + producto + " error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    async borrarProducto(id) {
        var query = `delete from public.productos where id = '${id}'`
        if (this.verificarQuery(query)) {
            try {
                await this.client.query(query)
                return true
            } catch (err) {
                console.log("error borrando producto: " + id + " error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    async obtenerProductos() {
        var query = "select * from public.productos"
        if (this.verificarQuery(query)) {
            try {
                var res = await this.client.query(query)
                return res.rows
            } catch (err) {
                console.log("error obteniendo productos, error: " + err + "\nquery:" + query);
            }
        }
        return false;
    }

    // crud productos---------------------------------------------------------------------------------
}

module.exports = DBClient
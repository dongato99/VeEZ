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

    registrarCliente(cliente) {
        var query = `insert into public.clientes values('${cliente.nombre}', '${cliente.dir}', '${cliente.date}', '${cliente.mail}','${cliente.tel}') ON CONFLICT (correo) DO NOTHING;`
        this.client.query(query, (err, res) => {
            if (err) {
                console.log("error registrando cliente: " + cliente + " error: " + err);
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
                this.mainWindow.webContents.send("listaClientes", res.rows)
            }
        })
    }
}

module.exports = DBClient
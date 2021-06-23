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

    registrarCliente(cliente) {
        var query = `insert into public.clientes values('${cliente.nombre}', '${cliente.dir}', '${cliente.date}', '${cliente.mail}','${cliente.tel}') ON CONFLICT (correo) DO NOTHING;`
        this.client.query(query, (err, res) => {
            console.log(err, res)
        })
    }
}

module.exports = DBClient
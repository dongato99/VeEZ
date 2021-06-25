const DBClient = require('../postgresDB');
dbClient = new DBClient()


test('Prueba que un cliente sin todas sus propiedades no se puede editar', async() => {
    await dbClient.registrarCliente({
        nombre: "Arturo",
        dir: "Por la garcia",
        date: "2021-04-04",
        mail: "artrun@hotmail.com",
        tel: "9991020158"
    })
    result = await dbClient.editarCliente({
        dir: "Por la garcia",
        date: "2021-04-04",
        mail: "artrun@hotmail.com",
        tel: "9991020158"
    })
    expect(result).toBe(false);
});

test('Prueba que se pueden obtener la lista de clientes', async() => {
    clientes = await dbClient.obtenerClientes()
    console.log(clientes)
    expect(Array.isArray(clientes)).toBe(true);
});
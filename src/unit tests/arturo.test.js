const DBClient = require('../postgresDB');
dbClient = new DBClient()



test('Prueba que un cliente vacio no se puede registrar', async() => {
    result = await dbClient.registrarCliente({})
    expect(result).toBe(false);
});

test('Prueba que un cliente con todas sus propiedades se puede registrar', async() => {
    result = await dbClient.registrarCliente({
        nombre: "Arturo",
        dir: "Por la garcia",
        date: "2021-04-04",
        mail: "artrun@hotmail.com",
        tel: "9991020158"
    })
    expect(result).toBe(true);
});

test('Prueba que un cliente con todas sus propiedades se puede editar', async() => {
    result = await dbClient.editarCliente({
        nombre: "Arturo",
        dir: "Por la garcia",
        date: "2021-04-04",
        mail: "artrun@hotmail.com",
        tel: "9991020158"
    })
    expect(result).toBe(true);
});
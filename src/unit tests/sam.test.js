const DBClient = require('../postgresDB');
dbClient = new DBClient()


test('Prueba que un proveedor con todas sus propiedades se puede registrar', async() => {
    result = await dbClient.registrarProveedor({
        nombre: "Bepensa",
        dir: "Por av no contaminantes",
        mail: "bepensa@hotmail.com",
        tel: "018001565462"
    })
    expect(result).toBe(true);
});

test('Prueba que un cliente existente se puede borrar', async() => {
    mail = "pd.ani@hotmail.con"
    await dbClient.registrarCliente({
        nombre: "Pedro",
        dir: "Por pensiones ",
        date: "2021-04-12",
        mail: mail,
        tel: "9995323134"
    })
    result = await dbClient.borrarCliente(mail)
    expect(result).toBe(true);
});
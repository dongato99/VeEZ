const DBClient = require('../postgresDB');
dbClient = new DBClient()



test('Prueba que un producto con todas sus propiedades se puede registrar', async() => {
    result = await dbClient.registrarProducto({
        id: "SPRI2L",
        nombre: "Sprite 2Lts",
        desc: "bottella de plastico de sprite",
        categ: "Refrescos",
        pCompra: 10,
        pVenta: 5,
        unidades: "10",
        uom: "mililitros"
    })
    expect(result).toBe(true);
});

test('Prueba que un producto sin todas sus propiedades no se puede registrar', async() => {
    result = await dbClient.registrarProducto({
        id: "SPRI2L",
        nombre: "Sprite 2Lts",
        desc: "bottella de plastico de sprite",
        categ: "Refrescos",
        pCompra: 10,
        pVenta: 5,
        unidades: "10",
    })
    expect(result).toBe(false);
});
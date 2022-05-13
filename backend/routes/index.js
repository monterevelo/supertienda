const routerUsuarios = require('./usuariosRouter.js');
const routerClientes = require('./clientesRouter.js');
const routerCategorias = require('./categoriasRouter.js');
const routerProductos = require('./productosRouter.js');
const routerTiendas = require('./tiendasRouter.js');
const routerVentas = require('./ventasRouter.js');

function RoutesAPI(app){
    app.use('/usuarios', routerUsuarios);
    app.use('/clientes', routerClientes);
    app.use('/categorias', routerCategorias);
    app.use('/productos', routerProductos);
    app.use('/ventas', routerVentas);
    app.use('/tiendas', routerTiendas);
}

module.exports = RoutesAPI;

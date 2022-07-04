const routerAdministrators = require('./administratorsRouter.js');
const routerCustomers = require('./customersRouter.js');
const routerCategories = require('./categoriesRouter.js');
const routerProducts = require('./productsRouter.js');
const routerStores = require('./storesRouter.js');
const routerSales = require('./salesRouter.js');
const routerMockAdministrators = require('./mockAdministratorsRouter.js');

function RoutesAPI(app){
    app.use('/administrators', routerAdministrators);
    app.use('/customers', routerCustomers);
    app.use('/categories', routerCategories);
    app.use('/products', routerProducts);
    app.use('/sales', routerSales);
    app.use('/stores', routerStores);
    app.use('/mock/administrators',routerMockAdministrators);

}

module.exports = RoutesAPI;

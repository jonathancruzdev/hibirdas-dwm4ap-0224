// Importa las rutas
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');

// Defino la función de la aplicación de entrada
function routerAPI(app){
    // Definimos los endPoints
    app.use('/users', usersRouter);
    app.use('/products', productsRouter);
}
// Exportamos la función
module.exports = routerAPI;

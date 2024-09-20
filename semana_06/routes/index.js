/* ---------------------------- Importa las rutas --------------------------- */
const userRouter = require('./userRouter');

function routerAPI( app){
    // Definimos los endPoints
    app.use('/users', userRouter);
}

module.exports = routerAPI;
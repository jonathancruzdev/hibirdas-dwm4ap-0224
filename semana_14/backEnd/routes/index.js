// Importamos los Routers 
import usersRouter from './usersRouter.js'
import postsRouter from './postsRouter.js'

// Está función recibe la apliacación como parámetro de entrada
export function routerAPI(app){
	// Definimos los endPoints
    app.use('/api/post', postsRouter);
    app.use('/api/users', usersRouter);
}
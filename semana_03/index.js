const chalk = require('chalk');
const express = require('express');
const app = express();
const port = 3000;

// Ruta home
app.get('/', (request, response) =>{
    response.send(' Home');
    console.log('El Cliente accedio a la ruta /');
});

// Ruta Productos
app.get('/products', (request, response) => {
    response.send(' Productos');
    console.log('El Cliente accedio a la ruta /products');
})

// Ruta con parametros
app.get('/products/:id', (request, response) => {
    const id = request.params.id;
    response.send(` Producto con el ID ${id}`);
    console.log(`El Cliente accedio a la ruta /products/${id}`);
})

console.log(  chalk.blue(' Ahora tengo colores :D')  );
console.log(  chalk.bgGreen(' Con fondo verde ')  );

app.listen( port, () => { 
    console.log( chalk.green( `Servidor escuchando en el puerto ${port}` ) ) 
});

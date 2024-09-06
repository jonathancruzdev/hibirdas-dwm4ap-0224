const express = require('express');
const { Users } = require('./Users');
const app = express();
const port = 3000;
app.use( express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Home');
    console.log('Cliente en el HOME')
});

// Retorna la lisa de usuarios
app.get('/users', async (req, res) => {
    const users = new Users();
    const data = await users.getUsers();
    console.table(data);
    res.status(200).send(data);
})
// Retorna el usuario por id
app.get('/users/:id', async ( req, res) => {
    const id = req.params.id;
    const users = new Users();
    const data = await users.getUserById(id);
    if( data ){
        res.status(200).json( data)
    } else {
        res.status(404).json({ mensaje: 'Usuario no econtrado'})
    }
})

// Guarda un usuario
app.post('/users', async( req, res) => {
    console.log( req.body );
    const { name, email } = req.body;
    if( !email || !name ){
        res.status(400).json({ mensaje: 'Faltan parametros'})
    }
    const users = new Users();
    await users.addUser({
        name,
        email
    })
    res.status(202).json({ mensaje: 'Usuario Guardado'})
})


// Ruta products
app.get('/products', (req, res) =>{
    res.send('Products');
    console.log('Cliente en la ruta /products')
});

// POST
app.post('/products', (req, res) =>{
    const product = req.body;
    console.log('Cliente en la ruta POST: /products')
    console.log(product)
    if( product.name && product.price){
        res.status(202).json({ mensaje: 'Producto Guardado'});

    } else {
        res.status(400).json({ mensaje: 'Producto Invalido'});

    }

})

const findById =  (req, res) =>{
    const id = req.params.id;
    res.send(`Products con el Id ${id} `);
    console.log(`Cliente en la ruta /products/${id}`);
}

// Ruta products con Parámetros
app.get('/products/:id', findById );



// Ruta products con Parámetros para eliminar un producto
// NO!
/* app.get('/productsEliminar/:id', (req, res) =>{
    const id = req.params.id;
    res.send(`Products con el Id ${id} `);
    console.log(`Cliente en la ruta /products/${id}`);
}); */

app.listen( port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})
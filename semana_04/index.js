const express = require('express');
const app = express();
const port = 3000;
app.use( express.json());

// Rutas
app.get('/', (req, res) => {
    res.send('Home');
    console.log('Cliente en el HOME')
});
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
const express = require('express');
const mongoose = require('mongoose');
const routerAPI = require('./routes');
require('dotenv').config();

// accedemos a la variable de Entorno
const port = process.env.PORT;

// Conectamos a la db
mongoose.connect('mongodb://127.0.0.1:27017/app');
const db = mongoose.connection;

db.on('error', () => console.error('Error'));
db.once('open', ()=>{
    console.log('Conexión correcta');
})

const app = express();
// Ruta Raíz
app.use( express.json());

app.use(  (req, res, next) => {
    console.log('Soy el middleware');
    next();
}) 

app.get('/', (req, res) => {
    res.status(200).send('<h1> API REST </h1>');
})

// Llamamos a las rutas
routerAPI(app);

app.listen( port, () => { 
    console.log(`Servidor en el puerto ${port}`)
});
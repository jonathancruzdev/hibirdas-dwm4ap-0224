const express = require('express');
const routerAPI = require('./routes');
const db = require('./config/dataBase.js');
const cors = require('cors');
require('dotenv').config();

// accedemos a la variable de Entorno
const port = process.env.PORT;

const app = express();
// Ruta Raíz
app.use( express.json());
app.use( cors());
// Definimos la carpeta para servir archivos estaticos
app.use(  express.static('public') );

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
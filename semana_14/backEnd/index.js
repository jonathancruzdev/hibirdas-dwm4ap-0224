import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import 'dotenv/config'
// accedemos a la variable de Entorno
const port = process.env.PORT;
const uridb = process.env.URI_BD;
console.log(uridb);
import { routerAPI }  from "./routes/index.js";
const app = express();
//const port = 3000;
app.use( cors() );

mongoose.connect( uridb, {});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

app.use( express.json() );

app.get('/', (req, res) => {
    res.status(200).send('<h1> Blog </h1>');
})

// Llamo al RouterAPI y le paso la aplicación
routerAPI(app);


app.listen( port, () =>{
    console.log('Servidor escuchando en el puerto ' + port);
})

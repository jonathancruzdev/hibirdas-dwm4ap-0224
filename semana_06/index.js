const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/usersModels');

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

/*     const body = req.body;
    const {mail, password} = body;
    if( mail == 'juan@mail.com' && password == '1234'){
        console.log(body);
        next();
    } else {
        res.status(403).json({msg: 'error'})
    }
 */
}) 

app.get('/users', (req, res) => {
    console.log('GET users');
    res.status(200).json({ msg: 'ok'})
})

app.get('/users/:id', (req, res) => {
    console.log('GET users by ID');
    res.status(200).json({ msg: 'ok'})

})

app.post('/users', async (req, res) => {
    console.log('POST users');
    console.log(Users);
    const body = req.body;
    const user = {
        name: body.name,
        email: body.email,
        password: body.password
    }

    // Creo una instancia de user
    const myUser = new User(user);
      await myUser.save();


    res.status(200).json({ msg: 'ok'})

})

app.delete('/users', (req, res) => {
    console.log('DELETE users by ID');
    res.status(200).json({ msg: 'ok'})

})



app.listen( port, () => { 
    console.log(`Servidor en el puerto ${port}`)
});
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Conectamos a la db
mongoose.connect(  process.env.URI_BD );
const db = mongoose.connection;

db.on('error', () => console.error('Error'));
db.once('open', ()=>{
    console.log('Conexión correcta');
})

module.exports = db;
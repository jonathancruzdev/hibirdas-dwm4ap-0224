// importo Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creo el Esquema
const mySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passsword:{
        type: String,
        required: true 
    },
});
/*
const mySchema = new({
    name: String,
    mail: String
})
*/
const User = mongoose.model('User', mySchema);
// Exporto el model
module.exports =User;


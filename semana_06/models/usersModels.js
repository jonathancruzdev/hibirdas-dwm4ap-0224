// importo Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creo el Esquema
const mySchema = new Schema({
    name: String,
    email: String,
    passsword: String
});

const User = mongoose.model('User', mySchema);
// Exporto el model
module.exports = User;


// importo Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Creo el Esquema
const userSchema = new Schema({
    name: String,
    created: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User', userSchema);
// Exporto el model
module.exports = User;


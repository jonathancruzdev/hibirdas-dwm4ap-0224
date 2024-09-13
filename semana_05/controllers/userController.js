// Importa el modelo, realiza la validaciones y ejecuta los métodos del modelo
const { Users } = require('../models/Users');

const addUser = async ( req, res) =>{
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
}

const getUsers = async (req, res) => {
    const users = new Users();
    const data = await users.getUsers();
    console.table(data);
    res.status(200).send(data);
}

const getUserById = async ( req, res) => {
    const id = req.params.id;
    const users = new Users();
    const data = await users.getUserById(id);
    if( data ){
        res.status(200).json( data)
    } else {
        res.status(404).json({ mensaje: 'Usuario no econtrado'})
    }
}

module.exports = { addUser, getUsers, getUserById }

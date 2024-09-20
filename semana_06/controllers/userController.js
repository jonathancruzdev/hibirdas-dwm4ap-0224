/* ---------------------------- Importamos el modelo --------------------------- */
const User = require('../models/usersModels');

const creatUser = async ( req, res ) => {
    const { name, email, password } = req.body;
    // Creo una instancia del modelo
    const newUser = new User({ name, email, password })
    await newUser.save();
    res.status(200).json({ msg: 'Usuario Creado', data: newUser})
    //const name = req.body.name;
    //const email = req.body.email;
    //const password = req.body.password;

    /*
    const newUser = new User({
        name: name,
        email: email,
        passsword: password
    });
    */
}

const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({ msg: 'Ok', data: users });
}

module.exports = { creatUser, getUsers };

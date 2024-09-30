/* ---------------------------- Importamos el modelo --------------------------- */
const User = require('../models/usersModels');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const secretKey = process.env.SECRETKEY;
const salt = 10;


const creatUser = async ( req, res ) => {
    const { name, email, password } = req.body;

    if( !name || !email || !password){
        res.status(400).json({ msg: 'Faltan paramatros obligatorios', data: { name, email, password }  })
    }

    const passwordHash = await bcrypt.hash(password, salt);


    try {
        // Creo una instancia del modelo
        const newUser = new User({ name, email, password: passwordHash })
        await newUser.save();
        res.status(200).json({ msg: 'Usuario Creado', data: newUser})
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'UPs tenemos un error :(', data: {}})
    }

}

const login = async ( req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email});
        // Verificamos si el email existe
        if( !user){
            res.status(401).json({ msg: 'El email no existe', data: {} });
        }
        // Verificamos si el password es valido
        const passwordOk = await bcrypt.compare(  password, user.password );
        if( !passwordOk){
            res.status(401).json({ msg: 'La contraseña es incorrecta', data: {} });
        }
        // Si todo va bien, generamos el token
        const data = {
            userId: user._id,
            name: user.name
        }
        const token = jwt.sign( data, secretKey, { expiresIn: '1h'} );

        console.log(token);
        // Enviamos le token al cliente
        res.status(200).json({ msg: 'success', data:{ jwt: token}});

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'UPs tenemos un error :(', data: {}})
    }
}


const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({ msg: 'Ok', data: users });
}


const getUsersById = async ( req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if( user ){
            res.status(200).json({ msg: "success", data: user});
        } else {
            res.status(404).json({ msg: "No se encontro el usuario ", data: { }});

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'UPs tenemos un error :(', data: {}})
    }
}

const deleteUserById = async ( req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if( user ){
            res.status(200).json({ msg: "success", data: user});
        } else {
            res.status(404).json({ msg: "No se encontro el usuario ", data: { }});

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'UPs tenemos un error :(', data: {}})
    }
}
const updateUserById = async ( req, res) => {
    const { id } = req.params;
    const { name, email, password} = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, { name, email, password}, {new: true});
        if( user ){
            res.status(200).json({ msg: "success", data: user});
        } else {
            res.status(404).json({ msg: "No se encontro el usuario ", data: { }});

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'UPs tenemos un error :(', data: {}})
    }
}


module.exports = { creatUser, getUsers, getUsersById, deleteUserById, updateUserById, login };

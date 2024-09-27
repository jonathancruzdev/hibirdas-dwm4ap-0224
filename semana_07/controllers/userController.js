/* ---------------------------- Importamos el modelo --------------------------- */
const User = require('../models/usersModels');

const creatUser = async ( req, res ) => {
    const { name, email, password } = req.body;

    if( !name || !email || !password){
        res.status(400).json({ msg: 'Faltan paramatros obligatorios', data: { name, email, password }  })
    }

    try {
        // Creo una instancia del modelo
        const newUser = new User({ name, email, password })
        await newUser.save();
        res.status(200).json({ msg: 'Usuario Creado', data: newUser})
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


module.exports = { creatUser, getUsers, getUsersById, deleteUserById, updateUserById };

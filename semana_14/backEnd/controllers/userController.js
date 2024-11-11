import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const salt= 10;
const secreyKey = 'appProducts';

async function createUser( req, res  ){
    try {
        const { name, email, password } = req.body;
        // Encripto la contraseña
        const passwordHash =  await bcrypt.hash(password, salt);
        console.log(passwordHash)
        const newUser = new User({
            name: name,
            email: email,
            password: passwordHash
        });
        await newUser.save();
        res.status(200).json({ newUser});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

async function login( req, res){
    try {
        const { email, password } = req.body;
        // Verifico que el user exita
        const user = await User.findOne( {email} );
        if( !user){
            res.status(200).json({ message: 'El usuario no exite', data: []});
        }
        // Comparamos el password
        const pass = await bcrypt.compare( password, user.password );
        if( !pass){
            res.status(200).json({ message: 'La contraseña es invalida', data: []});
        }
        const token = jwt.sign({ id: user._id, email: user.email}, secreyKey, {expiresIn: '1h'} );
        res.status(200).json({ message: 'ok', data: {token: token}});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

async function getUsers( req, res ){
    try {
        const users = await User.find()
        res.status(200).json({ message: 'Ok', data: users});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

export { createUser, getUsers, login }
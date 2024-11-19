const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const secretKey = process.env.SECRETKEY;

// Verifica el token
const validarToken = ( req, res, next  ) => {
    const auth = req.headers.authorization;
    // Verificamos si se paso el token
    if( !auth) {
        res.status(401).json({msg: 'Falta el token'});
        return;
    }

    token = auth.split(' ')[1];

    console.log( {token});
    // Lógica de la verificación del jwt
    jwt.verify(token, secretKey, ( error, decoded  ) => {
        if( error) {
            return res.status(403).json({ msg: 'Token Invaido '})
        }

        console.log({decoded})
        // Si se pudo decodificar el token, retorno
        req.body.userId = decoded.userId;
        next();
    })

    
}

module.exports = validarToken;
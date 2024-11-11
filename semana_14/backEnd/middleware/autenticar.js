
import jwt from "jsonwebtoken";
const secreyKey = 'appProducts';
// Es un función que se encaga de verificar la autenticación del usuario por medio jwt

const autenticar = async( req, res, next) => {
    const token = req.headers.authorization;
    // Verificamos si se paso el jwt
    if( !token){
        return res.status(401).json({ message: 'No se paso el JWT', data: []});
    }

    // Verifico el jwt
    jwt.verify(token, secreyKey, (error, decoded) =>{
        if( error){
            return res.status(403).json({ message: 'JWT Invalido ', data: []});
        }

        //console.log(decoded);
        req.body.userId = decoded.id;
        // hacemos que se ejecute la singuite instrucción
        next();
    })

    console.log(jwt);



}

export { autenticar }
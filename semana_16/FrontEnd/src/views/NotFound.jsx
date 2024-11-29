import { Link } from "react-router-dom";

const NotFound = () =>{
    return (
        <>
            <h2> NotFound </h2>
            <p>Ups... parece que la Ruta no existe :(</p>
            <Link to='/'> Regresar el Inicio</Link>
        </>
    )
}

export default NotFound;
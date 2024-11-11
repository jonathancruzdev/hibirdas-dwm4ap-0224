import React from "react";
import Button from "./Button";
import '../App.css'
import { Link } from "react-router-dom";


function Card ( props){
    //const precio = props.precio;
    return (
        <div className="card">
            <h4> { props.texto} </h4>
            <hr />
            <img src={props.foto} alt={props.nombre} />
            <p> $ { props.precio + 10}</p>
            <Button text="Agregar" color="green"></Button>
            <Link to={`/details/${props.id}`}> Detalle</Link>
        </div>
    )
}

export default Card;
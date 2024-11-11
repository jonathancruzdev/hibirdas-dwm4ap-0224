import React from "react";
import { useState } from "react";
import Button from "./Button";
const productsContainer = (props) => {
    const [ count, setCount] = useState(0);

    function sumarProducto(){
        console.log('sumar')
        setCount( count + 1);
    }

    function restarProducto(){
        setCount( count - 1);
    }

    return (
        <div className="bg-blue">
            <h2>Lista de Productos</h2>
            <p> Carrito { count }</p>
            <hr />
            
            <Button text="Sumar" handleClick={sumarProducto} />
            <Button color="red" text="Restar"  handleClick={restarProducto}  />
            
            <div className="row">
                {  props.children }
            </div>

        </div>
    )
}

export default productsContainer;
import React from "react";
import './App.css'

function User ( {name, email} ){
/*     console.log( props);
    const name = props.name;
    const email = props.email; */
    console.log(name, email);

    //const precio = props.precio;
    return (
        <div className="card">
            <h4> { name} </h4>
            <hr />
            <p> Email: { email }</p>
        </div>
    )
}

export default User;
import React from "react";
import './App.css'

function User ( {name, email} ){
    console.log(name, email);
    return (
        <div className="card">
            <h4> { name} </h4>
            <hr />
            <p> Email: { email }</p>
        </div>
    )
}

export default User;
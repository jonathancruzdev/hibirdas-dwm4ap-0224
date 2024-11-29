import React from "react";

const Button = ( props) => {
    return (
        <button
            onClick={ props.handleClick } 
            className={'btn btn-'+props.color} 
            type="button"> {props.text } 
        </button>
    )
}

export default Button
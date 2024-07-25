import React from "react";

const Button = ({ type, children, onClick }) => {
    return(
        <button
            type={type}
            onClick={onClick}
            className=""
        >
            {children}
        </button>
    )
}
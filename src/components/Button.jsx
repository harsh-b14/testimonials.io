import React from "react";
import './Signup/Signup.css'

const Button = ({ type, children, onClick, disabled }) => {
    return(
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className="relative inline-flex w-full items-center justify-center px-3.5 py-2.5  text-white transition-all duration-200 hover:bg-[rgba(210,215,228,0.3)] hover:text-black focus:bg-gray-500 focus:text-black focus:outline-none bg-[rgba(217,217,217,0)] border-solid border-[#6881a4] border-4 rounded-[16px] hover:border-[#8B94AD] font-['Raleway']"
        >
            <span className="mr-2 inline-block ">
                <svg
                    className="h-6 w-6 white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
            </span>
            {children}
        </button>
    )
}

export default Button;
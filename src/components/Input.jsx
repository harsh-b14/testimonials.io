import React from "react";

const Input = ({ type, placeholder, ...props }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="flex px-3.5 py-2.5 w-full bg-[rgba(217,217,217,0)] border-solid border-[#6881a4] border-4 rounded-[16px] text-sm placeholder:text-gray-400 hover:bg-[rgba(210,215,228,0.3)] hover:placeholder:text-black hover:border-[#8B94AD] focus:bg-gray-500 focus:text-black focus:outline-none transition-all duration-200 focus:ring-offset-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            {...props}
        />
    );
}

export default Input;
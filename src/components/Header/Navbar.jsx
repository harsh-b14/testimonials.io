import React from "react";
import Logo from "./Logo";

export default function Navbar(){
    return(
        <>
            <nav className="w-full max-w-6xl h-16 m-auto px-4 py-2 rounded-lg flex items-center justify-between font-sans overflow-y-hidden  text-base sm:text-sm md:text-tiny lg:text-base" style={{backgroundColor : "rgba(139, 148, 173, 0.51)   "}}>
                <div className="flex justify-center items-center h-14 px-2 py-1 rounded-md">
                    <Logo />
                </div>
                <div className="flex bg-slate-600 h-12 mr-1 my-0.5 px-2 py-1 rounded-lg items-center justify-between w-3/4 text-white" style={{backgroundColor : "rgba(3, 9, 32, 1)"}}>
                    <div className="mx-16">
                        <ul className="flex items-center gap-8 ">
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>
                    
                        </ul>
                    </div>
                    <div className="flex items-center gap-8 mx-8">
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign in</button>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</button>
                    </div>
                </div>
            </nav> 
        </>
    )
}
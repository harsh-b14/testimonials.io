import React from "react";
import Logo from "./Logo";
import { Link } from 'react-router-dom'
import "./Header.css"

export default function Navbar() {
    return (
        <>
            <nav className="w-full max-w-6xl h-16 m-auto px-4 py-2 rounded-lg flex items-center justify-between overflow-y-hidden text-base sm:text-sm md:text-tiny lg:text-base" style={{backgroundColor : "rgba(139, 148, 173, 0.51)   "}}>
                <div className="flex justify-center items-center h-14 px-2 py-1 rounded-md">
                        <Logo />
                </div>
                <div className="flex bg-slate-500 h-12 mr-1 my-0.5 px-2 py-1 rounded-lg items-center justify-between w-4/5 text-white navLink" style={{ backgroundColor: "rgba(3, 9, 32, 1)" }}>
                    <div className="mx-16">
                        <ul className="flex items-center gap-8 ">
                        
                            <li>Soultion</li>
                            <li className="text-pretty">About Us</li>
                            <li>FAQ</li>
                            <li>Contact Us</li>

                        </ul>
                    </div>
                    

                    <div className="flex items-center gap-8 mx-8">

                        <Link to="/signin" className="flex items-center">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2  font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800">Sign in</button>
                        </Link>
                        <Link to="/signup" className="flex items-center">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2  font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800">Sign up</button>
                        </Link>

                    </div>
                </div>
            </nav>
        </>
    )
}
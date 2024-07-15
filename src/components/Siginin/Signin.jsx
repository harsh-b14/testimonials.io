import React from "react";
import './Signin.css'
import { Link } from 'react-router-dom'


function Signin() {
    return (
        <>
            <div className="signin-container">
                <nav className="w-4/5 max-w-6xl h-16 m-auto px-4 py-2 rounded-lg flex items-center justify-between text-base sm:text-sm md:text-tiny lg:text-base" >
                    <div className="flex justify-start items-center py-1 rounded-md" style={{ color: "#BAB8CE" }}>
                        <Link to="/" className="flex items-center backButton">
                            <button
                                className="inline-flex h-8 rounded-lg text-sm justify-center items-center px-2 py-1 hover:bg-slate-600 shrink-0 gap-3"
                                onClick={() => deleteTodo(todo.id)}>
                                <img src="arrow-left-icon.svg" className="w-6"></img>
                                <h1 >Home</h1>
                            </button>
                        </Link>


                    </div>
                </nav>

            </div>
        </>
    )
}

export default Signin
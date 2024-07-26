import React from "react";
import './Signup.css'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Input from "../Input";
import GoogleSignUpButton from "../GoogleSignUpButton";

function Signup() {
    return (
        <>
            <div className="signin-container">
                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex justify-center items-center">
                            <img
                                className="mx-auto h-4/5 w-3/4 rounded-md object-cover"
                                src="LogoSymbol.svg"
                                alt="Logo"
                            />
                        </div>
                        <div className="flex items-center justify-center sm:px-6 sm:py-4 lg:px-4 mt-20">
                            <div className="w-4/6">
                                <h2 className="text-3xl leading-tight text-white sm:text-4xl text-center boldText">Sign Up</h2>
                                <div className="mt-6 space-y-3 w-full flex items-center justify-center">
                                    <GoogleSignUpButton className="w-full"/>
                                </div>
                                <p className="text-white text-center mt-3 font-['Raleway']">or</p>
                                <form action="#" method="POST" className="mt-3">
                                    <div className="space-y-5">
                                        <div className="mt-2 font-['Raleway']">
                                            <Input type="text" placeholder="Enter your fullname"/>
                                        </div>
                                        <div className="mt-2 font-['Raleway']">
                                            <Input type="text" placeholder="Create your username"/>
                                        </div>
                                        <div className="mt-2 font-['Raleway']">
                                            <Input type="email" placeholder="Enter your email"/>
                                        </div>
                                        <div className="mt-2 font-['Raleway']">
                                            <Input type="password" placeholder="Create a strong password"/>
                                        </div>
                                        <div>
                                            <Link to="/">
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full items-center justify-center rounded-xl  px-3.5 py-2.5 leading-7 text-white font-['poppins']"
                                                    style={{
                                                        background:
                                                            'linear-gradient(329deg, rgba(147,170,198,1) 1%, rgba(114,62,168,1) 42%, rgba(85,43,129,1) 72%, rgba(60,26,95,1) 98%)'
                                                    }}
                                                >
                                                    Sign Up  <ArrowRight className="ml-2" size={16} />
                                                </button>
                                            </Link>
                                        </div>
                                        <span className="mt-2 text-sm text-white items-center flex justify-center font-['Raleway']">
                                            <p className="inline-block font-['Raleway'] text-base">Already have an account?{' '}</p>
                                            <Link to="/signin" className=" items-center ml-2 font-['Raleway'] text-lg font-semibold">
                                                {' '}Signin
                                            </Link>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <script src="https://apis.google.com/js/platform.js" async defer></script>
        </>
    )
}

export default Signup


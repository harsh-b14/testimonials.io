import React, { useState } from "react";
import './Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Input from "../Input";
import GoogleSignUpButton from "../GoogleSignUpButton";
import { useForm } from "react-hook-form";
import axios from "axios";


function Signin() {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const signInUser = async (data) => {
        setError("");
        try{
            console.log(data);
            const user = await axios.post("/user/signin", data);
            console.log(user);
            navigate("/dashboard");
        }
        catch (error) {
            setError(error);
            console.log("Error while signing up user: ", error);
        }
    }

    return (
        <>
            <div className="signin-container pb-8 grad">
                    <div className="grid grid-cols-1 lg:grid-cols-2 ">
                        <div className=" flex justify-center items-center">
                            <img
                                className="mx-auto w-3/4 rounded-md object-cover lg:mt-20"
                                src="LogoSymbol.svg"
                                alt=""
                            />
                        </div>
                        <div className="flex items-center justify-center px-4 sm:py-4 lg:px-8 lg:py-4 lg:mt-24">
                            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md w-4/5 md:w-3/6 lg:w-5/6">
                                <h2 className="text-3xl leading-tight text-white sm:text-4xl text-center boldText">Sign In</h2>
                                <div className="mt-6 space-y-3 w-full flex items-center justify-center">
                                   
                                    <GoogleSignUpButton/>
                                
                                </div>
                                <p className="text-white text-center mt-3 font-['Raleway']">or</p>
                                <form onSubmit={handleSubmit(signInUser)} className="mt-3">
                                    <div>
                                        <div className="mt-2 font-['Raleway']">
                                            <Input type="email" placeholder="Enter registered email" 
                                                {...register("email", {
                                                    required: true
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-2 font-['Raleway']">
                                        <Input type="text" placeholder="Enter your username" 
                                            {...register("username", {
                                                required: true
                                            })}
                                        />
                                    </div>
                                    <div className="mt-2 font-['Raleway']">
                                        <Input type="password" placeholder="Enter your password" 
                                            {...register("password", {
                                                required: true
                                            })}
                                        />
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex w-full items-center justify-center rounded-xl px-3.5 py-2.5 leading-7 text-white font-['poppins'] mt-2"
                                            style={{
                                                background:
                                                    'linear-gradient(329deg, rgba(147,170,198,1) 1%, rgba(114,62,168,1) 42%, rgba(85,43,129,1) 72%, rgba(60,26,95,1) 98%)'
                                            }}
                                        >
                                            Sign In  <ArrowRight className="ml-2" size={16} />
                                        </button>
                                    </div>
                                </form>
                                    <span className="mt-2 text-white items-center flex justify-center font-['Raleway']">
                                        <p className="lg:text-base md:text-base text-[12px]">Don&apos;t have an account ?{' '}</p>
                                        <Link to="/signup" className="ml-2 lg:text-base md:text-base text-[14px] font-semibold">
                                            {' '}Create a account
                                        </Link>
                                    </span>
                                    <span className=" items-center flex justify-center text-white font-['Raleway'] mt-3">
                                        <Link to="/resetpassword" className="-mt-4 lg:text-base md:text-base text-[12px]">
                                            Forgot password ?
                                        </Link>
                                    </span>
                            </div>
                        </div>

                    </div>
            </div>
        </>
    )
}

export default Signin
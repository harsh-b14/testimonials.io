import React, { useState } from "react";
import './Signup.css'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Input from "../Input";
import GoogleSignUpButton from "../GoogleSignUpButton";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { login as storeLogin } from "../../store/authSlice"

function Signup() {
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState(""); 
    const navigate = useNavigate();   
    const dispatch = useDispatch();

    const signUpUser = async (data) => {
        setError("");
        try{
            const response = await axios.post("/user/signup", data, {
                withCredentials: true
            });
            if(response.data) {
                // const userData = await axios.get("http://localhost:8000/user/current-user", {
                //     withCredentials: true
                // });
                // if(userData.data){
                //     console.log("user data: ", userData);
                //     dispatch(storeLogin(userData));
                //     console.log("if condition completed");
                    navigate("/dashboard");
                // }
            }
        }
        catch (error) {
            setError(error);
            console.log("Error while signing up user: ", error);
        }
    }

    return (
        <>
            <div className="signin-container pb-8 grad">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="flex justify-center items-center">
                            <img
                                className="mx-auto w-3/4 rounded-md object-cover lg:mt-20"
                                src="LogoSymbol.svg"
                                alt="Logo"
                            />
                        </div>
                        <div className="flex items-center justify-center px-4 sm:py-4 lg:px-8 lg:py-4 lg:mt-24">
                            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md w-4/5 md:w-3/6 lg:w-5/6">
                                <h2 className="text-3xl leading-tight text-white sm:text-4xl text-center boldText">Sign Up</h2>
                                <div className="mt-6 space-y-3 w-full flex items-center justify-center">
                                
                                    <GoogleSignUpButton />
                                
                                </div>
                                <p className="text-white text-center mt-3 font-['Raleway']">or</p>
                                <form onSubmit={handleSubmit(signUpUser)}>
                                <div className="space-y-5">
                                    <div className="mt-2 font-['Raleway']">
                                        <Input type="text" placeholder="Enter your fullname"
                                            {...register("fullname", {
                                                required: true
                                            })}
                                        />
                                    </div>
                                    <div className="mt-2 font-['Raleway']">
                                        <Input type="text" placeholder="Create your username"
                                            {...register("username", {
                                                required: true
                                            })}
                                        />
                                    </div>
                                    <div className="mt-2 font-['Raleway']">
                                        <Input type="email" placeholder="Enter your email"
                                            {...register("email", {
                                                required: true
                                            })}
                                        />
                                    </div>
                                    <div className="mt-2 font-['Raleway']">
                                        <Input type="password" placeholder="Create a strong password"
                                            {...register("password", {
                                                required: true
                                            })}
                                        />
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex w-full items-center justify-center rounded-xl px-3.5 py-2.5 leading-7 text-white font-['poppins']"
                                            style={{
                                                background:
                                                    'linear-gradient(329deg, rgba(147,170,198,1) 1%, rgba(114,62,168,1) 42%, rgba(85,43,129,1) 72%, rgba(60,26,95,1) 98%)'
                                            }}
                                        >
                                            Sign Up  <ArrowRight className="ml-2" size={16} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                             <span className="mt-2 text-sm text-white items-center flex justify-center font-['Raleway']">
                                <p className="inline-block font-['Raleway'] lg:text-base md:text-base text-[12px]">Already have an account?{' '}</p>
                                <Link to="/signin" className="items-center ml-2 font-['Raleway'] lg:text-base md:text-base text-[14px] font-semibold">
                                    {' '}Sign In
                                </Link>
                            </span>
                            </div>
                        </div>
                    </div>
            </div>
            <script src="https://apis.google.com/js/platform.js" async defer></script>
        </>
    )
}

export default Signup


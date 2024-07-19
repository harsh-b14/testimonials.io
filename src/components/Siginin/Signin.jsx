import React from "react";
import './Signin.css'
// import { Link } from 'react-router-dom'
import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react'


function Signin() {
    return (
        <>
            <div className="signin-container">
                <nav className="w-4/5 max-w-6xl h-16 m-auto px-4 py-2 rounded-lg flex items-center justify-between text-base sm:text-sm md:text-tiny lg:text-base" >
                    <div className="flex justify-start items-center py-1 rounded-md" style={{ color: "#BAB8CE" }}>
                        <Link to="/" className="flex items-center backButton ">
                            <button
                                className="inline-flex h-8 rounded-lg text-sm justify-center items-center px-2 py-1 hover:bg-slate-600 shrink-0 gap-3">
                                <img src="arrow-left-icon.svg" className="w-6"></img>
                                <h1 >Home</h1>
                            </button>
                        </Link>
                    </div>
                </nav>


                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className=" flex justify-center items-center">
                            <img
                                className="mx-auto h-4/5 w-3/4 rounded-md object-cover"
                                src="LogoSymbol.svg"
                                alt=""
                            />
                        </div>
                        <div className="flex items-center justify-center px-4 py-4 sm:px-6 sm:py-4 lg:px-8 lg:py-4">
                            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                                <h2 className="text-3xl leading-tight text-white sm:text-4xl text-center boldText">Sign In</h2>
                                <div className="mt-6 space-y-3">
                                    <button
                                        type="button"
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
                                        Sign in with Google
                                    </button>
                                    <button
                                        type="button"
                                        className="relative inline-flex w-full items-center justify-center px-3.5 py-2.5  text-white transition-all duration-200 hover:bg-[rgba(210,215,228,0.3)] hover:text-black focus:bg-gray-500 focus:text-black focus:outline-none bg-[rgba(217,217,217,0)] border-solid border-[#6881a4] border-4 rounded-[16px] hover:border-[#8B94AD] font-['Raleway']"
                                    >
                                        <span className="mr-2 inline-block">
                                            <svg width="24" height="24" viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 0C46.569 0 60 13.7698 60 30.7588C60 44.3458 51.414 55.8719 39.501 59.9429C37.98 60.2459 37.44 59.2853 37.44 58.4663C37.44 57.4523 37.476 54.1404 37.476 50.0244C37.476 47.1564 36.516 45.2846 35.439 44.3306C42.12 43.5686 49.14 40.9673 49.14 29.1533C49.14 25.7933 47.976 23.0515 46.05 20.8975C46.362 20.1205 47.391 16.9919 45.756 12.7559C45.756 12.7559 43.242 11.9317 37.515 15.9097C35.118 15.2287 32.55 14.886 30 14.874C27.45 14.886 24.885 15.2287 22.491 15.9097C16.758 11.9317 14.238 12.7559 14.238 12.7559C12.609 16.9919 13.638 20.1205 13.947 20.8975C12.03 23.0515 10.857 25.7933 10.857 29.1533C10.857 40.9373 17.862 43.5785 24.525 44.3555C23.667 45.1235 22.89 46.4783 22.62 48.4673C20.91 49.2533 16.566 50.6136 13.89 45.9126C13.89 45.9126 12.303 42.9572 9.291 42.7412C9.291 42.7412 6.366 42.7024 9.087 44.6104C9.087 44.6104 11.052 45.5554 12.417 49.1104C12.417 49.1104 14.178 54.6002 22.524 52.7402C22.539 55.3112 22.566 57.7343 22.566 58.4663C22.566 59.2793 22.014 60.2308 20.517 59.9458C8.59499 55.8808 0 44.3488 0 30.7588C0 13.7698 13.434 0 30 0Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        Sign in with Github
                                    </button>
                                </div>
                                <p className="text-white text-center mt-3 font-['Raleway']">or</p>
                                <form action="#" method="POST" className="mt-3">
                                    <div className="space-y-5">
                                        <div>
                                            <div className="mt-2 font-['Raleway']">
                                                <input
                                                    className="flex px-3.5 py-2.5 w-full bg-[rgba(217,217,217,0)] border-solid border-[#6881a4] border-4 rounded-[16px] text-sm placeholder:text-gray-400 hover:bg-[rgba(210,215,228,0.3)] hover:placeholder:text-black hover:border-[#8B94AD] focus:bg-gray-500 focus:text-black
                                                     focus:outline-none transition-all duration-200 focus:ring-offset-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="email"
                                                    placeholder="E-mail"
                                                ></input>
                                            </div>
                                        </div>
                                        <div className="mt-2 font-['Raleway']">
                                            <input
                                                className="flex px-3.5 py-2.5 w-full bg-[rgba(217,217,217,0)] border-solid border-[#6881a4] border-4 rounded-[16px] text-sm placeholder:text-gray-400 hover:bg-[rgba(210,215,228,0.3)] hover:placeholder:text-black hover:border-[#8B94AD] focus:bg-gray-500 focus:text-black
                                                     focus:outline-none transition-all duration-200 focus:ring-offset-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="password"
                                                placeholder="Password"
                                            ></input>
                                        </div>
                                        <div>

                                            <Link to="" >
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full items-center justify-center rounded-xl  px-3.5 py-2.5 leading-7 text-white font-['poppins']"
                                                    style={{
                                                        background:
                                                            'linear-gradient(329deg, rgba(147,170,198,1) 1%, rgba(114,62,168,1) 42%, rgba(85,43,129,1) 72%, rgba(60,26,95,1) 98%)'
                                                    }}
                                                >
                                                    Sign In  <ArrowRight className="ml-2" size={16} />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                                <span className="mt-2 text-sm text-white items-center flex justify-center font-['Raleway']">
                                    <p className="inline-block">don&apos;t have an account ?{' '}</p>
                                    <Link to="/Signup" className=" items-center ml-2 font-semibold text-lg">
                                        {' '}Create a account
                                    </Link>
                                </span>
                                <span className=" items-center flex justify-center  text-white font-['Raleway'] font-semibold">
                                    <Link to="/ResetPassword">
                                        Forgot password ?
                                    </Link>
                                </span>
                            </div>
                        </div>

                    </div>
                </section>


            </div>
        </>
    )
}

export default Signin
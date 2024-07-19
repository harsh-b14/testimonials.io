import React from 'react'
import "./ResetPassword.css"
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'


function ResetPassword() {
    return (
        <>
            <section>
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 forgot-container">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md items-center">
                        <div className="mb-2 flex justify-center mt-6">
                            <svg
                                width="95"
                                height="47"
                                viewBox="0 0 95 47"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.7909 21.3225L10.8297 47.0005H25.9C32.9458 47.0005 36.36 42.9112 37.1863 40.8666C39.7524 36.176 45.3151 25.977 47.0375 22.7056C48.7598 19.4342 52.0609 18.8168 53.4961 18.9171H79.2656C84.0672 18.9171 87.7902 15.8702 89.0515 14.3468L94.2706 4.78516H59.0415C56.7972 4.78516 55.5838 6.58924 55.2576 7.49127C54.8444 8.2129 53.5222 10.5943 51.539 14.3468C49.0599 19.0373 44.0365 18.9171 44.1669 18.9171C44.2974 18.9171 30.1405 18.8569 27.9224 18.9171C26.1479 18.9652 25.0953 20.5407 24.7909 21.3225Z"
                                    fill="#0085FB"
                                />
                                <path
                                    d="M5.02342 5.20662L0 14.1669L43.645 14.1669C45.8893 14.1669 47.1027 12.2826 47.4289 11.3405L53.4961 0.215356C42.4055 0.235401 19.0629 0.263464 14.4179 0.215356C9.77283 0.167247 6.21947 3.52282 5.02342 5.20662Z"
                                    fill="#0CE1FA"
                                />
                            </svg>
                        </div>
                        <h2 className="text-center sm:text-2xl md:text-3xl lg:text-4xl font-['poppins'] text-white mt-4">
                            Reset password
                        </h2>
                        <form action="#" method="POST" className="mt-8">
                            <div className="space-y-5 ">
                                <div className="mt-2 font-['Raleway']">
                                    <input
                                        className="flex px-6 py-2.5 w-full bg-[rgba(217,217,217,0)] border-solid border-[#6881a4] border-4 rounded-[16px] text-md placeholder:text-gray-400 hover:bg-[rgba(210,215,228,0.3)] hover:placeholder:text-black hover:border-[#8B94AD] focus:bg-gray-500 focus:text-black
                                                     focus:outline-none transition-all duration-200 focus:ring-offset-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Enter email address"
                                    ></input>
                                </div>
                                <div className="mt-2 font-['Raleway'] flex w-full border-solid border-[#6881a4] border-4 rounded-[16px] hover:bg-[rgba(210,215,228,0.3)]">
                                    <input
                                        className="flex px-6 py-2.5 w-4/5 bg-[rgba(217,217,217,0)] text-sm placeholder:text-gray-400  hover:placeholder:text-black hover:border-[#8B94AD] focus:bg-gray-500 focus:text-black
                                                     focus:outline-none transition-all duration-200 focus:ring-offset-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Enter otp"
                                    >
                                    </input>
                                    <Link to="/signin" className="flex items-center">
                                        <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-2  font-medium rounded-lg text-xs px-3 py-1 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800" >Verify OTP</button>
                                    </Link>
                                </div>
                                <p className='sm:text-xs md:text-sm lg:text-tiny pl-4 pt-0.5'
                                    style={{
                                        color: '#8B94AD',
                                        fontFamily: 'Raleway',
                                        textAlign: 'left',
                                        fontWeight: '400',
                                    }}>
                                    otp has been sent to your registered email address
                                </p>
                                <div className="mt-2 font-['Raleway'] items-center flex">
                                    <input
                                        className="flex px-3.5 py-2.5 w-full bg-[rgba(217,217,217,0)] border-solid border-[#6881a4] border-4 rounded-[16px] text-sm placeholder:text-gray-400 hover:bg-[rgba(210,215,228,0.3)] hover:placeholder:text-black hover:border-[#8B94AD] focus:bg-gray-500 focus:text-black
                                                     focus:outline-none transition-all duration-200 focus:ring-offset-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Reset password"
                                    ></input>
                                </div>
                                <div className="mt-2 font-['Raleway']">
                                    <input
                                        className="flex px-3.5 py-2.5 w-full bg-[rgba(217,217,217,0)] border-solid border-[#6881a4] border-4 rounded-[16px] text-sm placeholder:text-gray-400 hover:bg-[rgba(210,215,228,0.3)] hover:placeholder:text-black hover:border-[#8B94AD] focus:bg-gray-500 focus:text-black
                                                     focus:outline-none transition-all duration-200 focus:ring-offset-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Confirm password"
                                    ></input>
                                </div>
                                <div>
                                    <Link to="/signin">
                                        <button
                                            type="button"
                                            className="inline-flex w-full items-center justify-center rounded-xl  px-3.5 py-2.5 leading-7 text-white font-['poppins']"
                                            style={{
                                                    background:
                                                    'linear-gradient(329deg, rgba(147,170,198,1) 1%, rgba(114,62,168,1) 42%, rgba(85,43,129,1) 72%, rgba(60,26,95,1) 98%)'
                                                    }}
                                                >
                                                Signin  <ArrowRight className="ml-2" size={16} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResetPassword
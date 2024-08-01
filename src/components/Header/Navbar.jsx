import React, { useEffect } from "react";
import Logo from "./Logo";
import { Link } from 'react-router-dom'
import { CheckCircle, ChevronDown, ChevronUp, Menu, Star, X } from 'lucide-react'
import "./Header.css"
import { menuItems } from "../../constants";
import axios from "axios";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        // const  data  = await axios.get('http://localhost:8000/user/current_user');
        // console.log(data);

        // axios.get("http://localhost:8000/api/user/current-user")
        // .then((result) => {
        //     console.log(result);
        // })

        const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:8000/user/current-user');
              console.log(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    return (
        <>
            <nav className="w-5/6 lg:max-w-screen-lg max-w-screen-md h-16 navbar m-auto px-4 py-2 rounded-lg flex items-center justify-between text-base sm:text-sm md:text-tiny lg:text-base " style={{ backgroundColor: "rgba(139, 148, 173, 0.51)" }}>
                <div className="flex justify-center items-center h-14 px-2 py-1 rounded-md ">
                    <Logo/>
                </div>
                <div className="hidden lg:flex bg-slate-500 h-12 mr-1 my-0.5 px-2 py-1 rounded-lg items-center justify-between w-4/5 text-white navLink" style={{ backgroundColor: "rgba(3, 9, 32, 1)" }}>
                    <div className="mx-20">
                        <ul className="flex space-x-8">
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-sm  hover:text-slate-300"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className=" items-center gap-8 mx-8 ">
                            
                        <Link to="/signin" className="flex items-center">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2  font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800">Sign in</button>
                        </Link>
                        {/* <Link to="/signup" className="flex items-center">
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2  font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800">Sign up</button>
                        </Link> */}

                    </div>
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="navLink absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden" >
                        <div className="divide-y-2 divide-gray-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5" style={{ backgroundColor: "rgba(139, 148, 173)   " }}>
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                            <img src="LogoSymbol.svg" width="60"
                                                height="60"></img>
                                        </span>
                                        <span className="font-bold">Testimonials.io</span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <Link to="/signin" className="flex items-center">
                                <button
                                    type="button"
                                    className="mt-4 w-full rounded-md bg-blue-700 px-3 py-2 text-sm text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Sign In
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
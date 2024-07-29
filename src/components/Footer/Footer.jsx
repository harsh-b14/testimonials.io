import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Header/Logo"

export default function Footer() {
    return (
        <section className="relative overflow-hidden py-10 "
         style={{
            backgroundImage: "URL('footer-bg.svg')",
            backgroundPosition: "center",
            backgroundSize:"cover",
            borderRadius: "3rem 3rem 0 0"
         }}
        >
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center ">
                                <Logo/>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-5 sm:text-lg md:text-xl lg:text-xl font-[evolventa] uppercase text-[#C6CFDC]">
                                Contacts
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-semibold text-white hover:text-gray-700 font-[evolventa-regular]"
                                        to="https://github.com/harsh-b14"
                                    >
                                        Harsh Bhanderi
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-semibold text-white hover:text-gray-700 font-[evolventa-regular]"
                                        to="https://github.com/HenishTrada/"
                                    >
                                        Henish Trada
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-700 font-[evolventa-regular]"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-700 font-[evolventa-regular]"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-5 sm:text-lg md:text-xl lg:text-xl font-[evolventa] uppercase text-[#C6CFDC]">
                                Solution
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-700 font-[evolventa-regular]"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-700 font-[evolventa-regular]"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-700 font-[evolventa-regular]"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-700 font-[evolventa-regular]"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-5 sm:text-lg md:text-xl lg:text-xl font-[evolventa] uppercase text-[#C6CFDC]">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-700 font-[evolventa-regular]"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-700 font-[evolventa-regular]"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-white hover:text-gray-700 font-[evolventa-regular]"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
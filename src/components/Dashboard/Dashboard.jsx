import React from 'react'
import Navbar from '../Header/Navbar';
import './Dashboard.css'
import ReviewImage from './ReviewImage';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Snowfall from 'react-snowfall';
import { useEffect } from 'react';
import axios from 'axios';


const Dashboard = () => {

    const [user, setUser] = React.useState(null);

    useEffect(() => {
        const getUserData = async () => {
            const userData = await axios.get("/user/current-user", {
                withCredentials: true
            });
            console.log("User data: ", userData);
            if (userData.data) {
                console.log("user data || data: ", userData.data.data.user.username);
                // dispatch(storeLogin(userData));
                setUser(userData.data.data.user);
                console.log("if condition completed");
            }
        }
        getUserData();
    }, [])



    return (
        <>
            <Navbar />

            <div className="dashboard-container bg bg-white mb-2 lg:pt-6 lg:mb-8 dashboardbg-gradient" >


                <div className='flex justify-start'>

                    <div className='grid grid-cols-1 lg:grid-cols-2 m-8 lg:mt-28 mt-20 '>

                        <div className='mb-4 md:ml-9 md:mb-12 align-text-bottom'>
                            <p className='font-[Evolventa] inline-block bg-[#4C5B83] px-2 py-1 rounded-full text-[10px] md:text-sm lg:text-sm ' >New article</p>
                            <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl mt-2'
                                style={{
                                    fontFamily: 'inter'
                                }}
                            >Reviews vs. Testimonials? Why <br />You Need Both to Succeed</p>
                            <p className='text-white text-[12px] md:text-lg lg:text-xl leading-tight font-[inter-regular] md:w-11/12 font-[100] mt-1'
                            >
                                What's the difference between a review and a testimonial, do you need both? and how can you encourage your customers to leave both? Keep reading to find out!
                            </p>
                            <button className="button text-white bg-blue-700 hover:bg-blue-600 focus:ring-2 flex font-medium rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 mt-6 button text-[10px] md:text-sm lg:text-sm ">Learn more</button>
                        </div>

                        <div className='flex justify-center items-center'>
                            <ReviewImage />
                        </div>
                    </div>
                    <Snowfall snowflakeCount={100} radius={[0.5, 0.3]} speed={[1.0, 2.0]} />
                </div>
            </div>

            <div className='overview-container w-5/6 mx-auto lg:mt-14 md:mt-10 mb-6 md:mb-8 lg:mb-16'>
                <h1 className='font-[inter-semibold] text-xl md:text-2xl lg:text-3xl text-left w-full'>Overview</h1>
                <div className='flex flex-col lg:flex-row md:flex-row   justify-between lg:gap-12 md:gap-12'>
                    <div className='rectangle mt-4 gap-3 w-5/6'
                        style={{
                            height: 'auto',
                            borderRadius: '6px',
                            backgroundColor: '#ffffff',
                            border: '1px solid #4c5b83',
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>
                        <div className='flex justify-center items-center'>
                            <img src='Video-call.svg' width='30' className='Video-icon mx-4 my-2'></img>
                        </div>
                        <div className='flex flex-col my-2'>
                            <p className='font-[inter-regular]'>Video</p>
                            <p className='font-[inter-semibold]'>0</p>
                        </div>
                    </div>

                    <div className='rectangle mt-4 gap-3 w-5/6'
                        style={{
                            height: 'auto',
                            borderRadius: '6px',
                            backgroundColor: '#ffffff',
                            border: '1px solid #4c5b83',
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>
                        <div className='flex justify-center items-center'>
                            <img src='Happy.svg' width='30' className='Video-icon mx-4 my-2'></img>

                        </div>
                        <div className='flex flex-col my-2'>
                            <p className='font-[inter-regular]'>video credits</p>
                            <p className='font-[inter-semibold]'>0</p>
                        </div>
                    </div>

                    <div className='rectangle mt-4 gap-3 w-5/6'
                        style={{
                            height: 'auto',
                            borderRadius: '6px',
                            backgroundColor: '#ffffff',
                            border: '1px solid #4c5b83',
                            display: 'flex',
                            flexWrap: 'wrap'
                        }}>
                        <div className='flex justify-center items-center'>
                            <img src='Briefcase.svg' width='30' className='Video-icon mx-4 my-2'></img>
                        </div>
                        <div className='flex flex-col my-2'>
                            <p className='font-[inter-regular]'>Plan</p>
                            <p className='font-[inter-semibold]'>Free plan</p>
                        </div>
                    </div>
                    
                </div>
            </div >

            <div className='mb-12'>
                <div className='space-container w-5/6 mx-auto lg:mt-14 md:mt-10 mb-8 lg:mb-16 items-center flex justify-between'>
                    <h1 className='font-[inter-semibold] text-xl md:text-2xl lg:text-3xl text-left inline'>Spaces</h1>
                    <Link to="/Space1">
                        <button className="text-white bg-[#5182FFFF] hover:bg-blue-800 focus:ring-2  font-medium font-[inter-semibold] rounded-md text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 inline">+ Create a new spaces</button>
                    </Link>
                </div>

                <div className='flex w-5/6 mx-auto lg:mt-14 md:mt-10 mb-6 md:mb-8 lg:mb-16'>
                    {user ? (

                        <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 md:gap-12">
                            <li className='col-span-1 flex shadow-sm rounded-md border border-[#4c5b83]  hover:shadow-md font-Inter w-full' onClick={() => navigateToSpaceInfo(user.id)}>
                                <img src='no-space.svg' className='bg-white object-contain inline-flex items-center justify-center w-20 h-auto rounded-l-md cursor-pointer'></img>

                                <div className='flex-1 flex items-center justify-between  bg-white dark:hover:bg-gray-100 rounded-r-md border-l border-[#4c5b83]'>
                                    <div className='flex-1 p-4 cursor-pointer '>
                                        <div className='text-gray-600 test-md font-medium hover:text-gray-800'>{user.username}</div>

                                        <div className='grid grid-cols-2 mt-2'>
                                            <p className='text-gray-500 text-sm pr-14'>
                                                Videos :{user.username}
                                            </p>
                                            <p className='text-gray-500 text-sm'>
                                                Text : {user.username}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>




                    )


                        : (<img src='no-space.svg' className='no-space'></img>)}
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Dashboard
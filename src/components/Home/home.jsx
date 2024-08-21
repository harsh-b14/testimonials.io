import React from 'react';
import './Home.css';
import Navbar from '../Header/Navbar';
import StarsCanvas from './star';

const Home = () => { 
    return (
        <>
            <Navbar />

            <div className="home-container homebg-gradient" style={{
                // backgroundColor: "black",
            }} >
                
                {/* <div className="circle circle-pink2"></div> */}
                {/* <div className="circle circle-blue2 "></div> */}
                <div className='flex pt-32 lg:pt-40'>
                
                    <div className='text-container w-full relative'>
{/* 
                    <div className="-z-10 flex  absolute right-8  w-6/12 lg:-top-32 md:-top-20 bottom-2" >
                        <img alt="" src="planet.svg" className=''  />
                    </div>   */}

                        <h1 className="text-white text-base sm:text-xl md:text-4xl lg:text-6xl font-Inter font-[700]" style={{
                        }}>Get testimonial from your <br /> customer  <span className='text-base sm:text-2xl md:text-4xl lg:text-5.5xl font-Evolventa' style={{
                            color: 'rgba(255, 255, 255, 0.6)',
                        }}> <span className="bg-clip-text text-transparent bg-gradient-to-l from-pink-500 to-blue-500" id="id19a"> → by<br /> professionals</span></span></h1>
                        <button className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-2 font-Evolventa font-semibold rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 mt-6">Try FREE now</button>
                    </div>

                    
                </div>
                <StarsCanvas/>

            </div>



        </>
        
    );
};

export default Home;

import React from 'react';
import './Home.css';
import Navbar from '../Header/Navbar';

const Home = () => {
    return (
        <>
                <Navbar />

            <div className="home-container" style={{
                backgroundColor: "rgba(0, 1, 29, 1)",
            }} >

                <div className='text-container pt-32 lg:pt-48'>
                    <h1 className="text-white text-base sm:text-xl md:text-4xl lg:text-6xl font-Inter font-[700]" style={{
                    }}>Get testimonial from your <br /> customer  <span className='text-base sm:text-2xl md:text-4xl lg:text-5.5xl font-Evolventa' style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                    }}> → by<br /> professionals</span></h1>
                    <button className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-2 font-Evolventa font-semibold rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 mt-6">Try FREE now</button>
                </div>

            </div>
            


        </>
    );
};

export default Home;

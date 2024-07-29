import React from 'react';
import './Home.css';
import Navbar from '../Header/Navbar';

const Home = () => {
    return (
        <>
        <div className="home-container" >
            <Navbar/>
            <div className='text-container'>
            <h1 className=" text-white text-base sm:text-xl md:text-4xl lg:text-6xl" style={{
                fontWeight: '600',
                fontFamily:'inter'
            }}>Get testimonial from your <br/> customer  <span className='text-base sm:text-2xl md:text-4xl lg:text-5.5xl' style={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontFamily :'Evolventa'
            }}> → by<br/> professionals</span></h1>
            <button className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-2  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 mt-6 button">Try FREE now</button>
            </div>
        </div>

        
        </>
    );
};

export default Home;

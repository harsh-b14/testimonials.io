import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling
import Navbar from '../Header/Navbar';

const Home = () => {
    return (
        <>
        <div className="home-container" style={{borderRadius : "0 0 5rem 5em"}} >
            <Navbar/>
            <div className='text-container'>
            <h1 className="text text-white text-base sm:text-2xl md:text-4xl lg:text-6xl">Get testimonial from your <br/> customer  <span className='text-base sm:text-1xl md:text-3xl lg:text-5.5xl'> → by<br/> professionals</span></h1>
            <button className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-2  font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 mt-6">TRY FREE NOW</button>
            </div>
        </div>
        </>
    );
};

export default Home;

import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling
import Navbar from '../Header/Navbar';

const Home = () => {
    return (
        <>
        <div className="home-container" >
            <Navbar/>
            <div className='text-container'>
            <h1 className="text text-white text-6xl">Get testimonial from your <br/> customer  <span className='lw-text'> → by<br/> professionals</span></h1>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-6">TRY FREE NOW</button>
            </div>
        </div>
        </>
    );
};

export default Home;

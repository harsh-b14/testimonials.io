import React from 'react';
import './Home.css';
import Navbar from '../Header/Navbar';
import StarsCanvas from './star';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container homebg-gradient" style={{}}>
        <div className='flex pt-32 lg:pt-48'>
          <div className='text-container w-10/12 relative mx-auto p-12 flex flex-row' style={{
            backgroundColor: "rgba(139, 148, 173, 0.21)",
            backdropFilter: "blur(30px)",
            boxShadow: "0px 0px 30px rgba(227, 228, 237, 0.2)",
            border: "1.2px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "50px "
          }}>
            <div className='w-3/4'>
              <h1 className="text-white text-base sm:text-2.5xl md:text-4xl lg:text-5.5xl font-Inter font-[700] ">
                Get testimonial from your <br /> customer
                <span className='text-base sm:text-2.5xl md:text-4xl lg:text-5.5xl font-Evolventa' style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-l from-pink-500 to-blue-500" id="id19a"> → by<br /> professionals</span>
                </span>
              </h1>
              <Link to='/dashboard'>
                <button className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-2 font-Evolventa font-semibold rounded-full text-[0.7rem] px-6 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6 flex items-center justify-center sm:text-xs sm:px-4 sm:py-2 md:text-sm md:px-6 md:py-2 ">
                  <p className='font-Inter'>Explore Testimonial.io </p>
                  <img src='./public/Circled-Right.svg' alt="arrow-right" className=" -mr-2 " />
                </button>
              </Link>
            </div>
            <div className='w-1/2 spline-hidden'>
              <iframe src='https://my.spline.design/particles-4f0a5a1b4a544fc95c9a8586e52a2a57/' frameBorder='0' width='100%' height='100%'></iframe>
            </div>
          </div>
        </div>
        <StarsCanvas />
      </div>
    </>
  );
};

export default Home;

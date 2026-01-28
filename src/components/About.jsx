import React from 'react'
import AboutImg from '../assets/kavin_buggy_ride.jpg'

const About = () => {
    return (
        <div className='bg-black text-white py-10' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImg} alt=""
                        className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                    <div className='flex-1'>
                        <p className='mt-4 text-lg py-2'>
                            I'm a Computer Science undergraduate at the National University of Singapore (NUS) with a strong interest in software engineering and data-driven solutions. I enjoy designing and building scalable, user-focused applications that solve real-world problems. From writing clean, efficient code to deploying full-stack projects, I’m always eager to learn and push my technical boundaries and explore new tools and frameworks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
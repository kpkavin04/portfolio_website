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
                        <p className='mt-4 text-lg py-6'>
                            I'm a Business Analytics undergraduate at National University of Singapore(NUS) with a passion for turning data into insights and building cool tech solutions. I love tackling challenges and finding smart, efficient ways to solve problems. I'm a charismatic and driven individual—always eager to learn, take the lead when needed and put in the hard work to make things happen. Whether it’s coding, analyzing trends, or brainstorming innovative ideas, I thrive on making an impact and continuously growing along the way.
                        </p>
                        <div className='flex items-center py-1'>
                            <label htmlFor="htmlandcss" className='w-2/12'>Full-stack Development</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                                transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                                    
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center py-1'>
                            <label htmlFor="htmlandcss" className='w-2/12'>Data Analysis</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                                transform transition-transform duration-300 hover:scale-105 w-10/12'>

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center py-1'>
                            <label htmlFor="htmlandcss" className='w-2/12'>Management</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                                transform transition-transform duration-300 hover:scale-105 w-11/12'>

                                </div>
                            </div>
                        </div>
                        <div className='flex items-center py-1'>
                            <label htmlFor="htmlandcss" className='w-2/12'>Machine Learning</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                                                transform transition-transform duration-300 hover:scale-105 w-8/12'>

                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
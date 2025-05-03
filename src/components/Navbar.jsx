import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='w-full bg-black text-white px-8 fixed top-0 left-0 w-full z-50'>
            <div className='w-full py-4 flex justify-between items-center'>
                <div className='text-3xl font-bold'>
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer">PARTHIPAN KAVIN</Link>
                </div>
                <div className='space-x-8 text-2xl'>
                    <Link to="about" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>About Me</Link>
                    <Link to="service" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>Services</Link>
                    <Link to="projects" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>Projects</Link>
                    <Link to="experience" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>Experience</Link>
                    <Link to="certifications" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>Certifications</Link>
                    <Link to="techSkills" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>Technical Skills</Link>
                    <Link to="contact" smooth={true} duration={500} className='hover:text-gray-400 cursor-pointer'>Contact Info</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

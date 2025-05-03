import React, { useState, useEffect } from 'react'
import ProfileImg from '../assets/kavin_pic.jpg'
import { motion } from "framer-motion";
import Resume from '../assets/Kavin_Parthipan_Resume.pdf';

const Profile = () => {
    const typedItems = [
        "Software Engineer",
        "Product Manager",
        "Data Analyst",
        "Machine Learning Enthusiast"
    ];

    return (
        <div className='bg-black text-white text-center py-20' id='home'>
            <img src={ProfileImg} alt='' className='mx-auto mb-8 w-48 h-48 rounded-full object-cover 
                                                    transform transition-transform durtion-300
                                                    hover:scale-105'/>
            <h1 className='text-6xl font-bold'>
                Hi, I'm {" "}
                <span className='text-transparent bg-clip-text 
                                    bg-gradient-to-r from-green-400
                                    to-blue-500'>Kavin</span>
            </h1>
            <p className={`mt-2 text-3xl text-white-100 font-bold`}>
                I'm a <TypewriterText texts={typedItems} />
            </p>
            <div className='mt-8 space-x-4'>
                <a href="https://www.linkedin.com/in/kavin-parthipan/" target="_blank" rel="noopener noreferrer">
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold 
                                    hidden md:inline transform transition-transform duration-300
                                    hover:scale-110 px-4 py-2 rounded-full'>
                        Connect with me
                    </button>
                </a>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                    <button className='bg-gradient-to-r from-blue-400 to-green-500 text-white font-bold 
                                    hidden md:inline transform transition-transform duration-300
                                    hover:scale-110 px-4 py-2 rounded-full'>
                        Resume
                    </button>
                </a>
            </div>
        </div>
    )
}

const TypewriterText = ({ texts }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (isTyping) {
                const currentText = texts[currentIndex];
                if (displayText.length < currentText.length) {
                    setDisplayText((prevText) => currentText.slice(0, prevText.length + 1));
                } else {
                    setIsTyping(false);
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        setIsTyping(true);
                        setDisplayText("");
                        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                    }, 2000);
                }
            }
        }, 100);

        return () => {
            clearInterval(typingInterval);
        };
    }, [currentIndex, isTyping, texts, displayText]);

    return (
        <span className="inline-block text-transparent bg-clip-text 
                                    bg-gradient-to-r from-green-400
                                    to-blue-500">
            {displayText.split('').map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                >
                    {char}
                </motion.span>
            ))}
            {isTyping && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block ml-1"
                >
                    |
                </motion.span>
            )}
        </span>
    );
};

export default Profile
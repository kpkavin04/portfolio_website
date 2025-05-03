import React from 'react'
import { FaEnvelope, FaPhone, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='bg-black text-white py-10' id='contact'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Contact Info</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <div className='flex-1'>
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                                        from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
                        <p>I'm open to discussing projects or internship opportunities.</p>
                        <div className='mb-4 mt-8'>
                            <FaEnvelope className='inline-block text-green-400 mr-2 hover:scale-105' />
                            <a href="mailto:e1398179@u.nus.edu" className='hover:underline'>
                                e1398179@u.nus.edu
                            </a>
                        </div>
                        <div className='mb-4 mt-8'>
                            <FaPhone className='inline-block text-green-400 mr-2 hover:scale-105' />
                            <span className='hover:underline'>+65 9147 4704</span>
                        </div>
                        <div className="flex justify-left space-x-4 my-4 md:my-0 text-4xl">
                            <a href="https://www.linkedin.com/in/kavin-parthipan/"
                                className="hover:text-white mt-8 hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/kpkavin04"
                                className="hover:text-white mt-8 hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaGithub />
                            </a>
                            <a href="https://www.instagram.com/kavinpattt"
                                className="hover:text-white mt-8 hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        {/* Form using mailto */}
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const name = e.target.name.value;
                            const email = e.target.email.value;
                            const message = e.target.message.value;
                            const mailtoLink = `mailto:e1398179@u.nus.edu?subject=Message from ${name} & body=${message}%0D%0A%0D%0A Reply to: ${email}`;
                            window.location.href = mailtoLink;
                        }} className='space-y-4'>
                            <div>
                                <label htmlFor='name' className='block mb-2'>Your Name</label>
                                <input type='text' name="name"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:border-green-400'
                                    placeholder='Enter Your Name' required />
                            </div>
                            <div>
                                <label htmlFor='email' className='block mb-2'>Your Email</label>
                                <input type='email' name="email"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:border-green-400'
                                    placeholder='Enter Your Email' required />
                            </div>
                            <div>
                                <label htmlFor='message' className='block mb-2'>Message</label>
                                <textarea name="message"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:border-green-400'
                                    rows='5'
                                    placeholder='Leave A Message' required></textarea>
                            </div>
                            <button type="submit"
                                className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
                                transform transition-transform duration-300 hover:scale-110 px-10 py-2 rounded-full'>
                                Send Email
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

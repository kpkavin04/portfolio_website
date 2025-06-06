import React from 'react'
import OPRGImg from '../assets/mrt-map.png'
import VMImg from '../assets/VoucherManagerIMG.png'
import BPTImg from '../assets/BarbellPathTrackerImg.png'

const projects = [
    {
        id: 1,
        name: "Patrol Route Generator",
        technologies: "HTML, CSS, JavaScript, Python",
        image: OPRGImg,
        github: 'https://github.com/kpkavin04/LifeHack-DriversLicense.git'
    },
    {
        id: 2,
        name: "Voucher Manager",
        technologies: "HTML, CSS, JavaScript, Python",
        image: VMImg,
        github: "https://github.com/me50/kpkavin04.git"
    },
    {
        id: 3,
        name: "Barbell Path Tracker",
        technologies: "Python, OpenCV, Streamlit",
        image: BPTImg,
        github: "https://github.com/kpkavin04/Barbell_Path_Tracker.git"
    }
]
const Projects = () => {
    return (
        <div className='bg-black text-white py-20' id='projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map(project => (
                        <div key={project.id}>
                            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
                            transform transition-transform duration-300 hover:scale-105">
                                <img src={project.image} alt="" className="rounded-lg mb-4 w-full h-48 
                                                            object-cover" />
                                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                <p className="text-gray-400 mb-4">{project.technologies}</p>
                                <a href={project.github} className="inline-block bg-gradient-to-r from-green-400 
                                                    to-blue-500 text-white px-4 py-2 rounded-full"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    GitHub Link
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects
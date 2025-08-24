import React from 'react'
import OPRGImg from '../assets/mrt-map.png'
import VMImg from '../assets/VoucherManagerIMG.png'
import BPTImg from '../assets/BarbellPathTrackerImg.png'
import SafetyFirstImg from '../assets/SafetyFirst.png'
import RizztaurantImg from '../assets/Rizztaurant.png'
import DrabroksiQuestTrackerImg from '../assets/DrabroksiQuestTracker.png'

const projects = [
    {
        id: 1,
        name: "Patrol Route Generator",
        technologies: "HTML, CSS, JavaScript, Python",
        description: "Application to optimise patrol routes taken by police officers patrolling the Mass Rapid Transit(MRT)",
        image: OPRGImg,
        github: 'https://github.com/kpkavin04/LifeHack-DriversLicense.git'
    },
    {
        id: 2,
        name: "Voucher Manager",
        technologies: "HTML, CSS, JavaScript, Python",
        description: "Website to allow users to manage their vouchers",
        image: VMImg,
        github: "https://github.com/me50/kpkavin04.git"
    },
    {
        id: 3,
        name: "Barbell Path Tracker",
        technologies: "Python, OpenCV, Streamlit",
        description: "Website to visualise the path taken by a barbell during workouts",
        image: BPTImg,
        github: "https://github.com/kpkavin04/Barbell_Path_Tracker.git"
    },
    {
        id: 4,
        name: "SafetyFirst",
        technologies: "React Native, Expo, Supabase, expressJS, openAI API",
        description: "Centralised platform for crisis reporting in Singapore",
        image: SafetyFirstImg,
        github: "https://github.com/nazeeeef007/brainhack.git"
    },
    {
        id: 5,
        name: "Rizztaurant",
        technologies: "React Native, Expo, Supabase authentication & storage, Node.js, Google Places API, Google Maps API, Groq LLM API",
        description: "Full stack mobile application that functions like a \"restaurant dating app,\" allowing users to discover, save, and manage dining options through an intuitive, Tinder-style swiping interface ",
        image: RizztaurantImg,
        github: "https://github.com/shijiken/rizztaurant.git"
    },
    {
        id: 6,
        name: "Mass Games Score Tracker",
        technologies: "Python, Telethon library",
        description: "Python script to automate the score tabulation based off text submissions of completed missions updated in a telegram groupchat",
        image: DrabroksiQuestTrackerImg,
        github: "https://github.com/kpkavin04/Drabroksi_Quest_Tracker.git"
    },
]

const Projects = () => {
    return (
        <div className='bg-black text-white py-20' id='projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {[...projects]
                        .sort((a, b) => b.id - a.id)
                        .map(project => (
                            <div key={project.id}>
                                <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
                                transform transition-transform duration-300 hover:scale-105">
                                    <img src={project.image} alt="" className="rounded-lg mb-4 w-full h-48 object-cover" />
                                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                                    <p className="text-gray-400 mb-4">{project.technologies}</p>
                                    <p className="text-1xl mb-2">{project.description}</p>
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

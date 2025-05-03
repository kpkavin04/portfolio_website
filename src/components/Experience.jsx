import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import quadrant_pic from '../assets/kavin_quadrant_pic.png';
import transcom_pic from '../assets/kavin_transcom_pic.png';
import fintech_pic from '../assets/kavin_fintech_pic.png';

const experiences = [
    {
        id: 1,
        title: "Machine Learning Analyst",
        company: "NUS Fintech Society",
        description: "Researched and implemented the RAG component in a Financial Literacy AI Tutor project. Predicted stock prices using LSTM and deployed via FastAPI.",
        image: fintech_pic, 
        date: "Aug 2024 - Present"
    },
    {
        id: 2,
        title: "Cyber Security Intern",
        company: "Quadrant360",
        description: "Conducted vulnerability assessments, documented reports, and co-developed a controlled demonstration of malware-based attacks.",
        image: quadrant_pic,
        date: "Jan 2024 - Apr 2024"
    },
    {
        id: 3,
        title: "Deputy Team Leader",
        company: "Singapore Police Force (Transcom)",
        description: "Led a team of 100+ officers, planned operations, managed crisis responses, and improved documentation efficiency using Excel.",
        image: transcom_pic, 
        date: "Dec 2022 - Nov 2023"
    }
];

const Experience = () => {
    return (
        <div className='bg-black text-white py-20' id='experience'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Experience</h2>
                <VerticalTimeline>
                    {experiences.map((exp) => (
                        <VerticalTimelineElement
                            key={exp.id}
                            className="vertical-timeline-element--work hover:scale-105"
                            contentStyle={{ background: "#1f2937", color: "#fff" }} 
                            contentArrowStyle={{ borderRight: "7px solid #3b82f6" }} 
                            date={exp.date}
                            iconStyle={{ background: "#3b82f6", color: "#fff" }} 
                            icon={<FaBriefcase />}
                        >
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <h4 className="text-lg text-gray-300">{exp.company}</h4>
                            <p className="text-gray-400">{exp.description}</p>
                            <img src={exp.image} alt={exp.company} className="mt-4 rounded-lg w-full h-full object-cover" />
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Experience;

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import python from '../assets/python.png';
import java from '../assets/java.png';
import r from '../assets/r.png';
import javascript from '../assets/javascript.png';
import typescript from '../assets/typescript.png';
import html from '../assets/html.png';
import tailwind from '../assets/tailwind.png';
import reactjs from '../assets/reactjs.png';
import mysql from '../assets/mysql.png';
import postgresql from '../assets/postgresql.png';
import mongodb from '../assets/mongodb.png';
import matplotlib from '../assets/matplotlib.png';
import pandas from '../assets/pandas.png';
import numpy from '../assets/numpy.png';
import scikitLearn from '../assets/scikitLearn.png';
import tensorflow from '../assets/tensorflow.png';
import folium from '../assets/folium.png';
import fastAPI from '../assets/fastAPI.png';
import tableu from '../assets/tableu.png';
import aws from '../assets/aws.png';
import azure from '../assets/azure.png';
import virtualbox from '../assets/virtualbox.png';
import kalilinux from '../assets/kalilinux.png';
import wireshark from '../assets/wireshark.png';
import nmap from '../assets/nmap.png';
import sentinelOne from '../assets/sentinelOne.png';

const Programming = [
    { name: 'Python', icon: python },
    { name: 'Java', icon: java },
    { name: 'R', icon: r },
    { name: 'JavaScript', icon: javascript },
    { name: 'TypeScript', icon: typescript },
    { name: 'HTML', icon: html },
    { name: 'Tailwind CSS', icon: tailwind },
    { name: 'React JS', icon: reactjs },
    { name: 'MySQL', icon: mysql },
    { name: 'PostgreSQL', icon: postgresql },
    { name: 'MongoDB', icon: mongodb },
];

const Frameworks = [
    { name: 'Matplotlib', icon: matplotlib },
    { name: 'Pandas', icon: pandas },
    { name: 'NumPy', icon: numpy },
    { name: 'ScikitLearn', icon: scikitLearn },
    { name: 'Tensorflow', icon: tensorflow },
    { name: 'Seaborn', icon: folium },
    { name: 'FastAPI', icon: fastAPI }
];

const Tools = [
    { name: 'Tableu', icon: tableu },
    { name: 'AWS', icon: aws },
    { name: 'Azure', icon: azure },
    { name: 'VirtualBox', icon: virtualbox },
    { name: 'Kali Linux', icon: kalilinux },
    { name: 'Wireshark', icon: wireshark },
    { name: 'Nmap', icon: nmap },
    { name: 'SentinelOne', icon: sentinelOne },
];

const TechSkills = () => {
    const [rows, setRows] = useState({
        Programming: [],
        Tools: [],
        Frameworks: [],
    });

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        amount: 0.2
    });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    const calculateRows = (width, techArray) => {
        let dynamicRows = [];
        let startIndex = 0;
        let rowSize = 6;

        if (width < 500) {
            dynamicRows = [
                techArray.slice(0, 3),
                techArray.slice(3, 5),
                techArray.slice(5, 8),
                techArray.slice(8, 10),
            ];
        } else {
            while (startIndex < techArray.length) {
                const endIndex = startIndex + rowSize;
                dynamicRows.push(techArray.slice(startIndex, endIndex));
                startIndex += rowSize;
                rowSize = rowSize === 6 ? 5 : 6;
            }
        }
        return dynamicRows;
    };

    useEffect(() => {
        const calculateRowsForAllCategories = () => {
            const rowsData = {
                Programming: calculateRows(window.innerWidth, Programming),
                Tools: calculateRows(window.innerWidth, Tools),
                Frameworks: calculateRows(window.innerWidth, Frameworks),
            };
            setRows(rowsData);
        };

        calculateRowsForAllCategories();

        const handleResize = () => {
            calculateRowsForAllCategories();
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const hexagonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, type: 'spring' }
        },
        hover: { scale: 1.05, zIndex: 2, transition: { duration: 0.3 } }
    };

    return (
        <div className="bg-black text-white py-20" id="techSkills">
            <style>
                {`
                .honeycomb-grid {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .honeycomb-row {
                    display: flex;
                    gap: 10px;
                }
                .hexagon {
                    width: 140px;
                    height: 140px;
                    background-color: #1f2937;
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .hexagon img {
                    width: 70%;
                    height: 70%;
                    object-fit: contain;
                }
                `}
            </style>

            <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center gap-2">
                <h2 className="text-4xl font-bold text-center mb-4">Technical Skills</h2>
                {Object.entries(rows).map(([category, categoryRows]) => (
                    <motion.div
                        key={category}
                        className="category-container w-full flex flex-col items-center"
                        animate={mainControls}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                        }}
                    >
                        <h2 className="text-transparent bg-clip-text 
                                    bg-gradient-to-r from-green-400
                                    to-blue-500 font-bold text-4xl py-4">{category}</h2>
                        <div className="honeycomb-grid">
                            {categoryRows.map((row, rowIndex) => (
                                <div
                                    key={`${category}-row-${rowIndex}`}
                                    className={`honeycomb-row ${rowIndex % 2 === 1 ? 'staggered-row' : ''}`}
                                >
                                    {row.map((tech) => (
                                        <motion.div
                                            key={tech.name}
                                            className="hexagon"
                                            variants={hexagonVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover="hover"
                                        >
                                            <img src={tech.icon} alt={tech.name} />
                                        </motion.div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default TechSkills;

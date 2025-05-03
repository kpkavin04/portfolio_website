import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const certificates = [
    {
        id: 1,
        name: "IBM Data Science Specialization",
        issuer: "IBM",
        desc: "10 Course Specialisation. Understanding data science and its methodology. Familiarity with data science tools and machine learning models.",
        certificate_id: "RWG2FBUHXEWM",
        link: "https://www.coursera.org/account/accomplishments/specialization/RWG2FBUHXEWM"
    },
    {
        id: 2,
        name: "Foundations In AI, AI4I",
        issuer: "AI Singapore",
        desc: "Understanding the theory and practical usage of supervised and unsupervised learning, deep learning and Exploratory Data Analysis(EDA).",
        certificate_id: "743739",
        link: "https://learn.aisingapore.org/certificate-verification/838A08250A-7349B0B038-14AF4F5AB/"
    },
    {
        id: 3,
        name: "CS50x",
        issuer: "Harvard",
        desc: "Introduction to computer science and programming. Covers algorithms, data structures, software engineering and web development with use of C, Python and SQL",
        certificate_id: "a9138e57-d2df-4e8b-a564-56a7b8198e55",
        link: "https://cs50.harvard.edu/certificates/a9138e57-d2df-4e8b-a564-56a7b8198e55"
    },
    {
        id: 4,
        name: "Junior Penetration Tester",
        issuer: "INE",
        desc: "Tested on practical penetration testing skills. Covers topics like network scanning, vulnerability assessment, and exploiting security weaknesses in real-world environments",
        certificate_id: "100134811",
        link: "https://certs.ine.com/025d217e-22a8-4191-a843-5f83c80bd414"
    },
];

const Certifications = () => {
    return (
        <div className='bg-black text-white py-20' id='certifications'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Certifications</h2>
                <div className="flex justify-center items-center">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className='swiper_container'
                    >
                        {certificates.map((certificate) => (
                            <SwiperSlide key={certificate.id} className="flex justify-center items-center">
                                <div className="bg-gray-800 p-10 rounded-lg shadow-lg transition transform max-w-xs">
                                    <h3 className="text-xl font-bold text-white mb-2 text-center">{certificate.name}</h3>
                                    <p className="text-gray-400 text-sm mb-2 text-bold"><strong>Issuer: {certificate.issuer}</strong></p>
                                    <p className="text-gray-300 text-sm mb-4">{certificate.desc}</p>
                                    <p className="text-gray-500 text-sm mb-4"><strong>Certificate ID:</strong> {certificate.certificate_id}</p>
                                    <a
                                        href={certificate.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full w-full text-center hover:scale-105"
                                    >
                                        View Certificate
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Certifications;

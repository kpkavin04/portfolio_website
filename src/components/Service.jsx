import React from 'react'

const services = [
    {
        id: 1,
        title: 'Full-Stack Development',
        description: 'Building scalable, high-performance web applications with seamless user experiences',
    }, 
    {
        id: 2,
        title: 'Machine Learning Engineering',
        description: 'Developing AI models to solve real-world problems and optimize decision-making',
    },
    {
        id: 3,
        title: 'Data Analysis & Visualisation',
        description: 'Turning raw data into clear, actionable insights with advanced analytics and visuals',
    },
    {
        id: 4,
        title: 'Database Management',
        description: 'Designing secure, efficient databases for seamless data storage and retrieval',
    },
    {
        id: 5,
        title: 'Product Management',
        description: 'Driving product strategy, development, and execution for impactful digital solutions',
    },
]
const Service = () => {
    return (
        <div className='bg-black text-white py-20' id='service'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map(service => (
                    <div key={service.id} className='bg-gray-800 px-6 pb-6 rounded-lg 
                                                        hover:shadow-lg transform
                                                        transition-transform duration-300
                                                        hover:scale-105'>
                            <div className='text-right text-2xl font-bold text-transparent bg-clip-text
                                            bg-gradient-to-r from-green-600 to-blue-400'>
                            {service.id}
                            </div>
                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r
                                            from-green-400 to-blue-500'>
                                {service.title}
                            </h3>
                            <p className='mt-2 text-gray-300'>
                                {service.description}
                            </p>
                    </div>))}
                
                </div>
            </div>
        </div>     
    )
}

export default Service
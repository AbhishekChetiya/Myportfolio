import React from 'react';
import photo1 from '/Photo1.png'
import TypingEffect from './Typingeffect.jsx';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

const HomeSection = () => {

    return (
        <section id="home-section" className="py-20 bg-gray-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4">Hello! I'm <span className="text-blue-600">Abhishek</span></h1>
                        <TypingEffect />
                        <h2 className="text-xl mb-6">I'm a Final Year Computer Science Engineering Student at IET, Lucknow.
                            Primarily interested in Web Development, Competitive Programming and Software Development.
                            I enjoy learning new skills and implementing them in real life!</h2>
                        <div className="flex space-x-4">
                            <Tilt options={{ max: 10, scale: 1.05, speed: 300 }}>
                                <a href="https://www.linkedin.com/in/abhishek-pandey-0b41a9229/" target="_blank" className="btn-primary bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out">
                                    Linkedin
                                </a>
                            </Tilt>
                            <Tilt options={{ max: 10, scale: 1.05, speed: 300 }}>
                                <a href="https://drive.google.com/file/d/1tPpxYJ8LsKidsz3E9SkHEWHWi_5yx-Tl/view?usp=sharing" target="_blank" className="btn-secondary bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
                                    Resume
                                </a>
                            </Tilt>
                        </div>

                    </div>
                    <div className="md:w-1/2">
                        <motion.img
                            src={photo1}
                            alt="Abhishek Pandey"
                            className="rounded-full w-80 h-80 object-cover mx-auto"
                            animate={{ x: [0, -30, 0] }}  // Moves up by 30px and back to 0
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeSection
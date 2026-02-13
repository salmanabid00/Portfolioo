import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AnimatedText from "./AnimatedText";

const Hero = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-dark text-white flex items-center justify-center pt-20"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-12 w-full flex flex-col justify-center items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        Hi, I am <span className="text-primary">Salman Abid</span>
                    </h1>
                </motion.div>

                <div className="text-2xl md:text-4xl text-gray-300 font-semibold mb-6 min-h-[60px] flex items-center justify-center">
                    <AnimatedText
                        texts={["MERN Stack Developer", "Full Stack Flutter Developer"]}
                        typingSpeed={70}
                        deleteSpeed={50}
                        pauseDuration={1000}
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="text-gray-400 max-w-2xl mx-auto text-lg mb-8"
                >
                    Building scalable web & mobile applications with modern technologies
                    and clean architecture.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    className="flex flex-col sm:flex-row gap-4 mb-10"
                >
                    <Link
                        to="projects"
                        smooth
                        duration={500}
                        offset={-80}
                        className="group text-dark w-fit px-8 py-3 my-2 flex items-center rounded-md bg-primary hover:bg-yellow-500 cursor-pointer font-bold transition-transform hover:scale-105"
                    >
                        View My Work
                    </Link>
                    <Link
                        to="contact"
                        smooth
                        duration={500}
                        offset={-80}
                        className="group text-primary w-fit px-8 py-3 my-2 flex items-center rounded-md border-2 border-primary hover:bg-primary/10 cursor-pointer font-bold transition-transform hover:scale-105"
                    >
                        Get In Touch
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.2 }}
                    className="flex gap-6"
                >
                    <a
                        href="https://github.com/salmanabid00"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary text-3xl transition-colors duration-300"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/salmanmerndev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary text-3xl transition-colors duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:salmanabid206@gmail.com"
                        className="text-gray-400 hover:text-primary text-3xl transition-colors duration-300"
                    >
                        <FaEnvelope />
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;

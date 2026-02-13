import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../assets/about.png";

const About = () => {
    return (
        <div name="about" className="w-full bg-dark text-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <div className="pb-8">
                        <h2 className="text-4xl font-bold inline border-b-4 border-primary">
                            About Me
                        </h2>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">
                        MERN Stack Developer
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                        I am a MERN Stack Developer and Full Stack Flutter Developer with{" "}
                        <span className="font-bold text-white">2+ years of hands-on learning</span> and
                        practical experience in building scalable, performant, and
                        user-focused applications.
                    </p>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                        I specialize in developing modern{" "}
                        <span className="font-bold text-white">web applications using React.js, Node.js, Express.js, and MongoDB</span>,
                        as well as{" "}
                        <span className="font-bold text-white">cross-platform mobile applications using Flutter and Dart</span>{" "}
                        with Firebase backend services.
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        I have worked on{" "}
                        <span className="font-bold text-white">real-world projects, remote internships, and production-level applications</span>,
                        focusing on clean architecture, maintainable code, API integration, and
                        intuitive user experiences.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                        <div>
                            <span className="text-primary font-bold">Email: </span>
                            salmanabid206@gmail.com
                        </div>
                        <div>
                            <span className="text-primary font-bold">Phone: </span>
                            0336-7687681
                        </div>
                        <div>
                            <span className="text-primary font-bold">Location: </span>
                            Pakistan
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="w-64 md:w-80 rounded-2xl border-4 border-primary/50 overflow-hidden shadow-lg shadow-primary/20 hover:shadow-primary/50 transition-all duration-300 group">
                        <img
                            src={AboutImg}
                            alt="About Me"
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </motion.div>
            </div>
        </div >
    );
};

export default About;

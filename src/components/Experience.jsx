import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div name="experience" className="w-full bg-dark text-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <div className="pb-12 text-center md:text-left">
                    <h2 className="text-4xl font-bold inline border-b-4 border-primary">
                        Experience
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl bg-secondary p-8 rounded-lg shadow-md border-l-4 border-primary relative"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-bold text-gray-500 pointer-events-none">
                        01
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        MERN Stack Developer Intern <span className="text-sm bg-primary text-dark px-2 py-1 rounded-full">Remote</span>
                    </h3>
                    <p className="text-xl text-primary font-medium mb-4">
                        Oct 2023 – Dec 2024
                    </p>

                    <h4 className="text-lg font-semibold text-gray-300 mb-2">Responsibilities:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-justify">
                        <li>Built and deployed multiple <span className="font-bold text-white">full-stack web applications</span> using React.js, Node.js, Express, and MongoDB, delivering scalable and production-ready solutions.</li>
                        <li>Designed <span className="font-bold text-white">reusable and modular UI components</span>, improving development efficiency and reducing code duplication by approximately 30%.</li>
                        <li>Developed and integrated secure <span className="font-bold text-white">RESTful APIs</span> with authentication and role-based access control.</li>
                        <li>Optimized application performance using <span className="font-bold text-white">lazy loading, code splitting</span>, and API response optimization, reducing load time by up to 35%.</li>
                        <li>Implemented clean architecture principles and maintained consistent coding standards to ensure scalability and long-term maintainability.</li>
                        <li>Collaborated with cross-functional teams to translate business requirements into technical solutions.</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;

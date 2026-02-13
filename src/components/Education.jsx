import React from "react";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <div name="education" className="w-full bg-dark text-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <div className="pb-12 text-center md:text-left">
                    <h2 className="text-4xl font-bold inline border-b-4 border-primary">
                        Education
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl bg-secondary p-8 rounded-lg shadow-md border-l-4 border-primary hover:shadow-primary/10 transition-shadow"
                >
                    <h3 className="text-2xl font-bold text-white mb-2">
                        BS Computer Science
                    </h3>
                    <p className="text-xl text-primary font-medium mb-4">
                        Islamia University of Bahawalpur
                    </p>
                    <span className="inline-block px-3 py-1 bg-dark text-gray-300 rounded-full text-sm">
                        2020 – 2024
                    </span>
                </motion.div>
            </div>
        </div>
    );
};

export default Education;

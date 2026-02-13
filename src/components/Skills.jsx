import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        {
            category: "Frontend (Web)",
            items: [
                { name: "HTML", level: "95%", color: "bg-blue-500" },
                { name: "CSS", level: "90%", color: "bg-blue-400" },
                { name: "Tailwind CSS", level: "95%", color: "bg-cyan-400" },
                { name: "JavaScript", level: "85%", color: "bg-yellow-400" },
                { name: "TypeScript", level: "80%", color: "bg-blue-600" },
                { name: "React.js", level: "90%", color: "bg-cyan-500" },
            ],
        },
        {
            category: "Backend (Web)",
            items: [
                { name: "Node.js", level: "80%", color: "bg-green-500" },
                { name: "Express.js", level: "85%", color: "bg-gray-400" },
                { name: "REST APIs", level: "90%", color: "bg-purple-500" },
                { name: "FastAPI", level: "70%", color: "bg-teal-500" },
            ],
        },
        {
            category: "Mobile (Flutter)",
            items: [
                { name: "Dart", level: "85%", color: "bg-blue-400" },
                { name: "Flutter", level: "90%", color: "bg-cyan-400" },
            ],
        },
        {
            category: "Backend (Flutter)",
            items: [
                { name: "Firebase", level: "85%", color: "bg-yellow-500" },
            ],
        },
        {
            category: "Database",
            items: [
                { name: "MongoDB", level: "80%", color: "bg-green-600" },
            ],
        },
        {
            category: "UI / UX",
            items: [
                { name: "Figma", level: "75%", color: "bg-purple-400" },
            ],
        },
    ];

    return (
        <div name="skills" className="w-full bg-secondary text-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-12 h-full">
                <div className="pb-12 text-center">
                    <h2 className="text-4xl font-bold inline border-b-4 border-primary">
                        Skills
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-dark p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-bold text-primary mb-6 border-l-4 border-primary pl-3">
                                {skillGroup.category}
                            </h3>
                            <div className="space-y-4">
                                {skillGroup.items.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base font-medium text-gray-300">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm font-medium text-gray-400">
                                                {skill.level}
                                            </span>
                                        </div>
                                        <div className="w-full bg-secondary rounded-full h-2.5">
                                            <motion.div
                                                className={`h-2.5 rounded-full ${skill.color}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: skill.level }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

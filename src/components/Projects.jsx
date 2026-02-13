import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const flutterProjects = [
        {
            id: 1,
            name: "Service Booking App",
            desc: "A Flutter application for booking local services.",
            tech: ["Flutter", "Dart", "Firebase"],
            github: "https://github.com/salmanabid00/Service-Booking-App",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=500",
        },
        {
            id: 2,
            name: "Multi-Tenant SaaS Platform",
            desc: "Scalable SaaS platform with multi-tenancy support.",
            tech: ["Flutter", "Dart", "Firebase"],
            github: "https://github.com/salmanabid00/Multi-Tenant-Saas-Platform",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
        },
        {
            id: 3,
            name: "Pulse Chat",
            desc: "Real-time messaging application.",
            tech: ["Flutter", "Dart", "Firebase"],
            github: "https://github.com/salmanabid00/Pulse-Chat",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=500",
        },
        {
            id: 4,
            name: "Doctor Appointment App",
            desc: "Booking system for medical appointments.",
            tech: ["Flutter", "Dart", "Firebase"],
            github: "https://github.com/salmanabid00/Doctor-Appointment-App",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500",
        },
        {
            id: 5,
            name: "Task Flow App",
            desc: "Board/List task management with real-time sync.",
            tech: ["Flutter", "Riverpod", "Firebase"],
            github: "https://github.com/salmanabid00/Task-flow-App",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=500",
        },
    ];

    const mernProjects = [
        {
            id: 1,
            name: "Event Booking App",
            desc: "Full-stack event management and booking system.",
            tech: ["MERN", "Redux", "Stripe"],
            github: "https://github.com/salmanabid00/Event-Booking-App",
            image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=500",
        },
        {
            id: 2,
            name: "MERN eCommerce Store",
            desc: "Complete eCommerce solution with cart and payment.",
            tech: ["React", "Node", "MongoDB"],
            github: "https://github.com/salmanabid00/Mern-e-Commerce-store",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=500",
        },
        {
            id: 3,
            name: "Startup Resume Craftsman",
            desc: "Resume builder/helper for startups.",
            tech: ["MERN", "OpenAI API"],
            github: "https://github.com/salmanabid00/startup-resume-craftsman",
            image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=500",
        },

        {
            id: 5,
            name: "Clothing Website",
            desc: "Modern fashion e-commerce platform.",
            tech: ["React", "Node", "MongoDB"],
            github: "https://github.com/salmanabid00/Clothing-website",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=500",
        },
        {
            id: 6,
            name: "Electronic Website",
            desc: "Electronics store with product filtering and cart.",
            tech: ["MERN", "Redux"],
            github: "https://github.com/salmanabid00/Electronic-website",
            image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=500",
        },
        {
            id: 7,
            name: "Spotify Clone",
            desc: "Music player interface with playback controls.",
            tech: ["React", "Tailwind", "Spotify API"],
            github: "https://github.com/salmanabid00/Spotify-Clone",
            image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&q=80&w=500",
        },
        {
            id: 8,
            name: "Real-Time Chat Server",
            desc: "Backend infrastructure for scalable chat apps.",
            tech: ["Node.js", "Socket.io", "Express"],
            github: "https://github.com/salmanabid00/Real-Time-Chat-Server",
            image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=500",
        },
        {
            id: 9,
            name: "Developer Portfolio",
            desc: "Personal portfolio website with animations.",
            tech: ["React", "Framer Motion", "Tailwind"],
            github: "https://github.com/salmanabid00/Portfolio",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=500",
        },
    ];

    const ProjectCard = ({ project }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
        >
            <div className="relative overflow-hidden aspect-video">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white bg-primary/20 p-3 rounded-full hover:bg-primary hover:text-dark transition-colors mx-2">
                        <FaGithub size={20} />
                    </a>
                </div>
            </div>
            <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    return (
        <div name="projects" className="w-full bg-dark text-white py-12 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                <div className="pb-8 sm:pb-12 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-primary">
                        Projects
                    </h2>
                    <p className="py-4 sm:py-6 text-gray-400">Check out some of my recent work</p>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 border-l-4 border-primary pl-3">
                    Flutter Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {flutterProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 border-l-4 border-primary pl-3">
                    MERN Stack Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {mernProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

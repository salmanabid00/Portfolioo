import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-dark py-8 text-center">
            <div className="max-w-7xl mx-auto px-4 text-gray-400">
                <h2 className="text-2xl font-bold mb-4 text-white">
                    Salman<span className="text-primary">.</span>
                </h2>

                <div className="flex justify-center gap-6 mb-6">
                    <a
                        href="https://github.com/salmanabid00"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors text-2xl"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/salmanmerndev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:salmanabid206@gmail.com"
                        className="hover:text-primary transition-colors text-2xl"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                <p className="text-sm">
                    © {new Date().getFullYear()} Salman Abid. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;

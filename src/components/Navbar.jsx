import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { id: 1, link: "home" },
        { id: 2, link: "about" },
        { id: 3, link: "skills" },
        { id: 4, link: "experience" },
        { id: 5, link: "projects" },
        { id: 6, link: "contact" },
    ];

    return (
        <div
            className={`fixed w-full h-20 z-50 transition-all duration-300 ${scrolled ? "bg-dark/90 backdrop-blur-sm shadow-md" : "bg-transparent"
                }`}
        >
            <div className="flex justify-between items-center w-full h-full px-4 md:px-12 max-w-7xl mx-auto">
                <div>
                    <h1 className="text-3xl font-bold ml-2">
                        salman<span className="text-primary">.dev</span>
                    </h1>
                </div>

                <ul className="hidden md:flex">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-primary transition-colors duration-200"
                        >
                            <Link to={link} smooth duration={500} offset={-80}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {nav && (
                    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-dark to-slate-800 text-gray-300">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-primary"
                            >
                                <Link
                                    onClick={() => setNav(!nav)}
                                    to={link}
                                    smooth
                                    duration={500}
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;

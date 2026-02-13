import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contact = () => {
    return (
        <div name="contact" className="w-full bg-secondary text-white py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <div className="pb-12 text-center">
                    <h2 className="text-4xl font-bold inline border-b-4 border-primary">
                        Get In Touch
                    </h2>
                    <p className="py-6 text-gray-400">Submit the form below to get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <motion.form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);

                            try {
                                const response = await fetch("https://formsubmit.co/ajax/salmanabid206@gmail.com", {
                                    method: "POST",
                                    body: formData,
                                });

                                if (response.ok) {
                                    toast.success("Message sent successfully!");
                                    e.target.reset();
                                } else {
                                    toast.error("Failed to send message. Please try again.");
                                }
                            } catch (error) {
                                toast.error("Something went wrong. Please check your connection.");
                            }
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col w-full md:w-1/2 gap-4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="p-3 bg-dark border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-primary transition-colors duration-300"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="p-3 bg-dark border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-primary transition-colors duration-300"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Enter your message"
                            required
                            className="p-3 bg-dark border-2 border-gray-700 rounded-md text-white focus:outline-none focus:border-primary transition-colors duration-300"
                        ></textarea>

                        <button className="text-dark bg-primary px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:bg-yellow-500 font-bold hover:scale-105 duration-300">
                            Let's Talk
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

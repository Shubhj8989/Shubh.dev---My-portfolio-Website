import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const Contact = forwardRef((props, ref) => {
    const { setCursorVariant } = useCursor();

    return (
        <section ref={ref} className="w-full py-20 px-6 relative z-10 mb-20">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-9xl font-display font-bold text-brand-dark dark:text-white mb-12 tracking-tighter transition-colors duration-300"
                >
                    Let's <span className="text-brand-accent">Talk!</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 font-sans max-w-2xl mx-auto transition-colors duration-300"
                >
                    Got a project in mind? Or just want to say hi? <br />
                    I'm always open to new ideas and opportunities.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a
                        href="mailto:shubhj788@gmail.com"
                        onMouseEnter={() => setCursorVariant("hover")}
                        onMouseLeave={() => setCursorVariant("default")}
                        className="px-10 py-5 rounded-full bg-brand-dark text-white text-xl font-bold hover:bg-brand-accent transition-colors shadow-xl"
                    >
                        shubhj788@gmail.com
                    </a>
                    <div className="flex gap-4">
                        <SocialLink icon="ri-github-fill" link="https://github.com/Shubhj8989" />
                        <SocialLink icon="ri-linkedin-fill" link="https://linkedin.com/in/shubh-jain788" />
                    </div>
                </motion.div>

                <footer className="mt-24 text-zinc-400 font-medium">
                    © 2026 Shubh Jain. Crafted with <i className="ri-heart-fill text-red-500"></i> & React.
                </footer>
            </div>
        </section>
    );
});

const SocialLink = ({ icon, link }) => {
    const { setCursorVariant } = useCursor();
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            className="w-16 h-16 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-2xl text-brand-dark dark:text-white hover:bg-brand-dark hover:text-white dark:hover:bg-white dark:hover:text-brand-dark transition-all shadow-lg hover:shadow-xl"
        >
            <i className={icon}></i>
        </a>
    )
};

export default Contact;

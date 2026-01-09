import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const Projects = forwardRef((props, ref) => {
    const { setCursorVariant } = useCursor();

    const projects = [
        {
            title: "Code Lens",
            desc: "Code Lens is an AI-powered code reviewer that analyzes your code instantly and highlights issues, fixes, and improvements in a clean, structured format. Built with React, Node.js, and Gemini AI for fast, accurate reviews.",
            tags: ["React", "Node.js", "Gemini AI"],
            link: "#",
            github: "https://github.com/Shubhj8989/CodeLens.git"
        },
        {
            title: "Bubble Blitz",
            desc: "Interactive bubble popping game with score tracking.",
            tags: ["JavaScript", "HTML5 Canvas"],
            link: "#",
            github: "https://github.com/Shubhj8989/Bubble-Blitz.git"
        },

        {
            title: "GSAP Animation",
            desc: "Showcase of high-performance web animations.",
            tags: ["GSAP", "CSS"],
            link: "#",
            github: "https://github.com/Shubhj8989/GSAP-Animation.git"
        },
    ];

    return (
        <section ref={ref} className="w-full py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-display font-bold text-brand-dark dark:text-white mb-16 tracking-tighter transition-colors duration-300"
                >
                    Major <span className="text-brand-accent">work.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 md:p-10 rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-dark dark:hover:border-white transition-all duration-300 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 hover:shadow-2xl"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-3xl font-display font-bold text-brand-dark dark:text-white group-hover:text-brand-accent transition-colors">{project.title}</h3>
                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        onMouseEnter={() => setCursorVariant("hover")}
                                        onMouseLeave={() => setCursorVariant("default")}
                                        className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all"
                                    >
                                        <i className="ri-github-fill text-xl dark:text-white"></i>
                                    </a>
                                    <a
                                        href={project.link}
                                        onMouseEnter={() => setCursorVariant("hover")}
                                        onMouseLeave={() => setCursorVariant("default")}
                                        className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white transition-all transform group-hover:rotate-45"
                                    >
                                        <i className="ri-arrow-right-up-line text-xl dark:text-white"></i>
                                    </a>
                                </div>
                            </div>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 font-sans leading-relaxed">
                                {project.desc}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-4 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-bold text-zinc-600 dark:text-zinc-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Projects;

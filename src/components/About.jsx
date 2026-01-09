import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const About = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="w-full py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-display font-bold text-brand-dark dark:text-white mb-16 tracking-tighter transition-colors duration-300"
                >
                    About <span className="text-brand-accent">me.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 p-8 md:p-12 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 transition-colors duration-300"
                    >
                        <h3 className="text-3xl font-display font-bold mb-6 dark:text-white">Hello! I'm Shubh.</h3>
                        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                            I'm a 3rd-year <b>Computer Science student</b> at LNCT Bhopal with a knack for building cool things on the web.
                            Checked out of the ordinary to craft digital experiences that stick.
                            <br /><br />
                            When I'm not debugging, I'm probably exploring new design trends or contributing to open source.
                        </p>
                    </motion.div>

                    {/* Stats/Quick Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-[2rem] bg-brand-accent text-white flex flex-col justify-between shadow-xl shadow-orange-500/20"
                    >
                        <div>
                            <div className="text-5xl font-display font-bold mb-2">2+</div>
                            <div className="text-lg opacity-80 font-medium">Years of Coding</div>
                        </div>
                        <div className="mt-8">
                            <div className="text-5xl font-display font-bold mb-2">5+</div>
                            <div className="text-lg opacity-80 font-medium">Projects Built</div>
                        </div>
                        <div className="mt-8">
                            <div className="text-5xl font-display font-bold mb-2">150+</div>
                            <div className="text-lg opacity-80 font-medium">DSA Problems Solved</div>
                        </div>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-3 p-8 md:p-12 rounded-[2rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 transition-colors duration-300"
                    >
                        <h3 className="text-3xl font-display font-bold mb-8 dark:text-white">Tech Arsenal</h3>
                        <div className="flex flex-wrap gap-4">
                            <SkillItem name="React" icon="ri-reactjs-line" />
                            <SkillItem name="Node.js" icon="ri-nodejs-line" />
                            <SkillItem name="MongoDB" icon="ri-database-2-line" />
                            <SkillItem name="JavaScript" icon="ri-javascript-line" />
                            <SkillItem name="Tailwind" icon="ri-tailwind-css-line" />
                            <SkillItem name="C++" icon="ri-code-s-slash-line" />
                            <SkillItem name="Git" icon="ri-git-branch-line" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

const SkillItem = ({ name, icon }) => (
    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-brand-dark dark:text-gray-300 font-bold hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all cursor-default">
        <i className={`${icon} text-xl`}></i>
        <span>{name}</span>
    </div>
);

export default About;

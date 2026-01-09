import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Experience = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="w-full py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-display font-bold text-brand-dark dark:text-white mb-20 tracking-tighter transition-colors duration-300"
                >
                    Journey <span className="text-brand-accent">so far.</span>
                </motion.h2>

                <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 md:ml-10 space-y-12">
                    {/* Item 1 */}
                    <TimelineItem
                        year="2024 - Present"
                        title="Vice President"
                        org="Posters & Graphics Club, LNCT"
                        desc="Leading a team of designers, organizing workshops, and managing event visuals."
                    />
                    {/* Item 2 */}
                    <TimelineItem
                        year="2023 - 2024"
                        title="Motion Editing Intern"
                        org="Boopho"
                        desc="Created engaging motion graphics and video content for social media campaigns."
                    />
                    {/* Item 3 */}
                    <TimelineItem
                        year="2023 - 2027"
                        title="B.Tech in CSE"
                        org="LNCT Bhopal"
                        desc="Pursuing Bachelor of Technology in Computer Science. CGPA: 7.9 (Current)"
                    />
                </div>
            </div>
        </section>
    );
});

const TimelineItem = ({ year, title, org, desc }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative pl-8 md:pl-16"
    >
        {/* Dot */}
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-accent border-4 border-white dark:border-zinc-900 shadow-md"></div>

        <div className="mb-2">
            <span className="inline-block px-4 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-bold text-zinc-500 dark:text-zinc-400 mb-2">{year}</span>
            <h3 className="text-3xl font-display font-bold text-brand-dark dark:text-white">{title}</h3>
            <div className="text-xl font-medium text-brand-accent">{org}</div>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mt-4 font-sans leading-relaxed">
            {desc}
        </p>
    </motion.div>
);

export default Experience;

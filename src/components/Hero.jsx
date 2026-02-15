import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import Avatar3D from './Avatar3D';

const Hero = ({ scrollToAbout }) => {
    const { setCursorVariant } = useCursor();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yAvatar = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={targetRef} className="w-full flex flex-col items-center mt-32 lg:mt-40 relative z-10 pb-20">
            {/* Background Animation - Blobs */}
            <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-400/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -60, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-400/30 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"
                />
            </div>

            <motion.div
                style={{ y: yAvatar }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                id="avatar-container"
                className="mb-8 relative z-20"
            >
                <Avatar3D />
            </motion.div>

            <motion.div
                style={{ y: yText, opacity }}
                className="flex flex-col items-center w-full"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 mb-6 relative z-10 transition-colors duration-300"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
                    </span>
                    <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">Open to Work</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full lg:w-3/4 text-5xl lg:text-7xl font-display font-bold text-center leading-[1] mt-0 text-brand-dark dark:text-white tracking-tight relative z-10 transition-colors duration-300"
                >
                    Frontend & <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-600">MERN Developer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center w-5/6 lg:w-1/2 mt-6 text-base lg:text-lg font-sans font-light text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg relative z-10 transition-colors duration-300"
                >
                    Hi, I'm Shubh Jain. I build pixel-perfect user interfaces and scalable backends.
                    Passionate about creating seamless web experiences with modern tech.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex items-center gap-4 mt-10 relative z-10"
                >
                    <a
                        href="https://drive.google.com/file/d/13BIXGaWPG06weLNJ1RewcVskHqVBRvSU/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        onMouseEnter={() => setCursorVariant("hover")}
                        onMouseLeave={() => setCursorVariant("default")}
                        className="cursor-none px-8 py-3 bg-brand-dark dark:bg-white text-white dark:text-brand-dark rounded-full text-sm font-sans font-semibold tracking-wide hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-500/10 flex items-center gap-2"
                    >
                        Download Resume
                        <i className="ri-arrow-right-up-line text-lg"></i>
                    </a>
                    <div className="flex gap-4">
                        <SocialButton icon="ri-github-fill" link="https://github.com/Shubhj8989" />
                        <SocialButton icon="ri-linkedin-fill" link="https://linkedin.com/in/shubh-jain788" />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const SocialButton = ({ icon, link }) => {
    const { setCursorVariant } = useCursor();
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            className="w-12 h-12 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xl text-gray-600 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm"
        >
            <i className={icon}></i>
        </a>
    )
}

export default Hero;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ scrollToSection, refs }) => {
    const { setCursorVariant } = useCursor();
    const [isOpen, setIsOpen] = useState(false);

    const linkHover = () => setCursorVariant("hover");
    const linkLeave = () => setCursorVariant("default");

    const navItems = [
        { name: 'About', action: () => scrollToSection(refs.aboutRef) },
        { name: 'Work', action: () => scrollToSection(refs.projectsRef) },
        { name: 'Exp.', action: () => scrollToSection(refs.experienceRef) },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-6 right-6 lg:right-12 z-50 hidden lg:flex items-center gap-4 p-1.5 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-xl shadow-zinc-200/50 dark:shadow-black/50 border border-zinc-100 dark:border-zinc-800 transition-colors duration-300"
            >
                {/* Nav Links */}
                <nav className="flex items-center px-1 gap-1">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        onMouseEnter={linkHover}
                        onMouseLeave={linkLeave}
                        className="px-5 py-2.5 text-sm font-sans font-bold text-brand-dark dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                    >
                        Home
                    </button>
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={item.action}
                            onMouseEnter={linkHover}
                            onMouseLeave={linkLeave}
                            className="px-5 py-2.5 text-sm font-sans font-bold text-brand-dark dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors relative group"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                <div className="h-6 w-[1px] bg-zinc-200 dark:bg-zinc-700 mx-1"></div>

                <ThemeToggle />

                {/* CTA */}
                <a
                    href="mailto:shubhj788@gmail.com"
                    className="ml-2 px-6 py-3 rounded-full bg-brand-accent text-white font-sans font-bold text-sm hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30"
                    onMouseEnter={linkHover}
                    onMouseLeave={linkLeave}
                >
                    Let's talk!
                </a>
            </motion.div>

            {/* Logo Top Left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed top-8 left-8 lg:left-12 z-40 font-display font-extrabold text-2xl text-brand-dark dark:text-white pointer-events-none transition-colors duration-300"
            >
                Shubh.dev
            </motion.div>


            {/* Mobile Menu Button - Fixed Right */}
            <div className="lg:hidden fixed top-6 right-6 z-50 flex items-center gap-4">
                <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md rounded-full p-1 shadow-lg border border-zinc-100 dark:border-zinc-800">
                    <ThemeToggle />
                </div>
                <button
                    onClick={toggleMenu}
                    className="w-12 h-12 rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md text-brand-dark dark:text-white flex items-center justify-center shadow-lg border border-zinc-100 dark:border-zinc-800 transition-colors duration-300"
                >
                    <i className={isOpen ? "ri-close-line text-xl" : "ri-menu-4-line text-xl"}></i>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden transition-colors duration-300"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => { item.action(); toggleMenu(); }}
                                    className="text-4xl font-display font-bold text-brand-dark dark:text-white hover:text-brand-accent transition-colors"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

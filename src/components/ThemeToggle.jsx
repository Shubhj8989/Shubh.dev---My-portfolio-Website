import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useCursor } from '../context/CursorContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const { setCursorVariant } = useCursor();

    return (
        <button
            onClick={toggleTheme}
            onMouseEnter={() => setCursorVariant("hover")}
            onMouseLeave={() => setCursorVariant("default")}
            className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 flex items-center ${theme === 'dark'
                    ? 'bg-zinc-800 border border-zinc-700 justify-end'
                    : 'bg-zinc-200 border border-zinc-300 justify-start'
                }`}
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className={`w-6 h-6 rounded-full flex items-center justify-center shadow-md ${theme === 'dark' ? 'bg-brand-dark' : 'bg-white'
                    }`}
            >
                {theme === 'dark' ? (
                    <i className="ri-moon-line text-xs text-white"></i>
                ) : (
                    <i className="ri-sun-line text-xs text-orange-500"></i>
                )}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;

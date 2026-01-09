import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import avatarImage from '../assets/1000145354-removebg-preview.png';

const Avatar3D = () => {
    const ref = useRef(null);

    // Mouse position values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth out the mouse values
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Create rotation values based on mouse position
    // 20 degrees tilt max
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate mouse position relative to the center of the element (-0.5 to 0.5)
        // ClientX/Y are relative to viewport, so we subtract rect.left/top
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
            }}
            className="relative w-48 h-48 md:w-64 md:h-64 cursor-pointer z-20"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full rounded-full"
            >
                {/* Background Glow */}
                <div
                    className="absolute inset-4 bg-gradient-to-tr from-brand-accent to-purple-500 rounded-full blur-2xl opacity-40 -z-10 animate-pulse"
                />

                {/* Floating Ring/Border */}
                <motion.div
                    style={{ translateZ: 20 }}
                    className="absolute inset-0 rounded-full border-4 border-white/20 dark:border-white/10"
                />

                {/* Avatar Image */}
                <motion.div
                    style={{
                        transform: "translateZ(50px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl"
                >
                    <img
                        src={avatarImage}
                        alt="3D Avatar"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Avatar3D;

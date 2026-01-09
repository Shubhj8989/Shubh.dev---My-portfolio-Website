import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

const CustomCursor = () => {
    const { cursorVariant } = useCursor();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const mouseMove = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY
                });
            };

            window.addEventListener("mousemove", mouseMove);

            return () => {
                window.removeEventListener("mousemove", mouseMove);
            }
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            opacity: 1,
            height: 20,
            width: 20,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "2px solid #D2B48C",
            boxShadow: "0 0 10px rgba(210,180,140,0.8), 0 0 20px rgba(160,130,90,0.4)"
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: "rgba(210, 180, 140, 0.1)",
            border: "1px solid rgba(210, 180, 140, 0.5)",
            mixBlendMode: "difference",
            boxShadow: "none"
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
            variants={variants}
            animate={cursorVariant}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }}
        />
    );
};

export default CustomCursor;

import React from 'react';
import { motion } from 'framer-motion';

// Variants for animation
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// Calculate the reverse step for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

function Stairs() {
    return (
        <>
            {/* Render 6 motion divs, each representing a step of the stairs */}
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: 0.1 * reverseIndex(index),
                    }}
                    className="h-full w-full bg-white relative"
                />
            ))}
        </>
    );
}

export default Stairs;
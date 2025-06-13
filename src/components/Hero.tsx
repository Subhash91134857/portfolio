import { motion } from 'framer-motion';
import { useSpring, animated, config } from '@react-spring/web';
import { useState, useEffect } from 'react';

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
            duration: 0.6,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const titleSpring = useSpring({
        rotateX: mousePosition.y * 20,
        rotateY: mousePosition.x * 20,
        config: config.wobbly,
    });

    const buttonSpring = useSpring({
        scale: 1,
        rotateX: mousePosition.y * 10,
        rotateY: mousePosition.x * 10,
        config: config.gentle,
    });

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-primary via-[#0c1b2f] to-tertiary text-textPrimary perspective-1000"
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-secondary mb-4 text-lg sm:text-xl tracking-wide uppercase"
                        whileHover={{ rotateX: 10, rotateY: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Hi, my name is
                    </motion.h2>

                    <animated.h1
                        style={titleSpring}
                        className="text-4xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-secondary to-white text-transparent bg-clip-text transform-gpu"
                    >
                        Subhash Kumar
                    </animated.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="text-2xl sm:text-4xl font-semibold text-textSecondary mb-6"
                        whileHover={{ rotateX: 5, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Full-Stack Developer & Problem Solver
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-textSecondary max-w-2xl mx-auto mb-8 leading-relaxed"
                        whileHover={{ rotateX: 5, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        I build clean, scalable, and impactful web apps. From ERP platforms to education tech,
                        I transform complex ideas into powerful digital products using Node.js, React, MongoDB, PostgreSQL, and more.
                    </motion.p>

                    <animated.div
                        style={buttonSpring}
                        className="transform-gpu"
                    >
                        <motion.a
                            href="#projects"
                            className="inline-block px-6 py-3 rounded-full text-white bg-secondary hover:bg-white hover:text-secondary transition-all duration-300 shadow-lg hover:shadow-secondary"
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0 0 20px rgba(100, 255, 218, 0.5)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.a>
                    </animated.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
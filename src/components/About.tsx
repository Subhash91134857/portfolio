import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const skills = [
        'JavaScript (ES6+)',
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'SQL',
        'Git',
        'AWS-EC2',
        'AWS-S3',
        'PostgreSQL',
        'Visual Studio Code',
        'CursorAI',
    ];

    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <h2 className="section-title">About Me</h2>
                        <div className="space-y-4 text-textSecondary">
                            <p>
                                Hey! I'm Subhash Kumar — a full-stack developer who loves turning real-world problems into clean, scalable products.
                                At <strong>TheMagiicians</strong>, I’ve been building modern web applications using Node.js, React, Express, and PostgreSQL,
                                working on everything from secure payments to high-performance APIs.
                            </p>
                            <p>
                                I’ve led and contributed to projects like ERP systems and school management platforms, where I refined both backend logic
                                and frontend experiences. I take pride in writing reliable code, solving real business problems, and continuously learning.
                            </p>
                            <p>
                                When I’m not coding, I’m exploring new tools, solving DSA challenges, and getting involved in ideas that drive real impact —
                                especially in education and early-stage startups.
                            </p>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-tertiary p-6 rounded-lg"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-textPrimary">Skills & Technologies</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                    className="flex items-center space-x-2"
                                >
                                    <span className="text-secondary">▹</span>
                                    <span>{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

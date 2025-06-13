import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            title: 'Salon ERP System',
            description: 'A full-stack ERP platform built for salon management. It handles bookings, user sessions, revenue tracking, and service analytics using Dockerized services and RESTful APIs.',
            technologies: ['React.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'Redis', 'Docker', 'Chart.js'],
            image: '/images/salon-erp.png',
            github: 'https://github.com/Subhash91134857/Saloon',
            live: '#',
        },
        {
            title: 'School Management Application',
            description: 'A backend application designed to manage school operations including user roles, payments, and real-time communication. Built with scalability and third-party integrations like OAuth and messaging APIs.',
            technologies: ['Express.js', 'MongoDB', 'Redis', 'Postman', 'JWT', 'Docker', 'AWS-S3'],
            image: '/images/school-app.png',
            github: 'https://github.com/Subhash91134857/school_backend',
            live: '#',
        },
        {
            title: 'Blog Website Backend',
            description: 'A secure and efficient blogging backend system. It features REST APIs, optimized MongoDB queries, user authentication, and role-based access control.',
            technologies: ['Express.js', 'MongoDB', 'Git', 'POSTMAN', 'REACT.js'],
            image: '/images/blog-site.png',
            github: 'https://github.com/Subhash91134857/Blog-Project',
            live: '#',
        },
    ];

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-tertiary rounded-lg overflow-hidden"
                            >
                                <div className="relative group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="flex space-x-4">
                                            <a
                                                href={project.github}
                                                className="text-secondary hover:text-white transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                GitHub
                                            </a>
                                            <a
                                                href={project.live}
                                                className="text-secondary hover:text-white transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-textSecondary mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-sm text-secondary bg-secondary/10 px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

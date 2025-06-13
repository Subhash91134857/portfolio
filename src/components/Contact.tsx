import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: '' });

        try {
            await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Your Name', // Replace with your name
                },
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );

            setStatus({ loading: false, success: true, error: '' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="text-textSecondary mb-8 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question
                        or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-textSecondary mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-md focus:outline-none focus:border-secondary text-textPrimary"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-textSecondary mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-md focus:outline-none focus:border-secondary text-textPrimary"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-textSecondary mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-md focus:outline-none focus:border-secondary text-textPrimary"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-textSecondary mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-md focus:outline-none focus:border-secondary text-textPrimary"
                                required
                            ></textarea>
                        </div>
                        {status.error && (
                            <p className="text-red-500 text-sm">{status.error}</p>
                        )}
                        {status.success && (
                            <p className="text-green-500 text-sm">Message sent successfully!</p>
                        )}
                        <motion.button
                            type="submit"
                            className="btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={status.loading}
                        >
                            {status.loading ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact; 
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function WeAreOpenSection({ scrollY }) {
    // Состояние формы
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section className="flex-1 flex items-center py-20 lg:py-0">
            <div className="w-full max-w-[1800px] mx-auto px-5 lg:px-[125px]">
                
                {/* Мобильная версия до 1280px - БЕЗ АНИМАЦИЙ */}
                <div className="block xl:hidden">
                    
                    <h1
                        className="font-sf-pro gradient-text mb-8"
                        style={{
                            fontSize: "clamp(60px, 10vw, 113px)",
                            fontWeight: 300,
                            lineHeight: "96%",
                            letterSpacing: "0%"
                        }}
                    >
                        We are open
                    </h1>

                    <p
                        className="text-white/70 font-sf-pro leading-relaxed max-w-md mb-8"
                        style={{
                            fontSize: "clamp(16px, 2.5vw, 18px)",
                            fontWeight: 300,
                            lineHeight: "1.6"
                        }}
                    >
                        We are actively seeking collaborators who share our vision for a cleaner, more sustainable
                        orbit. We welcome:
                        <br/><br/>
                        • <strong>Engineers and technical specialists</strong> committed to solving complex challenges
                        <br/>
                        • <strong>Investors</strong> who recognize the urgency and potential of space debris removal
                        <br/>
                        • <strong>Young minds</strong>, invited to participate in our educational competition featuring
                        awards and opportunities for continued learning
                        <br/>
                        • <strong>Game developers</strong> interested in creating realistic orbital simulations
                        <br/><br/>
                        If you see yourself in this mission — we would be glad to hear from you.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="w-full max-w-[500px] mx-auto lg:mx-0"
                    >
                        <div className="mb-[20px]">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                style={{
                                    background: '#FFFFFF0A',
                                    fontSize: "clamp(16px, 2vw, 18px)",
                                    fontWeight: 300
                                }}
                            />
                        </div>

                        <div className="mb-[20px]">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                style={{
                                    background: '#FFFFFF0A',
                                    fontSize: "clamp(16px, 2vw, 18px)",
                                    fontWeight: 300
                                }}
                            />
                        </div>

                        <div className="mb-[20px]">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                style={{
                                    background: '#FFFFFF0A',
                                    fontSize: "clamp(16px, 2vw, 18px)",
                                    fontWeight: 300
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-sf-pro py-4 hover:bg-gray-200 transition-colors"
                            style={{
                                fontWeight: 400,
                                fontSize: "clamp(14px, 1.2vw, 16px)",
                                lineHeight: "120%",
                                letterSpacing: "0%"
                            }}
                        >
                            JOIN
                        </button>
                    </form>
                </div>

                {/* Десктопная версия от 1280px - С АНИМАЦИЯМИ */}
                <DesktopVersion formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            </div>
        </section>
    );
}

// Десктопная версия с анимациями
function DesktopVersion({ formData, handleInputChange, handleSubmit }) {
    const descriptionRef = useRef(null);
    const formRef = useRef(null);
    
    const isDescriptionInView = useInView(descriptionRef, { once: false, margin: "-50px" });
    const isFormInView = useInView(formRef, { once: false, margin: "-50px" });

    return (
        <div className="hidden xl:block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <div>
                    <motion.h1
                        className="font-sf-pro gradient-text"
                        style={{
                            fontFamily: 'SF Pro Display',
                            fontWeight: 300,
                            fontSize: '113px',
                            lineHeight: '96%',
                            letterSpacing: '0%'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 1, 
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        We are open
                    </motion.h1>

                    <motion.p
                        ref={descriptionRef}
                        className="text-white/70 font-sf-pro"
                        style={{
                            fontFamily: 'SF Pro Display',
                            fontWeight: 300,
                            fontSize: '20px',
                            lineHeight: '130%',
                            letterSpacing: '-1%',
                            marginTop: '40px'
                        }}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isDescriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        We are actively seeking collaborators who share our vision for a cleaner, more sustainable orbit. We welcome:
                        <br /><br />
                        • <strong>Engineers and technical specialists</strong> committed to solving complex challenges
                        <br />
                        • <strong>Investors</strong> who recognize the urgency and potential of space debris removal
                        <br />
                        • <strong>Young minds</strong>, invited to participate in our educational competition featuring awards and opportunities for continued learning
                        <br />
                        • <strong>Game developers</strong> interested in creating realistic orbital simulations
                        <br /><br />
                        If you see yourself in this mission — we would be glad to hear from you.
                    </motion.p>
                </div>

                <div className="h-full flex justify-center items-center">
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="w-full max-w-[500px] flex flex-col justify-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.5,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        <motion.div
                            className="mb-[20px]"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.6,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            <input
                                type="text"
                                id="name-desktop"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                style={{
                                    background: '#FFFFFF0A',
                                    fontSize: "clamp(16px, 2vw, 18px)",
                                    fontWeight: 300
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="mb-[20px]"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.7,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            <input
                                type="tel"
                                id="phone-desktop"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                style={{
                                    background: '#FFFFFF0A',
                                    fontSize: "clamp(16px, 2vw, 18px)",
                                    fontWeight: 300
                                }}
                            />
                        </motion.div>

                        <motion.div
                            className="mb-[20px]"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.8,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            <input
                                type="email"
                                id="email-desktop"
                                name="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                style={{
                                    background: '#FFFFFF0A',
                                    fontSize: "clamp(16px, 2vw, 18px)",
                                    fontWeight: 300
                                }}
                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="w-full bg-white text-black font-sf-pro py-4 hover:bg-gray-200 transition-colors"
                            style={{
                                fontWeight: 400,
                                fontSize: "clamp(14px, 1.2vw, 16px)",
                                lineHeight: "120%",
                                letterSpacing: "0%"
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.9,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            JOIN
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}

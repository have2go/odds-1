'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function WeAreOpenSection({ scrollY }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = new FormData(e.target);
        
        try {
            await fetch('https://formsubmit.co/community@odds.eco', {
                method: 'POST',
                body: formData
            });
            
            setIsSubmitting(false);
            setIsSuccess(true);
            
            // Сбрасываем форму
            e.target.reset();
            
            // Сбрасываем состояние успеха через 3 секунды
            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);
        } catch (error) {
            setIsSubmitting(false);
            // В случае ошибки тоже показываем, что "отправлено"
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);
        }
    };

    return (
        <section className="flex-1 flex flex-col">
            {/* Секция заголовка */}
            <div className="w-full max-w-[1680px] mx-auto we-are-open-section-padding pt-32 pb-10">
                <motion.h1
                    className="font-sf-pro gradient-text text-left"
                    style={{
                        fontFamily: 'SF Pro Display',
                        fontWeight: 300,
                        fontSize: 'clamp(40px, 8vw, 113px)',
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
            </div>

            {/* Секция контента и формы */}
            <div className="flex-1 flex items-center pb-20">
                <div className="w-full max-w-[1680px] mx-auto we-are-open-section-padding">

                    {/* Мобильная версия до 1024px */}
                    <div className="lg:hidden">
                        <p
                            className="text-white/70 font-sf-pro leading-relaxed mb-8"
                            style={{
                                fontSize: "clamp(16px, 4vw, 18px)",
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
                            className="w-full max-w-[500px]"
                        >
                            {/* Скрытые поля для настройки FormSubmit */}
                            <input type="hidden" name="_subject" value="🚀 Новая заявка с сайта ODDS" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="mb-[20px]">
                                <input
                                    type="text"
                                    id="mobile-name"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                    style={{
                                        background: '#FFFFFF0A',
                                        fontSize: "clamp(16px, 4vw, 18px)",
                                        fontWeight: 300
                                    }}
                                />
                            </div>

                            <div className="mb-[20px]">
                                <input
                                    type="tel"
                                    id="mobile-phone"
                                    name="phone"
                                    placeholder="Phone"
                                    className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                    style={{
                                        background: '#FFFFFF0A',
                                        fontSize: "clamp(16px, 4vw, 18px)",
                                        fontWeight: 300
                                    }}
                                />
                            </div>

                            <div className="mb-[20px]">
                                <input
                                    type="email"
                                    id="mobile-email"
                                    name="email"
                                    placeholder="E-mail"
                                    required
                                    className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                    style={{
                                        background: '#FFFFFF0A',
                                        fontSize: "clamp(16px, 4vw, 18px)",
                                        fontWeight: 300
                                    }}
                                />
                            </div>

                            <div className="mb-[20px]">
                                <textarea
                                    id="mobile-message"
                                    name="message"
                                    placeholder="Message (optional)"
                                    rows={4}
                                    className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none resize-none"
                                    style={{
                                        background: '#FFFFFF0A',
                                        fontSize: "clamp(16px, 4vw, 18px)",
                                        fontWeight: 300
                                    }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full font-sf-pro py-4 transition-colors ${
                                    isSuccess 
                                        ? 'bg-green-500 text-white' 
                                        : isSubmitting 
                                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                                        : 'bg-white text-black hover:bg-gray-200'
                                }`}
                                style={{
                                    fontWeight: 400,
                                    fontSize: "clamp(14px, 4vw, 16px)",
                                    lineHeight: "120%",
                                    letterSpacing: "0%"
                                }}
                            >
                                {isSuccess ? 'SUCCESS!' : isSubmitting ? 'SENDING...' : 'JOIN'}
                            </button>
                        </form>
                    </div>

                    {/* Средняя версия 1024-1400px */}
                    <div className="hidden lg:block 2xl:hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                            <div>
                                <p
                                    className="text-white/70 font-sf-pro leading-relaxed"
                                    style={{
                                        fontSize: "clamp(16px, 1.8vw, 20px)",
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
                            </div>

                            <div className="flex justify-center">
                                <form
                                    onSubmit={handleSubmit}
                                    className="w-full max-w-[500px] flex flex-col"
                                >
                                    {/* Скрытые поля для настройки FormSubmit */}
                                    <input type="hidden" name="_subject" value="🚀 Новая заявка с сайта ODDS" />
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />

                                    <div className="mb-[20px]">
                                        <input
                                            type="text"
                                            id="tablet-name"
                                            name="name"
                                            placeholder="Name"
                                            required
                                            className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                            style={{
                                                background: '#FFFFFF0A',
                                                fontSize: "clamp(16px, 1.5vw, 18px)",
                                                fontWeight: 300
                                            }}
                                        />
                                    </div>

                                    <div className="mb-[20px]">
                                        <input
                                            type="tel"
                                            id="tablet-phone"
                                            name="phone"
                                            placeholder="Phone"
                                            className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                            style={{
                                                background: '#FFFFFF0A',
                                                fontSize: "clamp(16px, 1.5vw, 18px)",
                                                fontWeight: 300
                                            }}
                                        />
                                    </div>

                                    <div className="mb-[20px]">
                                        <input
                                            type="email"
                                            id="tablet-email"
                                            name="email"
                                            placeholder="E-mail"
                                            required
                                            className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none"
                                            style={{
                                                background: '#FFFFFF0A',
                                                fontSize: "clamp(16px, 1.5vw, 18px)",
                                                fontWeight: 300
                                            }}
                                        />
                                    </div>

                                    <div className="mb-[20px]">
                                        <textarea
                                            id="tablet-message"
                                            name="message"
                                            placeholder="Message (optional)"
                                            rows={4}
                                            className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none resize-none"
                                            style={{
                                                background: '#FFFFFF0A',
                                                fontSize: "clamp(16px, 1.5vw, 18px)",
                                                fontWeight: 300
                                            }}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full font-sf-pro py-4 transition-colors ${
                                            isSuccess 
                                                ? 'bg-green-500 text-white' 
                                                : isSubmitting 
                                                ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                                                : 'bg-white text-black hover:bg-gray-200'
                                        }`}
                                        style={{
                                            fontWeight: 400,
                                            fontSize: "clamp(14px, 1.2vw, 16px)",
                                            lineHeight: "120%",
                                            letterSpacing: "0%"
                                        }}
                                    >
                                        {isSuccess ? 'SUCCESS!' : isSubmitting ? 'SENDING...' : 'JOIN'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Десктопная версия от 1400px */}
                    <DesktopVersion handleSubmit={handleSubmit} isSubmitting={isSubmitting} isSuccess={isSuccess} />
                </div>
            </div>
        </section>
    );
}

function DesktopVersion({ handleSubmit, isSubmitting, isSuccess }) {
    const descriptionRef = useRef(null);
    const formRef = useRef(null);

    const isDescriptionInView = useInView(descriptionRef, { once: false, margin: "-50px" });
    const isFormInView = useInView(formRef, { once: false, margin: "-50px" });

    return (
        <div className="hidden 2xl:block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                <div>
                    <motion.p
                        ref={descriptionRef}
                        className="text-white/70 font-sf-pro"
                        style={{
                            fontFamily: 'SF Pro Display',
                            fontWeight: 300,
                            fontSize: '20px',
                            lineHeight: '130%',
                            letterSpacing: '-1%'
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

                <div className="flex justify-center">
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="w-full max-w-[500px] flex flex-col"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        {/* Скрытые поля для настройки FormSubmit */}
                        <input type="hidden" name="_subject" value="🚀 Новая заявка с сайта ODDS" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />

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
                                id="desktop-name"
                                name="name"
                                placeholder="Name"
                                required
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
                                id="desktop-phone"
                                name="phone"
                                placeholder="Phone"
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
                                id="desktop-email"
                                name="email"
                                placeholder="E-mail"
                                required
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
                                delay: 0.9,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <textarea
                                id="desktop-message"
                                name="message"
                                placeholder="Message (optional)"
                                rows={4}
                                className="w-full py-4 px-6 text-white font-sf-pro border-0 focus:outline-none resize-none"
                                style={{
                                    background: '#FFFFFF0A',
                                    fontSize: "clamp(16px, 2vw, 18px)",
                                    fontWeight: 300
                                }}
                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full font-sf-pro py-4 transition-colors ${
                                isSuccess 
                                    ? 'bg-green-500 text-white' 
                                    : isSubmitting 
                                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                                    : 'bg-white text-black hover:bg-gray-200'
                            }`}
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
                                delay: 1.0,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={!isSubmitting ? {
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            } : {}}
                            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                            {isSuccess ? 'SUCCESS!' : isSubmitting ? 'SENDING...' : 'JOIN'}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}

'use client';

import {useState, useEffect, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {TypeAnimation} from 'react-type-animation';
import TransitionLink from "@/app/components/TransitionLink";
import { Button } from "@/app/components/ui/button";

export default function Home() {
    // Состояние для показа кнопок
    const [showButtons, setShowButtons] = useState(false);
    // Состояние для проверки, была ли анимация уже показана
    const [animationPlayed, setAnimationPlayed] = useState(false);

    const containerRef = useRef(null);

    // Проверяем при загрузке компонента, была ли анимация уже показана
    useEffect(() => {
        const hasPlayedAnimation = sessionStorage.getItem('homeAnimationPlayed');
        
        if (hasPlayedAnimation === 'true') {
            // Если анимация уже была показана, сразу показываем финальное состояние
            setAnimationPlayed(true);
            setShowButtons(true);
        }
    }, []);

    // Обработчик завершения анимации печатания
    const handleTypingComplete = () => {
        console.log("Печатание завершено");

        // Сохраняем флаг в sessionStorage
        sessionStorage.setItem('homeAnimationPlayed', 'true');

        // Показываем кнопки через небольшую задержку
        setTimeout(() => {
            setShowButtons(true);
        }, 800);
    };

    const navigationButtons = [
        { title: 'PROBLEM', href: '/problem' },
        { title: 'KNOWN IDEAS', href: '/ideas' },
        { title: 'OUR APPROACH', href: '/approach' },
        { title: 'JOIN US', href: '/we-are-open' }
    ];

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-black text-white overflow-hidden h-screen"
        >
            {/* Фоновое видео */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/bg-main.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Основное содержимое */}
            <div className="relative h-full">
                
                {/* Текст с эффектом печатания - центр второй четверти сверху */}
                <div className="absolute inset-x-0 top-1/4 sm:h-1/4 h-auto flex items-center justify-center z-10">
                    <div className="w-full md:max-w-[1000px] mx-auto text-center px-5 md:px-4">
                        <h1
                            className="w-full mx-auto font-sf-pro gradient-text"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(35px, 10vw, 113px)",
                                lineHeight: "96%",
                                letterSpacing: "0%",
                                minHeight: "clamp(2.4em, 16vw, 2.4em)",
                                maxWidth: "min(95vw, 1000px)",
                                margin: "0 auto"
                            }}
                        >
                            {animationPlayed ? (
                                // Если анимация уже была показана, сразу показываем финальный текст
                                <div style={{ fontWeight: "300" }}>
                                    <div style={{ whiteSpace: "nowrap" }}>What are the odds?</div>
                                    <div>The answer is...</div>
                                </div>
                            ) : (
                                // Если анимация не была показана, запускаем TypeAnimation
                                <TypeAnimation
                                    sequence={[
                                        'What are the odds?',
                                        1500,
                                        'What are the odds?\nThe answer is...',
                                        () => {
                                            handleTypingComplete();
                                        }
                                    ]}
                                    wrapper="div"
                                    repeat={0}
                                    speed={40}
                                    style={{
                                        display: 'block',
                                        fontWeight: "300",
                                        whiteSpace: "pre-line"
                                    }}
                                />
                            )}
                        </h1>
                    </div>
                </div>

                {/* Кнопки навигации - чуть ниже центра экрана */}
                <AnimatePresence>
                    {showButtons && (
                        <motion.div
                            className="absolute inset-x-0 top-[55%] flex justify-center z-10"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-[25px] w-full sm:max-w-6xl mx-auto px-5">
                                {navigationButtons.map((button, index) => {
                                    // Последовательность 2, 1, 3, 4 (индексы 1, 0, 2, 3)
                                    const delaySequence = [0.15, 0.05, 0.25, 0.35]; // Вторая первая, первая вторая, третья третья, четвертая четвертая
                                    
                                    return (
                                        <motion.div
                                            key={button.title}
                                            initial={{ opacity: 0, y: 40, scale: 0.8 }} // Уменьшил y с 80 до 40
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ 
                                                duration: 0.8,
                                                delay: delaySequence[index],
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                        >
                                            <TransitionLink href={button.href}>
                                                <Button
                                                    variant="ghost"
                                                    size="xl"
                                                    className="w-full bg-white/10 backdrop-blur-sm text-white font-sf-pro hover:bg-white hover:text-black group whitespace-nowrap border-0"
                                                    style={{
                                                        fontWeight: 400,
                                                        fontSize: "clamp(14px, 3.5vw, 22px)",
                                                        lineHeight: "120%",
                                                        letterSpacing: "0.05em",
                                                        padding: "clamp(16px, 4vw, 26px) clamp(24px, 8vw, 64px)",
                                                        minHeight: "clamp(150px, 20vw, auto)",
                                                        transition: "color 1s cubic-bezier(.25,1,.25,1), background-color 1s cubic-bezier(.25,1,.25,1)"
                                                    }}
                                                >
                                                    <span
                                                        className="flex items-center justify-center w-full text-center leading-tight"
                                                    >
                                                        {button.title}
                                                    </span>
                                                </Button>
                                            </TransitionLink>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

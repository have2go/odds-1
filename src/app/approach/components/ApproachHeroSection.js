'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const AnimatedODDS = () => {
    // Цвет фона квадратов
    const bgColor = "rgba(255, 255, 255, 0.05)"; // #FFFFFF0D

    // Фраза "ODDS is the answer"
    const phrase = "ODDS is the answer";

    // Быстрые переходы для всей фразы
    const phraseTransition = {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
    };

    // Общая анимация контейнера
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2,
                when: "beforeChildren",
            }
        }
    };

    return (
        <motion.div
            className="w-full flex justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h1
                className="font-sf-pro text-center"
                style={{
                    fontSize: "clamp(40px, 16vw, 140px)",
                    fontWeight: 300,
                    lineHeight: "96%",
                    letterSpacing: "0%",
                    background: 'linear-gradient(177.58deg, #FFFFFF 11.87%, rgba(255, 255, 255, 0.2) 104.49%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                }}
                initial={{opacity: 0, y: 30}}
                animate={{opacity: 1, y: 0}}
                transition={phraseTransition}
            >
                <span className="lg:hidden">
                    ODDS<br />is the answer
                </span>
                <span className="hidden lg:inline">
                    {phrase}
                </span>
            </motion.h1>
        </motion.div>
    );
};

export default function ApproachHeroSection({ scrollY }) {
    const [showODDS, setShowODDS] = useState(false);

    // Запускаем анимацию быстрее
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowODDS(true);
        }, 400);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative lg:h-screen flex flex-col overflow-hidden min-h-[70vh] lg:min-h-0">
            {/* Фоновое изображение планеты с параллакс эффектом */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    transform: `translateY(${scrollY * 0.5}px)`,
                }}
            >
                <Image
                    src="/images/bg-main.png"
                    alt="Space background"
                    fill
                    priority
                    quality={100}
                    className="object-cover scale-110"
                />
                {/* Дополнительное затемнение для лучшей читаемости текста */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Десктопная версия */}
            <div className="hidden lg:block relative z-10 w-full h-full">
                {/* Контейнер для анимированных букв ODDS в центре верхней половины */}
                <div className="w-full h-1/2 flex items-center justify-center">
                    {showODDS && <AnimatedODDS />}
                </div>

                {/* Изображение станции в верху нижней половины экрана - уменьшено и ускорено */}
                <div className="h-1/2 flex items-start justify-center px-[125px]">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 60, scale: 0.85 }}
                        animate={{ opacity: 1, y: 0, scale: 0.9 }}
                        transition={{ 
                            duration: 1.8,
                            delay: 1.0,
                            ease: [0.25, 0.46, 0.45, 0.94] // Более плавная кривая
                        }}
                    >
                        <Image
                            src="/images/station.png"
                            alt="ODDS Station"
                            width={1080}
                            height={540}
                            quality={100}
                            className="object-contain"
                            style={{
                                filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.1))'
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Мобильная версия */}
            <div className="lg:hidden relative z-10 w-full h-screen flex flex-col justify-center">
                {/* Заголовок ODDS */}
                <div className="flex-1 flex items-center justify-center px-5">
                    {showODDS && <AnimatedODDS />}
                </div>

                {/* Изображение станции */}
                <div className="flex-1 flex items-start justify-center px-5 overflow-hidden">
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                            duration: 1.8,
                            delay: 1.0,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        style={{
                            marginLeft: 'calc(-68vw + 20px)' // Еще больше влево
                        }}
                    >
                        <Image
                            src="/images/station.png"
                            alt="ODDS Station"
                            width={874}
                            height={249}
                            quality={100}
                            className="w-full h-full object-contain"
                            style={{
                                filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.1))'
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Стрелка вниз - только на десктопе */}
            <motion.div
                className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hidden lg:block"
                onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    });
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 0.5 }}
            >
                <img
                    src="/images/icons/arrow-down.svg"
                    alt="Scroll down"
                    width={63}
                    height={63}
                    style={{
                        animation: "customBounce 3s infinite",
                        cursor: "pointer"
                    }}
                />
            </motion.div>
        </section>
    );
}

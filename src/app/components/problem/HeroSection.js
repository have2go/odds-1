'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection({ scrollY }) {
    return (
        <section className="relative lg:h-screen flex items-center justify-center overflow-hidden min-h-[70vh] lg:min-h-0">
            {/* Фоновое изображение планеты с параллакс эффектом */}
            <div 
                className="absolute inset-0 z-0"
                style={{
                    transform: `translateY(${scrollY * 0.5}px)`,
                }}
            >
                <Image
                    src="/images/bg-problem.png"
                    alt="Problem background"
                    fill
                    priority
                    quality={100}
                    className="object-cover scale-110"
                />
                {/* Дополнительное затемнение для лучшей читаемости текста */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Контент */}
            <div className="relative z-10 w-full max-w-[1680px] mx-auto px-5 lg:px-8 text-center py-12 lg:py-0">
                <motion.h1
                    className="font-sf-pro gradient-text mb-8"
                    style={{
                        fontWeight: "300",
                        fontSize: "clamp(40px, 10vw, 113px)",
                        lineHeight: "96%",
                        letterSpacing: "0%",
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 1.2, 
                        ease: [0.22, 1, 0.36, 1] 
                    }}
                >
                    Space debris represents a critical threat to our future in space
                </motion.h1>
            </div>

            {/* Стрелка вниз */}
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
                transition={{ delay: 1.5, duration: 0.5 }}
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

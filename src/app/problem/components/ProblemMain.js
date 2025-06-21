'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProblemMain({ scrollY }) {
    return (
        <section className="relative min-h-svh flex pt-[160px] md:pt-0 md:items-center justify-center overflow-hidden">
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
                    quality={50}
                    className="object-cover scale-110"
                />
                {/* Дополнительное затемнение для лучшей читаемости текста */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Контент */}
            <div className="relative z-10 w-full max-w-[1680px] mx-auto px-5 lg:px-8 text-center">
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
                        top: window.innerHeight - 80,
                        behavior: 'smooth'
                    });
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <Image
                    src="/images/icons/arrow-down.svg"
                    alt="Scroll down"
                    width={63}
                    height={63}
                    style={{
                        animation: "customBounce 3s infinite",
                        cursor: "pointer"
                    }}
                />
                <Image
                    src="/images/icons/arrow-down.svg"
                    alt="Scroll down"
                    width={58}
                    height={58}
                    className="lg:hidden"
                    style={{
                        animation: "customBounce 3s infinite",
                        cursor: "pointer"
                    }}
                />

            </motion.div>
            <motion.div
                className="absolute bottom-[60px] left-1/2 transform -translate-x-1/2 z-20 cursor-pointer lg:hidden"
                onClick={() => {
                    window.scrollTo({
                        top: window.innerHeight - 60,
                        behavior: 'smooth'
                    });
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <Image
                    src="/images/icons/arrow-down.svg"
                    alt="Scroll down"
                    width={58}
                    height={58}
                    style={{
                        animation: "customBounce 3s infinite",
                        cursor: "pointer"
                    }}
                />

            </motion.div>
        </section>
    );
}

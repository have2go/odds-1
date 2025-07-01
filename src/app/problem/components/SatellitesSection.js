'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SatellitesSection() {
    return (
        <section className="relative lg:h-screen flex items-center justify-start overflow-hidden bg-black">
            {/* Десктопная версия */}
            <div className="hidden lg:block relative z-10 w-full max-w-[1680px] mx-auto px-8 h-full">
                {/* Первый текст - выравнен к левому краю */}
                <div className="flex flex-col justify-center h-full">
                    <motion.div
                        className="text-left mb-16"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        <h2
                            className="font-sf-pro gradient-text"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(40px, 6vw, 80px)",
                                lineHeight: "96%",
                                letterSpacing: "0%",
                            }}
                        >
                            As we launch more satellites, we leave behind a growing trail of abandoned rocket parts, defunct satellites, and collision fragments
                        </h2>
                    </motion.div>
                </div>

                {/* Второй текст - абсолютно позиционирован для десктопа */}
                <motion.div
                    className="absolute right-8 bottom-[15%] z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 1.2,
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1] 
                    }}
                    style={{ right: `max(2rem, calc((100vw - 1680px) / 2 + 2rem))` }}
                >
                    <p
                        className="font-sf-pro text-gray-300 max-w-[405px] text-left ml-auto"
                        style={{
                            fontWeight: "300",
                            fontSize: "clamp(18px, 2vw, 24px)",
                            lineHeight: "140%",
                            letterSpacing: "0%",
                        }}
                    >
                        These objects, traveling at up to 40,320 km/h, create an increasingly hazardous orbital environment.
                    </p>
                </motion.div>
            </div>

            {/* Мобильная версия - простая вертикальная структура */}
            <div className="lg:hidden relative z-10 w-full max-w-[1680px] mx-auto px-5 pt-20 pb-24">
                <div className="flex flex-col gap-8">
                    {/* Первый текст */}
                    <motion.div
                        className="text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        <h2
                            className="font-sf-pro gradient-text"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(32px, 8vw, 48px)",
                                lineHeight: "96%",
                                letterSpacing: "0%",
                            }}
                        >
                            As we launch more satellites, we leave behind a growing trail of abandoned rockets, defunct satellites, and collision fragments
                        </h2>
                    </motion.div>

                    {/* Второй текст - в потоке с gap */}
                    <motion.div
                        className="text-left"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 1.2,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        <p
                            className="font-sf-pro text-gray-300"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(16px, 4vw, 20px)",
                                lineHeight: "140%",
                                letterSpacing: "0%",
                            }}
                        >
                            These objects, traveling at up to 28,000 km/h, create an increasingly hazardous orbital environment.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

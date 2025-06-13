'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';

export default function RealProblemSection() {
    return (
        <section className="relative bg-black overflow-hidden py-20 lg:py-[120px] lg:pb-[240px]">
            {/* Изображение тени в правом нижнем углу */}
            <div className="absolute bottom-0 right-0 z-0">
                <Image
                    src="/images/shadow-problem.png"
                    alt="Shadow"
                    width={800}
                    height={600}
                    className="object-contain opacity-60"
                />
            </div>

            {/* Десктопная версия - горизонтальная компоновка */}
            <div className="hidden lg:block relative z-10 w-full max-w-[1680px] mx-auto px-8">
                <div className="flex items-start space-x-16">
                    {/* Левая половина - заголовок */}
                    <div className="flex-1">
                        <motion.h2
                            className="font-sf-pro gradient-text"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(40px, 6vw, 80px)",
                                lineHeight: "96%",
                                letterSpacing: "0%",
                            }}
                            initial={{opacity: 0, x: -50}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            Is It a Real Problem?
                        </motion.h2>
                    </div>

                    {/* Правая половина - текст */}
                    <div className="flex-1">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1.2,
                                delay: 0.3,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <p
                                className="font-sf-pro text-gray-300 mb-6"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(18px, 2vw, 24px)",
                                    lineHeight: "140%",
                                    letterSpacing: "0%",
                                    maxWidth: "90%"
                                }}
                            >
                                Yes, the space debris crisis is documented and growing. While not all orbital regions are
                                equally affected, several key areas have reached concerning congestion levels.
                            </p>
                            
                            <p
                                className="font-sf-pro text-gray-300"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(18px, 2vw, 24px)",
                                    lineHeight: "140%",
                                    letterSpacing: "0%",
                                    maxWidth: "90%"
                                }}
                            >
                                With over 36,500 debris pieces larger than 10 cm currently in orbit, we're approaching a dangerous tipping point. As our modern civilization depends increasingly on satellite technology, addressing this problem becomes crucial not just for space exploration but for protecting critical infrastructure that supports daily life on Earth.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Мобильная версия - вертикальная компоновка */}
            <div className="lg:hidden relative z-10 w-full max-w-[1680px] mx-auto px-5">
                <div className="flex flex-col gap-8">
                    {/* Заголовок */}
                    <motion.h2
                        className="font-sf-pro gradient-text"
                        style={{
                            fontWeight: "300",
                            fontSize: "clamp(32px, 8vw, 48px)",
                            lineHeight: "96%",
                            letterSpacing: "0%",
                        }}
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        Is It a Real Problem?
                    </motion.h2>

                    {/* Первый абзац */}
                    <motion.p
                        className="font-sf-pro text-gray-300"
                        style={{
                            fontWeight: "300",
                            fontSize: "clamp(16px, 4vw, 20px)",
                            lineHeight: "140%",
                            letterSpacing: "0%",
                        }}
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 1.2,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        Yes, the space debris crisis is documented and growing. While not all orbital regions are
                        equally affected, several key areas have reached concerning congestion levels.
                    </motion.p>
                    
                    {/* Второй абзац */}
                    <motion.p
                        className="font-sf-pro text-gray-300"
                        style={{
                            fontWeight: "300",
                            fontSize: "clamp(16px, 4vw, 20px)",
                            lineHeight: "140%",
                            letterSpacing: "0%",
                        }}
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 1.2,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        With over 36,500 debris pieces larger than 10 cm currently in orbit, we're approaching a dangerous tipping point. As our modern civilization depends increasingly on satellite technology, addressing this problem becomes crucial not just for space exploration but for protecting critical infrastructure that supports daily life on Earth.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

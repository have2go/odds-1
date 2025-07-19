'use client';

import { motion } from 'framer-motion';
import OptimizedVideo from '@/app/components/OptimizedVideo';

export default function VideoSection() {
    return (
        <section className="relative bg-black">
            {/* Контейнер для всего контента */}
            <div className="w-full max-w-[1680px] mx-auto">

                {/* Десктоп версия - видео фон с текстом справа */}
                <div className="hidden lg:block relative overflow-hidden min-h-screen">
                    {/* Фоновое видео - смещено на 30% влево */}
                    <div className="absolute inset-0 -left-[30%] w-full h-full">
                        <OptimizedVideo
                            videoBaseName="debris"
                            className="w-full h-full object-cover"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                        />

                        {/* Градиентные фейды */}
                        <div className="absolute left-0 top-0 w-[20%] h-full bg-gradient-to-r from-black to-transparent"></div>
                        <div className="absolute right-0 top-0 w-[20%] h-full bg-gradient-to-l from-black to-transparent"></div>
                        <div className="absolute top-0 left-0 w-full h-[10%] bg-gradient-to-b from-black to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full h-[10%] bg-gradient-to-t from-black to-transparent"></div>
                    </div>

                    {/* Контент поверх видео */}
                    <div className="relative z-10 problem-section-padding flex items-center h-full">
                        <div className="flex-1"></div>
                        <div className="flex-1 flex flex-col justify-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <h3
                                className="font-sf-pro gradient-text mb-8"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(32px, 4vw, 64px)",
                                    lineHeight: "96%",
                                    letterSpacing: "0%",
                                }}
                            >
                                Kessler syndrome
                            </h3>

                            <p
                                className="font-sf-pro text-gray-300 mb-6"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(18px, 1.8vw, 24px)",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                }}
                            >
                                The most alarming aspect is the "Kessler Syndrome" – a scenario where debris density becomes high enough that collisions trigger a cascade of further collisions. This chain reaction could render certain orbits unusable for generations, potentially cutting off our access to space.
                            </p>

                            <p
                                className="font-sf-pro text-gray-300 mb-6"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(18px, 1.8vw, 24px)",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                }}
                            >
                                The most heavily polluted regions include Low Earth Orbit (LEO) at 750-1,000 km and Geostationary Orbit (GEO) at approximately 36,000 km. In 2009, we witnessed the first major accidental collision between two intact satellites – Iridium 33 and Cosmos 2251 – creating over 2,300 trackable fragments and countless smaller pieces.
                            </p>

                            <p
                                className="font-sf-pro text-gray-300"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(18px, 1.8vw, 24px)",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                }}
                            >
                                The Kessler Syndrome, first described by NASA scientist Donald J. Kessler in 1978, becomes increasingly probable as orbital debris accumulates. This runaway effect could create an impenetrable debris belt surrounding Earth, potentially making space activities impossible for generations.
                            </p>
                        </motion.div>
                        </div>
                    </div>
                </div>

                {/* Мобильная версия - видео блоком, текст под ним */}
                <div className="lg:hidden">
                    {/* Видео блок */}
                    <div className="w-full aspect-video">
                        <OptimizedVideo
                            videoBaseName="debris"
                            className="w-full h-full object-cover"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                        />
                    </div>

                    {/* Текстовый блок */}
                    <div className="px-5 pt-7 pb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <h3
                                className="font-sf-pro gradient-text mb-6"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(32px, 8vw, 56px)",
                                    lineHeight: "96%",
                                    letterSpacing: "0%",
                                }}
                            >
                                Kessler syndrome
                            </h3>

                            <p
                                className="font-sf-pro text-gray-300 mb-4"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(16px, 4vw, 26px)",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                }}
                            >
                                The most alarming aspect is the "Kessler Syndrome" – a scenario where debris density becomes high enough that collisions trigger a cascade of further collisions. This chain reaction could render certain orbits unusable for generations, potentially cutting off our access to space.
                            </p>

                            <p
                                className="font-sf-pro text-gray-300 mb-4"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(16px, 4vw, 26px)",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                }}
                            >
                                The most heavily polluted regions include Low Earth Orbit (LEO) at 750-1,000 km and Geostationary Orbit (GEO) at approximately 36,000 km. In 2009, we witnessed the first major accidental collision between two intact satellites – Iridium 33 and Cosmos 2251 – creating over 2,300 trackable fragments and countless smaller pieces.
                            </p>

                            <p
                                className="font-sf-pro text-gray-300"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(16px, 4vw, 26px)",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                }}
                            >
                                The Kessler Syndrome, first described by NASA scientist Donald J. Kessler in 1978, becomes increasingly probable as orbital debris accumulates. This runaway effect could create an impenetrable debris belt surrounding Earth, potentially making space activities impossible for generations.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

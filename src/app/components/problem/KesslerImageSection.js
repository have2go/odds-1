'use client';

import { motion } from 'framer-motion';

export default function KesslerImageSection() {
    return (
        <section className="relative flex items-start overflow-hidden bg-black pb-[340px]">
            {/* Контент */}
            <div className="relative z-10 w-full max-w-[1680px] mx-auto px-8 pt-[100px] flex">
                {/* Левая половина - пустая */}
                <div className="flex-1"></div>
                
                {/* Правая половина - текст */}
                <div className="flex-1 flex flex-col">
                    {/* Заголовок */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        <h2
                            className="font-sf-pro gradient-text mb-10"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(32px, 4vw, 48px)",
                                lineHeight: "110%",
                                letterSpacing: "0%",
                            }}
                        >
                            The Kessler Syndrome
                        </h2>
                    </motion.div>

                    {/* Первый абзац */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 1.2,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        <p
                            className="font-sf-pro text-gray-300 mb-5"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(16px, 1.5vw, 20px)",
                                lineHeight: "140%",
                                letterSpacing: "0%",
                            }}
                        >
                            The most heavily polluted regions include Low Earth Orbit (LEO) at 750-1,000 km and Geostationary Orbit (GEO) at approximately 36,000 km. In 2009, we witnessed the first major accidental collision between two intact satellites – Iridium 33 and Cosmos 2251 – creating over 2,300 trackable fragments and countless smaller pieces.
                        </p>
                    </motion.div>

                    {/* Второй абзац */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 1.2,
                            delay: 0.4,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        <p
                            className="font-sf-pro text-gray-300"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(16px, 1.5vw, 20px)",
                                lineHeight: "140%",
                                letterSpacing: "0%",
                            }}
                        >
                            The Kessler Syndrome, first described by NASA scientist Donald J. Kessler in 1978, becomes increasingly probable as orbital debris accumulates. This runaway effect could create an impenetrable debris belt surrounding Earth, potentially making space activities impossible for generations.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { motion } from 'framer-motion';

export default function ApproachFirstStepSection() {
    return (
        <section className="py-20 lg:py-32 bg-black">
            <div className="max-w-[1680px] mx-auto px-5 lg:px-[125px]">
                <div className="max-w-4xl xl:max-w-4xl">
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
                            className="font-sf-pro gradient-text mb-8 lg:mb-16"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(32px, 8vw, 64px)",
                                lineHeight: "110%",
                                letterSpacing: "0%",
                            }}
                        >
                            What is our first step?
                        </h2>
                    </motion.div>

                    {/* Основной текст */}
                    <div className="space-y-6 lg:space-y-8">
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
                                className="font-sf-pro text-gray-300"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(16px, 4vw, 24px)",
                                    lineHeight: "140%",
                                    letterSpacing: "0%",
                                }}
                            >
                                Our first step involves launching a scaled FROG prototype alongside a CubeSat that will simulate space debris. This demonstration mission will be deployed aboard a Falcon Heavy rocket, providing the perfect testing ground for our capture technology.
                            </p>
                        </motion.div>

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
                                    fontSize: "clamp(16px, 4vw, 24px)",
                                    lineHeight: "140%",
                                    letterSpacing: "0%",
                                }}
                            >
                                During this mission, the FROG will demonstrate its ability to successfully capture and secure the CubeSat, validating our core technology in the harsh environment of space. This proof-of-concept will serve as the foundation for all future operations.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 1.2,
                                delay: 0.6,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            <p
                                className="font-sf-pro text-gray-300"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(16px, 4vw, 24px)",
                                    lineHeight: "140%",
                                    letterSpacing: "0%",
                                }}
                            >
                                Once our theory is confirmed and proven in practice through this demonstration, we will proceed to the next phase: deploying the full-scale ODDS station to orbit, ready to begin active debris removal operations.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
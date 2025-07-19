'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from "@/app/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function CulturalReflectionsSection() {
    return (
        <section className="relative bg-black py-20 lg:py-0">
            <div className="w-full max-w-[1680px] mx-auto problem-section-padding">
                
                {/* Десктопная версия - оригинальная sticky логика */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16">
                    {/* Левая колонка - Sticky заголовок */}
                    <div className="sticky top-[20px] h-fit pt-[100px] pb-[220px]">
                        <motion.h2
                            className="font-sf-pro gradient-text"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(40px, 5vw, 80px)",
                                lineHeight: "96%",
                                letterSpacing: "0%",
                            }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            Cultural Reflections<br />of the Problem
                        </motion.h2>
                    </div>

                    {/* Правая колонка - Скроллируемый контент */}
                    <div className="py-[100px] space-y-5">
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
                            <Card className="relative overflow-hidden border-0 bg-transparent shadow-none">
                                <div className="relative w-full" style={{ aspectRatio: '830/572' }}>
                                    <Image src="/images/bg-gravity.jpg" alt="Gravity movie scene" fill quality={50} className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                                    <CardContent className="absolute bottom-0 left-0 right-0 p-10">
                                        <h3 className="font-sf-pro text-white mb-5" style={{fontWeight: "300", fontSize: "48px", lineHeight: "96%", letterSpacing: "0%"}}>Gravity (2013)</h3>
                                        <p className="font-sf-pro mb-0" style={{fontWeight: "300", fontSize: "clamp(18px, 1.8vw, 24px)", lineHeight: "130%", letterSpacing: "-1%", color: "#FFFFFFCC"}}>
                                            This award-winning film vividly portrays the catastrophic consequences of the Kessler Syndrome, depicting a scenario where satellite destruction triggers a chain reaction of collisions.
                                        </p>
                                    </CardContent>
                                </div>
                            </Card>
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
                            <Card className="relative overflow-hidden border-0 bg-transparent shadow-none">
                                <div className="relative w-full" style={{ aspectRatio: '830/572' }}>
                                    <Image src="/images/bg-gorkaviy.jpg" alt="Space debris illustration" fill quality={40} className="object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                                    <CardContent className="absolute bottom-0 left-0 right-0 p-10">
                                        <h3 className="font-sf-pro text-white mb-5" style={{fontWeight: "300", fontSize: "48px", lineHeight: "96%", letterSpacing: "0%"}}>Nikolai Gorkavyi</h3>
                                        <p className="font-sf-pro mb-2" style={{fontWeight: "300", fontSize: "clamp(18px, 1.8vw, 24px)", lineHeight: "130%", letterSpacing: "-1%", color: "#FFFFFFCC"}}>
                                            This astrophysicist and science fiction writer explores space debris removal in his works, particularly in the "Astrovitianka" cycle.
                                        </p>
                                        <a href="#" className="font-sf-pro underline inline-flex items-center group" style={{fontWeight: "300", fontSize: "clamp(18px, 1.8vw, 24px)", lineHeight: "130%", letterSpacing: "-1%", color: "#FFFFFFCC"}}>
                                            More about his works
                                            <ExternalLink className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </CardContent>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* Мобильная версия - заголовок и горизонтальный свайп карточек */}
                <div className="lg:hidden">
                    {/* Заголовок */}
                    <motion.h2
                        className="font-sf-pro gradient-text mb-8"
                        style={{
                            fontWeight: "300",
                            fontSize: "clamp(32px, 8vw, 48px)",
                            lineHeight: "96%",
                            letterSpacing: "0%",
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        Cultural Reflections of the Problem
                    </motion.h2>

                    {/* Горизонтальный контейнер для свайпа */}
                    <div className="overflow-x-auto custom-horizontal-scrollbar">
                        <div className="flex gap-5 pb-4" style={{ width: 'max-content' }}>
                            {/* Карточка Gravity */}
                            <motion.div
                                className="flex-shrink-0"
                                style={{ width: '320px' }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 1.2,
                                    delay: 0.1,
                                    ease: [0.22, 1, 0.36, 1] 
                                }}
                            >
                                <Card className="relative overflow-hidden border-0 bg-transparent shadow-none">
                                    <div className="relative w-full" style={{ aspectRatio: '320/240' }}>
                                        <Image src="/images/bg-gravity.jpg" alt="Gravity movie scene" fill quality={100} className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                                        <CardContent className="absolute bottom-0 left-0 right-0 p-5">
                                            <h3 
                                                className="font-sf-pro text-white mb-3"
                                                style={{
                                                    fontWeight: "300",
                                                    fontSize: "clamp(24px, 6vw, 32px)",
                                                    lineHeight: "96%",
                                                    letterSpacing: "0%"
                                                }}
                                            >
                                                Gravity (2013)
                                            </h3>
                                            <p
                                                className="font-sf-pro mb-0"
                                                style={{
                                                    fontWeight: "300",
                                                    fontSize: "clamp(14px, 3.5vw, 16px)",
                                                    lineHeight: "130%",
                                                    letterSpacing: "-1%",
                                                    color: "#FFFFFFCC"
                                                }}
                                            >
                                                This award-winning film vividly portrays the catastrophic consequences of the Kessler Syndrome.
                                            </p>
                                        </CardContent>
                                    </div>
                                </Card>
                            </motion.div>

                            {/* Карточка Nikolai Gorkavyi */}
                            <motion.div
                                className="flex-shrink-0"
                                style={{ width: '320px' }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 1.2,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1] 
                                }}
                            >
                                <Card className="relative overflow-hidden border-0 bg-transparent shadow-none">
                                    <div className="relative w-full" style={{ aspectRatio: '320/240' }}>
                                        <Image src="/images/bg-gorkaviy.jpg" alt="Space debris illustration" fill quality={100} className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                                        <CardContent className="absolute bottom-0 left-0 right-0 p-5">
                                            <h3 
                                                className="font-sf-pro text-white mb-3"
                                                style={{
                                                    fontWeight: "300",
                                                    fontSize: "clamp(24px, 6vw, 32px)",
                                                    lineHeight: "96%",
                                                    letterSpacing: "0%"
                                                }}
                                            >
                                                Nikolai Gorkavyi
                                            </h3>
                                            <p
                                                className="font-sf-pro mb-2"
                                                style={{
                                                    fontWeight: "300",
                                                    fontSize: "clamp(14px, 3.5vw, 16px)",
                                                    lineHeight: "130%",
                                                    letterSpacing: "-1%",
                                                    color: "#FFFFFFCC"
                                                }}
                                            >
                                                Astrophysicist exploring space debris removal in "Astrovitianka" cycle.
                                            </p>
                                            <a
                                                href="#"
                                                className="font-sf-pro underline inline-flex items-center group"
                                                style={{
                                                    fontWeight: "300",
                                                    fontSize: "clamp(14px, 3.5vw, 16px)",
                                                    lineHeight: "130%",
                                                    letterSpacing: "-1%",
                                                    color: "#FFFFFFCC"
                                                }}
                                            >
                                                More about his works
                                                <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </CardContent>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

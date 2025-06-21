'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ApproachOrbitSection() {
    const sectionRef = useRef(null);
    const descriptionRef = useRef(null);
    const firstBlockRef = useRef(null);
    const secondBlockRef = useRef(null);
    
    const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
    const isDescriptionInView = useInView(descriptionRef, { once: true, margin: "-100px" });
    const isFirstBlockInView = useInView(firstBlockRef, { once: true, margin: "-100px" });
    const isSecondBlockInView = useInView(secondBlockRef, { once: true, margin: "-100px" });

    return (
        <section 
            ref={sectionRef}
            className="relative text-white py-20 lg:py-[200px]"
            style={{ background: '#FFFFFF0A' }}
        >
            <div className="relative z-10 max-w-[1800px] mx-auto px-5 lg:px-[125px]">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    
                    {/* Левая часть - sticky заголовок на десктопе, обычный на мобильном */}
                    <div className="relative">
                        <div className="lg:sticky lg:top-[220px]">
                            <h2
                                className="font-sf-pro gradient-text"
                                style={{
                                    fontSize: "clamp(32px, 8vw, 70px)",
                                    fontWeight: 300,
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                    paddingBottom: "0.05em"
                                }}
                            >
                                How does FROG reach debris in different orbits?
                            </h2>
                        </div>
                    </div>

                    {/* Правая часть - скроллящийся контент */}
                    <div className="space-y-8 lg:space-y-[50px]">
                        
                        {/* Описание */}
                        <motion.p
                            ref={descriptionRef}
                            className="text-white/80 font-sf-pro leading-relaxed"
                            style={{
                                fontSize: "clamp(16px, 4vw, 18px)",
                                fontWeight: 300,
                                lineHeight: "1.6"
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isDescriptionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            Space debris can travel in a wide variety of directions and orbits, 
                            making it challenging to intercept. However, the ODDS station is 
                            equipped with a sophisticated targeting system to ensure precise targeting 
                            and successful interception.
                        </motion.p>

                        {/* Первый блок - Dual-Axis Rotation */}
                        <motion.div
                            ref={firstBlockRef}
                            className="border border-white/10 rounded-lg p-5 lg:p-10"
                            initial={{ opacity: 0, y: 60 }}
                            animate={isFirstBlockInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.3,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            <div className="flex flex-col items-start">
                                
                                {/* Иконка в окружности */}
                                <div className="flex-shrink-0 mb-[45px]">
                                    <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
                                        <img 
                                            src="/images/icons/dual-axis.svg" 
                                            alt="Dual-axis rotation" 
                                            className="w-8 h-8"
                                        />
                                    </div>
                                </div>

                                {/* Контент */}
                                <div className="w-full">
                                    <h3 
                                        className="gradient-text font-sf-pro"
                                        style={{
                                            fontFamily: 'SF Pro Display',
                                            fontWeight: 300,
                                            fontSize: 'clamp(24px, 8vw, 48px)',
                                            lineHeight: '96%',
                                            letterSpacing: '0%',
                                            marginBottom: '34px'
                                        }}
                                    >
                                        Dual-Axis Rotation for
                                        <br />
                                        Precision Targeting
                                    </h3>
                                    
                                    <p 
                                        className="text-white/70 font-sf-pro"
                                        style={{
                                            fontFamily: 'SF Pro Display',
                                            fontWeight: 300,
                                            fontSize: 'clamp(16px, 4vw, 20px)',
                                            lineHeight: '130%',
                                            letterSpacing: '-1%'
                                        }}
                                    >
                                        The ODDS station features a dual-axis rotation mechanism, combined 
                                        with its own ion thrusters. This innovative design allows the station to 
                                        orient itself with exceptional accuracy. By leveraging these capabilities, 
                                        the ODDS station can align the Gauss cannon precisely, ensuring that 
                                        FROG is launched in the exact direction needed to intercept the target 
                                        debris.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Второй блок - Unmatched Flexibility */}
                        <motion.div
                            ref={secondBlockRef}
                            className="border border-white/10 rounded-lg p-5 lg:p-10"
                            initial={{ opacity: 0, y: 60 }}
                            animate={isSecondBlockInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.5,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            <div className="flex flex-col items-start">
                                
                                {/* Иконка */}
                                <div className="flex-shrink-0 mb-[45px]">
                                    <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
                                        {/* Временная иконка сетки - замените на нужную */}
                                        <div className="w-8 h-8 grid grid-cols-3 gap-px">
                                            {[...Array(9)].map((_, i) => (
                                                <div key={i} className="w-full h-full border border-white/40"></div>
                                            ))}
                                            <div className="absolute w-2 h-2 bg-white rounded-full transform translate-x-3 translate-y-3"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Контент */}
                                <div className="w-full">
                                    <h3 
                                        className="gradient-text font-sf-pro"
                                        style={{
                                            fontFamily: 'SF Pro Display',
                                            fontWeight: 300,
                                            fontSize: 'clamp(24px, 8vw, 48px)',
                                            lineHeight: '96%',
                                            letterSpacing: '0%',
                                            marginBottom: '34px'
                                        }}
                                    >
                                        Unmatched Flexibility
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        <p 
                                            className="text-white/70 font-sf-pro"
                                            style={{
                                                fontFamily: 'SF Pro Display',
                                                fontWeight: 300,
                                                fontSize: 'clamp(16px, 4vw, 20px)',
                                                lineHeight: '130%',
                                                letterSpacing: '-1%'
                                            }}
                                        >
                                            Thanks to this advanced targeting system, we can aim the Gauss cannon 
                                            at virtually any point in space. Whether the debris is in a high or low orbit, 
                                            moving in a prograde or retrograde direction, or even crossing orbital 
                                            planes, the ODDS station ensures that FROG is always on target.
                                        </p>
                                        
                                        <p 
                                            className="text-white/70 font-sf-pro"
                                            style={{
                                                fontFamily: 'SF Pro Display',
                                                fontWeight: 300,
                                                fontSize: 'clamp(16px, 4vw, 20px)',
                                                lineHeight: '130%',
                                                letterSpacing: '-1%'
                                            }}
                                        >
                                            This combination of precision engineering and cutting-edge technology 
                                            solves the complex challenge of space debris interception, enabling us to 
                                            address one of the most pressing issues facing modern space 
                                            exploration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
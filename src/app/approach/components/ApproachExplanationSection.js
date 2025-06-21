'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const ODDSLetter = ({ letter, word, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ 
                duration: 0.8, 
                delay: delay,
                ease: [0.22, 1, 0.36, 1] 
            }}
        >
            {/* Квадрат с буквой */}
            <div 
                className="w-full flex items-center justify-center mb-3 lg:mb-6"
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    aspectRatio: "260/326", // Соотношение сторон как в оригинале
                }}
            >
                <span 
                    className="font-sf-pro gradient-text"
                    style={{
                        fontSize: "clamp(60px, 12vw, 146px)",
                        fontWeight: 300,
                        lineHeight: '110%',
                        paddingBottom: '0.05em'
                    }}
                >
                    {letter}
                </span>
            </div>
            
            {/* Слово под буквой */}
            <p 
                className="text-white font-sf-pro text-center"
                style={{
                    fontSize: "clamp(10px, 2.5vw, 16px)",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase"
                }}
            >
                {word}
            </p>
        </motion.div>
    );
};

export default function ApproachExplanationSection() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const stationRef = useRef(null);
    
    const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
    const isTextInView = useInView(textRef, { once: true, margin: "-100px" });
    const isStationInView = useInView(stationRef, { once: true, margin: "-200px" });

    const oddsData = [
        { letter: 'O', word: 'ORBITAL', delay: 0.2 },
        { letter: 'D', word: 'DEBRIS', delay: 0.4 },
        { letter: 'D', word: 'DEORBITING', delay: 0.6 },
        { letter: 'S', word: 'STATION', delay: 0.8 }
    ];

    return (
        <section 
            ref={sectionRef}
            className="relative bg-black text-white min-h-[800px] flex items-center overflow-hidden py-20 lg:py-40"
        >
            {/* Фоновые элементы/паттерн */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-gray-900/10 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-[1800px] mx-auto px-5 lg:px-[125px] w-full">
                
                {/* Версия до 1600px - вертикальная */}
                <div className="xl:hidden">
                    <div className="flex flex-col gap-8">
                        {/* 4 большие буквы в одну строчку */}
                        <div className="grid grid-cols-4 gap-2">
                            {oddsData.map((item, index) => (
                                <div key={index} className="w-full">
                                    <div className="flex flex-col items-center w-full">
                                        {/* Квадрат с буквой */}
                                        <div 
                                            className="w-full flex items-center justify-center mb-3 lg:mb-6"
                                            style={{
                                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                                aspectRatio: "260/326",
                                            }}
                                        >
                                            <span 
                                                className="font-sf-pro gradient-text"
                                                style={{
                                                    fontSize: "clamp(60px, 12vw, 146px)",
                                                    fontWeight: 300,
                                                    lineHeight: '110%',
                                                    paddingBottom: '0.05em'
                                                }}
                                            >
                                                {item.letter}
                                            </span>
                                        </div>
                                        
                                        {/* Слово под буквой */}
                                        <p 
                                            className="text-white font-sf-pro text-center"
                                            style={{
                                                fontSize: "clamp(10px, 2.5vw, 16px)",
                                                fontWeight: 400,
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase"
                                            }}
                                        >
                                            {item.word}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Абзац без ограничения ширины */}
                        <div>
                            <p 
                                className="text-white/80 font-sf-pro leading-relaxed"
                                style={{
                                    fontSize: "clamp(16px, 4vw, 20px)",
                                    fontWeight: 300,
                                    lineHeight: "1.6"
                                }}
                            >
                                ODDS serves as the central hub for space debris removal operations. The Orbital Debris Deorbiting Station functions as the only launch platform for FROG, enabling electromagnetic acceleration using an integrated Gauss gun. ODDS is not stationary — it orbits Earth while slowly and continuously changing its trajectory. This orbital nature allows ODDS to coordinate space debris removal missions and provide the necessary infrastructure for deploying FROG across different orbital zones.
                            </p>
                        </div>

                        {/* Картинка */}
                        <div className="w-full">
                            <div className="relative w-full">
                                <Image
                                    src="/images/station-frontal-2.png"
                                    alt="ODDS Station Frontal View"
                                    width={1800}
                                    height={600}
                                    className="object-contain w-full"
                                    style={{
                                        filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.1))'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Версия от 1600px - горизонтальная */}
                <div className="hidden xl:block">
                    <div className="flex gap-16 items-start">
                        {/* Буквы ODDS */}
                        <div className="flex-shrink-0">
                            <div className="grid grid-cols-4 gap-[14px] w-fit">
                                {oddsData.map((item, index) => (
                                    <div key={index} className="w-[clamp(120px,12vw,180px)]">
                                        <ODDSLetter
                                            letter={item.letter}
                                            word={item.word}
                                            delay={item.delay}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Правая часть - текст центрирован по высоте */}
                        <div className="flex-1 flex items-center">
                            <motion.div
                                ref={textRef}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isTextInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                                transition={{ 
                                    duration: 0.8, 
                                    delay: 1.2,
                                    ease: [0.22, 1, 0.36, 1] 
                                }}
                            >
                                <p 
                                    className="text-white/80 font-sf-pro leading-relaxed"
                                    style={{
                                        fontSize: "clamp(16px, 2.5vw, 20px)",
                                        fontWeight: 300,
                                        lineHeight: "1.6"
                                    }}
                                >
                                    ODDS serves as the central hub for space debris removal operations. The Orbital Debris Deorbiting Station functions as the only launch platform for FROG, enabling electromagnetic acceleration using an integrated Gauss gun. ODDS is not stationary — it orbits Earth while slowly and continuously changing its trajectory. This orbital nature allows ODDS to coordinate space debris removal missions and provide the necessary infrastructure for deploying FROG across different orbital zones.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Изображение станции внизу на всю ширину */}
                    <motion.div
                        ref={stationRef}
                        className="mt-[160px] w-full"
                        initial={{ opacity: 0, scale: 0.8, y: 100 }}
                        animate={isStationInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 100 }}
                        transition={{ 
                            duration: 1.2, 
                            delay: 0.5,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        <div className="relative w-full">
                            <Image
                                src="/images/station-frontal-2.png"
                                alt="ODDS Station Frontal View"
                                width={1800}
                                height={600}
                                className="object-contain w-full"
                                style={{
                                    filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.1))'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

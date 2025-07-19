'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const FROGLetter = ({ letter, word, delay = 0 }) => {
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

export default function ApproachFrogSection() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const frogRef = useRef(null);
    
    const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
    const isTextInView = useInView(textRef, { once: true, margin: "-100px" });
    const isFrogInView = useInView(frogRef, { once: true, margin: "-200px" });

    const frogData = [
        { letter: 'F', word: 'FEASIBLE', delay: 0.2 },
        { letter: 'R', word: 'REMEDIATION', delay: 0.4 },
        { letter: 'O', word: 'ORBITAL', delay: 0.6 },
        { letter: 'G', word: 'GATHERER', delay: 0.8 }
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

            <div className="relative z-10 max-w-[1680px] mx-auto universal-section-padding w-full">
                
                {/* Версия до 1600px - вертикальная */}
                <div className="xl:hidden">
                    <div className="flex flex-col gap-8">
                        {/* 4 большие буквы в одну строчку */}
                        <div className="grid grid-cols-4 gap-2">
                            {frogData.map((item, index) => (
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
                                The Feasible Remediation Orbital Gatherer (F.R.O.G.) is a specialized spacecraft designed to address the issue of space debris. It operates by actively collecting and removing orbital junk, thereby contributing to the restoration of a safer and more sustainable space environment. This innovative solution focuses on the remediation process, which involves correcting and cleaning up problems in space, similar to environmental cleanup efforts on Earth. F.R.O.G. represents a practical approach to tackling the growing challenge of space debris, ensuring that Earth's orbit remains clear and functional for future space activities.
                            </p>
                        </div>

                        {/* Картинки */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                            <div className="relative flex-1 max-w-sm mx-auto">
                                <Image
                                    src="/images/frog.png"
                                    alt="FROG Device"
                                    width={400}
                                    height={280}
                                    className="object-contain w-full h-auto"
                                    style={{
                                        filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.1))'
                                    }}
                                />
                            </div>
                            <div className="relative flex-1 max-w-sm mx-auto">
                                <Image
                                    src="/images/frog-compact.png"
                                    alt="FROG Compact Device"
                                    width={400}
                                    height={280}
                                    className="object-contain w-full h-auto"
                                    style={{
                                        filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.1))'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Версия от 1600px - горизонтальная */}
                <div className="hidden xl:block">
                    <div className="flex gap-16 items-start">
                        {/* Буквы FROG - занимают столько места, сколько нужно */}
                        <div className="flex-shrink-0">
                            <div className="grid grid-cols-4 gap-[14px] w-fit">
                                {frogData.map((item, index) => (
                                    <div key={index} className="w-[clamp(120px,12vw,180px)]">
                                        <FROGLetter
                                            letter={item.letter}
                                            word={item.word}
                                            delay={item.delay}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Правая часть - текст занимает оставшееся место */}
                        <div className="flex-1">
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
                                        fontSize: "clamp(18px, 1.8vw, 24px)",
                                        fontWeight: 300,
                                        lineHeight: "1.6"
                                    }}
                                >
                                    The Feasible Remediation Orbital Gatherer (F.R.O.G.) is a specialized spacecraft designed to address the issue of space debris. It operates by actively collecting and removing orbital junk, thereby contributing to the restoration of a safer and more sustainable space environment. This innovative solution focuses on the remediation process, which involves correcting and cleaning up problems in space, similar to environmental cleanup efforts on Earth. F.R.O.G. represents a practical approach to tackling the growing challenge of space debris, ensuring that Earth's orbit remains clear and functional for future space activities.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Изображения FROG внизу по центру */}
                    <motion.div
                        ref={frogRef}
                        className="mt-[160px] flex justify-center gap-8"
                        initial={{ opacity: 0, scale: 0.8, y: 100 }}
                        animate={isFrogInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 100 }}
                        transition={{ 
                            duration: 1.2, 
                            delay: 0.5,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        <div className="relative">
                            <Image
                                src="/images/frog.png"
                                alt="FROG Device"
                                width={500}
                                height={350}
                                className="object-contain"
                                style={{
                                    filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.1))'
                                }}
                            />
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/frog-compact.png"
                                alt="FROG Compact Device"
                                width={500}
                                height={350}
                                className="object-contain"
                                style={{
                                    filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.1))'
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

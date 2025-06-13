'use client';

import { motion } from 'framer-motion';

export default function ChainReactionSection() {
    return (
        <section 
            className="relative overflow-hidden py-20 lg:py-[200px]"
            style={{ backgroundColor: '#FFFFFF0A' }}
        >
            {/* Контент */}
            <div className="relative z-10 w-full max-w-[1680px] mx-auto px-5 lg:px-8">
                
                {/* Десктопная версия - оригинальная горизонтальная компоновка */}
                <div className="hidden lg:block">
                    {/* Верхняя часть - заголовок и описание */}
                    <div className="flex mb-16">
                        <div className="flex-1 flex items-center">
                            <motion.h2
                                className="font-sf-pro gradient-text"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "clamp(40px, 6vw, 80px)",
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
                                Calculating the Chain Reaction Probability
                            </motion.h2>
                        </div>
                        
                        <div className="flex-1 flex items-center">
                            <motion.p
                                className="font-sf-pro text-gray-300 max-w-[405px]"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "24px",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 1.2,
                                    delay: 0.3,
                                    ease: [0.22, 1, 0.36, 1] 
                                }}
                            >
                                Mathematical models suggest that the probability of cascading collisions in certain orbital regions has already exceeded critical thresholds.
                            </motion.p>
                        </div>
                    </div>

                    {/* Формула и объяснения */}
                    <motion.div
                        className="bg-white p-[40px] mb-16 relative"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 1.2,
                            delay: 0.6,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        <div className="flex">
                            <div className="flex-1 pr-8 flex flex-col justify-center">
                                <p
                                    className="font-sf-pro mb-0"
                                    style={{
                                        fontWeight: "300",
                                        fontSize: "24px",
                                        lineHeight: "130%",
                                        letterSpacing: "-1%",
                                        color: "#767676"
                                    }}
                                >
                                    A simplified mathematical model for the probability of a chain reaction:
                                </p>
                                <div 
                                    className="font-sf-pro text-black"
                                    style={{
                                        fontWeight: "400",
                                        fontSize: "48px",
                                        lineHeight: "130%",
                                        letterSpacing: "-1%",
                                        fontFamily: 'SF Pro Display, monospace'
                                    }}
                                >
                                    P(cascade) = 1 - exp(-λ × t × d² × v)
                                </div>
                            </div>
                            
                            <div className="w-[1px] bg-gray-400 mx-8"></div>
                            
                            <div className="flex-1 pl-8">
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="font-sf-pro text-gray-500 flex-shrink-0" style={{fontWeight: "300", fontSize: "24px", lineHeight: "130%", letterSpacing: "-1%", fontFamily: 'SF Pro Display'}}>λ</span>
                                        <span className="font-sf-pro text-gray-700 ml-2" style={{fontWeight: "300", fontSize: "24px", lineHeight: "130%", letterSpacing: "-1%"}}>— constant depending on orbital object properties</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="font-sf-pro text-gray-500 flex-shrink-0" style={{fontWeight: "300", fontSize: "24px", lineHeight: "130%", letterSpacing: "-1%", fontFamily: 'SF Pro Display'}}>t</span>
                                        <span className="font-sf-pro text-gray-700 ml-2" style={{fontWeight: "300", fontSize: "24px", lineHeight: "130%", letterSpacing: "-1%"}}>— time period under consideration (years)</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="font-sf-pro text-gray-500 flex-shrink-0" style={{fontWeight: "300", fontSize: "24px", lineHeight: "130%", letterSpacing: "-1%", fontFamily: 'SF Pro Display'}}>d</span>
                                        <span className="font-sf-pro text-gray-700 ml-2" style={{fontWeight: "300", fontSize: "24px", lineHeight: "130%", letterSpacing: "-1%"}}>— orbital object density (objects/km³)</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="font-sf-pro text-gray-500 flex-shrink-0" style={{fontWeight: "300", fontSize: "24px", lineHeight: "130%", letterSpacing: "-1%", fontFamily: 'SF Pro Display'}}>v</span>
                                        <span className="font-sf-pro text-gray-700 ml-2" style={{fontWeight: "300", fontSize: "24px", lineHeight: "130%", letterSpacing: "-1%"}}>— average relative velocity between objects (km/s)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Нижняя часть - результаты исследований */}
                    <div className="flex">
                        <div className="flex-1"></div>
                        <div className="flex-1 flex space-x-8">
                            <motion.div className="flex-1" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                                <p className="font-sf-pro text-gray-300 max-w-[405px]" style={{fontWeight: "300", fontSize: "24px", lineHeight: "130%", letterSpacing: "-1%"}}>
                                    With existing density at 800 km altitude and average relative velocity of 10 km/s, the probability of cascading collisions beginning within the next 20 years is estimated at 45-60%.
                                </p>
                            </motion.div>
                            <motion.div className="flex-1" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}>
                                <p className="font-sf-pro text-gray-300 max-w-[405px]" style={{fontWeight: "300", fontSize: "24px", lineHeight: "130%", letterSpacing: "-1%"}}>
                                    Research indicates that even if we immediately ceased all space launches, the existing debris population in certain regions could trigger the Kessler effect within decades.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Мобильная версия - вертикальная компоновка */}
                <div className="lg:hidden">
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
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            Calculating the Chain Reaction Probability
                        </motion.h2>

                        {/* Описание */}
                        <motion.p
                            className="font-sf-pro text-gray-300"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(16px, 4vw, 20px)",
                                lineHeight: "130%",
                                letterSpacing: "-1%",
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 1.2,
                                delay: 0.1,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            Mathematical models suggest that the probability of cascading collisions in certain orbital regions has already exceeded critical thresholds.
                        </motion.p>

                        {/* Белая область с формулами - вертикально */}
                        <motion.div
                            className="bg-white p-5 lg:p-[40px]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 1.2,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            <div className="flex flex-col gap-6">
                                {/* Описание формулы */}
                                <p
                                    className="font-sf-pro"
                                    style={{
                                        fontWeight: "300",
                                        fontSize: "clamp(16px, 4vw, 20px)",
                                        lineHeight: "130%",
                                        letterSpacing: "-1%",
                                        color: "#767676"
                                    }}
                                >
                                    A simplified mathematical model for the probability of a chain reaction:
                                </p>

                                {/* Формула */}
                                <div 
                                    className="font-sf-pro text-black text-center"
                                    style={{
                                        fontWeight: "400",
                                        fontSize: "clamp(24px, 6vw, 36px)",
                                        lineHeight: "130%",
                                        letterSpacing: "-1%",
                                        fontFamily: 'SF Pro Display, monospace'
                                    }}
                                >
                                    P(cascade) = 1 - exp(-λ × t × d² × v)
                                </div>

                                {/* Разделитель */}
                                <div className="w-full h-[1px] bg-gray-400 my-2"></div>
                                
                                {/* Объяснение переменных */}
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span 
                                            className="font-sf-pro text-gray-500 flex-shrink-0"
                                            style={{
                                                fontWeight: "300",
                                                fontSize: "clamp(16px, 4vw, 20px)",
                                                lineHeight: "130%",
                                                letterSpacing: "-1%",
                                                fontFamily: 'SF Pro Display'
                                            }}
                                        >
                                            λ
                                        </span>
                                        <span 
                                            className="font-sf-pro text-gray-700 ml-2"
                                            style={{
                                                fontWeight: "300",
                                                fontSize: "clamp(14px, 3.5vw, 18px)",
                                                lineHeight: "130%",
                                                letterSpacing: "-1%",
                                            }}
                                        >
                                            — constant depending on orbital object properties
                                        </span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="font-sf-pro text-gray-500 flex-shrink-0" style={{fontWeight: "300", fontSize: "clamp(16px, 4vw, 20px)", lineHeight: "130%", letterSpacing: "-1%", fontFamily: 'SF Pro Display'}}>t</span>
                                        <span className="font-sf-pro text-gray-700 ml-2" style={{fontWeight: "300", fontSize: "clamp(14px, 3.5vw, 18px)", lineHeight: "130%", letterSpacing: "-1%"}}>— time period under consideration (years)</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="font-sf-pro text-gray-500 flex-shrink-0" style={{fontWeight: "300", fontSize: "clamp(16px, 4vw, 20px)", lineHeight: "130%", letterSpacing: "-1%", fontFamily: 'SF Pro Display'}}>d</span>
                                        <span className="font-sf-pro text-gray-700 ml-2" style={{fontWeight: "300", fontSize: "clamp(14px, 3.5vw, 18px)", lineHeight: "130%", letterSpacing: "-1%"}}>— orbital object density (objects/km³)</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="font-sf-pro text-gray-500 flex-shrink-0" style={{fontWeight: "300", fontSize: "clamp(16px, 4vw, 20px)", lineHeight: "130%", letterSpacing: "-1%", fontFamily: 'SF Pro Display'}}>v</span>
                                        <span className="font-sf-pro text-gray-700 ml-2" style={{fontWeight: "300", fontSize: "clamp(14px, 3.5vw, 18px)", lineHeight: "130%", letterSpacing: "-1%"}}>— average relative velocity between objects (km/s)</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Первый абзац результатов */}
                        <motion.p
                            className="font-sf-pro text-gray-300"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(16px, 4vw, 20px)",
                                lineHeight: "130%",
                                letterSpacing: "-1%",
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 1.2,
                                delay: 0.3,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            With existing density at 800 km altitude and average relative velocity of 10 km/s, the probability of cascading collisions beginning within the next 20 years is estimated at 45-60%.
                        </motion.p>

                        {/* Второй абзац результатов */}
                        <motion.p
                            className="font-sf-pro text-gray-300"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(16px, 4vw, 20px)",
                                lineHeight: "130%",
                                letterSpacing: "-1%",
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 1.2,
                                delay: 0.4,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            Research indicates that even if we immediately ceased all space launches, the existing debris population in certain regions could trigger the Kessler effect within decades.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}

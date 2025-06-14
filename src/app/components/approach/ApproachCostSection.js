'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ApproachCostSection() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const tableRef = useRef(null);
    
    const isSectionInView = useInView(sectionRef, { once: true, margin: "-50px" });
    const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
    const isTableInView = useInView(tableRef, { once: true, margin: "-100px" });

    const costItems = [
        { item: "Station ODDS", cost: "< 1 000 000 000 $" },
        { item: "Launching the station into orbit", cost: "< 1 000 000 000 $" },
        { item: "Two metallic trusses from space-graded metal", cost: "< 300 000 000 $" },
        { item: "Space graded batteries", cost: "≈ 10 000 000 $" },
        { item: "FROG", cost: "500 000 $" }
    ];

    return (
        <section 
            ref={sectionRef}
            className="relative bg-black text-white overflow-hidden py-[180px]"
        >
            {/* Десктопная версия */}
            <div className="hidden lg:block relative z-10 max-w-[1800px] mx-auto px-[125px] w-full grid grid-cols-2 gap-16">
                
                {/* Левая колонка - Заголовок */}
                <div className="h-fit">
                    <motion.h2
                        ref={titleRef}
                        className="font-sf-pro gradient-text"
                        style={{
                            fontSize: "clamp(40px, 6vw, 70px)",
                            fontWeight: 300,
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                            paddingBottom: "0.05em"
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ 
                            duration: 0.8, 
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        How much does
                        <br />
                        it cost?
                    </motion.h2>
                </div>

                {/* Правая колонка - Скроллируемый контент */}
                <div>
                    <motion.div
                        ref={tableRef}
                        className="space-y-0"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isTableInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                    >
                        {/* Основные строки с чередующимся фоном */}
                        {costItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`flex justify-between items-center py-6 px-6 ${
                                    index % 2 === 0 ? 'bg-black' : 'bg-[#FFFFFF0A]'
                                }`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={isTableInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.3 + (index * 0.1),
                                    ease: [0.22, 1, 0.36, 1] 
                                }}
                            >
                                <span 
                                    className="text-white/80 font-sf-pro"
                                    style={{
                                        fontSize: "clamp(16px, 2vw, 18px)",
                                        fontWeight: 300
                                    }}
                                >
                                    {item.item}
                                </span>
                                <span 
                                    className="text-white font-sf-pro"
                                    style={{
                                        fontSize: "clamp(16px, 2vw, 18px)",
                                        fontWeight: 400
                                    }}
                                >
                                    {item.cost}
                                </span>
                            </motion.div>
                        ))}
                        
                        {/* Итоговая строка - без скругленных углов */}
                        <motion.div
                            className="flex justify-between items-center py-6 bg-white px-6"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isTableInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.8,
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            <span 
                                className="text-black font-sf-pro"
                                style={{
                                    fontSize: "clamp(18px, 2.5vw, 20px)",
                                    fontWeight: 400
                                }}
                            >
                                Total costs
                            </span>
                            <span 
                                className="text-black font-sf-pro"
                                style={{
                                    fontSize: "clamp(18px, 2.5vw, 20px)",
                                    fontWeight: 600
                                }}
                            >
                                {"< 10 000 000 000 $"}
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Мобильная версия */}
            <div className="lg:hidden relative z-10 max-w-4xl mx-auto px-5 w-full">
                
                {/* Заголовок */}
                <div className="mb-12">
                    <h2
                        className="font-sf-pro gradient-text"
                        style={{
                            fontSize: "clamp(32px, 8vw, 48px)",
                            fontWeight: 300,
                            lineHeight: "110%",
                            letterSpacing: "-0.02em",
                            paddingBottom: "0.05em"
                        }}
                    >
                        How much does
                        <br />
                        it cost?
                    </h2>
                </div>

                {/* Таблица вертикально */}
                <div className="space-y-0">
                    {/* Основные строки с чередующимся фоном */}
                    {costItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex justify-between items-center py-4 ${
                                index % 2 === 0 ? 'bg-black' : 'bg-[#FFFFFF0A]'
                            }`}
                        >
                            <span 
                                className="text-white/80 font-sf-pro"
                                style={{
                                    fontSize: "clamp(12px, 3.5vw, 14px)",
                                    fontWeight: 300
                                }}
                            >
                                {item.item}
                            </span>
                            <span 
                                className="text-white font-sf-pro text-right"
                                style={{
                                    fontSize: "clamp(12px, 3.5vw, 14px)",
                                    fontWeight: 400,
                                    whiteSpace: "nowrap"
                                }}
                            >
                                {item.cost}
                            </span>
                        </div>
                    ))}
                    
                    {/* Итоговая строка */}
                    <div className="flex justify-between items-center py-4 bg-white px-4">
                        <span 
                            className="text-black font-sf-pro"
                            style={{
                                fontSize: "clamp(14px, 4vw, 16px)",
                                fontWeight: 400
                            }}
                        >
                            Total costs
                        </span>
                        <span 
                            className="text-black font-sf-pro text-right"
                            style={{
                                fontSize: "clamp(14px, 4vw, 16px)",
                                fontWeight: 600,
                                whiteSpace: "nowrap"
                            }}
                        >
                            {"< 10 000 000 000 $"}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
'use client';

import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export default function QuestionsAnswersSection() {
    const [openItem, setOpenItem] = useState('general-1'); // Первый пункт открыт по умолчанию

    const toggleItem = (itemId) => {
        setOpenItem(openItem === itemId ? null : itemId);
    };

    // Данные для аккордеона
    const accordionData = [
        {
            category: "General Questions",
            items: [
                {
                    id: "general-1",
                    question: "Is there really that much space debris?",
                    answer: "While space is vast, orbital regions around Earth are becoming increasingly congested. NASA reports a 44% increase in tracked debris between 2010-2022. At orbital velocities (10 km/s), even a 1 cm paint fleck has kinetic energy comparable to an exploding hand grenade."
                },
                {
                    id: "general-2",
                    question: "Can space debris naturally deorbit?",
                    answer: "Yes, but the timeframe varies dramatically with altitude. Objects below 400 km may deorbit within months due to atmospheric drag. Above 800 km, objects can remain for hundreds of years, while at geostationary orbit (36,000 km), they're essentially permanent."
                }
            ]
        },
        {
            category: "Technical Questions",
            items: [
                {
                    id: "technical-1",
                    question: "Are there effective debris removal technologies?",
                    answer: "Several technologies are under development, including harpoons, nets, robotic arms, and laser systems. ESA's ClearSpace-1 mission, scheduled for 2025, represents the first commercial debris removal effort. However, current approaches can only address individual large objects, not numerous smaller fragments."
                },
                {
                    id: "technical-2",
                    question: "Can lasers destroy space debris?",
                    answer: "Ground-based lasers could potentially target small objects, slowing them enough to lower their orbits until atmospheric drag causes burnup. However, this approach faces technical challenges and militarization concerns."
                }
            ]
        },
        {
            category: "Economic Questions",
            items: [
                {
                    id: "economic-1",
                    question: "Who should pay for cleanup?",
                    answer: "This remains debated internationally. Proposals include the \"polluter pays\" principle, collective international funding, or mandatory contributions from future launches. Removing a single large object costs approximately $15-30 million."
                },
                {
                    id: "economic-2",
                    question: "Is debris removal economically viable?",
                    answer: "Studies indicate that removing just 5-10 large objects annually from critical orbits could significantly reduce cascade risks and save billions in potential infrastructure losses."
                }
            ]
        },
        {
            category: "Legal Questions",
            items: [
                {
                    id: "legal-1",
                    question: "What international laws address space debris?",
                    answer: "No binding treaties specifically target space debris. The 1967 Outer Space Treaty predates debris concerns. Voluntary guidelines exist through UN COPUOS and the IADC but lack enforcement mechanisms."
                },
                {
                    id: "legal-2",
                    question: "Who can remove debris?",
                    answer: "Space objects legally remain the property of the launching state regardless of functionality. Removal requires owner consent, creating legal complications that international experts are working to address."
                }
            ]
        }
    ];

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
                            initial={{opacity: 0, x: -50}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            Questions & Answers
                        </motion.h2>
                    </div>

                    {/* Правая колонка - Скроллируемый контент */}
                    <div className="py-[100px]">
                        <motion.div
                            className="space-y-0"
                            initial={{opacity: 0, x: 50}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1.2,
                                delay: 0.3,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            {accordionData.map((category, categoryIndex) => (
                                <div key={category.category}>
                                    <div className="py-[30px] px-5" style={{background: '#FFFFFF0A'}}>
                                        <h3 className="font-sf-pro gradient-text" style={{fontWeight: "300", fontSize: "48px", lineHeight: "96%", letterSpacing: "0%"}}>
                                            {category.category}
                                        </h3>
                                    </div>
                                    <div className="space-y-0">
                                        {category.items.map((item, itemIndex) => (
                                            <div key={item.id} className="border-b last:border-b-0" style={{borderColor: '#FFFFFF33'}}>
                                                <button onClick={() => toggleItem(item.id)} className="w-full py-[30px] px-0 flex justify-between items-center text-left cursor-pointer">
                                                    <span className="font-sf-pro text-white pr-4" style={{fontWeight: "400", fontSize: "clamp(18px, 1.8vw, 24px)", lineHeight: "96%", letterSpacing: "0%"}}>
                                                        {item.question}
                                                    </span>
                                                    <motion.div animate={{rotate: openItem === item.id ? 45 : 0}} transition={{duration: 0.3, ease: [0.22, 1, 0.36, 1]}} className="flex-shrink-0 flex items-center justify-center" style={{width: '43px', height: '43px'}}>
                                                        <div className="relative" style={{width: '20px', height: '20px'}}>
                                                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white transform -translate-y-1/2"></div>
                                                            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white transform -translate-x-1/2"></div>
                                                        </div>
                                                    </motion.div>
                                                </button>
                                                <AnimatePresence>
                                                    {openItem === item.id && (
                                                        <motion.div initial={{height: 0, opacity: 0}} animate={{height: 'auto', opacity: 1}} exit={{height: 0, opacity: 0}} transition={{duration: 0.4, ease: [0.22, 1, 0.36, 1]}} className="overflow-hidden">
                                                            <div className="pb-[30px] pr-[50px]">
                                                                <p className="font-sf-pro text-gray-300" style={{fontWeight: "300", fontSize: "clamp(18px, 1.8vw, 24px)", lineHeight: "130%", letterSpacing: "-1%"}}>
                                                                    {item.answer}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Мобильная версия - заголовок сверху, аккордеон на всю ширину */}
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
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        Questions & Answers
                    </motion.h2>

                    {/* Аккордеон на всю ширину */}
                    <motion.div
                        className="space-y-0"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 1.2,
                            delay: 0.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        {accordionData.map((category, categoryIndex) => (
                            <div key={category.category}>
                                {/* Заголовок категории */}
                                <div
                                    className="py-5 px-4"
                                    style={{background: '#FFFFFF0A'}}
                                >
                                    <h3
                                        className="font-sf-pro gradient-text"
                                        style={{
                                            fontWeight: "300",
                                            fontSize: "clamp(24px, 6vw, 32px)",
                                            lineHeight: "96%",
                                            letterSpacing: "0%",
                                        }}
                                    >
                                        {category.category}
                                    </h3>
                                </div>

                                {/* Пункты аккордеона */}
                                <div className="space-y-0">
                                    {category.items.map((item, itemIndex) => (
                                        <div
                                            key={item.id}
                                            className="border-b last:border-b-0"
                                            style={{borderColor: '#FFFFFF33'}}
                                        >
                                            {/* Вопрос */}
                                            <button
                                                onClick={() => toggleItem(item.id)}
                                                className="w-full py-5 px-0 flex justify-between items-start text-left cursor-pointer"
                                            >
                                                <span
                                                    className="font-sf-pro text-white pr-4"
                                                    style={{
                                                        fontWeight: "400",
                                                        fontSize: "clamp(16px, 4vw, 20px)",
                                                        lineHeight: "120%",
                                                        letterSpacing: "0%",
                                                    }}
                                                >
                                                    {item.question}
                                                </span>
                                                <motion.div
                                                    animate={{
                                                        rotate: openItem === item.id ? 45 : 0
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: [0.22, 1, 0.36, 1]
                                                    }}
                                                    className="flex-shrink-0 flex items-center justify-center mt-1"
                                                    style={{width: '32px', height: '32px'}}
                                                >
                                                    <div className="relative" style={{width: '16px', height: '16px'}}>
                                                        <div
                                                            className="absolute top-1/2 left-0 w-full h-[1px] bg-white transform -translate-y-1/2"></div>
                                                        <div
                                                            className="absolute left-1/2 top-0 w-[1px] h-full bg-white transform -translate-x-1/2"></div>
                                                    </div>
                                                </motion.div>
                                            </button>

                                            {/* Ответ */}
                                            <AnimatePresence>
                                                {openItem === item.id && (
                                                    <motion.div
                                                        initial={{height: 0, opacity: 0}}
                                                        animate={{
                                                            height: 'auto',
                                                            opacity: 1
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0
                                                        }}
                                                        transition={{
                                                            duration: 0.4,
                                                            ease: [0.22, 1, 0.36, 1]
                                                        }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pb-5 pr-8">
                                                            <p
                                                                className="font-sf-pro text-gray-300"
                                                                style={{
                                                                    fontWeight: "300",
                                                                    fontSize: "clamp(14px, 3.5vw, 18px)",
                                                                    lineHeight: "130%",
                                                                    letterSpacing: "-1%",
                                                                }}
                                                            >
                                                                {item.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

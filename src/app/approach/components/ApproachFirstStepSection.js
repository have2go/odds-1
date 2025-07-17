'use client';

import { motion } from 'framer-motion';

export default function ApproachFirstStepSection() {
    const milestones = [
        {
            id: 'launch',
            image: '/images/falcon-9.png',
            title: 'Falcon-9',
            description: ''
        },
        {
            id: 'step1',
            image: '/images/step-1.png',
            title: 'Mission 1',
            description: 'FROG identifies and approaches the target CubeSat debris simulator'
        },
        {
            id: 'step2',
            image: '/images/step-2.png',
            title: 'Mission 2',
            description: 'Placeholder description for second mission phase'
        },
        {
            id: 'step3',
            image: '/images/step-3.png',
            title: 'Mission 3',
            description: 'Placeholder description for third mission phase'
        },
        {
            id: 'step4',
            image: '/images/step-4.png',
            title: 'Mission 4',
            description: 'Placeholder description for fourth mission phase'
        }
    ];

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
                    <div className="space-y-6 lg:space-y-8 mb-16 lg:mb-24">
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

                {/* Milestones Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 1.2,
                        delay: 0.8,
                        ease: [0.22, 1, 0.36, 1] 
                    }}
                    className="w-full"
                >
                    {/* Подзаголовок Milestones */}
                    <h3
                        className="font-sf-pro gradient-text mb-12 lg:mb-16 text-left"
                        style={{
                            fontWeight: "300",
                            fontSize: "clamp(24px, 6vw, 48px)",
                            lineHeight: "110%",
                            letterSpacing: "0%",
                        }}
                    >
                        Milestones
                    </h3>

                    {/* Десктоп версия - все в ряд */}
                    <div className="hidden xl:block">
                        <div className="flex items-center justify-between gap-4">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.8,
                                        delay: 0.2 * index,
                                        ease: [0.22, 1, 0.36, 1] 
                                    }}
                                    className="flex flex-col items-center text-center flex-1"
                                >
                                    {/* Изображение */}
                                    <div className="w-48 h-48 lg:w-56 lg:h-56 mb-6 flex items-center justify-center">
                                        <img
                                            src={milestone.image}
                                            alt={milestone.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Заголовок */}
                                    <h4
                                        className="font-sf-pro text-white mb-3"
                                        style={{
                                            fontWeight: "400",
                                            fontSize: "clamp(16px, 2vw, 20px)",
                                            lineHeight: "120%",
                                        }}
                                    >
                                        {milestone.title}
                                    </h4>

                                    {/* Описание */}
                                    {milestone.description && (
                                        <p
                                            className="font-sf-pro text-gray-300 max-w-[200px]"
                                            style={{
                                                fontWeight: "300",
                                                fontSize: "clamp(12px, 1.5vw, 14px)",
                                                lineHeight: "140%",
                                            }}
                                        >
                                            {milestone.description}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Планшет версия - 2x3 сетка */}
                    <div className="hidden lg:block xl:hidden">
                        <div className="grid grid-cols-3 gap-8">
                            {milestones.slice(0, 3).map((milestone, index) => (
                                <motion.div
                                    key={milestone.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.8,
                                        delay: 0.2 * index,
                                        ease: [0.22, 1, 0.36, 1] 
                                    }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="w-36 h-36 mb-6 flex items-center justify-center">
                                        <img
                                            src={milestone.image}
                                            alt={milestone.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4
                                        className="font-sf-pro text-white mb-3"
                                        style={{
                                            fontWeight: "400",
                                            fontSize: "18px",
                                            lineHeight: "120%",
                                        }}
                                    >
                                        {milestone.title}
                                    </h4>
                                    {milestone.description && (
                                        <p
                                            className="font-sf-pro text-gray-300 text-sm"
                                            style={{
                                                fontWeight: "300",
                                                lineHeight: "140%",
                                            }}
                                        >
                                            {milestone.description}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
                            {milestones.slice(3).map((milestone, index) => (
                                <motion.div
                                    key={milestone.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.8,
                                        delay: 0.2 * (index + 3),
                                        ease: [0.22, 1, 0.36, 1] 
                                    }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="w-36 h-36 mb-6 flex items-center justify-center">
                                        <img
                                            src={milestone.image}
                                            alt={milestone.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4
                                        className="font-sf-pro text-white mb-3"
                                        style={{
                                            fontWeight: "400",
                                            fontSize: "18px",
                                            lineHeight: "120%",
                                        }}
                                    >
                                        {milestone.title}
                                    </h4>
                                    {milestone.description && (
                                        <p
                                            className="font-sf-pro text-gray-300 text-sm"
                                            style={{
                                                fontWeight: "300",
                                                lineHeight: "140%",
                                            }}
                                        >
                                            {milestone.description}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Средние экраны версия - 2 колонки */}
                    <div className="hidden md:block lg:hidden">
                        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={milestone.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.8,
                                        delay: 0.1 * index,
                                        ease: [0.22, 1, 0.36, 1] 
                                    }}
                                    className="flex flex-col items-center text-center"
                                >
                                    <div className="w-32 h-32 mb-4 flex items-center justify-center">
                                        <img
                                            src={milestone.image}
                                            alt={milestone.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h4
                                        className="font-sf-pro text-white mb-2"
                                        style={{
                                            fontWeight: "400",
                                            fontSize: "16px",
                                            lineHeight: "120%",
                                        }}
                                    >
                                        {milestone.title}
                                    </h4>
                                    {milestone.description && (
                                        <p
                                            className="font-sf-pro text-gray-300 text-sm"
                                            style={{
                                                fontWeight: "300",
                                                lineHeight: "140%",
                                            }}
                                        >
                                            {milestone.description}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Мобильная версия - вертикальный список */}
                    <div className="md:hidden space-y-8">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.8,
                                    delay: 0.2 * index,
                                    ease: [0.22, 1, 0.36, 1] 
                                }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-32 h-32 mb-6 flex items-center justify-center">
                                    <img
                                        src={milestone.image}
                                        alt={milestone.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <h4
                                    className="font-sf-pro text-white mb-3"
                                    style={{
                                        fontWeight: "400",
                                        fontSize: "clamp(16px, 4vw, 18px)",
                                        lineHeight: "120%",
                                    }}
                                >
                                    {milestone.title}
                                </h4>
                                {milestone.description && (
                                    <p
                                        className="font-sf-pro text-gray-300 max-w-sm"
                                        style={{
                                            fontWeight: "300",
                                            fontSize: "clamp(14px, 3.5vw, 16px)",
                                            lineHeight: "140%",
                                        }}
                                    >
                                        {milestone.description}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
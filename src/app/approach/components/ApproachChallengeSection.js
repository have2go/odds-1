'use client';

import {motion, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';

export default function ApproachChallengeSection() {
    const containerRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Анимация заголовка от верха к центру (первая четверть)
    const titleY = useTransform(scrollYProgress, [0, 0.25], ["-25vh", "0vh"]);

    // Первый пункт - начинается только после того, как заголовок дошел до центра
    const firstItemY = useTransform(scrollYProgress,
        [0, 0.25, 0.45],
        ["-25vh", "0vh", "-50vh"]
    );
    const firstItemOpacity = useTransform(scrollYProgress,
        [0, 0.25, 0.4, 0.5],
        [0, 1, 0.5, 0]
    );

    // Второй пункт - появляется раньше и исчезает позже
    const secondItemY = useTransform(scrollYProgress,
        [0.25, 0.45, 0.65],
        ["50vh", "0vh", "-50vh"]
    );
    const secondItemOpacity = useTransform(scrollYProgress,
        [0.25, 0.45, 0.6, 0.7],
        [0, 1, 0.5, 0]
    );

    // Третий пункт
    const thirdItemY = useTransform(scrollYProgress,
        [0.4, 0.65, 0.85],
        ["50vh", "0vh", "-50vh"]
    );
    const thirdItemOpacity = useTransform(scrollYProgress,
        [0.4, 0.65, 0.8, 0.9],
        [0, 1, 0.5, 0]
    );

    // Четвертый пункт
    const fourthItemY = useTransform(scrollYProgress,
        [0.6, 0.85, 1],
        ["50vh", "0vh", "0vh"]
    );
    const fourthItemOpacity = useTransform(scrollYProgress,
        [0.6, 0.85, 1],
        [0, 1, 1]
    );

    const challengeItems = [
        {
            title: "Initial Acceleration",
            content: "FROG's journey begins with a powerful boost from a Gauss cannon installed on the ODDS station. This electromagnetic launcher propels FROG in the desired direction, giving it the initial velocity needed to reach its target."
        },
        {
            title: "Orbital Synchronization",
            content: "Once launched, FROG uses its onboard ion thrusters—similar to those employed by Starlink satellites—to fine-tune its trajectory and synchronize its orbit with the targeted piece of debris. These thrusters are powered by krypton gas, which serves multiple purposes within the FROG system."
        },
        {
            title: "Debris Capture and Stabilization",
            content: "When FROG reaches its target, it employs a unique method for capturing and stabilizing the debris. Krypton gas is released inside the FROG's containment area, creating a controlled environment that absorbs the kinetic energy of the captured object. This process ensures the debris is safely secured without risking further damage or fragmentation."
        },
        {
            title: "Post-Capture Options",
            content: "After successfully capturing and stabilizing the debris, FROG has two primary options for disposal:",
            subItems: [
                "1. Atmospheric Reentry: The debris can be directed toward Earth's atmosphere, where it will burn up upon reentry.",
                "2. Return to ODDS: Alternatively, the debris can be transported back to the ODDS station for potential reuse or recycling, promoting a circular economy in space."
            ]
        }
    ];

    return (
        <>
            {/* Десктопная версия со sticky */}
            <div
                ref={containerRef}
                className="hidden lg:block"
                style={{height: "400vh"}} // Контейнер для трекинга скролла
            >
                {/* Зафиксированная секция */}
                <section
                    className="sticky top-0 bg-black text-white overflow-hidden relative"
                    style={{height: "calc(100vh - 80px)"}}
                >
                    <div className="relative z-10 max-w-[1680px] mx-auto universal-section-padding h-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full">

                            {/* Левая часть - заголовок */}
                            <div className="relative">
                                <motion.div
                                    style={{y: titleY}}
                                    className="sticky top-0 flex items-center h-screen"
                                >
                                    <h2
                                        className="font-sf-pro gradient-text"
                                        style={{
                                            fontSize: "clamp(40px, 5vw, 80px)",
                                            fontWeight: 300,
                                            lineHeight: "110%",
                                            letterSpacing: "0%",
                                            paddingBottom: "0.05em"
                                        }}
                                    >
                                        The Big Challenge:
                                        <br/>
                                        How Does FROG
                                        <br/>
                                        Reach Its Target?
                                    </h2>
                                </motion.div>
                            </div>

                            {/* Правая часть - контейнер для пунктов */}
                            <div className="relative">
                                <div className="sticky top-0 flex items-center h-screen overflow-hidden">

                                    {/* Первый пункт */}
                                    <motion.div
                                        style={{
                                            y: firstItemY,
                                            opacity: firstItemOpacity
                                        }}
                                        className="absolute inset-0 flex items-center"
                                    >
                                        <div>
                                            <h3
                                                className="gradient-text font-sf-pro mb-5"
                                                style={{
                                                    fontFamily: "SF Pro Display",
                                                    fontWeight: 300,
                                                    fontSize: "48px",
                                                    lineHeight: "110%",
                                                    letterSpacing: "0%",
                                                    paddingBottom: "0.05em"
                                                }}
                                            >
                                                {challengeItems[0].title}
                                            </h3>

                                            <p
                                                className="text-white/80 font-sf-pro leading-relaxed"
                                                style={{
                                                    fontFamily: "SF Pro Display",
                                                    fontWeight: 300,
                                                    fontSize: "clamp(18px, 1.8vw, 24px)",
                                                    lineHeight: "130%",
                                                    letterSpacing: "-1%"
                                                }}
                                            >
                                                {challengeItems[0].content}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Второй пункт */}
                                    <motion.div
                                        style={{
                                            y: secondItemY,
                                            opacity: secondItemOpacity
                                        }}
                                        className="absolute inset-0 flex items-center"
                                    >
                                        <div>
                                            <h3
                                                className="gradient-text font-sf-pro mb-5"
                                                style={{
                                                    fontFamily: "SF Pro Display",
                                                    fontWeight: 300,
                                                    fontSize: "48px",
                                                    lineHeight: "110%",
                                                    letterSpacing: "0%",
                                                    paddingBottom: "0.05em"
                                                }}
                                            >
                                                {challengeItems[1].title}
                                            </h3>

                                            <p
                                                className="text-white/80 font-sf-pro leading-relaxed"
                                                style={{
                                                    fontFamily: "SF Pro Display",
                                                    fontWeight: 300,
                                                    fontSize: "clamp(18px, 1.8vw, 24px)",
                                                    lineHeight: "130%",
                                                    letterSpacing: "-1%"
                                                }}
                                            >
                                                {challengeItems[1].content}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Третий пункт */}
                                    <motion.div
                                        style={{
                                            y: thirdItemY,
                                            opacity: thirdItemOpacity
                                        }}
                                        className="absolute inset-0 flex items-center"
                                    >
                                        <div>
                                            <h3
                                                className="gradient-text font-sf-pro mb-5"
                                                style={{
                                                    fontFamily: "SF Pro Display",
                                                    fontWeight: 300,
                                                    fontSize: "48px",
                                                    lineHeight: "110%",
                                                    letterSpacing: "0%",
                                                    paddingBottom: "0.05em"
                                                }}
                                            >
                                                {challengeItems[2].title}
                                            </h3>

                                            <p
                                                className="text-white/80 font-sf-pro leading-relaxed"
                                                style={{
                                                    fontFamily: "SF Pro Display",
                                                    fontWeight: 300,
                                                    fontSize: "clamp(18px, 1.8vw, 24px)",
                                                    lineHeight: "130%",
                                                    letterSpacing: "-1%"
                                                }}
                                            >
                                                {challengeItems[2].content}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Четвертый пункт */}
                                    <motion.div
                                        style={{
                                            y: fourthItemY,
                                            opacity: fourthItemOpacity
                                        }}
                                        className="absolute inset-0 flex items-center"
                                    >
                                        <div>
                                            <h3
                                                className="gradient-text font-sf-pro mb-5"
                                                style={{
                                                    fontFamily: "SF Pro Display",
                                                    fontWeight: 300,
                                                    fontSize: "48px",
                                                    lineHeight: "110%",
                                                    letterSpacing: "0%",
                                                    paddingBottom: "0.05em"
                                                }}
                                            >
                                                {challengeItems[3].title}
                                            </h3>

                                            <p
                                                className="text-white/80 font-sf-pro leading-relaxed"
                                                style={{
                                                    fontFamily: "SF Pro Display",
                                                    fontWeight: 300,
                                                    fontSize: "clamp(18px, 1.8vw, 24px)",
                                                    lineHeight: "130%",
                                                    letterSpacing: "-1%"
                                                }}
                                            >
                                                {challengeItems[3].content}
                                            </p>

                                            {challengeItems[3].subItems && (
                                                <div className="space-y-3 mt-6">
                                                    {challengeItems[3].subItems.map((subItem, subIndex) => (
                                                        <p
                                                            key={subIndex}
                                                            className="text-white/80 font-sf-pro leading-relaxed pl-4"
                                                            style={{
                                                                fontFamily: "SF Pro Display",
                                                                fontWeight: 300,
                                                                fontSize: "clamp(18px, 1.8vw, 24px)",
                                                                lineHeight: "130%",
                                                                letterSpacing: "-1%"
                                                            }}
                                                        >
                                                            {subItem}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Мобильная версия без sticky */}
            <section className="lg:hidden bg-black text-white py-20 px-5">
                <div className="max-w-4xl mx-auto">
                    {/* Заголовок */}
                    <h2
                        className="font-sf-pro gradient-text mb-16"
                        style={{
                            fontSize: "clamp(32px, 8vw, 48px)",
                            fontWeight: 300,
                            lineHeight: "110%",
                            letterSpacing: "0%",
                            paddingBottom: "0.05em"
                        }}
                    >
                        The Big Challenge:
                        <br/>
                        How Does FROG
                        <br/>
                        Reach Its Target?
                    </h2>

                    {/* Пункты в столбик */}
                    <div className="space-y-12">
                        {challengeItems.map((item, index) => (
                            <div key={index} className="space-y-4">
                                <h3
                                    className="gradient-text font-sf-pro"
                                    style={{
                                        fontFamily: "SF Pro Display",
                                        fontWeight: 300,
                                        fontSize: "clamp(24px, 6vw, 32px)",
                                        lineHeight: "110%",
                                        letterSpacing: "0%",
                                        paddingBottom: "0.05em"
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="text-white/80 font-sf-pro leading-relaxed"
                                    style={{
                                        fontFamily: "SF Pro Display",
                                        fontWeight: 300,
                                        fontSize: "clamp(16px, 4vw, 18px)",
                                        lineHeight: "130%",
                                        letterSpacing: "-1%"
                                    }}
                                >
                                    {item.content}
                                </p>

                                {item.subItems && (
                                    <div className="space-y-2 mt-4">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <p
                                                key={subIndex}
                                                className="text-white/80 font-sf-pro leading-relaxed pl-4"
                                                style={{
                                                    fontFamily: "SF Pro Display",
                                                    fontWeight: 300,
                                                    fontSize: "clamp(14px, 3.5vw, 16px)",
                                                    lineHeight: "130%",
                                                    letterSpacing: "-1%"
                                                }}
                                            >
                                                {subItem}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
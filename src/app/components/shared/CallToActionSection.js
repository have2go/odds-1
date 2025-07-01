'use client';

import {motion} from 'framer-motion';
import {Button} from "../ui/button";
import TransitionLink from "@/app/components/TransitionLink";
import {usePathname} from "next/navigation";

export default function CallToActionSection() {
    const pathname = usePathname();

    return (
        <section className="relative overflow-hidden py-20 lg:py-[120px]" style={{background: '#FFFFFF0A'}}>
            {/* Контент */}
            <div className="relative z-10 w-full max-w-[1800px] mx-auto px-5 lg:px-[125px]">
                
                {/* Десктопная версия - оригинальная горизонтальная компоновка */}
                <div className="hidden lg:block">
                    {/* Заголовок */}
                    <motion.h2
                        className="font-sf-pro gradient-text mb-16"
                        style={{
                            fontWeight: "300",
                            fontSize: "clamp(40px, 6vw, 80px)",
                            lineHeight: "110%",
                            letterSpacing: "0%",
                            paddingBottom: "0.05em"
                        }}
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{
                            duration: 1.2,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >
                        The space debris crisis is escalating, but together we can solve it. We need innovators, partners,
                        and visionaries to join our mission
                    </motion.h2>

                    {/* Абзац и кнопка прибиты к правому краю */}
                    <div className="flex justify-end gap-10 pt-10 w-full">
                        {pathname !== "/problem" && <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1,
                                delay: 0.6,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <TransitionLink href="/problem" className="w-fit">
                                <Button
                                    variant="gradient"
                                    size="xl"
                                    className="min-w-[300px] w-full font-sf-pro"
                                    style={{
                                        fontWeight: "400",
                                        fontSize: "clamp(14px, 1.2vw, 18px)",
                                        lineHeight: "120%",
                                        letterSpacing: "0%",
                                    }}
                                >
                                    PROBLEM
                                </Button>
                            </TransitionLink>
                        </motion.div>}
                        {pathname !== "/ideas" && <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1,
                                delay: 0.6,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <TransitionLink href="/ideas" className="w-fit">
                                <Button
                                    variant="gradient"
                                    size="xl"
                                    className="min-w-[300px] w-full font-sf-pro"
                                    style={{
                                        fontWeight: "400",
                                        fontSize: "clamp(14px, 1.2vw, 18px)",
                                        lineHeight: "120%",
                                        letterSpacing: "0%",
                                    }}
                                >
                                    IDEAS
                                </Button>
                            </TransitionLink>
                        </motion.div>}
                        {pathname !== "/approach" && <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1,
                                delay: 0.6,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <TransitionLink href="/approach" className="w-fit">
                                <Button
                                    variant="gradient"
                                    size="xl"
                                    className="min-w-[300px] w-full font-sf-pro"
                                    style={{
                                        fontWeight: "400",
                                        fontSize: "clamp(14px, 1.2vw, 18px)",
                                        lineHeight: "120%",
                                        letterSpacing: "0%",
                                    }}
                                >
                                    APPROACH
                                </Button>
                            </TransitionLink>
                        </motion.div>}
                        {pathname !== "/we-are-open" && <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1,
                                delay: 0.6,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <TransitionLink href="/we-are-open" className="w-fit">
                                <Button
                                    variant="gradient"
                                    size="xl"
                                    className="min-w-[300px] w-full font-sf-pro"
                                    style={{
                                        fontWeight: "400",
                                        fontSize: "clamp(14px, 1.2vw, 18px)",
                                        lineHeight: "120%",
                                        letterSpacing: "0%",
                                    }}
                                >
                                    JOIN US
                                </Button>
                            </TransitionLink>
                        </motion.div>}
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
                                lineHeight: "110%",
                                letterSpacing: "0%",
                                paddingBottom: "0.05em"
                            }}
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            The space debris crisis is escalating, but together we can solve it. We need innovators, partners,
                            and visionaries to join our mission
                        </motion.h2>

                        <div className="flex flex-col gap-5 pt-5 w-full">

                            {pathname !== "/problem" && <motion.div
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{
                                    duration: 1,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <TransitionLink href="/problem" className="w-fit">
                                    <Button
                                        variant="gradient"
                                        size="xl"
                                        className="w-full font-sf-pro"
                                        style={{
                                            fontWeight: "400",
                                            fontSize: "clamp(16px, 4vw, 20px)",
                                            lineHeight: "120%",
                                            letterSpacing: "0%",
                                        }}
                                    >
                                        PROBLEM
                                    </Button>
                                </TransitionLink>
                            </motion.div>}
                            {pathname !== "/ideas" && <motion.div
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{
                                    duration: 1,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <TransitionLink href="/ideas" className="w-fit">
                                    <Button
                                        variant="gradient"
                                        size="xl"
                                        className="w-full font-sf-pro"
                                        style={{
                                            fontWeight: "400",
                                            fontSize: "clamp(16px, 4vw, 20px)",
                                            lineHeight: "120%",
                                            letterSpacing: "0%",
                                        }}
                                    >
                                        IDEAS
                                    </Button>
                                </TransitionLink>
                            </motion.div>}
                            {pathname !== "/approach" &&<motion.div
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{
                                    duration: 1,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <TransitionLink href="/approach" className="w-fit">
                                    <Button
                                        variant="gradient"
                                        size="xl"
                                        className="w-full font-sf-pro"
                                        style={{
                                            fontWeight: "400",
                                            fontSize: "clamp(16px, 4vw, 20px)",
                                            lineHeight: "120%",
                                            letterSpacing: "0%",
                                        }}
                                    >
                                        APPROACH
                                    </Button>
                                </TransitionLink>
                            </motion.div>}
                            {pathname !== "/we-are-open" && <motion.div
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{
                                    duration: 1,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <TransitionLink href="/we-are-open" className="w-fit">
                                    <Button
                                        variant="gradient"
                                        size="xl"
                                        className="w-full font-sf-pro"
                                        style={{
                                            fontWeight: "400",
                                            fontSize: "clamp(16px, 4vw, 20px)",
                                            lineHeight: "120%",
                                            letterSpacing: "0%",
                                        }}
                                    >
                                        JOIN US
                                    </Button>
                                </TransitionLink>
                            </motion.div>}
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import {useState, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import ImagePreloader from '@/app/components/ImagePreloader';

// Компонент для скроллируемых пунктов
function ScrollablePointsSection({whiteBarRefProp, activeImage, setActiveImage}) {
    const [, forceUpdate] = useState({});
    const item1Ref = useRef(null);
    const item2Ref = useRef(null);
    const item3Ref = useRef(null);
    const item4Ref = useRef(null);

    // Отслеживание скролла для смены изображений
    useEffect(() => {
        const handleScroll = () => {
            forceUpdate({});

            const viewportCenter = window.innerHeight / 2;

            if (item1Ref.current) {
                const item1Rect = item1Ref.current.getBoundingClientRect();
                if (item1Rect.top <= viewportCenter && item1Rect.bottom >= viewportCenter) {
                    setActiveImage(1);
                }
            }

            if (item2Ref.current) {
                const item2Rect = item2Ref.current.getBoundingClientRect();
                if (item2Rect.top <= viewportCenter && item2Rect.bottom >= viewportCenter) {
                    setActiveImage(2);
                }
            }

            if (item3Ref.current) {
                const item3Rect = item3Ref.current.getBoundingClientRect();
                if (item3Rect.top <= viewportCenter && item3Rect.bottom >= viewportCenter) {
                    setActiveImage(3);
                }
            }

            if (item4Ref.current) {
                const item4Rect = item4Ref.current.getBoundingClientRect();
                if (item4Rect.top <= viewportCenter && item4Rect.bottom >= viewportCenter) {
                    setActiveImage(4);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const getItemOpacity = (itemRef) => {
        if (!itemRef.current || !whiteBarRefProp.current) return 1;

        const itemRect = itemRef.current.getBoundingClientRect();
        const whiteBarRect = whiteBarRefProp.current.getBoundingClientRect();
        const distance = itemRect.top - whiteBarRect.bottom;
        const fadeDistance = 10;

        if (distance > fadeDistance) {
            return 1;
        } else if (distance < -50) {
            return 0;
        } else {
            const normalizedDistance = Math.max(0, Math.min(1, (distance + 50) / (fadeDistance + 50)));
            return normalizedDistance;
        }
    };

    return (
        <div className="flex">
            {/* Левая половина - пустое место (планета "висит" над ней из sticky секции) */}
            <div className="flex-1">
                {/* Здесь ничего нет - планета зафиксирована в sticky секции выше */}
            </div>

            {/* Правая половина - скроллируемые пункты */}
            <div className="flex-1 z-50">
                <div className="h-[50px] min-h-[400px]"></div> {/* Небольшой отступ */}

                {/* Пункт 01 */}
                <div
                    ref={item1Ref}
                    className="mb-[175px] pr-8"
                    style={{opacity: getItemOpacity(item1Ref)}}
                >
                    <motion.div
                        className="flex items-start space-x-6 max-w-[600px]"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1}}
                    >
                        <span
                            className="font-sf-pro flex-shrink-0"
                            style={{
                                fontWeight: "300",
                                fontSize: "26px",
                                lineHeight: "130%",
                                letterSpacing: "-1%",
                                background: "#FFFFFF4D",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text"
                            }}
                        >
                            01
                        </span>
                        <h3
                            className="font-sf-pro gradient-text"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(24px, 3vw, 36px)",
                                lineHeight: "110%",
                                letterSpacing: "0%",
                            }}
                        >
                            Access to space for decades or centuries
                        </h3>
                    </motion.div>
                </div>

                {/* Пункт 02 */}
                <div
                    ref={item2Ref}
                    className="mb-[175px] pr-8"
                    style={{opacity: getItemOpacity(item2Ref)}}
                >
                    <motion.div
                        className="flex items-start space-x-6 max-w-[600px]"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1, delay: 0.1}}
                    >
                        <span
                            className="font-sf-pro flex-shrink-0"
                            style={{
                                fontWeight: "300",
                                fontSize: "26px",
                                lineHeight: "130%",
                                letterSpacing: "-1%",
                                background: "#FFFFFF4D",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text"
                            }}
                        >
                            02
                        </span>
                        <h3
                            className="font-sf-pro gradient-text"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(24px, 3vw, 36px)",
                                lineHeight: "110%",
                                letterSpacing: "0%",
                            }}
                        >
                            Critical satellite infrastructure for global communications and navigation
                        </h3>
                    </motion.div>
                </div>

                {/* Пункт 03 */}
                <div
                    ref={item3Ref}
                    className="mb-[175px] pr-8"
                    style={{opacity: getItemOpacity(item3Ref)}}
                >
                    <motion.div
                        className="flex items-start space-x-6 max-w-[600px]"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1, delay: 0.2}}
                    >
                        <span
                            className="font-sf-pro flex-shrink-0"
                            style={{
                                fontWeight: "300",
                                fontSize: "26px",
                                lineHeight: "130%",
                                letterSpacing: "-1%",
                                background: "#FFFFFF4D",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text"
                            }}
                        >
                            03
                        </span>
                        <h3
                            className="font-sf-pro gradient-text"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(24px, 3vw, 36px)",
                                lineHeight: "110%",
                                letterSpacing: "0%",
                            }}
                        >
                            Weather forecasting and Earth observation capabilities
                        </h3>
                    </motion.div>
                </div>

                {/* Пункт 04 */}
                <div
                    ref={item4Ref}
                    className="px-8"
                    style={{opacity: getItemOpacity(item4Ref)}}
                >
                    <motion.div
                        className="flex items-start space-x-6 max-w-[600px]"
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <span
                            className="font-sf-pro flex-shrink-0"
                            style={{
                                fontWeight: "300",
                                fontSize: "26px",
                                lineHeight: "130%",
                                letterSpacing: "-1%",
                                background: "#FFFFFF4D",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text"
                            }}
                        >
                            04
                        </span>
                        <h3
                            className="font-sf-pro gradient-text"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(24px, 3vw, 36px)",
                                lineHeight: "110%",
                                letterSpacing: "0%",
                            }}
                        >
                            Future opportunities for space exploration and development
                        </h3>
                    </motion.div>
                </div>

                <div className="h-[90vh]"></div>
            </div>
        </div>
    );
}

export default function NoRoomForErrorSection() {
    const whiteBarRef = useRef(null);
    const stickyContainerRef = useRef(null);
    const [activeImage, setActiveImage] = useState(1);
    const [showImage, setShowImage] = useState(false);

    // Проверяем видимость секции для показа планеты
    useEffect(() => {
        const handleScroll = () => {
            if (stickyContainerRef.current) {
                const containerRect = stickyContainerRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                // Показываем планету когда скроллируемая секция видна
                const shouldShow = containerRect.top < viewportHeight && containerRect.bottom > 0;
                setShowImage(shouldShow);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Проверяем сразу
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const failureItems = [
        {
            id: 1,
            number: "01",
            title: "Access to space for decades or centuries",
            image: "/images/failure-1.png"
        },
        {
            id: 2,
            number: "02",
            title: "Critical satellite infrastructure for global communications and navigation",
            image: "/images/failure-2.png"
        },
        {
            id: 3,
            number: "03",
            title: "Weather forecasting and Earth observation capabilities",
            image: "/images/failure-3.png"
        },
        {
            id: 4,
            number: "04",
            title: "Future opportunities for space exploration and development",
            image: "/images/failure-4.png"
        }
    ];

    return (
        <section className="relative bg-black">
            {/* Предзагрузка изображений failure */}
            <ImagePreloader
                images={[
                    '/images/failure-1.png',
                    '/images/failure-2.png',
                    '/images/failure-3.png',
                    '/images/failure-4.png'
                ]}
                delay={500}
            />

            <div className="w-full max-w-[1680px] mx-auto">

                {/* Десктопная версия */}
                <div className="hidden lg:block">
                    {/* STICKY СЕКЦИЯ - зафиксированная верхняя часть + планета */}
                    <div className="sticky top-0 z-20 bg-black pt-[100px] min-h-screen flex flex-col">
                        {/* Заголовок и абзац */}
                        <div className="problem-section-padding pt-5 pb-10 max-[1400px]:pt-0 max-[1400px]:pb-5 flex items-start space-x-16">
                            {/* Левая половина - заголовок */}
                            <div className="flex-1">
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
                                    Failure is not an option
                                </motion.h2>
                            </div>

                            {/* Правая половина - абзац */}
                            <div className="flex-1">
                                <motion.p
                                    className="font-sf-pro text-gray-300"
                                    style={{
                                        fontWeight: "300",
                                        fontSize: "clamp(18px, 1.8vw, 24px)",
                                        lineHeight: "130%",
                                        letterSpacing: "-1%",
                                        maxWidth: "90%"
                                    }}
                                    initial={{opacity: 0, x: 50}}
                                    whileInView={{opacity: 1, x: 0}}
                                    viewport={{once: true}}
                                    transition={{
                                        duration: 1.2,
                                        delay: 0.3,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    Regardless of the exact probability of full Kessler Syndrome humanity cannot afford this risk. The consequences would be catastrophic and
                                    effectively
                                    irreversible within our lifetime.
                                </motion.p>
                            </div>
                        </div>

                        {/* Белая полоска */}
                        <motion.div
                            ref={whiteBarRef}
                            className="bg-gray-200 py-[11px] problem-section-padding"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <p
                                className="font-sf-pro text-black text-left"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "clamp(18px, 1.8vw, 24px)",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                }}
                            >
                                If the Kessler effect materializes, we stand to lose:
                            </p>
                        </motion.div>

                        {/* Нижняя часть sticky секции с планетой */}
                        <div className="flex flex-1">
                            {/* Левая половина - ПЛАНЕТА (зафиксированная как часть sticky) */}
                            <div className="flex-1 flex items-center justify-center">
                                <div
                                    className="relative w-[400px] h-[400px] max-[1400px]:w-[350px] max-[1400px]:h-[350px] transition-opacity duration-300"
                                    style={{
                                        opacity: showImage ? 1 : 0
                                    }}
                                >
                                    {[1, 2, 3, 4].map((imageIndex) => (
                                        <div
                                            key={imageIndex}
                                            className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                                            style={{
                                                opacity: activeImage === imageIndex ? 1 : 0
                                            }}
                                        >
                                            <Image
                                                src={`/images/failure-${imageIndex}.png`}
                                                alt={`Failure consequence ${imageIndex}`}
                                                fill
                                                className="object-contain"
                                                priority={imageIndex === 1}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Правая половина - пустое место */}
                            <div className="flex-1"></div>
                        </div>
                    </div>

                    {/* СКРОЛЛИРУЕМАЯ СЕКЦИЯ - только пункты */}
                    <div ref={stickyContainerRef}>
                        <ScrollablePointsSection
                            whiteBarRefProp={whiteBarRef}
                            activeImage={activeImage}
                            setActiveImage={setActiveImage}
                        />
                    </div>
                </div>

                {/* Мобильная и планшетная версия */}
                <div className="lg:hidden">
                    <div className="px-5 pt-7">
                        {/* Заголовок */}
                        <motion.h2
                            className="font-sf-pro gradient-text mb-6"
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
                            Failure is not an option
                        </motion.h2>

                        {/* Описание */}
                        <motion.p
                            className="font-sf-pro text-gray-300 mb-8"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(16px, 4vw, 20px)",
                                lineHeight: "130%",
                                letterSpacing: "-1%",
                            }}
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1.2,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            Regardless of the exact probability of a full Kessler Syndrome – whether it's 1% or 90% –
                            humanity cannot afford this risk. The consequences would be catastrophic and effectively
                            irreversible within our lifetime.
                        </motion.p>

                        {/* Белая полоска */}
                        <motion.div
                            className="bg-gray-200 py-3 px-5 mb-8"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{
                                duration: 1,
                                delay: 0.4,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <p
                                className="font-sf-pro text-black text-left"
                                style={{
                                    fontWeight: "600",
                                    fontSize: "clamp(16px, 4vw, 20px)",
                                    lineHeight: "130%",
                                    letterSpacing: "-1%",
                                }}
                            >
                                If the Kessler effect materializes, we stand to lose:
                            </p>
                        </motion.div>
                    </div>

                    {/* Список failure items вертикально */}
                    <div className="px-5 space-y-12 pb-16">
                        {failureItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="flex items-center"
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-100px"}}
                                transition={{
                                    duration: 1,
                                    delay: index * 0.2,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                {/* Левая половина - изображение */}
                                <div className="flex-1">
                                    <Image
                                        src={item.image}
                                        alt={`Failure consequence ${item.id}`}
                                        width={213}
                                        height={213}
                                        quality={60}
                                        className="w-[80%] mx-auto h-full object-contain"
                                        priority={index === 0}
                                    />
                                </div>

                                {/* Правая половина - номер и заголовок */}
                                <div className="flex-1">
                                    <div className="flex flex-col items-start space-x-4 gap-2">
                                        <span
                                            className="font-sf-pro flex-shrink-0"
                                            style={{
                                                fontWeight: "300",
                                                fontSize: "clamp(20px, 5vw, 26px)",
                                                lineHeight: "130%",
                                                letterSpacing: "-1%",
                                                background: "#FFFFFF4D",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text"
                                            }}
                                        >
                                            {item.number}
                                        </span>
                                        <h3
                                            className="font-sf-pro gradient-text"
                                            style={{
                                                fontWeight: "300",
                                                fontSize: "clamp(20px, 5vw, 28px)",
                                                lineHeight: "110%",
                                                letterSpacing: "0%",
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
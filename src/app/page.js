'use client';

import {useState, useEffect, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {TypeAnimation} from 'react-type-animation';
import TransitionLink from "@/app/components/TransitionLink";
import { Button } from "@/app/components/ui/button";

export default function Home() {
    // Состояние для показа кнопок
    const [showButtons, setShowButtons] = useState(false);
    // Состояние для проверки, была ли анимация уже показана
    const [animationPlayed, setAnimationPlayed] = useState(false);
    // Состояние для загрузки видео
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const [videoTimedOut, setVideoTimedOut] = useState(false);

    const containerRef = useRef(null);
    const videoRef = useRef(null);

    // Проверяем при загрузке компонента, была ли анимация уже показана
    useEffect(() => {
        const hasPlayedAnimation = sessionStorage.getItem('homeAnimationPlayed');
        
        if (hasPlayedAnimation === 'true') {
            // Если анимация уже была показана, сразу показываем финальное состояние
            setAnimationPlayed(true);
            setShowButtons(true);
        }

        // Инициализируем lazy loading видео
        initVideoLoading();
    }, []);

    // Функция для выбора оптимального видео
    const selectVideoSource = () => {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        
        // Проверяем Network Information API
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const effectiveType = connection?.effectiveType;
        
        console.log(`Device: ${isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}, Connection: ${effectiveType || 'unknown'}`);
        
        // Логика выбора видео
        if (isMobile) {
            return '/videos/output2-sd.mp4'; // Используем SD для мобильных вместо mobile
        } else if (effectiveType === '4g' || effectiveType === '5g') {
            return '/videos/output2-hd.mp4';
        } else {
            return '/videos/output2-sd.mp4';
        }
    };

    // Функция для инициализации загрузки видео
    const initVideoLoading = () => {
        if (videoRef.current) {
            const video = videoRef.current;
            
            // Выбираем оптимальное видео
            const videoSrc = selectVideoSource();
            console.log(`Selected video: ${videoSrc}`);
            
            // Устанавливаем источник
            video.src = videoSrc;
            
            // Устанавливаем preload="auto" для полной загрузки
            video.preload = 'auto';
            
            // Таймаут загрузки (30 секунд)
            const timeoutId = setTimeout(() => {
                if (!videoStarted) {
                    console.log('Video loading timeout - staying with placeholder');
                    setVideoTimedOut(true);
                    
                    // Очищаем обработчики
                    video.removeEventListener('loadstart', handleLoadStart);
                    video.removeEventListener('loadeddata', handleLoadedData);
                    video.removeEventListener('canplaythrough', handleCanPlayThrough);
                }
            }, 30000);
            
            // Сохраняем ID таймаута для возможной очистки
            video.timeoutId = timeoutId;
            
            // Добавляем обработчики
            video.addEventListener('loadstart', handleLoadStart);
            video.addEventListener('loadeddata', handleLoadedData);
            video.addEventListener('canplaythrough', handleCanPlayThrough);
            
            // Начинаем загрузку видео
            video.load();
        }
    };

    // Обработчик начала загрузки
    const handleLoadStart = () => {
        console.log('Video loading started');
    };

    // Обработчик загрузки достаточных данных
    const handleLoadedData = () => {
        if (!videoStarted) {
            console.log('Video data loaded - checking if fully cached');
            
            // Даем браузеру время на предзагрузку и проверяем через интервал
            checkVideoFullyLoaded();
        }
    };

    // Обработчик готовности к воспроизведению
    const handleCanPlayThrough = () => {
        if (!videoStarted) {
            console.log('Video can play through - final check');
            
            // Дополнительная проверка через небольшую задержку
            setTimeout(() => {
                if (!videoStarted) {
                    checkVideoFullyLoaded(true); // force = true для финального запуска
                }
            }, 1000);
        }
    };

    // Функция проверки полной загрузки видео
    const checkVideoFullyLoaded = (force = false) => {
        if (videoRef.current && !videoStarted) {
            const video = videoRef.current;
            
            if (video.buffered.length > 0 && video.duration) {
                let totalBuffered = 0;
                
                // Суммируем все загруженные сегменты
                for (let i = 0; i < video.buffered.length; i++) {
                    totalBuffered += video.buffered.end(i) - video.buffered.start(i);
                }
                
                const duration = video.duration;
                const percentLoaded = (totalBuffered / duration) * 100;
                
                console.log(`Video buffered: ${percentLoaded.toFixed(1)}% (${video.buffered.length} segments)`);
                
                // Проверяем, загружено ли достаточно (95% или force)
                if (percentLoaded >= 95 || force) {
                    console.log('Starting video playback');
                    setVideoStarted(true);
                    
                    // Очищаем таймаут
                    if (video.timeoutId) {
                        clearTimeout(video.timeoutId);
                    }
                    
                    // Очищаем все обработчики
                    video.removeEventListener('loadstart', handleLoadStart);
                    video.removeEventListener('loadeddata', handleLoadedData);
                    video.removeEventListener('canplaythrough', handleCanPlayThrough);
                    
                    // Запускаем видео
                    setTimeout(() => {
                        setVideoLoaded(true);
                        video.play().catch(console.error);
                    }, 300);
                    
                    return;
                }
                
                // Если не загружено достаточно, проверяем снова через 2 секунды
                if (!force) {
                    setTimeout(() => checkVideoFullyLoaded(), 2000);
                }
            }
        }
    };

    // Очистка обработчиков при размонтировании
    useEffect(() => {
        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('loadstart', handleLoadStart);
                videoRef.current.removeEventListener('loadeddata', handleLoadedData);
                videoRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
            }
        };
    }, []);

    // Обработчик завершения анимации печатания
    const handleTypingComplete = () => {
        console.log("Печатание завершено");

        // Сохраняем флаг в sessionStorage
        sessionStorage.setItem('homeAnimationPlayed', 'true');

        // Показываем кнопки через небольшую задержку
        setTimeout(() => {
            setShowButtons(true);
        }, 800);
    };

    const navigationButtons = [
        { title: 'PROBLEM', href: '/problem' },
        { title: 'KNOWN IDEAS', href: '/ideas' },
        { title: 'OUR APPROACH', href: '/approach' },
        { title: 'JOIN US', href: '/we-are-open' }
    ];

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-black text-white overflow-hidden h-screen"
        >
            {/* Фоновое видео с плейсхолдером */}
            <div className="absolute inset-0 z-0">
                {/* Плейсхолдер - фоновое изображение */}
                <div 
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                        videoLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                        backgroundImage: "url('/images/first_frame_bg_main.jpg')",
                        // Fallback цвет на случай, если изображение не загрузится
                        backgroundColor: '#000'
                    }}
                />
                
                {/* Видео */}
                <video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    preload="none"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        videoLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {/* Источники будут установлены динамически через JS */}
                </video>
            </div>

            {/* Основное содержимое */}
            <div className="relative h-full">
                
                {/* Текст с эффектом печатания - центр второй четверти сверху */}
                <div className="absolute inset-x-0 top-1/4 sm:h-1/4 h-auto flex items-center justify-center z-10">
                    <div className="w-full md:max-w-[1000px] mx-auto text-center px-5 md:px-4">
                        <h1
                            className="w-full mx-auto font-sf-pro gradient-text"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(35px, 10vw, 113px)",
                                lineHeight: "96%",
                                letterSpacing: "0%",
                                minHeight: "clamp(2.4em, 16vw, 2.4em)",
                                maxWidth: "min(95vw, 1000px)",
                                margin: "0 auto"
                            }}
                        >
                            {animationPlayed ? (
                                // Если анимация уже была показана, сразу показываем финальный текст
                                <div style={{ fontWeight: "300" }}>
                                    <div style={{ whiteSpace: "nowrap" }}>What are the odds?</div>
                                    <div>The answer is...</div>
                                </div>
                            ) : (
                                // Если анимация не была показана, запускаем TypeAnimation
                                <TypeAnimation
                                    sequence={[
                                        'What are the odds?',
                                        1500,
                                        'What are the odds?\nThe answer is...',
                                        () => {
                                            handleTypingComplete();
                                        }
                                    ]}
                                    wrapper="div"
                                    repeat={0}
                                    speed={40}
                                    style={{
                                        display: 'block',
                                        fontWeight: "300",
                                        whiteSpace: "pre-line"
                                    }}
                                />
                            )}
                        </h1>
                    </div>
                </div>

                {/* Кнопки навигации - чуть ниже центра экрана */}
                <AnimatePresence>
                    {showButtons && (
                        <motion.div
                            className="absolute inset-x-0 top-[55%] flex justify-center z-10"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-[25px] w-full sm:max-w-6xl mx-auto px-5">
                                {navigationButtons.map((button, index) => {
                                    // Последовательность 2, 1, 3, 4 (индексы 1, 0, 2, 3)
                                    const delaySequence = [0.15, 0.05, 0.25, 0.35]; // Вторая первая, первая вторая, третья третья, четвертая четвертая
                                    
                                    return (
                                        <motion.div
                                            key={button.title}
                                            initial={{ opacity: 0, y: 40, scale: 0.8 }} // Уменьшил y с 80 до 40
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ 
                                                duration: 0.8,
                                                delay: delaySequence[index],
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                        >
                                            <TransitionLink href={button.href}>
                                                <Button
                                                    size="xl"
                                                    className="w-full border-[1.5px] border-white/70 backdrop-blur-xs text-white font-sf-pro hover:bg-white hover:text-black group whitespace-nowrap"
                                                    style={{
                                                        fontWeight: 400,
                                                        fontSize: "clamp(14px, 3.5vw, 22px)",
                                                        lineHeight: "120%",
                                                        letterSpacing: "0.05em",
                                                        padding: "clamp(16px, 4vw, 26px) clamp(24px, 8vw, 64px)",
                                                        minHeight: "clamp(150px, 20vw, auto)",
                                                        transition: "color 1s cubic-bezier(.25,1,.25,1), background-color 1s cubic-bezier(.25,1,.25,1)"
                                                    }}
                                                >
                                                    <span
                                                        className="flex items-center justify-center w-full text-center leading-tight"
                                                    >
                                                        {button.title}
                                                    </span>
                                                </Button>
                                            </TransitionLink>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

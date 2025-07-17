'use client';

import { useState, useEffect, useRef } from 'react';

export default function OptimizedVideo({ 
    videoBaseName, 
    className = '',
    placeholderSrc = null,
    autoPlay = true,
    muted = true,
    loop = true,
    playsInline = true,
    timeout = 30000,
    onVideoLoad = null,
    onTimeout = null
}) {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const [videoTimedOut, setVideoTimedOut] = useState(false);
    
    const videoRef = useRef(null);

    useEffect(() => {
        initVideoLoading();
    }, []);

    // Функция для выбора оптимального видео
    const selectVideoSource = () => {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        
        // Проверяем Network Information API
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const effectiveType = connection?.effectiveType;
        
        console.log(`[${videoBaseName}] Device: ${isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}, Connection: ${effectiveType || 'unknown'}`);
        
        // Логика выбора видео
        if (isMobile) {
            return `/videos/${videoBaseName}-mobile.mp4`;
        } else if (effectiveType === '4g' || effectiveType === '5g') {
            // Для HD используем оригинал (без суффикса)
            return `/videos/${videoBaseName}.mp4`;
        } else {
            return `/videos/${videoBaseName}-sd.mp4`;
        }
    };

    // Функция для инициализации загрузки видео
    const initVideoLoading = () => {
        if (videoRef.current) {
            const video = videoRef.current;
            
            // Выбираем оптимальное видео
            const videoSrc = selectVideoSource();
            console.log(`[${videoBaseName}] Selected video: ${videoSrc}`);
            
            // Устанавливаем источник
            video.src = videoSrc;
            
            // Устанавливаем preload="auto" для полной загрузки
            video.preload = 'auto';
            
            // Таймаут загрузки
            const timeoutId = setTimeout(() => {
                if (!videoStarted) {
                    console.log(`[${videoBaseName}] Video loading timeout - staying with placeholder`);
                    setVideoTimedOut(true);
                    
                    // Очищаем обработчики
                    video.removeEventListener('loadstart', handleLoadStart);
                    video.removeEventListener('loadeddata', handleLoadedData);
                    video.removeEventListener('canplaythrough', handleCanPlayThrough);
                    
                    // Вызываем callback если есть
                    if (onTimeout) onTimeout();
                }
            }, timeout);
            
            // Сохраняем ID таймаута для возможной очистки
            video.timeoutId = timeoutId;
            
            // Добавляем обработчики
            video.addEventListener('loadstart', handleLoadStart);
            video.addEventListener('loadeddata', handleLoadedData);
            video.addEventListener('canplaythrough', handleCanPlayThrough);
            
            // Обработчик ошибок
            video.addEventListener('error', handleVideoError);
            
            // Начинаем загрузку видео
            video.load();
        }
    };

    // Обработчик начала загрузки
    const handleLoadStart = () => {
        console.log(`[${videoBaseName}] Video loading started`);
    };

    // Обработчик загрузки достаточных данных
    const handleLoadedData = () => {
        if (!videoStarted) {
            console.log(`[${videoBaseName}] Video data loaded - checking if fully cached`);
            
            // Даем браузеру время на предзагрузку и проверяем через интервал
            checkVideoFullyLoaded();
        }
    };

    // Обработчик готовности к воспроизведению
    const handleCanPlayThrough = () => {
        if (!videoStarted) {
            console.log(`[${videoBaseName}] Video can play through - final check`);
            
            // Дополнительная проверка через небольшую задержку
            setTimeout(() => {
                if (!videoStarted) {
                    checkVideoFullyLoaded(true); // force = true для финального запуска
                }
            }, 1000);
        }
    };

    // Обработчик ошибок
    const handleVideoError = (e) => {
        console.error(`[${videoBaseName}] Video error:`, e);
        
        // Если это мобильная/SD версия и она не найдена, пробуем оригинал
        if (videoRef.current && !videoRef.current.src.includes(`${videoBaseName}.mp4`)) {
            console.log(`[${videoBaseName}] Fallback to original video`);
            videoRef.current.src = `/videos/${videoBaseName}.mp4`;
            videoRef.current.load();
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
                
                console.log(`[${videoBaseName}] Video buffered: ${percentLoaded.toFixed(1)}% (${video.buffered.length} segments)`);
                
                // Проверяем, загружено ли достаточно (95% или force)
                if (percentLoaded >= 95 || force) {
                    console.log(`[${videoBaseName}] Starting video playback`);
                    setVideoStarted(true);
                    
                    // Очищаем таймаут
                    if (video.timeoutId) {
                        clearTimeout(video.timeoutId);
                    }
                    
                    // Очищаем все обработчики
                    video.removeEventListener('loadstart', handleLoadStart);
                    video.removeEventListener('loadeddata', handleLoadedData);
                    video.removeEventListener('canplaythrough', handleCanPlayThrough);
                    video.removeEventListener('error', handleVideoError);
                    
                    // Запускаем видео
                    setTimeout(() => {
                        setVideoLoaded(true);
                        if (autoPlay) {
                            video.play().catch(console.error);
                        }
                        
                        // Вызываем callback если есть
                        if (onVideoLoad) onVideoLoad();
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
                videoRef.current.removeEventListener('error', handleVideoError);
                
                if (videoRef.current.timeoutId) {
                    clearTimeout(videoRef.current.timeoutId);
                }
            }
        };
    }, []);

    return (
        <div className="relative w-full h-full">
            {/* Плейсхолдер (если есть) */}
            {placeholderSrc && (
                <div 
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                        videoLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                        backgroundImage: `url('${placeholderSrc}')`,
                        backgroundColor: '#000'
                    }}
                />
            )}
            
            {/* Видео */}
            <video
                ref={videoRef}
                muted={muted}
                loop={loop}
                playsInline={playsInline}
                preload="none"
                className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    videoLoaded ? 'opacity-100' : 'opacity-0'
                } ${className}`}
            >
                {/* Источники будут установлены динамически через JS */}
            </video>
            
            {/* Fallback контент */}
            {videoTimedOut && !videoLoaded && (
                <div className="absolute inset-0 bg-gray-600 flex items-center justify-center">
                    <span className="text-white font-sf-pro text-lg">
                        Video not supported
                    </span>
                </div>
            )}
        </div>
    );
}

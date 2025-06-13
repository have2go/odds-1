'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

const TransitionContext = createContext();

export function usePageTransition() {
    return useContext(TransitionContext);
}

export default function PageTransitionProvider({ children }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [targetUrl, setTargetUrl] = useState(null);
    const router = useRouter();
    const pathname = usePathname();

    // Отслеживаем изменения пути для завершения перехода
    useEffect(() => {
        const completeTransition = async () => {
            if (isTransitioning && targetUrl && pathname === targetUrl) {
                // Минимальная задержка для рендера новой страницы
                await new Promise(resolve => setTimeout(resolve, 100));
                
                // Завершаем переход
                setIsTransitioning(false);
                setTargetUrl(null);
            }
        };

        completeTransition();
    }, [pathname, isTransitioning, targetUrl]);

    const navigateWithTransition = async (href) => {
        if (isTransitioning) return; // Предотвращаем множественные клики
        
        setIsTransitioning(true);
        setTargetUrl(href);
        
        // Минимальная задержка для начала анимации
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Переход на новую страницу
        router.push(href);
    };

    return (
        <TransitionContext.Provider value={{ navigateWithTransition }}>
            {children}
            
            {/* Анимация с ожиданием полной загрузки */}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                            exit: {
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1]
                            }
                        }}
                        className="fixed inset-0 z-50"
                        style={{
                            background: 'linear-gradient(135deg, #000000 0%, #0f0f0f 100%)'
                        }}
                    >
                        {/* Центральная надпись ODDS */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ 
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                <h1
                                    className="font-magistral text-white"
                                    style={{
                                        fontSize: "clamp(24px, 4vw, 48px)",
                                        fontWeight: 500,
                                        letterSpacing: "2%",
                                        lineHeight: "100%"
                                    }}
                                >
                                    ODDS
                                </h1>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </TransitionContext.Provider>
    );
}

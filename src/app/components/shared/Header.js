'use client';

import { useState } from 'react';
import TransitionLink from '../TransitionLink';
import { motion, AnimatePresence } from 'framer-motion';

// Компонент хедера (шапки) сайта с мобильным меню
export default function Header({ visible = true }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigationItems = [
        { href: "/problem", label: "Problem" },
        { href: "/ideas", label: "Known Ideas" },
        { href: "/approach", label: "Approach" },
        { href: "/we-are-open", label: "We Are Open" }
    ];

    return (
        <>
            <motion.header
                className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                    opacity: visible ? 1 : 0, 
                    y: visible ? 0 : -20 
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                <div className="max-w-[1680px] mx-auto flex justify-between items-center h-[60px] md:h-[80px] px-5 md:px-8">
                    {/* Логотип */}
                    <TransitionLink
                        href="/"
                        className="font-magistral text-[24px] md:text-[30px] leading-none mt-1.5"
                        style={{
                            fontWeight: 500,
                            letterSpacing: "2%",
                            lineHeight: "100%"
                        }}
                    >
                        ODDS
                    </TransitionLink>

                    {/* Десктопное меню */}
                    <div className="hidden md:flex gap-[46px]">
                        {navigationItems.map((item) => (
                            <TransitionLink 
                                key={item.href}
                                href={item.href} 
                                className="font-sf-pro uppercase hover:text-gray-300 transition-colors" 
                                style={{
                                    fontWeight: 300,
                                    fontSize: '18px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%'
                                }}
                            >
                                {item.label}
                            </TransitionLink>
                        ))}
                    </div>

                    {/* Кнопка бургер-меню для мобильных */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
                        aria-label="Toggle menu"
                    >
                        <span 
                            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                            }`}
                        />
                        <span 
                            className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                                isMenuOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span 
                            className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                            }`}
                        />
                    </button>
                </div>
                
                {/* Подчеркивание под хедером */}
                <div className="w-full h-[1px] bg-white/20"></div>
            </motion.header>

            {/* Мобильное меню */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Overlay */}
                        <div 
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={toggleMenu}
                        />
                        
                        {/* Меню */}
                        <motion.div
                            className="absolute top-[61px] left-0 right-0 bg-black/90 backdrop-blur-sm"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex flex-col py-1">
                                {navigationItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ 
                                            duration: 0.3, 
                                            delay: index * 0.1,
                                            ease: [0.22, 1, 0.36, 1] 
                                        }}
                                    >
                                        <TransitionLink 
                                            href={item.href} 
                                            className="block px-5 py-4 font-sf-pro uppercase hover:bg-white/10 transition-colors"
                                            style={{
                                                fontWeight: 300,
                                                fontSize: '18px',
                                                lineHeight: '100%',
                                                letterSpacing: '0%'
                                            }}
                                            onClick={toggleMenu}
                                        >
                                            {item.label}
                                        </TransitionLink>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

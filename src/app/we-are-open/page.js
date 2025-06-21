'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/app/components/Header';
import WeAreOpenSection from './components/WeAreOpenSectionNew';
import Footer from '@/app/components/Footer';

export default function WeAreOpenPage() {
    const [scrollY, setScrollY] = useState(0);
    const containerRef = useRef(null);

    // Отслеживание скролла для параллакс эффектов
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setScrollY(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div 
            ref={containerRef}
            className="h-screen bg-black text-white flex flex-col"
        >
            {/* Шапка */}
            <Header visible={true} />
            
            {/* Основная секция - занимает оставшееся место */}
            <div className="flex-1 flex flex-col">
                <WeAreOpenSection scrollY={scrollY} />
                
                {/* Обычный футер */}
                <Footer />
            </div>
        </div>
    );
}

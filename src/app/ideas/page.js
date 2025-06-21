'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/app/components/Header';
import IdeasHeroSection from './components/IdeasHeroSection';
import CallToActionSection from '@/app/components/shared/CallToActionSection';
import Footer from '@/app/components/Footer';

export default function IdeasPage() {
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
            className="min-h-screen bg-black text-white"
        >
            {/* Шапка */}
            <Header visible={true} />
            
            {/* Секции */}
            <IdeasHeroSection scrollY={scrollY} />
            <CallToActionSection />
            <Footer />
        </div>
    );
}

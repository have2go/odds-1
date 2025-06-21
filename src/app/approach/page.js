'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/app/components/shared/Header';
import ApproachHeroSection from './components/ApproachHeroSection';
import ApproachFirstStepSection from './components/ApproachFirstStepSection';
import ApproachFrogSection from './components/ApproachFrogSection';
import ApproachExplanationSection from './components/ApproachExplanationSection';
import ApproachChallengeSection from './components/ApproachChallengeSection';
import ApproachOrbitSection from './components/ApproachOrbitSection';
import ApproachCostSection from './components/ApproachCostSection';
import CallToActionSection from '@/app/components/shared/CallToActionSection';
import Footer from '@/app/components/shared/Footer';

export default function ApproachPage() {
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
            <ApproachHeroSection scrollY={scrollY} />
            <ApproachFirstStepSection />
            <ApproachFrogSection />
            <ApproachExplanationSection />
            <ApproachChallengeSection />
            <ApproachOrbitSection />
            <ApproachCostSection />
            <CallToActionSection />
            <Footer />

            {/* Стили для анимации стрелки */}
            <style jsx global>{`
                @keyframes customBounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </div>
    );
}

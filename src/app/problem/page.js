'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/app/components/Header';
import ProblemMain from './components/ProblemMain';
import SatellitesSection from './components/SatellitesSection';
import VideoSection from './components/VideoSection';
import RealProblemSection from './components/RealProblemSection';
import NoRoomForErrorSection from './components/NoRoomForErrorSection';
import ChainReactionSection from './components/ChainReactionSection';
import CulturalReflectionsSection from './components/CulturalReflectionsSection';
import QuestionsAnswersSection from './components/QuestionsAnswersSection';
import CallToActionSection from '@/app/components/shared/CallToActionSection';
import Footer from '@/app/components/Footer';

export default function ProblemPage() {
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
            <ProblemMain scrollY={scrollY} />
            <SatellitesSection />
            <VideoSection />
            <RealProblemSection />
            <NoRoomForErrorSection />
            <ChainReactionSection />
            <CulturalReflectionsSection />
            <QuestionsAnswersSection />
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

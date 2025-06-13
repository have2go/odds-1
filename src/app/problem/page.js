'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/problem/HeroSection';
import SatellitesSection from '../components/problem/SatellitesSection';
import VideoSection from '../components/problem/VideoSection';
import RealProblemSection from '../components/problem/RealProblemSection';
import KesslerImageSection from '../components/problem/KesslerImageSection';
import NoRoomForErrorSection from '../components/problem/NoRoomForErrorSection';
import ChainReactionSection from '../components/problem/ChainReactionSection';
import CulturalReflectionsSection from '../components/problem/CulturalReflectionsSection';
import QuestionsAnswersSection from '../components/problem/QuestionsAnswersSection';
import CallToActionSection from '../components/shared/CallToActionSection';
import Footer from '../components/Footer';

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
            <HeroSection scrollY={scrollY} />
            <SatellitesSection />
            <VideoSection />
            <RealProblemSection />
            {/* <KesslerImageSection /> */}
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

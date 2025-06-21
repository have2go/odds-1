'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import ArticleDialog from './ArticleDialog';
import {articles} from './articlesData';
import TransitionLink from "@/app/components/TransitionLink";

export default function IdeasHeroSection({scrollY}) {

    return (
        <div className="bg-black text-white">
            {/* Main Section */}
            <div className="max-w-[1800px] mx-auto px-5 lg:px-[125px] py-20 pb-0">
                
                {/* Десктопная версия от 1280px - sticky позиционирование */}
                <div className="hidden xl:block">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">

                        {/* Левая часть - заголовок, описание и кнопка (sticky) - сжимается */}
                        <div className="sticky top-20 self-start flex flex-col space-y-12 h-fit pt-20 pb-[50vh] min-w-0">

                            {/* Заголовок */}
                            <motion.h1
                                className="font-sf-pro gradient-text"
                                style={{
                                    fontSize: "clamp(60px, 10vw, 113px)",
                                    fontWeight: 300,
                                    lineHeight: "96%",
                                    letterSpacing: "0%"
                                }}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                Known ideas
                            </motion.h1>

                            {/* Описание */}
                            <motion.p
                                className="text-white/70 font-sf-pro leading-relaxed max-w-md"
                                style={{
                                    fontSize: "clamp(16px, 2.5vw, 18px)",
                                    fontWeight: 300,
                                    lineHeight: "1.6"
                                }}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 1,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                Since the dawn of the Space Age, humanity has grappled with the unintended consequence of
                                space exploration: orbital debris. Despite numerous initiatives aimed at mitigating this
                                issue, Earth's orbit remains cluttered with defunct satellites, spent rocket stages, and
                                fragmentation debris. However, with our innovative approach and cutting-edge technology, we
                                believe a comprehensive solution is within reach.
                            </motion.p>

                            {/* Кнопка */}
                            <TransitionLink href="/approach" className="w-fit">
                                <motion.button
                                    className="bg-white/10 backdrop-blur-sm text-white font-sf-pro px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 border border-white/20 hover:border-white"
                                    style={{
                                        fontWeight: 400,
                                        fontSize: "clamp(14px, 1.2vw, 16px)",
                                        lineHeight: "120%",
                                        letterSpacing: "0%"
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.4,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        transition: {duration: 0.2}
                                    }}
                                    whileTap={{scale: 0.98}}
                                >
                                    OUR APPROACH
                                </motion.button>
                            </TransitionLink>
                        </div>

                        {/* Правая часть - вертикальный timeline - не сжимается */}
                        <div className="relative pt-36 flex-shrink-0" style={{ minWidth: '600px' }}>

                            {/* Вертикальная линия timeline */}
                            <div
                                className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-1/2"></div>

                            {/* Контейнер с карточками */}
                            <div className="space-y-64 pb-[50vh]">
                                {articles.map((article, index) => {
                                    const isLeft = index % 2 === 0; // Четные индексы слева, нечетные справа

                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, y: 50}}
                                            whileInView={{opacity: 1, y: 0}}
                                            transition={{duration: 0.6, delay: index * 0.1}}
                                            className="relative flex items-start justify-center"
                                        >
                                            {/* Точка на timeline - фиксированная позиция по центру */}
                                            <div className="absolute left-1/2 top-6 w-3 h-3 bg-white rounded-full z-10 transform -translate-x-1/2"></div>
                                            
                                            <ArticleDialog article={article}>
                                                <div 
                                                    className={`relative cursor-pointer group ${
                                                        isLeft 
                                                            ? 'mr-auto pr-8' 
                                                            : 'ml-auto pl-8'
                                                    }`}
                                                    style={{
                                                        width: 'min(425px, calc(50% - 2rem))',
                                                        maxWidth: '425px'
                                                    }}
                                                >

                                                    {/* Контейнер карточки с hover эффектами */}
                                                    <div
                                                        className="p-4 rounded-lg border border-gray-700/30 group-hover:border-gray-500/60 group-hover:bg-white/5 transition-all duration-300 ease-out">

                                                        {/* Год */}
                                                        <p
                                                            className="text-white/60 font-sf-pro group-hover:text-white/80 transition-colors duration-300 mb-4"
                                                            style={{
                                                                fontSize: "clamp(14px, 1.5vw, 16px)",
                                                                fontWeight: 300
                                                            }}
                                                        >
                                                            {article.year}
                                                        </p>

                                                        {/* Изображение статьи */}
                                                        <div
                                                            className="w-full bg-gray-600 rounded overflow-hidden mb-4 transform transition-transform duration-300 group-hover:scale-105"
                                                            style={{
                                                                aspectRatio: "16/12",
                                                                height: "180px"
                                                            }}
                                                        >
                                                            <img
                                                                src={article.image}
                                                                alt={article.title}
                                                                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                                                            />
                                                        </div>

                                                        {/* Заголовок статьи */}
                                                        <h3
                                                            className="text-white font-sf-pro group-hover:text-white/95 transition-colors duration-300 mb-4"
                                                            style={{
                                                                fontSize: "clamp(18px, 2vw, 22px)",
                                                                fontWeight: 400,
                                                                lineHeight: "1.2"
                                                            }}
                                                        >
                                                            {article.title}
                                                        </h3>

                                                        {/* Описание */}
                                                        <p
                                                            className="text-white/70 font-sf-pro leading-relaxed group-hover:text-white/85 transition-colors duration-300 mb-4"
                                                            style={{
                                                                fontSize: "clamp(13px, 1.6vw, 15px)",
                                                                fontWeight: 300,
                                                                lineHeight: "1.5"
                                                            }}
                                                        >
                                                            {article.description}
                                                        </p>

                                                        {/* Ссылка */}
                                                        <span
                                                            className="text-white font-sf-pro underline group-hover:text-white/90 transition-colors duration-300 block"
                                                            style={{
                                                                fontSize: "clamp(13px, 1.6vw, 15px)",
                                                                fontWeight: 300
                                                            }}
                                                        >
                                                            Read the article
                                                        </span>
                                                    </div>
                                                </div>
                                            </ArticleDialog>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Средняя версия 1024-1280px - без sticky, timeline под текстом */}
                <div className="hidden lg:block xl:hidden">
                    
                    {/* Заголовок, описание и кнопка */}
                    <div className="mb-16 pt-20">
                        
                        {/* Заголовок */}
                        <motion.h1
                            className="font-sf-pro gradient-text mb-8"
                            style={{
                                fontSize: "clamp(60px, 10vw, 113px)",
                                fontWeight: 300,
                                lineHeight: "96%",
                                letterSpacing: "0%"
                            }}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            Known ideas
                        </motion.h1>

                        {/* Описание */}
                        <motion.p
                            className="text-white/70 font-sf-pro leading-relaxed mb-8 max-w-2xl"
                            style={{
                                fontSize: "clamp(16px, 2.5vw, 18px)",
                                fontWeight: 300,
                                lineHeight: "1.6"
                            }}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            Since the dawn of the Space Age, humanity has grappled with the unintended consequence of
                            space exploration: orbital debris. Despite numerous initiatives aimed at mitigating this
                            issue, Earth's orbit remains cluttered with defunct satellites, spent rocket stages, and
                            fragmentation debris. However, with our innovative approach and cutting-edge technology, we
                            believe a comprehensive solution is within reach.
                        </motion.p>

                        {/* Кнопка */}
                        <TransitionLink href="/approach" className="w-fit">
                            <motion.button
                                className="bg-white/10 backdrop-blur-sm text-white font-sf-pro px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 border border-white/20 hover:border-white"
                                style={{
                                    fontWeight: 400,
                                    fontSize: "clamp(14px, 1.2vw, 16px)",
                                    lineHeight: "120%",
                                    letterSpacing: "0%"
                                }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    transition: {duration: 0.2}
                                }}
                                whileTap={{scale: 0.98}}
                            >
                                OUR APPROACH
                            </motion.button>
                        </TransitionLink>
                    </div>

                    {/* Timeline - с фиксированным позиционированием точек */}
                    <div className="relative">

                        {/* Вертикальная линия timeline */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 transform -translate-x-1/2"></div>

                        {/* Контейнер с карточками */}
                        <div className="space-y-64 pb-[50vh]">
                            {articles.map((article, index) => {
                                const isLeft = index % 2 === 0; // Четные индексы слева, нечетные справа

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, y: 50}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.6, delay: index * 0.1}}
                                        className="relative flex items-start justify-center"
                                    >
                                        {/* Точка на timeline - фиксированная позиция по центру */}
                                        <div className="absolute left-1/2 top-6 w-3 h-3 bg-white rounded-full z-10 transform -translate-x-1/2"></div>
                                        
                                        <ArticleDialog article={article}>
                                            <div 
                                                className={`relative cursor-pointer group ${
                                                    isLeft 
                                                        ? 'mr-auto pr-8' 
                                                        : 'ml-auto pl-8'
                                                }`}
                                                style={{
                                                    width: 'min(425px, calc(50% - 2rem))',
                                                    maxWidth: '425px'
                                                }}
                                            >

                                                {/* Контейнер карточки с hover эффектами */}
                                                <div
                                                    className="p-4 rounded-lg border border-gray-700/30 group-hover:border-gray-500/60 group-hover:bg-white/5 transition-all duration-300 ease-out">

                                                    {/* Год */}
                                                    <p
                                                        className="text-white/60 font-sf-pro group-hover:text-white/80 transition-colors duration-300 mb-4"
                                                        style={{
                                                            fontSize: "clamp(14px, 1.5vw, 16px)",
                                                            fontWeight: 300
                                                        }}
                                                    >
                                                        {article.year}
                                                    </p>

                                                    {/* Изображение статьи */}
                                                    <div
                                                        className="w-full bg-gray-600 rounded overflow-hidden mb-4 transform transition-transform duration-300 group-hover:scale-105"
                                                        style={{
                                                            aspectRatio: "16/12",
                                                            height: "180px"
                                                        }}
                                                    >
                                                        <img
                                                            src={article.image}
                                                            alt={article.title}
                                                            className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                                                        />
                                                    </div>

                                                    {/* Заголовок статьи */}
                                                    <h3
                                                        className="text-white font-sf-pro group-hover:text-white/95 transition-colors duration-300 mb-4"
                                                        style={{
                                                            fontSize: "clamp(18px, 2vw, 22px)",
                                                            fontWeight: 400,
                                                            lineHeight: "1.2"
                                                        }}
                                                    >
                                                        {article.title}
                                                    </h3>

                                                    {/* Описание */}
                                                    <p
                                                        className="text-white/70 font-sf-pro leading-relaxed group-hover:text-white/85 transition-colors duration-300 mb-4"
                                                        style={{
                                                            fontSize: "clamp(13px, 1.6vw, 15px)",
                                                            fontWeight: 300,
                                                            lineHeight: "1.5"
                                                        }}
                                                    >
                                                        {article.description}
                                                    </p>

                                                    {/* Ссылка */}
                                                    <span
                                                        className="text-white font-sf-pro underline group-hover:text-white/90 transition-colors duration-300 block"
                                                        style={{
                                                            fontSize: "clamp(13px, 1.6vw, 15px)",
                                                            fontWeight: 300
                                                        }}
                                                    >
                                                        Read the article
                                                    </span>
                                                </div>
                                            </div>
                                        </ArticleDialog>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Мобильная версия до 1024px - timeline слева, карточки справа */}
                <div className="lg:hidden">
                    
                    {/* Заголовок, описание и кнопка на всю ширину */}
                    <div className="mb-16 pt-20">
                        
                        {/* Заголовок */}
                        <motion.h1
                            className="font-sf-pro gradient-text mb-8"
                            style={{
                                fontSize: "clamp(40px, 12vw, 80px)",
                                fontWeight: 300,
                                lineHeight: "96%",
                                letterSpacing: "0%"
                            }}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            Known ideas
                        </motion.h1>

                        {/* Описание */}
                        <motion.p
                            className="text-white/70 font-sf-pro leading-relaxed mb-8"
                            style={{
                                fontSize: "clamp(16px, 4vw, 18px)",
                                fontWeight: 300,
                                lineHeight: "1.6"
                            }}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            Since the dawn of the Space Age, humanity has grappled with the unintended consequence of
                            space exploration: orbital debris. Despite numerous initiatives aimed at mitigating this
                            issue, Earth's orbit remains cluttered with defunct satellites, spent rocket stages, and
                            fragmentation debris. However, with our innovative approach and cutting-edge technology, we
                            believe a comprehensive solution is within reach.
                        </motion.p>

                        {/* Кнопка */}
                        <TransitionLink href="/approach" className="w-full">
                            <motion.button
                                className="bg-white/10 backdrop-blur-sm text-white font-sf-pro px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 w-full border border-white/20 hover:border-white"
                                style={{
                                    fontWeight: 400,
                                    fontSize: "clamp(14px, 4vw, 16px)",
                                    lineHeight: "120%",
                                    letterSpacing: "0%"
                                }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.4,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                whileHover={{
                                    scale: 1.02,
                                    transition: {duration: 0.2}
                                }}
                                whileTap={{scale: 0.98}}
                            >
                                OUR APPROACH
                            </motion.button>
                        </TransitionLink>
                    </div>

                    {/* Timeline - слева, карточки справа */}
                    <div className="relative">
                        
                        {/* Вертикальная линия timeline слева */}
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-white/20"></div>

                        {/* Контейнер с карточками */}
                        <div className="space-y-12 pl-16 pb-32">
                            {articles.map((article, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: index * 0.1}}
                                    className="relative"
                                >
                                    <ArticleDialog article={article}>
                                        <div className="relative cursor-pointer group max-w-[425px]">

                                            {/* Точка на timeline */}
                                            <div className="absolute top-6 w-3 h-3 bg-white rounded-full z-10" style={{ left: '-46px' }}></div>

                                            {/* Контейнер карточки */}
                                            <div className="p-4 rounded-lg border border-gray-700/30 group-hover:border-gray-500/60 group-hover:bg-white/5 transition-all duration-300 ease-out">

                                                {/* Год */}
                                                <p
                                                    className="text-white/60 font-sf-pro group-hover:text-white/80 transition-colors duration-300 mb-4"
                                                    style={{
                                                        fontSize: "clamp(14px, 4vw, 16px)",
                                                        fontWeight: 300
                                                    }}
                                                >
                                                    {article.year}
                                                </p>

                                                {/* Изображение статьи */}
                                                <div
                                                    className="w-full bg-gray-600 rounded overflow-hidden mb-4 transform transition-transform duration-300 group-hover:scale-105"
                                                    style={{
                                                        aspectRatio: "16/12",
                                                        height: "180px"
                                                    }}
                                                >
                                                    <img
                                                        src={article.image}
                                                        alt={article.title}
                                                        className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                                                    />
                                                </div>

                                                {/* Заголовок статьи */}
                                                <h3
                                                    className="text-white font-sf-pro group-hover:text-white/95 transition-colors duration-300 mb-4"
                                                    style={{
                                                        fontSize: "clamp(18px, 5vw, 22px)",
                                                        fontWeight: 400,
                                                        lineHeight: "1.2"
                                                    }}
                                                >
                                                    {article.title}
                                                </h3>

                                                {/* Описание */}
                                                <p
                                                    className="text-white/70 font-sf-pro leading-relaxed group-hover:text-white/85 transition-colors duration-300 mb-4"
                                                    style={{
                                                        fontSize: "clamp(13px, 4vw, 15px)",
                                                        fontWeight: 300,
                                                        lineHeight: "1.5"
                                                    }}
                                                >
                                                    {article.description}
                                                </p>

                                                {/* Ссылка */}
                                                <span
                                                    className="text-white font-sf-pro underline group-hover:text-white/90 transition-colors duration-300 block"
                                                    style={{
                                                        fontSize: "clamp(13px, 4vw, 15px)",
                                                        fontWeight: 300
                                                    }}
                                                >
                                                    Read the article
                                                </span>
                                            </div>
                                        </div>
                                    </ArticleDialog>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

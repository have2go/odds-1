'use client';

import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import Link from 'next/link';
import ArticleDialog from './ArticleDialog';
import {articles} from './articlesData';
import TransitionLink from "@/app/components/TransitionLink";

export default function IdeasHeroSection({scrollY}) {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonRef = useRef(null);

    const isTitleInView = useInView(titleRef, {once: true, margin: "-100px"});
    const isDescriptionInView = useInView(descriptionRef, {once: true, margin: "-100px"});
    const isButtonInView = useInView(buttonRef, {once: true, margin: "-100px"});

    return (
        <div className="bg-black text-white">
            {/* Main Section */}
            <div className="max-w-[1800px] mx-auto px-[125px] py-20 pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">

                    {/* Левая часть - заголовок, описание и кнопка (sticky) */}
                    <div className="sticky top-20 self-start flex flex-col space-y-12 h-fit pt-20 pb-[50vh]">

                        {/* Заголовок */}
                        <motion.h1
                            ref={titleRef}
                            className="font-sf-pro text-white"
                            style={{
                                fontSize: "clamp(60px, 10vw, 113px)",
                                fontWeight: 300,
                                lineHeight: "96%",
                                letterSpacing: "0%"
                            }}
                            initial={{opacity: 0, y: 50}}
                            animate={isTitleInView ? {opacity: 1, y: 0} : {opacity: 0, y: 50}}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            Known ideas
                        </motion.h1>

                        {/* Описание */}
                        <motion.p
                            ref={descriptionRef}
                            className="text-white/80 font-sf-pro leading-relaxed max-w-md"
                            style={{
                                fontSize: "clamp(16px, 2.5vw, 18px)",
                                fontWeight: 300,
                                lineHeight: "1.6"
                            }}
                            initial={{opacity: 0, y: 40}}
                            animate={isDescriptionInView ? {opacity: 1, y: 0} : {opacity: 0, y: 40}}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
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
                                ref={buttonRef}
                                className="bg-white text-black font-sf-pro px-8 py-4 hover:bg-gray-200 transition-colors w-full"
                                style={{
                                    fontWeight: 400,
                                    fontSize: "clamp(14px, 1.2vw, 16px)",
                                    lineHeight: "120%",
                                    letterSpacing: "0%"
                                }}
                                initial={{opacity: 0, y: 20}}
                                animate={isButtonInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5,
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

                    {/* Правая часть - вертикальный timeline */}
                    <div className="relative pt-36">

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
                                        className={`flex items-start ${
                                            isLeft ? 'justify-start pr-8' : 'justify-end pl-8'
                                        }`}
                                    >
                                        <ArticleDialog article={article}>
                                            <div className="relative space-y-6 max-w-xs cursor-pointer group">

                                                {/* Точка на timeline - привязана к началу карточки */}
                                                <div
                                                    className={`absolute top-6 w-3 h-3 bg-white rounded-full z-10 ${
                                                        isLeft ? 'right-[-57px]' : 'left-[-57px]'
                                                    }`}
                                                ></div>

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
        </div>
    );
}

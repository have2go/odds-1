'use client';

import React from 'react';
import {motion, cubicBezier} from 'framer-motion';

const BigODDS = () => {
    // Цвет фона квадратов
    const bgColor = "rgba(255, 255, 255, 0.05)"; // #FFFFFF0D

    // Буквы в массиве
    const letters = ['O', 'D', 'D', 'S'];

    // Разные функции плавности, но без "отскока" назад
    // Каждая буква имеет свой характер движения вверх, но без отрицательных значений
    const letterTransitions = [
        { // Для "O" - быстрый старт, плавное замедление
            duration: 2,
            ease: [0.2, 0.5, 0.3, 1.0] // Быстро в начале, медленно в конце
        },
        { // Для первой "D" - равномерное начало, длительное замедление
            duration: 2,
            ease: [0.2, 0.8, 0.3, 1] // Средний старт
        },
        { // Для второй "D" - медленный старт, быстрая середина
            duration: 2,
            ease: [0.2, 0.5, 0.3, 1.0] // Медленнее в начале
        },
        { // Для "S" - очень резкий старт
            duration: 2,
            ease: [0.2, 0.1, 0.3, 1.0] // Очень быстро в начале
        }
    ];

    // Общая анимация контейнера
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                when: "beforeChildren",
            }
        }
    };

    // Соотношение сторон контейнера букв (height/width = 326/260 = 1.25385)
    const aspectRatio = 326 / 260;

    return (
        <motion.div
            className="w-full flex justify-center items-center pb-14"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="grid grid-cols-4 gap-[18px] w-full max-w-5xl">
                {letters.map((letter, index) => (
                    <motion.div
                        key={index}
                        className="relative flex items-center justify-center"
                        style={{
                            backgroundColor: bgColor,
                            // Устанавливаем правильное соотношение сторон
                            paddingBottom: `${aspectRatio * 100}%`, // 125.385% от ширины для сохранения пропорций
                            height: 0 // Требуется для правильной работы padding-bottom
                        }}
                        initial={{opacity: 0, y: 150}}
                        animate={{opacity: 1, y: 0}}
                        transition={letterTransitions[index]}
                    >
                        <span 
                            className="absolute inset-0 flex items-center justify-center text-[clamp(100px,15vw,255.67px)] font-sf-pro text-white"
                            style={{
                                fontWeight: 300,
                                lineHeight: '100%',
                                background: 'linear-gradient(177.58deg, #FFFFFF 11.87%, rgba(255, 255, 255, 0.2) 104.49%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                        >
                            {letter}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default BigODDS;

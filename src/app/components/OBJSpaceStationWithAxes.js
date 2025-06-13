// 'use client';
//
// import React, { useRef, Suspense, useEffect, useState } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Line } from '@react-three/drei';
// import * as THREE from 'three';
//
// // Глобальная переменная для доступа к функции анимации извне
// if (typeof window !== 'undefined') {
//     window.startSpaceStationAnimation = function() {
//         console.log("Глобальная функция вызвана, но еще не инициализирована");
//     };
//     window.modelLettersReady = false; // Флаг для синхронизации с анимацией букв ODDS
// }
//
// // Компонент для отображения осей координат
// const AxisHelper = () => {
//     const axisLength = 20;
//
//     return (
//         <group>
//             {/* Ось X - красная */}
//             <Line
//                 points={[[0, 0, 0], [axisLength, 0, 0]]}
//                 color="red"
//                 lineWidth={3}
//             />
//             <mesh position={[axisLength + 1, 0, 0]}>
//                 <sphereGeometry args={[0.5, 8, 8]} />
//                 <meshBasicMaterial color="red" />
//             </mesh>
//
//             {/* Ось Y - зеленая */}
//             <Line
//                 points={[[0, 0, 0], [0, axisLength, 0]]}
//                 color="green"
//                 lineWidth={3}
//             />
//             <mesh position={[0, axisLength + 1, 0]}>
//                 <sphereGeometry args={[0.5, 8, 8]} />
//                 <meshBasicMaterial color="green" />
//             </mesh>
//
//             {/* Ось Z - синяя */}
//             <Line
//                 points={[[0, 0, 0], [0, 0, axisLength]]}
//                 color="blue"
//                 lineWidth={3}
//             />
//             <mesh position={[0, 0, axisLength + 1]}>
//                 <sphereGeometry args={[0.5, 8, 8]} />
//                 <meshBasicMaterial color="blue" />
//             </mesh>
//         </group>
//     );
// };
//
// // Компонент для управления камерой
// const CameraController = () => {
//     useFrame((state) => {
//         // Обновление позиции камеры, если анимация активна
//         const camera = state.camera;
//         const isAnimating = window.isModelAnimating;
//
//         if (isAnimating && camera.userData.initialZ) {
//             // Получаем текущий прогресс анимации (0-1) из глобальной переменной
//             const progress = window.modelAnimationProgress || 0;
//
//             // Плавно приближаем камеру
//             if (progress < 1) {
//                 const initialZ = camera.userData.initialZ;
//                 const targetZ = camera.userData.targetZ;
//                 camera.position.z = initialZ - (initialZ - targetZ) * progress;
//             }
//         }
//     });
//
//     return null;
// };
//
// // Компонент модели космической станции
// const TruncatedDoubleConusModel = () => {
//     // Ссылка на основную модель и отдельно на вращающуюся часть
//     const modelRef = useRef();
//     const rotatingPartRef = useRef();
//
//     // Состояние анимации
//     const rotationSpeed = useRef(0.07);  // Скорость вращения
//     const targetRotationY = useRef(0);   // Целевой угол для Y
//
//     // Текущие значения
//     const initialRotation = useRef({ x: 0, y: 0, z: 0 });
//     const isRotating = useRef(false);
//     const animationTimer = useRef(0);
//     const animationDuration = useRef(4); // 4 секунды для анимации
//
//     // Инициализация функции анимации
//     useEffect(() => {
//         // Сохраняем начальное вращение модели
//         if (modelRef.current) {
//             initialRotation.current = {
//                 x: modelRef.current.rotation.x,
//                 y: modelRef.current.rotation.y,
//                 z: modelRef.current.rotation.z
//             };
//         }
//
//         // Функция для запуска анимации
//         const startAnimation = () => {
//             console.log("Запуск анимации вращения модели");
//
//             // Устанавливаем целевой угол Y (отрицательное значение для поворота в другую сторону)
//             targetRotationY.current = Math.PI * -50 / 180;  // -50 градусов
//
//             // Устанавливаем длительность анимации
//             animationDuration.current = 4; // 4 секунды для анимации
//
//             // Устанавливаем скорость вращения
//             rotationSpeed.current = 0.1;
//
//             // Сбрасываем таймер анимации
//             animationTimer.current = 0;
//
//             // Запускаем анимацию
//             isRotating.current = true;
//         };
//
//         // Делаем функцию доступной глобально
//         if (typeof window !== 'undefined') {
//             window.startSpaceStationAnimation = startAnimation;
//         }
//     }, []);
//
//     // Основная функция анимации
//     useFrame((state, delta) => {
//         if (!modelRef.current || !rotatingPartRef.current) return;
//
//         // Анимация поворота всей модели по Y, если она запущена
//         if (isRotating.current) {
//             // Увеличиваем таймер анимации
//             animationTimer.current += delta;
//
//             // Вычисляем процент выполнения (0..1)
//             const progress = Math.min(animationTimer.current / animationDuration.current, 1);
//
//             // Сохраняем прогресс в глобальной переменной для синхронизации движения камеры
//             if (typeof window !== 'undefined') {
//                 window.isModelAnimating = true;
//                 window.modelAnimationProgress = progress;
//
//                 // Маркер для внешних компонентов, что буквы ODDS должны быть полностью видимы через 3 секунды
//                 // Это позволит показать буквы ODDS через 3 секунды, пока анимация поворота еще идет
//                 if (progress >= 0.75 && !window.modelLettersReady) {
//                     window.modelLettersReady = true;
//                     console.log("Сигнал готовности букв ODDS при 3/4 анимации поворота");
//                 }
//             }
//
//             // Плавная функция ease-in-out
//             const easedProgress = progress < 0.5
//                 ? 2 * progress * progress
//                 : 1 - Math.pow(-2 * progress + 2, 2) / 2;
//
//             // Вычисляем текущий угол поворота Y для всей модели
//             const newRotationY = easedProgress * targetRotationY.current;
//
//             // Вращение внутренней части вокруг оси X (как было изначально)
//             rotatingPartRef.current.rotation.x += rotationSpeed.current * delta;
//
//             // Применяем поворот по Y ко всей модели
//             modelRef.current.rotation.y = newRotationY;
//
//             // Дополнительное смещение модели влево во время анимации
//             const leftShift = easedProgress * 3; // Сдвиг на 3 единицы влево
//             modelRef.current.position.x = -leftShift;
//
//             // Если анимация завершена - фиксируем положение
//             if (progress >= 1) {
//                 // ВАЖНО: После завершения анимации фиксируем точное значение Y
//                 modelRef.current.rotation.y = targetRotationY.current;
//                 modelRef.current.position.x = -3; // Фиксируем конечное положение
//
//                 // Полностью останавливаем анимацию поворота
//                 isRotating.current = false;
//                 if (typeof window !== 'undefined') {
//                     window.isModelAnimating = false;
//                     window.modelLettersReady = false; // Сбрасываем флаг готовности букв
//                 }
//
//                 console.log("Анимация поворота завершена и зафиксирована.");
//             }
//         } else {
//             // Просто вращаем внутреннюю часть вокруг оси X (после завершения анимации)
//             rotatingPartRef.current.rotation.x += rotationSpeed.current * delta;
//         }
//     });
//
//     return (
//         <group ref={modelRef}>
//             {/* Вращающаяся часть - сама станция */}
//             <group ref={rotatingPartRef} rotation={[0, 0, 0]} scale={1.5}>
//                 {/* Правая половина - конус с основанием в центре, вершина справа */}
//                 <mesh position={[7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
//                     <cylinderGeometry args={[3, 0.75, 14, 32]} />
//                     <meshStandardMaterial color="#CCCCCC" metalness={0.7} roughness={0.3} />
//                 </mesh>
//
//                 {/* Левая половина - конус с основанием в центре, вершина слева */}
//                 <mesh position={[-7, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
//                     <cylinderGeometry args={[3, 0.75, 14, 32]} />
//                     <meshStandardMaterial color="#AAAAAA" metalness={0.7} roughness={0.3} />
//                 </mesh>
//
//                 {/* Плоские "крышки" на внешних концах */}
//                 <mesh position={[14, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
//                     <cylinderGeometry args={[0.75, 0.75, 0.2, 32]} />
//                     <meshStandardMaterial color="#BBBBBB" metalness={0.9} roughness={0.1} />
//                 </mesh>
//
//                 <mesh position={[-14, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
//                     <cylinderGeometry args={[0.75, 0.75, 0.2, 32]} />
//                     <meshStandardMaterial color="#BBBBBB" metalness={0.9} roughness={0.1} />
//                 </mesh>
//             </group>
//         </group>
//     );
// };
//
// // Компонент загрузки
// const Loader = () => {
//     return (
//         <mesh>
//             <sphereGeometry args={[0.5, 16, 16]} />
//             <meshStandardMaterial color="#cccccc" wireframe />
//         </mesh>
//     );
// };
//
// // Основной компонент с холстом Three.js
// const OBJSpaceStationWithAxes = ({ onModelReady }) => {
//     // Состояние для отслеживания готовности сцены
//     const [isSceneReady, setIsSceneReady] = useState(false);
//
//     // Передаем функцию анимации родителю после загрузки сцены
//     useEffect(() => {
//         if (isSceneReady && onModelReady && typeof window !== 'undefined') {
//             // После небольшой задержки для полной инициализации
//             const timer = setTimeout(() => {
//                 const animateFunction = () => {
//                     if (window.startSpaceStationAnimation) {
//                         window.startSpaceStationAnimation();
//                     }
//                 };
//
//                 onModelReady(animateFunction);
//             }, 500);
//
//             return () => clearTimeout(timer);
//         }
//     }, [isSceneReady, onModelReady]);
//
//     return (
//         <div className="h-full w-full relative">
//             <Canvas
//                 camera={{ position: [0, 0, 45], fov: 20 }}
//                 gl={{ antialias: true, alpha: true }}
//                 dpr={[1, 2]}
//                 onCreated={(state) => {
//                     // Сохраняем начальную позицию камеры
//                     state.camera.position.z = 45;
//                     state.camera.userData.initialZ = 45;
//                     state.camera.userData.targetZ = 45; // Целевое значение Z для приближения
//
//                     // Помечаем сцену как готовую
//                     setIsSceneReady(true);
//                 }}
//                 // Отключаем все события мыши
//                 onPointerDown={(e) => e.stopPropagation()}
//                 onPointerMove={(e) => e.stopPropagation()}
//                 onPointerUp={(e) => e.stopPropagation()}
//                 onClick={(e) => e.stopPropagation()}
//                 onDoubleClick={(e) => e.stopPropagation()}
//                 onWheel={(e) => e.stopPropagation()}
//                 onContextMenu={(e) => e.stopPropagation()}
//             >
//                 {/* Освещение */}
//                 <ambientLight intensity={0.7} />
//                 <directionalLight position={[20, 10, 15]} intensity={1.2} />
//                 <directionalLight position={[-20, 5, -15]} intensity={0.5} />
//                 <directionalLight position={[0, -10, 5]} intensity={0.4} />
//
//                 {/* Управление камерой */}
//                 <CameraController />
//
//                 {/* Оси координат - временно скрыты */}
//                 {/* <AxisHelper /> */}
//
//                 {/* Модель станции */}
//                 <Suspense fallback={<Loader />}>
//                     <TruncatedDoubleConusModel />
//                 </Suspense>
//             </Canvas>
//
//             {/* Информация о цветах осей - временно скрыта */}
//             {/*
//             <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-3 rounded-md">
//                 <div className="text-white mb-1"><span className="inline-block w-3 h-3 bg-red-500 mr-2"></span>Ось X (красная)</div>
//                 <div className="text-white mb-1"><span className="inline-block w-3 h-3 bg-green-500 mr-2"></span>Ось Y (зеленая)</div>
//                 <div className="text-white"><span className="inline-block w-3 h-3 bg-blue-500 mr-2"></span>Ось Z (синяя)</div>
//             </div>
//             */}
//         </div>
//     );
// };
//
// export default OBJSpaceStationWithAxes;
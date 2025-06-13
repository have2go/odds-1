// 'use client';
//
// import { motion, useScroll, useTransform } from 'framer-motion';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';
//
// export default function HeroSectionPremium() {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const { scrollY } = useScroll();
//
//     // Parallax эффекты
//     const backgroundY = useTransform(scrollY, [0, 1000], [0, -300]);
//     const textY = useTransform(scrollY, [0, 1000], [0, -150]);
//     const opacity = useTransform(scrollY, [0, 400], [1, 0]);
//
//     // Отслеживание мыши для subtle параллакса
//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             setMousePosition({
//                 x: (e.clientX - window.innerWidth / 2) * 0.01,
//                 y: (e.clientY - window.innerHeight / 2) * 0.01,
//             });
//         };
//
//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);
//
//     const scrollToNext = () => {
//         window.scrollTo({
//             top: window.innerHeight,
//             behavior: 'smooth'
//         });
//     };
//
//     return (
//         <section className="relative h-screen flex items-center justify-center overflow-hidden">
//             {/* Animated background layers */}
//             <motion.div
//                 className="absolute inset-0 z-0"
//                 style={{ y: backgroundY }}
//             >
//                 <Image
//                     src="/images/bg-problem.png"
//                     alt="Space debris problem"
//                     fill
//                     priority
//                     quality={100}
//                     className="object-cover scale-110"
//                 />
//                 {/* Dynamic gradient overlay */}
//                 <motion.div
//                     className="absolute inset-0"
//                     style={{
//                         background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
//                         transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
//                     }}
//                     transition={{ type: "spring", stiffness: 150, damping: 30 }}
//                 />
//             </motion.div>
//
//             {/* Floating particles */}
//             <div className="absolute inset-0 z-5">
//                 {[...Array(20)].map((_, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute w-1 h-1 bg-white/20 rounded-full"
//                         initial={{
//                             x: Math.random() * window.innerWidth,
//                             y: Math.random() * window.innerHeight,
//                             opacity: Math.random() * 0.5 + 0.2,
//                         }}
//                         animate={{
//                             y: [null, -100],
//                             opacity: [null, 0],
//                         }}
//                         transition={{
//                             duration: Math.random() * 10 + 10,
//                             repeat: Infinity,
//                             ease: "linear",
//                             delay: Math.random() * 5,
//                         }}
//                     />
//                 ))}
//             </div>
//
//             {/* Main content with enhanced typography */}
//             <motion.div
//                 className="relative z-10 w-full max-w-[1680px] mx-auto px-8 text-center"
//                 style={{ y: textY, opacity }}
//             >
//                 {/* Subtle badge */}
//                 <motion.div
//                     className="inline-flex items-center px-4 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3, duration: 0.8 }}
//                 >
//                     <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse" />
//                     <span className="font-sf-pro text-white/80 text-sm tracking-wider uppercase">Critical Status</span>
//                 </motion.div>
//
//                 {/* Enhanced title with letter animations */}
//                 <motion.h1
//                     className="font-sf-pro gradient-text mb-6"
//                     style={{
//                         fontWeight: "300",
//                         fontSize: "clamp(60px, 10vw, 113px)",
//                         lineHeight: "96%",
//                         letterSpacing: "0%",
//                     }}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                     {"Space debris represents a critical threat to our future in space".split(" ").map((word, i) => (
//                         <motion.span
//                             key={i}
//                             className="inline-block mr-4"
//                             initial={{ opacity: 0, y: 50 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{
//                                 delay: i * 0.1 + 0.5,
//                                 duration: 0.8,
//                                 ease: [0.22, 1, 0.36, 1]
//                             }}
//                         >
//                             {word}
//                         </motion.span>
//                     ))}
//                 </motion.h1>
//
//                 {/* Subtitle with metrics */}
//                 <motion.div
//                     className="max-w-3xl mx-auto"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1.5, duration: 0.8 }}
//                 >
//                     <p className="font-sf-pro text-white/70 text-xl mb-8 leading-relaxed">
//                         Over <span className="text-white font-medium">34,000 tracked objects</span> and
//                         <span className="text-white font-medium"> 130 million</span> debris fragments threaten every satellite,
//                         every mission, every dream of space exploration.
//                     </p>
//
//                     {/* Stats counter animation */}
//                     <div className="flex justify-center space-x-12">
//                         {[
//                             { number: "34,000", label: "Tracked Objects" },
//                             { number: "130M", label: "Small Fragments" },
//                             { number: "10 km/s", label: "Impact Velocity" },
//                         ].map((stat, i) => (
//                             <motion.div
//                                 key={stat.label}
//                                 className="text-center"
//                                 initial={{ opacity: 0, scale: 0.8 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{ delay: 2 + i * 0.2, duration: 0.6 }}
//                             >
//                                 <div className="font-sf-pro text-2xl font-light gradient-text mb-1">
//                                     {stat.number}
//                                 </div>
//                                 <div className="font-sf-pro text-white/50 text-sm uppercase tracking-wider">
//                                     {stat.label}
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </motion.div>
//             </motion.div>
//
//             {/* Enhanced scroll indicator */}
//             <motion.button
//                 onClick={scrollToNext}
//                 className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 group cursor-pointer"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 2.5, duration: 0.8 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//             >
//                 <div className="flex flex-col items-center space-y-2">
//                     <span className="font-sf-pro text-white/60 text-xs uppercase tracking-widest">Scroll</span>
//                     <motion.div
//                         className="p-3 border border-white/20 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300"
//                         animate={{ y: [0, 5, 0] }}
//                         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//                     >
//                         <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
//                     </motion.div>
//                 </div>
//             </motion.button>
//
//             {/* Ambient glow effect */}
//             <div className="absolute inset-0 z-0 pointer-events-none">
//                 <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
//                 <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
//             </div>
//         </section>
//     );
// }

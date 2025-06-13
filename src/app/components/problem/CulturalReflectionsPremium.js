// 'use client';
//
// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import Image from 'next/image';
// import { Card, CardContent } from "../ui/card";
// import { ExternalLink, Play, Star } from "lucide-react";
// import { useState, useRef } from 'react';
//
// export default function CulturalReflectionsPremium() {
//     return (
//         <section className="relative bg-black w-full max-w-[1680px] mx-auto grid grid-cols-2 gap-16">
//             {/* Левая колонка - Sticky заголовок */}
//             <div className="sticky top-[120px] h-fit py-[100px]">
//                 <motion.h2
//                     className="font-sf-pro gradient-text"
//                     style={{
//                         fontWeight: "300",
//                         fontSize: "clamp(40px, 6vw, 80px)",
//                         lineHeight: "96%",
//                         letterSpacing: "0%",
//                     }}
//                     initial={{ opacity: 0, x: -50 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                         duration: 1.2,
//                         ease: [0.22, 1, 0.36, 1]
//                     }}
//                 >
//                     Cultural Reflections<br />of the Problem
//                 </motion.h2>
//             </div>
//
//             {/* Правая колонка - Премиальные карточки */}
//             <div className="py-[100px] space-y-8">
//                 <PremiumCard
//                     title="Gravity (2013)"
//                     description="This award-winning film vividly portrays the catastrophic consequences of the Kessler Syndrome, depicting a scenario where satellite destruction triggers a chain reaction of collisions."
//                     image="/images/bg-gravity.jpg"
//                     rating="8.1"
//                     year="2013"
//                     type="Academy Award Winner"
//                     delay={0.2}
//                 />
//
//                 <PremiumCard
//                     title="Nikolai Gorkavyi"
//                     description="This astrophysicist and science fiction writer explores space debris removal in his works, particularly in the 'Astrovitianka' cycle."
//                     image="/images/bg-gorkaviy.jpg"
//                     type="Astrophysicist & Author"
//                     hasLink
//                     delay={0.4}
//                 />
//             </div>
//         </section>
//     );
// }
//
// function PremiumCard({ title, description, image, rating, year, type, hasLink, delay }) {
//     const [isHovered, setIsHovered] = useState(false);
//     const cardRef = useRef(null);
//
//     const x = useMotionValue(0);
//     const y = useMotionValue(0);
//     const rotateX = useTransform(y, [-100, 100], [30, -30]);
//     const rotateY = useTransform(x, [-100, 100], [-30, 30]);
//
//     const handleMouseMove = (event) => {
//         const rect = cardRef.current?.getBoundingClientRect();
//         if (!rect) return;
//
//         const centerX = rect.left + rect.width / 2;
//         const centerY = rect.top + rect.height / 2;
//
//         x.set((event.clientX - centerX) / 5);
//         y.set((event.clientY - centerY) / 5);
//     };
//
//     const handleMouseLeave = () => {
//         x.set(0);
//         y.set(0);
//         setIsHovered(false);
//     };
//
//     return (
//         <motion.div
//             ref={cardRef}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//                 duration: 1.2,
//                 delay,
//                 ease: [0.22, 1, 0.36, 1]
//             }}
//             onMouseMove={handleMouseMove}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={handleMouseLeave}
//             className="group cursor-pointer"
//             style={{
//                 perspective: 1000,
//             }}
//         >
//             <motion.div
//                 style={{
//                     rotateX,
//                     rotateY,
//                     transformStyle: "preserve-3d",
//                 }}
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             >
//                 <Card className="relative overflow-hidden border-0 bg-transparent shadow-none">
//                     <div
//                         className="relative w-full group"
//                         style={{ aspectRatio: '830/572' }}
//                     >
//                         {/* Image with enhanced effects */}
//                         <div className="relative w-full h-full overflow-hidden">
//                             <motion.div
//                                 animate={{ scale: isHovered ? 1.1 : 1 }}
//                                 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                                 className="w-full h-full"
//                             >
//                                 <Image
//                                     src={image}
//                                     alt={title}
//                                     fill
//                                     quality={100}
//                                     className="object-cover"
//                                 />
//                             </motion.div>
//
//                             {/* Enhanced gradient overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
//
//                             {/* Hover overlay */}
//                             <motion.div
//                                 className="absolute inset-0 bg-black/20"
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: isHovered ? 1 : 0 }}
//                                 transition={{ duration: 0.3 }}
//                             />
//
//                             {/* Top badges */}
//                             <div className="absolute top-4 left-4 flex space-x-2">
//                                 <div className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20">
//                                     <span className="font-sf-pro text-white text-xs uppercase tracking-wider">
//                                         {type}
//                                     </span>
//                                 </div>
//                                 {rating && (
//                                     <div className="px-3 py-1 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 flex items-center space-x-1">
//                                         <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//                                         <span className="font-sf-pro text-yellow-200 text-xs font-medium">
//                                             {rating}
//                                         </span>
//                                     </div>
//                                 )}
//                             </div>
//
//                             {/* Play button for media */}
//                             {rating && (
//                                 <motion.div
//                                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//                                     initial={{ opacity: 0, scale: 0.8 }}
//                                     animate={{
//                                         opacity: isHovered ? 1 : 0,
//                                         scale: isHovered ? 1 : 0.8
//                                     }}
//                                     transition={{ duration: 0.3 }}
//                                 >
//                                     <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
//                                         <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
//                                     </div>
//                                 </motion.div>
//                             )}
//                         </div>
//
//                         {/* Enhanced content */}
//                         <CardContent className="absolute bottom-0 left-0 right-0 p-10">
//                             <motion.div
//                                 animate={{ y: isHovered ? -5 : 0 }}
//                                 transition={{ duration: 0.3 }}
//                             >
//                                 <div className="flex items-center justify-between mb-4">
//                                     <h3
//                                         className="font-sf-pro text-white"
//                                         style={{
//                                             fontWeight: "300",
//                                             fontSize: "48px",
//                                             lineHeight: "96%",
//                                             letterSpacing: "0%",
//                                         }}
//                                     >
//                                         {title}
//                                     </h3>
//                                     {year && (
//                                         <span className="font-sf-pro text-white/60 text-lg">
//                                             {year}
//                                         </span>
//                                     )}
//                                 </div>
//
//                                 <p
//                                     className="font-sf-pro mb-4"
//                                     style={{
//                                         fontWeight: "300",
//                                         fontSize: "24px",
//                                         lineHeight: "130%",
//                                         letterSpacing: "-1%",
//                                         color: "#FFFFFFCC"
//                                     }}
//                                 >
//                                     {description}
//                                 </p>
//
//                                 {hasLink && (
//                                     <motion.a
//                                         href="#"
//                                         className="font-sf-pro underline inline-flex items-center group/link"
//                                         style={{
//                                             fontWeight: "300",
//                                             fontSize: "24px",
//                                             lineHeight: "130%",
//                                             letterSpacing: "-1%",
//                                             color: "#FFFFFFCC"
//                                         }}
//                                         whileHover={{ x: 5 }}
//                                         transition={{ duration: 0.2 }}
//                                     >
//                                         More about his works
//                                         <ExternalLink className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
//                                     </motion.a>
//                                 )}
//                             </motion.div>
//                         </CardContent>
//
//                         {/* Shine effect */}
//                         <motion.div
//                             className="absolute inset-0 pointer-events-none"
//                             style={{
//                                 background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
//                                 transform: 'translateX(-100%)',
//                             }}
//                             animate={{
//                                 transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
//                             }}
//                             transition={{ duration: 0.6, ease: "easeInOut" }}
//                         />
//                     </div>
//                 </Card>
//             </motion.div>
//         </motion.div>
//     );
// }

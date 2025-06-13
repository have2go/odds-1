// 'use client';
//
// import { motion } from 'framer-motion';
// import { Button } from "../ui/button";
// import { Rocket, ArrowRight, Shield, Globe, Clock, Users } from "lucide-react";
// import { useState } from 'react';
//
// export default function CallToActionPremium() {
//     const [hoveredButton, setHoveredButton] = useState(null);
//
//     return (
//         <section className="relative overflow-hidden py-[120px]" style={{ background: '#FFFFFF0A' }}>
//             {/* Animated background elements */}
//             <div className="absolute inset-0 overflow-hidden">
//                 {/* Floating orbs */}
//                 {[...Array(5)].map((_, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute w-32 h-32 rounded-full"
//                         style={{
//                             background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
//                             top: `${Math.random() * 100}%`,
//                             left: `${Math.random() * 100}%`,
//                         }}
//                         animate={{
//                             y: [-20, 20, -20],
//                             x: [-10, 10, -10],
//                         }}
//                         transition={{
//                             duration: 8 + Math.random() * 4,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                             delay: Math.random() * 5,
//                         }}
//                     />
//                 ))}
//             </div>
//
//             {/* Контент */}
//             <div className="relative z-10 w-full max-w-[1680px] mx-auto">
//                 {/* Enhanced заголовок */}
//                 <motion.div
//                     className="mb-16"
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                         duration: 1.2,
//                         ease: [0.22, 1, 0.36, 1]
//                     }}
//                 >
//                     {/* Urgency indicator */}
//                     <div className="flex items-center justify-center mb-8">
//                         <div className="flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20">
//                             <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse" />
//                             <span className="font-sf-pro text-red-300 text-sm uppercase tracking-wider">
//                                 Urgent Action Required
//                             </span>
//                         </div>
//                     </div>
//
//                     <h2
//                         className="font-sf-pro gradient-text text-center"
//                         style={{
//                             fontWeight: "300",
//                             fontSize: "clamp(40px, 6vw, 80px)",
//                             lineHeight: "96%",
//                             letterSpacing: "0%",
//                         }}
//                     >
//                         The space debris crisis is escalating, but together we can solve it.
//                         <br />
//                         <span className="text-white/70">We need innovators, partners, and visionaries to join our mission</span>
//                     </h2>
//                 </motion.div>
//
//                 {/* Enhanced layout */}
//                 <div className="grid lg:grid-cols-2 gap-16 items-center">
//                     {/* Left side - Stats and description */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{
//                             duration: 1.2,
//                             delay: 0.3,
//                             ease: [0.22, 1, 0.36, 1]
//                         }}
//                     >
//                         {/* Critical stats */}
//                         <div className="grid grid-cols-2 gap-6 mb-8">
//                             {[
//                                 { icon: Globe, value: "34,000+", label: "Tracked Objects", color: "text-blue-400" },
//                                 { icon: Shield, value: "130M+", label: "Small Fragments", color: "text-red-400" },
//                             ].map((stat, i) => (
//                                 <motion.div
//                                     key={stat.label}
//                                     className="text-center p-6 bg-white/5 border border-white/10"
//                                     initial={{ opacity: 0, scale: 0.9 }}
//                                     whileInView={{ opacity: 1, scale: 1 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
//                                     whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.2)" }}
//                                 >
//                                     <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
//                                     <div className="font-sf-pro text-2xl font-light gradient-text mb-1">
//                                         {stat.value}
//                                     </div>
//                                     <div className="font-sf-pro text-white/60 text-sm uppercase tracking-wider">
//                                         {stat.label}
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//
//                         <p
//                             className="font-sf-pro text-gray-300 mb-8"
//                             style={{
//                                 fontWeight: "300",
//                                 fontSize: "clamp(16px, 1.5vw, 20px)",
//                                 lineHeight: "140%",
//                                 letterSpacing: "0%",
//                             }}
//                         >
//                             Without coordinated efforts to prevent new debris creation and remove existing objects,
//                             we risk losing access to critical orbits, catastrophically impacting modern civilization.
//                         </p>
//
//                         {/* Mission urgency indicators */}
//                         <div className="space-y-4">
//                             {[
//                                 { icon: Clock, text: "Every day 1,500+ new objects enter orbit" },
//                                 { icon: Users, text: "Global cooperation needed immediately" },
//                             ].map((item, i) => (
//                                 <motion.div
//                                     key={i}
//                                     className="flex items-center space-x-3"
//                                     initial={{ opacity: 0, x: -20 }}
//                                     whileInView={{ opacity: 1, x: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
//                                 >
//                                     <item.icon className="w-5 h-5 text-white/60" />
//                                     <span className="font-sf-pro text-white/80 text-sm">
//                                         {item.text}
//                                     </span>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>
//
//                     {/* Right side - Enhanced CTA buttons */}
//                     <motion.div
//                         className="space-y-6"
//                         initial={{ opacity: 0, x: 50 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         viewport={{ once: true }}
//                         transition={{
//                             duration: 1.2,
//                             delay: 0.6,
//                             ease: [0.22, 1, 0.36, 1]
//                         }}
//                     >
//                         {/* Primary CTA */}
//                         <motion.div
//                             onHoverStart={() => setHoveredButton('primary')}
//                             onHoverEnd={() => setHoveredButton(null)}
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                         >
//                             <Button
//                                 variant="gradient"
//                                 size="xl"
//                                 className="w-full font-sf-pro relative overflow-hidden group"
//                                 style={{
//                                     fontWeight: "500",
//                                     fontSize: "clamp(16px, 1.2vw, 20px)",
//                                     lineHeight: "120%",
//                                     letterSpacing: "0%",
//                                     padding: "20px 40px",
//                                 }}
//                             >
//                                 <motion.div
//                                     className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
//                                     initial={{ x: '-100%' }}
//                                     animate={{ x: hoveredButton === 'primary' ? '100%' : '-100%' }}
//                                     transition={{ duration: 0.6 }}
//                                 />
//                                 <div className="relative flex items-center justify-center">
//                                     <Rocket className="mr-3 h-5 w-5" />
//                                     JOIN THE MISSION
//                                     <motion.div
//                                         animate={{ x: hoveredButton === 'primary' ? 5 : 0 }}
//                                         transition={{ duration: 0.2 }}
//                                     >
//                                         <ArrowRight className="ml-3 h-5 w-5" />
//                                     </motion.div>
//                                 </div>
//                             </Button>
//                         </motion.div>
//
//                         {/* Secondary CTA */}
//                         <motion.div
//                             onHoverStart={() => setHoveredButton('secondary')}
//                             onHoverEnd={() => setHoveredButton(null)}
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                         >
//                             <Button
//                                 variant="outline"
//                                 size="xl"
//                                 className="w-full font-sf-pro border-white/30 text-white hover:bg-white/10 relative overflow-hidden group"
//                                 style={{
//                                     fontWeight: "400",
//                                     fontSize: "clamp(16px, 1.2vw, 20px)",
//                                     lineHeight: "120%",
//                                     letterSpacing: "0%",
//                                     padding: "20px 40px",
//                                 }}
//                             >
//                                 <motion.div
//                                     className="absolute inset-0 bg-white/5"
//                                     initial={{ scale: 0 }}
//                                     animate={{ scale: hoveredButton === 'secondary' ? 1 : 0 }}
//                                     transition={{ duration: 0.3 }}
//                                 />
//                                 <div className="relative flex items-center justify-center">
//                                     LEARN MORE ABOUT ODDS
//                                     <motion.div
//                                         animate={{ x: hoveredButton === 'secondary' ? 5 : 0 }}
//                                         transition={{ duration: 0.2 }}
//                                     >
//                                         <ArrowRight className="ml-3 h-5 w-5" />
//                                     </motion.div>
//                                 </div>
//                             </Button>
//                         </motion.div>
//
//                         {/* Support text */}
//                         <motion.p
//                             className="text-center text-white/60 text-sm font-sf-pro"
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: 1.2, duration: 0.6 }}
//                         >
//                             Join <span className="text-white font-medium">50,000+</span> space professionals
//                             committed to orbital sustainability
//                         </motion.p>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// }

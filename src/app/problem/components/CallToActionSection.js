// 'use client';
//
// import { motion } from 'framer-motion';
// import { Button } from "../ui/button";
// import { Rocket, ArrowRight } from "lucide-react";
//
// export default function CallToActionSection() {
//     return (
//         <section className="relative overflow-hidden py-[120px]" style={{ background: '#FFFFFF0A' }}>
//             {/* Контент */}
//             <div className="relative z-10 w-full max-w-[1680px] mx-auto">
//                 {/* Заголовок */}
//                 <motion.h2
//                     className="font-sf-pro gradient-text mb-16"
//                     style={{
//                         fontWeight: "300",
//                         fontSize: "clamp(40px, 6vw, 80px)",
//                         lineHeight: "96%",
//                         letterSpacing: "0%",
//                     }}
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                         duration: 1.2,
//                         ease: [0.22, 1, 0.36, 1]
//                     }}
//                 >
//                     The space debris crisis is escalating, but together we can solve it. We need innovators, partners, and visionaries to join our mission
//                 </motion.h2>
//
//                 {/* Абзац и кнопки прибиты к правому краю */}
//                 <div className="flex justify-end">
//                     <div className="max-w-[405px]">
//                         <motion.p
//                             className="font-sf-pro text-gray-300 text-left mb-8"
//                             style={{
//                                 fontWeight: "300",
//                                 fontSize: "clamp(16px, 1.5vw, 20px)",
//                                 lineHeight: "140%",
//                                 letterSpacing: "0%",
//                             }}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{
//                                 duration: 1.2,
//                                 delay: 0.3,
//                                 ease: [0.22, 1, 0.36, 1]
//                             }}
//                         >
//                             Without coordinated efforts to prevent new debris creation and remove existing objects, we risk losing access to critical orbits, catastrophically impacting modern civilization.
//                         </motion.p>
//
//                         {/* Кнопки shadcn/ui */}
//                         <motion.div
//                             className="space-y-4"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{
//                                 duration: 1,
//                                 delay: 0.6,
//                                 ease: [0.22, 1, 0.36, 1]
//                             }}
//                         >
//                             {/* Основная кнопка */}
//                             <Button
//                                 variant="gradient"
//                                 size="xl"
//                                 className="w-full font-sf-pro"
//                                 style={{
//                                     fontWeight: "400",
//                                     fontSize: "clamp(14px, 1.2vw, 18px)",
//                                     lineHeight: "120%",
//                                     letterSpacing: "0%",
//                                 }}
//                             >
//                                 <Rocket className="mr-2 h-5 w-5" />
//                                 JOIN THE MISSION
//                             </Button>
//
//                             {/* Вторичная кнопка */}
//                             <Button
//                                 variant="outline"
//                                 size="xl"
//                                 className="w-full font-sf-pro border-white/30 text-white hover:bg-white/10"
//                                 style={{
//                                     fontWeight: "400",
//                                     fontSize: "clamp(14px, 1.2vw, 18px)",
//                                     lineHeight: "120%",
//                                     letterSpacing: "0%",
//                                 }}
//                             >
//                                 LEARN MORE
//                                 <ArrowRight className="ml-2 h-5 w-5" />
//                             </Button>
//                         </motion.div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

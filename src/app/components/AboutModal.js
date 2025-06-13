// 'use client';
//
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "./ui/dialog"
// import { Button } from "./ui/button"
// import { Info, Rocket, Users, Target } from "lucide-react"
// import { motion } from "framer-motion"
//
// export default function AboutModal() {
//     return (
//         <Dialog>
//             <DialogTrigger asChild>
//                 <Button
//                     variant="ghost"
//                     size="lg"
//                     className="fixed top-8 right-8 z-50 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-sf-pro"
//                 >
//                     <Info className="mr-2 h-4 w-4" />
//                     About ODDS
//                 </Button>
//             </DialogTrigger>
//             <DialogContent className="bg-black/95 backdrop-blur-lg border-white/20 text-white max-w-2xl">
//                 <DialogHeader className="space-y-6">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <DialogTitle
//                             className="font-sf-pro gradient-text text-left"
//                             style={{
//                                 fontWeight: "300",
//                                 fontSize: "48px",
//                                 lineHeight: "96%",
//                                 letterSpacing: "0%",
//                             }}
//                         >
//                             ODDS
//                         </DialogTitle>
//                         <DialogDescription
//                             className="font-sf-pro text-white/80 text-left mt-2"
//                             style={{
//                                 fontWeight: "300",
//                                 fontSize: "24px",
//                                 lineHeight: "130%",
//                                 letterSpacing: "-1%",
//                             }}
//                         >
//                             Orbital Debris Deorbiting Station
//                         </DialogDescription>
//                     </motion.div>
//                 </DialogHeader>
//
//                 <motion.div
//                     className="space-y-6"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                     {/* Миссия */}
//                     <div className="flex items-start space-x-4">
//                         <div className="bg-white/10 p-3">
//                             <Target className="h-6 w-6 text-white" />
//                         </div>
//                         <div>
//                             <h3
//                                 className="font-sf-pro text-white mb-2"
//                                 style={{
//                                     fontWeight: "400",
//                                     fontSize: "20px",
//                                     lineHeight: "120%",
//                                 }}
//                             >
//                                 Our Mission
//                             </h3>
//                             <p
//                                 className="font-sf-pro text-white/80"
//                                 style={{
//                                     fontWeight: "300",
//                                     fontSize: "16px",
//                                     lineHeight: "140%",
//                                 }}
//                             >
//                                 To develop an innovative orbital station capable of actively removing space debris, ensuring the long-term sustainability of space activities for future generations.
//                             </p>
//                         </div>
//                     </div>
//
//                     {/* Технология */}
//                     <div className="flex items-start space-x-4">
//                         <div className="bg-white/10 p-3">
//                             <Rocket className="h-6 w-6 text-white" />
//                         </div>
//                         <div>
//                             <h3
//                                 className="font-sf-pro text-white mb-2"
//                                 style={{
//                                     fontWeight: "400",
//                                     fontSize: "20px",
//                                     lineHeight: "120%",
//                                 }}
//                             >
//                                 Technology
//                             </h3>
//                             <p
//                                 className="font-sf-pro text-white/80"
//                                 style={{
//                                     fontWeight: "300",
//                                     fontSize: "16px",
//                                     lineHeight: "140%",
//                                 }}
//                             >
//                                 Advanced robotic systems, AI-powered tracking, and innovative capture mechanisms designed to safely deorbit dangerous space debris without creating additional fragments.
//                             </p>
//                         </div>
//                     </div>
//
//                     {/* Команда */}
//                     <div className="flex items-start space-x-4">
//                         <div className="bg-white/10 p-3">
//                             <Users className="h-6 w-6 text-white" />
//                         </div>
//                         <div>
//                             <h3
//                                 className="font-sf-pro text-white mb-2"
//                                 style={{
//                                     fontWeight: "400",
//                                     fontSize: "20px",
//                                     lineHeight: "120%",
//                                 }}
//                             >
//                                 International Collaboration
//                             </h3>
//                             <p
//                                 className="font-sf-pro text-white/80"
//                                 style={{
//                                     fontWeight: "300",
//                                     fontSize: "16px",
//                                     lineHeight: "140%",
//                                 }}
//                             >
//                                 A global initiative bringing together space agencies, private companies, and research institutions to address the critical challenge of space debris.
//                             </p>
//                         </div>
//                     </div>
//
//                     {/* CTA кнопки */}
//                     <div className="flex space-x-4 pt-4">
//                         <Button
//                             variant="gradient"
//                             className="flex-1 font-sf-pro"
//                             style={{
//                                 fontWeight: "400",
//                                 fontSize: "16px",
//                             }}
//                         >
//                             <Rocket className="mr-2 h-4 w-4" />
//                             Join Mission
//                         </Button>
//                         <Button
//                             variant="outline"
//                             className="flex-1 font-sf-pro border-white/30 text-white hover:bg-white/10"
//                             style={{
//                                 fontWeight: "400",
//                                 fontSize: "16px",
//                             }}
//                         >
//                             Learn More
//                         </Button>
//                     </div>
//                 </motion.div>
//             </DialogContent>
//         </Dialog>
//     )
// }

// 'use client';
//
// import { motion, AnimatePresence } from 'framer-motion';
// import { usePathname } from 'next/navigation';
//
// export default function PageTransition({ children }) {
//     const pathname = usePathname();
//
//     return (
//         <AnimatePresence mode="popLayout">
//             <motion.div
//                 key={pathname}
//                 initial={{
//                     y: '100%'
//                 }}
//                 animate={{
//                     y: 0
//                 }}
//                 exit={{
//                     y: 0 // Старая страница остается на месте
//                 }}
//                 transition={{
//                     duration: 0.7,
//                     ease: [0.22, 1, 0.36, 1]
//                 }}
//                 className="fixed inset-0 z-40 bg-black"
//                 style={{
//                     willChange: 'transform'
//                 }}
//             >
//                 <div className="relative z-10 min-h-screen">
//                     {children}
//                 </div>
//             </motion.div>
//         </AnimatePresence>
//     );
// }

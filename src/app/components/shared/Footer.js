'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <div style={{ background: '#FFFFFF0A' }}>
            {/* Разделительная линия */}
            <div className="w-full">
                <motion.div 
                    className="w-full h-[1px] bg-gray-800"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1] 
                    }}
                    style={{ transformOrigin: 'left' }}
                />
            </div>
            
            {/* Футер */}
            <motion.footer 
                className="w-full max-w-[1680px] mx-auto py-5 lg:py-8 universal-section-padding"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                    duration: 1,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1] 
                }}
            >
                <span
                    className="font-sf-pro text-gray-500"
                    style={{
                        fontWeight: "300",
                        fontSize: "clamp(12px, 1vw, 16px)",
                        lineHeight: "120%",
                        letterSpacing: "0%",
                    }}
                >
                    ODDS © 2025
                </span>
            </motion.footer>
        </div>
    );
}

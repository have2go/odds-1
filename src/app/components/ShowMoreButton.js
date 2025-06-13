'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ShowMoreButton = ({ onClick }) => {
  return (
    <motion.button 
      onClick={onClick}
      className="px-8 py-4 bg-[#1D1D1D] text-white font-sf-pro border border-white/10"
      style={{
        fontFamily: 'SF Pro Display',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '100%',
        letterSpacing: '0%',
        textTransform: 'uppercase',
        padding: '16px 32px', // Vertical 16px, Horizontal 32px
        cursor: 'pointer', // Добавляем курсор pointer
      }}
      whileHover={{ 
        backgroundColor: '#2A2A2A', 
        borderColor: 'rgba(255, 255, 255, 0.2)',
        scale: 1.02 
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      SHOW MORE
    </motion.button>
  );
};

export default ShowMoreButton;

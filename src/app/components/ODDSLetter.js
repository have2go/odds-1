'use client';

import React from 'react';

const ODDSLetter = ({ letter }) => {
  const bgColor = "rgba(255, 255, 255, 0.05)"; // #FFFFFF0D
  
  return (
    <div 
      style={{ backgroundColor: bgColor }} 
      className="w-full h-full flex items-center justify-center overflow-hidden"
    >
      {/* Буква со светлым градиентом */}
      <span 
        className="font-sf-pro text-white text-[clamp(80px,15vw,200px)]"
        style={{
          fontWeight: 300,
          background: 'linear-gradient(177.58deg, #FFFFFF 11.87%, rgba(255, 255, 255, 0.2) 104.49%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {letter}
      </span>
    </div>
  );
};

export default ODDSLetter;

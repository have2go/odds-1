'use client';

import { useEffect } from 'react';

const ImagePreloader = ({ images, delay = 1000 }) => {
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    // Запускаем предзагрузку с задержкой после загрузки основного контента
    const timer = setTimeout(preloadImages, delay);

    return () => clearTimeout(timer);
  }, [images, delay]);

  return null; // Этот компонент не рендерит ничего видимого
};

export default ImagePreloader;

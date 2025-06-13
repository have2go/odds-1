/** @type {import('next').NextConfig} */
const nextConfig = {
    // Оптимизация для продакшена
    reactStrictMode: true,
    swcMinify: true,
    
    // Оптимизация изображений
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 31536000, // 1 год
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    
    // Сжатие
    compress: true,
    
    // Оптимизация бандла
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['lucide-react', '@react-three/drei'],
    },
    
    // Заголовки для кеширования
    async headers() {
        return [
            {
                source: '/images/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/videos/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/fonts/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
    
    // Webpack оптимизации
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            // Оптимизация для клиентского бандла
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                    three: {
                        test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
                        name: 'three',
                        chunks: 'all',
                    },
                },
            };
        }
        return config;
    },
};

export default nextConfig;

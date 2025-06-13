import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
    
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 31536000,
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    
    experimental: {
        optimizeCss: true,
        optimizePackageImports: [
            'lucide-react',
            '@react-three/drei',
            'framer-motion'
        ],
    },
    
    webpack: (config, { dev, isServer }) => {
        if (!dev) {
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                        priority: 10,
                    },
                    three: {
                        test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
                        name: 'three',
                        chunks: 'all',
                        priority: 20,
                    },
                },
            };
        }
        return config;
    },
};

export default withBundleAnalyzer(nextConfig);

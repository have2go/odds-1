const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Начинаю оптимизацию проекта ODDS...\n');

// 1. Удаляем неиспользуемые файлы и папки
async function cleanupUnusedFiles() {
    console.log('🧹 Удаляю неиспользуемые файлы...');
    
    const filesToDelete = [
        '.DS_Store',
        'public/.DS_Store',
        'public/images/.DS_Store',
        'public/videos/.DS_Store',
        'public/fonts/.DS_Store',
        'public/fonts/font/.DS_Store',
        '_unused_files',
        'CLEANUP_SUMMARY.md',
        'LAYOUT_UPDATE_REPORT.md',
        'FINAL_LAYOUT_FIXES_REPORT.md'
    ];
    
    for (const filePath of filesToDelete) {
        try {
            const fullPath = path.join(process.cwd(), filePath);
            const stat = await fs.stat(fullPath);
            
            if (stat.isDirectory()) {
                await fs.rm(fullPath, { recursive: true, force: true });
                console.log(`   ✅ Удалена папка: ${filePath}`);
            } else {
                await fs.unlink(fullPath);
                console.log(`   ✅ Удален файл: ${filePath}`);
            }
        } catch (error) {
            console.log(`   ⚠️  Не удалось удалить: ${filePath} (возможно, уже удален)`);
        }
    }
}

// 2. Анализируем использование изображений
async function analyzeImageUsage() {
    console.log('\n📸 Анализирую использование изображений...');
    
    const imagesDir = path.join(process.cwd(), 'public/images');
    const images = await fs.readdir(imagesDir, { withFileTypes: true });
    const imageFiles = images
        .filter(item => item.isFile() && /\.(jpg|jpeg|png|svg|webp)$/i.test(item.name))
        .map(item => item.name);
    
    const usedImages = new Set();
    const srcDir = path.join(process.cwd(), 'src');
    
    // Рекурсивно ищем все JS файлы
    async function findJSFiles(dir) {
        const files = [];
        const items = await fs.readdir(dir, { withFileTypes: true });
        
        for (const item of items) {
            const fullPath = path.join(dir, item.name);
            if (item.isDirectory()) {
                files.push(...await findJSFiles(fullPath));
            } else if (item.name.endsWith('.js')) {
                files.push(fullPath);
            }
        }
        return files;
    }
    
    const jsFiles = await findJSFiles(srcDir);
    
    // Ищем использования изображений в коде
    for (const jsFile of jsFiles) {
        const content = await fs.readFile(jsFile, 'utf-8');
        
        for (const imageName of imageFiles) {
            if (content.includes(imageName)) {
                usedImages.add(imageName);
            }
        }
    }
    
    const unusedImages = imageFiles.filter(img => !usedImages.has(img));
    
    console.log(`   📊 Всего изображений: ${imageFiles.length}`);
    console.log(`   ✅ Используемых: ${usedImages.size}`);
    console.log(`   ❌ Неиспользуемых: ${unusedImages.length}`);
    
    if (unusedImages.length > 0) {
        console.log('   🗑️  Неиспользуемые изображения:');
        for (const img of unusedImages) {
            console.log(`      - ${img}`);
            // Удаляем неиспользуемые изображения
            try {
                await fs.unlink(path.join(imagesDir, img));
                console.log(`      ✅ Удалено: ${img}`);
            } catch (error) {
                console.log(`      ❌ Ошибка удаления: ${img}`);
            }
        }
    }
    
    return { total: imageFiles.length, used: usedImages.size, removed: unusedImages.length };
}

// 3. Оптимизируем изображения
async function optimizeImages() {
    console.log('\n🖼️  Оптимизирую изображения...');
    
    try {
        // Проверяем наличие sharp
        execSync('npm list sharp', { stdio: 'ignore' });
        
        const imagesDir = path.join(process.cwd(), 'public/images');
        const images = await fs.readdir(imagesDir, { withFileTypes: true });
        const imageFiles = images
            .filter(item => item.isFile() && /\.(jpg|jpeg|png)$/i.test(item.name))
            .map(item => item.name);
        
        console.log(`   📷 Оптимизирую ${imageFiles.length} изображений...`);
        
        const sharp = require('sharp');
        let optimizedCount = 0;
        let totalSavings = 0;
        
        for (const imageName of imageFiles) {
            const imagePath = path.join(imagesDir, imageName);
            const tempPath = path.join(imagesDir, `temp_${imageName}`);
            
            try {
                const originalStat = await fs.stat(imagePath);
                const originalSize = originalStat.size;
                
                // Оптимизируем изображение
                if (imageName.toLowerCase().endsWith('.png')) {
                    await sharp(imagePath)
                        .png({ quality: 85, compressionLevel: 8 })
                        .toFile(tempPath);
                } else {
                    await sharp(imagePath)
                        .jpeg({ quality: 85, progressive: true })
                        .toFile(tempPath);
                }
                
                const optimizedStat = await fs.stat(tempPath);
                const optimizedSize = optimizedStat.size;
                
                // Заменяем оригинал только если размер уменьшился
                if (optimizedSize < originalSize) {
                    await fs.unlink(imagePath);
                    await fs.rename(tempPath, imagePath);
                    
                    const savings = originalSize - optimizedSize;
                    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);
                    
                    console.log(`      ✅ ${imageName}: ${(originalSize/1024).toFixed(1)}KB → ${(optimizedSize/1024).toFixed(1)}KB (-${savingsPercent}%)`);
                    
                    optimizedCount++;
                    totalSavings += savings;
                } else {
                    // Удаляем временный файл если оптимизация не дала результата
                    await fs.unlink(tempPath);
                    console.log(`      ⚠️  ${imageName}: оптимизация не улучшила размер`);
                }
            } catch (error) {
                console.log(`      ❌ Ошибка оптимизации ${imageName}: ${error.message}`);
                try {
                    await fs.unlink(tempPath);
                } catch {}
            }
        }
        
        console.log(`   📊 Оптимизировано ${optimizedCount} изображений`);
        console.log(`   💾 Общая экономия: ${(totalSavings/1024).toFixed(1)}KB`);
        
        return { optimized: optimizedCount, savings: totalSavings };
    } catch (error) {
        console.log('   ⚠️  Sharp не установлен, пропускаю оптимизацию изображений');
        console.log('   💡 Установите sharp для оптимизации: npm install sharp');
        return { optimized: 0, savings: 0 };
    }
}

// 4. Анализируем зависимости
async function analyzeDependencies() {
    console.log('\n📦 Анализирую зависимости...');
    
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
    
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    const totalDeps = Object.keys(dependencies).length;
    
    console.log(`   📊 Всего зависимостей: ${totalDeps}`);
    
    // Основные зависимости проекта
    const coreDependencies = [
        'next', 'react', 'react-dom',
        'tailwindcss', 'framer-motion',
        '@react-three/fiber', '@react-three/drei', 'three',
        'react-type-animation', 'lucide-react'
    ];
    
    const installedCore = coreDependencies.filter(dep => dependencies[dep]);
    console.log(`   ✅ Основные зависимости (${installedCore.length}): ${installedCore.join(', ')}`);
    
    return { total: totalDeps, core: installedCore.length };
}

// 5. Настройка Next.js для продакшена
async function optimizeNextConfig() {
    console.log('\n⚙️  Оптимизирую конфигурацию Next.js...');
    
    const nextConfigPath = path.join(process.cwd(), 'next.config.mjs');
    
    const optimizedConfig = `/** @type {import('next').NextConfig} */
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
                        test: /[\\\\/]node_modules[\\\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                    three: {
                        test: /[\\\\/]node_modules[\\\\/](three|@react-three)[\\\\/]/,
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
`;
    
    await fs.writeFile(nextConfigPath, optimizedConfig);
    console.log('   ✅ Конфигурация Next.js обновлена');
}

// 6. Создаем .env.production
async function createProductionEnv() {
    console.log('\n🌍 Создаю файл окружения для продакшена...');
    
    const envContent = `# Production environment variables
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# Performance optimizations
NEXT_PRIVATE_STANDALONE=true
`;
    
    await fs.writeFile('.env.production', envContent);
    console.log('   ✅ Файл .env.production создан');
}

// 7. Обновляем package.json скрипты
async function updatePackageScripts() {
    console.log('\n📜 Обновляю скрипты в package.json...');
    
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf-8'));
    
    packageJson.scripts = {
        ...packageJson.scripts,
        "build:production": "cross-env NODE_ENV=production next build",
        "start:production": "cross-env NODE_ENV=production next start",
        "analyze": "cross-env ANALYZE=true next build",
        "optimize": "node scripts/optimize.js"
    };
    
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('   ✅ Скрипты package.json обновлены');
}

// Главная функция
async function main() {
    try {
        const startTime = Date.now();
        
        await cleanupUnusedFiles();
        const imageStats = await analyzeImageUsage();
        const optimizationStats = await optimizeImages();
        const depStats = await analyzeDependencies();
        await optimizeNextConfig();
        await createProductionEnv();
        await updatePackageScripts();
        
        const endTime = Date.now();
        const duration = ((endTime - startTime) / 1000).toFixed(2);
        
        console.log('\n✨ Оптимизация завершена!');
        console.log('\n📊 Сводка:');
        console.log(`   ⏱️  Время выполнения: ${duration}s`);
        console.log(`   🖼️  Удалено неиспользуемых изображений: ${imageStats.removed}`);
        console.log(`   📸 Оптимизировано изображений: ${optimizationStats.optimized}`);
        console.log(`   💾 Экономия места: ${(optimizationStats.savings/1024).toFixed(1)}KB`);
        console.log(`   📦 Всего зависимостей: ${depStats.total}`);
        
        console.log('\n🚀 Готово к деплою!');
        console.log('\n📋 Следующие шаги:');
        console.log('   1. npm run build:production');
        console.log('   2. Деплой на хостинг (Vercel, Netlify, etc.)');
        console.log('   3. Проверить производительность с помощью npm run analyze');
        
    } catch (error) {
        console.error('\n❌ Ошибка оптимизации:', error);
        process.exit(1);
    }
}

main();

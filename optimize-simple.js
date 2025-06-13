const fs = require('fs');
const path = require('path');

console.log('🚀 Оптимизация проекта ODDS...\n');

// Удаляем неиспользуемые файлы
function deleteFileOrDir(filepath) {
    try {
        if (fs.existsSync(filepath)) {
            const stat = fs.statSync(filepath);
            if (stat.isDirectory()) {
                fs.rmSync(filepath, { recursive: true, force: true });
                console.log(`✅ Удалена папка: ${filepath}`);
            } else {
                fs.unlinkSync(filepath);
                console.log(`✅ Удален файл: ${filepath}`);
            }
            return true;
        }
    } catch (error) {
        console.log(`⚠️  Не удалось удалить: ${filepath}`);
        return false;
    }
    return false;
}

// 1. Удаляем системные файлы
console.log('🧹 Удаляю системные файлы...');
const systemFiles = [
    '.DS_Store',
    'public/.DS_Store', 
    'public/images/.DS_Store',
    'public/videos/.DS_Store',
    'public/fonts/.DS_Store',
    'public/fonts/font/.DS_Store'
];

systemFiles.forEach(deleteFileOrDir);

// 2. Удаляем неиспользуемые папки
console.log('\n🗂️  Удаляю неиспользуемые папки...');
const unusedDirs = [
    '_unused_files',
];

unusedDirs.forEach(deleteFileOrDir);

// 3. Удаляем файлы документации
console.log('\n📄 Удаляю временные файлы документации...');
const docFiles = [
    'CLEANUP_SUMMARY.md',
    'LAYOUT_UPDATE_REPORT.md', 
    'FINAL_LAYOUT_FIXES_REPORT.md'
];

docFiles.forEach(deleteFileOrDir);

// 4. Анализируем использование изображений
console.log('\n📸 Анализирую использование изображений...');

const usedImages = new Set([
    // Изображения из articlesData.js
    'remove-debris-cover.jpeg',
    'remove-debris-dialog.jpeg',
    'laserboom.jpg',
    'astroscale-cover.jpg',
    'astroscale-dialog.png',
    'clearspace.jpg',
    
    // Фоновые изображения
    'bg-main.png',
    'bg-main-dark.png',
    'bg-problem.png',
    'bg-gravity.jpg',
    'bg-gorkaviy.jpg',
    
    // Станции и модели
    'station.png',
    'station-clean.png',
    'station-frontal.png',
    'station-frontal-2.png',
    
    // Проблемы и ошибки
    'failure-1.png',
    'failure-2.png', 
    'failure-3.png',
    'failure-4.png',
    'kessler-syndrome.jpg',
    'shadow.png',
    'shadow-problem.png',
    
    // Лягушка (логотип/маскот)
    'frog.png',
    'frog-compact.png'
]);

const imagesDir = 'public/images';
if (fs.existsSync(imagesDir)) {
    const allImages = fs.readdirSync(imagesDir).filter(file => 
        /\.(jpg|jpeg|png|svg|webp)$/i.test(file)
    );
    
    const unusedImages = allImages.filter(img => !usedImages.has(img));
    
    console.log(`   📊 Всего изображений: ${allImages.length}`);
    console.log(`   ✅ Используемых: ${usedImages.size}`);
    console.log(`   ❌ Неиспользуемых: ${unusedImages.length}`);
    
    if (unusedImages.length > 0) {
        console.log('   🗑️  Удаляю неиспользуемые изображения:');
        unusedImages.forEach(img => {
            const imgPath = path.join(imagesDir, img);
            if (deleteFileOrDir(imgPath)) {
                console.log(`      - ${img}`);
            }
        });
    }
}

// 5. Проверяем видео
console.log('\n🎬 Проверяю видео файлы...');
const videosDir = 'public/videos';
if (fs.existsSync(videosDir)) {
    const videos = fs.readdirSync(videosDir).filter(file => 
        /\.(mp4|webm|mov)$/i.test(file)
    );
    console.log(`   📹 Найдено видео файлов: ${videos.length}`);
    videos.forEach(video => console.log(`      - ${video}`));
}

// 6. Проверяем модели
console.log('\n🎯 Проверяю 3D модели...');
const modelsDir = 'public/models';
if (fs.existsSync(modelsDir)) {
    const models = fs.readdirSync(modelsDir);
    console.log(`   🔧 Найдено моделей: ${models.length}`);
    models.forEach(model => console.log(`      - ${model}`));
}

// 7. Анализируем шрифты
console.log('\n🔤 Анализирую шрифты...');
const fontsDir = 'public/fonts';
if (fs.existsSync(fontsDir)) {
    const sfProDir = path.join(fontsDir, 'San Francisco Pro Display');
    const magistralDir = path.join(fontsDir, 'font');
    
    if (fs.existsSync(sfProDir)) {
        const sfProFonts = fs.readdirSync(sfProDir).filter(f => f.endsWith('.otf'));
        console.log(`   📝 SF Pro шрифты: ${sfProFonts.length} файлов`);
    }
    
    if (fs.existsSync(magistralDir)) {
        const magistralFonts = fs.readdirSync(magistralDir).filter(f => 
            f.endsWith('.woff') || f.endsWith('.woff2') || f.endsWith('.ttf')
        );
        console.log(`   📝 Magistral шрифты: ${magistralFonts.length} файлов`);
        
        // Удаляем .eot файлы (устаревший формат)
        const eotFiles = fs.readdirSync(magistralDir).filter(f => f.endsWith('.eot'));
        console.log(`   🗑️  Удаляю устаревшие .eot файлы: ${eotFiles.length}`);
        eotFiles.forEach(eot => {
            deleteFileOrDir(path.join(magistralDir, eot));
        });
    }
}

// 8. Создаем файл манифеста используемых ассетов
console.log('\n📋 Создаю манифест ассетов...');
const manifest = {
    images: Array.from(usedImages),
    videos: ['bg-main.mp4', 'debris.mp4'],
    models: ['Timur FROG test.obj'],
    fonts: {
        'SF Pro Display': 'Основной шрифт UI',
        'Magistral': 'Дополнительный шрифт (если используется)'
    },
    generated: new Date().toISOString()
};

fs.writeFileSync('assets-manifest.json', JSON.stringify(manifest, null, 2));
console.log('   ✅ Манифест создан: assets-manifest.json');

// 9. Обновляем .gitignore
console.log('\n📝 Обновляю .gitignore...');
const gitignoreAdditions = `
# Optimization artifacts
*.webp.backup
*.jpg.backup
*.png.backup
/scripts/temp/
assets-manifest.json

# Bundle analyzer
.webpack-bundle-analyzer/
`;

if (fs.existsSync('.gitignore')) {
    const gitignore = fs.readFileSync('.gitignore', 'utf8');
    if (!gitignore.includes('assets-manifest.json')) {
        fs.appendFileSync('.gitignore', gitignoreAdditions);
        console.log('   ✅ .gitignore обновлен');
    } else {
        console.log('   ✅ .gitignore уже актуален');
    }
}

console.log('\n✨ Оптимизация завершена!');
console.log('\n📊 Результат:');
console.log(`   🖼️  Используемых изображений: ${usedImages.size}`);
console.log(`   🎬 Видео файлов: 2`);
console.log(`   🎯 3D моделей: 1`);
console.log(`   🔤 Семейств шрифтов: 2`);

console.log('\n🚀 Следующие шаги:');
console.log('   1. npm run build:production');
console.log('   2. Проверить размер: npm run analyze-bundle');
console.log('   3. Деплой на выбранную платформу');

console.log('\n💡 Для дополнительной оптимизации:');
console.log('   - Установите sharp: npm install sharp');
console.log('   - Конвертируйте изображения в WebP/AVIF');
console.log('   - Используйте CDN для статических ассетов');

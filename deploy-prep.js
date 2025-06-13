#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Подготовка ODDS к деплою\n');

let changes = 0;

// Функция удаления файла/папки
function removeItem(itemPath) {
    try {
        if (fs.existsSync(itemPath)) {
            const stat = fs.statSync(itemPath);
            if (stat.isDirectory()) {
                fs.rmSync(itemPath, { recursive: true, force: true });
                console.log(`✅ Удалена папка: ${itemPath}`);
            } else {
                fs.unlinkSync(itemPath);
                console.log(`✅ Удален файл: ${itemPath}`);
            }
            changes++;
            return true;
        }
    } catch (error) {
        console.log(`⚠️  Ошибка удаления: ${itemPath}`);
    }
    return false;
}

// 1. Удаляем системные файлы
console.log('1️⃣ Очистка системных файлов...');
const systemFiles = [
    '.DS_Store',
    'public/.DS_Store',
    'public/images/.DS_Store',
    'public/videos/.DS_Store',
    'public/fonts/.DS_Store',
    'public/fonts/font/.DS_Store'
];
systemFiles.forEach(removeItem);

// 2. Удаляем неиспользуемые папки
console.log('\n2️⃣ Удаление неиспользуемых папок...');
const unusedDirs = ['_unused_files'];
unusedDirs.forEach(removeItem);

// 3. Удаляем документацию разработки
console.log('\n3️⃣ Очистка документации разработки...');
const devDocs = [
    'CLEANUP_SUMMARY.md',
    'LAYOUT_UPDATE_REPORT.md',
    'FINAL_LAYOUT_FIXES_REPORT.md'
];
devDocs.forEach(removeItem);

// 4. Проверяем и создаем оптимизированные конфигурации
console.log('\n4️⃣ Проверка конфигураций...');

// Проверка Next.js конфига
if (fs.existsSync('next.config.mjs')) {
    const config = fs.readFileSync('next.config.mjs', 'utf8');
    if (config.includes('swcMinify: true')) {
        console.log('✅ Next.js конфиг оптимизирован');
    } else {
        console.log('⚠️  Next.js конфиг требует обновления');
    }
} else {
    console.log('❌ next.config.mjs не найден');
}

// Проверка .env.production
if (fs.existsSync('.env.production')) {
    console.log('✅ Production env настроен');
} else {
    console.log('⚠️  .env.production не найден');
}

// 5. Проверяем package.json скрипты
console.log('\n5️⃣ Проверка скриптов...');
if (fs.existsSync('package.json')) {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const hasOptimizedScripts = pkg.scripts && pkg.scripts['build:production'];
    if (hasOptimizedScripts) {
        console.log('✅ Скрипты оптимизированы');
    } else {
        console.log('⚠️  Скрипты требуют обновления');
    }
}

// 6. Анализ ассетов
console.log('\n6️⃣ Анализ ассетов...');

function getDirectorySize(dirPath) {
    let size = 0;
    try {
        const files = fs.readdirSync(dirPath);
        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
                size += stat.size;
            } else if (stat.isDirectory()) {
                size += getDirectorySize(filePath);
            }
        }
    } catch (error) {
        // Игнорируем ошибки
    }
    return size;
}

function formatBytes(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

const assetsAnalysis = {
    images: { dir: 'public/images', size: 0, count: 0 },
    videos: { dir: 'public/videos', size: 0, count: 0 },
    fonts: { dir: 'public/fonts', size: 0, count: 0 }
};

Object.keys(assetsAnalysis).forEach(type => {
    const { dir } = assetsAnalysis[type];
    if (fs.existsSync(dir)) {
        assetsAnalysis[type].size = getDirectorySize(dir);
        assetsAnalysis[type].count = fs.readdirSync(dir).length;
        console.log(`   ${type}: ${formatBytes(assetsAnalysis[type].size)} (${assetsAnalysis[type].count} файлов)`);
    }
});

const totalAssetsSize = Object.values(assetsAnalysis).reduce((sum, asset) => sum + asset.size, 0);
console.log(`   Общий размер ассетов: ${formatBytes(totalAssetsSize)}`);

// 7. Создаем отчет о готовности
console.log('\n7️⃣ Отчет о готовности к деплою...');

const readinessChecks = [
    { name: 'Системные файлы очищены', status: !fs.existsSync('.DS_Store') },
    { name: 'Неиспользуемые папки удалены', status: !fs.existsSync('_unused_files') },
    { name: 'Next.js конфиг есть', status: fs.existsSync('next.config.mjs') },
    { name: 'Production env есть', status: fs.existsSync('.env.production') },
    { name: 'Ассеты проверены', status: totalAssetsSize > 0 }
];

let readyCount = 0;
readinessChecks.forEach(check => {
    const icon = check.status ? '✅' : '❌';
    console.log(`   ${icon} ${check.name}`);
    if (check.status) readyCount++;
});

const readinessPercent = Math.round((readyCount / readinessChecks.length) * 100);
console.log(`\n📊 Готовность: ${readinessPercent}% (${readyCount}/${readinessChecks.length})`);

// 8. Инструкции по деплою
console.log('\n8️⃣ Следующие шаги:');

if (readinessPercent >= 80) {
    console.log('🎉 Проект готов к деплою!');
    console.log('\n📋 Команды для деплоя:');
    console.log('   npm install sharp cross-env  # Установить оптимизаторы');
    console.log('   npm run build:production    # Сборка для продакшена');
    console.log('   npm run start:production    # Тест локально (опционально)');
    
    console.log('\n🌐 Рекомендуемые платформы:');
    console.log('   • Vercel (vercel --prod)');
    console.log('   • Netlify (подключить через Git)');
    console.log('   • Railway, Render, или DigitalOcean');
    
} else {
    console.log('⚠️  Требуются дополнительные настройки');
    
    if (!fs.existsSync('next.config.mjs')) {
        console.log('   - Создать оптимизированный next.config.mjs');
    }
    if (!fs.existsSync('.env.production')) {
        console.log('   - Создать .env.production файл');
    }
}

console.log('\n💡 Оптимизации применены:');
console.log(`   - Удалено файлов/папок: ${changes}`);
console.log(`   - Размер ассетов: ${formatBytes(totalAssetsSize)}`);
console.log('   - Конфигурации проверены');

console.log('\n✨ Подготовка завершена!');

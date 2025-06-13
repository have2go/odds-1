const fs = require('fs');
const path = require('path');

console.log('📊 Анализ проекта ODDS\n');

// Функция для получения размера файла/папки
function getSize(filepath) {
    try {
        const stat = fs.statSync(filepath);
        if (stat.isFile()) {
            return stat.size;
        } else if (stat.isDirectory()) {
            let totalSize = 0;
            const files = fs.readdirSync(filepath);
            for (const file of files) {
                totalSize += getSize(path.join(filepath, file));
            }
            return totalSize;
        }
    } catch (error) {
        return 0;
    }
    return 0;
}

// Форматирование размера
function formatSize(bytes) {
    const sizes = ['B', 'KB', 'MB', 'GB'];
    if (bytes === 0) return '0 B';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
}

// Анализ папки public
console.log('📁 Статические ассеты:');
const publicDir = 'public';
if (fs.existsSync(publicDir)) {
    const subdirs = ['images', 'videos', 'models', 'fonts'];
    let totalPublicSize = 0;
    
    subdirs.forEach(subdir => {
        const dirPath = path.join(publicDir, subdir);
        if (fs.existsSync(dirPath)) {
            const size = getSize(dirPath);
            totalPublicSize += size;
            const files = fs.readdirSync(dirPath);
            const fileCount = files.filter(f => fs.statSync(path.join(dirPath, f)).isFile()).length;
            console.log(`   ${subdir}: ${formatSize(size)} (${fileCount} файлов)`);
        }
    });
    console.log(`   ИТОГО: ${formatSize(totalPublicSize)}`);
}

// Анализ зависимостей
console.log('\n📦 Зависимости:');
if (fs.existsSync('package.json')) {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const deps = Object.keys(pkg.dependencies || {});
    const devDeps = Object.keys(pkg.devDependencies || {});
    console.log(`   Основные: ${deps.length}`);
    console.log(`   Dev: ${devDeps.length}`);
}

console.log('\n🎯 Готово! Проект проанализирован');

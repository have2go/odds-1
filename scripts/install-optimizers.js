const { execSync } = require('child_process');

console.log('📦 Устанавливаю оптимизаторы...\n');

const optimizers = [
    'sharp', // Для оптимизации изображений
    'cross-env', // Для кроссплатформенных переменных окружения
    '@next/bundle-analyzer', // Для анализа бандла
];

const devOptimizers = [
    '@svgr/webpack', // Для оптимизации SVG
];

try {
    console.log('⬇️  Устанавливаю production зависимости...');
    execSync(`npm install ${optimizers.join(' ')}`, { stdio: 'inherit' });
    
    console.log('\n⬇️  Устанавливаю dev зависимости...');
    execSync(`npm install -D ${devOptimizers.join(' ')}`, { stdio: 'inherit' });
    
    console.log('\n✅ Все оптимизаторы установлены!');
    console.log('\n📋 Следующие шаги:');
    console.log('   1. npm run optimize');
    console.log('   2. npm run build:production');
    console.log('   3. npm run analyze (для анализа бандла)');
    
} catch (error) {
    console.error('❌ Ошибка установки:', error.message);
    process.exit(1);
}

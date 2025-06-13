const fs = require('fs').promises;
const path = require('path');

async function analyzeBundleSize() {
    console.log('📊 Анализирую размер бандла...\n');
    
    const buildDir = path.join(process.cwd(), '.next');
    const staticDir = path.join(buildDir, 'static');
    
    try {
        // Проверяем наличие build директории
        await fs.access(buildDir);
        
        async function getDirectorySize(dirPath) {
            let totalSize = 0;
            const items = await fs.readdir(dirPath, { withFileTypes: true });
            
            for (const item of items) {
                const fullPath = path.join(dirPath, item.name);
                if (item.isDirectory()) {
                    totalSize += await getDirectorySize(fullPath);
                } else {
                    const stat = await fs.stat(fullPath);
                    totalSize += stat.size;
                }
            }
            return totalSize;
        }
        
        async function analyzeChunks() {
            const chunksDir = path.join(staticDir, 'chunks');
            try {
                const chunks = await fs.readdir(chunksDir);
                const jsChunks = chunks.filter(f => f.endsWith('.js'));
                
                const chunkSizes = [];
                for (const chunk of jsChunks) {
                    const stat = await fs.stat(path.join(chunksDir, chunk));
                    chunkSizes.push({ name: chunk, size: stat.size });
                }
                
                chunkSizes.sort((a, b) => b.size - a.size);
                
                console.log('📦 Крупнейшие чанки:');
                for (const chunk of chunkSizes.slice(0, 10)) {
                    const sizeKB = (chunk.size / 1024).toFixed(1);
                    console.log(`   ${chunk.name}: ${sizeKB}KB`);
                }
                
                return chunkSizes.reduce((sum, chunk) => sum + chunk.size, 0);
            } catch (error) {
                console.log('⚠️  Не удалось проанализировать чанки');
                return 0;
            }
        }
        
        const totalBuildSize = await getDirectorySize(buildDir);
        const chunksSize = await analyzeChunks();
        
        console.log('\n📏 Размеры:');
        console.log(`   Общий размер билда: ${(totalBuildSize / 1024 / 1024).toFixed(2)}MB`);
        console.log(`   Размер JS чанков: ${(chunksSize / 1024).toFixed(1)}KB`);
        
        // Анализ статических ассетов
        try {
            const publicDir = path.join(process.cwd(), 'public');
            const publicSize = await getDirectorySize(publicDir);
            console.log(`   Размер статических файлов: ${(publicSize / 1024 / 1024).toFixed(2)}MB`);
        } catch (error) {
            console.log('⚠️  Не удалось проанализировать public директорию');
        }
        
    } catch (error) {
        console.log('❌ Сначала выполните сборку проекта: npm run build');
    }
}

analyzeBundleSize();

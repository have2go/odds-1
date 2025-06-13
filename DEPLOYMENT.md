# 🚀 Руководство по деплою ODDS

## Подготовка к деплою

### 1. Установка оптимизаторов
```bash
npm run install-optimizers
```

### 2. Оптимизация проекта
```bash
npm run optimize
```

### 3. Сборка для продакшена
```bash
npm run build:production
```

### 4. Анализ бандла (опционально)
```bash
npm run build:analyze
```

## Деплой на различные платформы

### Vercel (Рекомендуется)
1. Установите Vercel CLI: `npm i -g vercel`
2. Войдите в аккаунт: `vercel login`
3. Деплой: `vercel --prod`

### Netlify
1. Создайте `netlify.toml`:
```toml
[build]
  command = "npm run build:production"
  publish = ".next"

[build.environment]
  NODE_ENV = "production"
  NEXT_TELEMETRY_DISABLED = "1"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/videos/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

2. Подключите репозиторий к Netlify
3. Установите команду сборки: `npm run build:production`
4. Папка публикации: `.next`

### Docker
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build:production

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

## Оптимизации применяемые при деплое

### Изображения
- ✅ Автоматическое преобразование в WebP/AVIF
- ✅ Оптимизация размеров файлов
- ✅ Адаптивные размеры
- ✅ Кеширование на 1 год

### JavaScript
- ✅ Минификация с SWC
- ✅ Tree shaking
- ✅ Code splitting по библиотекам
- ✅ Сжатие gzip/brotli

### CSS
- ✅ Минификация
- ✅ Удаление неиспользуемых стилей
- ✅ Критический CSS inline

### Производительность
- ✅ Preload критических ресурсов
- ✅ Lazy loading изображений
- ✅ Оптимизированные заголовки кеширования
- ✅ Service Worker для кеширования

## Мониторинг производительности

### Web Vitals
Проект оптимизирован для достижения:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Инструменты мониторинга
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Chrome DevTools

## Переменные окружения

### Производственные переменные (.env.production)
```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
NEXT_PRIVATE_STANDALONE=true
```

### Платформа-специфичные переменные
Добавьте в настройки вашей платформы:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`

## Проверка оптимизации

### После деплоя проверьте:
1. **Скорость загрузки**: < 3s для первого экрана
2. **Размер бандла**: < 1MB для основного чанка
3. **Кеширование**: статические ресурсы кешируются на 1 год
4. **Сжатие**: все ресурсы сжаты (gzip/brotli)
5. **Изображения**: преобразованы в современные форматы

### Команды для тестирования
```bash
# Анализ размера бандла
npm run analyze-bundle

# Локальная проверка продакшен билда
npm run build:production
npm run start:production
```

## Возможные проблемы и решения

### Проблема: Большой размер бандла
**Решение**: 
```bash
npm run build:analyze
# Анализируйте отчет и оптимизируйте крупные зависимости
```

### Проблема: Медленная загрузка изображений
**Решение**: 
- Проверьте, что используется Next.js Image компонент
- Убедитесь, что изображения оптимизированы

### Проблема: Плохие Web Vitals
**Решение**:
- Используйте `npm run optimize` перед деплоем
- Проверьте критический CSS
- Оптимизируйте анимации Framer Motion

## Контрольный список деплоя

- [ ] Запущена оптимизация: `npm run optimize`
- [ ] Удалены неиспользуемые файлы
- [ ] Оптимизированы изображения
- [ ] Сборка прошла успешно: `npm run build:production`
- [ ] Проверен размер бандла: `npm run analyze-bundle`
- [ ] Настроены переменные окружения
- [ ] Протестирована локально: `npm run start:production`
- [ ] Настроены заголовки кеширования
- [ ] Проверена производительность

🎉 **Готово к деплою!**

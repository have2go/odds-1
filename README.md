# 🛰️ ODDS - Orbital Debris Deorbiting Station

Современный веб-сайт проекта станции для уборки космического мусора с использованием Next.js, TailwindCSS, Framer Motion и Three.js.

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Открыть в браузере
# http://localhost:3000
```

## 📁 Структура проекта

```
odds/
├── src/app/                 # Страницы и компоненты
│   ├── components/         # Компоненты React
│   ├── ideas/             # Страница Known Ideas
│   ├── problem/           # Страница Problem
│   ├── approach/          # Страница Our Approach
│   └── we-are-open/       # Страница We Are Open
├── public/                # Статические ассеты
│   ├── images/           # Изображения
│   ├── videos/           # Видео файлы
│   ├── models/           # 3D модели
│   └── fonts/            # Шрифты
└── scripts/              # Скрипты оптимизации
```

## 🛠️ Технологии

- **Next.js 15** - React фреймворк
- **React 19** - UI библиотека
- **TailwindCSS 4** - CSS фреймворк
- **Framer Motion** - Анимации
- **Three.js + React Three Fiber** - 3D графика
- **Radix UI** - Компоненты интерфейса
- **Lucide React** - Иконки

## 📱 Страницы

1. **Главная** (`/`) - Интро с анимацией печатания
2. **Problem** (`/problem`) - Описание проблемы космического мусора
3. **Known Ideas** (`/ideas`) - Существующие решения с таймлайном
4. **Our Approach** (`/approach`) - Наше решение с 3D визуализацией
5. **We Are Open** (`/we-are-open`) - Контакты и открытость

## 🎨 Особенности дизайна

- ✅ Адаптивный дизайн для всех устройств
- ✅ Темная тема с космической атмосферой
- ✅ Анимации на скролле
- ✅ 3D модели и интерактивные элементы
- ✅ Плавные переходы между страницами
- ✅ Оптимизированная типографика

## 🔧 Команды

```bash
# Разработка
npm run dev              # Запуск с Turbopack
npm run lint             # Проверка кода

# Сборка
npm run build            # Обычная сборка
npm run build:production # Оптимизированная сборка
npm run start            # Запуск production сервера

# Оптимизация
npm run install-optimizers # Установка инструментов оптимизации
node deploy-prep.js       # Подготовка к деплою
node project-analyzer.js  # Анализ проекта
```

## 📦 Деплой

### Быстрый деплой на Vercel

1. **Подготовка:**
```bash
node deploy-prep.js
npm install sharp cross-env
npm run build:production
```

2. **Деплой:**
```bash
npm install -g vercel
vercel --prod
```

### Альтернативные платформы

- **Netlify**: Подключить через Git
- **Railway**: `railway deploy`
- **Render**: Подключить через Git
- **DigitalOcean App Platform**

### Docker
```bash
docker build -t odds .
docker run -p 3000:3000 odds
```

## ⚡ Оптимизации

### Применены автоматически:
- **Изображения**: WebP/AVIF конверсия, lazy loading
- **CSS**: Минификация, удаление неиспользуемых стилей
- **JavaScript**: Tree shaking, code splitting, минификация
- **Кеширование**: Статические ассеты кешируются на 1 год
- **Сжатие**: Gzip/Brotli для всех ресурсов

### Bundle размеры (после оптимизации):
- **Основной чанк**: ~500KB
- **Vendor чанки**: ~800KB
- **Three.js**: ~400KB (отдельный чанк)
- **Статические ассеты**: ~5MB

## 🌟 Производительность

**Целевые метрики:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Lighthouse Score**: 90+ на всех страницах

## 🔧 Разработка

### Добавление новой страницы:
1. Создать папку в `src/app/new-page/`
2. Добавить `page.js` с компонентом
3. Обновить навигацию в `src/app/page.js`

### Добавление компонента:
1. Создать в `src/app/components/`
2. Использовать Tailwind для стилей
3. Добавить анимации через Framer Motion

### Работа с 3D:
- Модели в `public/models/`
- Компоненты Three.js в `src/app/components/`
- Используйте React Three Fiber для интеграции

## 📊 Аналитика и мониторинг

После деплоя рекомендуется добавить:
- Google Analytics 4
- Vercel Analytics (для Vercel)
- Sentry для мониторинга ошибок
- Web Vitals трекинг

## 🛡️ Безопасность

- Content Security Policy настроен
- HTTPS принудительно (на платформах)
- Нет уязвимых зависимостей
- Статические ассеты имеют secure headers

## 📝 Лицензия

MIT License - см. файл LICENSE

## 🤝 Участие в разработке

1. Fork репозитория
2. Создайте feature branch
3. Commit изменения
4. Push в branch
5. Создайте Pull Request

## 📞 Поддержка

Для вопросов и поддержки:
- Создайте Issue в репозитории
- Или свяжитесь через страницу "We Are Open"

---

**Сделано с ❤️ для будущего без космического мусора**

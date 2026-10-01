# DEV. — Portfolio

Готовый статический сайт-портфолио разработчика. Без npm, React-сборки и сторонних JS-библиотек: можно сразу заливать в GitHub и подключать к Netlify.

## Что внутри

- выразительный dark/editorial visual style;
- квадратные превью проектов — дизайн специально построен вокруг твоего формата видео;
- 3 проекта: салон красоты, автосалон и ресторан;
- видео загружаются лениво: сначала показывается лёгкий JPG-постер, видео подгружается только рядом с экраном и ставится на паузу, когда карточка далеко от viewport;
- исходные видео перекодированы для web в более лёгкий H.264, суммарно около 2 MB вместо ~22 MB;
- адаптив под телефон, планшет и desktop;
- prefers-reduced-motion;
- WhatsApp: +7 904 657-63-73;
- стек: HTML/CSS, JavaScript, React, Node.js, Python, Git;
- SEO meta-теги без тяжёлых библиотек.

## Структура

```text
index.html
style.css
script.js
assets/
  salon.mp4
  salon.jpg
  auto.mp4
  auto.jpg
  restaurant.mp4
  restaurant.jpg
```

## GitHub

Создай новый репозиторий и загрузи **содержимое этой папки**, чтобы `index.html` лежал в корне репозитория.

Через Git:

```bash
git init
git add .
git commit -m "Create developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/developer-portfolio.git
git push -u origin main
```

## Netlify

1. Netlify → **Add new project** → **Import an existing project**.
2. Выбери GitHub и этот репозиторий.
3. Build command — пусто.
4. Publish directory — `.`
5. Deploy.

Сборщик не нужен: сайт состоит из обычных HTML/CSS/JS и готовых web-видео.

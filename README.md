# Konvert — лендинг

Односторінковий сайт для продажу послуги «електронні запрошення під ключ».
Статичний, без бекенду. Заявки з форми надходять на email через [Formspree](https://formspree.io).

## Бренд

- Шрифт: **Inter** (заголовки — SemiBold 600, текст — Regular 400). Запасні: Manrope, Montserrat.
- Кольори (у `styles.css`, змінні `:root`):
  - білий `#FFFFFF` — фон, простір
  - блакитний `#5BBEFF` — акценти, кнопки, ключові елементи
  - темно-сірий `#252B33` — текст, логотип, заголовки
  - світло-блакитний `#EAF7FF` — блоки, картки, фон інтерфейсу

## Структура

```
konvert/
├── index.html      головна сторінка
├── styles.css      стилі (біло-блакитна гама)
├── script.js       рік у футері + відправка форми
└── README.md
```

## 1. Налаштувати форму заявок (Formspree)

1. Зареєструйтесь на https://formspree.io (безкоштовний план — 50 заявок/міс).
2. Створіть нову форму (New Form), вкажіть пошту, куди приходитимуть заявки (наприклад `hello@konvert.com`).
3. Скопіюйте ID форми — це частина після `/f/` в адресі, виглядає як `xayzqwer`.
4. У файлі `index.html` знайдіть рядок:
   ```html
   <form id="lead-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   і замініть `YOUR_FORM_ID` на свій ID.
5. Перша надіслана заявка попросить підтвердити пошту — підтвердіть, далі все працює автоматично.

Заявки можна переглядати у кабінеті Formspree або вони падатимуть листами на вашу пошту.

## 2. Замінити контакти та текст

- Instagram і email — у футері `index.html` (`konvert.invite`, `hello@konvert.com`).
- Заголовки, приклади, тексти секцій — також в `index.html`.
- Кольори — змінні зверху `styles.css` (`--blue-*`).
- Зображення прикладів зараз намальовані кодом (SVG/CSS). Коли зʼявляться реальні кейси — можна замінити блоки `.card-prev` на `<img>`.

## 3. Залити на GitHub

```bash
cd konvert
git init
git add .
git commit -m "Konvert landing"
git branch -M main
git remote add origin https://github.com/ВАШ_НІК/konvert.git
git push -u origin main
```

## 4. Задеплоїти на Cloudflare Pages

1. Зайдіть на https://dash.cloudflare.com → Workers & Pages → Create → Pages.
2. Connect to Git → оберіть репозиторій `konvert`.
3. Налаштування збірки:
   - **Framework preset:** None
   - **Build command:** *(порожньо)*
   - **Build output directory:** `/`
4. Save and Deploy. За хвилину сайт буде на `konvert.pages.dev`.
5. Свій домен: Custom domains → Set up a custom domain → введіть свій домен і додайте записи в DNS.

Кожен `git push` у `main` автоматично оновлюватиме живий сайт.

## Що далі

- Реальні фото/превʼю кейсів замість намальованих карток.
- Окремі сторінки-демо запрошень (весілля, день народження тощо) як «товар».
- Аналітика (Cloudflare Web Analytics — безкоштовно, без cookie-банера) і піксель для реклами.

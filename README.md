# انستقرام ركيفري — instagram-recover.com

موقع Astro ثابت (بدون JavaScript في المتصفح) بالعربية RTL.

- تطوير: `npm i && npm run dev`
- بناء: `npm run build` → `dist/`
- Cloudflare Pages: Build command `npm run build`، Output `dist`، متغير `NODE_VERSION=22`.
- إضافة مقال: ملف Markdown جديد في `src/content/blog/`.
- إعادة توليد og.png والأيقونات: `node scripts/assets.mjs` (يتطلب playwright).

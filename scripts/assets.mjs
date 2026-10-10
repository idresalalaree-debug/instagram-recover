// Generates og.png and app icons into public/. Run: node scripts/assets.mjs
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('..', import.meta.url));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto('file://' + root + 'scripts/og.html');
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: root + 'public/og.png' });
const svg = readFileSync(root + 'public/favicon.svg', 'utf8');
for (const s of [180, 192, 512]) {
  const p = await browser.newPage({ viewport: { width: s, height: s } });
  await p.setContent(`<body style="margin:0">${svg.replace('<svg ', `<svg width="${s}" height="${s}" `)}</body>`);
  await p.screenshot({ path: root + 'public/' + (s === 180 ? 'apple-touch-icon.png' : `icon-${s}.png`) });
}
await browser.close();

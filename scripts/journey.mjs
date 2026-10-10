// Renders the 5 cinematic journey scenes to public/journey/*.webp. Run: node scripts/journey.mjs (needs playwright + sharp)
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import sharp from 'sharp';
const root = '/home/claude/instagram-recover/';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 900, height: 900 }, deviceScaleFactor: 1 });
await p.goto('file://' + root + 'scripts/scenes.html');
await p.evaluate(() => { document.body.classList.add('clean'); document.querySelectorAll('.bg').forEach(e => e.style.background = e.style.background.replace(/30% (5\d)%/g, '50% $1%')); return document.fonts.ready; });
for (let i = 1; i <= 5; i++) {
  await p.evaluate((i) => { document.querySelectorAll('.scene').forEach((s) => s.classList.remove('on')); document.getElementById('s' + i).classList.add('on'); }, i);
  await p.waitForTimeout(150);
  const buf = await p.screenshot();
  for (const w of [900, 560]) await sharp(buf).resize(w).webp({ quality: 74 }).toFile(root + 'public/journey/scene-' + i + '-' + w + '.webp');
}
// wide captioned versions for sharing
const q = await b.newPage({ viewport: { width: 1200, height: 900 } });
await q.goto('file://' + root + 'scripts/scenes.html'); await q.evaluate(() => document.fonts.ready);
for (let i = 1; i <= 5; i++) {
  await q.evaluate((i) => { document.querySelectorAll('.scene').forEach((s) => s.classList.remove('on')); document.getElementById('s' + i).classList.add('on'); }, i);
  await q.waitForTimeout(150);
  await sharp(await q.screenshot()).webp({ quality: 78 }).toFile(root + 'public/journey/story-' + i + '.webp');
}
await b.close();

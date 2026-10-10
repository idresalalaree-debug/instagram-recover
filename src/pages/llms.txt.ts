import { getCollection } from 'astro:content';
import { SITE } from '../data/site';
import { FAQ_CORE } from '../data/faq';

export async function GET() {
  const posts = await getCollection('blog');
  const body = `# ${SITE.name} (${SITE.nameEn})

> ${SITE.description}

- الموقع: ${SITE.url}/
- التواصل: واتساب ${SITE.phone} (https://wa.me/962795827790)
- النطاق: كل الدول العربية، عن بعد بالكامل.
- خدمة مستقلة، غير تابعة لـ Meta أو Instagram. تعمل مع أصحاب الحسابات فقط.

## الخدمات
- استرجاع حساب انستقرام معطل
- استرجاع حساب انستقرام مخترق (حتى بعد تغيير الإيميل والرقم)
- الاعتراض على تعليق أو إيقاف الحساب
- الاسترجاع بدون إيميل أو رقم هاتف
- فقدان رمز التحقق بخطوتين
- الإبلاغ عن الحسابات المنتحلة

## الأدلة
${posts.map((p) => `- [${p.data.title}](${SITE.url}/blog/${p.id}/): ${p.data.description}`).join('\n')}

## أسئلة شائعة
${FAQ_CORE.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}

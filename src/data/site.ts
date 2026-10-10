export const SITE = {
  name: 'انستقرام ركيفري',
  nameEn: 'Instagram Recover',
  url: 'https://instagram-recover.com',
  phone: '+962795827790',
  phoneDisplay: '0795827790',
  description:
    'خدمة احترافية لاسترجاع حسابات انستقرام المعطلة والمخترقة والموقوفة والمحذوفة. تقييم سريع لحالتك وتواصل مباشر عبر واتساب.',
};

export const waLink = (text = 'مرحبًا، أحتاج مساعدة في استرجاع حسابي على انستقرام') =>
  `https://wa.me/962795827790?text=${encodeURIComponent(text)}`;

export const NAV = [
  { href: '/#services', label: 'الخدمات' },
  { href: '/#how', label: 'كيف نعمل' },
  { href: '/faq/', label: 'الأسئلة الشائعة' },
  { href: '/blog/', label: 'المقالات' },
];

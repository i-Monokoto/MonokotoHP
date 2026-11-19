export const site = {
  name: '学会ウェブサイト',
  description: '',
  membershipForm: '',
  contactForm: '',
  bylawsPdf: '',
  officers: [] as { role: string; name: string; affiliation?: string }[],
  news: [] as { date: string; title: string; text?: string }[],
  events: [] as {
    title: string;
    date: string;
    venue: string;
    description?: string;
    programPdf?: string;
  }[],
};

export const navigation = [
  { path: '', label: 'トップ' },
  { path: 'events/', label: '大会・研究会' },
  { path: 'membership/', label: '入会案内・会則' },
  { path: 'contact/', label: '役員・お問い合わせ' },
];

export function sitePath(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

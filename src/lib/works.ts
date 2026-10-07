import data from '../data/works.json';
import type { Lang } from '../i18n/ui';

export type Category = 'beauty' | 'fashion' | 'lifestyle';

export interface Work {
  id: string;
  title: string;
  titleEn: string | null;
  date: string | null;
  url: string | null;
  format: 'reels' | 'image';
  categories: Category[];
  views: number | null;
  hero: boolean;
  thumbnail: string | null;
  preview: string | null;
  secondaryUse: boolean;
  description: string | null;
  descriptionEn: string | null;
}

// works.json은 노션 동기화 스크립트가 "공개여부 체크 + 진행상황 완료" 항목만 담아 생성합니다.
export const works: Work[] = [...(data.items as Work[])].sort((a, b) =>
  (b.date ?? '').localeCompare(a.date ?? ''),
);
export const updatedAt: string = data.updatedAt;

export function workTitle(w: Work, lang: Lang) {
  return lang === 'en' && w.titleEn ? w.titleEn : w.title;
}

export function workDescription(w: Work, lang: Lang) {
  return lang === 'en' && w.descriptionEn ? w.descriptionEn : w.description;
}

export function heroWorks(limit = 8) {
  const picked = works.filter((w) => w.hero);
  return (picked.length ? picked : works).slice(0, limit);
}

export function uniqueBrands(lang: Lang) {
  return [...new Set(works.map((w) => workTitle(w, lang)))];
}

// https://www.instagram.com/reel/ABC/ 또는 /p/ABC/ → 임베드 주소
export function instagramEmbed(url: string | null) {
  const m = url?.match(/instagram\.com\/(?:[\w.]+\/)?(?:p|reel|reels|tv)\/([\w-]+)/);
  return m ? `https://www.instagram.com/p/${m[1]}/embed` : null;
}

export function formatDate(date: string | null, lang: Lang) {
  if (!date) return '';
  const d = new Date(date);
  return lang === 'ko'
    ? `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
    : d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function formatCompact(n: number, lang: Lang) {
  return new Intl.NumberFormat(lang === 'ko' ? 'ko-KR' : 'en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(n);
}

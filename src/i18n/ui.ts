export const languages = ['ko', 'en'] as const;
export type Lang = (typeof languages)[number];

export const ui = {
  ko: {
    meta: {
      title: '이채은 · Pianist & Creator',
      description: '피아니스트이자 뷰티·패션 크리에이터 이채은의 브랜드 협업 포트폴리오',
    },
    nav: { about: '소개', works: '작업', brands: '브랜드', piano: '연주', contact: '문의' },
    hero: {
      role: 'Pianist · Beauty & Fashion Creator',
      tagline: '건반 위의 섬세함으로\n화면 속 아름다움을 연주합니다.',
      scroll: '스크롤',
    },
    stats: { views: '누적 조회수', brands: '협업 브랜드', works: '협업 콘텐츠' },
    about: {
      title: 'Two Stages, One Artist',
      pianistTitle: 'Pianist',
      pianist:
        '무대 위에서 피아노를 연주합니다. 한 음 한 음에 담는 집중과 표현력이 모든 작업의 출발점입니다.',
      creatorTitle: 'Creator',
      creator:
        '뷰티·패션 숏폼 크리에이터로 활동하며 다양한 브랜드와 직접 소통하고, 제품의 매력을 감각적인 릴스로 전합니다.',
    },
    works: {
      title: 'Brand Collaborations',
      subtitle: '노션과 연동되어 자동으로 업데이트됩니다.',
      filters: { all: '전체', reels: '릴스', image: '이미지', beauty: '뷰티', fashion: '패션', lifestyle: '라이프' },
      view: 'Instagram에서 보기',
      close: '닫기',
      secondaryUse: '2차 활용',
      noLink: '링크 준비 중입니다.',
    },
    brands: { title: 'Brands I’ve worked with' },
    piano: { title: 'Piano', comingSoon: '전체 연주 영상은 곧 공개됩니다.' },
    contact: {
      title: '협업 문의',
      body: '브랜드 협업, 콘텐츠 제작, 연주 섭외 등 어떤 제안이든 환영합니다.',
      email: '이메일 보내기',
      mediaKit: '미디어킷 다운로드',
    },
    footer: { updated: '최근 업데이트' },
  },
  en: {
    meta: {
      title: 'Chaeeun Lee · Pianist & Creator',
      description: 'Brand collaboration portfolio of Chaeeun Lee, pianist and beauty & fashion creator.',
    },
    nav: { about: 'About', works: 'Works', brands: 'Brands', piano: 'Piano', contact: 'Contact' },
    hero: {
      role: 'Pianist · Beauty & Fashion Creator',
      tagline: 'Pianist by training,\ncreator by heart.',
      scroll: 'Scroll',
    },
    stats: { views: 'Total views', brands: 'Brand partners', works: 'Collaborations' },
    about: {
      title: 'Two Stages, One Artist',
      pianistTitle: 'Pianist',
      pianist:
        'I perform classical piano on stage. The focus and expression behind every note is where all of my work begins.',
      creatorTitle: 'Creator',
      creator:
        'As a beauty & fashion short-form creator, I work directly with brands and bring their products to life through refined, engaging reels.',
    },
    works: {
      title: 'Brand Collaborations',
      subtitle: 'Synced with Notion and updated automatically.',
      filters: { all: 'All', reels: 'Reels', image: 'Image', beauty: 'Beauty', fashion: 'Fashion', lifestyle: 'Lifestyle' },
      view: 'View on Instagram',
      close: 'Close',
      secondaryUse: 'Paid usage',
      noLink: 'Link coming soon.',
    },
    brands: { title: 'Brands I’ve worked with' },
    piano: { title: 'Piano', comingSoon: 'Full performance video coming soon.' },
    contact: {
      title: 'Let’s work together',
      body: 'Brand partnerships, content production, performance bookings — all proposals are welcome.',
      email: 'Send an email',
      mediaKit: 'Download media kit',
    },
    footer: { updated: 'Last updated' },
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}

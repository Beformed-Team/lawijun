export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: '소개',
    href: '/about',
    children: [
      { label: '소개', href: '/about' },
      { label: '업무협력 · 법률자문 기업', href: '/about/partners' },
      { label: '오시는 길', href: '/location' },
      { label: '고객의 소리', href: '/testimonials' },
    ],
  },
  {
    label: '업무사례',
    href: '/cases',
    children: [
      { label: '주요 업무사례', href: '/cases' },
      { label: '사례분석 · 최신동향', href: '/cases/analysis' },
      { label: '법률정보 (법인)', href: '/cases/legal-info-corporate' },
      { label: '법률정보 (개인)', href: '/cases/legal-info-personal' },
      { label: '법률지식인', href: '/cases/legal-knowledge' },
      { label: '고객후기', href: '/cases/reviews' },
    ],
  },
  {
    label: '업무분야',
    href: '/practice/rehabilitation',
    children: [
      { label: '회생 · 파산', href: '/practice/rehabilitation' },
      { label: '민사 · 손해배상', href: '/practice/civil' },
      { label: '형사 · 성범죄', href: '/practice/criminal' },
      { label: '가사 · 이혼', href: '/practice/family' },
      { label: '외국인 업무', href: '/practice/foreign' },
    ],
  },
  {
    label: '구성원 소개',
    href: '/lawyers',
  },
  {
    label: '소식 · 자료',
    href: '/news/press',
    children: [
      { label: '언론보도', href: '/news/press' },
      { label: '공지사항', href: '/news/notice' },
      { label: '법률 블로그', href: '/news/blog' },
      { label: '법률서식', href: '/news/forms' },
      { label: '뉴스레터 · 브로슈어', href: '/news/newsletter' },
      { label: '세미나', href: '/news/seminar' },
    ],
  },
];

export const practiceAreas = [
  {
    slug: 'rehabilitation',
    title: '회생 · 파산',
    summary: '개인회생부터 법인회생까지, 새로운 출발을 위한 전략적 채무 정리.',
    icon: 'Scale',
  },
  {
    slug: 'civil',
    title: '민사 · 손해배상',
    summary: '계약 분쟁, 손해배상, 부동산 등 일상 속 권리 회복을 지원합니다.',
    icon: 'Gavel',
  },
  {
    slug: 'criminal',
    title: '형사 · 성범죄',
    summary: '수사 초기 대응부터 재판까지, 의뢰인의 방어권을 끝까지 지킵니다.',
    icon: 'ShieldCheck',
  },
  {
    slug: 'family',
    title: '가사 · 이혼',
    summary: '이혼 · 양육권 · 상속 분쟁을 의뢰인의 입장에서 섬세하게 풀어냅니다.',
    icon: 'Users',
  },
  {
    slug: 'foreign',
    title: '외국인 업무',
    summary: '비자, 체류, 국제민사·형사까지 글로벌 의뢰인을 위한 원스톱 솔루션.',
    icon: 'Globe',
  },
];

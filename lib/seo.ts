import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lawfirmyijun-gangbuk.vercel.app';
const SITE_NAME = '법무법인 이준 강북 분사무소';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 신뢰할 수 있는 법률 파트너`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    '법무법인 이준 강북 분사무소는 회생/파산, 민사, 형사, 가사, 외국인 업무 등 풍부한 경험을 바탕으로 의뢰인의 권익을 지키는 종합 법률 서비스를 제공합니다.',
  keywords: [
    '법무법인 이준',
    '강북 변호사',
    '서울 변호사',
    '법률 상담',
    '회생 파산',
    '민사 손해배상',
    '형사 성범죄',
    '가사 이혼',
    '외국인 법률 업무',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | 신뢰할 수 있는 법률 파트너`,
    description:
      '회생/파산, 민사, 형사, 가사, 외국인 업무 전문. 법무법인 이준 강북 분사무소가 의뢰인 곁에 함께합니다.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | 신뢰할 수 있는 법률 파트너`,
    description:
      '회생/파산, 민사, 형사, 가사, 외국인 업무 전문. 법무법인 이준 강북 분사무소가 의뢰인 곁에 함께합니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export function buildPageMetadata({
  title,
  description,
  path = '/',
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
    },
    twitter: {
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

export const SITE_INFO = {
  name: SITE_NAME,
  url: SITE_URL,
  phone: '{{대표 전화번호 입력 필요}}',
  email: 'info@lawfirmyijun.com',
  address: '{{서울시 강북구 분사무소 주소 입력 필요}}',
  businessHours: '평일 09:00 - 18:00 (점심시간 12:30 - 13:30)',
};

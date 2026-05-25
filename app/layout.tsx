import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { defaultMetadata, SITE_INFO } from '@/lib/seo';
import '@/styles/globals.css';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  display: 'swap',
  variable: '--font-pretendard',
});

export const metadata: Metadata = defaultMetadata;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: SITE_INFO.name,
  description:
    '법무법인 이준 강북 분사무소는 회생/파산, 민사, 형사, 가사, 외국인 업무 등 종합 법률 서비스를 제공합니다.',
  url: SITE_INFO.url,
  telephone: SITE_INFO.phone,
  email: SITE_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_INFO.address,
    addressLocality: '서울특별시 강북구',
    addressCountry: 'KR',
  },
  openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:00',
  areaServed: 'KR',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-navy focus:px-4 focus:py-2 focus:text-white"
        >
          본문 바로가기
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { NewsletterTabs } from '@/components/sections/NewsletterTabs';
import newsletter from '@/content/newsletter.json';

export const metadata = buildPageMetadata({
  title: '뉴스레터 · 브로슈어',
  description:
    '법무법인 이준에서 발간하는 뉴스레터와 브로슈어를 분야별로 검색·다운로드할 수 있습니다.',
  path: '/news/newsletter',
});

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="NEWSLETTER & BROCHURE"
        title="뉴스레터 · 브로슈어"
        description="법률 동향과 분야별 자료를 정리해 정기적으로 발간합니다. 관심 있는 분야를 선택해 자료를 다운로드하세요."
      />
      <section className="section">
        <div className="container">
          <NewsletterTabs
            newsletters={newsletter.newsletters}
            brochures={newsletter.brochures}
          />
        </div>
      </section>
    </>
  );
}

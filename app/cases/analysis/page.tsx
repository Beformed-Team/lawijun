import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { BoardList } from '@/components/ui/board-list';
import blog from '@/content/blog.json';

export const metadata = buildPageMetadata({
  title: '사례분석 · 최신동향',
  description: '판례 흐름과 법률 시장의 최신 이슈를 변호사 관점에서 분석합니다.',
  path: '/cases/analysis',
});

export default function AnalysisPage() {
  const items = blog.map((b) => ({
    slug: b.slug,
    title: b.title,
    date: b.date,
    category: b.category,
    excerpt: b.excerpt,
  }));
  return (
    <>
      <PageHero
        eyebrow="ANALYSIS & TRENDS"
        title="사례분석 · 최신동향"
        description="실제 사건 처리에 기반한 변호사의 관점, 그리고 법률 시장의 핵심 흐름을 정리합니다."
      />
      <section className="section">
        <div className="container">
          <BoardList items={items} />
        </div>
      </section>
    </>
  );
}

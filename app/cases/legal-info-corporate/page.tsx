import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { BoardList } from '@/components/ui/board-list';
import blog from '@/content/blog.json';

export const metadata = buildPageMetadata({
  title: '법률정보 (법인)',
  description: '기업 자문에서 자주 등장하는 이슈와 법률 정보를 정리한 코너입니다.',
  path: '/cases/legal-info-corporate',
});

export default function CorporateLegalInfoPage() {
  const items = blog
    .filter((b) => ['민사 · 손해배상', '회생 · 파산'].includes(b.category))
    .map((b) => ({
      slug: b.slug,
      title: b.title,
      date: b.date,
      category: b.category,
      excerpt: b.excerpt,
    }));
  return (
    <>
      <PageHero
        eyebrow="CORPORATE LEGAL"
        title="법률정보 (법인)"
        description="기업 자문, 노무, 계약, 회생·파산 등 법인 의뢰인을 위한 실무 법률 정보."
      />
      <section className="section">
        <div className="container">
          <BoardList items={items} />
        </div>
      </section>
    </>
  );
}

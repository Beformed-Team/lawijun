import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { BoardList } from '@/components/ui/board-list';
import blog from '@/content/blog.json';

export const metadata = buildPageMetadata({
  title: '법률정보 (개인)',
  description: '형사, 가사, 외국인 업무 등 개인 의뢰인이 자주 묻는 법률 이슈 정리.',
  path: '/cases/legal-info-personal',
});

export default function PersonalLegalInfoPage() {
  const items = blog
    .filter((b) =>
      ['형사 · 성범죄', '가사 · 이혼', '외국인 업무'].includes(b.category),
    )
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
        eyebrow="PERSONAL LEGAL"
        title="법률정보 (개인)"
        description="형사, 가사, 외국인 업무 등 개인 의뢰인 관점의 실무 법률 정보를 안내합니다."
      />
      <section className="section">
        <div className="container">
          <BoardList items={items} />
        </div>
      </section>
    </>
  );
}

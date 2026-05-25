import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { BoardList } from '@/components/ui/board-list';
import notices from '@/content/notices.json';

export const metadata = buildPageMetadata({
  title: '공지사항',
  description: '법무법인 이준 강북 분사무소의 운영, 행사, 변경 사항을 안내합니다.',
  path: '/news/notice',
});

export default function NoticePage() {
  const items = notices.map((n) => ({
    slug: n.slug,
    title: n.title,
    date: n.date,
    category: n.category,
    excerpt: n.body.slice(0, 100),
  }));
  return (
    <>
      <PageHero
        eyebrow="NOTICE"
        title="공지사항"
        description="법인 운영과 행사에 관한 새 소식을 안내해 드립니다."
      />
      <section className="section">
        <div className="container">
          <BoardList items={items} basePath="/news/notice" />
        </div>
      </section>
    </>
  );
}

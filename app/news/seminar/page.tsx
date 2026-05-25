import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { SeminarCard } from '@/components/sections/SeminarCard';
import seminars from '@/content/seminars.json';

export const metadata = buildPageMetadata({
  title: '세미나',
  description: '법무법인 이준 강북 분사무소가 개최하는 무료 법률 세미나와 상담회.',
  path: '/news/seminar',
});

export default function SeminarPage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = seminars.filter((s) => new Date(s.date) >= today);
  const past = seminars.filter((s) => new Date(s.date) < today);

  return (
    <>
      <PageHero
        eyebrow="SEMINAR"
        title="세미나"
        description="정기 세미나, 무료 상담회, 분야별 워크숍 일정을 안내해 드립니다."
      />
      <section className="section">
        <div className="container space-y-12">
          {upcoming.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-brand-navy">예정된 세미나</h2>
              <p className="mt-1 text-sm text-brand-gray">
                내용보기 또는 참석신청 버튼을 눌러 자세한 일정을 확인하세요.
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {upcoming.map((s) => (
                  <SeminarCard key={s.slug} seminar={s} closed={false} />
                ))}
              </div>
            </div>
          )}

          {past.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-brand-navy">지난 세미나</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {past.map((s) => (
                  <SeminarCard key={s.slug} seminar={s} closed />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

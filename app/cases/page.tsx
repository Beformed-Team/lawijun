import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { Badge } from '@/components/ui/badge';
import cases from '@/content/cases.json';
import { formatDate } from '@/lib/utils';

export const metadata = buildPageMetadata({
  title: '주요 업무사례',
  description: '법무법인 이준 강북 분사무소에서 진행한 분야별 주요 업무사례를 소개합니다.',
  path: '/cases',
});

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="MAJOR CASES"
        title="주요 업무사례"
        description="다양한 분야의 사건에서 의뢰인의 권익을 지켜온 법무법인 이준의 발자취입니다."
      />
      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((c) => (
              <article
                key={c.id}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="gold">{c.category}</Badge>
                  <span className="text-xs text-brand-gray">{formatDate(c.date)}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug text-brand-navy">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-gray">{c.summary}</p>
                <div className="mt-5 rounded-lg bg-brand-navy/5 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-navy/70">
                    결과
                  </p>
                  <p className="mt-1 text-sm font-medium text-brand-navy">{c.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

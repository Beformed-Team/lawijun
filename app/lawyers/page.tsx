import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { Badge } from '@/components/ui/badge';
import lawyers from '@/content/lawyers.json';

export const metadata = buildPageMetadata({
  title: '구성원 소개',
  description:
    '법무법인 이준 강북 분사무소의 변호사 구성원과 각 분야별 전문성 및 주요 경력을 소개합니다.',
  path: '/lawyers',
});

export default function LawyersPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR LAWYERS"
        title="법무법인 이준 구성원 소개"
        description="회생·파산, 민사, 형사, 가사, 외국인 업무 전 분야의 전문 변호사가 함께합니다."
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {lawyers.map((lawyer) => (
              <article
                key={lawyer.slug}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/5] bg-slate-100">
                  <Image
                    src={lawyer.photo}
                    alt={`${lawyer.name} 변호사 프로필 사진`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    {lawyer.role}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-brand-navy">{lawyer.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {lawyer.expertise.map((e) => (
                      <Badge key={e} variant="outline">
                        {e}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3 text-sm">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray">
                        학력
                      </p>
                      <ul className="mt-1 space-y-0.5 text-brand-navy-dark/80">
                        {lawyer.education.map((edu) => (
                          <li key={edu}>· {edu}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray">
                        주요 경력
                      </p>
                      <ul className="mt-1 space-y-0.5 text-brand-navy-dark/80">
                        {lawyer.career.map((c) => (
                          <li key={c}>· {c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

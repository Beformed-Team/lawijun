import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { Building2 } from 'lucide-react';
import partners from '@/content/partners.json';

export const metadata = buildPageMetadata({
  title: '업무협력 · 법률자문 기업',
  description:
    '법무법인 이준 강북 분사무소가 함께 일하고 있는 협력사와 법률 자문 제공 기업을 소개합니다.',
  path: '/about/partners',
});

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="PARTNERS"
        title="업무협력 · 법률자문 기업"
        description="다양한 산업의 기업과 기관이 법무법인 이준과 함께 안정적인 법률 인프라를 구축하고 있습니다."
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <div
                key={p.name}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-base font-semibold text-brand-navy">{p.name}</p>
                  <p className="mt-1 text-sm text-brand-gray">
                    {p.field} · 자문 시작 {p.since}년
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-brand-gray">
            * 협력사 명단은 보안 정책에 따라 일부 익명 처리되어 있습니다. 자문 사례 문의는 별도
            상담 신청 후 안내드립니다.
          </p>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { ArrowUpRight, Gavel, Globe, Scale, ShieldCheck, Users } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { practiceAreas } from '@/lib/nav';

const iconMap = { Scale, Gavel, ShieldCheck, Users, Globe };

export function PracticeAreas() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <SectionHeading
          eyebrow="PRACTICE AREAS"
          title="법무법인 이준의 주요 업무분야"
          description="다양한 분야의 전문 변호사들이 협업하여, 의뢰인이 직면한 모든 법률 문제에 통합 솔루션을 제공합니다."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap] ?? Scale;
            return (
              <Link
                key={area.slug}
                href={`/practice/${area.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-brand-navy/40 hover:shadow-lg"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy">{area.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-gray">
                  {area.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-gold">
                  자세히 보기
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

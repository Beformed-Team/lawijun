import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Badge } from '@/components/ui/badge';
import cases from '@/content/cases.json';

export function FeaturedCases() {
  const featured = cases.slice(0, 4);
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="MAJOR CASES"
            title="법무법인 이준의 주요 업무사례"
            description="다양한 분야에서 축적한 승소 경험과 전략적 자문 사례를 소개합니다."
            className="mb-0"
          />
          <Link
            href="/cases"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-navy hover:text-brand-gold"
          >
            전체 사례 보기 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {featured.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <Badge variant="gold">{item.category}</Badge>
                <span className="text-xs text-brand-gray">{item.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug text-brand-navy group-hover:text-brand-gold">
                {item.title}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-brand-gray">
                {item.summary}
              </p>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-brand-navy/70">
                {item.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

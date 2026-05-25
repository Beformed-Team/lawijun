import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import practice from '@/content/practice.json';
import { practiceAreas } from '@/lib/nav';
import { PageHero } from '@/components/ui/page-hero';
import { Button } from '@/components/ui/button';
import { buildPageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

type PracticeKey = keyof typeof practice;

export function generateStaticParams() {
  return practiceAreas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const data = (practice as Record<string, (typeof practice)[PracticeKey]>)[params.slug];
  if (!data) return {};
  return buildPageMetadata({
    title: `업무분야 - ${data.title}`,
    description: data.description.slice(0, 140),
    path: `/practice/${params.slug}`,
  });
}

export default function PracticeDetailPage({ params }: { params: { slug: string } }) {
  const data = (practice as Record<string, (typeof practice)[PracticeKey]>)[params.slug];
  if (!data) notFound();

  return (
    <>
      <PageHero eyebrow="PRACTICE AREA" title={data.title} description={data.lead} />

      <section className="section">
        <div className="container grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="section-eyebrow">OVERVIEW</p>
            <h2 className="section-title">{data.title} 분야 자문</h2>
            <p className="mt-6 text-base leading-relaxed text-brand-navy-dark/80 md:text-lg">
              {data.description}
            </p>
            <ul className="mt-8 space-y-3">
              {data.scopes.map((s: string) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                  <span className="text-sm text-brand-navy-dark/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={data.image}
              alt={data.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <p className="section-eyebrow text-center">PROCESS</p>
          <h2 className="section-title text-center">사건 진행 프로세스</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {data.process.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  STEP
                </p>
                <p className="mt-2 text-lg font-bold text-brand-navy">{p.step}</p>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="rounded-2xl bg-brand-navy p-10 text-white md:p-14">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="section-eyebrow">CONSULT</p>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {data.title} 사건, 지금 바로 상담받으세요
                </h3>
                <p className="mt-3 text-sm text-white/80 md:text-base">
                  사건 초기 대응이 결과를 좌우합니다. 첫 상담은 비공개로 진행됩니다.
                </p>
              </div>
              <Button href="/contact" size="lg" variant="gold">
                상담 신청 <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {practiceAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/practice/${a.slug}`}
                className={`rounded-xl border px-4 py-3 text-center text-sm font-medium transition-colors ${
                  a.slug === params.slug
                    ? 'border-brand-navy bg-brand-navy text-white'
                    : 'border-slate-200 bg-white text-brand-navy hover:border-brand-navy/40'
                }`}
              >
                {a.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

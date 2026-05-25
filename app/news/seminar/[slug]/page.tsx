import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, MapPin, Mic2, Users } from 'lucide-react';
import { buildPageMetadata } from '@/lib/seo';
import { Badge } from '@/components/ui/badge';
import { SeminarApplyButton } from '@/components/sections/SeminarApplyButton';
import seminars from '@/content/seminars.json';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return seminars.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = seminars.find((s) => s.slug === params.slug);
  if (!item) return {};
  return buildPageMetadata({
    title: item.title,
    description: item.summary,
    path: `/news/seminar/${item.slug}`,
  });
}

export default function SeminarDetailPage({ params }: { params: { slug: string } }) {
  const item = seminars.find((s) => s.slug === params.slug);
  if (!item) notFound();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const closed = new Date(item.date) < today;

  return (
    <article className="container max-w-4xl py-16 md:py-20">
      <Link
        href="/news/seminar"
        className="inline-flex items-center gap-1 text-sm font-medium text-brand-gray hover:text-brand-navy"
      >
        <ArrowLeft className="h-4 w-4" /> 세미나 목록으로
      </Link>

      <header className="mt-6">
        <Badge variant={closed ? 'outline' : 'gold'}>{closed ? '접수 마감' : '접수중'}</Badge>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-navy md:text-4xl">
          {item.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-gray md:text-lg">
          {item.summary}
        </p>
      </header>

      <section className="mt-10 grid gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2">
        <div className="flex items-start gap-3">
          <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray">일자</p>
            <p className="text-sm font-medium text-brand-navy">{formatDate(item.date)}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray">시간</p>
            <p className="text-sm font-medium text-brand-navy">{item.time}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray">장소</p>
            <p className="text-sm font-medium text-brand-navy">{item.location}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Users className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray">정원</p>
            <p className="text-sm font-medium text-brand-navy">
              {item.capacity}명 · 주관 {item.host}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-brand-navy">세미나 안내</h2>
        <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-brand-navy-dark/85">
          {item.detail}
        </p>
      </section>

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-brand-navy">
            <span className="inline-flex items-center gap-2">
              <Mic2 className="h-5 w-5 text-brand-gold" /> 발표자
            </span>
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-brand-navy-dark/85">
            {item.speakers.map((s) => (
              <li key={s}>· {s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-brand-navy">진행 순서</h2>
          <ul className="mt-4 space-y-1.5 text-sm text-brand-navy-dark/85">
            {item.agenda.map((a) => (
              <li key={a}>· {a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-brand-navy p-8 text-white md:p-10">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
              참석 신청
            </p>
            <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
              {closed ? '접수가 마감되었습니다' : '지금 참석 신청하세요'}
            </h3>
            <p className="mt-2 text-sm text-white/80">
              {closed
                ? '본 세미나의 신청은 종료되었습니다. 다음 세미나 일정을 안내해 드리겠습니다.'
                : '간단한 정보 입력만으로 참석 신청이 완료됩니다. 정원이 마감되면 자동으로 접수가 종료됩니다.'}
            </p>
          </div>
          <SeminarApplyButton
            seminar={{
              slug: item.slug,
              title: item.title,
              date: item.date,
              time: item.time,
              location: item.location,
              host: item.host,
              capacity: item.capacity,
              summary: item.summary,
            }}
            closed={closed}
          />
        </div>
      </section>
    </article>
  );
}

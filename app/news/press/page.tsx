import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { formatDate } from '@/lib/utils';
import press from '@/content/press.json';
import { ExternalLink } from 'lucide-react';

export const metadata = buildPageMetadata({
  title: '언론보도',
  description: '법무법인 이준 강북 분사무소가 언론에 소개된 보도 자료 모음.',
  path: '/news/press',
});

export default function PressPage() {
  return (
    <>
      <PageHero
        eyebrow="PRESS"
        title="언론보도"
        description="법무법인 이준의 활동이 언론에 소개된 기사들을 모았습니다."
      />
      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {press.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={item.thumbnail}
                    alt={`${item.media} - ${item.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-brand-gray">
                    <span className="font-medium text-brand-gold">{item.media}</span>
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <h3 className="mt-3 line-clamp-2 text-base font-semibold text-brand-navy group-hover:text-brand-gold">
                    {item.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-brand-navy-dark/70">
                    원문 보기 <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

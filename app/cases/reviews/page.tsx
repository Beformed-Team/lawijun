import { Star } from 'lucide-react';
import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { Badge } from '@/components/ui/badge';
import testimonials from '@/content/testimonials.json';
import { formatDate } from '@/lib/utils';

export const metadata = buildPageMetadata({
  title: '고객후기',
  description: '법무법인 이준 강북 분사무소를 경험한 의뢰인들이 직접 남긴 후기.',
  path: '/cases/reviews',
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="CLIENT REVIEWS"
        title="고객후기"
        description="법무법인 이준과 함께한 의뢰인들이 전하는 진솔한 이야기."
      />
      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="gold">{t.category}</Badge>
                  <span className="text-xs text-brand-gray">{formatDate(t.date)}</span>
                </div>
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < t.rating
                          ? 'fill-brand-gold text-brand-gold'
                          : 'fill-none text-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-brand-navy-dark/80">
                  &ldquo;{t.content}&rdquo;
                </p>
                <p className="mt-5 text-sm font-medium text-brand-navy">{t.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

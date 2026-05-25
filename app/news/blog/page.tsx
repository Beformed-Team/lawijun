import Image from 'next/image';
import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import blog from '@/content/blog.json';

export const metadata = buildPageMetadata({
  title: '법률 블로그',
  description: '법무법인 이준 변호사들이 직접 작성하는 법률 인사이트와 실무 가이드.',
  path: '/news/blog',
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="BLOG"
        title="법률 블로그"
        description="실무에서 마주친 사안과 판례 흐름을 변호사가 직접 정리한 콘텐츠를 소개합니다."
      />
      <section className="section">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blog.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline">{post.category}</Badge>
                  <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-brand-navy">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-brand-gray">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-brand-gray">{formatDate(post.date)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

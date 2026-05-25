import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import notices from '@/content/notices.json';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { buildPageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return notices.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = notices.find((n) => n.slug === params.slug);
  if (!item) return {};
  return buildPageMetadata({
    title: item.title,
    description: item.body.slice(0, 140),
    path: `/news/notice/${item.slug}`,
  });
}

export default function NoticeDetailPage({ params }: { params: { slug: string } }) {
  const item = notices.find((n) => n.slug === params.slug);
  if (!item) notFound();

  return (
    <article className="container max-w-3xl py-16 md:py-20">
      <Link
        href="/news/notice"
        className="inline-flex items-center gap-1 text-sm font-medium text-brand-gray hover:text-brand-navy"
      >
        <ArrowLeft className="h-4 w-4" /> 공지사항 목록으로
      </Link>
      <div className="mt-6">
        <Badge variant="gold">{item.category}</Badge>
      </div>
      <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-navy md:text-4xl">
        {item.title}
      </h1>
      <p className="mt-3 text-sm text-brand-gray">{formatDate(item.date)}</p>
      <hr className="my-8 border-slate-200" />
      <div className="prose-legal space-y-4 whitespace-pre-line text-base leading-relaxed">
        {item.body}
      </div>
    </article>
  );
}

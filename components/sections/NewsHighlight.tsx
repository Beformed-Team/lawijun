import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import notices from '@/content/notices.json';
import press from '@/content/press.json';

export function NewsHighlight() {
  const latestNotices = notices.slice(0, 4);
  const latestPress = press.slice(0, 4);
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-brand-navy">공지사항</h3>
              <Link
                href="/news/notice"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-navy hover:text-brand-gold"
              >
                더 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-6 divide-y divide-slate-100">
              {latestNotices.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/news/notice/${n.slug}`}
                    className="flex items-start justify-between gap-3 py-4 hover:text-brand-gold"
                  >
                    <span className="line-clamp-1 text-sm font-medium text-brand-navy-dark">
                      {n.title}
                    </span>
                    <span className="flex-shrink-0 text-xs text-brand-gray">
                      {formatDate(n.date)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-brand-navy">언론보도</h3>
              <Link
                href="/news/press"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-navy hover:text-brand-gold"
              >
                더 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-6 divide-y divide-slate-100">
              {latestPress.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-3 py-4 hover:text-brand-gold"
                  >
                    <div className="min-w-0">
                      <p className="line-clamp-1 text-sm font-medium text-brand-navy-dark">
                        {p.title}
                      </p>
                      <p className="mt-1 text-xs text-brand-gray">{p.media}</p>
                    </div>
                    <span className="flex-shrink-0 text-xs text-brand-gray">
                      {formatDate(p.date)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

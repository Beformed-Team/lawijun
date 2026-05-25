'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Download, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

type Item = {
  id: string;
  issue: string;
  title: string;
  group: string;
  date: string;
  summary: string;
  thumbnail: string;
  fileSize: string;
};

interface Props {
  newsletters: Item[];
  brochures: Item[];
}

export function NewsletterTabs({ newsletters, brochures }: Props) {
  const [tab, setTab] = useState<'newsletter' | 'brochure'>('newsletter');
  const [query, setQuery] = useState('');

  const data = tab === 'newsletter' ? newsletters : brochures;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter(
      (it) =>
        it.title.toLowerCase().includes(q) ||
        it.group.toLowerCase().includes(q) ||
        it.summary.toLowerCase().includes(q),
    );
  }, [data, query]);

  return (
    <div>
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="inline-flex rounded-full bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setTab('newsletter')}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
              tab === 'newsletter'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'text-brand-gray hover:text-brand-navy'
            }`}
          >
            뉴스레터 · {newsletters.length}
          </button>
          <button
            type="button"
            onClick={() => setTab('brochure')}
            className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
              tab === 'brochure'
                ? 'bg-brand-navy text-white shadow-sm'
                : 'text-brand-gray hover:text-brand-navy'
            }`}
          >
            브로슈어 · {brochures.length}
          </button>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-gray" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="제목 · 분야 검색"
            className="pl-9"
            aria-label="자료 검색"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-slate-300 py-20 text-center text-sm text-brand-gray">
          검색 결과가 없습니다.
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-md bg-brand-navy/90 px-2 py-1 text-xs font-semibold text-white">
                  {item.issue}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Badge variant="outline">{item.group}</Badge>
                <h3 className="mt-3 line-clamp-2 text-base font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-brand-gray">
                  {item.summary}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs text-brand-gray">{item.fileSize}</span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-navy hover:text-brand-gold"
                  >
                    <Download className="h-4 w-4" /> 다운로드
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-14 rounded-2xl bg-brand-navy p-8 text-white md:p-12">
        <div className="grid items-center gap-6 md:grid-cols-[2fr_1fr]">
          <div>
            <h3 className="text-xl font-bold text-white md:text-2xl">
              뉴스레터 구독 신청
            </h3>
            <p className="mt-2 text-sm text-white/80">
              매월 1회 법률 동향과 사례 분석을 이메일로 받아보세요. 언제든 구독을 해지하실 수 있습니다.
            </p>
          </div>
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
}

function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
  };

  if (submitted) {
    return (
      <p className="rounded-md bg-white/10 px-4 py-3 text-sm text-white">
        구독 신청이 접수되었습니다. 다음 호부터 받아보실 수 있습니다.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일 주소"
        className="rounded-md border border-white/20 bg-white/5 px-3 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-gold"
      />
      <button
        type="submit"
        className="rounded-md bg-brand-gold px-4 py-3 text-sm font-semibold text-white hover:bg-brand-gold/90"
      >
        구독 신청
      </button>
    </form>
  );
}

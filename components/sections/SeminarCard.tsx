'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SeminarApplyModal } from '@/components/sections/SeminarApplyModal';
import { formatDate } from '@/lib/utils';

export type SeminarSummary = {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  host: string;
  capacity: number;
  summary: string;
};

interface Props {
  seminar: SeminarSummary;
  closed: boolean;
}

export function SeminarCard({ seminar, closed }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <article
        className={
          closed
            ? 'rounded-2xl border border-slate-200 bg-white p-7 shadow-sm'
            : 'rounded-2xl border border-brand-navy/20 bg-brand-navy/[0.03] p-7 shadow-sm'
        }
      >
        <Badge variant={closed ? 'outline' : 'gold'}>{closed ? '접수 마감' : '접수중'}</Badge>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-brand-navy">
          {seminar.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-gray">{seminar.summary}</p>
        <div className="mt-5 space-y-2 text-sm text-brand-navy-dark/80">
          <p className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-brand-gold" /> {formatDate(seminar.date)} · {seminar.time}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-gold" /> {seminar.location}
          </p>
          <p className="flex items-center gap-2">
            <Users className="h-4 w-4 text-brand-gold" /> 정원 {seminar.capacity}명 · 주관 {seminar.host}
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2">
          <Button href={`/news/seminar/${seminar.slug}`} variant="secondary" size="sm">
            내용보기
          </Button>
          {closed ? (
            <button
              type="button"
              disabled
              className="inline-flex h-9 cursor-not-allowed items-center justify-center rounded-md bg-slate-200 px-4 text-sm font-medium text-slate-500"
            >
              마감
            </button>
          ) : (
            <Button type="button" size="sm" onClick={() => setOpen(true)}>
              참석신청
            </Button>
          )}
        </div>
      </article>
      {!closed && (
        <SeminarApplyModal
          open={open}
          onClose={() => setOpen(false)}
          seminar={seminar}
        />
      )}
    </>
  );
}

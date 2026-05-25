'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SeminarApplyModal } from '@/components/sections/SeminarApplyModal';
import type { SeminarSummary } from '@/components/sections/SeminarCard';

interface Props {
  seminar: SeminarSummary;
  closed: boolean;
}

export function SeminarApplyButton({ seminar, closed }: Props) {
  const [open, setOpen] = useState(false);
  if (closed) {
    return (
      <button
        type="button"
        disabled
        className="inline-flex h-12 cursor-not-allowed items-center justify-center rounded-md bg-white/20 px-8 text-base font-semibold text-white/60"
      >
        마감
      </button>
    );
  }
  return (
    <>
      <Button type="button" variant="gold" size="lg" onClick={() => setOpen(true)}>
        참석 신청
      </Button>
      <SeminarApplyModal open={open} onClose={() => setOpen(false)} seminar={seminar} />
    </>
  );
}

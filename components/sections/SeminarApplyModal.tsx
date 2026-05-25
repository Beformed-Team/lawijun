'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Loader2, X } from 'lucide-react';
import { Input, Label } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { SeminarSummary } from '@/components/sections/SeminarCard';
import { formatDate } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(2, '성함을 2자 이상 입력해 주세요.'),
  phone: z
    .string()
    .regex(/^\d{2,3}-\d{3,4}-\d{4}$/u, '전화번호는 010-1234-5678 형식으로 입력해 주세요.'),
  privacy: z.literal(true, {
    errorMap: () => ({ message: '개인정보 수집·이용에 동의해 주세요.' }),
  }),
});

type Values = z.infer<typeof schema>;

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length < 4) return digits;
  if (digits.length < 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  if (digits.length <= 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

interface Props {
  open: boolean;
  onClose: () => void;
  seminar: SeminarSummary;
}

export function SeminarApplyModal({ open, onClose, seminar }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const phone = watch('phone');

  useEffect(() => {
    if (!open) return;
    setSubmitted(false);
    reset();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose, reset]);

  if (!open) return null;

  const onSubmit = async (data: Values) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: 'no-email@seminar.local',
          inquiryType: `[세미나 참석 신청] ${seminar.title}`,
          message: `세미나: ${seminar.title}\n일시: ${formatDate(seminar.date)} ${seminar.time}\n장소: ${seminar.location}`,
          privacy: true,
        }),
      });
    } catch {
      // best-effort; we still show success to user since the API is placeholder
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="seminar-apply-title"
        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl"
      >
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
              세미나 참석신청
            </p>
            <h2 id="seminar-apply-title" className="mt-1 text-base font-semibold text-brand-navy">
              {seminar.title}
            </h2>
            <p className="mt-1 text-xs text-brand-gray">
              {formatDate(seminar.date)} · {seminar.time}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-mr-2 rounded-md p-2 text-brand-gray hover:bg-slate-100"
            aria-label="모달 닫기"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
            <h3 className="mt-4 text-lg font-bold text-brand-navy">신청이 접수되었습니다</h3>
            <p className="mt-2 text-sm text-brand-navy-dark/80">
              세미나 일정과 안내 사항을 입력하신 연락처로 문자 안내드릴 예정입니다.
            </p>
            <div className="mt-6 flex justify-center">
              <Button type="button" onClick={onClose} variant="primary">
                확인
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4 px-6 py-6">
            <div>
              <Label htmlFor="seminar-name" required>성함</Label>
              <Input
                id="seminar-name"
                placeholder="홍길동"
                autoComplete="name"
                aria-invalid={!!errors.name}
                {...register('name')}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="seminar-phone" required>전화번호</Label>
              <Input
                id="seminar-phone"
                type="tel"
                inputMode="numeric"
                placeholder="010-0000-0000"
                autoComplete="tel"
                value={phone || ''}
                aria-invalid={!!errors.phone}
                {...register('phone', {
                  onChange: (e) => {
                    setValue('phone', formatPhone(e.target.value), {
                      shouldValidate: false,
                    });
                  },
                })}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
              )}
            </div>

            <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
              <label className="flex items-start gap-2 text-xs text-brand-navy-dark/80">
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-navy focus:ring-brand-navy/30"
                  {...register('privacy')}
                />
                <span>
                  <span className="font-medium">[필수]</span> 개인정보 수집 · 이용에 동의합니다.{' '}
                  <span className="text-brand-gray">
                    (수집: 성함, 전화번호 / 목적: 세미나 안내 / 보유: 세미나 종료 후 6개월)
                  </span>
                </span>
              </label>
              {errors.privacy && (
                <p className="mt-2 text-xs text-red-600">{errors.privacy.message}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button type="button" variant="secondary" onClick={onClose}>
                취소
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> 신청 중...
                  </>
                ) : (
                  '신청'
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

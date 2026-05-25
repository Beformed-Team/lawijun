'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Input, Textarea, Select, Label } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const contactSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상 입력해 주세요.'),
  phone: z
    .string()
    .min(9, '연락처를 정확히 입력해 주세요.')
    .regex(/^[0-9\-+()\s]+$/u, '숫자와 하이픈만 입력 가능합니다.'),
  email: z.string().email('유효한 이메일 주소를 입력해 주세요.'),
  inquiryType: z.string().min(1, '문의 분야를 선택해 주세요.'),
  message: z.string().min(10, '문의 내용을 10자 이상 입력해 주세요.'),
  privacy: z.literal(true, {
    errorMap: () => ({ message: '개인정보 수집·이용에 동의해 주세요.' }),
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inquiryTypes = [
  '회생 · 파산',
  '민사 · 손해배상',
  '형사 · 성범죄',
  '가사 · 이혼',
  '외국인 업무',
  '기업 자문',
  '기타',
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('failed');
      setSubmitted(true);
      reset();
    } catch {
      window.location.href = `mailto:info@lawfirmyijun.com?subject=${encodeURIComponent(
        '[홈페이지] 법률 상담 신청 - ' + data.name,
      )}&body=${encodeURIComponent(
        `이름: ${data.name}\n연락처: ${data.phone}\n이메일: ${data.email}\n분야: ${data.inquiryType}\n\n${data.message}`,
      )}`;
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 text-xl font-bold text-brand-navy">상담 신청이 접수되었습니다</h3>
        <p className="mt-2 text-sm text-brand-navy-dark/80">
          영업일 기준 1일 이내 입력해 주신 연락처로 답변드리겠습니다.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="secondary" className="mt-6">
          새 상담 신청
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="name" required>이름</Label>
          <Input
            id="name"
            placeholder="홍길동"
            aria-invalid={!!errors.name}
            {...register('name')}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone" required>연락처</Label>
          <Input
            id="phone"
            placeholder="010-0000-0000"
            aria-invalid={!!errors.phone}
            {...register('phone')}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="email" required>이메일</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          aria-invalid={!!errors.email}
          {...register('email')}
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="inquiryType" required>문의 분야</Label>
        <Select id="inquiryType" aria-invalid={!!errors.inquiryType} {...register('inquiryType')}>
          <option value="">분야를 선택해 주세요</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>
        {errors.inquiryType && (
          <p className="mt-1 text-xs text-red-600">{errors.inquiryType.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message" required>문의 내용</Label>
        <Textarea
          id="message"
          placeholder="사건의 경위와 현재 상황을 가능한 한 구체적으로 작성해 주세요."
          aria-invalid={!!errors.message}
          {...register('message')}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
        <label className="flex items-start gap-3 text-sm text-brand-navy-dark/80">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-navy focus:ring-brand-navy/30"
            {...register('privacy')}
          />
          <span>
            <span className="font-medium">[필수]</span> 개인정보 수집 · 이용에 동의합니다.{' '}
            <span className="text-brand-gray">
              (수집 항목: 이름, 연락처, 이메일, 문의 내용 / 이용 목적: 법률 상담 응대 / 보유 기간: 상담 완료 후 1년)
            </span>
          </span>
        </label>
        {errors.privacy && (
          <p className="mt-2 text-xs text-red-600">{errors.privacy.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> 접수 중...
          </>
        ) : (
          '상담 신청 보내기'
        )}
      </Button>
    </form>
  );
}

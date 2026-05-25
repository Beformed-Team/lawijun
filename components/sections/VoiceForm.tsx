'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Input, Textarea, Select, Label } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  category: z.string().min(1, '의견 유형을 선택해 주세요.'),
  name: z.string().min(2, '성명 또는 기업명을 입력해 주세요.'),
  email: z.string().email('유효한 이메일 주소를 입력해 주세요.'),
  phone: z
    .string()
    .min(9, '연락처를 정확히 입력해 주세요.')
    .regex(/^[0-9\-+()\s]+$/u, '숫자와 하이픈만 입력 가능합니다.'),
  message: z.string().min(10, '의견 내용을 10자 이상 입력해 주세요.'),
  privacy: z.literal(true, {
    errorMap: () => ({ message: '개인정보 수집·이용에 동의해 주세요.' }),
  }),
});

type Values = z.infer<typeof schema>;

const categories = ['칭찬 · 격려', '제안 사항', '불만 · 신고', '기타 문의'];

export function VoiceForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Values) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          inquiryType: `[고객의 소리] ${data.category}`,
          message: data.message,
          privacy: true,
        }),
      });
      if (!res.ok) throw new Error('failed');
      setSubmitted(true);
      reset();
    } catch {
      window.location.href = `mailto:info@lawfirmyijun.com?subject=${encodeURIComponent(
        '[고객의 소리] ' + data.category + ' - ' + data.name,
      )}&body=${encodeURIComponent(
        `유형: ${data.category}\n성명/기업명: ${data.name}\n연락처: ${data.phone}\n이메일: ${data.email}\n\n${data.message}`,
      )}`;
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 text-xl font-bold text-brand-navy">의견이 접수되었습니다</h3>
        <p className="mt-2 text-sm text-brand-navy-dark/80">
          소중한 의견 감사합니다. 책임자가 직접 검토 후 회신드리겠습니다.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="secondary" className="mt-6">
          새 의견 보내기
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <Label htmlFor="category" required>의견 유형</Label>
        <Select id="category" aria-invalid={!!errors.category} {...register('category')}>
          <option value="">유형을 선택해 주세요</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Select>
        {errors.category && (
          <p className="mt-1 text-xs text-red-600">{errors.category.message}</p>
        )}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="name" required>성명 / 기업명</Label>
          <Input id="name" placeholder="홍길동 또는 ○○주식회사" {...register('name')} />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="phone" required>연락처</Label>
          <Input id="phone" placeholder="010-0000-0000" {...register('phone')} />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="email" required>이메일</Label>
        <Input id="email" type="email" placeholder="name@example.com" {...register('email')} />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="message" required>내용</Label>
        <Textarea
          id="message"
          placeholder="법무법인 이준 강북 분사무소에 전하고 싶은 의견을 자유롭게 작성해 주세요."
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
              (수집: 성명, 연락처, 이메일, 의견 / 목적: 의견 응대 / 보유: 응대 완료 후 1년)
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
          '의견 보내기'
        )}
      </Button>
    </form>
  );
}

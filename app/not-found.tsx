import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">404</p>
      <h1 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-4 max-w-md text-sm text-brand-gray md:text-base">
        주소가 변경되었거나 더 이상 존재하지 않는 페이지입니다. 다시 한 번 확인해 주세요.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/" variant="primary">홈으로</Button>
        <Button href="/contact" variant="secondary">상담 문의</Button>
      </div>
      <Link
        href="/news/notice"
        className="mt-6 text-xs text-brand-gray hover:text-brand-navy"
      >
        최근 공지사항 보기 →
      </Link>
    </section>
  );
}

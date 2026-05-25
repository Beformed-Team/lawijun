import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="bg-pattern py-20 text-white md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">CONTACT</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            지금 바로 법률 상담을 신청하세요
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            사건이 더 복잡해지기 전에, 가장 빠른 순간에 정확한 진단을 받아보세요.
            법무법인 이준이 의뢰인의 입장에서 함께 해결책을 찾아드립니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" size="lg" variant="gold">
              온라인 상담 신청
            </Button>
            <Button href="tel:000-0000-0000" size="lg" variant="outline">
              <Phone className="h-4 w-4" />
              전화 상담
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

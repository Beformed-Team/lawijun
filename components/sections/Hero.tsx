'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=2000&q=80"
          alt="법무법인 이준의 도서관과 법전이 어우러진 사무공간"
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-dark via-brand-navy/95 to-brand-navy/80" />
      </div>

      <div className="container relative py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-brand-gold backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" /> LAW FIRM YIJUN · 강북 분사무소
          </span>
          <h1 className="mt-6 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            의뢰인의 곁에서,
            <br />
            <span className="text-brand-gold">끝까지 책임지는 법률 파트너</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            회생·파산, 민사, 형사, 가사, 외국인 업무 등 인생의 결정적 순간에 법무법인 이준이
            함께합니다. 빠른 진단, 명확한 전략, 끝까지 함께하는 동행을 약속드립니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="/contact" size="lg" variant="gold">
              법률 상담 신청
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="tel:000-0000-0000" size="lg" variant="outline">
              <Phone className="h-4 w-4" />
              전화로 바로 상담
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-4"
        >
          {[
            { label: '풍부한 자문 경험', value: '1,000+' },
            { label: '주요 업무분야', value: '5개' },
            { label: '구성원 변호사', value: '다수' },
            { label: '연중무휴 접수', value: '24/7' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-brand-gold md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

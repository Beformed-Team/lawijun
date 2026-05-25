'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, Scale, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

const values = [
  {
    icon: Scale,
    title: '정확한 법률 진단',
    description:
      '의뢰인의 문제를 깊이 듣고, 사실관계를 정밀하게 분석합니다. 가능한 시나리오를 명확히 안내합니다.',
  },
  {
    icon: HeartHandshake,
    title: '의뢰인 중심 소통',
    description:
      '진행 상황을 가감 없이 공유하고, 의뢰인이 원하는 결과를 함께 만들어가는 파트너가 됩니다.',
  },
  {
    icon: Sparkles,
    title: '검증된 전문성',
    description:
      '회생·파산부터 형사·가사·외국인 업무까지, 분야별 전문가가 사건의 본질을 정확히 파악합니다.',
  },
];

export function Values() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="WHY YIJUN"
          title="왜 법무법인 이준을 선택해야 할까요?"
          description="법은 결과를 만들어내는 도구입니다. 의뢰인의 삶과 사업을 지키기 위한 가장 합리적인 방법을 함께 찾아갑니다."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-brand-navy">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

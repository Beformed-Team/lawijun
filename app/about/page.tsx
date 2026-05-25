import Image from 'next/image';
import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Compass, HeartHandshake, Sparkles } from 'lucide-react';

export const metadata = buildPageMetadata({
  title: '소개',
  description:
    '법무법인 이준 강북 분사무소의 대표 인사말, 미션과 핵심 가치, CI(Corporate Identity)와 발자취를 소개합니다.',
  path: '/about',
});

const qualities = [
  { en: 'FASTER', ko: '더 빠르게' },
  { en: 'EASIER', ko: '더 쉽게' },
  { en: 'CLEARER', ko: '더 명확하게' },
  { en: 'DEEPER', ko: '더 정확하게' },
  { en: 'BETTER', ko: '더 탁월하게' },
];

const values = [
  {
    icon: Compass,
    title: '정직',
    desc: '가능성과 한계를 있는 그대로 설명합니다. 의뢰인의 신뢰가 곧 우리의 자산입니다.',
  },
  {
    icon: HeartHandshake,
    title: '동행',
    desc: '사건이 끝나는 그날까지, 결과 이후까지 의뢰인 곁에서 함께 책임집니다.',
  },
  {
    icon: Sparkles,
    title: '전문성',
    desc: '분야별 전문 변호사가 협업해 가장 정확한 법률 솔루션을 제시합니다.',
  },
  {
    icon: Award,
    title: '책임',
    desc: '결과에 책임을 지고, 사건을 회피하지 않으며 끝까지 의뢰인을 변호합니다.',
  },
];

const timeline = [
  { year: '2025', desc: '강북 분사무소 확장 이전, 외국인 업무 전담 그룹 신설' },
  { year: '2024', desc: '회생 · 파산 자문 누적 1,000건 돌파' },
  { year: '2023', desc: '강북 분사무소 개소, 종합 법률 자문 영역 확대' },
  { year: '2022', desc: '기업 자문 부문 신설 및 주요 협력사 확보' },
  { year: '2021', desc: '법무법인 이준 본사 설립' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT YIJUN"
        title="법무법인 이준 강북 분사무소"
        description="법률을 통해 의뢰인의 일상과 사업을 지키는 동반자가 되겠습니다."
      />

      <section className="section">
        <div className="container grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="법무법인 이준 강북 분사무소의 현대적인 사무공간"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <p className="section-eyebrow">GREETING</p>
            <h2 className="section-title">대표 인사말</h2>
            <div className="prose-legal mt-6 space-y-5">
              <p className="text-lg font-semibold leading-relaxed text-brand-navy">
                &ldquo;더 빠르게, 더 쉽게, 더 명확하게, 더 정확하게, 더 탁월하게.&rdquo;
              </p>
              <p>
                법무법인 이준은 의뢰인이 가장 어려운 순간에 가장 의지할 수 있는 법률 파트너가
                되겠다는 마음으로 출발했습니다. 강북 분사무소는 의뢰인이 보다 편안하게 법률 상담을
                받을 수 있도록 지역 거점에서 밀착 자문을 제공하기 위해 개소되었습니다.
              </p>
              <p>
                회생·파산, 민사, 형사, 가사, 외국인 업무 등 다양한 분야의 전문 변호사가 협업하여
                의뢰인의 법률 문제를 통합적으로 해결합니다. 빠른 응대, 명확한 진단, 끝까지
                책임지는 변호 활동을 약속드립니다.
              </p>
              <p className="font-semibold text-brand-navy">
                법무법인 이준 강북 분사무소 대표변호사 일동
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/lawyers" variant="primary">
                구성원 소개 보기 <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                법률 상담 신청
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeading
            eyebrow="OUR PROMISE"
            title="법무법인 이준의 다섯 가지 약속"
            description="모든 사건에 대해 의뢰인이 체감할 수 있는 다섯 가지 차이를 만들어 갑니다."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {qualities.map((q, i) => (
              <div
                key={q.en}
                className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-transform hover:-translate-y-1"
              >
                <span className="text-3xl font-bold text-brand-gold">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-3 text-xs font-semibold tracking-widest text-brand-gray">
                  {q.en}
                </p>
                <p className="mt-2 text-lg font-bold text-brand-navy">{q.ko}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="CORE VALUES"
            title="법무법인 이준의 4가지 핵심 가치"
            description="우리가 사건을 다루는 기준이자, 의뢰인과 마주하는 방식입니다."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-gray">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <SectionHeading
            eyebrow="CORPORATE IDENTITY"
            title="법무법인 이준 CI"
            description="법무법인 이준의 정체성을 담은 시각 언어입니다."
          />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-12 shadow-sm">
              <Image
                src="/logo.png"
                alt="법무법인 이준 시그니처 로고"
                width={320}
                height={120}
                className="h-auto w-full max-w-xs"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-navy">
                &lsquo;이준(以準)&rsquo; — 기준으로 삼다
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-navy-dark/80">
                법무법인 이준의 이름은 &ldquo;무엇을 기준으로 삼을 것인가&rdquo; 라는 질문에서
                출발했습니다. 의뢰인의 권익을 최우선 기준으로 삼아, 모든 사건을 정확하고
                책임감 있게 다루겠다는 다짐을 담았습니다.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Primary
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="h-10 w-10 rounded-md bg-brand-navy" />
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">Yijun Navy</p>
                      <p className="text-xs text-brand-gray">#0F2C4A</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Accent
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="h-10 w-10 rounded-md bg-brand-gold" />
                    <div>
                      <p className="text-sm font-semibold text-brand-navy">Trust Gold</p>
                      <p className="text-xs text-brand-gray">#B89461</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="HISTORY" title="법무법인 이준의 발자취" />
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-200 md:left-1/2" />
            <ul className="space-y-10">
              {timeline.map((item, i) => (
                <li
                  key={item.year}
                  className={`relative grid items-center gap-4 pl-10 md:grid-cols-2 md:pl-0 ${
                    i % 2 === 0 ? '' : 'md:[&>div:first-child]:order-2'
                  }`}
                >
                  <span className="absolute left-1 top-1.5 h-5 w-5 rounded-full border-4 border-brand-gold bg-white md:left-1/2 md:-translate-x-1/2" />
                  <div className="md:pr-10 md:text-right">
                    <p className="text-2xl font-bold text-brand-gold">{item.year}</p>
                  </div>
                  <div className="md:pl-10">
                    <p className="text-base text-brand-navy-dark/80">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/lawyers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold"
            >
              구성원 변호사 만나보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

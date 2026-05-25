import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { VoiceForm } from '@/components/sections/VoiceForm';
import { Heart, Lightbulb, MessageCircleWarning } from 'lucide-react';

export const metadata = buildPageMetadata({
  title: '고객의 소리',
  description:
    '법무법인 이준 강북 분사무소를 찾아주신 고객님의 소중한 의견을 듣고 더 나은 서비스로 보답하겠습니다. 칭찬, 제안, 불만 어떤 의견이든 환영합니다.',
  path: '/testimonials',
});

const categories = [
  {
    icon: Heart,
    title: '칭찬 · 격려',
    desc: '만족스러운 서비스 경험을 들려주세요. 더 좋은 법률 서비스로 보답드리겠습니다.',
  },
  {
    icon: Lightbulb,
    title: '제안 사항',
    desc: '서비스 개선을 위한 아이디어를 자유롭게 제안해 주세요.',
  },
  {
    icon: MessageCircleWarning,
    title: '불만 · 신고',
    desc: '서비스 이용 중 불편한 점을 알려주시면 신속하게 개선하겠습니다.',
  },
];

export default function VoicePage() {
  return (
    <>
      <PageHero
        eyebrow="VOICE OF CLIENTS"
        title="고객의 소리"
        description="법무법인 이준 강북 분사무소를 찾아주신 고객님께 진심으로 감사드립니다. 소중한 의견을 들려주시면 더 나은 서비스로 보답하겠습니다."
      />

      <section className="section">
        <div className="container">
          <div className="mb-12 grid gap-5 md:grid-cols-3">
            {categories.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-gray">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <h2 className="text-2xl font-bold text-brand-navy">의견 보내기</h2>
              <p className="mt-2 text-sm text-brand-gray">
                * 표시는 필수 입력 항목입니다. 접수해 주신 의견은 책임자가 직접 확인합니다.
              </p>
              <div className="mt-8">
                <VoiceForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { buildPageMetadata, SITE_INFO } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { ContactForm } from '@/components/sections/ContactForm';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

export const metadata = buildPageMetadata({
  title: '법률 상담 신청',
  description:
    '법무법인 이준 강북 분사무소에 온라인으로 법률 상담을 신청하세요. 비공개로 신속하게 응대드립니다.',
  path: '/contact',
});

const channels = [
  {
    icon: Phone,
    title: '대표 전화',
    value: SITE_INFO.phone,
    desc: '평일 09:00 - 18:00 (점심 12:30~13:30)',
  },
  {
    icon: Mail,
    title: '이메일',
    value: SITE_INFO.email,
    desc: '24시간 접수, 영업일 기준 1일 이내 회신',
  },
  {
    icon: MapPin,
    title: '오시는 길',
    value: SITE_INFO.address,
    desc: '사전 예약 시 방문 상담 가능',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="법률 상담 신청"
        description="사건의 본질을 함께 진단하고, 가장 합리적인 해결책을 찾아드립니다. 모든 상담은 비공개로 진행됩니다."
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="section-eyebrow">ONLINE FORM</p>
              <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">
                온라인 상담 신청서
              </h2>
              <p className="mt-3 text-sm text-brand-gray">
                * 표시된 항목은 필수 입력 사항입니다. 빠른 검토 후 1영업일 내 회신 드리겠습니다.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-4">
              {channels.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                        {c.title}
                      </p>
                      <p className="mt-1 break-words text-base font-semibold text-brand-navy">
                        {c.value}
                      </p>
                      <p className="mt-1 text-xs text-brand-gray">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl bg-brand-navy p-6 text-white">
                <div className="flex items-center gap-2 text-brand-gold">
                  <MessageSquare className="h-5 w-5" />
                  <p className="text-sm font-semibold">상담 시 안내</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  사건의 사실관계를 가능한 한 구체적으로 작성해 주시면 보다 정확한 진단을
                  드릴 수 있습니다. 첨부 자료는 회신 후 별도 안전한 채널로 전달 가능합니다.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

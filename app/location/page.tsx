import { buildPageMetadata, SITE_INFO } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { Car, Clock, MapPin, Phone, Train } from 'lucide-react';

export const metadata = buildPageMetadata({
  title: '오시는 길',
  description: '법무법인 이준 강북 분사무소 위치, 교통편, 주차 안내, 영업시간 안내.',
  path: '/location',
});

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="LOCATION"
        title="법무법인 이준 강북 분사무소"
        description="대중교통, 자가용, 어떤 방식으로든 편하게 방문하실 수 있도록 안내해 드립니다."
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="법무법인 이준 강북 분사무소 위치 지도"
                src="https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%B6%81%EA%B5%AC&output=embed"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                  <div>
                    <p className="text-sm font-medium text-brand-gray">주소</p>
                    <p className="mt-1 text-base font-semibold text-brand-navy">
                      {SITE_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                  <div>
                    <p className="text-sm font-medium text-brand-gray">대표 전화</p>
                    <p className="mt-1 text-base font-semibold text-brand-navy">
                      {SITE_INFO.phone}
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                  <div>
                    <p className="text-sm font-medium text-brand-gray">상담 시간</p>
                    <p className="mt-1 text-base font-semibold text-brand-navy">
                      {SITE_INFO.businessHours}
                    </p>
                    <p className="mt-2 text-xs text-brand-gray">
                      사전 예약 시 야간 · 주말 상담도 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Train className="h-5 w-5 text-brand-navy" />
                <h3 className="text-lg font-semibold text-brand-navy">대중교통</h3>
              </div>
              <ul className="space-y-2 text-sm text-brand-navy-dark/80">
                <li>· 지하철 4호선 수유역 도보 5분 (자세한 출구는 안내 예정)</li>
                <li>· 광역버스 · 일반버스 정류장 인근, 도보 3분</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Car className="h-5 w-5 text-brand-navy" />
                <h3 className="text-lg font-semibold text-brand-navy">자가용 / 주차</h3>
              </div>
              <ul className="space-y-2 text-sm text-brand-navy-dark/80">
                <li>· 건물 내 부설 주차장 이용 가능 (1시간 무료)</li>
                <li>· 인근 공영주차장 다수 (도보 2~5분)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

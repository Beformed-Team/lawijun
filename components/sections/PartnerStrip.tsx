import { Building2 } from 'lucide-react';

const partners = [
  '주식회사 OO홀딩스',
  '메디케어 OO병원',
  'OO 글로벌 컴퍼니',
  '한국 OO 협회',
  'OO 테크놀로지스',
  'OO 종합건설',
];

export function PartnerStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <div className="container">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-gray">
          업무협력 · 법률자문 기업
        </p>
        <div className="mt-6 grid grid-cols-2 gap-y-4 sm:grid-cols-3 md:grid-cols-6">
          {partners.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center gap-2 text-sm font-medium text-brand-gray"
            >
              <Building2 className="h-4 w-4 opacity-60" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

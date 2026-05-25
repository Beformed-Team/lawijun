import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import faq from '@/content/faq.json';

export const metadata = buildPageMetadata({
  title: '법률지식인',
  description: '실생활에서 가장 자주 묻는 법률 질문에 변호사가 답합니다.',
  path: '/cases/legal-knowledge',
});

export default function LegalKnowledgePage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL Q&A"
        title="법률지식인"
        description="의뢰인이 자주 묻는 질문에 변호사가 직접 답변합니다. 더 궁금한 점은 언제든 상담을 통해 문의해 주세요."
      />
      <section className="section">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {faq.map((q) => (
              <details
                key={q.id}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:shadow-md"
              >
                <summary className="cursor-pointer list-none">
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                      Q
                    </span>
                    <p className="flex-1 text-base font-semibold text-brand-navy md:text-lg">
                      {q.question}
                    </p>
                    <span className="text-brand-gray transition-transform group-open:rotate-180">
                      ▾
                    </span>
                  </div>
                </summary>
                <div className="mt-4 flex gap-3 pl-11">
                  <p className="text-sm leading-relaxed text-brand-navy-dark/80">{q.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

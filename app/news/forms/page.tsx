import { Download, FileText } from 'lucide-react';
import { buildPageMetadata } from '@/lib/seo';
import { PageHero } from '@/components/ui/page-hero';
import { Badge } from '@/components/ui/badge';
import forms from '@/content/forms.json';

export const metadata = buildPageMetadata({
  title: '법률서식',
  description: '자주 사용되는 법률 서식과 양식을 무료로 제공합니다.',
  path: '/news/forms',
});

export default function FormsPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL FORMS"
        title="법률서식"
        description="실무에서 자주 사용되는 위임장, 진술서, 청구서 등의 표준 양식을 제공합니다."
      />
      <section className="section">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2">
            {forms.map((f) => (
              <div
                key={f.id}
                className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <Badge variant="outline">{f.category}</Badge>
                  <p className="mt-2 truncate text-base font-semibold text-brand-navy">{f.title}</p>
                  <p className="text-xs text-brand-gray">{f.size}</p>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 rounded-md border border-brand-navy/20 px-3 py-2 text-xs font-medium text-brand-navy hover:bg-brand-navy/5"
                >
                  <Download className="h-3.5 w-3.5" /> 다운로드
                </button>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-brand-gray">
            * 양식 파일 업로드 후 다운로드 링크를 연결하시면 됩니다.
            (README의 &lsquo;수정 체크리스트&rsquo; 참고)
          </p>
        </div>
      </section>
    </>
  );
}

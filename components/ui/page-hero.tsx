import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn('bg-pattern py-20 text-white md:py-28', className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-brand-gold">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl font-bold text-white md:text-5xl">{title}</h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

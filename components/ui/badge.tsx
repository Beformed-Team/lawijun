import { cn } from '@/lib/utils';

export function Badge({
  className,
  variant = 'default',
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: 'default' | 'gold' | 'outline' }) {
  const variants = {
    default: 'bg-brand-navy/10 text-brand-navy',
    gold: 'bg-brand-gold/15 text-brand-gold',
    outline: 'border border-brand-navy/20 text-brand-navy',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

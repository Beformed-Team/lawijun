import { cn } from '@/lib/utils';

export function PageContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('container py-16 md:py-20', className)}>{children}</div>;
}

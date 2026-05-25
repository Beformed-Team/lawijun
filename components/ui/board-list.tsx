import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export type BoardItem = {
  slug?: string;
  id?: string;
  title: string;
  date: string;
  category?: string;
  excerpt?: string;
  thumbnail?: string;
  url?: string;
};

interface BoardListProps {
  items: BoardItem[];
  basePath?: string;
  emptyMessage?: string;
}

export function BoardList({ items, basePath, emptyMessage = '등록된 글이 없습니다.' }: BoardListProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center text-sm text-brand-gray">
        {emptyMessage}
      </div>
    );
  }
  return (
    <ul className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {items.map((item) => {
        const id = item.slug ?? item.id ?? '';
        const isExternal = !!item.url;
        const inner = (
          <div className="flex flex-col gap-2 px-6 py-5 transition-colors hover:bg-slate-50 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                {item.category && <Badge variant="outline">{item.category}</Badge>}
              </div>
              <h3 className="mt-2 text-base font-semibold text-brand-navy md:text-lg">
                {item.title}
              </h3>
              {item.excerpt && (
                <p className="mt-1 line-clamp-2 text-sm text-brand-gray">{item.excerpt}</p>
              )}
            </div>
            <span className="flex-shrink-0 text-xs text-brand-gray md:text-sm">
              {formatDate(item.date)}
            </span>
          </div>
        );
        return (
          <li key={id}>
            {isExternal ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : basePath ? (
              <Link href={`${basePath}/${id}`}>{inner}</Link>
            ) : (
              <div>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

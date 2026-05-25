'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navigation } from '@/lib/nav';
import { Button } from '@/components/ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200',
        scrolled
          ? 'border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-white/90 backdrop-blur-sm',
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="법무법인 이준 홈으로">
          <Image
            src="/logo.png"
            alt="법무법인 이준 강북 분사무소 로고"
            width={180}
            height={48}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav aria-label="주 메뉴" className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-brand-navy transition-colors hover:bg-brand-navy/5"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="min-w-[220px] rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2 text-sm text-brand-navy-dark/80 hover:bg-brand-navy/5 hover:text-brand-navy"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="tel:000-0000-0000"
            className="flex items-center gap-2 text-sm font-medium text-brand-navy"
          >
            <Phone className="h-4 w-4" />
            <span>상담문의</span>
          </a>
          <Button href="/contact" size="sm" variant="primary">
            법률 상담 신청
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="rounded-md p-2 lg:hidden"
          aria-label="메뉴 열기"
          aria-expanded={mobileOpen}
        >
          <Menu className="h-6 w-6 text-brand-navy" />
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-[60] lg:hidden',
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            'absolute inset-0 bg-black/50 transition-opacity duration-200',
            mobileOpen ? 'opacity-100' : 'opacity-0',
          )}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            'absolute right-0 top-0 h-[100dvh] w-[88%] max-w-[360px] bg-white shadow-2xl transition-transform duration-300',
            mobileOpen ? 'translate-x-0' : 'translate-x-full',
          )}
          role="dialog"
          aria-modal="true"
          aria-label="모바일 메뉴"
        >
          <div className="absolute inset-x-0 top-0 z-10 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo.png"
                alt="법무법인 이준"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="-mr-1 rounded-md p-2"
              aria-label="메뉴 닫기"
            >
              <X className="h-5 w-5 text-brand-navy" />
            </button>
          </div>

          <nav
            className="absolute inset-x-0 top-16 bottom-[148px] overflow-y-auto overscroll-contain px-4 py-3"
            aria-label="모바일 주 메뉴"
          >
            {navigation.map((item) => (
              <div key={item.href} className="border-b border-slate-100">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu(openMenu === item.href ? null : item.href)
                      }
                      className="flex w-full items-center justify-between px-2 py-4 text-left text-base font-semibold text-brand-navy"
                      aria-expanded={openMenu === item.href}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          openMenu === item.href && 'rotate-180',
                        )}
                      />
                    </button>
                    {openMenu === item.href && (
                      <div className="ml-2 mb-2 flex flex-col border-l-2 border-brand-gold/30 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-md px-2 py-2.5 text-sm text-brand-navy-dark/80 hover:bg-brand-navy/5"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-2 py-4 text-base font-semibold text-brand-navy"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="absolute inset-x-0 bottom-0 space-y-2 border-t border-slate-200 bg-white p-4">
            <Button href="/contact" variant="primary" className="w-full">
              법률 상담 신청
            </Button>
            <Button href="tel:000-0000-0000" variant="secondary" className="w-full">
              <Phone className="h-4 w-4" /> 전화 상담
            </Button>
          </div>
        </aside>
      </div>
    </header>
  );
}

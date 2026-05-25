import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_INFO } from '@/lib/seo';

export function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white/80">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/mark.png"
                alt="법무법인 이준 마크"
                width={56}
                height={56}
                className="h-14 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold text-white">법무법인 이준</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              법률 상담을 원하는 분께 정보와 해결책을 함께 제공하는
              <br />
              법무법인 이준 강북 분사무소입니다.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="인스타그램"
                className="rounded-full border border-white/20 p-2 hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://blog.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="네이버 블로그"
                className="rounded-full border border-white/20 p-2 hover:bg-white/10"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="유튜브"
                className="rounded-full border border-white/20 p-2 hover:bg-white/10"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              주요 메뉴
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link className="hover:text-white" href="/about">법인 소개</Link></li>
              <li><Link className="hover:text-white" href="/lawyers">구성원 소개</Link></li>
              <li><Link className="hover:text-white" href="/practice/rehabilitation">업무분야</Link></li>
              <li><Link className="hover:text-white" href="/cases">업무사례</Link></li>
              <li><Link className="hover:text-white" href="/news/notice">공지사항</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              연락처
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                <span>{SITE_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                <span>{SITE_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                <span>{SITE_INFO.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              상담 안내
            </h3>
            <p className="text-sm leading-relaxed text-white/70">
              {SITE_INFO.businessHours}
              <br />
              <br />
              사전 예약 시 야간 · 주말 상담도 가능합니다. 온라인으로 24시간 접수받습니다.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-gold hover:underline"
            >
              상담 신청 바로가기 →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} 법무법인 이준 강북 분사무소. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/news/notice" className="hover:text-white">개인정보처리방침</Link>
            <Link href="/news/notice" className="hover:text-white">이용약관</Link>
            <Link href="/contact" className="hover:text-white">문의</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { MetadataRoute } from 'next';
import notices from '@/content/notices.json';
import { practiceAreas } from '@/lib/nav';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://lawfirmyijun-gangbuk.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    '',
    '/about',
    '/about/partners',
    '/location',
    '/lawyers',
    '/testimonials',
    '/cases',
    '/cases/analysis',
    '/cases/legal-info-corporate',
    '/cases/legal-info-personal',
    '/cases/legal-knowledge',
    '/cases/reviews',
    '/news/press',
    '/news/notice',
    '/news/blog',
    '/news/forms',
    '/news/newsletter',
    '/news/seminar',
    '/contact',
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const practiceRoutes = practiceAreas.map((a) => ({
    url: `${SITE_URL}/practice/${a.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const noticeRoutes = notices.map((n) => ({
    url: `${SITE_URL}/news/notice/${n.slug}`,
    lastModified: new Date(n.date),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...practiceRoutes, ...noticeRoutes];
}

import { Hero } from '@/components/sections/Hero';
import { Values } from '@/components/sections/Values';
import { PracticeAreas } from '@/components/sections/PracticeAreas';
import { FeaturedCases } from '@/components/sections/FeaturedCases';
import { NewsHighlight } from '@/components/sections/NewsHighlight';
import { CtaSection } from '@/components/sections/CtaSection';
import { PartnerStrip } from '@/components/sections/PartnerStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnerStrip />
      <Values />
      <PracticeAreas />
      <FeaturedCases />
      <NewsHighlight />
      <CtaSection />
    </>
  );
}

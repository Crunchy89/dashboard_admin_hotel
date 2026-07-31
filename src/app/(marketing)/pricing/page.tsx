import { Metadata } from "next";
import { pricing, sectionTone } from "@/components/marketing/data";
import {
  MarketingSection,
  PageHero,
  PricingGrid,
} from "@/components/marketing/ui";

export const metadata: Metadata = {
  title: "Pricing | Smart Hotel",
  description:
    "Hotel and home packages priced by room count, with plans from Small to Enterprise.",
};

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Clear plans that grow with your room count"
        description="Smart Home plans start at Rp 99 rb per month. Hotel plans are priced by how many rooms you connect."
        toneClass={sectionTone.pricing}
      />
      <MarketingSection toneClass={sectionTone.hero} className="py-16">
        <PricingGrid items={pricing} titleAs="h2" />
      </MarketingSection>
    </main>
  );
}

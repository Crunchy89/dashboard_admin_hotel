import { Metadata } from "next";
import { features, sectionTone } from "@/components/marketing/data";
import {
  FeatureGrid,
  MarketingSection,
  PageHero,
} from "@/components/marketing/ui";

export const metadata: Metadata = {
  title: "Features | Smart Hotel",
  description:
    "Room control, guest points, device monitoring, and multi-property operations.",
};

export default function FeaturesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Features"
        title="Built for rooms, guests, and the teams behind them"
        description="From first check-in to ongoing maintenance, Smart Hotel gives affiliated properties one place to run connected stays."
        toneClass={sectionTone.features}
      />
      <MarketingSection toneClass={sectionTone.hero} className="py-16">
        <FeatureGrid items={features} surface="page" titleAs="h2" />
      </MarketingSection>
    </main>
  );
}

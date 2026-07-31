import { Metadata } from "next";
import { faqs, sectionTone } from "@/components/marketing/data";
import {
  FaqList,
  MarketingSection,
  PageHero,
} from "@/components/marketing/ui";

export const metadata: Metadata = {
  title: "FAQ | Smart Hotel",
  description:
    "Answers about affiliation, guest points, installation, packages, and support.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers before you join the network"
        description="Common questions from hotel owners, ops leads, and partners evaluating Smart Hotel."
        toneClass={sectionTone.faq}
      />
      <MarketingSection
        toneClass={sectionTone.hero}
        className="py-16"
        containerClassName="max-w-3xl"
      >
        <FaqList items={faqs} surface="page" />
      </MarketingSection>
    </main>
  );
}

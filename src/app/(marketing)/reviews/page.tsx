import { Metadata } from "next";
import { reviews, sectionTone } from "@/components/marketing/data";
import {
  MarketingSection,
  PageHero,
  ReviewGrid,
} from "@/components/marketing/ui";

export const metadata: Metadata = {
  title: "Reviews | Smart Hotel",
  description:
    "What hotel operators say about guest experience, points, and maintenance.",
};

export default function ReviewsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Reviews"
        title="Stories from the properties already on the network"
        description="General managers, owners, and ops leads share how connected rooms and guest points changed their day-to-day."
        toneClass={sectionTone.reviews}
      />
      <MarketingSection toneClass={sectionTone.hero} className="py-16">
        <ReviewGrid items={reviews} size="md" columns="md:grid-cols-2" />
      </MarketingSection>
    </main>
  );
}

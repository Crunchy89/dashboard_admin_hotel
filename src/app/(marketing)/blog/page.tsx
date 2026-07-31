import { Metadata } from "next";
import { blogPosts, sectionTone } from "@/components/marketing/data";
import {
  BlogGrid,
  MarketingSection,
  PageHero,
} from "@/components/marketing/ui";

export const metadata: Metadata = {
  title: "Blog | Smart Hotel",
  description:
    "Articles on hotel operations, guest loyalty, and connected room experiences.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Notes from the field for operators and product teams"
        description="Practical writing on loyalty programs, device health, installation rollouts, and guest experience."
        toneClass={sectionTone.blog}
      />
      <MarketingSection toneClass={sectionTone.hero} className="py-16">
        <BlogGrid
          items={blogPosts}
          showComingSoon
          showReadTime
          titleAs="h2"
          columns="md:grid-cols-2"
        />
      </MarketingSection>
    </main>
  );
}

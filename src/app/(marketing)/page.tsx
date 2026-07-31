import Link from "next/link";
import { Metadata } from "next";
import {
  blogPosts,
  faqs,
  features,
  pricing,
  reviews,
  sectionTone,
  stats,
} from "@/components/marketing/data";
import {
  BlogGrid,
  FaqList,
  FeatureGrid,
  MarketingSection,
  PricingGrid,
  ReviewGrid,
  SectionHeader,
  StatsGrid,
} from "@/components/marketing/ui";

export const metadata: Metadata = {
  title: "Smart Hotel & Smart Home",
  description:
    "Connected hotel and home experiences for guests and operators across affiliated properties.",
};

export default function HomePage() {
  return (
    <main>
      <MarketingSection toneClass={sectionTone.hero} className="pb-20 pt-16 lg:pt-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-[#8ec4c8]">
          Affiliated properties
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Smart stays for hotels and homes that run on one network.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Guests earn points when they book. Operators manage rooms, devices,
          and service from a single place built for affiliated hotels.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/pricing"
            className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-600"
          >
            See pricing
          </Link>
          <Link
            href="/features"
            className="rounded-lg border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
          >
            How it works
          </Link>
        </div>

        <div className="mt-16">
          <StatsGrid items={stats} />
        </div>
      </MarketingSection>

      <MarketingSection toneClass={sectionTone.features}>
        <SectionHeader
          eyebrow="Features"
          title="Everything a connected property needs"
          href="/features"
          linkLabel="View all features →"
        />
        <div className="mt-12">
          <FeatureGrid items={features.slice(0, 4)} />
        </div>
      </MarketingSection>

      <MarketingSection toneClass={sectionTone.pricing}>
        <SectionHeader
          eyebrow="Pricing"
          title="Plans that scale with your rooms"
          href="/pricing"
          linkLabel="Compare plans →"
        />
        <div className="mt-12">
          <PricingGrid items={pricing} showPerks={false} />
        </div>
      </MarketingSection>

      <MarketingSection toneClass={sectionTone.reviews}>
        <SectionHeader
          eyebrow="Reviews"
          title="Trusted by operators and their guests"
          href="/reviews"
          linkLabel="Read more reviews →"
        />
        <div className="mt-12">
          <ReviewGrid items={reviews.slice(0, 3)} />
        </div>
      </MarketingSection>

      <MarketingSection toneClass={sectionTone.blog}>
        <SectionHeader
          eyebrow="Blog"
          title="Ideas for operators and guest experience"
          href="/blog"
          linkLabel="View all posts →"
        />
        <div className="mt-12">
          <BlogGrid items={blogPosts.slice(0, 3)} />
        </div>
      </MarketingSection>

      <MarketingSection toneClass={sectionTone.faq}>
        <SectionHeader
          eyebrow="FAQ"
          title="Questions operators ask before joining"
          href="/faq"
          linkLabel="See all FAQs →"
        />
        <div className="mt-12">
          <FaqList items={faqs.slice(0, 4)} />
        </div>
      </MarketingSection>

      <MarketingSection toneClass={sectionTone.about}>
        <div className="grid gap-10 rounded-2xl border border-white/10 bg-black/10 p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8ec4c8]">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              One network for hotels and homes
            </h2>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-medium text-[#8ec4c8] hover:text-white"
            >
              Learn more about us →
            </Link>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-white/70">
            <p>
              We build the layer that connects rooms, devices, and guests across
              affiliated properties. Hotels get operational visibility. Homes get
              the same smart controls without an enterprise budget.
            </p>
            <p>
              Every stay at a partner hotel earns points, so guests have a reason
              to come back and operators keep bookings direct.
            </p>
          </div>
        </div>
      </MarketingSection>
    </main>
  );
}

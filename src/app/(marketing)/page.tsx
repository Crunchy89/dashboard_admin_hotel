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
import { StarRow } from "@/components/marketing/ui";

export const metadata: Metadata = {
  title: "Smart Hotel & Smart Home",
  description:
    "Connected hotel and home experiences for guests and operators across affiliated properties.",
};

export default function HomePage() {
  return (
    <main>
      <section className={`${sectionTone.hero} px-6 pb-20 pt-16 sm:px-8 lg:pt-24`}>
        <div className="mx-auto w-full max-w-6xl">
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

          <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm text-white/50">{stat.label}</dt>
                <dd className="mt-2 text-3xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={`${sectionTone.features} px-6 py-20 sm:px-8`}>
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8ec4c8]">
                Features
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Everything a connected property needs
              </h2>
            </div>
            <Link
              href="/features"
              className="text-sm font-medium text-[#8ec4c8] hover:text-white"
            >
              View all features →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {features.slice(0, 4).map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-black/10 p-6 transition hover:border-white/20"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionTone.pricing} px-6 py-20 sm:px-8`}>
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8ec4c8]">
                Pricing
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Plans that scale with your rooms
              </h2>
            </div>
            <Link
              href="/pricing"
              className="text-sm font-medium text-[#8ec4c8] hover:text-white"
            >
              Compare plans →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  plan.featured
                    ? "border-brand-400/60 bg-brand-500/15"
                    : "border-white/10 bg-black/10"
                }`}
              >
                {plan.featured && (
                  <span className="mb-4 w-fit rounded-full bg-brand-500 px-3 py-1 text-xs font-medium">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-white/50">{plan.limit}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/50">{plan.cadence}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionTone.reviews} px-6 py-20 sm:px-8`}>
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8ec4c8]">
                Reviews
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Trusted by operators and their guests
              </h2>
            </div>
            <Link
              href="/reviews"
              className="text-sm font-medium text-[#8ec4c8] hover:text-white"
            >
              Read more reviews →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <figure
                key={review.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-black/10 p-6"
              >
                <StarRow />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-white/75">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/20 text-sm font-semibold text-brand-300">
                    {review.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">
                      {review.name}
                    </span>
                    <span className="block text-xs text-white/50">
                      {review.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionTone.blog} px-6 py-20 sm:px-8`}>
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8ec4c8]">
                Blog
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Ideas for operators and guest experience
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-medium text-[#8ec4c8] hover:text-white"
            >
              View all posts →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="flex flex-col rounded-2xl border border-white/10 bg-black/10 p-6 transition hover:border-white/20"
              >
                <div className="flex items-center gap-3 text-xs text-white/50">
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[#8ec4c8]">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionTone.faq} px-6 py-20 sm:px-8`}>
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8ec4c8]">
                FAQ
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Questions operators ask before joining
              </h2>
            </div>
            <Link
              href="/faq"
              className="text-sm font-medium text-[#8ec4c8] hover:text-white"
            >
              See all FAQs →
            </Link>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.slice(0, 4).map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-black/10 px-6 py-1 open:border-white/20"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg text-white/60 transition group-open:rotate-45 group-open:border-[#8ec4c8] group-open:text-[#8ec4c8]"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-white/60">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionTone.about} px-6 py-20 sm:px-8`}>
        <div className="mx-auto w-full max-w-6xl">
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
                We build the layer that connects rooms, devices, and guests
                across affiliated properties. Hotels get operational visibility.
                Homes get the same smart controls without an enterprise budget.
              </p>
              <p>
                Every stay at a partner hotel earns points, so guests have a
                reason to come back and operators keep bookings direct.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import type {
  blogPosts,
  features,
  faqs,
  pricing,
  reviews,
  stats,
} from "./data";

type FeatureItem = (typeof features)[number];
type PricingItem = (typeof pricing)[number];
type ReviewItem = (typeof reviews)[number];
type BlogItem = (typeof blogPosts)[number];
type FaqItemData = (typeof faqs)[number];
type StatItem = (typeof stats)[number];

type Surface = "home" | "page";

const surfaceClass: Record<Surface, string> = {
  home: "bg-black/10",
  page: "bg-white/[0.03]",
};

export function StarRow() {
  return (
    <div className="flex gap-1" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="#f5c451"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.6 5.28 5.83.85-4.22 4.11 1 5.81L10 14.8l-5.21 2.75 1-5.81L1.57 7.63l5.83-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  toneClass,
}: {
  eyebrow: string;
  title: string;
  description: string;
  toneClass: string;
}) {
  return (
    <section className={`${toneClass} px-6 py-16 sm:px-8 lg:py-20`}>
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8ec4c8]">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function MarketingSection({
  toneClass,
  children,
  className = "py-20",
  containerClassName = "max-w-6xl",
}: {
  toneClass: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section className={`${toneClass} px-6 ${className} sm:px-8`}>
      <div className={`mx-auto w-full ${containerClassName}`}>{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  href,
  linkLabel,
  description,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  linkLabel?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8ec4c8]">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl text-white/60">{description}</p>
        ) : null}
      </div>
      {href && linkLabel ? (
        <Link
          href={href}
          className="text-sm font-medium text-[#8ec4c8] hover:text-white"
        >
          {linkLabel}
        </Link>
      ) : null}
    </div>
  );
}

export function FeatureCard({
  title,
  description,
  surface = "home",
  titleAs = "h3",
}: FeatureItem & {
  surface?: Surface;
  titleAs?: "h2" | "h3";
}) {
  const TitleTag = titleAs;
  return (
    <div
      className={`rounded-2xl border border-white/10 ${surfaceClass[surface]} p-6 transition hover:border-white/20 sm:p-8`}
    >
      <TitleTag
        className={titleAs === "h2" ? "text-xl font-semibold" : "text-lg font-semibold"}
      >
        {title}
      </TitleTag>
      <p className="mt-3 text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}

export function FeatureGrid({
  items,
  surface = "home",
  titleAs = "h3",
}: {
  items: FeatureItem[];
  surface?: Surface;
  titleAs?: "h2" | "h3";
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <FeatureCard key={item.title} {...item} surface={surface} titleAs={titleAs} />
      ))}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      className="mt-0.5 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M4.5 10.5l3.5 3.5 7.5-8"
        stroke="#12b76a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PricingCard({
  name,
  price,
  cadence,
  limit,
  perks,
  featured = false,
  showPerks = true,
  titleAs = "h3",
}: PricingItem & {
  showPerks?: boolean;
  titleAs?: "h2" | "h3";
}) {
  const TitleTag = titleAs;
  return (
    <div
      className={`flex flex-col rounded-2xl border p-8 ${
        featured
          ? "border-brand-400/60 bg-brand-500/15"
          : "border-white/10 bg-black/10"
      }`}
    >
      {featured ? (
        <span className="mb-4 w-fit rounded-full bg-brand-500 px-3 py-1 text-xs font-medium">
          Most popular
        </span>
      ) : null}
      <TitleTag className="text-lg font-semibold">{name}</TitleTag>
      <p className="mt-1 text-sm text-white/50">{limit}</p>
      <p className="mt-6 flex items-baseline gap-1">
        <span className="text-3xl font-semibold tracking-tight">{price}</span>
        <span className="text-sm text-white/50">{cadence}</span>
      </p>
      {showPerks ? (
        <ul className="mt-6 flex-1 space-y-3">
          {perks.map((perk) => (
            <li
              key={perk}
              className="flex items-start gap-3 text-sm text-white/70"
            >
              <CheckIcon />
              {perk}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function PricingGrid({
  items,
  showPerks = true,
  titleAs = "h3",
}: {
  items: PricingItem[];
  showPerks?: boolean;
  titleAs?: "h2" | "h3";
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <PricingCard
          key={item.name}
          {...item}
          showPerks={showPerks}
          titleAs={titleAs}
        />
      ))}
    </div>
  );
}

export function ReviewCard({
  quote,
  name,
  role,
  initials,
  size = "sm",
}: ReviewItem & { size?: "sm" | "md" }) {
  return (
    <figure className="flex flex-col rounded-2xl border border-white/10 bg-black/10 p-6 sm:p-8">
      <StarRow />
      <blockquote
        className={`mt-5 flex-1 leading-relaxed text-white/75 ${
          size === "md" ? "text-base" : "text-sm"
        }`}
      >
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <span
          className={`flex items-center justify-center rounded-full bg-brand-500/20 text-sm font-semibold text-brand-300 ${
            size === "md" ? "h-11 w-11" : "h-10 w-10"
          }`}
        >
          {initials}
        </span>
        <span>
          <span className="block text-sm font-medium">{name}</span>
          <span className="block text-xs text-white/50">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function ReviewGrid({
  items,
  size = "sm",
  columns = "lg:grid-cols-3",
}: {
  items: ReviewItem[];
  size?: "sm" | "md";
  columns?: string;
}) {
  return (
    <div className={`grid gap-6 ${columns}`}>
      {items.map((item) => (
        <ReviewCard key={item.name} {...item} size={size} />
      ))}
    </div>
  );
}

export function BlogCard({
  category,
  title,
  excerpt,
  date,
  readTime,
  showComingSoon = false,
  showReadTime = false,
  titleAs = "h3",
}: BlogItem & {
  showComingSoon?: boolean;
  showReadTime?: boolean;
  titleAs?: "h2" | "h3";
}) {
  const TitleTag = titleAs;
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-black/10 p-6 transition hover:border-white/20 sm:p-8">
      <div className="flex flex-wrap items-center gap-3 text-xs text-white/50">
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-[#8ec4c8]">
          {category}
        </span>
        <span>{date}</span>
        {showReadTime && readTime ? (
          <>
            <span aria-hidden="true">·</span>
            <span>{readTime}</span>
          </>
        ) : null}
      </div>
      <TitleTag
        className={`mt-4 font-semibold leading-snug ${
          titleAs === "h2" ? "text-xl" : "text-lg"
        }`}
      >
        {title}
      </TitleTag>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
        {excerpt}
      </p>
      {showComingSoon ? (
        <p className="mt-6 text-sm font-medium text-[#8ec4c8]">Coming soon</p>
      ) : null}
    </article>
  );
}

export function BlogGrid({
  items,
  showComingSoon = false,
  showReadTime = false,
  titleAs = "h3",
  columns = "lg:grid-cols-3",
}: {
  items: BlogItem[];
  showComingSoon?: boolean;
  showReadTime?: boolean;
  titleAs?: "h2" | "h3";
  columns?: string;
}) {
  return (
    <div className={`grid gap-6 ${columns}`}>
      {items.map((item) => (
        <BlogCard
          key={item.slug}
          {...item}
          showComingSoon={showComingSoon}
          showReadTime={showReadTime}
          titleAs={titleAs}
        />
      ))}
    </div>
  );
}

export function FaqItem({
  question,
  answer,
  surface = "home",
}: FaqItemData & { surface?: Surface }) {
  return (
    <details
      className={`group rounded-2xl border border-white/10 ${surfaceClass[surface]} px-6 py-1 open:border-white/20`}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium marker:content-none [&::-webkit-details-marker]:hidden">
        {question}
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg text-white/60 transition group-open:rotate-45 group-open:border-[#8ec4c8] group-open:text-[#8ec4c8]"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <p className="pb-5 text-sm leading-relaxed text-white/60">{answer}</p>
    </details>
  );
}

export function FaqList({
  items,
  surface = "home",
}: {
  items: FaqItemData[];
  surface?: Surface;
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <FaqItem key={item.question} {...item} surface={surface} />
      ))}
    </div>
  );
}

export function StatsGrid({
  items,
  variant = "inline",
}: {
  items: StatItem[];
  variant?: "inline" | "panel";
}) {
  const grid = (
    <dl
      className={
        variant === "panel"
          ? "grid grid-cols-2 gap-6"
          : "grid grid-cols-2 gap-8 border-t border-white/10 pt-10 lg:grid-cols-4"
      }
    >
      {items.map((stat) => (
        <div key={stat.label}>
          <dt className="text-sm text-white/50">{stat.label}</dt>
          <dd className="mt-2 text-3xl font-semibold tracking-tight">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );

  if (variant === "panel") {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        {grid}
      </div>
    );
  }

  return grid;
}

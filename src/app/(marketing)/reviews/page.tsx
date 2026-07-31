import { Metadata } from "next";
import { reviews, sectionTone } from "@/components/marketing/data";
import { PageHero, StarRow } from "@/components/marketing/ui";

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

      <section className={`${sectionTone.hero} px-6 py-16 sm:px-8`}>
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <StarRow />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-white/75">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-500/20 text-sm font-semibold text-brand-300">
                  {review.initials}
                </span>
                <span>
                  <span className="block text-sm font-medium">{review.name}</span>
                  <span className="block text-xs text-white/50">
                    {review.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

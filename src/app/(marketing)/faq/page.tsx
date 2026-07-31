import { Metadata } from "next";
import { faqs, sectionTone } from "@/components/marketing/data";
import { PageHero } from "@/components/marketing/ui";

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

      <section className={`${sectionTone.hero} px-6 py-16 sm:px-8`}>
        <div className="mx-auto w-full max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-1 open:border-white/20"
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
      </section>
    </main>
  );
}

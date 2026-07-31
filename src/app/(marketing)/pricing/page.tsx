import { Metadata } from "next";
import { pricing, sectionTone } from "@/components/marketing/data";
import { PageHero } from "@/components/marketing/ui";

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

      <section className={`${sectionTone.hero} px-6 py-16 sm:px-8`}>
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.featured
                  ? "border-brand-400/60 bg-brand-500/15"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.featured && (
                <span className="mb-4 w-fit rounded-full bg-brand-500 px-3 py-1 text-xs font-medium">
                  Most popular
                </span>
              )}
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="mt-1 text-sm text-white/50">{plan.limit}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-sm text-white/50">{plan.cadence}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
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
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

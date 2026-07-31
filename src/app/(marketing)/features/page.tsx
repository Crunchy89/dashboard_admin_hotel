import { Metadata } from "next";
import { features, sectionTone } from "@/components/marketing/data";
import { PageHero } from "@/components/marketing/ui";

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

      <section className={`${sectionTone.hero} px-6 py-16 sm:px-8`}>
        <div className="mx-auto grid w-full max-w-6xl gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

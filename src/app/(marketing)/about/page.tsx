import Link from "next/link";
import { Metadata } from "next";
import { sectionTone, stats } from "@/components/marketing/data";
import { PageHero } from "@/components/marketing/ui";

export const metadata: Metadata = {
  title: "About | Smart Hotel",
  description:
    "We connect hotels, homes, rooms, and guests on one affiliated network.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="One network for hotels and homes that want guests to return"
        description="Smart Hotel is the operating layer for affiliated properties — rooms, devices, points, and the teams that keep stays running."
        toneClass={sectionTone.about}
      />

      <section className={`${sectionTone.hero} px-6 py-16 sm:px-8`}>
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-white/70">
            <p>
              We started with a simple idea: guests should feel the same calm
              control whether they stay in a city business hotel or a partner
              home, and operators should see every room without juggling five
              tools.
            </p>
            <p>
              Today, affiliated hotels use Smart Hotel to install devices,
              monitor health, run loyalty points, and keep bookings direct.
              Homes on the network share the same guest experience at a smaller
              scale.
            </p>
            <p>
              If you run properties and want one place for operations and guest
              loyalty, we would like to work with you.
            </p>
            <Link
              href="/pricing"
              className="inline-flex rounded-lg bg-brand-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-brand-600"
            >
              Explore packages
            </Link>
          </div>

          <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
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
    </main>
  );
}

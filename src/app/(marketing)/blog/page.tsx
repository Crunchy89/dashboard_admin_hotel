import { Metadata } from "next";
import { blogPosts, sectionTone } from "@/components/marketing/data";
import { PageHero } from "@/components/marketing/ui";

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

      <section className={`${sectionTone.hero} px-6 py-16 sm:px-8`}>
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-white/50">
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[#8ec4c8]">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold leading-snug">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                {post.excerpt}
              </p>
              <p className="mt-6 text-sm font-medium text-[#8ec4c8]">
                Coming soon
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

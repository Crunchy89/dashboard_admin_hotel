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

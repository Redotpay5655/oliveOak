export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <img
        src={image}
        alt={alt}
        width={1600}
        height={1000}
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.18_0.008_60/0.88)_0%,oklch(0.18_0.008_60/0.5)_70%)]"
      />
      <div className="relative mx-auto max-w-[86rem] px-5 pt-36 pb-20 sm:px-8 sm:pt-44 sm:pb-24">
        <p className="rule-label text-ivory/65">{eyebrow}</p>
        <h1 className="display-lg mt-5 max-w-3xl text-ivory">{title}</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80">{intro}</p>
      </div>
    </section>
  );
}
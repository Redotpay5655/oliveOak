import { Link } from "@tanstack/react-router";
import { images } from "@/content/site";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] w-full overflow-hidden bg-charcoal">
      <img
        src={images.heroLiving}
        alt="Elegant Nairobi living room with full-height linen curtains beside a garden window"
        width={1920}
        height={1200}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.18_0.008_60/0.86)_0%,oklch(0.18_0.008_60/0.42)_45%,oklch(0.18_0.008_60/0.28)_100%)]"
      />

      <div className="relative mx-auto flex min-h-[92svh] max-w-[86rem] flex-col justify-end px-5 pt-32 pb-16 sm:px-8 sm:pb-20">
        <div className="max-w-3xl">
          <p className="rule-label text-ivory/70">Olive Oak Interior Decor</p>
          <h1 className="display-xl mt-6 text-ivory">
            Beautiful spaces begin with the right details.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
            Custom curtains, blinds and interior décor solutions designed to bring comfort,
            character and elegance to your space.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/our-work" className="btn-light">
              Explore Our Collection
            </Link>
            <Link to="/contact" className="btn-outline-light">
              Get a Quote
            </Link>
          </div>

          <p className="mt-12 flex items-center gap-3 text-[0.6875rem] tracking-[0.22em] text-ivory/60 uppercase">
            <span aria-hidden="true" className="h-px w-10 bg-ivory/40" />
            Nairobi, Kenya
          </p>
        </div>

        <span
          aria-hidden="true"
          className="scroll-cue absolute right-5 bottom-16 hidden sm:right-8 sm:bottom-20 sm:block"
        />
      </div>
    </section>
  );
}
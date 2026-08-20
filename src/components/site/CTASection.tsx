import { Link } from "@tanstack/react-router";
import { images, whatsappLink } from "@/content/site";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <img
        src={images.ctaInterior}
        alt="Evening lounge with charcoal blackout curtains and warm lamp light"
        width={1920}
        height={1088}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[oklch(0.18_0.008_60/0.62)]"
      />
      <div className="relative mx-auto max-w-[86rem] px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="max-w-2xl">
          <h2 className="display-lg text-ivory">Ready to transform your space?</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/80">
            Let's create an interior that feels unmistakably yours.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-light">
              Get a Quote
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
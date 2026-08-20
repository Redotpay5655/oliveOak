import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { images } from "@/content/site";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden">
            <img
              src={images.aboutDetail}
              alt="Pleated ivory curtain falling beside a wooden side table in warm daylight"
              width={1024}
              height={1280}
              loading="lazy"
              decoding="async"
              className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <p className="eyebrow">The Olive Oak Approach</p>
          <h2 className="display-lg mt-5 max-w-lg">
            Designed for your space. Made to feel like home.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            At Olive Oak Interior Decor, we believe the right window treatments and finishing
            details can completely change how a space feels. From elegant curtains to practical
            blinds and carefully selected décor, we help create interiors that are beautiful,
            comfortable and personal.
          </p>
          <Link to="/about" className="link-arrow mt-10">
            Discover Olive Oak
            <ArrowRight className="size-3.5" strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
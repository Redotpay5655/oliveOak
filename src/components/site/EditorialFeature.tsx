import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export type FeatureImage = { src: string; alt: string; tall?: boolean };

export function EditorialFeature({
  eyebrow,
  title,
  copy,
  ctaLabel,
  ctaTo,
  images,
  tone = "plain",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  ctaLabel: string;
  ctaTo: "/contact" | "/our-work" | "/curtains" | "/blinds" | "/interior-decor";
  images: FeatureImage[];
  tone?: "plain" | "linen";
}) {
  return (
    <section className={cn(tone === "linen" && "border-y border-border bg-linen/60")}>
      <div className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="display-lg mt-5 max-w-md">{title}</h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">{copy}</p>
            <Link to={ctaTo} className="link-arrow mt-10">
              {ctaLabel}
              <ArrowRight className="size-3.5" strokeWidth={1.6} aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {images.map((image, index) => (
              <Reveal
                key={image.src + index}
                delay={index * 80}
                className={cn(index % 3 === 0 && "col-span-2")}
              >
                <div className="media-frame group hover:media-frame-hover">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      "w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]",
                      index % 3 === 0 ? "aspect-16/10" : image.tall ? "aspect-3/4" : "aspect-4/5",
                    )}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
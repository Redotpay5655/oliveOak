import { Star } from "lucide-react";
import { testimonials } from "@/content/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Social Proof</p>
        <h2 className="display-lg mt-4">Loved by our clients.</h2>
        <div className="mt-7 flex items-center justify-center gap-3">
          <span className="flex gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="size-4 fill-olive-deep text-olive-deep" strokeWidth={0} />
            ))}
          </span>
          <span className="rule-label text-foreground/80">5.0 Google Rating</span>
        </div>
      </Reveal>

      <ul className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal as="li" key={testimonial.id} delay={index * 90}>
            <figure className="flex h-full flex-col justify-between border border-border bg-card p-8">
              <blockquote className="text-lg leading-relaxed text-foreground/85">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-8 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {testimonial.author} · {testimonial.context}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>

      <p className="mt-8 text-center text-xs text-muted-foreground">
        Review slots are reserved for verified customer reviews and will be published once
        supplied by the business.
      </p>
    </section>
  );
}
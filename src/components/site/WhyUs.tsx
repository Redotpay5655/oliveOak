import { Ruler, Layers, Compass, Handshake } from "lucide-react";
import { benefits } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const iconMap = {
  ruler: Ruler,
  layers: Layers,
  compass: Compass,
  handshake: Handshake,
} as const;

export function WhyUs() {
  return (
    <section className="border-y border-border bg-linen/60">
      <div className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="Why Olive Oak" title="Details matter." />

        <ul className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <Reveal as="li" key={benefit.title} delay={index * 90}>
                <Icon
                  className="size-6 text-olive-deep"
                  strokeWidth={1.1}
                  aria-hidden="true"
                />
                <h3 className="rule-label mt-6 text-foreground">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
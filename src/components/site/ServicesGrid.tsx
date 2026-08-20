import { services, type Service } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { Reveal } from "./Reveal";

export function ServicesGrid() {
  const [curtains, blinds, decor, custom] = services as [Service, Service, Service, Service];

  return (
    <section className="bg-linen/60">
      <div className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Our Collection"
          title="Beautiful solutions for every space."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-24">
          <Reveal className="lg:col-span-7">
            <ServiceCard service={curtains} ratio="aspect-4/5 lg:aspect-16/13" />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5 lg:pt-24">
            <ServiceCard service={blinds} ratio="aspect-4/3" />
          </Reveal>
          <Reveal className="lg:col-span-5">
            <ServiceCard service={decor} ratio="aspect-4/3" />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7 lg:pt-16">
            <ServiceCard service={custom} ratio="aspect-4/3 lg:aspect-16/10" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
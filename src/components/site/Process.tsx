import { processSteps } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="Process" title="From inspiration to installation." />

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 90} className="border-t border-border pt-6">
              <p className="font-serif text-2xl text-olive-deep">{step.number}</p>
              <h3 className="rule-label mt-5 text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
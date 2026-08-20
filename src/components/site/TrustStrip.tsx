import { Reveal } from "./Reveal";

const items = ["Curtains", "Blinds", "Interior Décor", "Custom Solutions"];

export function TrustStrip() {
  return (
    <section className="border-b border-border bg-linen">
      <div className="mx-auto max-w-[86rem] px-5 py-12 sm:px-8 sm:py-14">
        <Reveal className="flex flex-col items-center gap-7 text-center">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {items.map((item, index) => (
              <li key={item} className="flex items-center gap-5">
                <span className="rule-label text-foreground/70">{item}</span>
                {index < items.length - 1 ? (
                  <span aria-hidden="true" className="size-1 rounded-full bg-olive/60" />
                ) : null}
              </li>
            ))}
          </ul>
          <p className="display-md max-w-2xl text-foreground/90">
            Thoughtfully selected details for spaces that feel distinctly yours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
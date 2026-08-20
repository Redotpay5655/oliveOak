import { useState } from "react";
import { images } from "@/content/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="Transformation"
        title="A small change. A completely different feeling."
        subtitle="Drag the slider to see how window treatments and finishing details change the mood of a room."
      />

      <Reveal className="mt-14">
        <div className="relative aspect-4/3 w-full overflow-hidden select-none sm:aspect-16/9">
          <img
            src={images.afterImage}
            alt="Example living room styled with full-length ivory curtains, warm rug and layered cushions"
            width={1408}
            height={1008}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
            aria-hidden="true"
          >
            <img
              src={images.beforeImage}
              alt=""
              width={1408}
              height={1008}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-[calc(100cqw)] object-cover"
              style={{ width: `${(100 / Math.max(position, 1)) * 100}%` }}
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-y-0 w-px bg-ivory/90"
            style={{ left: `${position}%` }}
          />
          <span className="absolute top-4 left-4 bg-charcoal/75 px-3 py-1.5 text-[0.625rem] tracking-[0.2em] text-ivory uppercase">
            Before
          </span>
          <span className="absolute top-4 right-4 bg-charcoal/75 px-3 py-1.5 text-[0.625rem] tracking-[0.2em] text-ivory uppercase">
            After
          </span>

          <label className="sr-only" htmlFor="before-after-range">
            Reveal the before and after images
          </label>
          <input
            id="before-after-range"
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            className="absolute inset-0 size-full cursor-ew-resize opacity-0"
          />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Example imagery shown to illustrate the effect of professional window treatments — not an
          actual Olive Oak project photograph.
        </p>
      </Reveal>
    </section>
  );
}
import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryFilters, galleryItems, type GalleryItem } from "@/content/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function Gallery({ items = galleryItems }: { items?: GalleryItem[] }) {
  const [filter, setFilter] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((item) => item.category === filter)),
    [filter, items],
  );

  const active = activeIndex === null ? null : visible[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight")
        setActiveIndex((index) => ((index ?? 0) + 1) % visible.length);
      if (event.key === "ArrowLeft")
        setActiveIndex((index) => ((index ?? 0) - 1 + visible.length) % visible.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, visible.length]);

  return (
    <div>
      <Reveal className="flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-5">
        {galleryFilters.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
              setFilter(option);
              setActiveIndex(null);
            }}
            aria-pressed={filter === option}
            className={cn(
              "rule-label pb-1 transition-colors",
              filter === option
                ? "border-b border-olive-deep text-olive-deep"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {option}
          </button>
        ))}
      </Reveal>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
        {visible.map((item, index) => (
          <figure key={item.id} className="mb-4 break-inside-avoid sm:mb-5">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group block w-full text-left"
            >
              <div className="media-frame group-hover:media-frame-hover">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]",
                    item.tall ? "aspect-3/4" : "aspect-4/3",
                  )}
                />
                <span className="rule-label absolute bottom-4 left-4 z-10 translate-y-2 text-ivory opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  View
                </span>
              </div>
              <figcaption className="mt-3 text-xs tracking-[0.06em] text-muted-foreground transition-colors group-hover:text-foreground">
                {item.caption}
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
        Example interior photography shown for presentation purposes. These images are structured
        to be replaced with Olive Oak's own project photographs.
      </p>

      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-60 flex items-center justify-center bg-charcoal/95 p-4 sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 inline-flex size-11 items-center justify-center text-ivory sm:top-6 sm:right-6"
          >
            <X className="size-5" strokeWidth={1.4} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((index) => ((index ?? 0) - 1 + visible.length) % visible.length);
            }}
            className="absolute left-2 inline-flex size-11 items-center justify-center text-ivory sm:left-6"
          >
            <ChevronLeft className="size-6" strokeWidth={1.3} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((index) => ((index ?? 0) + 1) % visible.length);
            }}
            className="absolute right-2 inline-flex size-11 items-center justify-center text-ivory sm:right-6"
          >
            <ChevronRight className="size-6" strokeWidth={1.3} aria-hidden="true" />
          </button>

          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[76svh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-xs tracking-[0.14em] text-ivory/70 uppercase">
              {active.caption} — {active.category}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
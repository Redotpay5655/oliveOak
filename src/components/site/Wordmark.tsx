import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  compact = false,
  asLink = true,
}: {
  className?: string;
  compact?: boolean;
  asLink?: boolean;
}) {
  const content = (
    <span className={cn("block leading-none", className)}>
      <span
        className={cn(
          "block font-serif tracking-[0.16em]",
          compact ? "text-base" : "text-lg sm:text-xl",
        )}
      >
        OLIVE OAK
      </span>
      <span className="mt-1 block text-[0.5rem] font-medium tracking-[0.34em] text-muted-foreground sm:text-[0.5625rem]">
        INTERIOR DECOR
      </span>
    </span>
  );

  if (!asLink) return content;

  return (
    <Link to="/" aria-label="Olive Oak Interior Decor — home" className="inline-block">
      {content}
    </Link>
  );
}
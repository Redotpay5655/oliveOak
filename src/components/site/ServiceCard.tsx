import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/site";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  ratio = "aspect-4/3",
  className,
}: {
  service: Service;
  ratio?: string;
  className?: string;
}) {
  return (
    <Link
      to={service.to}
      className={cn("group block", className)}
      aria-label={`${service.title} — ${service.cta}`}
    >
      <div className="media-frame group-hover:media-frame-hover">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          decoding="async"
          className={cn(
            "w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]",
            ratio,
          )}
        />
      </div>
      <div className="mt-6 max-w-md">
        <h3 className="display-md">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <span className="link-arrow mt-6 group-hover:border-olive-deep group-hover:text-olive-deep">
          {service.cta}
          <ArrowRight
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
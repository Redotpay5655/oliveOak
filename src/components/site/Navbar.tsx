import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { navLinks, whatsappLink } from "@/content/site";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-500",
        scrolled
          ? "bg-background/92 py-2 shadow-[0_1px_0_0_var(--border)] backdrop-blur-md"
          : "bg-background/70 py-4 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-[86rem] items-center justify-between gap-6 px-5 sm:px-8">
        <Wordmark compact={scrolled} />

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="rule-label pb-1 text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "rule-label pb-1 text-foreground border-b border-olive-deep",
              }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-solid hidden !min-h-11 lg:inline-flex">
            Get a Quote
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Olive Oak on WhatsApp"
            className="inline-flex size-11 items-center justify-center border border-foreground/25 text-foreground transition-colors hover:bg-foreground hover:text-background lg:hidden"
          >
            <MessageCircle className="size-[1.1rem]" strokeWidth={1.4} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex size-11 items-center justify-center text-foreground lg:hidden"
          >
            <Menu className="size-5" strokeWidth={1.4} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>

      <div
        className={cn(
          "fixed inset-0 z-70 bg-background transition-opacity duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-dvh flex-col overflow-y-auto px-5 pt-6 pb-10 sm:px-8">
          <div className="flex items-center justify-between">
            <Wordmark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center"
            >
              <X className="size-5" strokeWidth={1.4} aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-10 flex flex-1 flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-serif text-2xl text-foreground transition-colors hover:text-olive-deep"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 grid gap-3">
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-solid w-full">
              Get a Quote
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark w-full"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
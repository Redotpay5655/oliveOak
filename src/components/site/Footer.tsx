import { Link } from "@tanstack/react-router";
import { business, navLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[86rem] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="font-serif text-xl tracking-[0.16em]">OLIVE OAK</p>
            <p className="mt-1 text-[0.5625rem] font-medium tracking-[0.34em] text-ivory/60">
              INTERIOR DECOR
            </p>
            <p className="mt-6 text-sm leading-relaxed text-ivory/70">
              Curtains, blinds and interior décor solutions for beautiful spaces in Nairobi.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="rule-label text-ivory/50">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory/80 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="rule-label text-ivory/50">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80">
              <li>
                <a href={`tel:${business.phoneIntl}`} className="hover:text-ivory">
                  {business.phoneDisplay}
                </a>
              </li>
              <li>Old Mombasa Road, Nairobi</li>
            </ul>

            <h2 className="rule-label mt-8 text-ivory/50">Follow</h2>
            <ul className="mt-5 flex gap-5 text-sm text-ivory/80">
              {business.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="transition-colors hover:text-ivory"
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/15 pt-6">
          <p className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Olive Oak Interior Decor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
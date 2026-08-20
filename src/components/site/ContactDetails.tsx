import { MapPin, Phone, Clock } from "lucide-react";
import { business, mapsDirectionsLink, mapsEmbedLink, whatsappLink } from "@/content/site";
import { Reveal } from "./Reveal";

export function ContactDetails() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <p className="eyebrow">Visit or call</p>
        <h2 className="display-lg mt-4">Find us on Old Mombasa Road.</h2>

        <dl className="mt-10 space-y-8">
          <div className="flex gap-4">
            <MapPin className="mt-0.5 size-5 shrink-0 text-olive-deep" strokeWidth={1.2} aria-hidden="true" />
            <div>
              <dt className="rule-label text-muted-foreground">Studio</dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground">
                {business.name}
                <br />
                {business.address}
              </dd>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="mt-0.5 size-5 shrink-0 text-olive-deep" strokeWidth={1.2} aria-hidden="true" />
            <div>
              <dt className="rule-label text-muted-foreground">Phone</dt>
              <dd className="mt-2 text-sm text-foreground">
                <a href={`tel:${business.phoneIntl}`} className="hover:text-olive-deep">
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="mt-0.5 size-5 shrink-0 text-olive-deep" strokeWidth={1.2} aria-hidden="true" />
            <div>
              <dt className="rule-label text-muted-foreground">Business hours</dt>
              <dd className="mt-2 space-y-1 text-sm text-foreground">
                {business.hours.map((entry) => (
                  <p key={entry.days}>
                    <span className="text-muted-foreground">{entry.days}</span> — {entry.time}
                  </p>
                ))}
              </dd>
            </div>
          </div>
        </dl>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={`tel:${business.phoneIntl}`} className="btn-solid">
            Call Us
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-olive"
          >
            WhatsApp Us
          </a>
          <a
            href={mapsDirectionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark"
          >
            Get Directions
          </a>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="h-full min-h-80 border border-border bg-linen">
          <iframe
            title="Map showing Old Mombasa Road, Nairobi"
            src={mapsEmbedLink}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full min-h-80"
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Map shows the Old Mombasa Road area in Nairobi. A precise pin can be added once the exact
          premises location is confirmed.
        </p>
      </Reveal>
    </div>
  );
}
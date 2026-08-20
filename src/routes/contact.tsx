import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactDetails } from "@/components/site/ContactDetails";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { FaqSection } from "@/components/site/FaqSection";
import { images } from "@/content/site";

const title = "Contact & Quotes | Curtains and Blinds Nairobi | Olive Oak";
const description =
  "Request a quote for curtains, blinds or interior décor in Nairobi. Call 0722 270 517, message us on WhatsApp or send your project details online.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your space."
        intro="Tell us about your windows, rooms and the look you have in mind, and we'll come back to you with the options and a quote."
        image={images.galleryBedroom2}
        alt="Guest bedroom with layered taupe drapes and white sheers"
      />

      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
        <ContactDetails />
      </section>

      <section className="border-t border-border bg-linen/60">
        <div className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            eyebrow="Request a quote"
            title="Tell us about your project."
            subtitle="A few details are enough to get started — we'll follow up with anything else we need."
          />
          <Reveal className="mt-12 max-w-3xl">
            <QuoteForm />
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
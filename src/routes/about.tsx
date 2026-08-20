import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CTASection } from "@/components/site/CTASection";
import { images } from "@/content/site";

const title = "About | Interior Decorators Nairobi | Olive Oak Interior Decor";
const description =
  "Olive Oak Interior Decor is a Nairobi-based interior décor business creating curtains, blinds and décor solutions for homes, offices and hospitality spaces.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Olive Oak Approach"
        title="Designed for your space. Made to feel like home."
        intro="A Nairobi-based interior décor business focused on curtains, blinds, window treatments and the finishing details that complete a room."
        image={images.aboutDetail}
        alt="Pleated ivory curtain falling beside a wooden side table"
      />

      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="display-md max-w-2xl text-foreground/90">
              At Olive Oak Interior Decor, we believe the right window treatments and finishing
              details can completely change how a space feels.
            </p>
            <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                From elegant curtains to practical blinds and carefully selected décor, we help
                create interiors that are beautiful, comfortable and personal. Every space is
                different — the light, the proportions, the way a room is used — so the starting
                point is always your space rather than a catalogue.
              </p>
              <p>
                We work with homes, offices, hospitality spaces and other interiors across Nairobi,
                guiding clients from first ideas through to a finished, installed result.
              </p>
              <p className="text-sm text-foreground/70">
                This page is ready for the business's own story, photography and team details.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden bg-linen">
              <img
                src={images.collectionCustom}
                alt="Ivory, taupe, sage and charcoal fabric swatches beside a measuring tape"
                loading="lazy"
                decoding="async"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <WhyUs />
      <Process />
      <Testimonials />
      <CTASection />
    </>
  );
}
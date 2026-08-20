import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { AboutSection } from "@/components/site/AboutSection";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { EditorialFeature } from "@/components/site/EditorialFeature";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Process } from "@/components/site/Process";
import { CTASection } from "@/components/site/CTASection";
import { FaqSection } from "@/components/site/FaqSection";
import { images } from "@/content/site";

const title = "Olive Oak Interior Decor | Curtains, Blinds & Interior Décor Nairobi";
const description =
  "Discover curtains, blinds and interior décor solutions from Olive Oak Interior Decor in Nairobi. Explore our collection and request a quote.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ServicesGrid />
      <EditorialFeature
        eyebrow="Curtains"
        title="The right curtains can change everything."
        copy="From soft sheers that filter natural light to rich blackout fabrics that create privacy and comfort, choose window treatments that complement the way you live."
        ctaLabel="Find your style"
        ctaTo="/curtains"
        images={[
          {
            src: images.galleryBedroom1,
            alt: "Bedroom with full-length ivory blackout curtains and linen bedding",
          },
          {
            src: images.galleryLiving1,
            alt: "Living room with white sheer curtains and olive green accents",
            tall: true,
          },
          {
            src: images.galleryBedroom2,
            alt: "Guest bedroom with layered taupe drapes and white sheers",
            tall: true,
          },
        ]}
      />
      <EditorialFeature
        eyebrow="Blinds"
        title="Modern control. Effortless style."
        copy="Create the perfect balance of privacy, natural light and contemporary style with blinds selected for your space."
        ctaLabel="Request a blinds quote"
        ctaTo="/blinds"
        tone="linen"
        images={[
          {
            src: images.galleryOffice1,
            alt: "Meeting room with grey roller blinds on floor-to-ceiling windows",
          },
          {
            src: images.blindsRoller,
            alt: "Beige roller blind lowered over a bright window",
            tall: true,
          },
          {
            src: images.blindsVenetian,
            alt: "Aluminium venetian blinds with daylight across the slats",
            tall: true,
          },
        ]}
      />
      <BeforeAfter />
      <WhyUs />
      <Testimonials />
      <Process />
      <CTASection />
      <FaqSection />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Gallery } from "@/components/site/Gallery";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CTASection } from "@/components/site/CTASection";
import { images } from "@/content/site";

const title = "Our Work | Curtains & Blinds Gallery Nairobi | Olive Oak";
const description =
  "A gallery of curtains, blinds and window treatments across living spaces, bedrooms, offices and hospitality interiors in Nairobi.";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/our-work" },
    ],
    links: [{ rel: "canonical", href: "/our-work" }],
  }),
  component: OurWorkPage,
});

function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Spaces we've transformed."
        intro="A glimpse into the possibilities — curtains, blinds and finishing details across homes, offices and hospitality interiors."
        image={images.galleryHospitality2}
        alt="Restaurant interior with sheer linen drapes and woven pendant lights"
      />

      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Gallery"
          title="A glimpse into the possibilities."
          className="mb-14"
        />
        <Gallery />
      </section>

      <BeforeAfter />
      <CTASection />
    </>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { WhyUs } from "@/components/site/WhyUs";
import { images } from "@/content/site";

const title = "Blinds Nairobi | Roller, Venetian & Office Blinds | Olive Oak";
const description =
  "Roller, venetian and office blinds for homes and workspaces in Nairobi. Balance privacy, natural light and modern style with Olive Oak Interior Decor.";

export const Route = createFileRoute("/blinds")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/blinds" },
    ],
    links: [{ rel: "canonical", href: "/blinds" }],
  }),
  component: BlindsPage,
});

const types = [
  {
    name: "Roller blinds",
    copy: "A clean, uninterrupted finish that suits almost any window.",
    src: images.blindsRoller,
    alt: "Beige roller blind lowered over a bright window",
  },
  {
    name: "Venetian blinds",
    copy: "Adjustable slats for precise control over light and privacy.",
    src: images.blindsVenetian,
    alt: "Aluminium venetian blinds with daylight across the slats",
  },
  {
    name: "Office blinds",
    copy: "Practical treatments for meeting rooms and open-plan offices.",
    src: images.galleryOffice1,
    alt: "Meeting room with grey roller blinds on floor-to-ceiling windows",
  },
  {
    name: "Modern window treatments",
    copy: "Contemporary options for workspaces and compact rooms.",
    src: images.galleryOffice2,
    alt: "Home office with white vertical blinds and oak flooring",
  },
];

function BlindsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blinds"
        title="Modern control. Effortless style."
        intro="Create the perfect balance of privacy, natural light and contemporary style with blinds selected for your space."
        image={images.collectionBlinds}
        alt="Wooden venetian blinds casting soft light across a neutral wall"
      />

      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Example styles"
          title="Choose the level of light you want."
          subtitle="The styles below are shown as examples. Contact us to confirm which blind types and materials are currently available for your space."
        />

        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {types.map((type, index) => (
            <Reveal as="li" key={type.name} delay={(index % 2) * 90}>
              <div className="overflow-hidden bg-linen">
                <img
                  src={type.src}
                  alt={type.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/3 w-full object-cover transition-transform duration-[1100ms] ease-out hover:scale-[1.04]"
                />
              </div>
              <h3 className="display-md mt-6 text-2xl">{type.name}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {type.copy}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16">
          <Link to="/contact" className="btn-solid">
            Request a Blinds Quote
          </Link>
        </Reveal>
      </section>

      <WhyUs />
      <CTASection />
    </>
  );
}
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Process } from "@/components/site/Process";
import { images } from "@/content/site";

const title = "Custom Curtains Nairobi | Olive Oak Interior Decor";
const description =
  "Sheer, blackout and layered curtains selected for your windows, light and interior style. Custom curtains in Nairobi by Olive Oak Interior Decor.";

export const Route = createFileRoute("/curtains")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/curtains" },
    ],
    links: [{ rel: "canonical", href: "/curtains" }],
  }),
  component: CurtainsPage,
});

const styles = [
  {
    name: "Sheer curtains",
    copy: "Soften daylight while keeping the room bright and open.",
    src: images.galleryLiving1,
    alt: "White sheer curtains filtering daylight in a living room",
  },
  {
    name: "Blackout curtains",
    copy: "Heavier fabrics for privacy, rest and better light control.",
    src: images.galleryBedroom1,
    alt: "Ivory blackout curtains drawn across a bedroom window",
  },
  {
    name: "Layered curtains",
    copy: "Sheers paired with drapes for flexibility through the day.",
    src: images.collectionCurtains,
    alt: "Sheer inner panels layered with taupe outer curtains",
  },
  {
    name: "Living room curtains",
    copy: "Full-height treatments that frame a room and add height.",
    src: images.heroLiving,
    alt: "Full-height linen curtains in an open living room",
  },
  {
    name: "Bedroom curtains",
    copy: "Calm, neutral tones that settle a sleeping space.",
    src: images.galleryBedroom2,
    alt: "Layered taupe drapes and sheers in a guest bedroom",
  },
  {
    name: "Textured fabrics",
    copy: "Weaves and finishes that add quiet depth to plain walls.",
    src: images.galleryDetail1,
    alt: "Close detail of textured sage and ivory curtain fabric",
  },
];

function CurtainsPage() {
  return (
    <>
      <PageHero
        eyebrow="Curtains"
        title="The right curtains can change everything."
        intro="From soft sheers that filter natural light to rich blackout fabrics that create privacy and comfort, choose window treatments that complement the way you live."
        image={images.collectionCurtains}
        alt="Layered sheer and taupe curtains framing a tall bedroom window"
      />

      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Styles to consider"
          title="A curtain for every kind of light."
          subtitle="Examples of the styles most often requested. Share your room and we'll confirm the fabrics and finishes available for your project."
        />

        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {styles.map((style, index) => (
            <Reveal as="li" key={style.name} delay={(index % 3) * 90}>
              <div className="overflow-hidden bg-linen">
                <img
                  src={style.src}
                  alt={style.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/5 w-full object-cover transition-transform duration-[1100ms] ease-out hover:scale-[1.04]"
                />
              </div>
              <h3 className="display-md mt-6 text-2xl">{style.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{style.copy}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16">
          <Link to="/contact" className="btn-solid">
            Find your style
          </Link>
        </Reveal>
      </section>

      <Process />
      <CTASection />
    </>
  );
}
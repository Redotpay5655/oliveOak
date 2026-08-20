import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { Process } from "@/components/site/Process";
import { images } from "@/content/site";

const title = "Interior Décor Nairobi | Finishing Touches | Olive Oak Interior Decor";
const description =
  "Interior décor solutions in Nairobi — texture, warmth and finishing details selected to complete your home, office or hospitality space.";

export const Route = createFileRoute("/interior-decor")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/interior-decor" },
    ],
    links: [{ rel: "canonical", href: "/interior-decor" }],
  }),
  component: DecorPage,
});

const focuses = [
  {
    title: "Texture and layering",
    copy: "Woven, wooden and ceramic finishes that stop a room feeling flat.",
  },
  {
    title: "Colour and light",
    copy: "Tones chosen to work with your walls, flooring and natural light.",
  },
  {
    title: "Finishing details",
    copy: "The final pieces that make a completed space feel considered.",
  },
];

function DecorPage() {
  return (
    <>
      <PageHero
        eyebrow="Interior Décor"
        title="Window treatments that transform a room."
        intro="Thoughtful finishing touches that bring texture, warmth and personality into your space — for homes, offices and hospitality interiors."
        image={images.collectionDecor}
        alt="Styled console table with ceramics, woven basket and olive branches"
      />

      <section className="mx-auto max-w-[86rem] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden bg-linen">
              <img
                src={images.galleryHospitality1}
                alt="Hotel lounge with tall beige drapes and velvet armchairs"
                loading="lazy"
                decoding="async"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:pt-10">
            <p className="eyebrow">Our approach</p>
            <h2 className="display-lg mt-5">
              Considered pieces, not more things.
            </h2>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              Décor works best when it supports the room rather than competing with it. We help
              select the details that pull a space together — with restraint, and with the way you
              use the room in mind.
            </p>
            <ul className="mt-10 space-y-8">
              {focuses.map((focus) => (
                <li key={focus.title} className="border-t border-border pt-5">
                  <h3 className="rule-label text-foreground">{focus.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {focus.copy}
                  </p>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-solid mt-10">
              Start Your Project
            </Link>
          </Reveal>
        </div>
      </section>

      <Process />
      <CTASection />
    </>
  );
}
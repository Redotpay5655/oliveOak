/**
 * Central content source for the Olive Oak Interior Decor site.
 * Everything here is intentionally data-driven so it can later be
 * swapped for a CMS/database without touching the UI components.
 */
import heroLiving from "@/assets/hero-living.jpg";
import aboutDetail from "@/assets/about-detail.jpg";
import collectionCurtains from "@/assets/collection-curtains.jpg";
import collectionBlinds from "@/assets/collection-blinds.jpg";
import collectionDecor from "@/assets/collection-decor.jpg";
import collectionCustom from "@/assets/collection-custom.jpg";
import ctaInterior from "@/assets/cta-interior.jpg";
import galleryLiving1 from "@/assets/gallery-living-1.jpg";
import galleryBedroom1 from "@/assets/gallery-bedroom-1.jpg";
import galleryBedroom2 from "@/assets/gallery-bedroom-2.jpg";
import galleryOffice1 from "@/assets/gallery-office-1.jpg";
import galleryOffice2 from "@/assets/gallery-office-2.jpg";
import galleryHospitality1 from "@/assets/gallery-hospitality-1.jpg";
import galleryHospitality2 from "@/assets/gallery-hospitality-2.jpg";
import galleryDetail1 from "@/assets/gallery-detail-1.jpg";
import blindsRoller from "@/assets/blinds-roller.jpg";
import blindsVenetian from "@/assets/blinds-venetian.jpg";
import beforeImage from "@/assets/before.jpg";
import afterImage from "@/assets/after.jpg";

export const images = {
  heroLiving,
  aboutDetail,
  collectionCurtains,
  collectionBlinds,
  collectionDecor,
  collectionCustom,
  ctaInterior,
  galleryLiving1,
  galleryBedroom1,
  galleryBedroom2,
  galleryOffice1,
  galleryOffice2,
  galleryHospitality1,
  galleryHospitality2,
  galleryDetail1,
  blindsRoller,
  blindsVenetian,
  beforeImage,
  afterImage,
};

export const business = {
  name: "Olive Oak Interior Decor",
  shortName: "Olive Oak",
  address: "Old Mombasa Road, Nairobi, Kenya",
  phoneDisplay: "0722 270 517",
  phoneIntl: "+254722270517",
  whatsappNumber: "254722270517",
  whatsappMessage:
    "Hello Olive Oak Interior Decor, I'd like to enquire about your curtains/blinds and request a quote.",
  mapsQuery: "Old Mombasa Road, Nairobi, Kenya",
  hours: [
    { days: "Monday – Saturday", time: "9:00 AM – 6:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  /** Replace with the business's verified profile URLs. */
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};

export const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
  business.whatsappMessage,
)}`;

export const mapsDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  business.mapsQuery,
)}`;

export const mapsEmbedLink = `https://www.google.com/maps?q=${encodeURIComponent(
  business.mapsQuery,
)}&output=embed`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Curtains", to: "/curtains" },
  { label: "Blinds", to: "/blinds" },
  { label: "Interior Décor", to: "/interior-decor" },
  { label: "Our Work", to: "/our-work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  description: string;
  cta: string;
  to: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    slug: "curtains",
    title: "Curtains",
    description:
      "Elegant window treatments tailored to complement your space, style and light requirements.",
    cta: "Explore Curtains",
    to: "/curtains",
    image: collectionCurtains,
    alt: "Layered sheer and taupe curtains framing a tall bedroom window",
  },
  {
    slug: "blinds",
    title: "Blinds",
    description:
      "Clean, practical and contemporary window solutions for homes, offices and modern interiors.",
    cta: "Explore Blinds",
    to: "/blinds",
    image: collectionBlinds,
    alt: "Wooden venetian blinds casting soft light across a neutral wall",
  },
  {
    slug: "interior-decor",
    title: "Interior Décor",
    description:
      "Thoughtful finishing touches that bring texture, warmth and personality into your space.",
    cta: "Explore Décor",
    to: "/interior-decor",
    image: collectionDecor,
    alt: "Styled console table with ceramics, woven basket and olive branches",
  },
  {
    slug: "custom",
    title: "Custom Solutions",
    description:
      "Personalized window treatments and décor solutions created around your space and preferences.",
    cta: "Start Your Project",
    to: "/contact",
    image: collectionCustom,
    alt: "Ivory, taupe, sage and charcoal fabric swatches beside a measuring tape",
  },
];

export type GalleryCategory = "Living Spaces" | "Bedrooms" | "Offices" | "Hospitality";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Editorial layout hint for the masonry grid. */
  tall?: boolean;
};

/**
 * Example interior photography — replace each entry with Olive Oak's own
 * project photographs as they become available.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: galleryLiving1,
    alt: "Living room with white sheer curtains, jute rug and olive green accents",
    caption: "Sheer curtains, apartment living room",
    category: "Living Spaces",
    tall: true,
  },
  {
    id: "g2",
    src: galleryBedroom1,
    alt: "Bedroom with full-length ivory blackout curtains and linen bedding",
    caption: "Ivory blackout curtains, main bedroom",
    category: "Bedrooms",
  },
  {
    id: "g3",
    src: galleryOffice1,
    alt: "Meeting room with grey roller blinds on floor-to-ceiling windows",
    caption: "Roller blinds, meeting room",
    category: "Offices",
  },
  {
    id: "g4",
    src: galleryHospitality2,
    alt: "Restaurant interior with sheer linen drapes and woven pendant lights",
    caption: "Linen drapes, restaurant seating",
    category: "Hospitality",
    tall: true,
  },
  {
    id: "g5",
    src: galleryDetail1,
    alt: "Close detail of textured sage and ivory curtain fabric",
    caption: "Textured fabric detail",
    category: "Living Spaces",
  },
  {
    id: "g6",
    src: galleryBedroom2,
    alt: "Guest bedroom with layered taupe drapes and white sheers",
    caption: "Layered drapes, guest bedroom",
    category: "Bedrooms",
    tall: true,
  },
  {
    id: "g7",
    src: galleryOffice2,
    alt: "Workspace corner with white vertical blinds and oak flooring",
    caption: "Vertical blinds, home office",
    category: "Offices",
    tall: true,
  },
  {
    id: "g8",
    src: galleryHospitality1,
    alt: "Hotel lounge with tall beige drapes and velvet armchairs",
    caption: "Floor-to-ceiling drapes, hotel lounge",
    category: "Hospitality",
  },
  {
    id: "g9",
    src: heroLiving,
    alt: "Open living room with full-height linen curtains beside a garden window",
    caption: "Full-height linen curtains, living room",
    category: "Living Spaces",
  },
  {
    id: "g10",
    src: blindsRoller,
    alt: "Beige roller blind lowered over a bright window in a minimal room",
    caption: "Roller blind, sitting room",
    category: "Living Spaces",
  },
  {
    id: "g11",
    src: collectionCurtains,
    alt: "Sheer inner panels with heavy taupe outer curtains in a bedroom",
    caption: "Sheer and drape combination, bedroom",
    category: "Bedrooms",
  },
  {
    id: "g12",
    src: blindsVenetian,
    alt: "Aluminium venetian blinds detail with daylight across the slats",
    caption: "Aluminium venetian blinds, office",
    category: "Offices",
  },
  {
    id: "g13",
    src: aboutDetail,
    alt: "Pleated ivory curtain falling beside a wooden side table",
    caption: "Pleated curtain detail",
    category: "Living Spaces",
    tall: true,
  },
  {
    id: "g14",
    src: ctaInterior,
    alt: "Evening lounge with charcoal blackout curtains and warm lamp light",
    caption: "Blackout curtains, evening lounge",
    category: "Hospitality",
  },
];

export const galleryFilters = [
  "All",
  "Living Spaces",
  "Bedrooms",
  "Offices",
  "Hospitality",
] as const;

export const benefits = [
  {
    title: "Custom Fit",
    description: "Solutions selected around your windows, space and style.",
    icon: "ruler",
  },
  {
    title: "Quality Finishes",
    description: "Beautiful materials and finishes designed to complement your interior.",
    icon: "layers",
  },
  {
    title: "Professional Guidance",
    description: "Get help choosing options that work with your room, lighting and aesthetic.",
    icon: "compass",
  },
  {
    title: "Personal Service",
    description: "A more considered approach from selection to final installation.",
    icon: "handshake",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Tell us about your space, style and requirements.",
  },
  {
    number: "02",
    title: "Consult",
    description: "Explore fabrics, window treatments and décor options.",
  },
  {
    number: "03",
    title: "Create",
    description: "We prepare the selected solution for your space.",
  },
  {
    number: "04",
    title: "Transform",
    description: "Complete installation and enjoy your refreshed interior.",
  },
] as const;

/**
 * Placeholder testimonial slots. Never publish invented quotes —
 * replace the `quote` and `author` fields with verified reviews only.
 */
export const testimonials = [
  {
    id: "t1",
    quote: "[Verified customer testimonial will appear here.]",
    author: "Customer name",
    context: "Nairobi",
  },
  {
    id: "t2",
    quote: "[Verified customer testimonial will appear here.]",
    author: "Customer name",
    context: "Nairobi",
  },
  {
    id: "t3",
    quote: "[Verified customer testimonial will appear here.]",
    author: "Customer name",
    context: "Nairobi",
  },
] as const;

export const faqs = [
  {
    question: "Do you offer custom curtains?",
    answer:
      "Yes — curtains can be prepared to suit your window measurements, fabric preference and finish. Share your details and we'll confirm the options available for your space.",
  },
  {
    question: "What types of blinds are available?",
    answer:
      "Options such as roller, venetian and office-style blinds are commonly requested. Get in touch and we'll confirm the styles and materials currently available.",
  },
  {
    question: "Can you help me choose the right curtains for my space?",
    answer:
      "We're happy to talk through fabric weight, light control and colour so your choice suits the room, its lighting and the rest of your interior.",
  },
  {
    question: "Do you serve customers outside Nairobi?",
    answer:
      "We're based on Old Mombasa Road in Nairobi. Please contact us with your location and we'll advise on what we can arrange.",
  },
  {
    question: "Can I request a quote through WhatsApp?",
    answer:
      "Yes. Send us a message on WhatsApp with your room, window sizes if you have them, and the look you have in mind, and we'll respond with next steps.",
  },
  {
    question: "Do you handle installation?",
    answer:
      "Installation can usually be arranged as part of your project. Please confirm with us when requesting your quote.",
  },
] as const;

export const projectTypes = [
  "Curtains",
  "Blinds",
  "Interior Décor",
  "Residential",
  "Office",
  "Hospitality",
  "Other",
] as const;

export const contactMethods = ["WhatsApp", "Phone call", "Email"] as const;
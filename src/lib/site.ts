// Central content + business data for Harts French Polishing.
// Swap the placeholder copy, contact details and images here once the
// client provides their real assets — every page reads from this file.

export const site = {
  name: "Harts French Polishing",
  shortName: "Harts",
  tagline: "Making all wood look new again",
  intro:
    "Traditional French polishing and fine wood restoration in Hertford. We clean, revive, strip, repolish and colour-match timber of every kind — bringing tired furniture, staircases and bars back to their very best.",
  phone: "07999 590352",
  // International format for the click-to-call link.
  phoneHref: "tel:+447999590352",
  // Placeholder — confirm the real address with the client.
  email: "hello@hartsfrenchpolishing.co.uk",
  address: {
    line1: "11 Dolphin Yard",
    city: "Hertford",
    postcode: "SG14 1DR",
    country: "United Kingdom",
  },
  // Placeholder hours — confirm exact times with the client.
  hours: [
    { day: "Monday", time: "7:30am – 5:00pm" },
    { day: "Tuesday", time: "7:30am – 5:00pm" },
    { day: "Wednesday", time: "7:30am – 5:00pm" },
    { day: "Thursday", time: "7:30am – 5:00pm" },
    { day: "Friday", time: "7:30am – 5:00pm" },
    { day: "Saturday", time: "7:30am – 12:00pm" },
    { day: "Sunday", time: "Closed" },
  ],
  established: 1998,
  // Local search / service coverage.
  areas: [
    "Hertford",
    "Ware",
    "Hertingfordbury",
    "Hoddesdon",
    "Bengeo",
    "Welwyn Garden City",
    "Hatfield",
    "Stevenage",
    "St Albans",
    "North London",
  ],
  social: {
    // Placeholders — add the client's real profiles.
    facebook: "#",
    instagram: "#",
  },
  // Google Maps embed for Hertford (approximate, for the demo).
  mapEmbed:
    "https://www.google.com/maps?q=11+Dolphin+Yard,+Hertford+SG14+1DR&output=embed",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  description: string[];
  includes: string[];
  image: string;
  icon: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "french-polishing",
    title: "French Polishing",
    short: "The traditional hand-applied shellac finish.",
    summary:
      "A hand-applied shellac finish, built up in fine layers to a deep, mellow, glass-like lustre that machine finishes simply cannot match.",
    description: [
      "French polishing is a centuries-old technique in which many thin coats of shellac are applied by hand using a cloth 'rubber'. The result is a warm, deep and beautifully reflective finish that shows off the natural grain of the timber.",
      "It is the finish of choice for fine antiques, grand pianos, dining tables and any piece where quality matters. Every job is prepared, polished and finished entirely by hand in our Hertford workshop or on site at your home.",
    ],
    includes: [
      "Full surface preparation and grain filling",
      "Hand-applied shellac in multiple fine coats",
      "Bodying up and spiriting off for a flawless finish",
      "Matching sheen from high gloss to satin",
    ],
    image: "/images/hero-table.png",
    icon: "sparkle",
    featured: true,
  },
  {
    slug: "antique-restoration",
    title: "Antique & Furniture Restoration",
    short: "Sympathetic repair and restoration of treasured pieces.",
    summary:
      "Careful, sympathetic restoration of antique and modern furniture — repairing damage while respecting the age, character and value of the piece.",
    description: [
      "From loose joints and missing veneer to scratches, rings and sun-faded tops, we restore furniture of every era. Our approach is always sympathetic: we retain original character and patina wherever possible.",
      "Whether it is a family heirloom or a modern piece you love, we treat every item with the same care and craftsmanship.",
    ],
    includes: [
      "Structural repairs and re-gluing of joints",
      "Veneer and inlay repair or replacement",
      "Removal of scratches, water marks and heat rings",
      "Restoration of original patina and finish",
    ],
    image: "/images/furniture.png",
    icon: "chair",
    featured: true,
  },
  {
    slug: "strip-repolish",
    title: "Stripping & Repolishing",
    short: "Remove tired, damaged finishes and start afresh.",
    summary:
      "Where a finish is beyond reviving, we carefully strip it back and build a fresh, flawless polish from bare timber.",
    description: [
      "Old, flaking or heavily damaged finishes are removed by hand to protect the timber beneath. We then prepare the surface and rebuild the finish from scratch — leaving the piece looking better than the day it was made.",
      "Ideal for pieces that have been previously over-painted, poorly finished or badly worn.",
    ],
    includes: [
      "Gentle hand stripping of old finishes",
      "Full surface preparation and sanding",
      "Fresh polish or lacquer applied to your chosen sheen",
      "Optional recolouring at the same time",
    ],
    image: "/images/craftsman.png",
    icon: "brush",
    featured: true,
  },
  {
    slug: "clean-revive",
    title: "Cleaning & Reviving",
    short: "Bring dull, tired surfaces back to life.",
    summary:
      "A gentle, cost-effective revival for finishes that are simply tired and dull rather than damaged — often all a piece needs.",
    description: [
      "Not every piece needs a full repolish. Where the original finish is sound but looking tired, our cleaning and reviving service removes years of grime, wax build-up and dullness to restore the natural shine.",
      "It is the most economical way to refresh a much-loved piece and is often all that is required.",
    ],
    includes: [
      "Deep cleaning and removal of old wax and grime",
      "Reviving and feeding of the existing finish",
      "Light blemish and mark removal",
      "Protective wax or polish to finish",
    ],
    image: "/images/workshop.png",
    icon: "shine",
  },
  {
    slug: "colour-matching",
    title: "Colour Matching",
    short: "Seamless colour blending and matching.",
    summary:
      "Expert colour matching to blend repairs invisibly or to change the colour of a piece to suit your interior.",
    description: [
      "Colour is at the heart of a convincing restoration. We mix stains and pigments by eye to match existing timber, blend in repairs, or completely change the tone of a piece to suit a new setting.",
      "From matching a replacement leg to a chair, to darkening a whole suite of furniture, our eye for colour makes repairs disappear.",
    ],
    includes: [
      "Bespoke stain and pigment mixing",
      "Invisible blending of repairs and replacements",
      "Full colour changes to suit your interior",
      "Grain and figure enhancement",
    ],
    image: "/images/furniture.png",
    icon: "palette",
  },
  {
    slug: "wood-bleaching",
    title: "Wood Bleaching",
    short: "Lighten timber and remove stubborn stains.",
    summary:
      "Bleaching to lighten over-dark timber, remove ingrained water and ink stains, or achieve a fashionable paler tone.",
    description: [
      "Bleaching lightens timber that has darkened with age or been over-stained, and lifts stubborn water, ink and dye stains that cannot be sanded out. It is also used to achieve on-trend, paler finishes.",
      "It is a specialist process that demands experience to control evenly — exactly the sort of work we do every day.",
    ],
    includes: [
      "Even lightening of over-dark or aged timber",
      "Removal of stubborn water and ink stains",
      "On-trend pale and limed finishes",
      "Careful neutralising and refinishing",
    ],
    image: "/images/craftsman.png",
    icon: "droplet",
  },
  {
    slug: "staircase-restoration",
    title: "Staircase & Banister Restoration",
    short: "Restore staircases, handrails and newel posts.",
    summary:
      "On-site restoration of wooden staircases, handrails, spindles and newel posts — a beautiful centrepiece for any home.",
    description: [
      "A staircase is often the first thing you see in a home. We strip, repair, colour and polish handrails, spindles, treads and newel posts, working carefully on site with minimal disruption.",
      "The result is a hardwearing, beautiful finish that stands up to daily use for years to come.",
    ],
    includes: [
      "On-site working with dust control",
      "Stripping and repair of handrails and spindles",
      "Recolouring to match or update your interior",
      "Durable, hardwearing final finish",
    ],
    image: "/images/staircase.png",
    icon: "stairs",
  },
  {
    slug: "commercial",
    title: "Commercial & Hospitality",
    short: "Bars, restaurants, hotels, offices and yachts.",
    summary:
      "Trusted by pubs, hotels, restaurants and offices for bar tops, panelling, reception desks and fit-out finishing.",
    description: [
      "We work with businesses across Hertfordshire and London to finish and restore bar tops, panelling, reception desks, boardroom tables and shopfittings. We understand the need for a hardwearing finish and minimal disruption to trade.",
      "Flexible scheduling — including out-of-hours and overnight work — keeps your doors open while we work.",
    ],
    includes: [
      "Bar tops, panelling and reception desks",
      "Boardroom tables and executive furniture",
      "Hardwearing finishes built for daily use",
      "Out-of-hours and overnight scheduling",
    ],
    image: "/images/commercial-bar.png",
    icon: "building",
  },
  {
    slug: "insurance-restoration",
    title: "Insurance, Fire & Flood Restoration",
    short: "Specialist restoration for insurance claims.",
    summary:
      "Specialist restoration of fire, flood and accidental-damage claims, with clear reporting for insurers and loss adjusters.",
    description: [
      "We work with homeowners, insurers and loss adjusters to restore furniture and timber damaged by fire, smoke, flood and accidents. Where a piece can be saved, restoration is often far more economical than replacement.",
      "We provide honest assessments, clear documentation and a professional service throughout the claim.",
    ],
    includes: [
      "Assessment and reporting for insurers",
      "Fire, smoke and flood damage restoration",
      "Accidental damage repairs",
      "Honest advice on restore-versus-replace",
    ],
    image: "/images/workshop.png",
    icon: "shield",
  },
];

export const featuredServices = services.filter((s) => s.featured);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

// Placeholder testimonials — replace with the client's real reviews.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Our dining table had years of water marks and dull patches. It came back looking better than new — a genuinely beautiful, deep finish. Faultless work.",
    name: "Margaret H.",
    location: "Hertford",
  },
  {
    quote:
      "They restored the mahogany banister on our Victorian staircase on site over two days. Tidy, professional and the result is stunning.",
    name: "James & Sarah P.",
    location: "Ware",
  },
  {
    quote:
      "We use Harts for all the timber in our pub. The bar top always looks immaculate and they work around our opening hours without any fuss.",
    name: "The Old Bell",
    location: "Hertfordshire",
  },
  {
    quote:
      "An antique writing desk that had been in the family for generations was repaired and repolished beautifully. Highly recommended.",
    name: "David R.",
    location: "Bengeo",
  },
];

export type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
};

// Gallery items showcasing real project photography.
export const projects: Project[] = [
  {
    title: "Armchair Frame Polishing",
    category: "French Polishing",
    image: "/images/real/gallery-1.webp",
    description:
      "The show-wood arms and frame of this upholstered armchair were cleaned and hand-polished to bring back a warm, even sheen.",
  },
  {
    title: "Teak Garden Set Revival",
    category: "Cleaning & Reviving",
    image: "/images/real/gallery-2.webp",
    description:
      "A weathered outdoor teak table and chairs cleaned back and revived, restoring warmth and protection to the timber.",
  },
  {
    title: "Mahogany Tripod Table",
    category: "Antique Restoration",
    image: "/images/real/gallery-3.webp",
    description:
      "A tilt-top pedestal table sympathetically repaired and repolished to a deep, mellow shine that honours its age.",
  },
  {
    title: "Staircase Handrail Restoration",
    category: "French Polishing",
    image: "/images/real/gallery-4.webp",
    description:
      "A sweeping mahogany handrail stripped, colour-matched and hand-polished to a rich, hard-wearing finish.",
  },
  {
    title: "Hardwood Floor Revival",
    category: "Cleaning & Reviving",
    image: "/images/real/gallery-5.webp",
    description:
      "Tired, dull floorboards cleaned and revived to reveal the natural grain and warmth of the timber.",
  },
  {
    title: "Dining Table Repolishing",
    category: "French Polishing",
    image: "/images/real/gallery-6.webp",
    description:
      "A mahogany dining table and chairs stripped and hand-polished to a deep, mirror-like lustre for years of family use.",
  },
  {
    title: "Handrail & Balustrade",
    category: "French Polishing",
    image: "/images/real/gallery-7.webp",
    description:
      "A polished mahogany handrail set against freshly stripped spindles — hand-finished coat by coat for a lasting shine.",
  },
];

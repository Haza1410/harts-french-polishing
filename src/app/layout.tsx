import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hartsfrenchpolishing.co.uk"),
  title: {
    default: `${site.name} | Traditional French Polishing in Hertford`,
    template: `%s | ${site.name}`,
  },
  description:
    "Traditional hand French polishing and fine wood restoration in Hertford, Hertfordshire. Antique restoration, stripping & repolishing, colour matching, staircases and commercial work.",
  keywords: [
    "French polishing Hertford",
    "furniture restoration Hertfordshire",
    "antique restoration",
    "wood repolishing",
    "staircase restoration",
    "colour matching",
    "wood bleaching",
  ],
  openGraph: {
    title: `${site.name} | Traditional French Polishing in Hertford`,
    description:
      "Traditional hand French polishing and fine wood restoration in Hertford, Hertfordshire.",
    url: "https://www.hartsfrenchpolishing.co.uk",
    siteName: site.name,
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/hero-table.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  description:
    "Traditional hand French polishing and fine wood restoration in Hertford, Hertfordshire.",
  image: "https://www.hartsfrenchpolishing.co.uk/images/hero-table.png",
  telephone: site.phone,
  email: site.email,
  url: "https://www.hartsfrenchpolishing.co.uk",
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  areaServed: site.areas.map((a) => ({ "@type": "Place", name: a })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "07:30",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:30",
      closes: "12:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

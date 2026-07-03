import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "French polishing, antique and furniture restoration, stripping and repolishing, colour matching, wood bleaching, staircase restoration and commercial work in Hertford.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Fine wood restoration & French polishing"
        intro="From treasured antiques to staircases, bar tops and everyday favourites — explore the full range of services we offer across Hertford and Hertfordshire."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Not sure what your piece needs?"
        intro="Send us a photo and we'll advise honestly on the best approach — often a simple clean and revive is all it takes."
      />
    </>
  );
}

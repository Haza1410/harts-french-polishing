import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import BeforeAfter from "@/components/BeforeAfter";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See examples of our French polishing and wood restoration work — antiques, staircases, bar tops and more, restored across Hertford and Hertfordshire.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="A gallery of transformations"
        intro="A selection of pieces we have cleaned, repaired, colour-matched and hand-polished. Drag the slider below to see a restoration in action."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      {/* Featured before/after */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Before & after"
              title="The Harts difference"
              intro="This dining table arrived tired, dull and marked. After a careful strip, colour balance and hand French polish, it was returned with a deep, mirror-like finish."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-muted">
                Every project is different — but the goal is always the same:
                to reveal the natural beauty of the timber and protect it for
                years to come.
              </p>
            </Reveal>
          </div>
          <div className="order-1 lg:order-2">
            <BeforeAfter
              image="/images/hero-table.png"
              alt="Mahogany dining table restoration"
            />
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="grain bg-parchment py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Recent projects"
            title="Pieces we have brought back to life"
            className="mb-14"
          />
          <GalleryGrid projects={projects} />
          <p className="mt-12 text-center text-sm text-muted">
            These are placeholder examples for the demo &mdash; we&rsquo;ll
            showcase your real projects here.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Have a piece in mind?"
        intro="We'd love to see it. Send a photo for a free assessment and quote."
      />
    </>
  );
}

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
        <SectionHeading
          align="center"
          eyebrow="Before & after"
          title="The Harts difference"
          intro="Drag the sliders to see the transformation. Every project is different — but the goal is always the same: to reveal the natural beauty of the timber and protect it for years to come."
          className="mb-14"
        />

        {/* First before/after - Door restoration */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <BeforeAfter
              beforeImage="/images/real/before.webp"
              image="/images/real/after.webp"
              alt="Front door restoration"
              beforeScale={1}
              beforeX={0}
              beforeY={0}
              afterScale={1.2}
              afterX={0}
              afterY={60}
            />
          </div>
          <div className="order-1 lg:order-2">
            <Reveal>
              <h3 className="font-serif text-2xl font-semibold text-espresso">
                Front door restoration
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                This oak front door had become faded and weathered over the
                years. After stripping back the old finish, colour balancing
                and applying a protective French polish, it was restored to
                its original warmth and character.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Second before/after */}
        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-2">
            <BeforeAfter
              beforeImage="/images/real/after2.webp"
              image="/images/real/before2.webp"
              alt="Wood restoration"
              beforeScale={1}
              beforeX={0}
              beforeY={0}
              afterScale={1}
              afterX={0}
              afterY={0}
            />
          </div>
          <div className="order-1 lg:order-1">
            <Reveal>
              <h3 className="font-serif text-2xl font-semibold text-espresso">
                Fine furniture restoration
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                Tired, dull and marked surfaces are carefully stripped,
                colour-matched and hand-polished to bring back their deep,
                mirror-like finish. The result speaks for itself.
              </p>
            </Reveal>
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
        </div>
      </section>

      <CtaBanner
        title="Have a piece in mind?"
        intro="We'd love to see it. Send a photo for a free assessment and quote."
      />
    </>
  );
}

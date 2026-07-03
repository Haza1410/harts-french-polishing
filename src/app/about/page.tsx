import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CtaBanner from "@/components/CtaBanner";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Harts French Polishing — a Hertford-based wood restoration workshop specialising in traditional hand French polishing since 1998.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "sparkle",
    title: "Craftsmanship first",
    text: "We never cut corners. Traditional methods, quality materials and patience are what set a true hand-polished finish apart.",
  },
  {
    icon: "leaf",
    title: "Respect for the piece",
    text: "Whether antique or modern, we preserve character and patina, restoring rather than replacing wherever we can.",
  },
  {
    icon: "handshake",
    title: "Honesty & value",
    text: "Free, straightforward quotes and genuine advice — we'll always tell you the most sensible option for your budget.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Traditional craft, in the heart of Hertford"
        intro="Harts French Polishing is a workshop built on a love of timber and a respect for a craft that has barely changed in centuries."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <Image
                src={asset("/images/workshop.png")}
                alt="The Harts French Polishing workshop bench"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow={`Est. ${site.established}`}
              title="A workshop devoted to fine finishes"
              intro="For over two decades we have been cleaning, reviving, stripping and repolishing timber across Hertfordshire — from delicate antiques to hardworking bar tops."
            />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-5 leading-relaxed text-muted">
                <p>
                  French polishing is a craft of patience. Fine coats of
                  shellac are applied by hand and slowly built into a finish of
                  remarkable depth and warmth — a look that simply cannot be
                  achieved by machine.
                </p>
                <p>
                  We work for homeowners, interior designers, antique dealers,
                  hotels and pubs alike. Every job, large or small, receives the
                  same care and attention to detail, whether in our workshop or
                  on site at your home or business.
                </p>
                <p>
                  Our promise is simple: honest advice, beautiful results and a
                  finish that will be enjoyed for many years to come.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="grain bg-parchment py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="Our values"
            className="mb-14"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl bg-ivory p-8 shadow-[var(--shadow-soft)]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-mahogany">
                    <Icon name={v.icon} size={26} />
                  </span>
                  <h3 className="mt-5 text-2xl">{v.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

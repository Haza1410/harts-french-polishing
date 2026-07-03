import Image from "next/image";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import { services, site } from "@/lib/site";
import { asset } from "@/lib/asset";

const stats = [
  { value: "25+", label: "Years of craft" },
  { value: "3,000+", label: "Pieces restored" },
  { value: "100%", label: "Hand finished" },
];

const whyUs = [
  {
    icon: "sparkle",
    title: "Traditional hand craft",
    text: "Every finish is built up by hand using time-honoured French polishing methods — never rushed, never sprayed on.",
  },
  {
    icon: "leaf",
    title: "Sympathetic restoration",
    text: "We protect the age, patina and character of your piece, whether it is a family heirloom or a modern favourite.",
  },
  {
    icon: "handshake",
    title: "Honest, friendly advice",
    text: "Free quotes and straight-talking guidance on whether a piece is best cleaned, revived or fully repolished.",
  },
  {
    icon: "building",
    title: "Home & commercial",
    text: "Trusted by homeowners, interior designers, hotels and pubs across Hertford and Hertfordshire.",
  },
];

const process = [
  {
    step: "01",
    title: "Get in touch",
    text: "Call us or send a few photos of your piece. We will give you honest advice and a free, no-obligation quote.",
  },
  {
    step: "02",
    title: "Assessment",
    text: "We inspect the timber and finish — at your home or in our workshop — and agree the right approach with you.",
  },
  {
    step: "03",
    title: "The craft",
    text: "Repairs, colour work and hand polishing are carried out with care, keeping you updated along the way.",
  },
  {
    step: "04",
    title: "Restored & returned",
    text: "Your piece is returned looking its very best, with advice on how to care for and protect the new finish.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center">
        <Image
          src={asset("/images/hero-table.png")}
          alt="A beautifully French-polished antique dining table"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/60 to-espresso/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-transparent" />

        <div className="container-page relative z-10 pt-24">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow !text-gold-soft">
                Hertford &middot; Est. {site.established}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 !text-ivory text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                Making all wood
                <br />
                look good again
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/85">
                Traditional French polishing and fine wood restoration. We
                clean, revive, strip, repolish and colour-match timber of every
                kind — from treasured antiques to staircases and bar tops.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="light" withArrow>
                  Request a free quote
                </Button>
                <Button href="/services" variant="ghost" className="!text-ivory hover:!text-gold-soft border border-ivory/30 hover:bg-ivory/10">
                  Explore our services
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-espresso/10 bg-cream">
        <div className="container-page grid grid-cols-2 gap-8 py-8 text-center sm:grid-cols-4">
          {[
            "Free no-obligation quotes",
            "Home & on-site visits",
            "Fully insured work",
            "Est. " + site.established,
          ].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center gap-2 text-sm font-medium text-walnut"
            >
              <Icon name="check" size={18} className="text-brass" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Intro / craft story */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <Image
                src={asset("/images/craftsman.png")}
                alt="A craftsman French polishing wood by hand"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden rounded-2xl bg-mahogany p-6 text-ivory shadow-[var(--shadow-card)] sm:block">
              <p className="font-serif text-4xl">{site.established}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-ivory/70">
                Serving Hertford
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="The craft of French polishing"
              title="A finish that only comes from the hand"
              intro="French polishing is a traditional technique in which fine layers of shellac are applied by hand to build a deep, warm, glass-like lustre. It is the finish trusted for the world's finest furniture — and it is what we have been perfecting in Hertford for over two decades."
            />
            <Reveal delay={0.1}>
              <p className="mt-5 leading-relaxed text-muted">
                From cleaning and reviving a tired tabletop to fully stripping
                and repolishing a treasured antique, we treat every piece with
                patience, skill and genuine care.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-espresso/10 pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-serif text-4xl text-mahogany">
                      {s.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="grain bg-parchment py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="What we do"
            title="Our services"
            intro="Whatever the timber and whatever its condition, we have the skills and experience to restore it beautifully."
            className="mb-14"
          />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" variant="outline" withArrow>
              View all services
            </Button>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="Why choose Harts"
          title="Craftsmanship you can trust"
          className="mb-14"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-espresso/8 bg-ivory p-7 shadow-[var(--shadow-soft)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream text-mahogany">
                  <Icon name={item.icon} size={26} />
                </span>
                <h3 className="mt-5 text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Before / after */}
      <section className="grain bg-cocoa py-20 lg:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <BeforeAfter
              image="/images/furniture.png"
              alt="Antique sideboard restoration"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              tone="light"
              eyebrow="See the difference"
              title="From tired to timeless"
              intro="Drag the slider to see the transformation. Years of wear, water marks and dull, lifeless finishes give way to a rich, hand-polished lustre."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {[
                  "Water marks, rings and scratches removed",
                  "Faded, sun-bleached tops brought back to life",
                  "Deep, even colour and a flawless sheen",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-ivory/85">
                    <Icon
                      name="check"
                      size={20}
                      className="mt-0.5 shrink-0 text-gold"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9">
                <Button href="/gallery" variant="light" withArrow>
                  View the gallery
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-page py-20 lg:py-28">
        <SectionHeading
          align="center"
          eyebrow="How it works"
          title="A simple, careful process"
          className="mb-14"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={(i % 4) * 0.08}>
              <div className="relative h-full rounded-2xl bg-cream p-7">
                <span className="font-serif text-5xl text-brass/40">
                  {p.step}
                </span>
                <h3 className="mt-3 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="grain bg-espresso py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            tone="light"
            eyebrow="Kind words"
            title="What our clients say"
            className="mb-14"
          />
          <Testimonials />
        </div>
      </section>

      {/* Service area */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="Where we work"
            title="Proudly serving Hertford & beyond"
            intro="Based in Hertford, we cover homes and businesses right across Hertfordshire and into North London. Not sure if we reach you? Just ask."
          />
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {site.areas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-2 rounded-full border border-espresso/10 bg-cream px-4 py-2 text-sm font-medium text-walnut"
                >
                  <Icon name="mapPin" size={15} className="text-brass" />
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

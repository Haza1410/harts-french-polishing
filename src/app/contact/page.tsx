import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Harts French Polishing in Hertford for a free, no-obligation quote. Call 07999 590352 or send us a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk about your project"
        intro="Call us for a friendly chat, or send a message with a few photos and we'll get back to you with honest advice and a free quote."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <div>
            <Reveal>
              <div className="space-y-4">
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-4 rounded-2xl border border-espresso/8 bg-cream p-5 transition-colors hover:border-mahogany/30"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mahogany text-ivory">
                    <Icon name="phone" size={22} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-wider text-muted">
                      Call us
                    </span>
                    <span className="mt-1 block text-xl text-espresso">
                      {site.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-4 rounded-2xl border border-espresso/8 bg-cream p-5 transition-colors hover:border-mahogany/30"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mahogany text-ivory">
                    <Icon name="mail" size={22} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-wider text-muted">
                      Email us
                    </span>
                    <span className="mt-1 block text-xl text-espresso">
                      {site.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-espresso/8 bg-cream p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mahogany text-ivory">
                    <Icon name="mapPin" size={22} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold uppercase tracking-wider text-muted">
                      Visit the workshop
                    </span>
                    <span className="mt-1 block text-lg text-espresso">
                      {site.address.line1}, {site.address.city},{" "}
                      {site.address.postcode}
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Opening hours */}
            <Reveal delay={0.1}>
              <div className="mt-6 rounded-2xl border border-espresso/8 bg-ivory p-6">
                <h2 className="flex items-center gap-2 text-lg">
                  <Icon name="clock" size={20} className="text-brass" />
                  Opening hours
                </h2>
                <ul className="mt-4 divide-y divide-espresso/8 text-sm">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between py-2.5"
                    >
                      <span className="font-medium text-walnut">{h.day}</span>
                      <span
                        className={
                          h.time === "Closed"
                            ? "text-muted"
                            : "text-espresso"
                        }
                      >
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-espresso/8 bg-ivory p-8 shadow-[var(--shadow-card)] sm:p-10">
              <h2 className="text-3xl">Send us a message</h2>
              <p className="mt-2 text-muted">
                Fields marked <span className="text-mahogany">*</span> are
                required.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 lg:pb-28">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <iframe
                title="Map to Harts French Polishing, Hertford"
                src={site.mapEmbed}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

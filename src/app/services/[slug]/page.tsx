import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import { getService, services, site } from "@/lib/site";
import { asset } from "@/lib/asset";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.summary,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 5);

  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title={service.title}
        intro={service.summary}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          {/* Main content */}
          <div>
            <Reveal>
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
                <Image
                  src={asset(service.image)}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="mt-10 max-w-2xl">
              {service.description.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="mb-5 text-lg leading-relaxed text-muted">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-8 rounded-2xl border border-espresso/8 bg-cream p-8">
                <h2 className="text-2xl">What&rsquo;s included</h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon
                        name="check"
                        size={20}
                        className="mt-0.5 shrink-0 text-brass"
                      />
                      <span className="text-walnut">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-espresso p-8 text-ivory shadow-[var(--shadow-card)]">
              <h2 className="!text-ivory text-2xl">Request a free quote</h2>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                Tell us about your project or send a few photos — we&rsquo;ll
                get back to you with honest advice and a no-obligation price.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Button href="/contact" variant="light" withArrow>
                  Get in touch
                </Button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-brass hover:bg-brass hover:text-espresso"
                >
                  <Icon name="phone" size={18} />
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-espresso/8 bg-ivory p-8">
              <h3 className="text-lg">Other services</h3>
              <ul className="mt-4 divide-y divide-espresso/8">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center justify-between gap-3 py-3 text-sm font-medium text-walnut transition-colors hover:text-mahogany"
                    >
                      <span className="flex items-center gap-3">
                        <Icon
                          name={s.icon}
                          size={18}
                          className="text-brass"
                        />
                        {s.title}
                      </span>
                      <Icon
                        name="arrowRight"
                        size={16}
                        className="text-brass/50 transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

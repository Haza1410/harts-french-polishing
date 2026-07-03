import Link from "next/link";
import { nav, services, site } from "@/lib/site";
import Logo from "./Logo";
import Icon from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain bg-espresso text-ivory/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
            {site.tagline}. Traditional hand French polishing and fine wood
            restoration across Hertford and Hertfordshire.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-colors hover:border-brass hover:bg-brass hover:text-espresso"
            >
              <Icon name="facebook" size={18} />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition-colors hover:border-brass hover:bg-brass hover:text-espresso"
            >
              <Icon name="instagram" size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ivory">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ivory/70 transition-colors hover:text-brass"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ivory">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-ivory/70 transition-colors hover:text-brass"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ivory">
            Get in touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Icon name="mapPin" size={18} className="mt-0.5 text-brass" />
              <span className="text-ivory/70">
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.postcode}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="phone" size={18} className="text-brass" />
              <a
                href={site.phoneHref}
                className="text-ivory/70 transition-colors hover:text-brass"
              >
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="mail" size={18} className="text-brass" />
              <a
                href={`mailto:${site.email}`}
                className="text-ivory/70 transition-colors hover:text-brass"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/50 sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Est. {site.established} &middot; Hertford, England</p>
        </div>
      </div>
    </footer>
  );
}

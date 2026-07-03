"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";
import Icon from "./Icon";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-ivory/95 shadow-[0_1px_0_rgba(34,22,16,0.08)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Logo variant={solid ? "dark" : "light"} />

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const linkColor = solid
              ? active
                ? "text-mahogany"
                : "text-ink/80 hover:text-mahogany"
              : active
                ? "text-gold-soft"
                : "text-ivory/90 hover:text-gold-soft";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-sm font-medium transition-colors ${linkColor}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-mahogany px-5 py-2.5 text-sm font-semibold text-ivory shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-walnut sm:inline-flex"
          >
            <Icon name="phone" size={16} />
            {site.phone}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
              solid
                ? "border-mahogany/20 text-mahogany hover:bg-mahogany hover:text-ivory"
                : "border-ivory/30 text-ivory hover:bg-ivory/10"
            }`}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-mahogany/10 bg-ivory transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="container-page flex flex-col gap-1 py-4">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  active
                    ? "bg-cream text-mahogany"
                    : "text-ink/80 hover:bg-cream"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={site.phoneHref}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-mahogany px-5 py-3 text-sm font-semibold text-ivory"
          >
            <Icon name="phone" size={16} />
            Call {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import Reveal from "./Reveal";
import Icon from "./Icon";

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
};

export default function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
}: PageHeaderProps) {
  return (
    <section className="grain relative overflow-hidden bg-espresso pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brass/10 blur-3xl" />
      <div className="container-page relative z-10">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-ivory/50">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="transition-colors hover:text-brass"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-ivory/80">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <Icon name="arrowRight" size={12} className="text-ivory/30" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Reveal>
          {eyebrow && <span className="eyebrow !text-gold-soft">{eyebrow}</span>}
          <h1 className="mt-4 max-w-3xl !text-ivory text-5xl leading-[1.05] sm:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75">
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

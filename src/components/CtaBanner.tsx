import { site } from "@/lib/site";
import Button from "./Button";
import Icon from "./Icon";
import Reveal from "./Reveal";

type CtaBannerProps = {
  title?: string;
  intro?: string;
};

export default function CtaBanner({
  title = "Bring your timber back to life",
  intro = "Send us a photo for a free, no-obligation quote — or call for a friendly chat about your project.",
}: CtaBannerProps) {
  return (
    <section className="container-page py-20 lg:py-28">
      <Reveal>
        <div className="grain relative overflow-hidden rounded-3xl bg-mahogany px-8 py-14 text-center shadow-[var(--shadow-card)] sm:px-16 sm:py-20">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="!text-ivory text-4xl sm:text-5xl">{title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-ivory/80">{intro}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="light" withArrow>
                Request a free quote
              </Button>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/30 px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
              >
                <Icon name="phone" size={18} />
                {site.phone}
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-espresso/30 blur-2xl" />
        </div>
      </Reveal>
    </section>
  );
}

import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

// Typographic wordmark. Swap for the client's real logo when supplied
// (drop an SVG/PNG here and render an <Image> instead).
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const primary = variant === "light" ? "text-ivory" : "text-espresso";
  const accent = "text-brass";

  return (
    <Link
      href="/"
      aria-label="Harts French Polishing — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brass/60 font-serif text-xl leading-none text-brass transition-colors group-hover:bg-brass group-hover:text-espresso"
      >
        H
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-xl tracking-tight ${primary}`}>
          Harts
        </span>
        <span
          className={`mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${accent}`}
        >
          French Polishing
        </span>
      </span>
    </Link>
  );
}

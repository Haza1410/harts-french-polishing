import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Icon from "./Icon";

type Variant = "primary" | "outline" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";

const variants: Record<Variant, string> = {
  primary:
    "bg-mahogany text-ivory shadow-[var(--shadow-soft)] hover:bg-walnut hover:-translate-y-0.5",
  outline:
    "border border-mahogany/30 text-mahogany hover:border-mahogany hover:bg-mahogany hover:text-ivory",
  ghost: "text-mahogany hover:text-walnut",
  light:
    "bg-ivory/95 text-espresso hover:bg-ivory hover:-translate-y-0.5 shadow-[var(--shadow-soft)]",
};

type CommonProps = {
  variant?: Variant;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className"> & { href?: undefined };

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    withArrow = false,
    children,
    className = "",
    ...rest
  } = props;

  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && <Icon name="arrowRight" size={18} />}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {content}
    </button>
  );
}

import type { SVGProps } from "react";

// Lightweight inline line-icon set so we avoid an icon dependency.
// All icons share a 24x24 viewBox and inherit `currentColor`.

const paths: Record<string, React.ReactNode> = {
  sparkle: (
    <>
      <path d="M12 3l1.8 4.9L18.9 9.7 14 11.5 12 16.4 10 11.5 5.1 9.7 10.2 7.9z" />
      <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" />
    </>
  ),
  chair: (
    <>
      <path d="M7 4v7h10V4" />
      <path d="M6 11h12l-.7 5H6.7z" />
      <path d="M7 16v4M17 16v4" />
    </>
  ),
  brush: (
    <>
      <path d="M9.5 14.5 20 4a1.8 1.8 0 0 0-2.5-2.5L7 12" />
      <path d="M9.5 14.5 7 12l-2 2c-1.2 1.2-1.2 3 0 4 .8.8 3.5.9 4 .4l3-3z" />
    </>
  ),
  shine: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 0 0 0 18c1.1 0 1.8-.9 1.8-1.9 0-1.2-1-1.8-1-2.9 0-.8.7-1.5 1.6-1.5H16a5 5 0 0 0 5-5c0-4-4-6.7-9-6.7z" />
      <circle cx="7.5" cy="11" r="1" />
      <circle cx="10" cy="7.5" r="1" />
      <circle cx="14.5" cy="7.5" r="1" />
    </>
  ),
  droplet: <path d="M12 3s6 5.6 6 10a6 6 0 0 1-12 0c0-4.4 6-10 6-10z" />,
  stairs: (
    <path d="M3 20h4v-4h4v-4h4V8h4V4" />
  ),
  building: (
    <>
      <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
      <path d="M15 9h2a2 2 0 0 1 2 2v10" />
      <path d="M8 7h3M8 11h3M8 15h3M3 21h18" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.4-3 8.3-7 10-4-1.7-7-5.6-7-10V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>
  ),
  phone: (
    <path d="M6.6 3h3l1.5 4-2 1.3a12 12 0 0 0 5.6 5.6l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 0 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  check: <path d="m5 12 4 4 10-10" />,
  star: (
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.7l5.9-.9z" />
  ),
  quote: (
    <path d="M9 7H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3M20 7h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h2v1a3 3 0 0 1-3 3" />
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  facebook: (
    <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" />
    </>
  ),
  leaf: (
    <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14zM5 19c3-3 6-5 10-6" />
  ),
  handshake: (
    <path d="M12 6 9 4 3 9v5l3 3 3-2 3 3 3-3 3 2 3-3V9l-6-5-3 2z" />
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: keyof typeof paths | string;
  size?: number;
};

export default function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  );
}

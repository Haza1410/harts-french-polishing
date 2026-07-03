# Harts French Polishing — Website

A high-quality marketing website for **Harts French Polishing**, a traditional
French polishing and wood restoration business in Hertford, Hertfordshire.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4** and
**Framer Motion** for tasteful animation. Designed as a durable foundation to
grow, not a throwaway demo.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## Project structure

```
src/
  app/                 # Routes (App Router)
    page.tsx           # Home
    services/          # Services overview + [slug] detail pages
    gallery/           # Before/after gallery
    about/             # About
    contact/           # Contact (form + map + hours)
    layout.tsx         # Root layout, fonts, header/footer, SEO + JSON-LD
    sitemap.ts         # Auto-generated sitemap
    robots.ts          # robots.txt
    icon.svg           # Favicon
  components/           # Reusable UI (Header, Footer, ServiceCard, BeforeAfter, etc.)
  lib/
    site.ts            # ← ALL content + business data lives here
public/
  images/              # Placeholder imagery (swap for the client's real photos)
```

## Editing content

Almost everything the client will want to change lives in **`src/lib/site.ts`**:

- Business name, phone, email, address, opening hours
- Service areas
- The full list of **services** (title, copy, "what's included", image)
- Testimonials
- Gallery projects

Update that one file and every page reflects the change.

## Things to confirm / swap before go-live

These are placeholders for the demo — replace with the client's real details:

- **Photos & logo** — images in `public/images/` are AI-generated placeholders.
  Drop in the client's real project photos (and a real logo in `Logo.tsx`).
- **Before/after slider** — currently shows the same photo dulled for the
  "before" state. Swap in real before/after pairs.
- **Opening hours & email** — confirm exact values in `site.ts`.
- **Contact form** — currently shows a success state without sending. Wire it to
  an email service (e.g. Resend, Formspree, or a serverless route) before launch.
- **Domain** — metadata/sitemap use `hartsfrenchpolishing.co.uk`; update if the
  domain differs.
- **Social links & Google Maps** — update the placeholder links in `site.ts`.

## Deployment

Optimised for [Vercel](https://vercel.com/new). Connect the repo and deploy —
no configuration required.

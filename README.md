# Kona Coast Pest Control — Lead-Gen Site

A static, config-driven, SEO-first lead-gen website for **pest control across West Hawaii (the Big
Island)**. Built from [`../SPEC.md`](../SPEC.md) (the single source of truth) using Astro 5 — no
database, no server runtime, no client framework. Output is plain static HTML/CSS for a CDN.

> **Status:** placeholder business identity + placeholder images. Builds clean; rebrand by editing
> config and swapping assets — **do not edit `src/pages`, `src/layouts`, `src/components`, or
> `src/lib` to launch.** The answer is almost always in `src/config/`.

## ⚠️ Intentional retro styling

This site is **deliberately styled to look like a "good" website circa 2000–2010** — not modern. By
design it has:

- a fixed-width (980px) centered "page" panel on a tiled green desktop background;
- glossy **web-2.0 gel buttons**, beveled/outset panels, and hard offset shadows;
- **system fonts only** (Verdana/Arial, with Comic Sans on the tagline) — the Inter webfont was
  removed on purpose;
- a scrolling **`<marquee>`** announcement bar, a **starburst** "FREE ESTIMATE!" badge, classic
  blue/purple/red links, a fake hit counter, and a "Best viewed in 1024×768" footer.

All of this lives in `src/styles/global.css` plus the `Header`/`Footer`/`FinalCta`/`QuoteForm`
components. The SPEC architecture (routing, SEO, config model) is unchanged — only the skin is
period-correct. To modernize, restore a normal stylesheet; nothing structural depends on the retro look.

---

## Verified build

Built and verified with a real production build (Node 22): **38 HTML pages** + `robots.txt` +
sitemap (1 home + 5 service hubs + **24** service×city combos + 6 city hubs + privacy + terms).
Inline CSS, JSON-LD per page type, canonicals, sitemap excludes `/privacy` + `/terms`.

---

## Configuration (current decisions)

| Setting | Value |
|---|---|
| Company | *Kona Coast Pest Control* (placeholder) |
| Region | West Hawaii (Big Island) |
| Cities (6) | Kailua-Kona, Holualoa, Kealakekua, Captain Cook, Waikoloa, Kamuela (Waimea) |
| Services (5) | `pest-control` (hubOnly) + `ant-control`, `cockroach-control`, `coqui-frog-control`, `termite-treatment` |
| Matrix services | 4 (→ 24 combo pages) |
| Form backend | **Call-only** (`formEndpoint=""`) — ready to point at a Cloudflare Worker later |
| Phone / email / domain | Placeholders — replace before launch |

---

## Build & run

The default `node` on this machine is v15 (too old for Astro 5). Build with **Node 22**:

```bash
nvm use 22          # v22.14.0 is installed and builds clean
npm install
npm run dev         # local dev server
npm run build       # static output → dist/
npm run preview     # preview the build
npm run deploy      # astro build && npx wrangler deploy (Cloudflare)
```

`SITE_URL` overrides the production domain at build/deploy time (the only env var read).

---

## Where to edit for a rebrand (config-only)

1. **[`src/config/site.ts`](src/config/site.ts)** — placeholders to replace: `company`, `phone` /
   `phoneDisplay`, `email`, `url`. Set `formEndpoint` to go live with a backend.
2. **[`src/config/services.ts`](src/config/services.ts)** — the services (keep ~1 `hubOnly`).
3. **[`src/config/cities.ts`](src/config/cities.ts)** — the towns served, with local copy
   (`nearby` slugs must exist).

## ⚠️ Before launch

1. Replace placeholder business details in `src/config/site.ts` (and keep `astro.config.mjs` `site`
   in sync).
2. Swap placeholder images & favicons for real photos/branding (see
   [`src/assets/README.md`](src/assets/README.md)).
3. Replace the testimonials in `src/components/Reviews.astro` with real, verifiable reviews and set
   true `ratingValue` / `reviewCount`. The footer's "BBB Member" badge and hit counter are
   decorative placeholders — remove or make them real.
4. Connect the lead form by setting `formEndpoint` (Cloudflare Worker / Web3Forms / Formspree).

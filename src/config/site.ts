/**
 * site.ts — the business (singleton SITE).
 *
 * EDIT HERE to rebrand. `trade` and `region` are interpolated into titles,
 * descriptions, headings, and schema across the whole site.
 *
 * NOTE: Placeholder identity. Swap company / phone / email / url for the real
 * business before launch.
 */
export interface SiteConfig {
  company: string;
  tagline: string;
  /** What the business does, lowercase, for prose: "pest control" */
  trade: string;
  phone: string; // dialable, E.164
  phoneDisplay: string; // shown to visitors
  email: string;
  /** Service-area region name shown in headlines, e.g. "West Hawaii" */
  region: string;
  /** Production URL — keep in sync with `site` in astro.config.mjs (or set SITE_URL). */
  url: string;
  /** External form handler (Formspree/Web3Forms/Worker). "" → call-only mode (submit disabled). */
  formEndpoint: string;
  /** Web3Forms access key, if using Web3Forms (otherwise leave ""). */
  formAccessKey: string;
  /** Unused by default — service-area renders two keyless county Google embeds. */
  mapEmbedSrc: string;
  priceRange: string; // e.g. "$$"  → schema
  ratingValue: string; // e.g. "4.9" → AggregateRating
  reviewCount: string; // e.g. "127" → AggregateRating

  // ── Local SEO / schema (NAP, geo, hours, profiles) ──
  /** Storefront street — leave "" for a service-area business (no public address). */
  streetAddress: string;
  addressLocality: string; // city, e.g. "Kailua-Kona"
  addressRegion: string; // state/region, e.g. "HI"
  postalCode: string; // optional — "" to omit
  addressCountry: string; // ISO country, e.g. "US"
  /** Service-area center for LocalBusiness `geo`. "" to omit. */
  latitude: string;
  longitude: string;
  /** Business hours → schema OpeningHoursSpecification. [] to omit. */
  openingHours: { days: string[]; opens: string; closes: string }[];
  /** Public profiles (Google Business Profile / Facebook / Instagram…) → schema `sameAs`. [] to omit. */
  sameAs: string[];
  /** Emit aggregateRating ONLY when ratings are real & policy-compliant (Google disallows fake review markup). */
  ratingsAreReal: boolean;
  /** Absolute or root-relative social-share image (og:image). */
  ogImage: string;
}

export const SITE: SiteConfig = {
  company: 'Kona Pest Pros',
  tagline: "Something bugging you? Call Today!",
  trade: 'pest control',
  phone: '+18084931952',
  phoneDisplay: '(808) 493-1952',
  email: 'aloha@konapestpros.com',
  region: 'West Hawaii',
  url: 'https://konapestpros.com', // keep in sync with astro.config.mjs
  // Call-only for now: empty endpoint disables form submission and shows "call us instead".
  // To go live with a Cloudflare Worker later, set formEndpoint to the Worker URL.
  formEndpoint: '',
  formAccessKey: '',
  mapEmbedSrc: '',
  priceRange: '$$',
  ratingValue: '4.8',
  reviewCount: '112',

  // Service-area business → locality-level address only (no fake storefront street). PLACEHOLDERS.
  streetAddress: '',
  addressLocality: 'Kailua-Kona',
  addressRegion: 'HI',
  postalCode: '',
  addressCountry: 'US',
  latitude: '19.6400', // PLACEHOLDER — approx. Kailua-Kona; set to the real service-area center
  longitude: '-155.9969', // PLACEHOLDER
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:00' },
    { days: ['Saturday'], opens: '09:00', closes: '14:00' },
  ], // PLACEHOLDER hours — confirm before launch
  sameAs: [], // add Google Business Profile / Facebook / Instagram URLs when live
  ratingsAreReal: false, // set true ONLY with a real, on-site review system (Google policy)
  ogImage: '/og-image.jpg', // 1200×630 social-share card in public/
};

export const tel = (phone: string = SITE.phone): string => `tel:${phone}`;

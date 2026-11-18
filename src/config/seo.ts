// SEO configuration. Add REAL client details here before launch.
// Anything left undefined is omitted from structured data (nothing is fabricated).
export type Business = {
  name?: string; url?: string; telephone?: string; email?: string;
  address?: { streetAddress: string; addressLocality: string; addressRegion: string; postalCode: string };
  openingHours?: string[]; // e.g. ["Mo-Th 08:00-17:00"]
  geo?: { latitude: number; longitude: number };
  sameAs?: string[]; // real social profile URLs
  // Only add ratings if you have verified, policy-compliant review data:
  aggregateRating?: { ratingValue: number; reviewCount: number };
};
export const business: Business = {}; // intentionally empty in the demo
export const seo = {
  // Real production domain, also settable via NEXT_PUBLIC_SITE_URL
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example-lumina-dental.com",
  // Demo stays out of search engines unless explicitly enabled.
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",
};

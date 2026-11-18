import { business, seo, type Business } from "@/config/seo";
// Builds Dentist JSON-LD from configured facts only. Returns null if no real business name/url is configured.
export function dentistSchema(b: Business = business) {
  if (!b.name) return null;
  const o: Record<string, unknown> = { "@context": "https://schema.org", "@type": "Dentist", name: b.name, url: b.url ?? seo.siteUrl };
  if (b.telephone) o.telephone = b.telephone;
  if (b.email) o.email = b.email;
  if (b.address) o.address = { "@type": "PostalAddress", ...b.address, addressCountry: "US" };
  if (b.openingHours?.length) o.openingHours = b.openingHours;
  if (b.geo) o.geo = { "@type": "GeoCoordinates", ...b.geo };
  if (b.sameAs?.length) o.sameAs = b.sameAs;
  if (b.aggregateRating) o.aggregateRating = { "@type": "AggregateRating", ...b.aggregateRating };
  return o;
}

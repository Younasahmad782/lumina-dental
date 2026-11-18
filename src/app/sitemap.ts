import type { MetadataRoute } from "next"; import { seo } from "@/config/seo"; import { treatments } from "@/data/treatments"; import { pages } from "@/data/pages"; import { live } from "@/data/cities";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/services", "/contact", "/request-appointment",
    ...Object.keys(pages).map((s) => `/${s}`), ...treatments.map((t) => `/services/${t.slug}`), ...live().map((l) => `/locations/${l.slug}`)];
  return paths.map((p) => ({ url: `${seo.siteUrl}${p === "/" ? "" : p}`, lastModified: new Date() }));
}

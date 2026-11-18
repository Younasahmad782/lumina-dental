import type { MetadataRoute } from "next"; import { seo } from "@/config/seo";
export default function robots(): MetadataRoute.Robots {
  return seo.allowIndexing ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${seo.siteUrl}/sitemap.xml` } : { rules: { userAgent: "*", disallow: "/" } };
}

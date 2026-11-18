import type { Metadata } from "next"; import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar"; import Header from "@/components/Header"; import Footer from "@/components/Footer"; import StickyCta from "@/components/StickyCta"; import { site } from "@/config/site"; import { seo } from "@/config/seo"; import JsonLd from "@/components/JsonLd";
export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  robots: seo.allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
  title: { default: "Lumina Dental | Modern Family, Cosmetic & Restorative Dentistry (Demo)", template: "%s | Lumina Dental (Demo)" },
  description: "Lumina Dental is a fictional demonstration dental website: modern family, cosmetic and restorative dentistry design concept.",
  alternates: { canonical: "/" },
  openGraph: { title: "Lumina Dental (Demo)", description: "Premium dental website design concept.", type: "website", url: site.url },
  twitter: { card: "summary_large_image", title: "Lumina Dental (Demo)" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:p-3">Skip to content</a>
    <JsonLd /><AnnouncementBar /><Header /><main id="main" className="pb-16 md:pb-0">{children}</main><Footer /><StickyCta /></body></html>);
}

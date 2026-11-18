import Link from "next/link"; import { nav, site } from "@/config/site"; import { treatments } from "@/data/treatments";
export default function Footer() {
  const d = site.developer;
  return (<footer className="bg-deep text-cream"><div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
    <div><p className="font-serif text-2xl">LUMINA DENTAL</p><p className="mt-3 text-sm text-cream/80">{site.tagline}. Fictional demonstration practice.</p>
      <p className="mt-3 text-sm text-cream/70">Social links: placeholders (not linked).</p></div>
    <div><h2 className="font-serif text-lg">Navigate</h2><ul className="mt-3 space-y-2 text-sm">{nav.map((n) => <li key={n.href}><Link className="hover:underline" href={n.href}>{n.label}</Link></li>)}</ul></div>
    <div><h2 className="font-serif text-lg">Services</h2><ul className="mt-3 space-y-2 text-sm">{treatments.map((s) => <li key={s.slug}><Link className="hover:underline" href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul></div>
    <div><h2 className="font-serif text-lg">Visit (demo)</h2><address className="mt-3 space-y-2 text-sm not-italic"><p>{site.demoAddress}</p><p><a className="underline" href={site.demoPhoneHref}>{site.demoPhone}</a> (demo)</p><p>{site.demoHours}</p></address></div></div>
    <div className="border-t border-white/15"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-cream/80">
      <p>Website Concept Designed by <a className="underline" href={d.whatsapp}>{d.name} | {d.role}</a></p>
      <p className="flex gap-4"><Link href="/privacy-policy" className="underline">Privacy Policy</Link><Link href="/accessibility" className="underline">Accessibility Statement</Link></p></div></div></footer>);
}

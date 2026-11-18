import type { Metadata } from "next"; import Link from "next/link"; import Photo from "@/components/Photo"; import Breadcrumbs from "@/components/Breadcrumbs"; import { treatments } from "@/data/treatments";
export const metadata: Metadata = { title: "Dental Services", description: "Explore general, family, cosmetic and restorative dental services at the fictional Lumina Dental demo practice.", alternates: { canonical: "/services" } };
export default function Page() {
  return (<><Breadcrumbs items={[{ label: "Services" }]} /><div className="mx-auto max-w-6xl px-4 py-10"><h1 className="font-serif text-4xl text-deep">Dental Services</h1>
    <p className="mt-3 max-w-2xl text-ink/80">Demonstration content. A real practice would describe the services it actually offers.</p>
    <ul className="mt-8 grid gap-6 md:grid-cols-2">{treatments.map((t) => <li key={t.slug} className="rounded-3xl bg-white p-6 ring-1 ring-sage">
      <Photo id={`svc-${t.slug}`} className="mb-4 aspect-[3/2]" /><h2 className="font-serif text-2xl text-deep">{t.title}</h2><p className="mt-2 text-ink/80">{t.intro}</p>
      <Link href={`/services/${t.slug}`} className="mt-4 inline-flex min-h-12 items-center font-semibold text-teal hover:underline">Learn more about {t.title.toLowerCase()}</Link></li>)}</ul></div></>);
}

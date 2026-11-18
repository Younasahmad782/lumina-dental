import type { Metadata } from "next"; import Link from "next/link"; import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs"; import { live } from "@/data/cities";
export const dynamicParams = false;
export function generateStaticParams() { return live().map((l) => ({ city: l.slug })); }
const find = (s: string) => live().find((l) => l.slug === s);
export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const l = find(params.city); if (!l) return {};
  return { title: `Dentist in ${l.city}, ${l.state}`, description: `Dental care in ${l.city}, ${l.state}. ${l.practice!.intro}`.slice(0, 160), alternates: { canonical: `/locations/${l.slug}` } };
}
export default function Page({ params }: { params: { city: string } }) {
  const l = find(params.city); if (!l || !l.practice) notFound();
  const p = l.practice;
  return (<><Breadcrumbs items={[{ label: `${l.city}, ${l.state}` }]} /><article className="mx-auto max-w-3xl px-4 py-10">
    <h1 className="font-serif text-4xl text-deep">Dentist in {l.city}, {l.state}</h1><p className="mt-5 text-lg text-ink/85">{p.intro}</p>
    <h2 className="mt-10 font-serif text-2xl text-deep">Areas we serve</h2><ul className="mt-3 list-disc pl-5">{p.neighborhoods.map((n) => <li key={n}>{n}</li>)}</ul>
    <address className="mt-8 not-italic"><p>{p.address}</p><p><a className="underline" href={`tel:${p.phone.replace(/[^\d+]/g, "")}`}>{p.phone}</a></p>{p.hours && <p>{p.hours}</p>}</address>
    <Link href="/request-appointment" className="btn btn-primary mt-8">Request an Appointment</Link></article></>);
}

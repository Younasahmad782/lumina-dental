import type { Metadata } from "next"; import Link from "next/link"; import { notFound } from "next/navigation"; import { Phone } from "lucide-react";
import Photo from "@/components/Photo"; import Breadcrumbs from "@/components/Breadcrumbs"; import { bySlug, treatments } from "@/data/treatments"; import { site } from "@/config/site";
type P = { params: { slug: string } };
export function generateStaticParams() { return treatments.map((t) => ({ slug: t.slug })); }
export function generateMetadata({ params }: P): Metadata {
  const t = bySlug(params.slug); if (!t) return {};
  return { title: `${t.title} (Demo)`, description: t.description, alternates: { canonical: `/services/${t.slug}` }, openGraph: { title: `${t.title} | Lumina Dental (Demo)`, description: t.description } };
}
const List = ({ items }: { items: string[] }) => <ul className="mt-3 list-disc space-y-2 pl-5 text-ink/80">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
export default function Page({ params }: P) {
  const t = bySlug(params.slug); if (!t) notFound();
  const related = t.related.map(bySlug).filter((x): x is NonNullable<typeof x> => !!x);
  return (<><Breadcrumbs items={[{ href: "/services", label: "Services" }, { label: t.title }]} />
    <article className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-serif text-4xl text-deep md:text-5xl">{t.h1}</h1>
      <p className="mt-2 text-sm text-ink/70">Demonstration content for a fictional practice. General information only, not medical advice.</p>
      <Photo id={`svc-${t.slug}`} priority className="mt-6 aspect-[16/9] rounded-3xl" sizes="(min-width: 768px) 768px, 100vw" /><p className="mt-6 text-lg text-ink/85">{t.intro}</p>
      <h2 className="mt-10 font-serif text-2xl text-deep">Who it is for</h2><List items={t.who} />
      <h2 className="mt-10 font-serif text-2xl text-deep">What to expect</h2><List items={t.expect} />
      <h2 className="mt-10 font-serif text-2xl text-deep">Common questions</h2>
      <div className="mt-4 divide-y divide-sage rounded-2xl bg-white ring-1 ring-sage">{t.faqs.map((f) => <details key={f.q} className="p-5"><summary className="cursor-pointer font-medium text-deep">{f.q}</summary><p className="mt-2 text-ink/80">{f.a}</p></details>)}</div>
      <div className="mt-10 flex flex-wrap gap-3 rounded-3xl bg-sage p-6"><Link href="/request-appointment" className="btn btn-primary">Request an Appointment</Link>
        <a href={site.demoPhoneHref} className="btn btn-ghost"><Phone size={18} aria-hidden /> Call {site.demoPhone} (demo)</a></div>
      <h2 className="mt-10 font-serif text-2xl text-deep">Related services</h2>
      <ul className="mt-3 flex flex-wrap gap-3">{related.map((r) => <li key={r.slug}><Link className="underline" href={`/services/${r.slug}`}>{r.title}</Link></li>)}</ul></article></>);
}

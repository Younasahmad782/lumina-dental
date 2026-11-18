import Link from "next/link"; import { Phone } from "lucide-react"; import Breadcrumbs from "@/components/Breadcrumbs"; import Photo from "@/components/Photo"; import { images } from "@/data/images"; import { site } from "@/config/site";
export type InfoSection = { h: string; p?: string; items?: string[]; cards?: { title: string; sub?: string; text: string; img?: string; img2?: string }[] };
export type Info = { slug: string; crumb: string; title: string; description: string; intro: string; sections: InfoSection[]; cta?: boolean };
export default function InfoPage({ page }: { page: Info }) {
  return (<><Breadcrumbs items={[{ label: page.crumb }]} />
    <article className="mx-auto max-w-4xl px-4 py-10"><h1 className="font-serif text-4xl text-deep md:text-5xl">{page.title}</h1>
      <p className="mt-2 text-sm text-ink/70">Demonstration content for a fictional practice.</p><p className="mt-6 text-lg text-ink/85">{page.intro}</p>
      {images[`page-${page.slug}`] && <Photo id={`page-${page.slug}`} className="mt-8 aspect-[16/9] rounded-3xl" sizes="(min-width: 896px) 896px, 100vw" />}
      {page.sections.map((s) => (<section key={s.h} className="mt-10"><h2 className="font-serif text-2xl text-deep">{s.h}</h2>
        {s.p && <p className="mt-3 text-ink/80">{s.p}</p>}
        {s.items && <ul className="mt-3 list-disc space-y-2 pl-5 text-ink/80">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>}
        {s.cards && <div className="mt-4 grid gap-5 md:grid-cols-2">{s.cards.map((c) => <div key={c.title} className="rounded-3xl bg-white p-6 ring-1 ring-sage">{c.img && c.img2 ? <div className="mb-4 grid grid-cols-2 gap-2"><div><Photo id={c.img} className="aspect-square" sizes="(min-width: 768px) 20vw, 40vw" /><p className="mt-1 text-xs">Before (illustrative)</p></div><div><Photo id={c.img2} className="aspect-square" sizes="(min-width: 768px) 20vw, 40vw" /><p className="mt-1 text-xs">After (illustrative)</p></div></div> : c.img && <Photo id={c.img} className="mb-4 aspect-[4/5]" />}<h3 className="font-serif text-xl text-deep">{c.title}</h3>{c.sub && <p className="text-teal">{c.sub}</p>}<p className="mt-2 text-sm text-ink/80">{c.text}</p></div>)}</div>}</section>))}
      {page.cta !== false && <div className="mt-12 flex flex-wrap gap-3 rounded-3xl bg-sage p-6"><Link href="/request-appointment" className="btn btn-primary">Request an Appointment</Link>
        <a href={site.demoPhoneHref} className="btn btn-ghost"><Phone size={18} aria-hidden /> Call {site.demoPhone} (demo)</a></div>}</article></>);
}

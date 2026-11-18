import Link from "next/link";
export default function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (<nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm text-ink/70"><ol className="flex flex-wrap gap-2">
    <li><Link href="/" className="underline">Home</Link></li>
    {items.map((i) => <li key={i.label} className="flex gap-2"><span aria-hidden>/</span>{i.href ? <Link href={i.href} className="underline">{i.label}</Link> : <span aria-current="page">{i.label}</span>}</li>)}
  </ol></nav>);
}

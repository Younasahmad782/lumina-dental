import { Phone, Mail, MessageCircle } from "lucide-react"; import { site } from "@/config/site";
export default function DeveloperCta() {
  const d = site.developer;
  return (<section aria-labelledby="dev" className="bg-cream py-14"><div className="mx-auto max-w-4xl px-4"><div className="rounded-[2rem] border border-champagne bg-white p-8 md:p-10">
    <h2 id="dev" className="font-serif text-3xl text-deep">Interested in a Website Like This?</h2>
    <p className="mt-3 max-w-2xl text-ink/80">This site is a design concept by {d.name}, {d.role}. If you own or manage a dental practice and want a custom website, get in touch. These are the developer's contact details, not the fictional clinic's.</p>
    <div className="mt-6 flex flex-wrap gap-3">
      <a href={d.phoneHref} className="btn btn-primary"><Phone size={18} aria-hidden /> Call {d.phoneDisplay}</a>
      <a href={d.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><MessageCircle size={18} aria-hidden /> WhatsApp<span className="sr-only"> (opens in a new tab)</span></a>
      <a href={`mailto:${d.email}`} className="btn btn-ghost"><Mail size={18} aria-hidden /> {d.email}</a></div></div></div></section>);
}

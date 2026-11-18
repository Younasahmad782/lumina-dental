import Link from "next/link"; import { ArrowRight, Cpu, HeartHandshake, Armchair, ClipboardList, Smile, CalendarCheck } from "lucide-react";
import { services } from "@/config/site"; import DeveloperCta from "@/components/DeveloperCta"; import Photo from "@/components/Photo";

const trust = ["Personalized dental care", "Modern treatment approach", "Friendly patient experience", "Comprehensive dental services"];
const dentists = [
  { name: "Dr. Avery Sample, DDS", role: "General & Family Dentistry", bio: "Sample biography for demonstration. Replace with the real dentist's verified background." },
  { name: "Dr. Jordan Example, DMD", role: "Cosmetic & Restorative Dentistry", bio: "Sample biography for demonstration. No real credentials are implied." },
  { name: "Dr. Riley Placeholder, DDS", role: "Implants & Clear Aligners", bio: "Sample biography for demonstration. Qualifications must come from the real practice." },
];
const why = [
  [HeartHandshake, "Personalized attention"], [Cpu, "Modern technology"], [Armchair, "Comfortable environment"],
  [ClipboardList, "Comprehensive treatment options"], [Smile, "Patient-focused approach"], [CalendarCheck, "Convenient appointment requests"],
] as const;
const testimonials = [
  "“Sample testimonial: the team explained every step and I never felt rushed.”",
  "“Sample testimonial: booking was simple and the office felt calm.”",
  "“Sample testimonial: clear options and no pressure.”",
];
const faqs = [
  ["Do you accept new patients?", "In a real practice, this answer would state current availability. This demo is not a live clinic."],
  ["How do I request an appointment?", "Use the Request an Appointment form. In this demo it does not transmit or store any information."],
  ["What services do you offer?", "General, cosmetic and restorative dentistry, implants, whitening, veneers and clear aligners."],
  ["Do you offer cosmetic dentistry?", "Yes, in this concept: whitening, veneers and smile design consultations."],
  ["How can I prepare for my first visit?", "Bring photo ID and your questions. Insurance and financing details must be confirmed with the actual clinic."],
  ["How can I contact the practice?", "Call the demo number in the header or use the contact page. Details here are fictional."],
];
const H2 = "font-serif text-3xl text-deep md:text-4xl";

export default function Home() {
  return (<>
    <section className="bg-sage/50"><div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
      <div className="hero-in"><h1 className="font-serif text-4xl leading-tight text-deep md:text-6xl">Your Smile Deserves Exceptional Care.</h1>
        <p className="mt-5 max-w-lg text-lg text-ink/80">Modern dentistry, personalized attention, and a comfortable experience designed around you.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/request-appointment" className="btn btn-primary">Request an Appointment</Link>
          <Link href="/services" className="btn btn-ghost">Explore Our Services</Link></div></div>
      <Photo id="hero" priority imgClassName="object-[20%_35%] md:object-center" sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3] rounded-[2rem] shadow-xl md:aspect-[4/5]" /></div></section>

    <section aria-labelledby="trust" className="mx-auto max-w-6xl px-4 py-12"><h2 id="trust" className="sr-only">Our approach</h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{trust.map((t) => <li key={t} className="rounded-2xl border border-sage bg-white p-5 font-serif text-lg text-deep">{t}</li>)}</ul></section>

    <section aria-labelledby="svc" className="mx-auto max-w-6xl px-4 py-14"><h2 id="svc" className={H2}>Dental services</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((s) => (
        <article key={s.slug} className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sage">
          <Photo id={`svc-${s.slug}`} className="mb-5 aspect-[3/2]" />
          <h3 className="font-serif text-xl text-deep">{s.title}</h3><p className="mt-2 flex-1 text-ink/80">{s.text}</p>
          <div className="mt-5 flex flex-wrap gap-3"><Link href={`/services/${s.slug}`} className="inline-flex min-h-12 items-center gap-1 font-semibold text-teal hover:underline">Learn more <ArrowRight size={16} aria-hidden /></Link>
            <Link href="/request-appointment" className="btn btn-ghost !min-h-12 !py-2">Request appointment</Link></div></article>))}</div></section>

    <section aria-labelledby="team" className="bg-white py-14"><div className="mx-auto max-w-6xl px-4"><h2 id="team" className={H2}>Meet our dentists</h2>
      <p className="mt-2 text-sm text-ink/70">Sample demonstration profiles. Names, qualifications and biographies are fictional.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{dentists.map((d, i) => <article key={d.name} className="rounded-3xl bg-cream p-6">
        <Photo id={`dentist-${i + 1}`} className="mb-4 aspect-[4/5]" /><h3 className="font-serif text-xl text-deep">{d.name}</h3><p className="text-teal">{d.role}</p><p className="mt-2 text-sm text-ink/80">{d.bio}</p></article>)}</div></div></section>

    <section aria-labelledby="why" className="mx-auto max-w-6xl px-4 py-14"><h2 id="why" className={H2}>Why choose us?</h2>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{why.map(([Icon, label]) => <li key={label} className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-deep"><Icon aria-hidden /></span><span className="font-medium">{label}</span></li>)}</ul></section>

    <section aria-labelledby="gallery" className="bg-sage/50 py-14"><div className="mx-auto max-w-6xl px-4"><h2 id="gallery" className={H2}>Smile gallery</h2>
      <p className="mt-2 text-sm text-ink/70">Illustrative demonstration cases only. These are not actual clinic patients. Add licensed images before presenting.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">{[1, 2].map((n) => <figure key={n} className="grid grid-cols-2 gap-2 rounded-3xl bg-white p-3">
        <div><Photo id={`gallery-before-${n}`} className="aspect-square" sizes="(min-width: 768px) 25vw, 50vw" /><p className="mt-1 text-sm">Before (illustrative)</p></div><div><Photo id={`gallery-after-${n}`} className="aspect-square" sizes="(min-width: 768px) 25vw, 50vw" /><p className="mt-1 text-sm">After (illustrative)</p></div>
        <figcaption className="col-span-2 px-2 py-1 text-sm text-ink/70">Sample case {n}: placeholder, not a real result.</figcaption></figure>)}</div></div></section>

    <section aria-labelledby="exp" className="mx-auto max-w-6xl px-4 py-14"><h2 id="exp" className={H2}>Patient experience</h2>
      <p className="mt-2 text-sm text-ink/70">Fictional sample testimonials for demonstration. No real reviews or ratings are claimed.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{testimonials.map((t) => <blockquote key={t} className="rounded-3xl bg-white p-6 font-serif text-lg text-deep ring-1 ring-sage">{t}</blockquote>)}</div></section>

    <section aria-labelledby="ins" className="bg-deep py-14 text-cream"><div className="mx-auto max-w-3xl px-4"><h2 id="ins" className="font-serif text-3xl">Insurance & financing</h2>
      <p className="mt-4 text-cream/85">Insurance acceptance and financing options vary by practice and must be confirmed directly with the actual clinic. This demo lists no real plans.</p>
      <Link href="/insurance-financing" className="btn mt-6 bg-champagne text-deep hover:bg-white">Learn more</Link></div></section>

    <section aria-labelledby="faq" className="mx-auto max-w-3xl px-4 py-14"><h2 id="faq" className={H2}>Frequently asked questions</h2>
      <div className="mt-6 divide-y divide-sage rounded-2xl bg-white ring-1 ring-sage">{faqs.map(([q, a]) => <details key={q} className="group p-5"><summary className="cursor-pointer list-none font-medium text-deep">{q}</summary><p className="mt-2 text-ink/80">{a}</p></details>)}</div></section>

    <section className="mx-auto max-w-6xl px-4 pb-16"><div className="rounded-[2rem] bg-sage p-10 text-center"><h2 className={H2}>Ready to Love Your Smile?</h2>
      <Link href="/request-appointment" className="btn btn-primary mt-6">Request Your Appointment</Link></div></section>
    <DeveloperCta />
  </>);
}

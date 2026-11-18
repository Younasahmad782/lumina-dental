import type { Metadata } from "next"; import Link from "next/link"; import Breadcrumbs from "@/components/Breadcrumbs"; import Photo from "@/components/Photo"; import DeveloperCta from "@/components/DeveloperCta"; import { site } from "@/config/site";
export const metadata: Metadata = { title: "Contact Us", description: "Contact page for the fictional Lumina Dental demo practice.", alternates: { canonical: "/contact" } };
export default function Page() {
  return (<><Breadcrumbs items={[{ label: "Contact Us" }]} />
    <div className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-serif text-4xl text-deep">Contact Us</h1>
      <p className="mt-3 text-sm text-ink/70">All practice details below are fictional demonstration content.</p>
      <Photo id="contact" className="mt-6 aspect-[16/9] rounded-3xl" sizes="(min-width: 768px) 768px, 100vw" />
      <address className="mt-6 space-y-2 rounded-3xl bg-white p-6 not-italic ring-1 ring-sage"><p>{site.demoAddress}</p>
        <p>Phone: <a className="underline" href={site.demoPhoneHref}>{site.demoPhone}</a> (demo)</p><p>Hours: {site.demoHours}</p></address>
      <Link href="/request-appointment" className="btn btn-primary mt-6">Request an Appointment</Link></div><DeveloperCta /></>);
}

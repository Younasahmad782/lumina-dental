import Link from "next/link"; import { site } from "@/config/site";
export default function AnnouncementBar() {
  return (<div className="bg-deep text-cream text-sm"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2">
    <p>Demo site: welcoming new patients (sample message)</p>
    <p className="flex items-center gap-4"><a href={site.demoPhoneHref} className="underline">{site.demoPhone} (demo number)</a>
    <Link href="/request-appointment" className="font-semibold text-champagne underline">Request an appointment</Link></p></div></div>);
}

import Link from "next/link"; import { Phone } from "lucide-react"; import { site } from "@/config/site";
export default function StickyCta() {
  return (<div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-sage bg-cream p-2 md:hidden">
    <a href={site.demoPhoneHref} className="btn btn-ghost"><Phone size={18} aria-hidden /> Call (demo)</a>
    <Link href="/request-appointment" className="btn btn-primary">Request Appointment</Link></div>);
}

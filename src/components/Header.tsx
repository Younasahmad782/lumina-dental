"use client";
import Link from "next/link"; import { useState } from "react"; import { Menu, X } from "lucide-react"; import { nav, site } from "@/config/site";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (<header className="sticky top-0 z-40 border-b border-sage bg-cream/95 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <Link href="/" className="font-serif text-2xl tracking-wide text-deep" aria-label={`${site.name} home`}>LUMINA <span className="text-teal">DENTAL</span></Link>
      <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
        {nav.map((n) => <Link key={n.href} href={n.href} className="text-sm font-medium hover:text-teal">{n.label}</Link>)}
        <Link href="/request-appointment" className="btn btn-primary">Request Appointment</Link></nav>
      <button className="flex h-12 w-12 items-center justify-center lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}</button></div>
    {open && <nav id="mobile-nav" aria-label="Mobile" className="border-t border-sage bg-cream px-4 pb-5 lg:hidden"><ul>
      {nav.map((n) => <li key={n.href}><Link href={n.href} onClick={() => setOpen(false)} className="block py-3 text-lg">{n.label}</Link></li>)}</ul>
      <Link href="/request-appointment" onClick={() => setOpen(false)} className="btn btn-primary mt-2 w-full">Request Appointment</Link></nav>}
  </header>);
}

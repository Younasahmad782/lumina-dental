"use client";
import { useState, type FormEvent } from "react"; import { CheckCircle2 } from "lucide-react";

const types = ["New patient visit", "Checkup & cleaning", "Cosmetic consultation", "Implant consultation", "Clear aligner consultation", "Other"];
const times = ["Morning", "Midday", "Afternoon"];
type Values = { name: string; phone: string; email: string; date: string; time: string; type: string };
type Errors = Partial<Record<keyof Values, string>>;
const empty: Values = { name: "", phone: "", email: "", date: "", time: "", type: "" };

export function validate(v: Values, today = new Date().toISOString().slice(0, 10)): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Enter your full name.";
  if (v.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a 10-digit phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = "Enter a valid email, like name@example.com.";
  if (!v.date) e.date = "Choose a preferred date."; else if (v.date < today) e.date = "Choose today or a future date.";
  if (!v.time) e.time = "Choose a preferred time.";
  if (!v.type) e.type = "Choose an appointment type.";
  return e;
}

export default function AppointmentForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const set = (k: keyof Values) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(v); setErrors(errs);
    const first = Object.keys(errs)[0];
    if (first) { document.getElementById(first)?.focus(); return; }
    setStatus("loading");
    // DEMO ONLY: nothing is sent or stored. Replace with a real, HIPAA-appropriate integration for a live clinic.
    setTimeout(() => { setStatus("success"); setV(empty); }, 900);
  }

  if (status === "success") return (
    <div role="status" className="rounded-3xl bg-sage p-8 text-center"><CheckCircle2 className="mx-auto text-teal" size={40} aria-hidden />
      <h2 className="mt-3 font-serif text-2xl text-deep">Demo request received</h2>
      <p className="mt-2 text-ink/80">This is a demonstration. Nothing was sent or stored. A live clinic would contact you to confirm a time.</p>
      <button className="btn btn-ghost mt-5" onClick={() => setStatus("idle")}>Start another demo request</button></div>);

  const field = "mt-1 w-full min-h-12 rounded-xl border border-ink/30 bg-white px-4 py-2 text-base";
  const Err = ({ k }: { k: keyof Values }) => errors[k] ? <p id={`${k}-err`} className="mt-1 text-sm text-red-700">{errors[k]}</p> : null;
  const a11y = (k: keyof Values) => ({ id: k, name: k, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (<form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-sage md:grid-cols-2">
    <p className="md:col-span-2 rounded-xl bg-cream p-4 text-sm">Demonstration form. It does not transmit or store information. Please do not enter medical details, symptoms or insurance IDs.</p>
    <div className="md:col-span-2"><label htmlFor="name" className="font-medium">Full name</label><input {...a11y("name")} autoComplete="name" className={field} value={v.name} onChange={set("name")} /><Err k="name" /></div>
    <div><label htmlFor="phone" className="font-medium">Phone number</label><input {...a11y("phone")} type="tel" autoComplete="tel" inputMode="tel" className={field} value={v.phone} onChange={set("phone")} /><Err k="phone" /></div>
    <div><label htmlFor="email" className="font-medium">Email</label><input {...a11y("email")} type="email" autoComplete="email" className={field} value={v.email} onChange={set("email")} /><Err k="email" /></div>
    <div><label htmlFor="date" className="font-medium">Preferred date</label><input {...a11y("date")} type="date" min={new Date().toISOString().slice(0, 10)} className={field} value={v.date} onChange={set("date")} /><Err k="date" /></div>
    <div><label htmlFor="time" className="font-medium">Preferred time</label><select {...a11y("time")} className={field} value={v.time} onChange={set("time")}><option value="">Select a time</option>{times.map((t) => <option key={t}>{t}</option>)}</select><Err k="time" /></div>
    <div className="md:col-span-2"><label htmlFor="type" className="font-medium">Appointment type</label><select {...a11y("type")} className={field} value={v.type} onChange={set("type")}><option value="">Select a type</option>{types.map((t) => <option key={t}>{t}</option>)}</select><Err k="type" /></div>
    <div className="md:col-span-2"><button type="submit" disabled={status === "loading"} className="btn btn-primary w-full disabled:opacity-60 md:w-auto">{status === "loading" ? "Sending demo request…" : "Request Your Appointment"}</button></div>
  </form>);
}

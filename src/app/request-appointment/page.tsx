import type { Metadata } from "next"; import Breadcrumbs from "@/components/Breadcrumbs"; import Photo from "@/components/Photo"; import AppointmentForm from "@/components/AppointmentForm";
export const metadata: Metadata = { title: "Request an Appointment", description: "Demonstration appointment request form for the fictional Lumina Dental practice. No data is sent or stored.", alternates: { canonical: "/request-appointment" } };
export default function Page() {
  return (<><Breadcrumbs items={[{ label: "Request an Appointment" }]} />
    <div className="mx-auto max-w-3xl px-4 py-10"><h1 className="font-serif text-4xl text-deep">Request an Appointment</h1>
      <p className="mb-8 mt-3 text-ink/80">Tell us when works best and we'll follow up to confirm. In this demo, nothing is transmitted.</p><Photo id="appointment" className="mb-8 aspect-[16/7] rounded-3xl" sizes="(min-width: 768px) 768px, 100vw" /><AppointmentForm /></div></>);
}

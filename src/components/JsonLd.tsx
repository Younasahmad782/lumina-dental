import { dentistSchema } from "@/lib/schema";
export default function JsonLd() {
  const data = dentistSchema(); if (!data) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

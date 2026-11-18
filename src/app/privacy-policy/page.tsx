import type { Metadata } from "next"; import InfoPage from "@/components/InfoPage"; import { pages } from "@/data/pages";
const page = pages["privacy-policy"];
export const metadata: Metadata = { title: page.title, description: page.description, alternates: { canonical: "/privacy-policy" } };
export default function Page() { return <InfoPage page={page} />; }

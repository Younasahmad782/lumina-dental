import type { Metadata } from "next"; import InfoPage from "@/components/InfoPage"; import { pages } from "@/data/pages";
const page = pages["smile-gallery"];
export const metadata: Metadata = { title: page.title, description: page.description, alternates: { canonical: "/smile-gallery" } };
export default function Page() { return <InfoPage page={page} />; }

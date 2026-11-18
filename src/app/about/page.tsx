import type { Metadata } from "next"; import InfoPage from "@/components/InfoPage"; import { pages } from "@/data/pages";
const page = pages["about"];
export const metadata: Metadata = { title: page.title, description: page.description, alternates: { canonical: "/about" } };
export default function Page() { return <InfoPage page={page} />; }

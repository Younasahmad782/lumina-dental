import type { Metadata } from "next"; import InfoPage from "@/components/InfoPage"; import { pages } from "@/data/pages";
const page = pages["insurance-financing"];
export const metadata: Metadata = { title: page.title, description: page.description, alternates: { canonical: "/insurance-financing" } };
export default function Page() { return <InfoPage page={page} />; }

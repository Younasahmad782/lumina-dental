// Local landing page templates. A city page is published ONLY when a real practice serves it
// AND original local content is supplied. Do not publish thin or duplicate city pages.
export type Location = { slug: string; city: string; state: string; published: boolean;
  practice?: { address: string; phone: string; intro: string; neighborhoods: string[]; hours?: string; parkingOrTransit?: string } };
export const locations: Location[] = [
  { slug: "charlotte-nc", city: "Charlotte", state: "NC", published: false },
  { slug: "houston-tx", city: "Houston", state: "TX", published: false },
  { slug: "orlando-fl", city: "Orlando", state: "FL", published: false },
  { slug: "phoenix-az", city: "Phoenix", state: "AZ", published: false },
  { slug: "atlanta-ga", city: "Atlanta", state: "GA", published: false },
];
export const live = () => locations.filter((l) => l.published && l.practice);

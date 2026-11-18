import fs from "node:fs"; import path from "node:path"; import Image from "next/image"; import { images } from "@/data/images";
// Server component. Renders a real photo when /public/images/<file> exists, otherwise a labeled placeholder.
// Pass aspect via className (e.g. "aspect-[4/3] md:aspect-[4/5]") so layout never shifts.
export default function Photo({ id, className = "aspect-[4/3]", priority = false, imgClassName = "", sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" }:
  { id: string; className?: string; priority?: boolean; imgClassName?: string; sizes?: string }) {
  const img = images[id];
  const exists = img && fs.existsSync(path.join(process.cwd(), "public", "images", img.file));
  return (<div className={`relative overflow-hidden rounded-2xl bg-sage ${className}`}>
    {exists ? <Image src={`/images/${img.file}`} alt={img.alt} fill sizes={sizes} priority={priority} loading={priority ? undefined : "lazy"} quality={75} className={`object-cover ${imgClassName}`} />
      : <p role="img" aria-label={img ? img.alt : "Photo placeholder"} className="absolute inset-0 flex items-end p-3 text-xs text-deep/70">Photo needed: {img?.file ?? id}</p>}
  </div>);
}

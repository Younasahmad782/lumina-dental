# Lumina Dental: Demo Website (fictional practice)

Premium US dental website concept built with Next.js 14 (App Router), React, TypeScript, Tailwind CSS and Lucide icons.
All clinic details, dentists, testimonials, gallery cases and statistics are **fictional demonstration content**.
Website concept by Younus, Web Developer (contact details live in `src/config/site.ts`).

## Install and run
```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # TypeScript check
npm run build && npm start
```
Requires Node.js 18.17+.

## Environment variables (`.env.example`)
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Real production domain for canonical URLs, sitemap, structured data |
| `NEXT_PUBLIC_ALLOW_INDEXING` | `false` (default) blocks search engines. Set `true` only for a real launched clinic site |

## Deploy to Vercel
1. Push the project to a GitHub repository.
2. In Vercel: Add New, Project, import the repo (framework auto-detected as Next.js).
3. Add the two environment variables above.
4. Deploy. Add your custom domain, then set `NEXT_PUBLIC_SITE_URL` to it and redeploy.
For portfolio demos, leave indexing off so the fictional clinic does not appear in search results.

## Customizing for a real clinic
- `src/config/site.ts`: name, demo phone/address/hours, developer contact, nav, homepage services
- `src/config/seo.ts`: real business facts for Dentist JSON-LD. Empty fields are omitted; nothing is invented. Add ratings only if verified.
- `src/data/treatments.ts`, `src/data/pages.ts`: page content (have the clinic review all clinical wording)
- `src/data/cities.ts`: local pages. Set `published: true` and fill `practice` only when a real location exists and you have original local content
- Replace placeholder blocks with licensed photos in `/public` using `next/image`
- Appointment form (`src/components/AppointmentForm.tsx`): demo only, transmits nothing. A live clinic needs a vetted, HIPAA-appropriate integration

## Testing
1. `npm run lint` and `npm run build` must pass.
2. Click every nav, footer and button link; submit the form with errors, then valid data.
3. Check 360, 768 and 1280 px widths for horizontal overflow, and keyboard-tab through the menu and form.
4. Run Lighthouse and an accessibility tool (axe) on key pages, and test with a screen reader.
5. Visit `/robots.txt` and `/sitemap.xml`.

## Feature checklist
Done: design tokens; announcement bar, header, mobile menu, footer, sticky mobile CTA; full homepage; demo appointment form with validation, loading and success states; contact page; developer inquiry section (call, WhatsApp, email); services index plus 8 treatment pages; 9 info pages; breadcrumbs; per-page metadata, canonical URLs, Open Graph and Twitter tags; sitemap; robots; Dentist JSON-LD template; gated city page templates; skip link, focus states, reduced motion.

## Known limitations
- Placeholder visuals instead of licensed photography
- System font stacks (add `next/font/google` locally if desired)
- Open Graph images not provided
- No automated tests; not verified in real browsers, on devices, with Lighthouse or with screen readers
- Performance and accessibility targets are goals, not guarantees; no WCAG or HIPAA certification is claimed
- Social links are unlinked placeholders; no live booking or data storage

## Photography
Photos are not bundled. Add licensed images to `public/images/` using the filenames in `src/data/images.ts`
(e.g. `dental-clinic-hero.jpg`), then record each source and license in `public/images/ATTRIBUTION.md`.
Missing files show a small "Photo needed" label instead of a broken image. Recommended: hero 2000x1500, service images 1600x1067,
portraits 1200x1500, gallery 1000x1000 (JPG, under about 400 KB each; Next.js serves AVIF/WebP automatically).

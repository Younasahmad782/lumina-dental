// Image manifest. Put each file in /public/images using the exact filename, then fill in ATTRIBUTION.md.
// Until a file exists, a labeled placeholder is shown (no broken images).
export type Img = { file: string; alt: string };
export const images: Record<string, Img> = {
  hero: { file: "dental-clinic-hero.jpg", alt: "Dentist consulting with a patient in a bright, modern dental clinic" },
  "svc-general-dentistry": { file: "general-dentistry.jpg", alt: "Dentist performing a routine exam on an adult patient" },
  "svc-family-dentist": { file: "family-dentist.jpg", alt: "Friendly dental team welcoming a family" },
  "svc-cosmetic-dentistry": { file: "cosmetic-dentistry.jpg", alt: "Patient reviewing smile options with a cosmetic dentist" },
  "svc-dental-implants": { file: "dental-implants.jpg", alt: "Dentist explaining a dental implant model to a patient" },
  "svc-teeth-whitening": { file: "teeth-whitening.jpg", alt: "Patient receiving a professional teeth whitening treatment" },
  "svc-porcelain-veneers": { file: "porcelain-veneers.jpg", alt: "Close view of a natural-looking smile with porcelain veneers" },
  "svc-invisalign": { file: "clear-aligners.jpg", alt: "Hand holding a set of clear aligners" },
  "svc-emergency-dentist": { file: "emergency-dentist.jpg", alt: "Dentist examining a patient with tooth pain" },
  "dentist-1": { file: "dentist-portrait-1.jpg", alt: "Portrait of a smiling dentist in a clinic" },
  "dentist-2": { file: "dentist-portrait-2.jpg", alt: "Portrait of a friendly cosmetic dentist" },
  "dentist-3": { file: "dentist-portrait-3.jpg", alt: "Portrait of a dentist in scrubs" },
  "page-about": { file: "clinic-interior.jpg", alt: "Modern dental clinic treatment room with natural light" },
  "page-new-patients": { file: "dental-reception.jpg", alt: "Welcoming dental clinic reception desk" },
  contact: { file: "clinic-exterior.jpg", alt: "Modern dental clinic exterior and entrance" },
  appointment: { file: "dentist-consultation.jpg", alt: "Dentist and patient talking through a treatment plan" },
  "gallery-before-1": { file: "smile-before-1.jpg", alt: "Illustrative smile before treatment" },
  "gallery-after-1": { file: "smile-after-1.jpg", alt: "Illustrative smile after treatment" },
  "gallery-before-2": { file: "smile-before-2.jpg", alt: "Illustrative smile before treatment, second case" },
  "gallery-after-2": { file: "smile-after-2.jpg", alt: "Illustrative smile after treatment, second case" },
};

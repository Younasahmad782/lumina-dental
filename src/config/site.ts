// Central config. Replace demo values with real client details before launch.
export const site = {
  name: "Lumina Dental",
  tagline: "Modern Family, Cosmetic & Restorative Dentistry",
  url: "https://www.example-lumina-dental.com", // TODO: real domain (canonical URLs)
  demoPhone: "(555) 010-0100", demoPhoneHref: "tel:+15550100100",
  demoHours: "Mon–Thu 8–5, Fri 8–2 (illustrative)",
  demoAddress: "123 Sample Street, Demo City (fictional)",
  developer: { name: "Younus", role: "Web Developer", phoneHref: "tel:+923457305226",
    phoneDisplay: "+92 345 7305226", whatsapp: "https://wa.me/923457305226", email: "khokharunus782@gmail.com" },
};
export const nav = [
  { href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/services", label: "Services" },
  { href: "/dentists", label: "Our Team" }, { href: "/new-patients", label: "New Patients" }, { href: "/contact", label: "Contact" },
];
export const services = [
  { slug: "general-dentistry", title: "General Dentistry", text: "Exams, cleanings and fillings that keep the whole family comfortable and healthy." },
  { slug: "cosmetic-dentistry", title: "Cosmetic Dentistry", text: "Natural-looking refinements planned around your face, your goals and your timeline." },
  { slug: "dental-implants", title: "Dental Implants", text: "Durable replacement for missing teeth, explained clearly from consultation to final restoration." },
  { slug: "teeth-whitening", title: "Teeth Whitening", text: "Professional whitening options for a brighter smile with comfort in mind." },
  { slug: "porcelain-veneers", title: "Porcelain Veneers", text: "Thin porcelain shells that reshape color, size and symmetry." },
  { slug: "invisalign", title: "Invisalign / Clear Aligners", text: "Discreet alignment options to straighten teeth without traditional braces." },
];

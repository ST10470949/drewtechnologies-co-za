export const SITE = {
  name: "Drew Technologies",
  tagline: "Your Vision. Our Creation.",
  founder: "Abongile Lathitha Manqana",
  email: "drewtechnologies26@gmail.com",
  website: "drewtechnologies.co.za",
  instagram: "drew_technologies",
  instagramUrl: "https://www.instagram.com/drew_technologies/",
  location: "South Africa",
  whatsapp: [
    { label: "068 691 7586", intl: "27686917586" },
    { label: "083 771 9808", intl: "27837719808" },
  ],
};

export const DEFAULT_WA_MESSAGE =
  "Hi Drew Technologies, I'm interested in building a website for my business. I'd like to discuss my requirements and receive a quotation.";

export function whatsappLink(intl: string, message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${intl}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

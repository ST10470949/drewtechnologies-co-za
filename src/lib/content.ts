import corporate from "@/assets/concept-corporate.jpg";
import fashion from "@/assets/concept-fashion.jpg";
import restaurant from "@/assets/concept-restaurant.jpg";
import portfolio from "@/assets/concept-portfolio.jpg";

export const SERVICES = [
  {
    no: "01",
    title: "Business Websites",
    body: "Professional websites that explain a business's services, build credibility, and make it easier for potential customers to get in touch.",
    points: ["Service & about pages", "Clear enquiry paths", "Brand-led design"],
  },
  {
    no: "02",
    title: "E-commerce Websites",
    body: "Online stores designed to showcase products and support a smooth shopping experience, with functionality agreed according to each project's requirements.",
    points: ["Product catalogues", "Checkout flow planning", "Mobile-first browsing"],
  },
  {
    no: "03",
    title: "Portfolio Websites",
    body: "Professional online portfolios that help creatives, freelancers, and professionals present their work.",
    points: ["Gallery layouts", "Case-study pages", "Personal branding"],
  },
  {
    no: "04",
    title: "Responsive Website Design",
    body: "Websites designed to work across mobile phones, tablets, laptops, and desktops.",
    points: ["Phone & tablet layouts", "Readable typography", "Touch-friendly controls"],
  },
  {
    no: "05",
    title: "Website Redesign",
    body: "Modernise existing websites with improved visual design, usability, navigation, and responsive layouts.",
    points: ["Visual refresh", "Simpler navigation", "Content restructuring"],
  },
];

export const PROJECTS = [
  {
    slug: "summit",
    name: "Summit Consulting",
    type: "Corporate business website",
    image: corporate,
    audience: "Consulting firms and professional-services companies.",
    direction: "Dark, confident layout with lime highlights and strong headline hierarchy.",
    features: ["Service overview grid", "Consultation call-to-action", "Team-led hero"],
  },
  {
    slug: "velmont",
    name: "Velmont",
    type: "Fashion e-commerce store",
    image: fashion,
    audience: "Boutique fashion labels selling online.",
    direction: "Warm editorial neutrals, serif wordmark, product-first photography.",
    features: ["Featured product grid", "Collection storytelling", "Colour swatches"],
  },
  {
    slug: "ember-oak",
    name: "The Ember Oak",
    type: "Restaurant website",
    image: restaurant,
    audience: "Restaurants, bistros and hospitality venues.",
    direction: "Moody, candle-lit palette with gold accents and appetite-led imagery.",
    features: ["Menu sections", "Reservation button", "Atmosphere gallery"],
  },
  {
    slug: "rivera",
    name: "Alex Rivera",
    type: "Professional portfolio",
    image: portfolio,
    audience: "Photographers, designers and freelance creatives.",
    direction: "White space, oversized type and an asymmetric image grid.",
    features: ["Broken-grid gallery", "About story", "Simple contact path"],
  },
];

export const PROCESS = [
  { no: "01", title: "Discover", body: "Understand your business, goals, audience, and requirements." },
  { no: "02", title: "Design", body: "Plan the website structure and create a suitable visual direction." },
  { no: "03", title: "Develop", body: "Build and test the website and its agreed functionality." },
  { no: "04", title: "Launch", body: "Prepare the website for launch and explain the next steps." },
];

export const REASONS = [
  ["Custom designs", "Every layout is shaped around your requirements — no recycled templates."],
  ["Responsive layouts", "Designed for phones, tablets, laptops and large screens."],
  ["Clear communication", "Plain-language updates so you always know where things stand."],
  ["User-friendly experiences", "Easy navigation that helps visitors find what they need."],
  ["Attention to detail", "Typography, spacing and imagery considered with care."],
  ["Transparent scope", "What's included is agreed upfront, in writing."],
  ["Tailored to your goals", "Pages and features chosen to support what your business needs."],
] as const;

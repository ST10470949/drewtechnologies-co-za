import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, MapPin } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

import { CtaLink } from "./Buttons";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow !text-lime">Ready when you are</p>
          <h2 className="mt-5 text-4xl font-bold leading-[1.02] sm:text-6xl">
            Your Vision. <span className="text-lime">Our Creation.</span>
          </h2>
          <div className="mt-8">
            <CtaLink to="/contact">Start Your Project</CtaLink>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-6">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] opacity-60">CONTACT</p>
            <ul className="mt-5 space-y-3 text-sm">
              {SITE.whatsapp.map((w) => (
                <li key={w.intl}>
                  <a className="flex items-center gap-3 hover:text-lime" href={whatsappLink(w.intl)} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" /> WhatsApp {w.label}
                  </a>
                </li>
              ))}
              <li>
                <a className="flex items-center gap-3 break-all hover:text-lime" href={`mailto:${SITE.email}`}>
                  <Mail className="h-4 w-4 shrink-0" /> {SITE.email}
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 hover:text-lime" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
                  <Instagram className="h-4 w-4" /> @{SITE.instagram}
                </a>
              </li>
              <li className="flex items-center gap-3 opacity-70">
                <MapPin className="h-4 w-4" /> {SITE.location}
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.25em] opacity-60">EXPLORE</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-lime">Services</Link></li>
              <li><Link to="/work" className="hover:text-lime">Work</Link></li>
              <li><Link to="/about" className="hover:text-lime">About</Link></li>
              <li><Link to="/contact" className="hover:text-lime">Project enquiry</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-xs opacity-70 sm:flex-row sm:items-center">
          <span className="flex items-center gap-2">
            <svg viewBox="0 0 100 80" className="h-4 w-auto" aria-hidden="true">
              <path d="M8 0H58a40 40 0 0 1 0 80H26l18-16h14a24 24 0 0 0 0-48H8Z" fill="currentColor" />
              <path d="M8 46 38 22h18L8 62Z" className="fill-lime" />
            </svg>
            © {new Date().getFullYear()} Drew Technologies · Founded by {SITE.founder}
          </span>
          <span className="tracking-[0.25em]">WEBSITES / E-COMMERCE / PORTFOLIOS / REDESIGNS</span>
        </div>
      </div>
    </footer>
  );
}

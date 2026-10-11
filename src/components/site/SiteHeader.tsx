import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { btnLime } from "./Buttons";

const NAV = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent"}`}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact" className={`${btnLime} hidden !py-2.5 sm:inline-flex`}>
            Start a Project
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-x-0 top-[72px] bottom-0 z-30 bg-background transition-all duration-300 md:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <nav className="container-x flex flex-col gap-1 pt-6" aria-label="Mobile">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="border-b border-border py-5 font-display text-4xl font-bold tracking-tight"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className={`${btnLime} mt-8`}>
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}

import { Link } from "@tanstack/react-router";

export function LogoMark({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" className={className} aria-hidden="true">
      <path
        d="M8 0H58a40 40 0 0 1 0 80H26l18-16h14a24 24 0 0 0 0-48H8Z"
        className="fill-foreground"
      />
      <path d="M8 46 38 22h18L8 62Z" className="fill-lime" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Drew Technologies — home">
      <LogoMark className="h-7 w-auto transition-transform duration-500 group-hover:-rotate-6" />
      <span className="leading-none">
        <span className="block font-display text-xl font-extrabold tracking-tight">Drew</span>
        <span className="block text-[0.55rem] font-semibold tracking-[0.32em] text-muted-foreground">
          TECHNOLOGIES
        </span>
      </span>
    </Link>
  );
}

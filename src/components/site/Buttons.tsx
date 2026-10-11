import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
export const btnLime = `${base} bg-lime text-accent-foreground hover:shadow-[0_10px_30px_-10px_var(--lime)] hover:-translate-y-0.5`;
export const btnOutline = `${base} border border-foreground/25 text-foreground hover:border-foreground hover:bg-foreground hover:text-background`;
export const btnInk = `${base} bg-foreground text-background hover:-translate-y-0.5`;

export function CtaLink({
  to,
  children,
  variant = "lime",
}: {
  to: "/contact" | "/work" | "/services" | "/about" | "/";
  children: ReactNode;
  variant?: "lime" | "outline" | "ink";
}) {
  const cls = variant === "lime" ? btnLime : variant === "ink" ? btnInk : btnOutline;
  return (
    <Link to={to} className={cls}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

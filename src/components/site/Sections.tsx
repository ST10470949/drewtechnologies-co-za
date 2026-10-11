import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PROCESS, PROJECTS, REASONS, SERVICES } from "@/lib/content";
import { Laptop, Phone } from "./Devices";
import { Reveal } from "./Reveal";
import { CtaLink } from "./Buttons";

export function SectionHead({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <p className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-lime" /> {eyebrow}
        </p>
        <h2 className="mt-5 text-4xl font-bold leading-[1.02] text-balance sm:text-6xl">{title}</h2>
      </div>
      {intro && <p className="text-lg text-muted-foreground lg:col-span-5 lg:pb-2">{intro}</p>}
    </div>
  );
}

export function ServicesList() {
  return (
    <div className="mt-14 border-t border-border">
      {SERVICES.map((s, i) => (
        <Reveal key={s.no} delay={i * 60}>
          <div className="group grid gap-6 border-b border-border py-10 transition-colors lg:grid-cols-12 lg:items-start">
            <span className="font-display text-sm font-bold text-lime-ink lg:col-span-1">{s.no}</span>
            <h3 className="text-3xl font-bold transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl lg:col-span-4">
              {s.title}
            </h3>
            <div className="lg:col-span-5">
              <p className="text-muted-foreground">{s.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.points.map((p) => (
                  <li key={p} className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 lg:text-right">
              <Link
                to="/contact"
                search={{ type: s.title }}
                className="inline-flex items-center gap-1.5 text-sm font-bold underline-offset-4 hover:underline"
              >
                Discuss Your Project <ArrowUpRight className="h-4 w-4 text-lime-ink" />
              </Link>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function ProjectShowcase({ limit }: { limit?: number }) {
  const list = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <div className="mt-16 space-y-28">
      {list.map((p, i) => (
        <Reveal key={p.slug}>
          <article className="grid items-center gap-10 lg:grid-cols-12">
            <div className={`relative lg:col-span-8 ${i % 2 ? "lg:order-2" : ""}`}>
              <div className="group relative rounded-2xl bg-surface p-5 grid-bg sm:p-10">
                <div className="transition-transform duration-700 group-hover:-translate-y-1.5">
                  <Laptop src={p.image} alt={`${p.name} concept homepage on desktop`} />
                </div>
                <div className="absolute -bottom-8 w-[22%] max-w-[150px] transition-transform duration-700 group-hover:-translate-y-3 right-4 sm:right-8">
                  <Phone src={p.image} alt={`${p.name} concept on mobile`} />
                </div>
                <span className="absolute top-4 left-4 rounded-full bg-lime px-3 py-1 text-[0.65rem] font-bold tracking-widest text-accent-foreground uppercase">
                  Concept Project
                </span>
              </div>
            </div>
            <div className="lg:col-span-4">
              <p className="eyebrow">{p.type}</p>
              <h3 className="mt-3 text-3xl font-bold sm:text-4xl">{p.name}</h3>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="font-bold">Intended audience</dt>
                  <dd className="mt-1 text-muted-foreground">{p.audience}</dd>
                </div>
                <div>
                  <dt className="font-bold">Design direction</dt>
                  <dd className="mt-1 text-muted-foreground">{p.direction}</dd>
                </div>
                <div>
                  <dt className="font-bold">Key features</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {p.features.map((f) => (
                      <span key={f} className="rounded-full border border-border px-3 py-1 text-xs font-semibold">
                        {f}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-xs text-muted-foreground">
                Sample design created to demonstrate style — not completed client work.
              </p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function WhyUs() {
  return (
    <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {REASONS.map(([t, b], i) => (
        <div key={t} className="bg-background p-7 transition-colors hover:bg-surface">
          <span className="font-display text-xs font-bold text-lime-ink">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 text-xl font-bold">{t}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{b}</p>
        </div>
      ))}
      <div className="flex flex-col justify-between bg-lime p-7 text-accent-foreground">
        <h3 className="text-xl font-bold">Have a project in mind?</h3>
        <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
          Request a quotation <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export function ProcessSteps() {
  return (
    <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      {PROCESS.map((s, i) => (
        <Reveal key={s.no} delay={i * 80}>
          <li className="border-t-2 border-foreground pt-6">
            <span className="font-display text-6xl font-extrabold text-lime-ink">{s.no}</span>
            <h3 className="mt-4 text-2xl font-bold">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.body}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function CtaBand() {
  return (
    <section className="container-x py-24">
      <div className="relative overflow-hidden rounded-3xl bg-lime p-10 text-accent-foreground sm:p-16">
        <div className="absolute inset-0 opacity-40 grid-bg" />
        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="text-4xl font-extrabold leading-[1] sm:text-6xl lg:col-span-8">
            Let's build a website your business is proud of.
          </h2>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <CtaLink to="/contact" variant="ink">
              Start Your Project
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

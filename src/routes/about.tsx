import { createFileRoute } from "@tanstack/react-router";
import { LogoMark } from "@/components/site/Logo";
import { CtaBand, SectionHead, WhyUs } from "@/components/site/Sections";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Drew Technologies" },
      { name: "description", content: `Drew Technologies is a South African web design studio founded by ${SITE.founder}.` },
      { property: "og:title", content: "About Drew Technologies" },
      { property: "og:description", content: "A South African studio designing modern websites for modern businesses." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-x grid gap-14 pt-16 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">About</p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] text-balance sm:text-7xl">
            Modern websites for modern businesses.
          </h1>
          <div className="mt-10 max-w-xl space-y-5 text-lg text-muted-foreground">
            <p>
              Drew Technologies is a South African web design studio helping startups, entrepreneurs and small
              businesses build a professional presence online.
            </p>
            <p>
              We believe a website should do more than exist — it should explain what you do, earn trust, and make it
              easy for the right people to get in touch.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative flex aspect-square flex-col justify-between overflow-hidden rounded-3xl bg-ink p-8 text-ink-foreground">
            <div className="absolute inset-0 opacity-50 grid-bg" />
            <LogoMark className="relative h-16 w-auto self-start [&_path:first-child]:fill-ink-foreground" />
            <div className="relative">
              <p className="text-xs font-bold tracking-[0.25em] opacity-60">FOUNDER</p>
              <p className="mt-2 font-display text-3xl font-bold">{SITE.founder}</p>
              <p className="mt-4 font-display text-lime">{SITE.tagline}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-x pb-10">
        <SectionHead eyebrow="What you can expect" title="How we approach every project." />
        <WhyUs />
      </section>
      <CtaBand />
    </>
  );
}

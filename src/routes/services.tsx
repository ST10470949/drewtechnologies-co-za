import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, ProcessSteps, SectionHead, ServicesList } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Drew Technologies" },
      { name: "description", content: "Business websites, e-commerce stores, portfolios, responsive design and website redesigns." },
      { property: "og:title", content: "Website design services — Drew Technologies" },
      { property: "og:description", content: "Custom website packages for startups, entrepreneurs and growing businesses." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="container-x pt-16 pb-24">
        <p className="eyebrow">Services</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-extrabold leading-[0.98] text-balance sm:text-7xl">
          Every website, shaped to your <span className="text-lime-ink">business goals.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          We offer custom packages — tell us what you need and we'll put together a scope and quotation that fits.
        </p>
        <ServicesList />
      </section>
      <section className="container-x pb-10">
        <SectionHead eyebrow="Process" title="How we work together." />
        <ProcessSteps />
      </section>
      <CtaBand />
    </>
  );
}

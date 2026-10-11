import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, ProjectShowcase } from "@/components/site/Sections";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Concept Projects by Drew Technologies" },
      { name: "description", content: "Concept website designs for corporate, fashion e-commerce, restaurant and portfolio brands." },
      { property: "og:title", content: "Concept projects — Drew Technologies" },
      { property: "og:description", content: "Sample website designs showing the range of styles Drew Technologies creates." },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <>
      <section className="container-x pt-16 pb-28">
        <p className="eyebrow">Work</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-extrabold leading-[0.98] text-balance sm:text-7xl">
          Concept projects across industries.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          These are sample designs created to show our approach to layout, typography and visual storytelling. They are
          labelled as concept projects and are not completed client work.
        </p>
        <ProjectShowcase />
      </section>
      <CtaBand />
    </>
  );
}

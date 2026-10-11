import { createFileRoute } from "@tanstack/react-router";
import { CtaLink } from "@/components/site/Buttons";
import { Laptop, Phone } from "@/components/site/Devices";
import { CtaBand, ProcessSteps, ProjectShowcase, SectionHead, ServicesList, WhyUs } from "@/components/site/Sections";
import { PROJECTS } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drew Technologies — Your Vision. Our Creation." },
      {
        name: "description",
        content:
          "Drew Technologies designs and develops modern websites for startups, entrepreneurs and growing businesses in South Africa.",
      },
      { property: "og:title", content: "Drew Technologies — Your Vision. Our Creation." },
      {
        property: "og:description",
        content: "Business, e-commerce and portfolio websites designed to help your business stand out online.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [corp, fashion, , folio] = PROJECTS;
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_75%)]" />
        <div className="container-x relative grid gap-14 pt-10 pb-24 lg:grid-cols-12 lg:items-center lg:pt-16">
          <div className="lg:col-span-6">
            <p className="eyebrow animate-rise flex items-center gap-3">
              <span className="h-px w-8 bg-lime" /> Your Vision. Our Creation.
            </p>
            <h1
              className="animate-rise mt-6 text-[2.7rem] font-extrabold leading-[0.98] text-balance sm:text-6xl xl:text-[5.4rem]"
              style={{ animationDelay: "80ms" }}
            >
              Your Business Deserves More Than{" "}
              <span className="relative inline-block">
                Just a Website.
                <span className="absolute -bottom-1 left-0 -z-10 h-[0.32em] w-full bg-lime" />
              </span>
            </h1>
            <p className="animate-rise mt-7 max-w-lg text-lg text-muted-foreground" style={{ animationDelay: "160ms" }}>
              We design and develop modern digital experiences that help startups, entrepreneurs, and growing businesses
              stand out online.
            </p>
            <div className="animate-rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
              <CtaLink to="/contact">Start Your Project</CtaLink>
              <CtaLink to="/work" variant="outline">
                Explore Our Work
              </CtaLink>
            </div>
          </div>

          <div className="animate-rise relative lg:col-span-6" style={{ animationDelay: "200ms" }}>
            <div className="relative mx-auto max-w-[640px] pb-16 sm:pb-10">
              <div className="ml-auto w-[88%]">
                <Laptop src={corp.image} alt="Business website concept on a laptop" eager />
              </div>
              <div className="absolute top-[38%] left-0 w-[46%] rotate-[-4deg] rounded-xl border border-border bg-card p-1.5 shadow-device animate-floaty">
                <img
                  src={fashion.image}
                  alt="Online store concept"
                  width={1440}
                  height={960}
                  className="aspect-[3/2] w-full rounded-lg object-cover object-top"
                />
              </div>
              <div className="absolute right-[4%] -bottom-2 w-[22%] [animation-delay:1.5s] animate-floaty">
                <Phone src={folio.image} alt="Portfolio website concept on a phone" />
              </div>
              <div className="absolute -top-3 left-[18%] rounded-full bg-foreground px-3 py-1.5 text-[0.65rem] font-bold tracking-widest text-background uppercase">
                Business · Store · Portfolio
              </div>
            </div>
          </div>
        </div>
        <div className="border-y border-border bg-surface">
          <div className="container-x flex flex-wrap gap-x-10 gap-y-2 py-5 text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase">
            <span>Business websites</span>
            <span className="text-lime-ink">/</span>
            <span>E-commerce</span>
            <span className="text-lime-ink">/</span>
            <span>Portfolios</span>
            <span className="text-lime-ink">/</span>
            <span>Responsive design</span>
            <span className="text-lime-ink">/</span>
            <span>Redesigns</span>
          </div>
        </div>
      </section>

      <section className="container-x py-28">
        <SectionHead
          eyebrow="What we do"
          title="Websites built around what your business needs."
          intro="From a first online presence to a full online store — every project starts with your goals and is priced as a custom package."
        />
        <ServicesList />
      </section>

      <section className="bg-surface py-28">
        <div className="container-x">
          <SectionHead
            eyebrow="Selected concepts"
            title="Design that earns attention."
            intro="Sample designs across industries, showing the range of styles we can create. All are clearly labelled concept projects."
          />
          <ProjectShowcase limit={2} />
          <div className="mt-24 flex justify-center">
            <CtaLink to="/work" variant="outline">
              See all concept projects
            </CtaLink>
          </div>
        </div>
      </section>

      <section className="container-x py-28">
        <SectionHead eyebrow="Why Drew" title="Considered work. Honest process." />
        <WhyUs />
      </section>

      <section className="container-x pb-10">
        <SectionHead
          eyebrow="How it works"
          title="Four clear steps from idea to launch."
          intro="You'll know what's happening at every stage — and what comes next."
        />
        <ProcessSteps />
      </section>

      <CtaBand />
    </>
  );
}

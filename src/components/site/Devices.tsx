export function Laptop({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  return (
    <div className="w-full">
      <div className="rounded-t-xl border border-border bg-card p-1.5 shadow-device">
        <div className="mb-1.5 flex gap-1 px-1.5 pt-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
        </div>
        <img
          src={src}
          alt={alt}
          width={1440}
          height={960}
          loading={eager ? "eager" : "lazy"}
          className="aspect-[3/2] w-full rounded-md object-cover object-top"
        />
      </div>
      <div className="mx-auto h-2.5 w-[106%] -translate-x-[3%] rounded-b-xl bg-muted-foreground/30" />
    </div>
  );
}

export function Phone({ src, alt, position = "left" }: { src: string; alt: string; position?: "left" | "center" }) {
  return (
    <div className="w-full rounded-[1.6rem] border-4 border-ink bg-ink p-0.5 shadow-device">
      <img
        src={src}
        alt={alt}
        width={1440}
        height={960}
        loading="lazy"
        className={`aspect-[9/19] w-full rounded-[1.3rem] object-cover ${position === "left" ? "object-left-top" : "object-top"}`}
      />
    </div>
  );
}

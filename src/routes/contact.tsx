import { createFileRoute } from "@tanstack/react-router";
import { Check, Instagram, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { btnLime, btnOutline } from "@/components/site/Buttons";
import { SITE, mailtoLink, whatsappLink } from "@/lib/site";
import { SERVICES } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { type?: string } =>
    typeof s.type === "string" ? { type: s.type } : {},
  head: () => ({
    meta: [
      { title: "Start a Project — Drew Technologies" },
      { name: "description", content: "Send a project enquiry or chat on WhatsApp to request a website quotation." },
      { property: "og:title", content: "Start your website project — Drew Technologies" },
      { property: "og:description", content: "Tell us about your business and receive a custom website quotation." },
    ],
  }),
  component: Contact,
});

const TYPES = [...SERVICES.map((s) => s.title), "Not sure yet"];
const FEATURES = ["Home", "About", "Services", "Gallery / Portfolio", "Contact form", "Online store", "Blog", "Bookings", "WhatsApp chat", "Not sure yet"];
const BUDGETS = ["Under R5,000", "R5,000 – R10,000", "R10,000 – R20,000", "R20,000 – R40,000", "R40,000+", "Not sure yet"];
const TIMES = ["As soon as possible", "Within 1 month", "1 – 3 months", "Flexible", "Not sure yet"];
const STEPS = ["About you", "Your project", "Scope", "Review"];

type Form = {
  name: string; business: string; email: string; phone: string; type: string;
  description: string; goals: string; features: string[]; budget: string; timeframe: string;
  references: string; additional: string;
};

function validate(step: number, f: Form) {
  const e: Partial<Record<keyof Form, string>> = {};
  if (step === 0) {
    if (f.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
    if (f.phone.replace(/\D/g, "").length < 9) e.phone = "Please enter a phone or WhatsApp number.";
  }
  if (step === 1) {
    if (!f.type) e.type = "Choose the type of website you need.";
    if (f.description.trim().length < 10) e.description = "Tell us a little about your business (at least 10 characters).";
    if (f.goals.trim().length < 5) e.goals = "Share the main goal for your website.";
  }
  if (step === 2) {
    if (f.features.length === 0) e.features = "Select at least one option (or “Not sure yet”).";
    if (!f.budget) e.budget = "Choose a budget range (or “Not sure yet”).";
    if (!f.timeframe) e.timeframe = "Choose a timeframe.";
  }
  return e;
}

function summary(f: Form) {
  return [
    "New project enquiry — Drew Technologies",
    "",
    `Name: ${f.name}`,
    `Business: ${f.business || "—"}`,
    `Email: ${f.email}`,
    `Phone/WhatsApp: ${f.phone}`,
    `Website type: ${f.type}`,
    `Business description: ${f.description}`,
    `Main goals: ${f.goals}`,
    `Pages & features: ${f.features.join(", ")}`,
    `Budget: ${f.budget}`,
    `Timeframe: ${f.timeframe}`,
    `Reference websites: ${f.references || "—"}`,
    `Additional requirements: ${f.additional || "—"}`,
  ].join("\n");
}

const inputCls =
  "w-full rounded-lg border border-input bg-card px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30";

function Field({ label, error, children, id, optional }: { label: string; error?: string | undefined; children: React.ReactNode; id: string; optional?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold">
        {label} {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function Chips({ options, value, onToggle, multi, label, error }: { options: string[]; value: string[]; onToggle: (o: string) => void; multi?: boolean; label: string; error?: string | undefined }) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-bold">{label}</legend>
      <div className="flex flex-wrap gap-2" role={multi ? "group" : "radiogroup"}>
        {options.map((o) => {
          const on = value.includes(o);
          return (
            <button
              type="button"
              key={o}
              role={multi ? "checkbox" : "radio"}
              aria-checked={on}
              onClick={() => onToggle(o)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${on ? "border-lime bg-lime text-accent-foreground" : "border-border bg-card hover:border-foreground"}`}
            >
              {on && multi && <Check className="mr-1 -ml-1 inline h-3.5 w-3.5" />}
              {o}
            </button>
          );
        })}
      </div>
      {error && <p role="alert" className="mt-2 text-sm text-destructive">{error}</p>}
    </fieldset>
  );
}

function Contact() {
  const { type } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});
  const [sentVia, setSentVia] = useState<"whatsapp" | "email" | null>(null);
  const [f, setF] = useState<Form>({
    name: "", business: "", email: "", phone: "", type: type && TYPES.includes(type) ? type : "",
    description: "", goals: "", features: [], budget: "", timeframe: "", references: "", additional: "",
  });
  const set = <K extends keyof Form>(k: K, v: Form[K]) => setF((p) => ({ ...p, [k]: v }));

  const next = () => {
    const e = validate(step, f);
    setErrors(e);
    if (Object.keys(e).length === 0) setStep((s) => s + 1);
  };
  const sendWhatsApp = () => {
    window.open(whatsappLink(SITE.whatsapp[0]!.intl, summary(f)), "_blank", "noopener");
    setSentVia("whatsapp");
  };
  const sendEmail = () => {
    window.location.href = mailtoLink(`Project enquiry — ${f.business || f.name}`, summary(f));
    setSentVia("email");
  };

  const err = (k: keyof Form) => errors[k];
  const aria = (k: keyof Form) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <section className="container-x grid gap-14 pt-16 pb-28 lg:grid-cols-12">
      <aside className="lg:col-span-4">
        <p className="eyebrow">Start a project</p>
        <h1 className="mt-5 text-5xl font-extrabold leading-[0.98] sm:text-6xl">Let's bring your ideas to life.</h1>
        <p className="mt-6 text-muted-foreground">
          Share a few details and we'll prepare a custom quotation. Prefer to chat? Message us directly.
        </p>
        <ul className="mt-10 space-y-3">
          {SITE.whatsapp.map((w) => (
            <li key={w.intl}>
              <a href={whatsappLink(w.intl)} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 font-semibold transition-colors hover:border-foreground">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-lime text-accent-foreground"><MessageCircle className="h-4 w-4" /></span>
                WhatsApp {w.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 font-semibold break-all transition-colors hover:border-foreground">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-foreground text-background"><Mail className="h-4 w-4" /></span>
              {SITE.email}
            </a>
          </li>
          <li>
            <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 font-semibold transition-colors hover:border-foreground">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background"><Instagram className="h-4 w-4" /></span>
              @{SITE.instagram}
            </a>
          </li>
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">Based in {SITE.location}. Working with clients remotely.</p>
      </aside>

      <div className="lg:col-span-8">
        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10">
          <ol className="mb-10 grid grid-cols-4 gap-2" aria-label="Form progress">
            {STEPS.map((s, i) => (
              <li key={s} aria-current={i === step ? "step" : undefined}>
                <div className={`h-1 rounded-full transition-colors duration-500 ${i <= step ? "bg-lime" : "bg-border"}`} />
                <p className={`mt-2 text-xs font-bold ${i === step ? "text-foreground" : "text-muted-foreground"}`}>
                  <span className="hidden sm:inline">{String(i + 1).padStart(2, "0")} · </span>{s}
                </p>
              </li>
            ))}
          </ol>

          <form onSubmit={(e) => { e.preventDefault(); if (step < 3) next(); }} noValidate className="space-y-6">
            {step === 0 && (
              <div className="grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Full name" error={err("name")}>
                  <input id="name" autoComplete="name" className={inputCls} value={f.name} onChange={(e) => set("name", e.target.value)} {...aria("name")} />
                </Field>
                <Field id="business" label="Business name" optional>
                  <input id="business" autoComplete="organization" className={inputCls} value={f.business} onChange={(e) => set("business", e.target.value)} />
                </Field>
                <Field id="email" label="Email address" error={err("email")}>
                  <input id="email" type="email" autoComplete="email" inputMode="email" className={inputCls} value={f.email} onChange={(e) => set("email", e.target.value)} {...aria("email")} />
                </Field>
                <Field id="phone" label="Phone or WhatsApp number" error={err("phone")}>
                  <input id="phone" type="tel" autoComplete="tel" inputMode="tel" className={inputCls} value={f.phone} onChange={(e) => set("phone", e.target.value)} {...aria("phone")} />
                </Field>
              </div>
            )}

            {step === 1 && (
              <>
                <Chips label="Type of website required" options={TYPES} value={[f.type]} onToggle={(o) => set("type", o)} error={err("type")} />
                <Field id="description" label="Tell us about your business" error={err("description")}>
                  <textarea id="description" rows={4} className={inputCls} value={f.description} onChange={(e) => set("description", e.target.value)} {...aria("description")} />
                </Field>
                <Field id="goals" label="Main goals for the website" error={err("goals")}>
                  <textarea id="goals" rows={3} placeholder="e.g. get more enquiries, sell products online, show my work" className={inputCls} value={f.goals} onChange={(e) => set("goals", e.target.value)} {...aria("goals")} />
                </Field>
              </>
            )}

            {step === 2 && (
              <>
                <Chips
                  multi
                  label="Required pages and features"
                  options={FEATURES}
                  value={f.features}
                  error={err("features")}
                  onToggle={(o) =>
                    set("features", f.features.includes(o) ? f.features.filter((x) => x !== o) : [...f.features, o])
                  }
                />
                <Chips label="Estimated budget (ZAR)" options={BUDGETS} value={[f.budget]} onToggle={(o) => set("budget", o)} error={err("budget")} />
                <Chips label="Preferred timeframe" options={TIMES} value={[f.timeframe]} onToggle={(o) => set("timeframe", o)} error={err("timeframe")} />
                <Field id="references" label="Reference websites you like" optional>
                  <input id="references" className={inputCls} placeholder="Links to sites you admire" value={f.references} onChange={(e) => set("references", e.target.value)} />
                </Field>
                <Field id="additional" label="Additional requirements" optional>
                  <textarea id="additional" rows={3} className={inputCls} value={f.additional} onChange={(e) => set("additional", e.target.value)} />
                </Field>
              </>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold">Review your enquiry</h2>
                <dl className="mt-6 divide-y divide-border rounded-xl border border-border bg-card">
                  {([
                    ["Name", f.name], ["Business", f.business || "—"], ["Email", f.email], ["Phone / WhatsApp", f.phone],
                    ["Website type", f.type], ["About the business", f.description], ["Main goals", f.goals],
                    ["Pages & features", f.features.join(", ")], ["Budget", f.budget], ["Timeframe", f.timeframe],
                    ["References", f.references || "—"], ["Additional", f.additional || "—"],
                  ] as const).map(([k, v]) => (
                    <div key={k} className="grid gap-1 px-5 py-3 sm:grid-cols-3">
                      <dt className="text-sm font-bold">{k}</dt>
                      <dd className="text-sm break-words text-muted-foreground sm:col-span-2">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-sm text-muted-foreground">
                  Your enquiry is sent through WhatsApp (or your email app) so it reaches us directly. It is only delivered
                  once you press send there.
                </p>
                {sentVia && (
                  <div role="status" className="mt-6 rounded-xl border border-lime bg-card p-5 text-sm">
                    <p className="font-bold">Almost done — your enquiry is ready in {sentVia === "whatsapp" ? "WhatsApp" : "your email app"}.</p>
                    <p className="mt-1 text-muted-foreground">
                      Press send there to deliver it. If nothing opened, use the other option below or message us on WhatsApp {SITE.whatsapp[0]!.label}.
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-between">
              {step > 0 ? (
                <button type="button" className={btnOutline} onClick={() => { setErrors({}); setStep((s) => s - 1); }}>
                  Back
                </button>
              ) : <span />}
              {step < 3 ? (
                <button type="submit" className={btnLime}>Continue</button>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button type="button" className={btnOutline} onClick={sendEmail}>
                    <Mail className="h-4 w-4" /> Send by email
                  </button>
                  <button type="button" className={btnLime} onClick={sendWhatsApp}>
                    <MessageCircle className="h-4 w-4" /> Send My Project Enquiry
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

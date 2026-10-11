import { describe, expect, it } from "vitest";
import { SITE, whatsappLink, DEFAULT_WA_MESSAGE } from "@/lib/site";

describe("WhatsApp contact", () => {
  it("uses both international numbers", () => {
    expect(SITE.whatsapp.map((w) => w.intl)).toEqual(["27686917586", "27837719808"]);
  });
  it("pre-fills the quotation message", () => {
    const url = whatsappLink("27686917586");
    expect(url.startsWith("https://wa.me/27686917586?text=")).toBe(true);
    expect(decodeURIComponent(url.split("text=")[1])).toBe(DEFAULT_WA_MESSAGE);
  });
});

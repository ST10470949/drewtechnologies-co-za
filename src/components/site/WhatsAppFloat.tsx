import { MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(SITE.whatsapp[0].intl)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Drew Technologies on WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-lime p-3.5 text-accent-foreground shadow-soft transition-all duration-300 hover:-translate-y-1 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-500 group-hover:max-w-40 sm:inline">
        Chat on WhatsApp
      </span>
    </a>
  );
}

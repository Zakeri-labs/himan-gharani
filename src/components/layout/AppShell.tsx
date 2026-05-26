import { type ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useI18n, whatsappLink } from "@/lib/i18n";

export function AppShell({ children }: { children: ReactNode }) {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label={t("cta.chatWhatsapp")}
        className="fixed bottom-6 right-6 z-50 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-18px_rgba(37,211,102,0.9)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <span className="sr-only">{t("cta.chatWhatsapp")}</span>
        <WhatsAppIcon className="size-7 fill-current" />
      </a>
    </>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.35-.8-.71-1.34-1.58-1.49-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.48-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.33.97 2.62 1.11 2.8.14.18 1.91 2.91 4.63 4.08.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.82-1.28.23-.63.23-1.16.16-1.28-.07-.11-.25-.18-.52-.32Z" />
      <path d="M16.02 3.2c-6.94 0-12.58 5.64-12.58 12.58 0 2.22.58 4.39 1.69 6.3L3.2 28.8l6.89-1.81a12.56 12.56 0 0 0 5.93 1.49h.01c6.94 0 12.58-5.64 12.58-12.58S22.97 3.2 16.02 3.2Zm0 22.97h-.01c-1.86 0-3.68-.5-5.27-1.44l-.38-.23-4.09 1.07 1.09-3.99-.25-.41a10.26 10.26 0 0 1-1.58-5.47c0-5.66 4.61-10.27 10.29-10.27 2.74 0 5.31 1.06 7.24 3 1.93 1.93 2.99 4.51 2.99 7.25 0 5.67-4.61 10.28-10.28 10.28Z" />
    </svg>
  );
}

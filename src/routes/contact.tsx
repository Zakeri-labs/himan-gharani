import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, MapPin, Mail } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Reveal, SectionLabel } from "@/components/shared/Reveal";
import { ContactSection } from "@/components/home/ContactSection";
import { useI18n, whatsappLink } from "@/lib/i18n";
import consultant from "@/assets/consultant.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Himan Gharani" }, { name: "description", content: "Get in touch with Himan Gharani — Dubai real estate advisory." }] }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <AppShell>
      <section className="pt-32 pb-24 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Side: Header & Form */}
            <div className="space-y-12">
              <Reveal className="space-y-6">
                <SectionLabel>{t("contact.eyebrow")}</SectionLabel>
                <h1 className="font-display text-5xl sm:text-7xl font-light leading-[1.02]">{t("contact.page.title")}</h1>
                <p className="text-lg text-muted-foreground max-w-xl">{t("contact.page.desc")}</p>
              </Reveal>
              
              <Reveal delay={0.1}>
                <div className="glass p-8 sm:p-10 rounded-[2.5rem] border-border/50">
                  <ContactSection isInline={true} />
                </div>
              </Reveal>
            </div>

            {/* Right Side: Visual & Contact Info */}
            <div className="relative">
              <Reveal delay={0.2}>
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl">
                  <img src={consultant} alt="Himan Gharani" className="size-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute bottom-8 left-8 right-8 glass-dark p-6 rounded-2xl border-white/10">
                    <div className="space-y-4">
                      <div>
                        <p className="font-display text-2xl text-white">Himan Gharani</p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Senior Consultant · Dubai</p>
                      </div>
                      <div className="pt-4 border-t border-white/10 space-y-3 text-sm text-white/80">
                        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                          <MessageCircle className="size-4 text-gold" /> 
                          +971 56 243 0180
                        </a>
                        <a href="mailto:himan@gharani.ae" className="flex items-center gap-3 hover:text-gold transition-colors">
                          <Mail className="size-4 text-gold" /> 
                          himan@gharani.ae
                        </a>
                        <p className="flex items-center gap-3">
                          <MapPin className="size-4 text-gold" /> 
                          Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 size-64 bg-gold/5 blur-[100px] rounded-full -z-10" />
              <div className="absolute -bottom-12 -left-12 size-64 bg-gold/5 blur-[100px] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal delay={0.3}>
            <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-border shadow-lg">
              <iframe title="map" src="https://www.google.com/maps?q=Downtown+Dubai&output=embed" className="size-full grayscale contrast-125" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </AppShell>
  );
}
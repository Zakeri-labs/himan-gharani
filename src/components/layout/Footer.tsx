import { Link } from "@tanstack/react-router";
import { MessageCircle, Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useI18n, whatsappLink, WHATSAPP_NUMBER } from "@/lib/i18n";
import { Reveal } from "@/components/shared/Reveal";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-1 space-y-8">
            <Reveal>
              <Link to="/" className="group flex items-center gap-2">
                <span className="font-display text-2xl tracking-tight">Himan<span className="text-gold">.</span></span>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {t("footer.tagline")}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: MessageCircle, href: whatsappLink() },
                  { icon: Mail, href: "mailto:hello@himangharani.com" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="size-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-all"
                  >
                    <social.icon className="size-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-1">
            <Reveal delay={0.3}>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">{t("footer.quickLinks")}</h4>
              <nav className="flex flex-col gap-4">
                {[
                  { to: "/", label: t("nav.home") },
                  { to: "/projects", label: t("nav.projects") },
                  { to: "/blog", label: t("nav.blog") },
                  { to: "/contact", label: t("nav.contact") },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                ))}
              </nav>
            </Reveal>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <Reveal delay={0.4}>
              <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-8">{t("footer.contact")}</h4>
              <div className="grid sm:grid-cols-2 gap-8">
                <a href={`tel:${WHATSAPP_NUMBER}`} className="group space-y-3">
                  <div className="flex items-center gap-3 text-gold">
                    <Phone className="size-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Call</span>
                  </div>
                  <p className="text-sm font-medium group-hover:text-gold transition-colors">+{WHATSAPP_NUMBER}</p>
                </a>
                <a href={whatsappLink()} className="group space-y-3">
                  <div className="flex items-center gap-3 text-gold">
                    <MessageCircle className="size-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">WhatsApp</span>
                  </div>
                  <p className="text-sm font-medium group-hover:text-gold transition-colors">Chat directly</p>
                </a>
                <div className="group space-y-3 sm:col-span-2">
                  <div className="flex items-center gap-3 text-gold">
                    <MapPin className="size-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Location</span>
                  </div>
                  <p className="text-sm font-medium">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.5}>
          <div className="pt-12 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              © {year} Himan Gharani. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-8">
              <Link to="/" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="/" className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
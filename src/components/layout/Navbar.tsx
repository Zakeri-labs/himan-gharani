import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, Menu, X, Globe } from "lucide-react";
import { useI18n, type Locale, whatsappLink } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fa", label: "FA" },
  { code: "ku", label: "KU" },
];

export function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isHome = path === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/blog", label: t("nav.blog") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
            scrolled ? "glass shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]" : "bg-transparent"
          )}
        >
          <Link to="/" className={cn("group flex items-center gap-2 transition-colors", isTransparent ? "text-white" : "text-foreground")}>
            <span className="font-display text-xl tracking-tight">Himan<span className="text-gold">.</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={cn(
                  "text-sm transition-colors relative",
                  isTransparent 
                    ? "text-white/70 hover:text-white" 
                    : "text-foreground/70 hover:text-foreground"
                )}
                activeProps={{ className: isTransparent ? "text-white" : "text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className={cn(
                  "hidden sm:flex items-center gap-1.5 text-xs px-3 py-2 rounded-full transition-colors",
                  isTransparent 
                    ? "text-white/70 hover:text-white" 
                    : "text-foreground/70 hover:text-foreground"
                )}
                aria-label="Switch language"
              >
                <Globe className="size-3.5" />
                {locales.find((l) => l.code === locale)?.label}
              </button>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute end-0 mt-2 glass rounded-2xl py-1 min-w-[100px] shadow-lg"
                >
                  {locales.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLocale(l.code);
                        setLangOpen(false);
                      }}
                      className={cn(
                        "w-full text-start px-4 py-2 text-xs hover:bg-foreground/5 transition-colors",
                        locale === l.code && "text-gold"
                      )}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full transition-all hover:scale-[1.02]",
                isTransparent 
                  ? "bg-white text-black hover:bg-white/90" 
                  : "bg-foreground text-background hover:bg-foreground/90"
              )}
            >
              <MessageCircle className="size-3.5" />
              {t("cta.whatsapp")}
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "md:hidden p-2 transition-colors",
                isTransparent ? "text-white" : "text-foreground"
              )}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass rounded-3xl p-6 flex flex-col gap-4"
          >
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="text-base">
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-foreground/10">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLocale(l.code)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs border border-foreground/10",
                    locale === l.code && "bg-foreground text-background"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background text-sm font-medium px-4 py-3 rounded-full"
            >
              <MessageCircle className="size-4" />
              {t("cta.whatsapp")}
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
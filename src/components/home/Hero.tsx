import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ArrowDown } from "lucide-react";
import { useI18n, whatsappLink } from "@/lib/i18n";
export function Hero() {
  const { t, locale } = useI18n();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img 
          src="/images/hero.webp" 
          alt="Himan Gharani Real Estate Dubai" 
          className={`size-full object-cover transition-transform duration-700 hidden sm:block ${locale !== "en" ? "-scale-x-100" : ""}`} 
          width={1920} 
          height={1280} 
        />
        <img 
          src="/images/hero-mob.webp" 
          alt="Himan Gharani Real Estate Dubai" 
          className={`size-full object-cover transition-transform duration-700 sm:hidden ${locale !== "en" ? "-scale-x-100" : ""}`} 
          width={800} 
          height={1200} 
        />
      </motion.div>

      <motion.div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-32 pb-8 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-14">
        <div className="flex h-full min-h-full w-full flex-1 flex-col">
          {/* Outside the box: Large Badge/Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.45 }}
            className="mb-6 sm:mb-8 max-w-5xl"
          >
            <h2 className={`hero-title hero-title-rtl text-white text-[clamp(2.4rem,8vw,4.5rem)] sm:text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] ${locale === "en" ? "font-light" : "font-bold"}`}>
              {t("hero.badge").split("|").map((part, i) => (
                <span key={i} className="block">
                  {part.trim()}
                </span>
              ))}
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-auto max-w-2xl sm:mt-0"
          >
            <div className="relative isolate overflow-hidden rounded-3xl border border-white/15 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.55)] lg:rounded-[2.5rem]">
              <div className="absolute inset-0 bg-black/18 [backdrop-filter:blur(30px)_saturate(180%)] [-webkit-backdrop-filter:blur(30px)_saturate(180%)]" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/18 via-white/[0.07] to-white/[0.03]" />
              <div className="absolute inset-x-0 top-0 h-px bg-white/30" />

              <div className="relative p-6 sm:p-8 lg:p-10">
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} className={`hero-title hero-title-rtl text-white text-[clamp(1.25rem,2.5vw,2.2rem)] leading-tight tracking-tight drop-shadow-sm ${locale === "en" ? "font-light" : "font-bold"}`}>
                  {t("hero.title")}
                </motion.h1>
                
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="mt-6">
                  <div className="relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/15 bg-white/8 px-6 py-4 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.7)]">
                    <div className="absolute inset-0 rounded-[inherit] bg-black/10 [backdrop-filter:blur(22px)_saturate(170%)] [-webkit-backdrop-filter:blur(22px)_saturate(170%)]" />
                    <div className="absolute inset-x-4 top-0 h-px rounded-full bg-white/25" />
                    <div className="relative flex size-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
                    </div>
                    <p className="relative text-base leading-relaxed text-white sm:text-lg">
                      {t("hero.subtitle")}
                    </p>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} className="mt-8 flex gap-3 flex-nowrap sm:mt-10">
                  <Link to="/projects" className="group inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-3 py-3.5 text-[13px] font-medium whitespace-nowrap text-black transition-all hover:scale-[1.02] hover:bg-white/90 sm:gap-2 sm:px-6 sm:text-sm">
                    {locale === "en" ? t("cta.viewProjects") : t("nav.projects")}
                    <ArrowRight className={`size-4 transition-transform group-hover:translate-x-1 ${locale !== "en" ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
                  </Link>
                  <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full glass px-3 py-3.5 text-[13px] font-medium whitespace-nowrap text-white transition-all hover:bg-white/10 sm:gap-2 sm:px-6 sm:text-sm">
                    <MessageCircle className="size-4" />
                    {t("cta.chatWhatsapp")}
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.4 }} className="absolute bottom-8 end-6 hidden sm:flex items-center gap-3 text-white/60 text-xs uppercase tracking-[0.3em]">
          <span>{t("hero.scroll")}</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown className="size-3" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

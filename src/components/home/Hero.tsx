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
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-6 min-h-screen flex flex-col justify-start pt-32 sm:pt-0 sm:justify-end pb-12 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-end w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl sm:glass-dark p-0 sm:p-12 sm:rounded-[2rem] sm:border-white/10"
          >
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-xs uppercase tracking-[0.4em] text-white/70 mb-6">
              {t("hero.eyebrow")}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }} className="font-display text-white text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] font-light tracking-tight">
              {t("hero.title")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.95 }} className="mt-6 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed">
              {t("hero.subtitle")}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.15 }} className="mt-10 flex flex-wrap gap-3">
              <Link to="/projects" className="group inline-flex items-center gap-2 bg-white text-black px-6 py-3.5 rounded-full text-sm font-medium hover:bg-white/90 transition-all hover:scale-[1.02]">
                {t("cta.viewProjects")}
                <ArrowRight className={`size-4 transition-transform group-hover:translate-x-1 ${locale !== "en" ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass-dark text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
                <MessageCircle className="size-4" />
                {t("cta.chatWhatsapp")}
              </a>
            </motion.div>
          </motion.div>
          
          {/* Empty Right Column */}
          <div className="hidden lg:block" />
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
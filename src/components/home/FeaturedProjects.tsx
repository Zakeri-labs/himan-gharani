import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/shared/Reveal";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";

export function FeaturedProjects() {
  const { t, locale } = useI18n();
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-32">
      {/* Decorative text in background */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 pointer-events-none opacity-[0.02] select-none">
        <span className="font-display text-[20rem] font-bold leading-none">LUXURY</span>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end md:gap-12">
          <Reveal className="space-y-8 max-w-3xl">
            <SectionLabel>{t("projects.eyebrow")}</SectionLabel>
            <h2 className="section-main-title font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              {t("projects.title").split(". ").map((part, i) => (
                <span key={i} className="block">
                  {part}
                  {i === 0 && <span className="text-gold">.</span>}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="shrink-0">
            <Link 
              to="/projects" 
              className="group relative inline-flex items-center gap-4 text-sm font-medium tracking-widest uppercase pb-2 overflow-hidden"
            >
              <span className="relative z-10 transition-colors group-hover:text-gold">{t("projects.viewAll")}</span>
              <ArrowUpRight className="size-5 transition-all group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1" />
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground/20 group-hover:bg-gold transition-colors" />
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-px bg-gold"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Reveal>
        </div>

        <div className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 lg:grid-cols-3 lg:gap-10">
          {projects.map((p, i) => {
            const localized = p[locale];
            return (
              <Reveal key={p.slug} delay={i * 0.1} className="w-[82vw] shrink-0 snap-start sm:w-[26rem] md:w-auto md:shrink">
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="block group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-secondary shadow-2xl transition-all duration-700 group-hover:shadow-gold/10 group-hover:-translate-y-2">
                    <motion.img 
                      src={p.image} 
                      alt={localized.name} 
                      loading="lazy" 
                      width={1280} 
                      height={960} 
                      className="size-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    
                    {/* Sophisticated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-8 left-8">
                      <span className="backdrop-blur-md bg-white/10 text-white text-[10px] uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-white/20">
                        {localized.category}
                      </span>
                    </div>

                    {/* Content Container */}
                    <div className="absolute inset-x-0 bottom-0 p-10 text-white transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                      <div className="space-y-4">
                        <p className="text-xs text-gold uppercase tracking-[0.4em] font-medium">{localized.location}</p>
                        <div className="flex items-end justify-between gap-4">
                          <h3 className={`featured-project-card-title font-display text-3xl sm:text-4xl leading-tight ${locale === "en" ? "font-light" : ""}`}>{localized.name}</h3>
                          <div className="size-12 rounded-full border border-white/30 flex items-center justify-center transition-all group-hover:bg-gold group-hover:border-gold">
                            <ArrowUpRight className="size-5 transition-transform group-hover:scale-110" />
                          </div>
                        </div>
                        
                        {/* Price Reveal on Hover */}
                        <div className="pt-6 border-t border-white/10 flex justify-between items-center overflow-hidden h-0 group-hover:h-12 transition-all duration-500 opacity-0 group-hover:opacity-100">
                          <span className="text-xs text-white/60 uppercase tracking-widest">{t("projects.from")}</span>
                          <span className="font-display text-xl font-light text-gold">{localized.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

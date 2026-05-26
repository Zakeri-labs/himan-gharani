import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/shared/Reveal";
import { useI18n } from "@/lib/i18n";
import { testimonials } from "@/lib/projects";

export function Testimonials() {
  const { t, dir, locale } = useI18n();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dirNum: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 360) + 32;
    el.scrollBy({ left: (dir === "rtl" ? -dirNum : dirNum) * amount, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-16 sm:py-32">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid items-end gap-8 lg:mb-20 lg:grid-cols-12 lg:gap-24">
          <Reveal className="lg:col-span-7 space-y-8">
            <SectionLabel>{t("testimonials.eyebrow")}</SectionLabel>
            <h2 className="section-main-title font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight">
              {t("testimonials.title").split(". ").map((part, i) => (
                <span key={i} className="block">
                  {part}
                  {i === 0 && <span className="text-gold">.</span>}
                </span>
              ))}
            </h2>
          </Reveal>
          
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9 flex items-center justify-between lg:justify-end gap-6">
            <div className="flex gap-4">
              <button 
                onClick={() => scrollBy(-1)} 
                className="group size-14 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500"
                aria-label="Previous"
              >
                <ChevronLeft className="size-5 transition-transform group-hover:-translate-x-1" />
              </button>
              <button 
                onClick={() => scrollBy(1)} 
                className="group size-14 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500"
                aria-label="Next"
              >
                <ChevronRight className="size-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 md:px-[calc((100vw-80rem)/2+1.5rem)] pb-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item, idx) => {
          const localized = item[locale];
          return (
            <Reveal key={idx} delay={idx * 0.1} className="snap-start shrink-0">
              <article
                data-card
                className="w-[80vw] sm:w-[380px] h-full bg-background border border-border/50 rounded-[2.5rem] p-8 lg:p-10 flex flex-col relative group hover:border-gold/20 transition-colors duration-700"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-8 right-8 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity">
                  <Quote className="size-24" />
                </div>
  
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star 
                      key={j} 
                      className={`size-3.5 ${j < item.rating ? "fill-gold text-gold" : "text-muted-foreground/20"}`} 
                    />
                  ))}
                </div>
  
                <blockquote className="text-lg sm:text-xl font-light leading-relaxed flex-1 relative z-10 text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  "{localized.quote}"
                </blockquote>
  
                <div className="mt-10 pt-8 border-t border-border/40 flex items-center gap-4">
                  <div className="size-12 rounded-xl bg-secondary flex items-center justify-center font-display text-lg text-gold">
                    {localized.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium tracking-tight text-base">{localized.name}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-[0.2em]">{localized.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

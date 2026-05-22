import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/shared/Reveal";
import { useI18n } from "@/lib/i18n";
import { articles } from "@/lib/projects";

export function BlogPreview() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 sm:py-32 bg-secondary/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-20 items-end">
          <Reveal className="lg:col-span-8 space-y-8">
            <SectionLabel>{t("blog.eyebrow")}</SectionLabel>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-light tracking-tight">
              {t("blog.title").split(". ").map((part, i) => (
                <span key={i} className="block">
                  {part}
                  {i === 0 && <span className="text-gold">.</span>}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="lg:col-span-4 lg:text-right">
            <Link to="/blog" className="group inline-flex items-center gap-4 text-sm font-medium tracking-widest uppercase pb-2 border-b border-foreground/10 hover:border-gold transition-colors">
              <span className="group-hover:text-gold transition-colors">{t("cta.readMore")}</span>
              <ArrowUpRight className="size-5 group-hover:text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.15}>
              <Link to="/blog/$slug" params={{ slug: a.slug }} className="group block h-full">
                <article className="h-full bg-white border border-border/40 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5 hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary transition-all duration-700">
                    <img 
                      src={a.image} 
                      alt={a.title} 
                      loading="lazy" 
                      className="size-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-medium text-muted-foreground">
                      <span className="text-gold">{a.category}</span>
                      <span className="size-1 rounded-full bg-border" />
                      <span>{a.date}</span>
                    </div>
                    
                    <h3 className="font-display text-2xl sm:text-3xl font-light leading-snug group-hover:text-gold transition-colors duration-500">
                      {a.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed line-clamp-2 font-light text-sm">
                      {a.excerpt}
                    </p>
                    
                    <div className="pt-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span>{t("cta.readMore")}</span>
                      <ArrowUpRight className="size-3.5" />
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
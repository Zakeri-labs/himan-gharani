import { Reveal, SectionLabel } from "@/components/shared/Reveal";
import { Counter } from "@/components/shared/Counter";
import { Trophy, TrendingUp, Briefcase, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";

export function Achievements() {
  const { t } = useI18n();
  
  const stats = [
    { 
      icon: Trophy, 
      value: 2, 
      suffix: "×", 
      label: t("achievements.stat1"),
    },
    { 
      icon: TrendingUp, 
      value: 15, 
      suffix: "M+", 
      label: t("achievements.stat2"),
    },
    { 
      icon: Briefcase, 
      value: 6, 
      suffix: "+", 
      label: t("achievements.stat3"),
    },
  ];

  return (
    <section id="achievements" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[10%] -left-[10%] size-[500px] bg-gold/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-[10%] -right-[10%] size-[600px] bg-gold/5 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-secondary/20 blur-[180px] rounded-full"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Content & Stats */}
          <div className="order-2 lg:order-1">
            <Reveal className="space-y-8">
              <SectionLabel>{t("achievements.eyebrow")}</SectionLabel>
              <h2 className="font-display text-5xl sm:text-6xl font-light tracking-tight leading-[1.1]">
                {t("achievements.title").split(". ")[0]}<span className="text-gold">.</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
                {t("achievements.desc")}
              </p>

              <div className="grid sm:grid-cols-3 gap-8 pt-8">
                {stats.map((s, i) => (
                  <div key={i} className="space-y-3 group">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl font-light tracking-tighter group-hover:text-gold transition-colors duration-500">
                        <Counter to={s.value} />
                      </span>
                      <span className="font-display text-xl font-light text-gold">{s.suffix}</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground leading-relaxed">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-10 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                <div className="size-10 rounded-full border border-gold/20 flex items-center justify-center">
                  <CheckCircle2 className="size-4" />
                </div>
                <span>Verified industry record</span>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Image with decorative elements */}
          <div className="order-1 lg:order-2 relative">
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-gold/10">
                {/* Decorative background for the image */}
                <div className="absolute inset-0 bg-gold/10 mix-blend-multiply transition-colors duration-700 group-hover:bg-transparent" />
                <img 
                  src="/images/danub.webp" 
                  alt="Danube Properties Award" 
                  className="size-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Glass overlay badge on image */}
                <div className="absolute bottom-8 left-8 right-8 glass-dark p-6 rounded-2xl border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full bg-gold/20 flex items-center justify-center">
                      <Trophy className="size-6 text-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">Recognition</p>
                      <p className="text-sm font-medium text-white">Top Seller Award Winner</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -top-12 -right-12 size-64 bg-gold/5 blur-[100px] rounded-full -z-10" />
              <div className="absolute -bottom-12 -left-12 size-64 bg-gold/5 blur-[100px] rounded-full -z-10" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

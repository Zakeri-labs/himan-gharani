import { Reveal } from "@/components/shared/Reveal";
import { Counter } from "@/components/shared/Counter";
import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, ShieldCheck, Sparkles, Trophy, TrendingUp } from "lucide-react";

export function Achievements() {
  const { t, locale } = useI18n();

  const stats = [
    {
      icon: Trophy,
      value: 2,
      suffix: "",
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
      suffix: "",
      label: t("achievements.stat3"),
    },
  ];

  return (
    <section id="achievements" className="relative overflow-hidden bg-white py-16 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-gold/8 to-transparent" />
        <div className="absolute -top-24 end-0 size-80 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute bottom-0 start-0 size-72 rounded-full bg-secondary/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal className="order-2 space-y-8 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/15 bg-gold/6 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              <Sparkles className="size-3.5" />
              {t("achievements.eyebrow")}
            </div>

            <div className="space-y-5">
              <h2 className="text-4xl leading-tight text-foreground sm:text-6xl">
                {t("achievements.title")}
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                {t("achievements.desc")}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={0.08 * index}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="group rounded-[1.25rem] border border-black/6 bg-white p-3 sm:rounded-[1.75rem] sm:p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.2)] transition-colors hover:border-gold/25"
                  >
                    <div className="mb-4 flex size-9 items-center justify-center rounded-xl bg-gold/10 text-gold sm:mb-10 sm:size-12 sm:rounded-2xl">
                      <stat.icon className="size-4 sm:size-5" />
                    </div>
                    <div className="flex items-end gap-0.5 sm:gap-1">
                      <span className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
                        <Counter to={stat.value} />
                      </span>
                      <span className="pb-0.5 text-xs font-semibold text-gold sm:pb-1 sm:text-lg">{stat.suffix}</span>
                    </div>
                    <p className="mt-2 text-[11px] leading-4 text-muted-foreground sm:mt-3 sm:text-sm sm:leading-6">{stat.label}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>

            <motion.div
              whileHover={{ x: locale === "en" ? 4 : -4 }}
              className="inline-flex w-fit items-center gap-3 rounded-full border border-black/8 bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground shadow-[0_16px_40px_-30px_rgba(15,23,42,0.25)]"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-gold/12 text-gold">
                <ShieldCheck className="size-4" />
              </span>
              <span>{t("achievements.verified")}</span>
              <ArrowRight className={`size-4 text-gold ${locale === "en" ? "" : "rotate-180"}`} />
            </motion.div>
          </Reveal>

          <Reveal delay={0.15} className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-[36rem]">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-gold/12 via-transparent to-gold/5 blur-2xl" />

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_40px_90px_-45px_rgba(15,23,42,0.3)]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/danub.webp"
                    alt="Danube Properties Award"
                    className="size-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent" />

                <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3">
                  <div className="rounded-full border border-white/20 bg-black/35 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white backdrop-blur-md">
                    Danube Properties
                  </div>
                  <div className="rounded-full border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground shadow-sm">
                    Top Seller
                  </div>
                </div>

                <div className="absolute inset-x-5 bottom-5 rounded-[1.75rem] border border-white/20 bg-white/92 p-5 backdrop-blur-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
                        Premium Performance
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {t("achievements.desc")}
                      </p>
                    </div>
                    <div className="hidden size-12 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold sm:flex">
                      <Trophy className="size-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

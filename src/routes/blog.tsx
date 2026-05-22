import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Reveal, SectionLabel } from "@/components/shared/Reveal";
import { useI18n } from "@/lib/i18n";
import { articles } from "@/lib/projects";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Journal — Himan Gharani" }, { name: "description", content: "Notes from the Dubai real estate market — strategy, residency, and investment insight." }] }),
  component: BlogPage,
});

function BlogPage() {
  const { t } = useI18n();

  const location = useLocation();

  if (location.pathname !== "/blog") return <Outlet />;

  return (
    <AppShell>
      <section className="pt-40 pb-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="space-y-6 max-w-3xl">
            <SectionLabel>{t("blog.eyebrow")}</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light leading-[1.02]">{t("blog.title")}</h1>
          </Reveal>
        </div>
      </section>
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <Link to="/blog/$slug" params={{ slug: a.slug }} className="block group">
                <div className="aspect-[5/4] overflow-hidden rounded-2xl bg-muted mb-6">
                  <img src={a.image} alt={a.title} loading="lazy" className="size-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  <span className="text-gold">{a.category}</span><span>·</span><span>{a.date}</span>
                </div>
                <h3 className="font-display text-2xl leading-snug font-light group-hover:text-gold transition-colors">{a.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{a.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-xs uppercase tracking-[0.2em]">
                  {t("cta.readMore")} <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
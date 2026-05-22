import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Reveal, SectionLabel } from "@/components/shared/Reveal";
import { useI18n } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Himan Gharani" }, { name: "description", content: "Curated Dubai real estate projects: waterfront residences, downtown branded towers, and luxury marina addresses." }] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useI18n();
  const location = useLocation();
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [cat, setCat] = useState("All");

  if (location.pathname !== "/projects") return <Outlet />;

  const filtered = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  return (
    <AppShell>
      <section className="pt-40 pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="space-y-6 max-w-3xl">
            <SectionLabel>{t("projects.eyebrow")}</SectionLabel>
            <h1 className="font-display text-5xl sm:text-7xl font-light leading-[1.02]">{t("projects.title")}</h1>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] border transition-all ${cat === c ? "bg-foreground text-background border-foreground" : "border-foreground/15 hover:border-foreground/40"}`}>{c}</button>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="block group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                  <motion.img src={p.image} alt={p.name} loading="lazy" className="size-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-xs text-white/70 uppercase tracking-[0.2em] mb-2">{p.location}</p>
                    <div className="flex items-end justify-between gap-4">
                      <h3 className="font-display text-2xl font-light">{p.name}</h3>
                      <ArrowUpRight className="size-5 opacity-70 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
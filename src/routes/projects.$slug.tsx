import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MapPin, MessageCircle, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Reveal, SectionLabel } from "@/components/shared/Reveal";
import { useI18n, whatsappLink } from "@/lib/i18n";
import { projects, type Project } from "@/lib/projects";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Project"} — Himan Gharani` },
      { name: "description", content: loaderData?.tagline ?? "Dubai luxury real estate project." },
      { property: "og:image", content: loaderData?.image },
    ],
  }),
  component: ProjectDetail,
  errorComponent: DetailError,
  notFoundComponent: () => <AppShell><div className="pt-40 text-center">Project not found</div></AppShell>,
});

function DetailError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <AppShell>
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-4xl font-light">Project page didn't load</h1>
        <p className="mt-4 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-8 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
        >
          Try again
        </button>
      </div>
    </AppShell>
  );
}

function ProjectDetail() {
  const p = Route.useLoaderData() as Project;
  const { t, locale } = useI18n();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const localized = p[locale];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null || !p.gallery) return;
    setSelectedIndex((selectedIndex + 1) % p.gallery.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null || !p.gallery) return;
    setSelectedIndex((selectedIndex - 1 + p.gallery.length) % p.gallery.length);
  };

  return (
    <AppShell>
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <img src={p.image} alt={localized.name} className="size-full object-cover" width={1280} height={960} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12">
          <div className="mx-auto max-w-7xl text-white">
            <Link to="/projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white mb-6">
              <ArrowLeft className="size-3.5" /> Projects
            </Link>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-3">{localized.category} · {localized.developer}</p>
            <h1 className={`project-detail-title-light font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] ${locale === "en" ? "font-light" : ""}`}>{localized.name}</h1>
            <div className="mt-6 flex flex-wrap gap-6 items-center text-sm">
              <span className="flex items-center gap-2"><MapPin className="size-4" />{localized.location}</span>
              <span className="text-white/70">{t("projects.from")} <span className="text-white font-medium">{localized.price}</span></span>
            </div>
          </div>
        </div>
      </section>

      {p.gallery && p.gallery.length > 0 && (
        <>
          <section className="pt-20 pb-10">
            <div className="mx-auto max-w-7xl px-6">
              <Reveal className="mb-10 space-y-6">
                <SectionLabel>{t("project.gallery")}</SectionLabel>
              </Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {p.gallery.map((img, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div 
                      onClick={() => setSelectedIndex(i)}
                      className="aspect-[4/3] overflow-hidden rounded-2xl border border-border group cursor-zoom-in"
                    >
                      <img
                        src={img}
                        alt={`${localized.name} - Gallery ${i + 1}`}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
            <DialogContent className="max-w-none w-screen h-screen p-0 border-none bg-black/95 shadow-none flex items-center justify-center z-[100] outline-none">
              <VisuallyHidden>
                <DialogTitle>{localized.name} - Gallery</DialogTitle>
              </VisuallyHidden>
              
              <button 
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 z-[110] size-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer outline-none border-none"
              >
                <X className="size-6" />
              </button>

              <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-24 py-12">
                <AnimatePresence mode="wait" initial={false}>
                  {selectedIndex !== null && (
                    <motion.div
                      key={selectedIndex}
                      initial={{ opacity: 0, scale: 0.9, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, x: -20 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      <img 
                        src={p.gallery[selectedIndex]} 
                        alt={`${localized.name} - Gallery ${selectedIndex + 1}`} 
                        className="max-h-full max-w-full object-contain shadow-2xl select-none" 
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {p.gallery.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 z-[110] size-14 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/15 transition-all cursor-pointer outline-none border-none group"
                    >
                      <ChevronLeft className="size-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 z-[110] size-14 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/15 transition-all cursor-pointer outline-none border-none group"
                    >
                      <ChevronRight className="size-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </>
                )}
              </div>

              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-xs font-light tracking-[0.3em] uppercase select-none">
                {selectedIndex !== null && (selectedIndex + 1)} <span className="mx-2 text-white/20">/</span> {p.gallery.length}
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7 space-y-6">
            <SectionLabel>{t("project.overview")}</SectionLabel>
            <p className={`project-detail-title-light font-display text-3xl sm:text-4xl leading-snug ${locale === "en" ? "font-light" : ""}`}>{localized.tagline}</p>
            <p className="text-muted-foreground leading-relaxed text-lg">{localized.overview}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <div className="glass rounded-3xl p-8 sticky top-28">
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">{t("project.payment")}</h3>
              <div className="space-y-4">
                {localized.payment.map((s) => (
                  <div key={s.stage} className="flex justify-between items-baseline border-b border-border/50 pb-3">
                    <span className="text-sm">{s.stage}</span>
                    <span className="font-display text-2xl text-gold">{s.percent}</span>
                  </div>
                ))}
              </div>
              <a href={whatsappLink(`Hello Himan, I'm interested in ${localized.name}.`)} target="_blank" rel="noreferrer" className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium hover:scale-[1.02] transition-transform">
                <MessageCircle className="size-4" /> {t("project.enquire")}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 space-y-6">
            <SectionLabel>{t("project.amenities")}</SectionLabel>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {localized.amenities.map((a, i) => (
              <Reveal key={a} delay={i * 0.05}>
                <div className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5">
                  <Check className="size-4 text-gold" />
                  <span className="text-sm">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 space-y-6">
            <SectionLabel>{t("project.location")}</SectionLabel>
            <h2 className={`project-detail-title-light font-display text-4xl sm:text-5xl ${locale === "en" ? "font-light" : ""}`}>{localized.location}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-[21/9] rounded-3xl overflow-hidden border border-border">
              <iframe title="map" src={`https://www.google.com/maps?q=${encodeURIComponent(localized.location + ", Dubai")}&output=embed`} className="size-full" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </AppShell>
  );
}

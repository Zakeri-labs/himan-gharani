import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Reveal } from "@/components/shared/Reveal";
import { useI18n } from "@/lib/i18n";
import { articles } from "@/lib/projects";

type Article = (typeof articles)[number];

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const a = articles.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Article"} — Himan Gharani` },
      { name: "description", content: loaderData?.excerpt ?? "" },
      { property: "og:image", content: loaderData?.image },
    ],
  }),
  component: ArticlePage,
  errorComponent: ArticleError,
  notFoundComponent: () => <AppShell><div className="pt-40 text-center">Article not found</div></AppShell>,
});

function ArticleError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  return (
    <AppShell>
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-4xl font-light">Article page didn't load</h1>
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

function ArticlePage() {
  const a = Route.useLoaderData() as Article;
  const { t } = useI18n();
  const related = articles.filter((x) => x.slug !== a.slug).slice(0, 2);
  return (
    <AppShell>
      <article className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="space-y-6">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-3.5" /> {t("article.back")}
            </Link>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="text-gold">{a.category}</span><span>·</span><span>{a.date}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-light leading-[1.05]">{a.title}</h1>
            <p className="text-lg text-muted-foreground">{a.excerpt}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden">
              <img src={a.image} alt={a.title} className="size-full object-cover" />
            </div>
          </div>
        </Reveal>
        <div className="mx-auto max-w-3xl px-6 mt-16">
          <Reveal>
            <p className="font-display text-xl sm:text-2xl leading-relaxed font-light text-foreground/85">{a.content}</p>
          </Reveal>
        </div>
      </article>
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">{t("article.related")}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {related.map((r) => (
              <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="group block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                  <img src={r.image} alt={r.title} className="size-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <h3 className="font-display text-2xl font-light group-hover:text-gold transition-colors">{r.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
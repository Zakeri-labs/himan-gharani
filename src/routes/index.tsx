import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/layout/AppShell";
import { Hero } from "@/components/home/Hero";
import { Achievements } from "@/components/home/Achievements";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ContactSection } from "@/components/home/ContactSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { Testimonials } from "@/components/home/Testimonials";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <AppShell>
      <Hero />
      <Achievements />
      <FeaturedProjects />
      <Testimonials />
      <BlogPreview />
      <ContactSection />
    </AppShell>
  );
}

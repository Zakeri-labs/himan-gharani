import { useState } from "react";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/shared/Reveal";
import { useI18n, whatsappLink } from "@/lib/i18n";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().min(5).max(30),
  message: z.string().trim().max(1000).optional(),
});

export interface ContactSectionProps {
  isInline?: boolean;
}

export function ContactSection({ isInline = false }: ContactSectionProps) {
  const { t } = useI18n();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError("Please fill in your name and phone.");
      return;
    }
    setError(null);
    const text = `Hello Himan,\n\nName: ${data.name}\nPhone: ${data.phone}${data.message ? `\n\n${data.message}` : ""}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  const formContent = (
    <form onSubmit={onSubmit} className={cn(
      "relative rounded-[2.5rem] space-y-10",
      isInline ? "" : "glass-dark p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl"
    )}>
      <div className="grid sm:grid-cols-2 gap-10">
        <Field name="name" label={t("form.name")} required dark={!isInline} />
        <Field name="phone" label={t("form.phone")} type="tel" required dark={!isInline} />
      </div>
      
      <div className="space-y-4">
        <label className={cn(
          "block text-xs uppercase tracking-[0.3em] font-medium",
          isInline ? "text-muted-foreground" : "text-background/40"
        )}>
          {t("form.message")}
        </label>
        <textarea 
          name="message" 
          rows={4} 
          maxLength={1000} 
          placeholder="How can I help you?"
          className={cn(
            "w-full bg-transparent border-b py-4 text-lg outline-none focus:border-gold transition-colors resize-none",
            isInline 
              ? "border-border text-foreground placeholder:text-muted-foreground/30" 
              : "border-white/10 text-background placeholder:text-white/10"
          )} 
        />
      </div>

      {error && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-sm text-destructive"
        >
          {error}
        </motion.p>
      )}

      <button 
        type="submit" 
        className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-gold text-foreground px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden"
      >
        <span className="relative z-10">{t("cta.chatWhatsapp")}</span>
        <MessageCircle className="relative z-10 size-5" />
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
      </button>
    </form>
  );

  if (isInline) return formContent;

  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-16 sm:py-32 text-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4" />
      <div className="absolute -top-32 -end-32 size-[600px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="absolute -bottom-32 -start-32 size-[600px] rounded-full bg-gold/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <Reveal className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <SectionLabel>{t("contact.eyebrow")}</SectionLabel>
              <h2 className="section-main-title font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-white">
                {t("contact.title").split(", ").map((part, i) => (
                  <span key={i} className="block">
                    {part}
                    {i === 0 && <span className="text-gold">.</span>}
                  </span>
                ))}
              </h2>
              <p className="text-background/60 leading-relaxed text-xl font-light max-w-md">
                {t("contact.desc")}
              </p>
            </div>

            <div className="space-y-8 pt-6">
              <div className="flex items-center gap-6 group">
                <div className="size-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:bg-gold/10 group-hover:border-gold/20">
                  <MessageCircle className="size-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-background/40 mb-1">Direct Line</p>
                  <a href={whatsappLink()} target="_blank" rel="noreferrer" className="text-xl font-medium hover:text-gold transition-colors">
                    +971562430180
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-7">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-white/5 rounded-[3rem] pointer-events-none" />
              {formContent}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required, dark = true }: { name: string; label: string; type?: string; required?: boolean; dark?: boolean }) {
  return (
    <div className="space-y-4">
      <label className={cn(
        "block text-xs uppercase tracking-[0.3em] font-medium",
        dark ? "text-background/40" : "text-muted-foreground"
      )}>
        {label}
      </label>
      <input 
        name={name} 
        type={type} 
        required={required} 
        maxLength={255} 
        placeholder={`Enter your ${label.toLowerCase()}...`}
        className={cn(
          "w-full bg-transparent border-b py-4 text-lg outline-none focus:border-gold transition-colors",
          dark 
            ? "border-white/10 text-background placeholder:text-white/10" 
            : "border-border text-foreground placeholder:text-muted-foreground/30"
        )} 
      />
    </div>
  );
}

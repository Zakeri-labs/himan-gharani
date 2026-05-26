import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "en" | "fa" | "ku";

type Dict = Record<string, string>;

const dictionaries: Record<Locale, Dict> = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.blog": "Journal",
    "nav.contact": "Contact",
    "cta.whatsapp": "WhatsApp",
    "cta.viewProjects": "View Projects",
    "cta.chatWhatsapp": "Chat on WhatsApp",
    "cta.readMore": "Read More",
    "cta.explore": "Explore",
    "hero.eyebrow": "Dubai · Real Estate Advisory",
    "hero.badge": "Real Estate Consultant | Kurdish-speaking in Dubai",
    "hero.title": "Himan Gharani",
    "hero.subtitle": "The first Kurdish-speaking real estate & investment consultant in Dubai.",
    "hero.scroll": "Scroll",
    "achievements.eyebrow": "Track Record",
    "achievements.title": "Achievements earned",
    "achievements.desc": "A distinguished sales record built through trusted advisory, strategic negotiation, and strong results across Dubai's premium property market.",
    "achievements.stat1": "Top Seller awards at Danube",
    "achievements.stat2": "AED in personally closed sales",
    "achievements.stat3": "Years advising in Dubai property",
    "achievements.verified": "Verified Industry Record",
    "projects.eyebrow": "Featured Portfolio",
    "projects.title": "A curated selection of Dubai's finest addresses.",
    "projects.viewAll": "View all projects",
    "projects.from": "Starting from",
    "contact.eyebrow": "Let's talk",
    "contact.title": "Your next investment, one conversation away.",
    "contact.desc": "Share a few details and I'll personally reach out on WhatsApp within the hour.",
    "form.name": "Full name",
    "form.phone": "Phone number",
    "form.project": "Project of interest",
    "form.message": "Message",
    "blog.eyebrow": "Journal",
    "blog.title": "Notes from the Dubai market.",
    "testimonials.eyebrow": "Clients",
    "testimonials.title": "Trusted by investors across three continents.",
    "footer.tagline": "Discreet, data-driven real estate advisory in Dubai.",
    "footer.quickLinks": "Navigate",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "project.overview": "Overview",
    "project.amenities": "Amenities",
    "project.payment": "Payment Plan",
    "project.location": "Location",
    "project.gallery": "Gallery",
    "project.enquire": "Enquire on WhatsApp",
    "article.back": "Back to Journal",
    "article.related": "Related reading",
    "contact.page.title": "Get in touch",
    "contact.page.desc": "Whether you're investing, relocating, or simply exploring — start the conversation.",
  },
  fa: {
    "nav.home": "خانه",
    "nav.projects": "پروژه‌ها",
    "nav.blog": "مجله",
    "nav.contact": "تماس",
    "cta.whatsapp": "واتس‌اپ",
    "cta.viewProjects": "مشاهده پروژه‌ها",
    "cta.chatWhatsapp": "گفتگو در واتس‌اپ",
    "cta.readMore": "ادامه مطلب",
    "cta.explore": "مشاهده",
    "hero.eyebrow": "دبی · مشاوره املاک",
    "hero.badge": "مشاور املاک | کورد زبان در دبی",
    "hero.title": "هیمن قرنی",
    "hero.subtitle": "اولین مشاور کوردزبان املاک و سرمایه‌گذاری در دبی",
    "hero.scroll": "اسکرول",
    "achievements.eyebrow": "افتخارات",
    "achievements.title": "افتخارات کسب شده",
    "achievements.desc": "کارنامه‌ای درخشان بر پایه مشاوره حرفه‌ای، مذاکره هدفمند و ثبت نتایج قابل توجه در بازار املاک دبی.",
    "achievements.stat1": "دوره فروشنده برتر دانوب",
    "achievements.stat2": "درهم فروش شخصی",
    "achievements.stat3": "سال تجربه در بازار دبی",
    "achievements.verified": "تأییدیه رسمی سوابق حرفه‌ای",
    "projects.eyebrow": "پروژه‌های منتخب",
    "projects.title": "آدرس‌های برتر دبی",
    "projects.viewAll": "همه پروژه‌ها",
    "projects.from": "شروع از",
    "contact.eyebrow": "گفتگو کنید",
    "contact.title": "سرمایه‌گذاری بعدی شما، تنها یک گفتگو فاصله دارد.",
    "contact.desc": "اطلاعات خود را وارد کنید تا در کوتاه‌ترین زمان در واتس‌اپ با شما تماس بگیرم.",
    "form.name": "نام و نام خانوادگی",
    "form.phone": "شماره تماس",
    "form.project": "پروژه مورد علاقه",
    "form.message": "پیام",
    "blog.eyebrow": "مجله",
    "blog.title": "نبض بازار دبی",
    "testimonials.eyebrow": "مشتریان",
    "testimonials.title": "اعتماد سرمایه گذاران",
    "footer.tagline": "مشاوره تخصصی و مبتنی بر داده املاک در دبی.",
    "footer.quickLinks": "پیمایش",
    "footer.contact": "تماس",
    "footer.rights": "تمامی حقوق محفوظ است.",
    "project.overview": "معرفی",
    "project.amenities": "امکانات",
    "project.payment": "طرح پرداخت",
    "project.location": "موقعیت",
    "project.gallery": "گالری",
    "project.enquire": "استعلام در واتس‌اپ",
    "article.back": "بازگشت به مجله",
    "article.related": "مطالب مرتبط",
    "contact.page.title": "تماس با ما",
    "contact.page.desc": "برای سرمایه‌گذاری، نقل مکان یا مشاوره — گفتگو را آغاز کنید.",
  },
  ku: {
    "nav.home": "ماڵەوە",
    "nav.projects": "پڕۆژەکان",
    "nav.blog": "گۆڤار",
    "nav.contact": "پەیوەندی",
    "cta.whatsapp": "واتساپ",
    "cta.viewProjects": "بینینی پڕۆژەکان",
    "cta.chatWhatsapp": "گفتوگۆ لە واتساپ",
    "cta.readMore": "زیاتر بخوێنەرەوە",
    "cta.explore": "بینین",
    "hero.eyebrow": "دوبەی · ڕاوێژکاری خانووبەرە",
    "hero.badge": "ڕاوێژکاری خانووبەرەی | کوردزمان لە دوبەی",
    "hero.title": "هیمان قەرەنی",
    "hero.subtitle": "یەکەم ڕاوێژکاری کوردزمانی خانووبەرە و وەبەرهێنان لە دوبەی",
    "hero.scroll": "سکڕۆڵ",
    "achievements.eyebrow": "ئەزموون",
    "achievements.title": "دەستکەوتە بەدەستهاتووەکان",
    "achievements.desc": "کارنامەیەکی دیار لەسەر بنەمای ڕاوێژکاری پیشەیی، دانوستاندنی ئامانجدار و تۆمارکردنی ئەنجامی بەرچاو لە بازاڕی موڵکی دوبەی.",
    "achievements.stat1": "خەڵاتی فرۆشیاری سەرەکی دانوب",
    "achievements.stat2": "درهم فرۆشی کەسی",
    "achievements.stat3": "ساڵ ئەزموون لە بازاڕی دوبەی",
    "achievements.verified": "تۆماری پیشەسازی پشتڕاستکراوە",
    "projects.eyebrow": "پڕۆژەی هەڵبژێردراو",
    "projects.title": "ناونیشانە باڵاکانی دوبەی",
    "projects.viewAll": "هەموو پڕۆژەکان",
    "projects.from": "دەست‌پێ‌دەکات لە",
    "contact.eyebrow": "گفتوگۆ بکە",
    "contact.title": "وەبەرهێنانی داهاتووت، تەنها یەک گفتوگۆ دوورە.",
    "contact.desc": "زانیاری بنووسە و من لە کاتژمێرێکدا لە واتساپ پەیوەندیت پێوە دەکەم.",
    "form.name": "ناوی تەواو",
    "form.phone": "ژمارەی تەلەفۆن",
    "form.project": "پڕۆژەی دڵخواز",
    "form.message": "پەیام",
    "blog.eyebrow": "گۆڤار",
    "blog.title": "تێبینییەکان لە بازاڕی دوبەی",
    "testimonials.eyebrow": "کڕیاران",
    "testimonials.title": "متمانەی وەبەرهێنەران",
    "footer.tagline": "ڕاوێژکاری نهێنی و زانیاری-بنەما لە دوبەی.",
    "footer.quickLinks": "گەشت",
    "footer.contact": "پەیوەندی",
    "footer.rights": "هەموو مافەکان پارێزراون.",
    "project.overview": "پێشەکی",
    "project.amenities": "ئامرازەکان",
    "project.payment": "پلانی پارەدان",
    "project.location": "شوێن",
    "project.gallery": "گالەری",
    "project.enquire": "پرسیار لە واتساپ",
    "article.back": "گەڕانەوە بۆ گۆڤار",
    "article.related": "خوێندنەوەی پەیوەندیدار",
    "contact.page.title": "پەیوەندیمان پێوە بکە",
    "contact.page.desc": "بۆ وەبەرهێنان، گواستنەوە یان ڕاوێژ — دەستپێبکە بە گفتوگۆ.",
  },
};

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (k: string) => string; dir: "ltr" | "rtl" };

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ku");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("locale") as Locale | null)) || "ku";
    setLocaleState(saved);
  }, []);

  const dir: "ltr" | "rtl" = locale === "en" ? "ltr" : "rtl";

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem("locale", l);
  };

  const t = (k: string) => dictionaries[locale][k] ?? dictionaries.en[k] ?? k;

  return <I18nContext.Provider value={{ locale, setLocale, t, dir }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export const WHATSAPP_NUMBER = "971562430180";
export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

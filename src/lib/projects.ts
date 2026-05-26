import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { type Locale } from "./i18n";

export type Project = {
  slug: string;
  image: string;
  gallery?: string[];
} & Record<Locale, {
  name: string;
  developer: string;
  location: string;
  price: string;
  category: string;
  tagline: string;
  overview: string;
  amenities: string[];
  payment: { stage: string; percent: string }[];
}>;

export const projects: Project[] = [
  {
    slug: "azizi-riviera",
    image: project1,
    gallery: [project1, project2, project3],
    en: {
      name: "Azizi Riviera",
      developer: "Azizi Developments",
      location: "Meydan, Dubai",
      price: "AED 950,000",
      category: "Waterfront",
      tagline: "Mediterranean-inspired waterfront living minutes from Downtown.",
      overview: "A landmark master-community on the Meydan canal, Azizi Riviera blends French-Riviera architecture with the energy of modern Dubai. Studios to three-bedroom residences, retail boulevards and a private beach define the address.",
      amenities: ["Private beach", "Infinity pool", "Wellness spa", "Concierge", "EV charging", "Smart home"],
      payment: [
        { stage: "On booking", percent: "10%" },
        { stage: "During construction", percent: "50%" },
        { stage: "On handover", percent: "40%" },
      ],
    },
    fa: {
      name: "عزیزی ریویرا",
      developer: "توسعه عزیزی",
      location: "میدان، دبی",
      price: "۹۵۰,۰۰۰ درهم",
      category: "ساحلی",
      tagline: "زندگی ساحلی با الهام از مدیترانه، دقایقی دورتر از مرکز شهر.",
      overview: "یک مجمتع بزرگ شاخص در کانال میدان، عزیزی ریویرا معماری ریویرا فرانسه را با انرژی دبی مدرن ترکیب می‌کند. از استودیو تا واحدهای سه خوابه، بلوارهای تجاری و ساحل اختصاصی، این آدرس را تعریف می‌کنند.",
      amenities: ["ساحل اختصاصی", "استخر اینفینیتی", "اسپای سلامتی", "کانسیرج", "شارژ خودرو برقی", "خانه هوشمند"],
      payment: [
        { stage: "هنگام رزرو", percent: "۱۰٪" },
        { stage: "حین ساخت", percent: "۵۰٪" },
        { stage: "هنگام تحویل", percent: "۴۰٪" },
      ],
    },
    ku: {
      name: "عزیزی ریڤیێرا",
      developer: "پەرەپێدانی عزیزی",
      location: "مەیدان، دوبەی",
      price: "٩٥٠,٠٠٠ درهەم",
      category: "کەنار دەریا",
      tagline: "ژیانی کەنار دەریا بە ئیلهام لە دەریای ناوەڕاست، چەند خولەکێک دوور لە سەنتەری شار.",
      overview: "کۆمەڵگەیەکی گەورەی نیشتەجێبوون لەسەر کەناڵی مەیدان، عزیزی ریڤیێرا تەلارسازی ریڤیێرای فەڕەنسی لەگەڵ وزەی دوبەی مۆدێرن تێکەڵ دەکات. لە ستۆدیۆوە تا یەکەکانی سێ ژووری خەوتن، بلوارە بازرگانییەکان و کەنار دەریای تایبەت ئەم ناونیشانە پێناسە دەکەن.",
      amenities: ["کەنار دەریای تایبەت", "مەلەوانگەی ئینفینیتی", "سپای تەندروستی", "خزمەتگوزاری کونسێرژ", "بارگاویکردنەوەی ئۆتۆمبێلی کارەبایی", "ماڵی زیرەک"],
      payment: [
        { stage: "کاتی حیجزکردن", percent: "١٠٪" },
        { stage: "کاتی بیناسازی", percent: "٥٠٪" },
        { stage: "کاتی وەرگرتنەوە", percent: "٤٠٪" },
      ],
    },
  },
  {
    slug: "burj-residences",
    image: project2,
    gallery: [project2, project3, project1],
    en: {
      name: "Burj Residences",
      developer: "Emaar",
      location: "Downtown, Dubai",
      price: "AED 2,400,000",
      category: "Downtown",
      tagline: "Branded residences with uninterrupted views of Burj Khalifa.",
      overview: "An intimate tower of 180 residences in the heart of Downtown Dubai. Floor-to-ceiling glass, hand-finished stone, and curated services delivered by the world's leading hospitality brand.",
      amenities: ["Sky lounge", "Private cinema", "24/7 concierge", "Valet", "Wine cellar", "Gym"],
      payment: [
        { stage: "On booking", percent: "20%" },
        { stage: "During construction", percent: "60%" },
        { stage: "On handover", percent: "20%" },
      ],
    },
    fa: {
      name: "رزیدنس برج",
      developer: "اعمار",
      location: "داون‌تاون، دبی",
      price: "۲,۴۰۰,۰۰۰ درهم",
      category: "مرکز شهر",
      tagline: "واحدهای برندینگ با چشم‌انداز بدون مانع از برج خلیفه.",
      overview: "یک برج اختصاصی با ۱۸۰ واحد مسکونی در قلب داون‌تاون دبی. شیشه‌های تمام قد، سنگ‌های کار شده دستی و خدمات ویژه ارائه شده توسط برترین برندهای هتلداری جهان.",
      amenities: ["اسکای لانژ", "سینمای اختصاصی", "کانسیرج ۲۴/۷", "والت پارکینگ", "انبار نوشیدنی", "باشگاه ورزشی"],
      payment: [
        { stage: "هنگام رزرو", percent: "۲۰٪" },
        { stage: "حین ساخت", percent: "۶۰٪" },
        { stage: "هنگام تحویل", percent: "۲۰٪" },
      ],
    },
    ku: {
      name: "بورج ڕێزیدێنس",
      developer: "ئیعمار",
      location: "داون‌تاون، دوبەی",
      price: "٢,٤٠٠,٠٠٠ درهەم",
      category: "سەنتەری شار",
      tagline: "شوێنی نیشتەجێبوونی مارکەدار بە دیمەنی بێ بڕانەوەی بورجی خەلیفە.",
      overview: "بورجێکی تایبەت لە ١٨٠ یەکەی نیشتەجێبوون لە دڵی داون‌تاونی دوبەی. شووشەی باڵا، بەردی دەستکرد، و خزمەتگوزارییە تایبەتەکان کە لەلایەن براندە پێشەنگەکانی جیهانی میواندارییەوە پێشکەش دەکرێن.",
      amenities: ["ئاسمان لانژ", "سینەمای تایبەت", "خزمەتگوزاری کونسێرژ ٢٤/٧", "خزمەتگوزاری وەستانی ئۆتۆمبێل", "کۆگای تایبەت", "هۆڵی وەرزشی"],
      payment: [
        { stage: "کاتی حیجزکردن", percent: "٢٠٪" },
        { stage: "کاتی بیناسازی", percent: "٦٠٪" },
        { stage: "کاتی وەرگرتنەوە", percent: "٢٠٪" },
      ],
    },
  },
  {
    slug: "marina-vista",
    image: project3,
    gallery: [project3, project1, project2],
    en: {
      name: "Marina Vista",
      developer: "Emaar Beachfront",
      location: "Dubai Marina",
      price: "AED 3,150,000",
      category: "Waterfront",
      tagline: "Twin towers rising above the marina with private beach access.",
      overview: "Where the Arabian Gulf meets the city. Marina Vista offers panoramic sea views, a private island beach, and the most coveted address on the Dubai waterfront.",
      amenities: ["Private beach", "Marina access", "Infinity pool", "Kids club", "Yoga deck", "Concierge"],
      payment: [
        { stage: "On booking", percent: "10%" },
        { stage: "During construction", percent: "70%" },
        { stage: "On handover", percent: "20%" },
      ],
    },
    fa: {
      name: "مارینا ویستا",
      developer: "اعمار بیچ‌فرانت",
      location: "دبی مارینا",
      price: "۳,۱۵۰,۰۰۰ درهم",
      category: "ساحلی",
      tagline: "برج‌های دوقلو بر فراز مارینا با دسترسی به ساحل اختصاصی.",
      overview: "جایی که خلیج فارس با شهر ملاقات می‌کند. مارینا ویستا چشم‌اندازهای پانورامیک دریا، ساحل جزیره‌ای اختصاصی و پرطرفدارترین آدرس در خط ساحلی دبی را ارائه می‌دهد.",
      amenities: ["ساحل اختصاصی", "دسترسی به مارینا", "استخر اینفینیتی", "باشگاه کودکان", "تراس یوگا", "کانسیرج"],
      payment: [
        { stage: "هنگام رزرو", percent: "۱۰٪" },
        { stage: "حین ساخت", percent: "۷۰٪" },
        { stage: "هنگام تحویل", percent: "۲۰٪" },
      ],
    },
    ku: {
      name: "مارینا ڤێستا",
      developer: "ئیعمار بیچ‌فرانت",
      location: "دوبەی مارینا",
      price: "٣,١٥٠,٠٠٠ درهەم",
      category: "کەنار دەریا",
      tagline: "دوو بورج لەسەر مارینا بە دەستگەیشتن بە کەنار دەریای تایبەت.",
      overview: "لەو شوێنەی کە کەنداوی عەرەبی لەگەڵ شارەکەدا یەکدەگرێتەوە. مارینا ڤێستا دیمەنی پانۆرامای دەریا، کەنار دەریای دوورگەی تایبەت و خوازراوترین ناونیشان لەسەر کەنار دەریای دوبەی پێشکەش دەکات.",
      amenities: ["کەنار دەریای تایبەت", "دەستگەیشتن بە مارینا", "مەلەوانگەی ئینفینیتی", "یانەی منداڵان", "شوێنی یۆگا", "خزمەتگوزاری کونسێرژ"],
      payment: [
        { stage: "کاتی حیجزکردن", percent: "١٠٪" },
        { stage: "کاتی بیناسازی", percent: "٧٠٪" },
        { stage: "کاتی وەرگرتنەوە", percent: "٢٠٪" },
      ],
    },
  },
];

export type Article = {
  slug: string;
  image: string;
  date: string;
} & Record<Locale, {
  title: string;
  excerpt: string;
  category: string;
  content: string;
}>;

export const articles: Article[] = [
  {
    slug: "dubai-2026-outlook",
    date: "May 2026",
    image: project2,
    en: {
      title: "Dubai 2026: the quiet repricing of luxury",
      excerpt: "Why off-plan inventory in branded residences is moving 18% faster than 12 months ago — and what that means for entry pricing.",
      category: "Market",
      content: "The Dubai luxury segment has entered a phase that few outside the brokerage community are pricing in correctly. Across the first quarter, branded residences from Emaar, Dorchester, and Bulgari saw average days-on-market collapse from 96 to 41. Behind the headline numbers sits a structural shift: a new generation of international capital that treats Dubai as a primary residence rather than a holiday hedge. For investors, the implication is direct — the cheapest entry point in branded inventory you will see for the next 24 months is today.",
    },
    fa: {
      title: "دبی ۲۰۲۶: بازبینی آرام قیمت‌های لوکس",
      excerpt: "چرا املاک پیش‌فروش در رزیدنس‌های برند ۱۸٪ سریع‌تر از ۱۲ ماه گذشته به فروش می‌رسند.",
      category: "بازار",
      content: "بخش لوکس دبی وارد مرحله‌ای شده است که تعداد کمی خارج از جامعه کارگزاری آن را به درستی قیمت‌گذاری می‌کنند. در طول فصل اول، رزیدنس‌های برند اعمار، دورچستر و بولگاری شاهد کاهش میانگین روزهای حضور در بازار از ۹۶ به ۴۱ بودند. در پشت اعداد، یک تغییر ساختاری وجود دارد: نسل جدیدی از سرمایه بین‌المللی که با دبی به عنوان محل اقامت اصلی رفتار می‌کند تا یک پوشش تعطیلات. برای سرمایه‌گذاران، پیامد مستقیم است — ارزان‌ترین نقطه ورود در موجودی برند که در ۲۴ ماه آینده خواهید دید، امروز است.",
    },
    ku: {
      title: "دوبەی ٢٠٢٦: نرخدانانەوەی هێمنی کەلوپەلی لوکس",
      excerpt: "بۆچی موڵکە پێشوەختەکان لە ڕێزیدێنسە براندکراوەکان ١٨٪ خێراتر لە ١٢ مانگی ڕابردوو دەفرۆشرێن.",
      category: "بازاڕ",
      content: "کەرتی لوکسی دوبەی چووەتە قۆناغێکەوە کە کەمی کەس لە دەرەوەی کۆمەڵگەی برۆکەری بە دروستی نرخەکەی دادەنێن. لە ماوەی چارەکی یەکەمدا، ڕێزیدێنسە براندکراوەکانی ئیعمار، دۆرچێستەر و بولگاری شایەتی کەمبوونەوەی تێکڕای ڕۆژانی مانەوە لە بازاڕ بوون لە ٩٦ بۆ ٤١ ڕۆژ. لە پشت ژمارەکانەوە گۆڕانکارییەکی پێکهاتەیی هەیە: نەوەیەکی نوێی سەرمایەی نێودەوڵەتی کە وەک نیشتەجێبوونی سەرەکی مامەڵە لەگەڵ دوبەی دەکات. بۆ وەبەرهێنەران، دەرئەنجامەکە ڕاستەوخۆیە - هەرزانترین خاڵی چوونە ناو کاڵا براندکراوەکان کە لە ٢٤ مانگی داهاتوودا دەیبینیت، ئەمڕۆیە.",
    },
  },
  {
    slug: "golden-visa-real-estate",
    date: "Apr 2026",
    image: project1,
    en: {
      title: "The Golden Visa playbook for property buyers",
      excerpt: "A clear-eyed guide to qualifying real estate, holding structures, and the paperwork most agents skip.",
      category: "Residency",
      content: "Dubai's 10-year Golden Visa transformed the buyer profile of the city's premium districts. But the conversation rarely covers the practicalities — minimum holding periods, joint-ownership rules, and the exact title deed wording that triggers eligibility. This guide walks through every step from reservation to residency stamp, drawn from over forty closed transactions in the last two years.",
    },
    fa: {
      title: "راهنمای ویزای طلایی برای خریداران ملک",
      excerpt: "راهنمایی شفاف برای املاک واجد شرایط، ساختارهای مالکیت و مدارکی که اکثر مشاوران نادیده می‌گیرند.",
      category: "اقامت",
      content: "ویزای طلایی ۱۰ ساله دبی پروفایل خریداران مناطق برتر شهر را متحول کرد. اما گفتگوها به ندرت جنبه‌های عملی را پوشش می‌دهند — حداقل دوره‌های نگهداری، قوانین مالکیت مشترک و عبارت دقیق سند مالکیت که واجد شرایط بودن را تعیین می‌کند. این راهنما تمام مراحل از رزرو تا مهر اقامت را بر اساس بیش از چهل معامله بسته شده در دو سال گذشته توضیح می‌دهد.",
    },
    ku: {
      title: "ڕێنمایی ڤیزای زێڕین بۆ کڕیارانی موڵک",
      excerpt: "ڕێنمایییەکی ڕوون بۆ موڵکە شیاوەکان، پێکهاتەکانی خاوەندارێتی و ئەو بەڵگەنامانەی زۆربەی بریکارەکان پشتگوێی دەخەن.",
      category: "نشینگەی",
      content: "ڤیزای زێڕینی ١٠ ساڵەی دوبەی پڕۆفایلی کڕیارانی ناوچە نایابەکانی شارەکەی گۆڕی. بەڵام گفتوگۆکان بە دەگمەن لایەنە پراکتیکییەکان دەگرێتەوە - کەمترین ماوەی خاوەندارێتی، یاساکانی خاوەندارێتی هاوبەش، و دەربڕینی وردی سەنەدی موڵکایەتی کە شایستەیی دیاری دەکات. ئەم ڕێنمایییە هەموو هەنگاوەکان لە حیجزکردنەوە تا مۆری نیشتەجێبوون باس دەکات، کە لە زیاتر لە چل مامەڵەی داخراو لە دوو ساڵی ڕابردوودا وەرگیراوە.",
    },
  },
  {
    slug: "meydan-masterplan-update",
    date: "Mar 2026",
    image: project3,
    en: {
      title: "Meydan masterplan: the next 5 years",
      excerpt: "How the expansion of the Blue Line and the new Crystal Lagoon phases are recalibrating square foot values in Meydan.",
      category: "Infrastructure",
      content: "Meydan is no longer just about the racecourse. With the recent confirmation of the Dubai Metro Blue Line extension, connectivity to the district is set to triple by 2029. We are seeing a 12-15% premium being paid for units within a 10-minute walk of the proposed stations. This update breaks down the upcoming residential launches and why the 'Lagoon-front' remains the strongest hedge against market volatility.",
    },
    fa: {
      title: "طرح جامع میدان: ۵ سال آینده",
      excerpt: "چگونه گسترش خط آبی مترو و فازهای جدید تالاب کریستالی در حال تغییر ارزش هر فوت مربع در منطقه میدان هستند.",
      category: "زیرساخت",
      content: "میدان دیگر فقط درباره پیست اسب‌دوانی نیست. با تایید اخیر گسترش خط آبی مترو دبی، دسترسی به این منطقه تا سال ۲۰۲۹ سه برابر خواهد شد. ما شاهد پرداخت ۱۲ تا ۱۵ درصد مبلغ بیشتر برای واحدهایی هستیم که در فاصله ۱۰ دقیقه‌ای پیاده‌روی از ایستگاه‌های پیشنهادی قرار دارند. این گزارش پروژه‌های مسکونی آینده و دلیل برتری واحدهای 'رو به تالاب' را در برابر نوسانات بازار بررسی می‌کند.",
    },
    ku: {
      title: "پلانی گشتی مەیدان: ٥ ساڵی داهاتوو",
      excerpt: "چۆن فراوانکردنی هێڵی شین و قۆناغە نوێیەکانی کریستاڵ لاگوون نرخەکان لە مەیدان دەگۆڕن.",
      category: "ژێرخانی",
      content: "مەیدان چیتر تەنها پەیوەندی بە پێشبڕکێی ئەسپەوە نییە. بە پشتڕاستکردنەوەی ئەمدواییەی درێژکردنەوەی هێڵی شینی میترۆی دوبەی، پەیوەندی بەو ناوچەیە تا ساڵی ٢٠٢٩ سێ هێندە دەبێت. ئێمە دەبینین کە ١٢-١٥٪ زیاتر دەدرێت بەو یەکانەی کە لە ماوەی ١٠ خولەک پیادەڕەوی لە وێستگە پێشنیارکراوەکانەوە دوورن. ئەم نوێکردنەوەیە پڕۆژە نیشتەجێبوونەکانی داهاتوو باس دەکات.",
    },
  },
  {
    slug: "investing-in-branded-residences",
    date: "Feb 2026",
    image: project2,
    en: {
      title: "The premium of branded residences",
      excerpt: "Why hospitality-backed homes command a 25% higher rental yield and higher resale liquidity in the secondary market.",
      category: "Investment",
      content: "Branded residences are the safe haven of Dubai's real estate market. When a building carries the name of a world-class hotel or fashion house, it inherits a standard of service and trust that unbranded developments cannot match. Data from the last three years shows that branded properties maintain their value significantly better during market corrections and attract a higher caliber of long-term tenants.",
    },
    fa: {
      title: "ارزش افزوده رزیدنس‌های برند",
      excerpt: "چرا خانه‌هایی با حمایت برندهای هتلداری، ۲۵٪ بازده اجاره بالاتر و نقدشوندگی بیشتری در بازار دست دوم دارند.",
      category: "سرمایه‌گذاری",
      content: "رزیدنس‌های برند پناهگاه امن بازار املاک دبی هستند. وقتی یک ساختمان نام یک هتل در سطح جهانی یا یک خانه مد را یدک می‌کشد، استانداردی از خدمات و اعتماد را به ارث می‌برد که پروژه‌های بدون برند نمی‌توانند با آن رقابت کنند. داده‌های سه سال گذشته نشان می‌دهد که املاک برند ارزش خود را در طول اصلاحات بازار به خوبی حفظ می‌کنند.",
    },
    ku: {
      title: "بەهای زیادکراوی ڕێزیدێنسە براندکراوەکان",
      excerpt: "بۆچی ئەو ماڵانەی کە لەلایەن براندەکانەوە پشتگیری دەکرێن، ٢٥٪ قازانجی کرێی زیاتریان هەیە.",
      category: "وەبەرهێنان",
      content: "ڕێزیدێنسە براندکراوەکان پەناگەیەکی ئارامی بازاڕی خانووبەرەی دوبەین. کاتێک بینایەک ناوی هۆتێلێکی جیهانی یان براندێکی مۆدەی لەسەر بێت، ستانداردێک لە خزمەتگوزاری و متمانە وەردەگرێت کە پڕۆژە بێ براندەکان ناتوانن ڕکابەری بکەن. زانیارییەکانی سێ ساڵی ڕابردوو دەریدەخەن کە موڵکە براندکراوەکان بەهای خۆیان بە باشی دەپارێزن.",
    },
  },
];

export type Testimonial = {
  rating: number;
} & Record<Locale, {
  name: string;
  role: string;
  quote: string;
}>;

export const testimonials: Testimonial[] = [
  {
    rating: 5,
    en: {
      name: "Sara Karimi",
      role: "Investor · Tehran → Dubai",
      quote: "Himan made a process that felt impossible feel inevitable. From shortlist to handover, every step was handled with precision and quiet care.",
    },
    fa: {
      name: "سارا کریمی",
      role: "سرمایه‌گذار · تهران ← دبی",
      quote: "هیمن فرآیندی که غیرممکن به نظر می‌رسید را به واقعیتی اجتناب‌ناپذیر تبدیل کرد. از انتخاب نهایی تا تحویل واحد، هر مرحله با دقت و مراقبتی آرام انجام شد.",
    },
    ku: {
      name: "سارا کەریمی",
      role: "وەبەرهێنەر · تاران ← دوبەی",
      quote: "هیمان پرۆسەیەکی کە هەستی پێدەکرا مەحاڵ بێت گۆڕی بۆ واقیعێکی حەتمی. لە هەڵبژاردنەوە تا ڕادەستکردن، هەموو هەنگاوێک بە وردی و گرنگییەکی بێدەنگ ئەنجامدرا.",
    },
  },
  {
    rating: 5,
    en: {
      name: "Aram Ahmadi",
      role: "Founder · Erbil",
      quote: "The first consultant in Dubai who actually understood my objectives — not just the inventory. Closed two units in eight weeks.",
    },
    fa: {
      name: "آرام احمدی",
      role: "بنیان‌گذار · اربیل",
      quote: "اولین مشاوری در دبی که واقعاً اهداف من را درک کرد — نه فقط موجودی واحدها. دو واحد را در هشت هفته نهایی کردیم.",
    },
    ku: {
      name: "ئارام ئەحمەدی",
      role: "دامەزرێنەر · هەولێر",
      quote: "یەکەم ڕاوێژکار لە دوبەی کە بەڕاستی لە ئامانجەکانم تێگەیشت - نەک تەنها لیستی یەکەکان. دوو یەکەمان لە ماوەی هەشت هەفتەدا کۆتایی پێهێنا.",
    },
  },
  {
    rating: 5,
    en: {
      name: "James Whitman",
      role: "Family Office · London",
      quote: "Sharp market read, discreet execution, zero pressure. Exactly what private clients expect and rarely receive in this market.",
    },
    fa: {
      name: "جیمز ویتمن",
      role: "فمیلی آفیس · لندن",
      quote: "تحلیل دقیق بازار، اجرای محتاطانه، بدون هیچ فشار. دقیقاً همان چیزی که مشتریان خصوصی انتظار دارند و به ندرت در این بازار دریافت می‌کنند.",
    },
    ku: {
      name: "جیمز ویتمان",
      role: "فامیلی ئۆفیس · لەندەن",
      quote: "خوێندنەوەی تیژی بازاڕ، جێبەجێکردنی نهێنی، فشاری سفر. ڕێک ئەوەی کە کڕیارانی تایبەت چاوەڕێی دەکەن و بە دەگمەن لەم بازاڕەدا دەستیان دەکەوێت.",
    },
  },
];

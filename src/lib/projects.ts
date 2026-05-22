import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export type Project = {
  slug: string;
  name: string;
  developer: string;
  location: string;
  price: string;
  category: string;
  image: string;
  gallery?: string[];
  tagline: string;
  overview: string;
  amenities: string[];
  payment: { stage: string; percent: string }[];
};

export const projects: Project[] = [
  {
    slug: "azizi-riviera",
    name: "Azizi Riviera",
    developer: "Azizi Developments",
    location: "Meydan, Dubai",
    price: "AED 950,000",
    category: "Waterfront",
    image: project1,
    gallery: [project1, project2, project3],
    tagline: "Mediterranean-inspired waterfront living minutes from Downtown.",
    overview:
      "A landmark master-community on the Meydan canal, Azizi Riviera blends French-Riviera architecture with the energy of modern Dubai. Studios to three-bedroom residences, retail boulevards and a private beach define the address.",
    amenities: ["Private beach", "Infinity pool", "Wellness spa", "Concierge", "EV charging", "Smart home"],
    payment: [
      { stage: "On booking", percent: "10%" },
      { stage: "During construction", percent: "50%" },
      { stage: "On handover", percent: "40%" },
    ],
  },
  {
    slug: "burj-residences",
    name: "Burj Residences",
    developer: "Emaar",
    location: "Downtown, Dubai",
    price: "AED 2,400,000",
    category: "Downtown",
    image: project2,
    gallery: [project2, project3, project1],
    tagline: "Branded residences with uninterrupted views of Burj Khalifa.",
    overview:
      "An intimate tower of 180 residences in the heart of Downtown Dubai. Floor-to-ceiling glass, hand-finished stone, and curated services delivered by the world's leading hospitality brand.",
    amenities: ["Sky lounge", "Private cinema", "24/7 concierge", "Valet", "Wine cellar", "Gym"],
    payment: [
      { stage: "On booking", percent: "20%" },
      { stage: "During construction", percent: "60%" },
      { stage: "On handover", percent: "20%" },
    ],
  },
  {
    slug: "marina-vista",
    name: "Marina Vista",
    developer: "Emaar Beachfront",
    location: "Dubai Marina",
    price: "AED 3,150,000",
    category: "Waterfront",
    image: project3,
    gallery: [project3, project1, project2],
    tagline: "Twin towers rising above the marina with private beach access.",
    overview:
      "Where the Arabian Gulf meets the city. Marina Vista offers panoramic sea views, a private island beach, and the most coveted address on the Dubai waterfront.",
    amenities: ["Private beach", "Marina access", "Infinity pool", "Kids club", "Yoga deck", "Concierge"],
    payment: [
      { stage: "On booking", percent: "10%" },
      { stage: "During construction", percent: "70%" },
      { stage: "On handover", percent: "20%" },
    ],
  },
];

export const articles = [
  {
    slug: "dubai-2026-outlook",
    title: "Dubai 2026: the quiet repricing of luxury",
    excerpt:
      "Why off-plan inventory in branded residences is moving 18% faster than 12 months ago — and what that means for entry pricing.",
    category: "Market",
    date: "May 2026",
    image: project2,
    content:
      "The Dubai luxury segment has entered a phase that few outside the brokerage community are pricing in correctly. Across the first quarter, branded residences from Emaar, Dorchester, and Bulgari saw average days-on-market collapse from 96 to 41. Behind the headline numbers sits a structural shift: a new generation of international capital that treats Dubai as a primary residence rather than a holiday hedge. For investors, the implication is direct — the cheapest entry point in branded inventory you will see for the next 24 months is today.",
  },
  {
    slug: "golden-visa-real-estate",
    title: "The Golden Visa playbook for property buyers",
    excerpt: "A clear-eyed guide to qualifying real estate, holding structures, and the paperwork most agents skip.",
    category: "Residency",
    date: "Apr 2026",
    image: project1,
    content:
      "Dubai's 10-year Golden Visa transformed the buyer profile of the city's premium districts. But the conversation rarely covers the practicalities — minimum holding periods, joint-ownership rules, and the exact title deed wording that triggers eligibility. This guide walks through every step from reservation to residency stamp, drawn from over forty closed transactions in the last two years.",
  },
  {
    slug: "off-plan-vs-secondary",
    title: "Off-plan vs secondary: choosing your edge",
    excerpt:
      "When the discount on a launch is real — and when you're better paying a premium for keys in hand.",
    category: "Strategy",
    date: "Mar 2026",
    image: project3,
    content:
      "The off-plan launch calendar dominates Dubai property news, but the math behind it is more nuanced than the marketing suggests. This piece breaks down the true cost of capital, opportunity cost of delayed yield, and developer credit risk — and gives a simple framework for choosing between a launch unit and a ready secondary deal.",
  },
];

export const testimonials = [
  {
    name: "Sara Karimi",
    role: "Investor · Tehran → Dubai",
    quote:
      "Himan made a process that felt impossible feel inevitable. From shortlist to handover, every step was handled with precision and quiet care.",
    rating: 5,
  },
  {
    name: "Aram Ahmadi",
    role: "Founder · Erbil",
    quote:
      "The first consultant in Dubai who actually understood my objectives — not just the inventory. Closed two units in eight weeks.",
    rating: 5,
  },
  {
    name: "James Whitman",
    role: "Family Office · London",
    quote:
      "Sharp market read, discreet execution, zero pressure. Exactly what private clients expect and rarely receive in this market.",
    rating: 5,
  },
];
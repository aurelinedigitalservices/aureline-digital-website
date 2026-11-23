// All projects below are fictional concept designs created by Aureline Digital. They are not real clients.
export type Project = {
  slug: string; title: string; business: string; category: string; summary: string;
  decisions: string[]; palette: { bg: string; fg: string; accent: string; panel: string }; headline: string; cta: string; sections: string[];
};

export const projects: Project[] = [
  {
    slug: "residential-cleaning",
    title: "Luxury residential cleaning",
    business: "Maison Clean (fictional)",
    category: "Residential cleaning",
    summary: "A calm, high-end site for a home cleaning company that serves homeowners who value discretion and consistency.",
    decisions: ["Quiet, spacious layout that signals care and trust", "Online quote request on every page", "Service packages explained in plain language"],
    palette: { bg: "#f4efe6", fg: "#26302d", accent: "#5f7a6e", panel: "#e6ded0" },
    headline: "A home that feels reset.", cta: "Request a quote", sections: ["Weekly care", "Deep cleans", "Move-in and move-out"],
  },
  {
    slug: "mobile-detailing",
    title: "Premium mobile detailing",
    business: "Apex Mobile Detail (fictional)",
    category: "Mobile detailing",
    summary: "A deep slate, high-contrast site for a detailer who comes to the customer, built around packages and booking.",
    decisions: ["Package comparison that is easy to scan on a phone", "Service area and booking request front and center", "Deep slate palette to match the product"],
    palette: { bg: "#27323b", fg: "#f3efe6", accent: "#bcd6e8", panel: "#33414c" },
    headline: "Showroom finish. At your driveway.", cta: "Book a detail", sections: ["Exterior", "Interior", "Full detail"],
  },
  {
    slug: "landscaping",
    title: "Landscaping company",
    business: "Verdant Grounds (fictional)",
    category: "Landscaping",
    summary: "A grounded, natural-toned site for a landscaping company that needs to show seasonal services and local coverage.",
    decisions: ["Seasonal services grouped for quick browsing", "Service area section for local search", "Estimate form built for property details"],
    palette: { bg: "#eef0e6", fg: "#22301f", accent: "#4f6b3a", panel: "#dfe3d0" },
    headline: "Outdoor spaces, kept right.", cta: "Get an estimate", sections: ["Lawn care", "Garden design", "Seasonal cleanup"],
  },
];

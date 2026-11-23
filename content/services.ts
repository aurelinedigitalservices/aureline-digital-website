export type Service = { slug: string; title: string; summary: string; deliverables: string[] };

export const services: Service[] = [
  {
    slug: "design",
    title: "Website design",
    summary: "A custom visual identity for your site, drawn around your services and the customers you want more of.",
    deliverables: ["Layout and style direction for desktop and mobile", "Typography, color and imagery guidelines", "Designed pages: home, services, about, contact", "One round of revisions before development"],
  },
  {
    slug: "development",
    title: "Website development",
    summary: "Custom-coded, responsive websites built with modern tools and reviewed on phone, tablet and desktop screen sizes before launch.",
    deliverables: ["Responsive build for phone, tablet and desktop", "Accessible navigation and clear contact links", "Guidance for hosting setup and optional domain connection", "A handover walkthrough of what was delivered and where it is hosted"],
  },
  {
    slug: "landing-pages",
    title: "Landing pages",
    summary: "A single focused page for one offer, season or service area, built to turn visits into inquiries.",
    deliverables: ["One page with a single clear call to action", "A clear inquiry or booking path appropriate to the project", "Mobile-first layout", "Page title and sharing preview set up"],
  },
  {
    slug: "redesigns",
    title: "Website redesigns",
    summary: "A rebuild of an outdated site that keeps what works and replaces what costs you customers.",
    deliverables: ["Review of your current site and content", "New design and build", "Page-by-page content carry-over", "Redirect plan so existing links keep working"],
  },
  {
    slug: "seo",
    title: "Basic SEO setup",
    summary: "The technical foundation that lets search engines understand your business and location.",
    deliverables: ["Page titles and descriptions for every page", "Sitemap and robots file", "Social sharing previews", "Guidance on setting up a free Google Business Profile"],
  },
  {
    slug: "forms",
    title: "Contact and inquiry setup",
    summary: "A clear way for potential customers to reach your business, using an email link or an agreed form solution suited to your hosting setup.",
    deliverables: ["Contact details and calls to action tailored to your business", "Email inquiry links or an agreed form provider", "Clear instructions for receiving inquiries", "A tested contact path before handover"],
  },
];

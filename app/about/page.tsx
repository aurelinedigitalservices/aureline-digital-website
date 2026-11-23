import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About",
  description: "Aureline Digital is an independent Houston web studio building professional websites for local service businesses.",
  openGraph: { title: "About | Aureline Digital", url: "/about" },
};

const values = [
  { t: "Our approach", d: "We start with your customers. What do they search for, what do they need to know before they call, and what makes them trust a business they have never met? The design answers those questions first." },
  { t: "Attention to detail", d: "We review spacing, typography, form behavior and mobile layout screen by screen. A small flaw on your site can read as a small flaw in your service." },
  { t: "Built for local businesses", d: "We are an independent studio in Houston, Texas, focused on the trades and service companies that keep homes, cars and properties looking their best." },
  { t: "Honest and transparent", d: "We are a new studio and we say so. Our portfolio is clearly labeled concept work, our scopes are written down, and we will tell you if a smaller solution fits better." },
];

export default function About() {
  return (
    <>
      <PageIntro tone="peach" title="Professional online experiences for local businesses" text="Aureline Digital is a small independent web design studio based in Houston, Texas." />
      <section className="py-20 md:py-28">
        <div className="wrap grid gap-x-16 gap-y-14 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.t} className="border-t border-ink pt-5">
              <h2 className="text-3xl">{v.t}</h2>
              <p className="mt-3 max-w-lg leading-relaxed text-stone">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import CTA from "@/components/CTA";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Website design, development, landing pages, redesigns, basic SEO setup and quote forms for local service businesses.",
  openGraph: { title: "Services | Aureline Digital", url: "/services" },
};

export default function Services() {
  return (
    <>
      <PageIntro tone="sage" title="Services" text="Clear scope, clear deliverables. Here is exactly what each service includes." />
      <section className="py-20 md:py-28">
        <div className="wrap divide-y divide-ivory-line">
          {services.map((s) => (
            <article key={s.slug} id={s.slug} className="grid gap-8 py-12 first:pt-0 md:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="text-4xl">{s.title}</h2>
                <p className="mt-4 max-w-md leading-relaxed text-stone">{s.summary}</p>
              </div>
              <div>
                <h3 className="text-xl text-sage-deep">What you receive</h3>
                <ul className="mt-4 space-y-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-3 border-b border-ivory-line pb-3"><span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-sage-deep" />{d}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA title="Not sure which service you need?" text="Describe your business and goals. We will recommend the simplest option that fits." />
    </>
  );
}

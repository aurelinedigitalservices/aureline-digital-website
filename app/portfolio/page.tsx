import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProjectMock from "@/components/ProjectMock";
import CTA from "@/components/CTA";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Three fictional concept projects showing how Aureline Digital designs websites for local service businesses.",
  openGraph: { title: "Portfolio | Aureline Digital", url: "/portfolio" },
};

export default function Portfolio() {
  return (
    <>
      <PageIntro tone="powder" title="Portfolio" text="We are a new studio. The projects below are demonstration concepts we designed for fictional businesses to show our approach. They are not real clients." />
      <section className="py-20 md:py-28">
        <div className="wrap space-y-24">
          {projects.map((p, i) => (
            <article key={p.slug} id={p.slug} className="grid scroll-mt-28 items-center gap-12 lg:grid-cols-2">
              <div className={i % 2 ? "lg:order-2" : ""}><ProjectMock p={p} /></div>
              <div>
                <p className="inline-block rounded-full bg-peach-light px-4 py-1.5 text-sm text-peach-deep">Demonstration project. Fictional business.</p>
                <h2 className="mt-5 text-4xl md:text-5xl">{p.title}</h2>
                <p className="mt-2 text-stone">{p.business}</p>
                <p className="mt-5 max-w-lg leading-relaxed">{p.summary}</p>
                <h3 className="mt-8 text-xl">Design decisions</h3>
                <ul className="mt-3 space-y-2 text-stone">
                  {p.decisions.map((d) => <li key={d} className="flex gap-3"><span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-sage-deep" />{d}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA title="Want a concept like this for your business?" />
    </>
  );
}

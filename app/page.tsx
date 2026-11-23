import Link from "next/link";
import CTA from "@/components/CTA";
import ProjectMock from "@/components/ProjectMock";
import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { process as steps } from "@/content/process";
import { industries } from "@/content/site";

const reasons = [
  { t: "Built for local service businesses", d: "Cleaning, detailing, landscaping, pressure washing and painting. Your site is designed around how your customers find and hire you." },
  { t: "Designed for your business", d: "Each site gets its own typography, color and layout, rather than a stock theme with your logo dropped in." },
  { t: "Clear scope and communication", d: "You know what you get, what it costs and when it is due before work starts." },
  { t: "A clear handover", d: "When the site goes live, we walk you through what was delivered, where it is hosted and what to do next." },
];
const tint = ["bg-sage-light", "bg-powder-light", "bg-peach-light"];
const stepDot = ["bg-sage", "bg-powder", "bg-peach", "bg-sage", "bg-powder"];
const pill = ["bg-sage-light", "bg-powder-light", "bg-peach-light"];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="wrap grid items-center gap-12 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="hero-in relative z-10">
            <p className="text-stone">Website design studio in Houston, Texas</p>
            <h1 className="mt-5 text-[2.9rem] leading-[1.02] sm:text-6xl lg:text-[4.75rem]">Digital experiences. Built for growth.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              We design and build refined websites that help cleaning, detailing, landscaping and home service companies look as professional online as they are on the job.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="/contact" className="btn btn-dark">Start Your Project</Link>
              <Link href="/portfolio" className="btn btn-line">Explore Our Work</Link>
            </div>
          </div>
          <div className="hero-art relative mx-auto w-full max-w-xl pb-6 lg:max-w-none" style={{ animation: "rise 1s .25s cubic-bezier(.2,.7,.2,1) both" }}>
            <span aria-hidden="true" className="absolute -right-6 -top-8 h-36 w-36 rounded-full bg-peach sm:h-48 sm:w-48" />
            <span aria-hidden="true" className="absolute -bottom-2 -left-6 h-28 w-28 rounded-full bg-powder sm:h-36 sm:w-36" />
            <span aria-hidden="true" className="absolute left-[38%] top-[-1.75rem] h-14 w-14 rounded-full bg-sage" />
            <div className="relative"><ProjectMock p={projects[0]} /></div>
            <p className="relative mt-4 text-sm text-stone">Concept design for a fictional residential cleaning company.</p>
          </div>
        </div>
      </section>

      <section aria-label="Industries we serve" className="pb-6">
        <ul className="wrap flex flex-wrap justify-center gap-2.5 py-4 sm:gap-3">
          {industries.map((i, n) => <li key={i} className={`rounded-full px-5 py-2 text-[0.95rem] ${pill[n % 3]}`}>{i}</li>)}
        </ul>
      </section>

      <section className="py-20 md:py-32">
        <div className="wrap">
          <h2 className="max-w-2xl text-[2.2rem] leading-tight md:text-5xl">Everything a local business needs to look credible online</h2>
          <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.slug} className={`rounded-3xl p-7 md:p-8 ${tint[i % 3]}`}>
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.summary}</p>
              </article>
            ))}
          </div>
          <Link href="/services" className="btn btn-line mt-10 w-full sm:w-auto">See services and deliverables</Link>
        </div>
      </section>

      <section className="rounded-[2rem] bg-ivory-deep py-20 md:rounded-[3.5rem] md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <h2 className="text-[2.2rem] leading-tight md:text-5xl">Why Aureline Digital</h2>
          <dl className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div key={r.t} className="border-t-2 pt-4" style={{ borderColor: ["#b7cdb5", "#bcd6e8", "#f5cfb8", "#b7cdb5"][i] }}>
                <dt className="font-display text-2xl">{r.t}</dt>
                <dd className="mt-2 leading-relaxed text-stone">{r.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="wrap">
          <h2 className="text-[2.2rem] leading-tight md:text-5xl">Featured concept projects</h2>
          <p className="mt-4 max-w-2xl text-stone">Demonstration work that shows our design approach. These are fictional businesses, not real clients.</p>
          <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((p) => (
              <Link key={p.slug} href={`/portfolio#${p.slug}`} className="group block">
                <ProjectMock p={p} />
                <h3 className="mt-5 text-2xl underline-offset-4 group-hover:underline">{p.title}</h3>
                <p className="mt-1 inline-block rounded-full bg-peach-light px-3 py-0.5 text-sm text-peach-deep">Demonstration project</p>
              </Link>
            ))}
          </div>
          <Link href="/portfolio" className="btn btn-line mt-12 w-full sm:w-auto">View the portfolio</Link>
        </div>
      </section>

      <section className="rounded-[2rem] bg-powder-light py-20 md:rounded-[3.5rem] md:py-32">
        <div className="wrap">
          <h2 className="text-[2.2rem] leading-tight md:text-5xl">Our process</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-5 md:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5 md:block">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-xl ${stepDot[i]}`}>{i + 1}</span>
                <div>
                  <h3 className="text-xl md:mt-5">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CTA />
    </>
  );
}

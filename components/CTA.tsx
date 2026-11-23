import Link from "next/link";
export default function CTA({ title = "Ready for a website that represents your business well?", text = "Tell us about your business. We reply with honest next steps and a clear scope." }: { title?: string; text?: string }) {
  return (
    <section className="py-16 md:py-24">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[2rem] bg-peach-light px-6 py-16 text-center md:rounded-[3rem] md:px-16 md:py-24">
          <span aria-hidden="true" className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-sage md:h-48 md:w-48" />
          <span aria-hidden="true" className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full bg-powder md:h-56 md:w-56" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-[2.1rem] leading-tight sm:text-4xl md:text-6xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">{text}</p>
            <Link href="/contact" className="btn btn-dark mt-9 w-full sm:w-auto">Start Your Project</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const tones = { sage: "bg-sage-light", powder: "bg-powder-light", peach: "bg-peach-light" } as const;
const dots = { sage: ["bg-powder", "bg-peach"], powder: ["bg-peach", "bg-sage"], peach: ["bg-sage", "bg-powder"] } as const;

export default function PageIntro({ title, text, tone = "sage" }: { title: string; text: string; tone?: keyof typeof tones }) {
  return (
    <section className={`relative overflow-hidden rounded-b-[2rem] md:rounded-b-[3.5rem] ${tones[tone]}`}>
      <span aria-hidden="true" className={`absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-80 md:h-64 md:w-64 ${dots[tone][0]}`} />
      <span aria-hidden="true" className={`absolute -bottom-8 right-24 hidden h-24 w-24 rounded-full opacity-80 md:block ${dots[tone][1]}`} />
      <div className="wrap relative py-16 md:py-28">
        <h1 className="max-w-3xl text-[2.6rem] leading-[1.05] sm:text-5xl md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{text}</p>
      </div>
    </section>
  );
}

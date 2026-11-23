import type { Project } from "@/content/projects";

// A drawn concept preview of each demonstration site. Pure CSS/HTML, no images to download.
export default function ProjectMock({ p }: { p: Project }) {
  const { bg, fg, accent, panel } = p.palette;
  return (
    <div role="img" aria-label={`Concept design preview for ${p.title}`} className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_24px_50px_-28px_rgba(43,41,38,.35)]">
      <div className="flex items-center gap-1.5 bg-ivory-deep px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/20" /><span className="h-2.5 w-2.5 rounded-full bg-ink/20" /><span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
      </div>
      <div style={{ background: bg, color: fg }} className="px-6 pb-6 pt-5 md:px-9" aria-hidden="true">
        <div className="flex items-center justify-between text-[0.7rem]">
          <span className="font-display text-base font-semibold">{p.business.replace(" (fictional)", "")}</span>
          <span className="flex gap-4 opacity-70"><span>Services</span><span>About</span><span>Contact</span></span>
        </div>
        <p className="mt-9 max-w-[16rem] font-display text-3xl leading-[1.05] md:text-4xl">{p.headline}</p>
        <span style={{ background: accent, color: bg }} className="mt-5 inline-block rounded-sm px-4 py-2 text-[0.7rem] font-medium">{p.cta}</span>
        <div className="mt-9 grid grid-cols-3 gap-3">
          {p.sections.map((s) => (
            <div key={s} style={{ background: panel }} className="rounded-sm p-3">
              <div style={{ background: accent }} className="mb-5 h-0.5 w-6" />
              <p className="text-[0.7rem] font-medium">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

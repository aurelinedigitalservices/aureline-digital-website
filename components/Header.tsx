"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import Logo from "@/components/Logo";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="sticky top-0 z-50 border-b border-ivory-line bg-ivory/90 backdrop-blur">
      <div className="wrap flex h-[4.25rem] items-center justify-between md:h-20">
        <Link href="/" aria-label="Aureline Digital home"><Logo /></Link>
        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {nav.filter((n) => n.href !== "/contact" && n.href !== "/").map((n) => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}
              className={`text-[0.95rem] underline-offset-8 transition-colors hover:underline hover:decoration-peach hover:decoration-2 ${path === n.href ? "underline decoration-sage decoration-2" : ""}`}>{n.label}</Link>
          ))}
          <Link href="/contact" className="btn btn-dark !min-h-0 !py-2.5">Start Your Project</Link>
        </nav>
        <button type="button" className="-mr-2 flex h-12 w-12 items-center justify-center md:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-ivory-line bg-ivory md:hidden">
          <ul className="wrap py-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={path === n.href ? "page" : undefined}
                  className={`block border-b border-ivory-line py-4 font-display text-3xl font-light ${path === n.href ? "text-sage-deep" : ""}`}>{n.label}</Link>
              </li>
            ))}
          </ul>
          <div className="wrap pb-8 pt-4">
            <Link href="/contact" className="btn btn-dark w-full">Start Your Project</Link>
            <p className="mt-5 text-sm text-stone">{site.tagline}</p>
          </div>
        </nav>
      )}
    </header>
  );
}

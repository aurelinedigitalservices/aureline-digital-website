import Link from "next/link";
import { nav, site } from "@/content/site";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-sage-light">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-ink-soft">{site.tagline}</p>
          <p className="mt-4 text-sm text-stone">{site.location}</p>
        </div>
        <nav aria-label="Footer">
          <p className="font-display text-xl">Explore</p>
          <ul className="mt-4 space-y-1">
            {nav.map((n) => (<li key={n.href}><Link href={n.href} className="inline-block py-1.5 hover:underline">{n.label}</Link></li>))}
          </ul>
        </nav>
        <div>
          <p className="font-display text-xl">Get in touch</p>
          <ul className="mt-4 space-y-1">
            <li><Link href="/contact" className="inline-block py-1.5 hover:underline">Send an inquiry</Link></li>
            {site.email && <li><a href={`mailto:${site.email}`} className="inline-block py-1.5 hover:underline">{site.email}</a></li>}
            {site.phone && <li><a href={`tel:${site.phone}`} className="inline-block py-1.5 hover:underline">{site.phone}</a></li>}
            <li><Link href="/privacy" className="inline-block py-1.5 hover:underline">Privacy policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sage-deep/20">
        <p className="wrap py-6 text-sm text-stone">© {new Date().getFullYear()} {site.name}. Portfolio projects shown are fictional concept work, not real clients.</p>
      </div>
    </footer>
  );
}

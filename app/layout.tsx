import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { site } from "@/content/site";


export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Website design in Houston, Texas`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, locale: "en_US", title: site.name, description: site.tagline, url: "/" },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline },
};
export const viewport: Viewport = { themeColor: "#fcf8ef" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-ivory">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}

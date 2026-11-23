import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ContactPanel from "@/components/ContactPanel";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email Aureline Digital about your website project.",
  openGraph: { title: "Contact | Aureline Digital", url: "/contact" },
};

export default function Contact() {
  return (
    <>
      <PageIntro tone="sage" title="Start your project" text="Send us an email about your business and what you need. We reply with next steps." />
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <ContactPanel />
          <aside className="h-fit rounded-3xl bg-powder-light p-7">
            <h2 className="text-3xl">What to include</h2>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-ink-soft">
              <li>Your name and business name</li>
              <li>The service you need, such as a new website or a redesign</li>
              <li>Your current website address, if you have one</li>
              <li>Your budget range, if you have one in mind</li>
              <li>A few sentences about your business and your goals</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

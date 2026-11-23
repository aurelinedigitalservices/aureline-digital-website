import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Aureline Digital handles information when you visit this website or email us.",
  openGraph: { title: "Privacy policy | Aureline Digital", url: "/privacy" },
};

const sections = [
  { t: "Who we are", d: `${site.name} is a small independent web design business based in ${site.location}. You can reach us at ${site.email}.` },
  { t: "Contacting us", d: "This website does not have a contact form and does not collect or store messages. The contact button opens your own email app with a message already started. Anything you write is sent from your email account to ours only when you press send, and it is handled by your email provider and ours (Gmail)." },
  { t: "Information you send us", d: "If you email us, we receive the information you include, such as your name, email address, business name, website address and project details, along with whatever your email provider attaches to a message. We use it to reply to you and to discuss your project." },
  { t: "Website chat assistant", d: "The optional chat assistant provides answers from a fixed set of general frequently asked questions. The text you type is processed in your browser to choose a response; it is not sent to Aureline Digital, an AI provider, or a chat server, and this site does not save chat messages." },
  { t: "What this website collects", d: "We do not add analytics, advertising or tracking tools to this website, and the site does not set cookies of its own. Like any website, the service that hosts it may automatically receive technical information such as your IP address and browser type when a page loads. We do not control how that service handles its own server records." },
  { t: "Sharing", d: "We do not sell your information. We do not share emails you send us except as needed to respond to you or as required by law." },
  { t: "Your choices", d: `You can ask us to correct or delete information you have emailed to us by writing to ${site.email}, and we will respond to your request.` },
  { t: "Changes to this notice", d: "If this website's practices change, for example if we add a contact form or analytics, we will update this page. The date below shows when it was last updated." },
];

export default function Privacy() {
  return (
    <>
      <PageIntro tone="powder" title="Privacy policy" text="A plain-language description of how this website and our email inquiries handle information." />
      <section className="py-16 md:py-24">
        <div className="wrap max-w-3xl space-y-10 leading-relaxed">
          {sections.map((s) => (
            <div key={s.t}>
              <h2 className="text-3xl">{s.t}</h2>
              <p className="mt-3 text-ink-soft">{s.d}</p>
            </div>
          ))}
          <p className="text-sm text-stone">Last updated: November 22, 2026</p>
        </div>
      </section>
    </>
  );
}

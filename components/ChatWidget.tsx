"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

type Message = { from: "bot" | "visitor"; text: string };

const topics = [
  { label: "What services do you offer?", key: "services" },
  { label: "How does the process work?", key: "process" },
  { label: "How much does a website cost?", key: "pricing" },
  { label: "How long does a project take?", key: "timeline" },
  { label: "How do I get started?", key: "contact" },
];

const answers: Record<string, string> = {
  services: "Aureline Digital creates websites for local service businesses. Services can include new website design, redesigns, landing pages, and basic on-page SEO. The exact scope depends on your goals.",
  process: "We start by learning about your business and goals, then agree on the pages, features, timeline, and price before work begins. After approval, we design and build the site, share it for review, make the agreed revisions, and prepare the handover.",
  pricing: "Pricing depends on the number of pages, features, and project scope. We don't publish a one-size-fits-all quote. Email us about your project and we'll discuss a clear scope and price before any work starts.",
  timeline: "Timing depends on the size of the website, how quickly content and feedback are provided, and the features involved. We'll give you a project timeline after understanding the scope.",
  contact: `The easiest way to get started is to email ${site.email}. Tell us a little about your business, whether you need a new website or a redesign, and what you'd like the site to achieve.`,
  other: `I can answer general questions about our services, process, pricing, and timelines. For anything specific to your project, email ${site.email} and we'll follow up.`,
};

function getAnswer(input: string) {
  const q = input.toLowerCase();
  if (/price|cost|budget|how much|rate|quote/.test(q)) return answers.pricing;
  if (/service|offer|what do you do|website design|redesign/.test(q)) return answers.services;
  if (/process|step|how does|workflow|what happen/.test(q)) return answers.process;
  if (/long|timeline|how soon|when|take/.test(q)) return answers.timeline;
  if (/start|contact|email|hire|book|consult/.test(q)) return answers.contact;
  return answers.other;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hi! I'm the Aureline Digital website assistant. I can answer general questions about our services, process, pricing, and timelines. What would you like to know?" },
  ]);
  const [draft, setDraft] = useState("");

  function ask(question: string) {
    const clean = question.trim();
    if (!clean) return;
    setMessages((current) => [
      ...current,
      { from: "visitor", text: clean },
      { from: "bot", text: getAnswer(clean) },
    ]);
    setDraft("");
  }

  return (
    <div className="fixed bottom-5 left-5 z-[70]">
      {isOpen && (
        <section
          aria-label="Aureline Digital chat assistant"
          className="mb-3 flex h-[min(34rem,calc(100dvh-7rem))] w-[min(23rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-ivory-line bg-ivory shadow-2xl"
        >
          <div className="flex items-center justify-between bg-sage-light px-5 py-4">
            <div>
              <p className="font-display text-xl">Aureline Assistant</p>
              <p className="text-xs text-stone">Instant answers · Automated assistant</p>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close chat" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/70">
              <span aria-hidden="true" className="text-2xl leading-none">×</span>
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${index}-${message.from}`} className={`max-w-[90%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${message.from === "bot" ? "bg-white text-ink" : "ml-auto bg-powder-light text-ink"}`}>
                {message.text}
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {topics.map((topic) => (
                  <button key={topic.key} type="button" onClick={() => ask(topic.label)} className="rounded-full border border-sage-deep/30 bg-white px-3 py-2 text-left text-xs hover:bg-sage-light">
                    {topic.label}
                  </button>
                ))}
              </div>
            )}
            <p className="pt-1 text-xs text-stone">This is an automated FAQ assistant, not a live person or AI service. Please email us for project-specific advice.</p>
          </div>

          <form
            className="flex gap-2 border-t border-ivory-line p-3"
            onSubmit={(event) => { event.preventDefault(); ask(draft); }}
          >
            <label className="sr-only" htmlFor="aureline-chat-input">Ask a question</label>
            <input
              id="aureline-chat-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask a question..."
              className="min-w-0 flex-1 rounded-full border border-ivory-line bg-white px-4 py-3 text-sm outline-none focus:border-sage-deep"
              maxLength={300}
            />
            <button type="submit" disabled={!draft.trim()} className="rounded-full bg-ink px-4 py-3 text-sm text-white disabled:opacity-40">Send</button>
          </form>
          <div className="bg-ivory px-4 pb-3 text-center text-xs text-stone">
            <Link href="/contact" className="underline underline-offset-2">Contact Aureline Digital</Link>
          </div>
        </section>
      )}
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
        className="mr-auto flex min-h-14 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-ink-soft focus-visible:outline-offset-4"
      >
        <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.5-3A7.5 7.5 0 1 1 20 11.5Z" />
          <path d="M8 11h8M8 14h5" />
        </svg>
        {isOpen ? "Close chat" : "Ask us"}
      </button>
    </div>
  );
}

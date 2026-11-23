import { site } from "@/content/site";

const body = [
  "Hi Aureline Digital,",
  "",
  "Name:",
  "Business name:",
  "Website (if any):",
  "Service I'm interested in:",
  "Budget range:",
  "",
  "About my project:",
  "",
].join("\n");

const mailto = `mailto:${site.email}?subject=${encodeURIComponent(site.inquirySubject)}&body=${encodeURIComponent(body)}`;

export default function ContactPanel() {
  return (
    <div className="rounded-3xl bg-sage-light p-7 sm:p-10">
      <h2 className="text-3xl md:text-4xl">Email us about your project</h2>
      <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
        The quickest way to reach us is by email. Tell us about your business, the service you are interested in and what you want your website to do. We read every message and reply by email.
      </p>
      <p className="mt-8 text-sm text-stone">Our email address</p>
      <p className="mt-1 break-all font-display text-2xl sm:text-3xl">
        <a href={`mailto:${site.email}`} className="underline decoration-peach decoration-2 underline-offset-4 hover:decoration-powder-deep">{site.email}</a>
      </p>
      <a href={mailto} className="btn btn-dark mt-8 w-full sm:w-auto">Email Aureline Digital</a>
      <p className="mt-5 max-w-xl text-sm text-stone">
        This button opens your email app with a message already started. Nothing is sent until you press send in your email app. If it does not open, copy the address above and write to us from any email account.
      </p>
    </div>
  );
}

# Aureline Digital website

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 3. The site is configured as a static export: `npm run build` creates the `out/` directory. There is no database, server-side API, contact-form backend, paid AI service, remote font dependency, or required environment variable.

## Contact and chat

- Visitors contact Aureline Digital directly at `aurelinedigitalservices@gmail.com` using a prefilled `mailto:` link. They must press Send in their own email application.
- The floating “Ask us” widget is a **rule-based FAQ assistant**, not a live agent or AI model. It runs in the browser and has no API key or usage fee. It answers general questions about services, process, pricing, and timelines; it directs project-specific inquiries to email.
- If services, pricing, or business practices change, update the FAQ answers in `components/ChatWidget.tsx`.

## Before publishing

The project has been edited and source-reviewed, but the current environment does not guarantee that npm dependencies can be downloaded. Do not treat the project as production-verified until the commands below pass on a computer with internet access.

```bash
npm install
npm run typecheck
npm run lint
npm run build
```

If all commands pass, the static site is in `out/`. Preview it locally with:

```bash
npx serve out
```

## Publish for $0

A free static hosting URL is sufficient; a custom domain is not required.

1. Install the current Node.js LTS release from `https://nodejs.org/`.
2. Open Terminal in the `aureline-digital` project folder and run the four commands above.
3. Create a free GitHub account and a **public or private** repository for this project. Upload the project source and the generated `package-lock.json`.
4. Choose a free static host whose current terms allow commercial use. Cloudflare Pages and Netlify have free offerings; check the current plan limits and terms before connecting the project.
5. Connect the GitHub repository. Set the build command to `npm run build` and the output directory to `out`. Use the framework/static export settings recommended by the host for a Next.js static export.
6. After the host assigns a free URL, update `url` in `content/site.ts` to that exact HTTPS URL (remove the trailing slash), commit the change, and let the host redeploy. This ensures canonical metadata and sitemap URLs use the live address instead of localhost.
7. Open the live URL on a phone and computer. Test navigation, the mobile menu, the chat widget, and the email button.

No payment card, custom domain, Resend account, AI API key, or paid chatbot is required by this project.

## Content and honesty notes

- The portfolio projects are fictional concept demonstrations, not client work.
- Do not add testimonials, client logos, addresses, phone numbers, or performance claims unless they are real and authorized.
- The privacy notice describes the current static website, its mailto contact method, and its FAQ widget. Revisit it if analytics, advertising, embedded third-party tools, or a contact form are added.
- The privacy notice is informational and has not been reviewed by a lawyer.
- The social preview image uses a system font rather than the site's heading font.

## Launch checklist

- [ ] `npm install` completes and creates `package-lock.json`
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes and creates `out/`
- [ ] Host terms allow the intended commercial use on its free plan
- [ ] Live URL is set in `content/site.ts` and redeployed
- [ ] Header, footer, page links, and 404 page work
- [ ] Mobile menu works on a real phone
- [ ] Chat opens, suggested questions work, free-text FAQ replies work, and contact link works
- [ ] Email button opens a new email with the expected address and subject
- [ ] Layout reviewed at narrow mobile, tablet, and desktop widths
- [ ] Privacy notice matches actual practices
- [ ] Portfolio concepts are visibly labeled fictional

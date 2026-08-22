# Techno Hub Technology (PVT) LTD. — Website

Public marketing website for **Techno Hub Technology (PVT) LTD.**, a Sri Lankan
IT products & solutions company based in Anuradhapura.

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS**, deployable to
Vercel with no extra configuration.

---

## Running locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

The contact form works immediately in development — with no API key configured
the `/api/contact` route validates the submission, logs it to the server
console, and returns success. See [Wiring up email](#wiring-up-email) to turn on
real delivery.

### Other scripts

| Script              | What it does                                     |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Start the dev server                             |
| `npm run build`     | Production build                                 |
| `npm start`         | Serve the production build                       |
| `npm run typecheck` | `tsc --noEmit`                                   |

### Adding ESLint

The project ships without a linter. To add the standard Next.js setup:

```bash
npm i -D eslint eslint-config-next @eslint/eslintrc
```

then create `eslint.config.mjs`:

```js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
];
```

and add `"lint": "eslint ."` to `scripts`. (Use the ESLint CLI rather than
`next lint`, which is deprecated in Next.js 15 and removed in 16.)

---

## Wiring up email

The contact form posts JSON to `app/api/contact/route.ts`. That route validates
the payload with the shared Zod schema in `lib/contact-schema.ts`, then sends the
message with [Resend](https://resend.com).

### 1. Create `.env.local`

Copy the template and fill it in:

```bash
cp .env.example .env.local
```

| Variable              | Required | Purpose                                                                 |
| --------------------- | -------- | ----------------------------------------------------------------------- |
| `RESEND_API_KEY`      | for mail | Resend API key. **Without it the route logs instead of sending.**       |
| `CONTACT_FROM_EMAIL`  | no       | Sender address. Must be on a domain verified in Resend. Defaults to `onboarding@resend.dev`, which works for testing. |
| `CONTACT_TO_EMAIL`    | no       | Where enquiries are delivered. Defaults to the company email.           |
| `NEXT_PUBLIC_SITE_URL`| no       | Absolute site URL for canonical + Open Graph tags. Defaults to `https://technohub.lk`. |

### 2. Get a Resend API key

1. Sign up at <https://resend.com> and open **API Keys → Create API Key**.
2. Paste it into `.env.local` as `RESEND_API_KEY`.
3. To send from your own domain, add it under **Domains** and complete the DNS
   records, then set `CONTACT_FROM_EMAIL` to an address on that domain.
4. Restart the dev server.

Submissions now arrive at `CONTACT_TO_EMAIL`, with the sender's address set as
`replyTo` so replying from your inbox goes straight back to the customer.

### 3. On Vercel

Add the same variables under **Project → Settings → Environment Variables**, then
redeploy. Nothing else is required — the project builds and deploys as-is.

### Using Nodemailer / SMTP instead

If you would rather send through Gmail or your hosting provider's SMTP server,
replace the Resend block in `app/api/contact/route.ts` with:

```ts
import nodemailer from "nodemailer"; // npm i nodemailer

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,       // e.g. smtp.gmail.com
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

await transporter.sendMail({
  from: process.env.CONTACT_FROM_EMAIL,
  to: process.env.CONTACT_TO_EMAIL,
  replyTo: email,
  subject: `[Website] ${subject}`,
  text: `${name} (${email}, ${phone})\n\n${message}`,
});
```

For Gmail you must use an [App Password](https://support.google.com/accounts/answer/185833),
not the account password.

---

## Project structure

```
app/
  layout.tsx              Root layout: fonts, metadata, navbar, footer
  page.tsx                Home — single long scrolling page
  products/page.tsx       Products route
  contact/page.tsx        Contact route
  api/contact/route.ts    Contact form handler (Resend)
  not-found.tsx           404
  robots.ts / sitemap.ts  SEO routes
  icon.svg                Favicon
components/
  ui/                     Button, Container, Logo, Icon, Reveal, SectionLabel,
                          Spark, PageHeader
  sections/               Navbar, Hero, WhyChooseUs, Solutions, About,
                          FeaturedProducts, StatsBar, CTABanner, Footer
  products/               ProductCatalog (filter chips + grid)
  contact/                ContactForm (React Hook Form + Zod)
lib/
  company.ts              Single source of truth for all company content
  products.ts             Static product & category catalogue
  contact-schema.ts       Zod schema shared by the form and the API route
  cn.ts                   Classname helper
public/
  hero.svg, products/*    Placeholder imagery (see below)
```

### Editing content

Almost all copy lives in **`lib/company.ts`** (name, tagline, email, address,
phone numbers, hours, mission, vision, why-choose-us list) and
**`lib/products.ts`** (categories and product ranges). Change it there and it
updates everywhere on the site.

> **Privacy note:** the owner's personal phone number and personal email address
> are deliberately not stored anywhere in this repository. Only the business
> email and the three business phone numbers are published.

---

## Replacing the placeholder images

Every file in `public/products/` and `public/hero.svg` is a generated
dark-gradient placeholder panel — correct in tone and aspect ratio, but not a
real product photo. Each usage is marked with a
`// TODO: replace with a real product photo` comment.

To swap them in:

1. Drop real photos into `public/products/` (JPG, PNG or WebP).
2. Update the `image` field for the relevant entries in `lib/products.ts`.
3. Once no SVGs remain, delete `dangerouslyAllowSVG`, `contentDispositionType`
   and `contentSecurityPolicy` from `next.config.mjs` — they exist only so the
   image optimizer will serve the placeholder SVGs.

Recommended aspect ratios: **1:1 or 4:5** for product cards, **4:3** for the hero.

---

## Design system

| Token             | Value                          | Used for                             |
| ----------------- | ------------------------------ | ------------------------------------ |
| `ink-950`         | `#0A0A0A`                      | Page background                      |
| `ink-900`         | `#0D0D0D`                      | Alternating section bands            |
| `ink-800`         | `#151515`                      | Cards and panels                     |
| `brand-600`       | `#E31E24`                      | Buttons, icons, accents              |
| `brand-500`       | `#FF1E2D`                      | Headline highlights, hover states    |
| `font-display`    | Archivo (600–900)              | Headlines, uppercase labels          |
| `font-sans`       | Inter                          | Body copy                            |

Helper classes `display-xl` / `display-lg` / `display-md` (in `app/globals.css`)
provide the fluid, tight-tracking editorial headline scale. `.panel` is the
standard dark card treatment.

### Accessibility

Measured contrast ratios against the backgrounds they are actually used on:

| Combination                   | Ratio  | WCAG            |
| ----------------------------- | ------ | --------------- |
| White on `brand-600` (buttons)| 4.69:1 | AA normal text  |
| White on `ink-950`            | 19.8:1 | AAA             |
| `brand-500` on `ink-950`      | 5.16:1 | AA normal text  |
| `gray-400` on `ink-950`       | 7.80:1 | AAA             |
| `gray-400` on `ink-800`       | 7.19:1 | AA normal text  |
| `brand-400` on `ink-800`      | 5.52:1 | AA normal text  |

`gray-500` (4.02:1) is deliberately **not** used for any informational text — it
remains only as the form-input placeholder colour and one decorative arrow icon.
- Visible focus rings on every interactive element, a skip-to-content link,
  semantic landmarks, `alt` text on all images, and `aria-live` announcements on
  the contact form result and the product filter count.
- All animation is wrapped in `prefers-reduced-motion` guards.

---

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import it at <https://vercel.com/new> — the framework is detected
   automatically, no build settings to change.
3. Add the environment variables from [Wiring up email](#wiring-up-email).
4. Deploy.

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Project overview

Marketing website for **PAVCON**, a residential renovation company based in Canada.

Stack: Next.js 16.2.6 · React 19.2.4 · Tailwind CSS 4 · TypeScript · Resend (email) · Cloudinary (images)

Dev server: `npm run dev` — **do not run this.** The user runs it themselves. Only start the dev server if the user explicitly asks.

# Structure

```
src/
  app/
    page.tsx          — home page (Hero, About, Services, Gallery, Testimonials, ContactCTA)
    layout.tsx        — root layout + Navbar/Footer
    gallery/page.tsx  — full gallery page with category filter
    api/contact/route.ts — POST handler, sends email via Resend
  components/         — one file per section (About, ContactCTA, Footer, Gallery, Hero, Navbar, Services, Testimonials)
  components/ui/      — shared primitives (FormField, SectionHeader)
  lib/
    images.ts         — all Cloudinary image URLs via the cl() helper
    constants.ts      — LOGO_SRC, navLinks
```

# Key patterns

**Images** — all images go through `cl(publicId, width)` in `src/lib/images.ts`. Cloudinary cloud is `dxx7wooza`. Never hard-code image URLs elsewhere; add new images to `images.ts`.

**Nav / branding** — logo and nav links live in `src/lib/constants.ts`. Update there, not inside components.

**Contact API** — `POST /api/contact` accepts `{ firstName, lastName, email, phone, message }` and sends via Resend from `noreply@pavcon.ca` to `Info@pavcon.ca`. Requires `RESEND_API_KEY` env var.

**Tailwind 4** — config is in `postcss.config.mjs`, not `tailwind.config.js`. There is no `tailwind.config.js`.

# Known non-issues

**React DevTools Chrome extension error** — the browser console may log `React instrumentation encountered an error: The children should not have changed if we pass in the same set`. This originates entirely within the React DevTools extension (`chrome-extension://fmkadmapgofadopljbjfkapdkoienihi`), not application code. The server returns 200s normally. Ignore it.

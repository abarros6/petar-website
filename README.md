# PAVCON Website

Marketing website for PAVCON, a residential renovation company based in Canada.

## Stack

- **Framework:** Next.js 16
- **UI:** React 19, Tailwind CSS 4, TypeScript
- **Email:** Resend
- **Images:** Cloudinary

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key for the contact form |

## Project structure

```
src/
  app/
    page.tsx                — home page
    layout.tsx              — root layout
    gallery/page.tsx        — gallery with category filter
    api/contact/route.ts    — contact form POST handler
  components/               — page sections (Hero, About, Services, Gallery, Testimonials, ContactCTA, Navbar, Footer)
  components/ui/            — shared primitives (FormField, SectionHeader)
  lib/
    images.ts               — Cloudinary image URLs
    constants.ts            — logo, nav links
```

## Adding images

All images are served from Cloudinary. Add new entries to `src/lib/images.ts` using the existing `cl(publicId, width)` helper — never hard-code Cloudinary URLs in components.

## Contact form

`POST /api/contact` accepts `{ firstName, lastName, email, phone, message }` and sends an email from `noreply@pavcon.ca` to `Info@pavcon.ca` via Resend.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

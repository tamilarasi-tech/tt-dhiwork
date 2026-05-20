# Deploy on Vercel

**Production domain:** https://www.dhiworksolutions.com

Hosting is [Vercel](https://vercel.com/). The Next.js app serves pages and the contact API (`POST /api/contact`) via [Resend](https://resend.com/).

## Prerequisites

1. [Vercel account](https://vercel.com/signup) linked to your Git provider
2. [Resend](https://resend.com/) account with a verified sending domain
3. Node.js 20+ for local development

## First-time setup

### 1. Import the project

1. In Vercel: **Add New → Project** and import this repository.
2. Set **Root Directory** to `dhiwork-website` (the folder that contains `package.json` and `next.config.ts`).
3. Framework preset should detect **Next.js** automatically.

### 2. Environment variables

In the Vercel project: **Settings → Environment Variables**. Add these for **Production** (and Preview/Development if you use them):

| Variable | Required | Notes |
|----------|----------|--------|
| `RESEND_API_KEY` | Yes | Server only — never enable “Expose to Browser” |
| `RESEND_FROM_EMAIL` | Yes | Verified sender, e.g. `Contact <contact@dhiworksolutions.com>` |
| `CONTACT_NOTIFICATION_EMAIL` | No | Defaults to `info@dhiworksolutions.com` |
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://www.dhiworksolutions.com` |
| `SITE_URL` | Yes (build) | Same URL — used by `next-sitemap` at build time |
| `NEXT_PUBLIC_GA4_ID` | No | Google Analytics 4 |

Local copy:

```bash
cp .env.example .env.local
```

### 3. Deploy

Push to the connected branch, or deploy from the CLI:

```bash
cd dhiwork-website
npx vercel          # preview
npx vercel --prod   # production
```

### 4. Custom domain

1. Vercel → **Settings → Domains**
2. Add `www.dhiworksolutions.com` and `dhiworksolutions.com`
3. Update DNS at your registrar per Vercel’s instructions (usually `CNAME` for `www`, apex redirect or `A`/`ALIAS` for apex)
4. Remove or repoint old **Firebase Hosting** DNS records so traffic goes to Vercel

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Contact form: http://localhost:3000/contact → posts to `/api/contact`.

## Contact form

- **Endpoint:** `POST /api/contact`
- **Body:** `{ name, email, phone?, company?, service, message }`
- **Services:** `sap`, `oracle`, `data`, `ai`
- **Success:** `200` `{ "ok": true }`

Code: `app/api/contact/route.ts`, validation in `lib/contact.ts`.

## Open Graph images

`npm run build` does not run Python on Vercel. Regenerate OG assets locally when branding changes:

```bash
npm run generate:og
git add public/images/og-image.png public/apple-touch-icon.png
```

## Configuration

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel project hints (Next.js) |
| `app/api/contact/route.ts` | Resend email handler |
| `lib/contact.ts` | Form + API validation |
| `next.config.ts` | Trailing slash, images |
| `next-sitemap.config.js` | Sitemap + robots.txt |

## Migrating from Firebase Hosting

1. Deploy to Vercel and confirm the preview URL and contact form work.
2. Add production domain in Vercel and switch DNS.
3. After cutover, you can disable or delete the Firebase Hosting site `tt-dhiwork-prod` in the Firebase console.

# Firebase Hosting (static export)

**Project:** `tt-dhiwork-prod`  
**Production domain:** https://www.dhiworksolutions.com  
**Firebase site:** `tt-dhiwork-prod` → https://tt-dhiwork-prod.web.app

## Prerequisites

1. [Firebase CLI](https://firebase.google.com/docs/cli): `npm install -g firebase-tools` (or use the project devDependency via `npx firebase`)
2. Login: `firebase login`
3. Access to the `tt-dhiwork-prod` Firebase project

## Build & deploy

From `dhiwork-website/`:

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_CONTACT_API_URL after functions deploy
SITE_URL=https://www.dhiworksolutions.com npm run deploy
```

This runs `next build` (static export to `out/`), generates `sitemap.xml` / `robots.txt` via `next-sitemap`, then deploys to Firebase Hosting.

Deploy hosting only (after a local build):

```bash
firebase deploy --only hosting:tt-dhiwork-prod
```

Preview channel:

```bash
npm run deploy:preview
```

## Contact form (Firebase Function + Resend)

The contact form posts to `NEXT_PUBLIC_CONTACT_API_URL` (not `/api/contact` — static hosting has no Next.js API routes).

1. Create a [Resend](https://resend.com) API key and verify your sending domain.
2. Set Firebase secrets:

```bash
firebase functions:secrets:set RESEND_API_KEY
firebase functions:secrets:set CONTACT_TO_EMAIL   # e.g. info@dhiworksolutions.com
firebase functions:secrets:set CONTACT_FROM_EMAIL # e.g. DhiWork <noreply@dhiworksolutions.com>
```

3. Deploy the function:

```bash
cd functions && npm install && cd ..
firebase deploy --only functions:contact
```

4. Copy the function URL into `.env.local`:

```bash
NEXT_PUBLIC_CONTACT_API_URL=https://<region>-tt-dhiwork-prod.cloudfunctions.net/contact
NEXT_PUBLIC_SITE_URL=https://www.dhiworksolutions.com
```

5. Rebuild and redeploy hosting so the env var is baked into the static bundle.

## Configuration

| File | Purpose |
|------|---------|
| `lib/site.ts` | Canonical domain + contact email/phone |
| `lib/seo.ts` | Metadata, Open Graph, Twitter cards |
| `next.config.ts` | `output: 'export'`, unoptimized images |
| `next-sitemap.config.js` | SEO sitemap + robots |
| `firebase.json` | Hosting + Cloud Functions |
| `.firebaserc` | Default project `tt-dhiwork-prod` |

Override canonical URL for sitemap/robots at build time:

```bash
SITE_URL=https://www.dhiworksolutions.com npm run build
```

## Custom domain

In [Firebase Console](https://console.firebase.google.com/project/tt-dhiwork-prod/hosting), connect `www.dhiworksolutions.com` (and apex redirect if needed). Always build with `SITE_URL=https://www.dhiworksolutions.com`.

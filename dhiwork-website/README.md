# DhiWork Solutions website

Next.js marketing site for [dhiworksolutions.com](https://www.dhiworksolutions.com), deployed on **Vercel** with a Resend-powered contact form.

## Quick start

```bash
npm install
cp .env.example .env.local   # Resend + site URL
npm run dev
```

Open http://localhost:3000

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build (+ sitemap) |
| `npm run start` | Run production build locally |
| `npm run generate:og` | Regenerate OG / touch icons (Python) |
| `npm run lint` | ESLint |

## Deployment

See **[DEPLOY.md](./DEPLOY.md)** for Vercel setup, environment variables, custom domain, and Resend configuration.

import type { Metadata } from 'next'
import { PRODUCTION_SITE_URL } from '@/lib/site'

/** Production site URL — override at build time via SITE_URL or NEXT_PUBLIC_SITE_URL */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  PRODUCTION_SITE_URL

export const SITE_NAME = 'DhiWork Solutions LLC'

/** 1200×630 Open Graph share card */
export const OG_IMAGE = {
  path: '/images/og-image.png',
  width: 1200,
  height: 630,
  alt: 'DhiWork Solutions LLC — Enterprise Consulting',
  type: 'image/png' as const,
}

export const LOGO_IMAGE = {
  path: '/logo.png',
  width: 1500,
  height: 500,
  alt: 'DhiWork Solutions LLC logo',
  type: 'image/png' as const,
}

export const TWITTER_CREATOR = '@dhiwork'

/** Path with trailing slash (e.g. `/about/`) for relative meta tags. */
export function sitePath(path: string): string {
  let normalized = path.startsWith('/') ? path : `/${path}`
  if (normalized !== '/' && !normalized.endsWith('/')) {
    normalized = `${normalized}/`
  }
  return normalized
}

/** Absolute URL for JSON-LD and other structured data. */
export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, '')
  return `${base}${sitePath(path)}`
}

const defaultKeywords = [
  'SAP consulting',
  'Oracle consulting',
  'data engineering',
  'AI solutions',
  'enterprise consulting',
]

export interface PageMetadataOptions {
  title: string
  description: string
  /** Path only, e.g. `/about` */
  path: string
  keywords?: string | string[]
  openGraphTitle?: string
  openGraphDescription?: string
}

/** Per-route metadata with relative Open Graph + Twitter image URLs. */
export function createPageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    keywords,
    openGraphTitle,
    openGraphDescription,
  } = options

  const pagePath = sitePath(path)
  const ogTitle = openGraphTitle ?? title
  const ogDescription = openGraphDescription ?? description

  return {
    title: { absolute: title },
    description,
    keywords: keywords ?? defaultKeywords,
    alternates: {
      canonical: pagePath,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      url: pagePath,
      siteName: SITE_NAME,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      creator: TWITTER_CREATOR,
    },
  }
}

export const rootMetadata: Metadata = {
  title: {
    default:
      'DhiWork Solutions LLC | Enterprise Consulting for SAP, Oracle & AI',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Expert enterprise consulting for SAP, Oracle, Data Engineering & Generative AI. Certified professionals delivering digital transformation solutions for business growth.',
  keywords: defaultKeywords,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Enterprise Consulting`,
    description:
      'Expert consulting for SAP, Oracle, Data Engineering & Generative AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'Expert enterprise consulting for SAP, Oracle, Data & AI',
    creator: TWITTER_CREATOR,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

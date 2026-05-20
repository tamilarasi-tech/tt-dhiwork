import { absoluteUrl, LOGO_IMAGE, SITE_NAME, SITE_URL } from '@/lib/seo'
import { SITE_CONTACT } from '@/lib/site'

export interface SchemaMarkup {
  '@context': string
  '@type': string
  [key: string]: unknown
}

export function generateOrganizationSchema(): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl(LOGO_IMAGE.path),
    description:
      'Enterprise consulting and technology solutions for SAP, Oracle, Data Engineering, and AI',
    sameAs: [
      'https://www.linkedin.com/company/dhiwork',
      'https://twitter.com/dhiwork',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: SITE_CONTACT.email,
    },
  }
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string
): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateArticleSchema(
  title: string,
  description: string,
  author: string,
  datePublished: string,
  dateModified?: string
): SchemaMarkup {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(LOGO_IMAGE.path),
      },
    },
  }
}

export function renderSchema(schema: SchemaMarkup): string {
  return JSON.stringify(schema)
}

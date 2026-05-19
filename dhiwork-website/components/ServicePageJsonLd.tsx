import { JsonLd } from '@/components/JsonLd'
import { absoluteUrl } from '@/lib/seo'
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
  type SchemaMarkup,
} from '@/lib/schema'

interface ServicePageJsonLdProps {
  serviceName: string
  serviceDescription: string
  path: string
  breadcrumbItems: Array<{ name: string; path: string }>
  faqs: Array<{ question: string; answer: string }>
}

export function ServicePageJsonLd({
  serviceName,
  serviceDescription,
  path,
  breadcrumbItems,
  faqs,
}: ServicePageJsonLdProps) {
  const pageUrl = absoluteUrl(path)
  const breadcrumbs = breadcrumbItems.map(item => ({
    name: item.name,
    url: absoluteUrl(item.path),
  }))

  const schemas: SchemaMarkup[] = [
    generateServiceSchema(serviceName, serviceDescription, pageUrl),
    generateBreadcrumbSchema(breadcrumbs),
    generateFAQSchema(faqs),
  ]

  return <JsonLd schema={schemas} />
}

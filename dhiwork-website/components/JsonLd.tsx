import { renderSchema, type SchemaMarkup } from '@/lib/schema'

interface JsonLdProps {
  schema: SchemaMarkup | SchemaMarkup[]
}

export function JsonLd({ schema }: JsonLdProps) {
  const data = Array.isArray(schema) ? schema : [schema]
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data.length === 1 ? data[0] : data) }}
    />
  )
}

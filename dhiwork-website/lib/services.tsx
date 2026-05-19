import { BrandIcon } from '@/components/BrandIcon/BrandIcon'
import { getServiceIconName } from '@/lib/icons'

export interface Service {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

export const SERVICES: Service[] = [
  {
    icon: <BrandIcon name="sap-services" size="lg" label="SAP Services" />,
    title: 'SAP Services',
    description:
      'Enterprise resource planning solutions for streamlined operations, improved efficiency, and data-driven decision making across your organization.',
    href: '/services/sap-services',
  },
  {
    icon: <BrandIcon name="oracle-services" size="lg" label="Oracle Services" />,
    title: 'Oracle Services',
    description:
      'Comprehensive database and cloud solutions designed to maximize performance, security, and scalability for mission-critical applications.',
    href: '/services/oracle-services',
  },
  {
    icon: <BrandIcon name="data-engineering" size="lg" label="Data Engineering" />,
    title: 'Data Engineering',
    description:
      'Advanced data pipeline architecture and ETL solutions that transform raw data into actionable intelligence for strategic business insights.',
    href: '/services/data-engineering',
  },
  {
    icon: <BrandIcon name="gen-ai-solutions" size="lg" label="Gen AI Solutions" />,
    title: 'Gen AI Solutions',
    description:
      'Cutting-edge artificial intelligence implementation leveraging large language models and machine learning for competitive advantage.',
    href: '/services/gen-ai-solutions',
  },
]

export function relatedServiceIcon(href: string) {
  return (
    <BrandIcon
      name={getServiceIconName(href)}
      size="lg"
      label={SERVICES.find((s) => s.href === href)?.title ?? 'Service'}
    />
  )
}

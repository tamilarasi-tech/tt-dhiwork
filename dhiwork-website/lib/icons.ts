/** Flaticon assets in public/svgs */
export const ICON_PATHS = {
  // Main services
  'sap-services': '/svgs/sap-services.svg',
  'oracle-services': '/svgs/oracle-services.svg',
  'data-engineering': '/svgs/data-engineering.svg',
  'gen-ai-solutions': '/svgs/gen-ai-solutions.svg',

  // Technical capabilities (reused on service pages)
  'analytics-chart': '/svgs/data-analytics.svg',
  'data-flow': '/svgs/process-diagram.svg',
  'enterprise-network': '/svgs/networking.svg',
  'system-integration': '/svgs/integration.svg',
  'security-shield': '/svgs/cyber-security.svg',
  'cloud-infrastructure': '/svgs/cloud-server.svg',
  'ai-brain': '/svgs/gen-ai-solutions.svg',

  // Certifications, stats, why-choose
  'check-circle': '/svgs/checkmarks.svg',
  award: '/svgs/premium-badge.svg',
  cloud: '/svgs/cloud-server.svg',
  lock: '/svgs/padlock.svg',
  bolt: '/svgs/flash.svg',
  target: '/svgs/target.svg',
  briefcase: '/svgs/briefcase.svg',
  'chart-growth': '/svgs/increase.svg',
  star: '/svgs/trophy.svg',
  database: '/svgs/database.svg',
  trophy: '/svgs/trophy.svg',

  // Contact
  phone: '/svgs/telephone-symbol-button.svg',
  email: '/svgs/mail.svg',
  diagram: '/svgs/diagram.svg',
  location: '/svgs/gps.svg',

  // About / values
  'team-management': '/svgs/team-management.svg',
  idea: '/svgs/idea.svg',
  deal: '/svgs/deal.svg',
} as const

export type IconName = keyof typeof ICON_PATHS

export const ICON_SIZES = {
  sm: 32,
  md: 48,
  lg: 56,
} as const

export type IconSize = keyof typeof ICON_SIZES

/** Map service routes to branded icons */
export const SERVICE_ICON_BY_HREF: Record<string, IconName> = {
  '/services/sap-services': 'sap-services',
  '/services/oracle-services': 'oracle-services',
  '/services/data-engineering': 'data-engineering',
  '/services/gen-ai-solutions': 'gen-ai-solutions',
}

export function getServiceIconName(href: string): IconName {
  return SERVICE_ICON_BY_HREF[href] ?? 'enterprise-network'
}

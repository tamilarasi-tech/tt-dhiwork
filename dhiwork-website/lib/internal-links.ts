export interface PageLink {
  href: string
  title: string
  description?: string
  category: 'service' | 'page' | 'resource'
}

export const INTERNAL_LINKS: Record<string, PageLink> = {
  // Services
  sapServices: {
    href: '/services/sap-services',
    title: 'SAP Services',
    description: 'Enterprise resource planning solutions',
    category: 'service',
  },
  oracleServices: {
    href: '/services/oracle-services',
    title: 'Oracle Services',
    description: 'Database and cloud solutions',
    category: 'service',
  },
  dataEngineering: {
    href: '/services/data-engineering',
    title: 'Data Engineering',
    description: 'Advanced data pipelines and analytics',
    category: 'service',
  },
  genAISolutions: {
    href: '/services/gen-ai-solutions',
    title: 'Gen AI Solutions',
    description: 'Artificial intelligence implementation',
    category: 'service',
  },

  // Pages
  home: {
    href: '/',
    title: 'Home',
    category: 'page',
  },
  about: {
    href: '/about',
    title: 'About Us',
    description: 'Learn about DhiWork Solutions LLC',
    category: 'page',
  },
  contact: {
    href: '/contact',
    title: 'Contact',
    description: 'Get in touch with our team',
    category: 'page',
  },
}

export function getLinkByKey(key: keyof typeof INTERNAL_LINKS): PageLink {
  return INTERNAL_LINKS[key]
}

export function getLinkHref(key: keyof typeof INTERNAL_LINKS): string {
  return INTERNAL_LINKS[key].href
}

export function getServiceLinks(): PageLink[] {
  return Object.values(INTERNAL_LINKS).filter(link => link.category === 'service')
}

export function getPageLinks(): PageLink[] {
  return Object.values(INTERNAL_LINKS).filter(link => link.category === 'page')
}

export function getRelatedServices(
  excludeService?: keyof typeof INTERNAL_LINKS
): PageLink[] {
  return getServiceLinks().filter(
    service =>
      !excludeService ||
      INTERNAL_LINKS[excludeService].href !== service.href
  )
}

export function buildBreadcrumb(
  path: string
): Array<{ label: string; href: string }> {
  const segments = path.split('/').filter(Boolean)
  const breadcrumb: Array<{ label: string; href: string }> = [
    { label: 'Home', href: '/' },
  ]

  let currentPath = ''
  for (const segment of segments) {
    currentPath += `/${segment}`
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    breadcrumb.push({ label, href: currentPath })
  }

  return breadcrumb
}

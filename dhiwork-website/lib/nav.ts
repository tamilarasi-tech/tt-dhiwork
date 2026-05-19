export interface NavLink {
  label: string
  href: string
}

export const SERVICE_NAV_LINKS: NavLink[] = [
  { label: 'SAP Services', href: '/services/sap-services' },
  { label: 'Oracle Services', href: '/services/oracle-services' },
  { label: 'Data Engineering', href: '/services/data-engineering' },
  { label: 'Gen AI Solutions', href: '/services/gen-ai-solutions' },
]

export const PRIMARY_NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
]

import { getServiceLinks, INTERNAL_LINKS } from '@/lib/internal-links'
import { SITE_CONTACT } from '@/lib/site'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Services',
    links: getServiceLinks().map(link => ({
      label: link.title,
      href: link.href,
    })),
  },
  {
    title: 'Quick Links',
    links: [
      { label: INTERNAL_LINKS.about.title, href: INTERNAL_LINKS.about.href },
      { label: INTERNAL_LINKS.contact.title, href: INTERNAL_LINKS.contact.href },
    ],
  },
]

export const FOOTER_COMPANY_INFO = {
  email: SITE_CONTACT.email,
  address: SITE_CONTACT.address,
}

export const FOOTER_COPYRIGHT = '© 2026 DhiWork Solutions LLC. All rights reserved.'

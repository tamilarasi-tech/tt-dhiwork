import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'
import styles from './Footer.module.scss'

interface FooterLink {
  label: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  sections: FooterSection[]
  companyInfo?: {
    email: string
    address: string
  }
  copyright: string
}

export function Footer({ sections, companyInfo, copyright }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.mainGrid}>
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logoLink} aria-label="DhiWork Solutions LLC home">
              <Logo variant="footer" />
            </Link>
            <p className={styles.tagline}>
              Strategic SAP, Oracle, data, and AI solutions for enterprise transformation.
            </p>
            <Link href="/contact" className={styles.contactCta}>
              Contact Us
            </Link>
          </div>

          {sections.map((section, index) => (
            <div key={index} className={styles.linkColumn}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <ul className={styles.links}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {companyInfo && (
            <div className={styles.contactColumn}>
              <h3 className={styles.sectionTitle}>Contact</h3>
              <ul className={styles.contactList}>
                <li>
                  <span className={styles.label}>Email</span>
                  <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                </li>
                <li>
                  <span className={styles.label}>Address</span>
                  <span className={styles.address}>{companyInfo.address}</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

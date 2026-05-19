'use client'

import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'
import styles from './DesktopHeader.module.scss'

import { SERVICE_NAV_LINKS } from '@/lib/nav'

export function DesktopHeader() {
  return (
    <header className={styles.desktopHeader}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Logo variant="header" priority />
        </Link>

        {/* Main Navigation Menu */}
        <nav className={styles.mainNav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>

          {/* Services Dropdown */}
          <div className={styles.dropdown}>
            <button type="button" className={styles.navLink}>
              Services <span className={styles.chevron}>▼</span>
            </button>
            <div className={styles.dropdownMenu}>
              {SERVICE_NAV_LINKS.map(service => (
                <Link key={service.href} href={service.href}>
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className={styles.navLink}>
            About
          </Link>

          <Link href="/contact" className={`${styles.navLink} ${styles.ctaButton}`}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}

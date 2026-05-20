'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'
import { SERVICE_NAV_LINKS } from '@/lib/nav'
import { SITE_CONTACT } from '@/lib/site'
import styles from './MobileHeader.module.scss'

export function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return

    const scrollY = window.scrollY
    const { body, documentElement } = document

    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    documentElement.style.overflow = 'hidden'

    return () => {
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.style.overflow = ''
      documentElement.style.overflow = ''
      window.scrollTo(0, scrollY)
    }
  }, [menuOpen])

  return (
    <header className={styles.mobileHeader}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Logo variant="header" priority />
        </Link>

        <div className={styles.rightControls}>
          <button
            type="button"
            className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>

      <nav className={`${styles.sideNav} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.navContent}>
          <Link
            href="/"
            className={styles.navLink}
            onClick={closeMenu}
          >
            Home
          </Link>

          {SERVICE_NAV_LINKS.map(service => (
            <Link
              key={service.href}
              href={service.href}
              className={styles.navLink}
              onClick={closeMenu}
            >
              {service.label}
            </Link>
          ))}

          <Link
            href="/about"
            className={styles.navLink}
            onClick={closeMenu}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`${styles.navLink} ${styles.contactCta}`}
            onClick={closeMenu}
          >
            Contact Us
          </Link>

          <div className={styles.footerLinks}>
            <a href={`mailto:${SITE_CONTACT.email}`} className={styles.footerLink}>
              ✉️ {SITE_CONTACT.email}
            </a>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.overlay} onClick={closeMenu} aria-hidden />
      )}
    </header>
  )
}

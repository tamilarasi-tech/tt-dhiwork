import React from 'react'
import styles from './Section.module.scss'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: 'default' | 'light' | 'dark'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Section({
  children,
  variant = 'default',
  padding = 'lg',
  className,
  ...props
}: SectionProps) {
  const sectionClass = `
    ${styles.section}
    ${styles[variant]}
    ${styles[`padding-${padding}`]}
    ${className || ''}
  `.trim().replace(/\s+/g, ' ')

  return (
    <section className={sectionClass} {...props}>
      {children}
    </section>
  )
}

import { Button } from '../Button'
import styles from './HeroSection.module.scss'

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subtitle}>{subtitle}</p>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.description}>{description}</p>}

          {(primaryCTA || secondaryCTA) && (
            <div className={styles.ctaGroup}>
              {primaryCTA && (
                <Button variant="primary" size="lg" asLink href={primaryCTA.href}>
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  variant="secondary"
                  size="lg"
                  asLink
                  href={secondaryCTA.href}
                  className={styles.secondaryCta}
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

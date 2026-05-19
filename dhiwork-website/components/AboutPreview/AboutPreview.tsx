import Link from 'next/link'
import { BrandIcon } from '@/components/BrandIcon/BrandIcon'
import styles from './AboutPreview.module.scss'
import { Button } from '../Button/Button'

interface AboutPreviewProps {
  title: string
  subtitle: string
  description: string
  highlights?: string[]
}

export function AboutPreview({
  title,
  subtitle,
  description,
  highlights,
}: AboutPreviewProps) {
  return (
    <section className={styles.preview}>
      <div className={styles.content}>
        <p className={styles.subtitle}>{subtitle}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        {highlights && highlights.length > 0 && (
          <ul className={styles.highlights}>
            {highlights.map((highlight, index) => (
              <li key={index} className={styles.highlightItem}>
                <span className={styles.iconSlot} aria-hidden="true">
                  <BrandIcon name="check-circle" size="sm" />
                </span>
                <span className={styles.highlightText}>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.cta}>
          <Button asLink href="/about" variant="primary">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  )
}

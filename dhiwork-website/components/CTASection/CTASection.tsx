import { Button } from '../Button/Button'
import styles from './CTASection.module.scss'

interface CTASectionProps {
  title: string
  description: string
  primaryButtonLabel: string
  primaryButtonHref: string
  secondaryButtonLabel?: string
  secondaryButtonHref?: string
}

export function CTASection({
  title,
  description,
  primaryButtonLabel,
  primaryButtonHref,
  secondaryButtonLabel,
  secondaryButtonHref,
}: CTASectionProps) {
  return (
    <section className={styles.cta}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.buttons}>
          <Button asLink href={primaryButtonHref} variant="primary" size="lg">
            {primaryButtonLabel}
          </Button>
          {secondaryButtonLabel && secondaryButtonHref && (
            <Button
              asLink
              href={secondaryButtonHref}
              variant="secondary"
              size="lg"
              className={styles.outlineLight}
            >
              {secondaryButtonLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

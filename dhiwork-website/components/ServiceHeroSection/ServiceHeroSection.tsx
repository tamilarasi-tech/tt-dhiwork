import styles from './ServiceHeroSection.module.scss'

interface ServiceHeroSectionProps {
  title: string
  subtitle: string
  description: string
}

export function ServiceHeroSection({
  title,
  subtitle,
  description,
}: ServiceHeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.subtitle}>{subtitle}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  )
}

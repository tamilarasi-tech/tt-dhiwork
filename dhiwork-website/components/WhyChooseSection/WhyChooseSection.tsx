import styles from './WhyChooseSection.module.scss'

interface Reason {
  icon: React.ReactNode
  title: string
  description: string
}

interface WhyChooseSectionProps {
  title: string
  subtitle: string
  reasons: Reason[]
}

export function WhyChooseSection({
  title,
  subtitle,
  reasons,
}: WhyChooseSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.subtitle}>{subtitle}</p>
          <h2 className={styles.title}>{title}</h2>
        </header>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.icon}>{reason.icon}</div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

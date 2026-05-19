import styles from './ProcessTimeline.module.scss'

interface Step {
  number: number
  title: string
  description: string
}

interface ProcessTimelineProps {
  title: string
  subtitle: string
  steps: Step[]
}

export function ProcessTimeline({
  title,
  subtitle,
  steps,
}: ProcessTimelineProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.subtitle}>{subtitle}</p>
          <h2 className={styles.title}>{title}</h2>
        </header>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

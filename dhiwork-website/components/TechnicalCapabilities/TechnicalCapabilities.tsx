import styles from './TechnicalCapabilities.module.scss'

interface Capability {
  icon: React.ReactNode
  title: string
  description: string
}

interface TechnicalCapabilitiesProps {
  title: string
  description: string
  capabilities: Capability[]
}

export function TechnicalCapabilities({
  title,
  description,
  capabilities,
}: TechnicalCapabilitiesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </header>

        <div className={styles.grid}>
          {capabilities.map((capability, index) => (
            <div key={index} className={styles.capability}>
              <div className={styles.icon}>{capability.icon}</div>
              <h3 className={styles.capTitle}>{capability.title}</h3>
              <p className={styles.capDescription}>{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

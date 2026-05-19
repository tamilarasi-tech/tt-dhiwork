import { ServiceCardGrid } from '../ServiceCardGrid/ServiceCardGrid'
import styles from './RelatedServicesCards.module.scss'

interface RelatedService {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

interface RelatedServicesCardsProps {
  services: RelatedService[]
}

export function RelatedServicesCards({ services }: RelatedServicesCardsProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>Related Services</h2>
          <p className={styles.description}>
            Explore complementary solutions that enhance your enterprise strategy
          </p>
        </header>

        <ServiceCardGrid services={services} contained={false} columns={3} />
      </div>
    </section>
  )
}

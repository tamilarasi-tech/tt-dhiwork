import styles from './ServiceCardGrid.module.scss'
import { ServiceCard } from '../ServiceCard/ServiceCard'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

interface ServiceCardGridProps {
  services: Service[]
  contained?: boolean
  columns?: 3 | 4
}

export function ServiceCardGrid({
  services,
  contained = true,
  columns = 4,
}: ServiceCardGridProps) {
  return (
    <div
      className={`${styles.grid} ${contained ? styles.contained : ''} ${
        columns === 3 ? styles.cols3 : styles.cols4
      }`}
    >
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          href={service.href}
        />
      ))}
    </div>
  )
}

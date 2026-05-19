import Link from 'next/link'
import styles from './ServiceCard.module.scss'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.link}>
        Learn more <span>→</span>
      </div>
    </Link>
  )
}

import Link from 'next/link'
import styles from './Breadcrumb.module.scss'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <div className={styles.container}>
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {index < items.length - 1 ? (
              <>
                <Link href={item.href}>{item.label}</Link>
                <span className={styles.separator}>/</span>
              </>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
      </div>
    </nav>
  )
}

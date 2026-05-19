import { ICON_PATHS, ICON_SIZES, type IconName, type IconSize } from '@/lib/icons'
import styles from './BrandIcon.module.scss'

interface BrandIconProps {
  name: IconName
  size?: IconSize
  className?: string
  /** Accessible label; omit when parent provides context */
  label?: string
}

export function BrandIcon({
  name,
  size = 'md',
  className,
  label,
}: BrandIconProps) {
  const px = ICON_SIZES[size]
  const src = ICON_PATHS[name]

  return (
    <span
      className={`${styles.wrapper} ${className ?? ''}`}
      style={{ width: px, height: px }}
      data-icon={name}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      {/* Native img: Flaticon SVGs use large width/height attrs; Next/Image won't constrain them */}
      <img
        src={src}
        alt={label ?? ''}
        width={px}
        height={px}
        className={styles.icon}
        decoding="async"
        aria-hidden={label ? undefined : true}
      />
    </span>
  )
}

import Image from 'next/image'
import { LOGO } from '@/lib/logo'
import styles from './Logo.module.scss'

interface LogoProps {
  variant?: 'header' | 'footer'
  /** Fixed display height in px; width scales from aspect ratio */
  height?: number
  priority?: boolean
  className?: string
}

export function Logo({
  variant = 'header',
  height,
  priority = false,
  className,
}: LogoProps) {
  return (
    <Image
      src={LOGO.src}
      alt={LOGO.alt}
      width={LOGO.width}
      height={LOGO.height}
      priority={priority}
      className={`${styles.logo} ${styles[variant]} ${className ?? ''}`}
      style={
        height !== undefined
          ? { height: `${height}px`, width: 'auto' }
          : undefined
      }
    />
  )
}

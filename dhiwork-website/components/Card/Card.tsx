import React from 'react'
import styles from './Card.module.scss'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'sm' | 'md' | 'lg'
  hover?: boolean
  children: React.ReactNode
}

export function Card({
  variant = 'default',
  padding = 'md',
  hover = false,
  className,
  children,
  ...props
}: CardProps) {
  const cardClass = `
    ${styles.card}
    ${styles[variant]}
    ${styles[`padding-${padding}`]}
    ${hover ? styles.hover : ''}
    ${className || ''}
  `.trim().replace(/\s+/g, ' ')

  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  )
}

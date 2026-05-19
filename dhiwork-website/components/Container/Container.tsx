import React from 'react'
import styles from './Container.module.scss'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={`${styles.container} ${className || ''}`} {...props}>
      {children}
    </div>
  )
}

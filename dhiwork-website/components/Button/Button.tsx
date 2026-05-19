import React from 'react'
import Link from 'next/link'
import styles from './Button.module.scss'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  className?: string
}

interface ButtonElementProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> {
  asLink?: false
}

interface LinkButtonProps extends BaseButtonProps {
  asLink: true
  href: string
}

type ButtonProps = ButtonElementProps | LinkButtonProps

const ButtonContent = ({
  children,
  icon,
  iconPosition = 'left',
  loading,
}: Pick<BaseButtonProps, 'children' | 'icon' | 'iconPosition' | 'loading'>) => (
  <>
    <span className={styles.content}>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </span>
    {loading && <span className={styles.spinner} />}
  </>
)

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    loading = false,
    icon,
    iconPosition = 'left',
    className,
  } = props

  const buttonClass = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${fullWidth ? styles.fullWidth : ''}
    ${loading ? styles.loading : ''}
    ${className || ''}
  `.trim().replace(/\s+/g, ' ')

  if ('asLink' in props && props.asLink) {
    return (
      <Link href={props.href} className={buttonClass}>
        <ButtonContent
          children={children}
          icon={icon}
          iconPosition={iconPosition}
          loading={loading}
        />
      </Link>
    )
  }

  const { disabled, ...restProps } = props as ButtonElementProps

  return (
    <button
      className={`${buttonClass} ${disabled ? styles.disabled : ''}`}
      disabled={disabled || loading}
      {...restProps}
    >
      <ButtonContent
        children={children}
        icon={icon}
        iconPosition={iconPosition}
        loading={loading}
      />
    </button>
  )
}

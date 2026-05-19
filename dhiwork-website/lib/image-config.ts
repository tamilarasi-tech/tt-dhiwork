export const IMAGE_SIZES = {
  thumbnail: 150,
  small: 300,
  medium: 600,
  large: 1200,
  xlarge: 1920,
} as const

export const RESPONSIVE_SIZES = {
  mobile: '(max-width: 640px) 100vw',
  tablet: '(max-width: 1024px) 100vw',
  desktop: '1200px',
} as const

export const DEVICE_SIZES = [320, 640, 768, 1024, 1280, 1536, 1920] as const

export const IMAGE_QUALITY = {
  low: 60,
  medium: 75,
  high: 85,
  production: 95,
} as const

export const BLUR_PLACEHOLDER =
  'data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  quality?: number
  sizes?: string
  className?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down'
  objectPosition?: string
}

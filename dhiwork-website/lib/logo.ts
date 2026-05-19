/** Production logo asset (DhiWork Solutions LLC) — wide rectangle; size by height only */
export const LOGO = {
  src: '/logo.png',
  alt: 'DhiWork Solutions LLC',
  /** Intrinsic dimensions for Next.js aspect ratio (do not use for layout width) */
  width: 1024,
  height: 682,
} as const

/** Default rendered heights (px); width follows aspect ratio automatically */
export const LOGO_HEIGHT = {
  headerMobile: 40,
  headerDesktop: 52,
  footer: 48,
} as const

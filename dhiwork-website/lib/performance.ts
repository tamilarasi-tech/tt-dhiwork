// Performance optimization settings for Core Web Vitals

export const PERFORMANCE_CONFIG = {
  // Image optimization
  IMAGE: {
    QUALITY: 85,
    SIZES: {
      small: 300,
      medium: 600,
      large: 1200,
      xlarge: 1920,
    },
    FORMAT: ['webp', 'jpeg'], // WebP with JPEG fallback
  },

  // Font optimization
  FONT: {
    DISPLAY: 'swap', // Ensures text is always visible
    PRELOAD_CRITICAL: [
      '/fonts/system-ui.woff2', // System fonts for immediate rendering
    ],
  },

  // Script optimization
  SCRIPT: {
    // GA4 and analytics scripts should be deferred
    DEFER_DOMAINS: ['www.googletagmanager.com', 'www.google-analytics.com'],
  },

  // Caching headers
  CACHE_CONTROL: {
    STATIC: 'public, max-age=31536000, immutable', // 1 year for static assets
    DYNAMIC: 'public, max-age=3600, s-maxage=86400', // 1 hour client, 1 day CDN
    API: 'private, max-age=300', // 5 minutes for API responses
  },

  // Compression
  COMPRESSION: {
    ALGORITHM: 'gzip', // or brotli for better compression
    LEVEL: 6,
  },

  // Core Web Vitals Targets
  CORE_WEB_VITALS: {
    // Largest Contentful Paint (LCP) - should be < 2.5s
    LCP_TARGET: 2500,

    // First Input Delay (FID) - should be < 100ms
    FID_TARGET: 100,

    // Cumulative Layout Shift (CLS) - should be < 0.1
    CLS_TARGET: 0.1,
  },
}

export function getImageQuality(priority: 'critical' | 'high' | 'normal') {
  const qualities = {
    critical: 95,
    high: 85,
    normal: 75,
  }
  return qualities[priority]
}

export function getCacheControl(type: 'static' | 'dynamic' | 'api') {
  const key = type.toUpperCase() as keyof typeof PERFORMANCE_CONFIG.CACHE_CONTROL
  return PERFORMANCE_CONFIG.CACHE_CONTROL[key]
}

export interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needsImprovement' | 'poor'
}

export function rateWebVital(name: string, value: number): PerformanceMetric {
  if (name === 'LCP') {
    return {
      name,
      value,
      rating: value < 2500 ? 'good' : value < 4000 ? 'needsImprovement' : 'poor',
    }
  }
  if (name === 'FID') {
    return {
      name,
      value,
      rating: value < 100 ? 'good' : value < 300 ? 'needsImprovement' : 'poor',
    }
  }
  if (name === 'CLS') {
    return {
      name,
      value,
      rating: value < 0.1 ? 'good' : value < 0.25 ? 'needsImprovement' : 'poor',
    }
  }
  return { name, value, rating: 'poor' }
}

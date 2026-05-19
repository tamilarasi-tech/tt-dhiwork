// Google Analytics 4 setup
export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID || ''

export interface PageViewEvent {
  page_path: string
  page_title: string
}

export interface CustomEvent {
  event_name: string
  [key: string]: unknown
}

export interface ConversionEvent {
  event_name: 'contact_form_submit' | 'service_inquiry' | 'call_phone'
  value?: number
  currency?: string
  [key: string]: unknown
}

export function trackPageView(pageData: PageViewEvent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA4_ID, {
      page_path: pageData.page_path,
      page_title: pageData.page_title,
    })
  }
}

export function trackEvent(event: CustomEvent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.event_name, {
      ...event,
    })
  }
}

export function trackConversion(event: ConversionEvent) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.event_name, {
      value: event.value,
      currency: event.currency || 'USD',
    })
  }
}

export function trackFormSubmit(serviceName: string) {
  trackConversion({
    event_name: 'contact_form_submit',
    service: serviceName,
  })
}

export function trackServiceInquiry(serviceName: string) {
  trackConversion({
    event_name: 'service_inquiry',
    service: serviceName,
  })
}

export function trackPhoneCall(phoneNumber: string) {
  trackConversion({
    event_name: 'call_phone',
    phone_number: phoneNumber,
  })
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

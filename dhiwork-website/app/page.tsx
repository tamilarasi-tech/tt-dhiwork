import { HeroSection } from '@/components/HeroSection/HeroSection'
import { createPageMetadata } from '@/lib/seo'
import { ServiceCardGrid } from '@/components/ServiceCardGrid/ServiceCardGrid'
import { AboutPreview } from '@/components/AboutPreview/AboutPreview'
import { CTASection } from '@/components/CTASection/CTASection'
import { Footer } from '@/components/Footer/Footer'
import { Section } from '@/components/Section/Section'
import { SERVICES } from '@/lib/services'
import {
  FOOTER_COMPANY_INFO,
  FOOTER_COPYRIGHT,
  FOOTER_SECTIONS,
} from '@/lib/footer'
import styles from './home.module.scss'

export const metadata = createPageMetadata({
  title: 'DhiWork Solutions LLC | Enterprise Consulting & Technology Services',
  description:
    'Deliver strategic IT solutions including SAP, Oracle, Data Engineering, and Gen AI services. Transform your enterprise with proven expertise and innovative technology.',
  path: '/',
  keywords:
    'SAP consulting, Oracle services, data engineering, AI solutions, enterprise technology, business transformation',
  openGraphTitle:
    'DhiWork Solutions LLC | Enterprise Consulting & Technology Services',
  openGraphDescription:
    'Strategic IT solutions and consulting for enterprise transformation',
})

export default function Home() {
  return (
    <>
      <HeroSection
        title="Transform Your Enterprise"
        subtitle="Strategic Solutions"
        description="Unlock the potential of your business with cutting-edge technology and expert consulting across SAP, Oracle, Data Engineering, and AI."
        primaryCTA={{
          label: 'Explore Services',
          href: '#services',
        }}
        secondaryCTA={{
          label: 'Get Started',
          href: '/contact',
        }}
      />

      <Section id="services" variant="light">
        <div className={styles.servicesHeader}>
          <h2 className={styles.servicesTitle}>Our Services</h2>
          <p className={styles.servicesSubtitle}>
            Comprehensive solutions tailored to drive innovation and excellence
            across your organization
          </p>
        </div>
        <ServiceCardGrid services={SERVICES} />
      </Section>

      <AboutPreview
        subtitle="About DhiWork"
        title="Trusted Enterprise Solutions Partner"
        description="With over a decade of experience delivering transformative technology solutions, DhiWork Solutions LLC stands as your trusted partner in navigating the complexities of enterprise systems, data platforms, and artificial intelligence. Our team of certified experts is committed to driving measurable business value for organizations across industries."
        highlights={[
          'Certified SAP and Oracle implementation partners',
          'Advanced data engineering and analytics expertise',
          'Cutting-edge AI and machine learning solutions',
          'Industry-proven methodologies and best practices',
          'Dedicated support and continuous optimization',
        ]}
      />

      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how our solutions can drive growth, efficiency, and innovation for your organization. Connect with our team today."
        primaryButtonLabel="Contact Our Team"
        primaryButtonHref="/contact"
      />

      <Footer
        sections={FOOTER_SECTIONS}
        companyInfo={FOOTER_COMPANY_INFO}
        copyright={FOOTER_COPYRIGHT}
      />
    </>
  )
}

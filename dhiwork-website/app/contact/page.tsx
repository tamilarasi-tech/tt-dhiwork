import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { createPageMetadata } from '@/lib/seo'
import { SITE_CONTACT } from '@/lib/site'
import { BrandIcon } from '@/components/BrandIcon/BrandIcon'
import { ContactForm } from '@/components/ContactForm/ContactForm'
import { Footer } from '@/components/Footer/Footer'
import {
  FOOTER_COMPANY_INFO,
  FOOTER_COPYRIGHT,
  FOOTER_SECTIONS,
} from '@/lib/footer'
import styles from './page.module.scss'

export const metadata = createPageMetadata({
  title: 'Contact Us | DhiWork Solutions LLC',
  description:
    'Get in touch with DhiWork Solutions LLC. Reach out to discuss your enterprise technology and consulting needs.',
  path: '/contact',
  keywords: 'contact, support, inquiry, consultation',
  openGraphTitle: 'Contact Us | DhiWork Solutions LLC',
  openGraphDescription:
    'Contact DhiWork Solutions LLC for enterprise consulting services',
})

export default function ContactPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Get in Touch</h1>
            <p>
              Ready to transform your enterprise? Let's discuss your challenges
              and opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.formColumn}>
              <h2 className={styles.sectionTitle}>Send us a Message</h2>
              <ContactForm />
            </div>

            <div className={styles.infoColumn}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Contact Information</h3>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <BrandIcon name="email" size="md" label="Email" />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Email</p>
                    <a href={`mailto:${SITE_CONTACT.email}`}>{SITE_CONTACT.email}</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <BrandIcon name="location" size="md" label="Address" />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Address</p>
                    <p>{SITE_CONTACT.address}</p>
                  </div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Business Hours</h3>
                <div className={styles.hours}>
                  <div className={styles.hourRow}>
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className={styles.hourRow}>
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className={styles.hourRow}>
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className={styles.timezone}>All times EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>How quickly can you start a project?</h3>
              <p>
                After initial consultation and agreement, we can typically start
                projects within 1-2 weeks. We maintain a bench of available
                resources for urgent engagements.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you offer free consultations?</h3>
              <p>
                Yes! We offer a complimentary 30-minute consultation to discuss
                your needs, challenges, and how we can help.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>What's your typical engagement model?</h3>
              <p>
                We work on both fixed-price projects and time-and-materials
                engagements. We'll recommend the best model based on your
                specific needs.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do you work with distributed teams?</h3>
              <p>
                Absolutely. We have experience working with distributed teams
                and global organizations across multiple time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer
        sections={FOOTER_SECTIONS}
        companyInfo={FOOTER_COMPANY_INFO}
        copyright={FOOTER_COPYRIGHT}
      />
    </>
  )
}

import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { createPageMetadata } from '@/lib/seo'
import { BrandIcon } from '@/components/BrandIcon/BrandIcon'
import { Footer } from '@/components/Footer/Footer'
import {
  FOOTER_COMPANY_INFO,
  FOOTER_COPYRIGHT,
  FOOTER_SECTIONS,
} from '@/lib/footer'
import { CTASection } from '@/components/CTASection/CTASection'
import styles from './page.module.scss'

export const metadata = createPageMetadata({
  title: 'About DhiWork Solutions LLC | Enterprise Consulting',
  description:
    'Learn about DhiWork Solutions LLC—our mission, values, and expertise. Trusted partner in enterprise transformation for over a decade.',
  path: '/about',
  keywords: 'about DhiWork, enterprise consulting, company values, industry expertise',
  openGraphTitle: 'About DhiWork Solutions LLC | Enterprise Consulting',
  openGraphDescription:
    'Discover DhiWork Solutions LLC mission and commitment to enterprise excellence',
})

export default function AboutPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1>About DhiWork Solutions LLC</h1>
            <p>
              Transforming enterprises through strategic technology and expert
              consulting
            </p>
          </div>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.missionBox}>
              <h2 className={styles.sectionTitle}>Our Mission</h2>
              <p>
                To empower organizations with transformative technology solutions
                that drive efficiency, innovation, and measurable business value.
                We partner with enterprises to navigate complexity and unlock their
                full potential in an increasingly digital world.
              </p>
            </div>

            <div className={styles.missionBox}>
              <h2 className={styles.sectionTitle}>Our Vision</h2>
              <p>
                To be the trusted technology partner of choice for enterprises
                seeking excellence in SAP, Oracle, data engineering, and AI
                solutions. We envision a world where organizations leverage
                technology strategically to achieve unprecedented growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <BrandIcon name="target" size="md" label="Excellence" />
              </div>
              <h3>Excellence</h3>
              <p>
                We pursue the highest standards in everything we do, from solution
                design to project delivery and ongoing support.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <BrandIcon name="team-management" size="md" label="Partnership" />
              </div>
              <h3>Partnership</h3>
              <p>
                We view our clients as partners, deeply understanding their
                business goals and working collaboratively toward success.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <BrandIcon name="idea" size="md" label="Innovation" />
              </div>
              <h3>Innovation</h3>
              <p>
                We stay at the forefront of technology trends and continuously
                seek better ways to solve client challenges.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <BrandIcon name="lock" size="md" label="Integrity" />
              </div>
              <h3>Integrity</h3>
              <p>
                We conduct our business with honesty, transparency, and strong
                ethical principles in all interactions.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <BrandIcon name="chart-growth" size="md" label="Results-Driven" />
              </div>
              <h3>Results-Driven</h3>
              <p>
                We focus on delivering measurable business outcomes that drive
                ROI and create lasting value for our clients.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <BrandIcon name="star" size="md" label="Growth Mindset" />
              </div>
              <h3>Growth Mindset</h3>
              <p>
                We believe in continuous learning and development for our team
                and clients, embracing change and new challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.expertiseSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Expertise</h2>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseItem}>
              <h3>SAP Solutions</h3>
              <p>
                10+ years implementing ERP systems for enterprises across industries,
                with certified professionals in all major SAP modules.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h3>Oracle Platform</h3>
              <p>
                Database, cloud, and middleware expertise with proven track record
                migrating complex systems to Oracle Cloud Infrastructure.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h3>Data Engineering</h3>
              <p>
                Building scalable data pipelines and modern analytics platforms
                using cloud-native technologies and industry best practices.
              </p>
            </div>

            <div className={styles.expertiseItem}>
              <h3>Generative AI</h3>
              <p>
                Implementing LLM-based solutions, RAG systems, and AI agents to
                unlock new capabilities and competitive advantages.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <div className={styles.statNumber}>500+</div>
              <p>Successful Projects</p>
            </div>

            <div className={styles.statBox}>
              <div className={styles.statNumber}>50+</div>
              <p>SAP Implementations</p>
            </div>

            <div className={styles.statBox}>
              <div className={styles.statNumber}>30+</div>
              <p>Cloud Migrations</p>
            </div>

            <div className={styles.statBox}>
              <div className={styles.statNumber}>$500M+</div>
              <p>Value Created</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work Together?"
        description="Let's discuss how DhiWork can help transform your enterprise. Connect with our team today."
        primaryButtonLabel="Contact Us"
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

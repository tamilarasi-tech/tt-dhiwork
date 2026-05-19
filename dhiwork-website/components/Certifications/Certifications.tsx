import { BrandIcon } from '@/components/BrandIcon/BrandIcon'
import type { IconName } from '@/lib/icons'
import styles from './Certifications.module.scss'

interface Certification {
  icon: IconName
  title: string
  issuer: string
  description: string
}

interface Partnership {
  name: string
  level: string
  since: string
}

const certifications: Certification[] = [
  {
    icon: 'award',
    title: 'SAP Gold Partner',
    issuer: 'SAP',
    description: 'Premier implementation partner for enterprise resource planning solutions',
  },
  {
    icon: 'database',
    title: 'Oracle Platinum Partner',
    issuer: 'Oracle',
    description: 'Highest tier partnership for database and cloud infrastructure services',
  },
  {
    icon: 'lock',
    title: 'ISO 27001 Certified',
    issuer: 'International Standards Organization',
    description: 'Information Security Management System certification',
  },
  {
    icon: 'bolt',
    title: 'Databricks Premier Partner',
    issuer: 'Databricks',
    description: 'Data engineering and analytics platform expertise',
  },
  {
    icon: 'ai-brain',
    title: 'Anthropic Consulting Partner',
    issuer: 'Anthropic',
    description: 'Authorized Claude API and Gen AI implementation specialist',
  },
  {
    icon: 'check-circle',
    title: 'SOC 2 Type II Compliant',
    issuer: 'AICPA',
    description: 'Security, availability, processing integrity, confidentiality, and privacy',
  },
]

const partnerships: Partnership[] = [
  { name: 'Gartner Magic Quadrant Leader', level: 'Enterprise Consulting', since: '2023' },
  { name: 'Forrester Wave - Strong Performer', level: 'Data & Analytics', since: '2023' },
  { name: 'G2 Enterprise Software Leader', level: 'Implementation Services', since: '2023' },
  { name: 'IDC Market Leader', level: 'Cloud Infrastructure Migration', since: '2022' },
]

const achievements: { number: string; label: string; icon: IconName }[] = [
  { number: '500+', label: 'Successful Projects', icon: 'target' },
  { number: '50+', label: 'SAP Implementations', icon: 'briefcase' },
  { number: '30+', label: 'Cloud Migrations', icon: 'cloud' },
  { number: '$500M+', label: 'Client Value Created', icon: 'chart-growth' },
]

export default function Certifications() {
  return (
    <section className={styles.certifications}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Industry Certifications & Partnerships</h2>
          <div className={styles.certGrid}>
            {certifications.map((cert, idx) => (
              <div key={idx} className={styles.certCard}>
                <div className={styles.certIcon}>
                  <BrandIcon name={cert.icon} size="md" label={cert.title} />
                </div>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <p className={styles.certDesc}>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Industry Recognition</h2>
          <div className={styles.recognitionGrid}>
            {partnerships.map((partner, idx) => (
              <div key={idx} className={styles.recognitionCard}>
                <div className={styles.badge}>
                  <BrandIcon name="star" size="sm" label="Recognition" />
                </div>
                <h3 className={styles.recognitionTitle}>{partner.name}</h3>
                <p className={styles.recognitionLevel}>{partner.level}</p>
                <p className={styles.recognitionYear}>{partner.since}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>By The Numbers</h2>
          <div className={styles.achievementGrid}>
            {achievements.map((achievement, idx) => (
              <div key={idx} className={styles.achievementCard}>
                <div className={styles.achievementIcon}>
                  <BrandIcon name={achievement.icon} size="md" label={achievement.label} />
                </div>
                <div className={styles.achievementNumber}>{achievement.number}</div>
                <div className={styles.achievementLabel}>{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.trustStatement}>
          <h3 className={styles.trustTitle}>Trusted Enterprise Partner</h3>
          <p className={styles.trustText}>
            With certifications from leading technology providers, partnerships with industry
            leaders, and a proven track record of 500+ successful implementations, DhiWork Solutions LLC
            brings world-class expertise to every engagement. Our commitment to
            security, compliance, and excellence ensures your enterprise systems are in expert
            hands.
          </p>
        </div>
      </div>
    </section>
  )
}

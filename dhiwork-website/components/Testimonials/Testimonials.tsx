import styles from './Testimonials.module.scss'

interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'DhiWork transformed our supply chain operations. Their SAP expertise and project management delivered results on time and within budget. The ROI was 340% in year one.',
    author: 'Robert Chen',
    title: 'Chief Operating Officer',
    company: 'Fortune 500 Manufacturing',
    avatar: '👨‍💼',
  },
  {
    id: '2',
    quote: 'The Oracle Cloud migration was seamless. Zero downtime, and we\'re now saving $8M annually. Their team understood our compliance requirements better than internal IT.',
    author: 'Jennifer Martinez',
    title: 'VP Infrastructure',
    company: 'Global Financial Services',
    avatar: '👩‍💼',
  },
  {
    id: '3',
    quote: 'Their data engineering work unlocked insights we didn\'t know were possible. Real-time analytics improved forecast accuracy by 94%. They\'re now an extension of our team.',
    author: 'David Kumar',
    title: 'Chief Analytics Officer',
    company: 'Retail & E-Commerce',
    avatar: '👨‍💼',
  },
  {
    id: '4',
    quote: 'The Gen AI implementation reduced administrative burden by 35%. Providers love the documentation assistant. DhiWork didn\'t just deliver technology—they transformed workflows.',
    author: 'Dr. Sarah Williams',
    title: 'Chief Medical Officer',
    company: 'Healthcare Network',
    avatar: '👩‍⚕️',
  },
  {
    id: '5',
    quote: 'What impressed me most was their responsiveness and deep expertise. They didn\'t just answer questions—they anticipated problems and prevented them.',
    author: 'Michael Thompson',
    title: 'CTO',
    company: 'SaaS Technology',
    avatar: '👨‍💻',
  },
  {
    id: '6',
    quote: 'Outstanding team. They brought SAP best practices we didn\'t have internally and helped us avoid costly mistakes. Highly recommended for enterprise transformations.',
    author: 'Lisa Anderson',
    title: 'Digital Transformation Lead',
    company: 'Global Logistics',
    avatar: '👩‍💼',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Trusted by Enterprise Leaders</h2>
          <p className={styles.subtitle}>
            Real feedback from clients who transformed their operations with our solutions
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>

              <blockquote className={styles.quote}>
                "{testimonial.quote}"
              </blockquote>

              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.avatar}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorTitle}>{testimonial.title}</div>
                  <div className={styles.authorCompany}>{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { capabilityIcon } from '@/lib/capability-icon'
import { createPageMetadata } from '@/lib/seo'
import { relatedServiceIcon } from '@/lib/services'
import { WHY_CHOOSE_ICON } from '@/lib/why-choose-icons'
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { ServiceHeroSection } from '@/components/ServiceHeroSection/ServiceHeroSection'
import { TechnicalCapabilities } from '@/components/TechnicalCapabilities/TechnicalCapabilities'
import { WhyChooseSection } from '@/components/WhyChooseSection/WhyChooseSection'
import { ProcessTimeline } from '@/components/ProcessTimeline/ProcessTimeline'
import { RelatedServicesCards } from '@/components/RelatedServicesCards/RelatedServicesCards'
import { FAQSection } from '@/components/FAQSection/FAQSection'
import { CTASection } from '@/components/CTASection/CTASection'
import { Footer } from '@/components/Footer/Footer'
import {
  FOOTER_COMPANY_INFO,
  FOOTER_COPYRIGHT,
  FOOTER_SECTIONS,
} from '@/lib/footer'

export const metadata = createPageMetadata({
  title: 'Oracle Services | Database & Cloud Solutions | DhiWork Solutions LLC',
  description:
    'Enterprise database and cloud solutions with Oracle implementation, optimization, and support. Maximize performance and scalability.',
  path: '/services/oracle-services',
  keywords: 'Oracle consulting, database solutions, Oracle cloud, cloud infrastructure',
  openGraphTitle:
    'Oracle Services | Database & Cloud Solutions | DhiWork Solutions LLC',
  openGraphDescription:
    'Enterprise database and cloud solutions with Oracle implementation and optimization',
})

export default function OracleServicesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Oracle Services', href: '/services/oracle-services' },
        ]}
      />

      <ServiceHeroSection
        subtitle="Database & Cloud Infrastructure"
        title="Oracle Services & Solutions"
        description="Leverage Oracle's enterprise database and cloud capabilities with expert implementation, optimization, and managed services. Build a scalable, secure infrastructure."
      />

      <TechnicalCapabilities
        title="Oracle Expertise & Capabilities"
        description="Our certified Oracle professionals deliver solutions across database, cloud, and middleware"
        capabilities={[
          {
            icon: capabilityIcon('analytics-chart', 'Database Management'),
            title: 'Database Management',
            description:
              'Oracle Database administration, optimization, and high availability solutions.',
          },
          {
            icon: capabilityIcon('cloud-infrastructure', 'Cloud Infrastructure'),
            title: 'Cloud Infrastructure',
            description:
              'Oracle Cloud Platform (OCP) implementation and migration from on-premises.',
          },
          {
            icon: capabilityIcon('security-shield', 'Data Security'),
            title: 'Data Security',
            description:
              'Advanced security features, encryption, and compliance management.',
          },
          {
            icon: capabilityIcon('analytics-chart', 'Performance Tuning'),
            title: 'Performance Tuning',
            description:
              'Database optimization, query tuning, and performance monitoring.',
          },
          {
            icon: capabilityIcon('system-integration', 'Middleware Solutions'),
            title: 'Middleware Solutions',
            description:
              'WebLogic, Fusion Middleware, and enterprise integration solutions.',
          },
          {
            icon: capabilityIcon('security-shield', 'Disaster Recovery'),
            title: 'Disaster Recovery',
            description:
              'Backup, recovery, and business continuity solutions with Data Guard.',
          },
        ]}
      />

      <WhyChooseSection
        subtitle="Why Choose DhiWork"
        title="Why We're Your Oracle Partner"
        reasons={[
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Oracle Certified',
            description:
              'Certified Oracle DBAs and Cloud Architects with deep technical expertise',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Cloud Migration Experts',
            description:
              'Successfully migrated 30+ databases to Oracle Cloud Infrastructure',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: '24/7 Managed Services',
            description:
              'Round-the-clock monitoring, support, and proactive optimization',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Cost Optimization',
            description:
              'Right-sizing and license optimization to reduce your Oracle costs',
          },
        ]}
      />

      <ProcessTimeline
        subtitle="Implementation Approach"
        title="Our 5-Phase Oracle Approach"
        steps={[
          {
            number: 1,
            title: 'Assessment & Planning',
            description:
              'Evaluate current infrastructure, capacity planning, and cloud readiness assessment',
          },
          {
            number: 2,
            title: 'Architecture & Design',
            description:
              'Design high-availability architecture, security model, and migration strategy',
          },
          {
            number: 3,
            title: 'Implementation',
            description:
              'Deploy infrastructure, configure databases, and implement security controls',
          },
          {
            number: 4,
            title: 'Migration & Testing',
            description:
              'Execute data migration with zero downtime cutover and comprehensive testing',
          },
          {
            number: 5,
            title: 'Optimization & Support',
            description:
              'Performance tuning, training, and ongoing managed services',
          },
        ]}
      />

      <RelatedServicesCards
        services={[
          {
            icon: relatedServiceIcon('/services/sap-services'),
            title: 'SAP Services',
            description:
              'Enterprise resource planning solutions that integrate seamlessly with Oracle.',
            href: '/services/sap-services',
          },
          {
            icon: relatedServiceIcon('/services/data-engineering'),
            title: 'Data Engineering',
            description:
              'Build data pipelines and analytics on top of your Oracle infrastructure.',
            href: '/services/data-engineering',
          },
          {
            icon: relatedServiceIcon('/services/gen-ai-solutions'),
            title: 'Gen AI Solutions',
            description:
              'Intelligent applications and analytics powered by your Oracle data.',
            href: '/services/gen-ai-solutions',
          },
        ]}
      />

      <FAQSection
        subtitle="Common Questions"
        title="Oracle Services FAQ"
        faqs={[
          {
            question: 'Should we migrate to Oracle Cloud or stay on-premises?',
            answer:
              'This depends on your workload characteristics, compliance requirements, and cost structure. We conduct a detailed analysis to recommend the best approach for your specific situation, whether cloud, on-premises, or hybrid.',
          },
          {
            question: 'How long does Oracle Cloud migration take?',
            answer:
              'Typical migrations take 3-6 months depending on database size and complexity. We use proven methodologies to minimize downtime—often achieving zero-downtime migration with Oracle Data Guard.',
          },
          {
            question: 'What is the cost difference between on-premises and Oracle Cloud?',
            answer:
              'Cloud costs vary based on compute resources and licensing model. We provide detailed cost modeling and help you optimize licensing through Oracle University agreements and reserved capacity.',
          },
          {
            question: 'Can you help optimize our Oracle licensing?',
            answer:
              'Yes. We conduct license audits, identify optimization opportunities, and help negotiate more favorable terms. Many clients reduce licensing costs by 20-30% through our recommendations.',
          },
          {
            question: 'Do you provide 24/7 support?',
            answer:
              'Absolutely. We offer managed services with 24/7 monitoring, proactive alerting, and rapid incident response. Our SLAs ensure your critical systems stay available.',
          },
        ]}
      />

      <CTASection
        title="Ready to Transform with Oracle?"
        description="Let's discuss how Oracle can improve your database performance, security, and scalability. Contact our Oracle experts today."
        primaryButtonLabel="Schedule Consultation"
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

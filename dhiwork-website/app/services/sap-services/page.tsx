import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb'
import { ServicePageJsonLd } from '@/components/ServicePageJsonLd'
import { createPageMetadata } from '@/lib/seo'
import { capabilityIcon } from '@/lib/capability-icon'
import { relatedServiceIcon } from '@/lib/services'
import { WHY_CHOOSE_ICON } from '@/lib/why-choose-icons'
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

const SERVICE_PATH = '/services/sap-services'

const SERVICE_DESCRIPTION =
  'Enterprise resource planning solutions with SAP implementation, optimization, and support. Transform your business operations with proven expertise.'

const SERVICE_FAQS = [
  {
    question: 'How long does an SAP implementation typically take?',
    answer:
      'Implementation timelines vary based on complexity and scope. A typical mid-market implementation takes 6-12 months. We work to optimize timelines while ensuring quality and minimizing business disruption.',
  },
  {
    question: 'What is the cost of SAP implementation?',
    answer:
      'Costs depend on system scope, customization requirements, and data complexity. We provide transparent, fixed-price engagements whenever possible, with detailed cost breakdowns upfront.',
  },
  {
    question: 'Can you migrate from our current system to SAP?',
    answer:
      'Yes. We have extensive experience migrating from legacy systems, competing ERPs, and cloud platforms. Our proven data migration methodology ensures data integrity and minimal downtime.',
  },
  {
    question: 'Do you provide ongoing support after implementation?',
    answer:
      'Absolutely. We offer comprehensive managed services including system monitoring, performance optimization, technical support, and continuous improvement initiatives.',
  },
  {
    question: 'What if we need custom development?',
    answer:
      'We build custom solutions using ABAP, Fiori, and modern development frameworks. Our approach balances customization with upgrade protection and long-term maintainability.',
  },
] as const

export const metadata = createPageMetadata({
  title: 'SAP Services | ERP Solutions | DhiWork Solutions LLC',
  description: SERVICE_DESCRIPTION,
  path: SERVICE_PATH,
  keywords: 'SAP consulting, ERP implementation, SAP systems, business transformation',
  openGraphTitle: 'SAP Services | ERP Solutions | DhiWork Solutions LLC',
  openGraphDescription:
    'Enterprise resource planning solutions with SAP implementation and optimization',
})

export default function SAPServicesPage() {
  return (
    <>
      <ServicePageJsonLd
        serviceName="SAP Services"
        serviceDescription={SERVICE_DESCRIPTION}
        path={SERVICE_PATH}
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/#services' },
          { name: 'SAP Services', path: SERVICE_PATH },
        ]}
        faqs={[...SERVICE_FAQS]}
      />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'SAP Services', href: '/services/sap-services' },
        ]}
      />

      <ServiceHeroSection
        subtitle="Enterprise Resource Planning"
        title="SAP Services & Solutions"
        description="Transform your business operations with comprehensive SAP implementation, optimization, and support services. Unlock efficiency, scalability, and data-driven decision-making."
      />

      <TechnicalCapabilities
        title="SAP Expertise & Capabilities"
        description="Our certified SAP professionals deliver proven solutions across all modules"
        capabilities={[
          {
            icon: capabilityIcon('analytics-chart', 'Finance & Controlling'),
            title: 'Finance & Controlling',
            description:
              'Complete financial management, budgeting, and reporting solutions with real-time insights.',
          },
          {
            icon: capabilityIcon('data-flow', 'Supply Chain Management'),
            title: 'Supply Chain Management',
            description:
              'Optimize procurement, inventory, and logistics for maximum efficiency and cost savings.',
          },
          {
            icon: capabilityIcon('enterprise-network', 'Human Capital Management'),
            title: 'Human Capital Management',
            description:
              'Integrated HR solutions for talent management, payroll, and workforce planning.',
          },
          {
            icon: capabilityIcon('system-integration', 'Manufacturing Operations'),
            title: 'Manufacturing Operations',
            description:
              'Streamline production planning, quality management, and maintenance operations.',
          },
          {
            icon: capabilityIcon('analytics-chart', 'Revenue Management'),
            title: 'Revenue Management',
            description:
              'Comprehensive sales and customer management with revenue optimization strategies.',
          },
          {
            icon: capabilityIcon('security-shield', 'Security & Compliance'),
            title: 'Security & Compliance',
            description:
              'Enterprise-grade security, access controls, and regulatory compliance frameworks.',
          },
        ]}
      />

      <WhyChooseSection
        subtitle="Why Choose DhiWork"
        title="Why We're Your SAP Partner"
        reasons={[
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Certified Expertise',
            description:
              'Certified SAP consultants with 10+ years of enterprise implementation experience',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Proven Track Record',
            description:
              'Successfully delivered 50+ SAP implementations across diverse industries',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: 'End-to-End Support',
            description:
              'From planning and implementation to optimization and ongoing support',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Cost Efficiency',
            description:
              'Deliver solutions on time and within budget with measurable ROI',
          },
        ]}
      />

      <ProcessTimeline
        subtitle="Implementation Approach"
        title="Our 5-Phase Implementation Process"
        steps={[
          {
            number: 1,
            title: 'Assessment & Planning',
            description:
              'Evaluate current systems, define requirements, and create comprehensive roadmap',
          },
          {
            number: 2,
            title: 'Design & Configuration',
            description:
              'Design business processes, configure SAP modules, and prepare data migration strategy',
          },
          {
            number: 3,
            title: 'Development & Testing',
            description:
              'Build custom extensions, conduct unit testing, and perform system integration testing',
          },
          {
            number: 4,
            title: 'Deployment & Training',
            description:
              'Execute cutover plan, migrate data, and deliver comprehensive end-user training',
          },
          {
            number: 5,
            title: 'Optimization & Support',
            description:
              'Monitor performance, optimize processes, and provide ongoing support and enhancements',
          },
        ]}
      />

      <RelatedServicesCards
        services={[
          {
            icon: relatedServiceIcon('/services/oracle-services'),
            title: 'Oracle Services',
            description:
              'Database and cloud solutions for mission-critical applications and data management.',
            href: '/services/oracle-services',
          },
          {
            icon: relatedServiceIcon('/services/data-engineering'),
            title: 'Data Engineering',
            description:
              'Advanced data pipelines and analytics to complement your SAP investment.',
            href: '/services/data-engineering',
          },
          {
            icon: relatedServiceIcon('/services/gen-ai-solutions'),
            title: 'Gen AI Solutions',
            description:
              'Intelligent automation and AI integration to enhance SAP capabilities.',
            href: '/services/gen-ai-solutions',
          },
        ]}
      />

      <FAQSection
        subtitle="Common Questions"
        title="SAP Services FAQ"
        faqs={[...SERVICE_FAQS]}
      />

      <CTASection
        title="Ready to Transform with SAP?"
        description="Let's discuss how SAP can streamline your operations and drive growth. Our experts are ready to help."
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

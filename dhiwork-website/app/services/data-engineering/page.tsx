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
  title: 'Data Engineering Services | Data Pipelines & Analytics | DhiWork Solutions LLC',
  description:
    'Advanced data engineering solutions including ETL pipelines, data warehouses, and analytics platforms. Transform data into actionable intelligence.',
  path: '/services/data-engineering',
  keywords: 'data engineering, ETL, data pipelines, data warehouse, analytics platform',
  openGraphTitle:
    'Data Engineering Services | Data Pipelines & Analytics | DhiWork Solutions LLC',
  openGraphDescription:
    'Advanced data engineering solutions for building robust data platforms and analytics',
})

export default function DataEngineeringPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Data Engineering', href: '/services/data-engineering' },
        ]}
      />

      <ServiceHeroSection
        subtitle="Data Infrastructure & Analytics"
        title="Data Engineering Services"
        description="Build robust data pipelines and analytics platforms that transform raw data into strategic business intelligence. Scale your data infrastructure with confidence."
      />

      <TechnicalCapabilities
        title="Data Engineering Expertise"
        description="Our data engineers deliver end-to-end solutions across collection, processing, storage, and analytics"
        capabilities={[
          {
            icon: capabilityIcon('data-flow', 'ETL/ELT Pipelines'),
            title: 'ETL/ELT Pipelines',
            description:
              'Design and implement scalable data pipelines using Apache Spark, Airflow, and cloud-native tools.',
          },
          {
            icon: capabilityIcon('analytics-chart', 'Data Warehouse Design'),
            title: 'Data Warehouse Design',
            description:
              'Build enterprise data warehouses with dimensional modeling and optimized schema design.',
          },
          {
            icon: capabilityIcon('cloud-infrastructure', 'Data Lakes & Lakes Houses'),
            title: 'Data Lakes & Lakes Houses',
            description:
              'Implement modern data lake architectures with Delta Lake, Apache Iceberg, and cloud storage.',
          },
          {
            icon: capabilityIcon('analytics-chart', 'Analytics & BI'),
            title: 'Analytics & BI',
            description:
              'Create analytics solutions with Snowflake, BigQuery, Redshift, and BI tools.',
          },
          {
            icon: capabilityIcon('system-integration', 'Data Integration'),
            title: 'Data Integration',
            description:
              'Integrate disparate data sources with mature integration patterns and CDC solutions.',
          },
          {
            icon: capabilityIcon('security-shield', 'Data Governance'),
            title: 'Data Governance',
            description:
              'Implement data quality, metadata management, and governance frameworks.',
          },
        ]}
      />

      <WhyChooseSection
        subtitle="Why Choose DhiWork"
        title="Why We're Your Data Engineering Partner"
        reasons={[
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Cloud-Native Expertise',
            description:
              'Deep experience with Snowflake, BigQuery, Redshift, and modern data stacks',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Scalable Solutions',
            description:
              'Built solutions handling petabytes of data with sub-second query performance',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Best Practices',
            description:
              'Follow industry best practices for data modeling, governance, and quality',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Cost Optimization',
            description:
              'Design efficient pipelines that minimize compute and storage costs',
          },
        ]}
      />

      <ProcessTimeline
        subtitle="Implementation Approach"
        title="Our 5-Phase Data Engineering Process"
        steps={[
          {
            number: 1,
            title: 'Discovery & Assessment',
            description:
              'Understand data sources, requirements, and define the target architecture',
          },
          {
            number: 2,
            title: 'Design & Architecture',
            description:
              'Design scalable data pipelines, warehouse schema, and infrastructure',
          },
          {
            number: 3,
            title: 'Development & Testing',
            description:
              'Build ETL processes, implement data quality checks, and conduct testing',
          },
          {
            number: 4,
            title: 'Deployment & Migration',
            description:
              'Deploy to production, migrate historical data, and ensure data accuracy',
          },
          {
            number: 5,
            title: 'Monitoring & Optimization',
            description:
              'Monitor pipeline performance, optimize queries, and continuous improvement',
          },
        ]}
      />

      <RelatedServicesCards
        services={[
          {
            icon: relatedServiceIcon('/services/sap-services'),
            title: 'SAP Services',
            description:
              'Extract and analyze operational data from your SAP systems.',
            href: '/services/sap-services',
          },
          {
            icon: relatedServiceIcon('/services/oracle-services'),
            title: 'Oracle Services',
            description:
              'Leverage Oracle databases as source systems for your data pipelines.',
            href: '/services/oracle-services',
          },
          {
            icon: relatedServiceIcon('/services/gen-ai-solutions'),
            title: 'Gen AI Solutions',
            description:
              'Use engineered data to power machine learning and AI applications.',
            href: '/services/gen-ai-solutions',
          },
        ]}
      />

      <FAQSection
        subtitle="Common Questions"
        title="Data Engineering FAQ"
        faqs={[
          {
            question: 'What is the difference between a data lake and data warehouse?',
            answer:
              'A data lake stores raw, unstructured data for exploration, while a data warehouse stores processed, structured data for analytics. Modern solutions use both: a data lake for flexibility and a warehouse for governed analytics.',
          },
          {
            question: 'How long does it take to build a data pipeline?',
            answer:
              'Simple pipelines can be built in weeks, while complex enterprise solutions typically take 2-4 months. Timeline depends on data complexity, volume, and frequency of updates.',
          },
          {
            question: 'Which cloud platform should we choose for our data warehouse?',
            answer:
              'Each platform (Snowflake, BigQuery, Redshift) has strengths. We evaluate your use cases, data volume, query patterns, and budget to recommend the best fit.',
          },
          {
            question: 'How do we ensure data quality in our pipelines?',
            answer:
              'We implement multiple layers: schema validation, null checks, referential integrity tests, and statistical anomaly detection. Great Data Quality leads to trustworthy analytics.',
          },
          {
            question: 'What are the ongoing operational needs for data platforms?',
            answer:
              'Plan for monitoring, alerting, pipeline maintenance, performance tuning, and governance updates. We provide managed services to handle these operational aspects.',
          },
        ]}
      />

      <CTASection
        title="Ready to Build Your Data Platform?"
        description="Let's design a scalable, reliable data infrastructure for your organization. Our data engineers are ready to help."
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

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
  title: 'Gen AI Solutions | AI Implementation | DhiWork Solutions LLC',
  description:
    'Generative AI and machine learning solutions leveraging LLMs, prompt engineering, and AI integration. Unlock new capabilities with AI.',
  path: '/services/gen-ai-solutions',
  keywords:
    'generative AI, LLM, machine learning, AI implementation, prompt engineering, AI integration',
  openGraphTitle: 'Gen AI Solutions | AI Implementation | DhiWork Solutions LLC',
  openGraphDescription:
    'Generative AI and machine learning solutions for enterprise transformation',
})

export default function GenAISolutionsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Gen AI Solutions', href: '/services/gen-ai-solutions' },
        ]}
      />

      <ServiceHeroSection
        subtitle="Artificial Intelligence & Automation"
        title="Gen AI Solutions"
        description="Harness the power of generative AI and large language models to innovate faster, automate workflows, and unlock new business capabilities. From strategy to implementation."
      />

      <TechnicalCapabilities
        title="Gen AI Expertise & Capabilities"
        description="Our AI specialists deliver end-to-end solutions leveraging cutting-edge language models and AI technologies"
        capabilities={[
          {
            icon: capabilityIcon('ai-brain', 'LLM Integration'),
            title: 'LLM Integration',
            description:
              'Implement OpenAI, Claude, Anthropic, and open-source LLMs into enterprise applications.',
          },
          {
            icon: capabilityIcon('analytics-chart', 'Prompt Engineering'),
            title: 'Prompt Engineering',
            description:
              'Optimize prompts and develop sophisticated prompting strategies for maximum performance.',
          },
          {
            icon: capabilityIcon('data-flow', 'RAG Systems'),
            title: 'RAG Systems',
            description:
              'Build Retrieval Augmented Generation systems that ground LLMs in your data.',
          },
          {
            icon: capabilityIcon('enterprise-network', 'AI Agents'),
            title: 'AI Agents',
            description:
              'Develop autonomous agents with tool use, reasoning, and multi-step planning.',
          },
          {
            icon: capabilityIcon('system-integration', 'Fine-Tuning'),
            title: 'Fine-Tuning',
            description:
              'Fine-tune models on domain-specific data for specialized use cases.',
          },
          {
            icon: capabilityIcon('security-shield', 'AI Safety & Ethics'),
            title: 'AI Safety & Ethics',
            description:
              'Implement responsible AI practices, bias detection, and safety guardrails.',
          },
        ]}
      />

      <WhyChooseSection
        subtitle="Why Choose DhiWork"
        title="Why We're Your AI Partner"
        reasons={[
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Cutting-Edge Expertise',
            description:
              'Deep knowledge of latest LLMs, frameworks, and best practices in Gen AI',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Practical Implementation',
            description:
              'Transform AI concepts into production-ready solutions that deliver ROI',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Responsible AI',
            description:
              'Build AI systems with attention to ethics, bias, and safety considerations',
          },
          {
            icon: WHY_CHOOSE_ICON,
            title: 'Business Impact',
            description:
              'Focus on measurable business outcomes and competitive advantage',
          },
        ]}
      />

      <ProcessTimeline
        subtitle="Implementation Approach"
        title="Our 5-Phase AI Implementation Process"
        steps={[
          {
            number: 1,
            title: 'Strategy & Discovery',
            description:
              'Identify high-impact use cases, define success metrics, and set AI roadmap',
          },
          {
            number: 2,
            title: 'Design & Prototyping',
            description:
              'Design AI architecture, select models, and build proof-of-concept prototypes',
          },
          {
            number: 3,
            title: 'Development & Fine-Tuning',
            description:
              'Build production systems, optimize prompts, and fine-tune models as needed',
          },
          {
            number: 4,
            title: 'Testing & Evaluation',
            description:
              'Conduct comprehensive testing, measure performance, and ensure quality gates',
          },
          {
            number: 5,
            title: 'Deployment & Support',
            description:
              'Deploy to production, monitor performance, and optimize continuously',
          },
        ]}
      />

      <RelatedServicesCards
        services={[
          {
            icon: relatedServiceIcon('/services/data-engineering'),
            title: 'Data Engineering',
            description:
              'Build data infrastructure to power your AI and machine learning models.',
            href: '/services/data-engineering',
          },
          {
            icon: relatedServiceIcon('/services/sap-services'),
            title: 'SAP Services',
            description:
              'Integrate AI capabilities into your SAP environment for intelligent processes.',
            href: '/services/sap-services',
          },
          {
            icon: relatedServiceIcon('/services/oracle-services'),
            title: 'Oracle Services',
            description:
              'Leverage Oracle databases and AI services for intelligent analytics.',
            href: '/services/oracle-services',
          },
        ]}
      />

      <FAQSection
        subtitle="Common Questions"
        title="Gen AI Services FAQ"
        faqs={[
          {
            question: 'Which LLM should we use for our business case?',
            answer:
              'The choice depends on your use case, cost constraints, and compliance requirements. OpenAI GPT-4 excels at complex reasoning, while Claude is strong in analysis and writing. We evaluate trade-offs and recommend the best fit.',
          },
          {
            question: 'How do we ensure AI systems are accurate and trustworthy?',
            answer:
              'We implement multiple safeguards: prompt validation, grounding with RAG, output verification, and human review for critical decisions. Continuous monitoring helps catch issues early.',
          },
          {
            question: 'What about data privacy with LLMs?',
            answer:
              'We implement secure API patterns, on-premise deployments where needed, and ensure compliance with GDPR/CCPA. Your data never trains public models.',
          },
          {
            question: 'How much does Gen AI implementation cost?',
            answer:
              'Costs vary widely based on complexity. Simple chatbots start around $50K, while sophisticated agent systems range from $200K-$500K+. We provide detailed cost modeling upfront.',
          },
          {
            question: 'What ROI can we expect from AI?',
            answer:
              'ROI depends on the use case. Common wins: 30-50% improvement in customer service efficiency, 20-40% faster knowledge work, and significant productivity gains. We focus on measurable outcomes.',
          },
        ]}
      />

      <CTASection
        title="Ready to Leverage Gen AI?"
        description="Let's explore how generative AI can transform your business. Our AI experts are ready to discuss your use cases and opportunities."
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

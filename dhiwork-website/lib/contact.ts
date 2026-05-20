import * as z from 'zod'

export const ALLOWED_SERVICES = ['sap', 'oracle', 'data', 'ai'] as const

export type ContactService = (typeof ALLOWED_SERVICES)[number]

export const SERVICE_LABELS: Record<ContactService, string> = {
  sap: 'SAP Services',
  oracle: 'Oracle Services',
  data: 'Data Engineering',
  ai: 'Gen AI Solutions',
}

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(200),
  email: z.string().trim().email('Please enter a valid email address').max(320),
  phone: z.string().trim().max(80).optional(),
  company: z.string().trim().max(200).optional(),
  service: z.enum(ALLOWED_SERVICES, {
    message: 'Please select a service',
  }),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
})

export const contactSubmissionSchema = contactFormSchema

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>

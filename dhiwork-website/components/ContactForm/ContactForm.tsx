'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import styles from './ContactForm.module.scss'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.enum(['sap', 'oracle', 'data', 'ai'], {
    message: 'Please select a service',
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  onSubmitSuccess?: () => void
}

export function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      phone: '',
      company: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_API_URL
      if (!endpoint) {
        throw new Error('Contact API is not configured')
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')
      reset()
      onSubmitSuccess?.()

      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          className={styles.input}
          placeholder="Your name"
          {...register('name')}
          disabled={isSubmitting}
        />
        {errors.name && <span className={styles.error}>{errors.name.message}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          className={styles.input}
          placeholder="your@email.com"
          {...register('email')}
          disabled={isSubmitting}
        />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className={styles.input}
            placeholder="+1 (555) 123-4567"
            {...register('phone')}
            disabled={isSubmitting}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company" className={styles.label}>
            Company
          </label>
          <input
            id="company"
            type="text"
            className={styles.input}
            placeholder="Your company"
            {...register('company')}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="service" className={styles.label}>
          Service Interest *
        </label>
        <select
          id="service"
          className={styles.select}
          {...register('service')}
          disabled={isSubmitting}
        >
          <option value="">Select a service</option>
          <option value="sap">SAP Services</option>
          <option value="oracle">Oracle Services</option>
          <option value="data">Data Engineering</option>
          <option value="ai">Gen AI Solutions</option>
        </select>
        {errors.service && (
          <span className={styles.error}>{errors.service.message}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message *
        </label>
        <textarea
          id="message"
          className={styles.textarea}
          placeholder="Tell us about your project..."
          rows={5}
          {...register('message')}
          disabled={isSubmitting}
        />
        {errors.message && (
          <span className={styles.error}>{errors.message.message}</span>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          ✓ Thank you! We'll be in touch shortly.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          ✗ Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

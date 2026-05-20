'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactSubmission } from '@/lib/contact'
import { trackFormSubmit } from '@/lib/analytics'
import styles from './ContactForm.module.scss'

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
  } = useForm<ContactSubmission>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      phone: '',
      company: '',
    },
  })

  const onSubmit = async (data: ContactSubmission) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')
      reset()
      trackFormSubmit(data.service)
      onSubmitSuccess?.()

      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch {
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

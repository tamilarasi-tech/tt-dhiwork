import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { SITE_CONTACT } from '@/lib/site'
import {
  contactSubmissionSchema,
  SERVICE_LABELS,
  type ContactSubmission,
} from '@/lib/contact'

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildEmailHtml(data: ContactSubmission): string {
  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone || '—'],
    ['Company', data.company || '—'],
    ['Service', SERVICE_LABELS[data.service]],
    ['Message', data.message],
  ]

  const body = rows
    .map(([label, value]) => {
      const cell =
        label === 'Message'
          ? escapeHtml(value).replace(/\n/g, '<br>')
          : escapeHtml(value)
      return `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;">${label}</td><td style="padding:8px 12px;">${cell}</td></tr>`
    })
    .join('')

  return `<!DOCTYPE html><html><body style="font-family:sans-serif;color:#111;">
<p>New contact form submission from dhiworksolutions.com:</p>
<table style="border-collapse:collapse;max-width:600px;">${body}</table>
</body></html>`
}

function buildEmailText(data: ContactSubmission): string {
  return [
    'New contact form submission',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || '—'}`,
    `Company: ${data.company || '—'}`,
    `Service: ${SERVICE_LABELS[data.service]}`,
    '',
    'Message:',
    data.message,
  ].join('\n')
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    return NextResponse.json({ error: 'Email service is not configured' }, { status: 503 })
  }

  const from = process.env.RESEND_FROM_EMAIL
  if (!from) {
    console.error('RESEND_FROM_EMAIL is not configured')
    return NextResponse.json({ error: 'Email service is not configured' }, { status: 503 })
  }

  const to = process.env.CONTACT_NOTIFICATION_EMAIL || SITE_CONTACT.email

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = contactSubmissionSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Invalid submission', details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const data = parsed.data
  const subject = `Contact form: ${SERVICE_LABELS[data.service]} — ${data.name}`
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      html: buildEmailHtml(data),
      text: buildEmailText(data),
    })

    if (error) {
      console.error('Resend error', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('POST /api/contact', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

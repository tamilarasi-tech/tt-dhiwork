const { onRequest } = require('firebase-functions/v2/https')
const { Resend } = require('resend')

const ALLOWED_ORIGINS = [
  'https://www.dhiworksolutions.com',
  'https://dhiworksolutions.com',
  'http://localhost:3000',
]

function setCors(req, res) {
  const origin = req.get('origin') || ''
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.set('Access-Control-Allow-Origin', origin)
  }
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
}

exports.contact = onRequest({ cors: false }, async (req, res) => {
  setCors(req, res)

  if (req.method === 'OPTIONS') {
    res.status(204).send('')
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@dhiworksolutions.com'
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || 'DhiWork Website <onboarding@resend.dev>'

  if (!apiKey) {
    res.status(500).json({ error: 'Email service is not configured' })
    return
  }

  const { name, email, phone, company, service, message } = req.body || {}

  if (!name || !email || !service || !message) {
    res.status(400).json({ error: 'Missing required fields' })
    return
  }

  const resend = new Resend(apiKey)
  const serviceLabels = {
    sap: 'SAP Services',
    oracle: 'Oracle Services',
    data: 'Data Engineering',
    ai: 'Gen AI Solutions',
  }

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Website inquiry: ${serviceLabels[service] || service} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        company ? `Company: ${company}` : null,
        `Service: ${serviceLabels[service] || service}`,
        '',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    })

    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ error: 'Failed to send message' })
  }
})

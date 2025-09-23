import emailjs from '@emailjs/browser'

type SendContactParams = {
  firstName: string
  lastName: string
  email: string
  phone: string
  countryCode: string
  country: string
  service: string
  comment: string
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL as string | undefined

export function ensureEmailEnvConfigured(): void {
  // Debug: log masked env values in development to verify they're loaded
  if (import.meta.env.DEV) {
    const mask = (val?: string) => (val ? `${val.slice(0, 3)}***${val.slice(-3)}` : 'undefined')
    // eslint-disable-next-line no-console
    console.log('[EmailJS env]', {
      VITE_EMAILJS_SERVICE_ID: mask(SERVICE_ID),
      VITE_EMAILJS_TEMPLATE_ID: mask(TEMPLATE_ID),
      VITE_EMAILJS_PUBLIC_KEY: mask(PUBLIC_KEY),
    })
  }
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    const missing = [
      ['VITE_EMAILJS_SERVICE_ID', SERVICE_ID],
      ['VITE_EMAILJS_TEMPLATE_ID', TEMPLATE_ID],
      ['VITE_EMAILJS_PUBLIC_KEY', PUBLIC_KEY],
    ].
      filter(([_, val]) => !val).
      map(([key]) => key)
    throw new Error(`EmailJS environment not configured. Missing: ${missing.join(', ')}`)
  }
}

export async function sendContactEmail(params: SendContactParams): Promise<void> {
  ensureEmailEnvConfigured()

  const templateParams = {
    first_name: params.firstName,
    last_name: params.lastName,
    reply_to: params.email,
    phone: `${params.countryCode} ${params.phone}`,
    country: params.country,
    service: params.service,
    message: params.comment,
    // Optional: if your EmailJS template uses {{to_email}}, this will set the recipient
    ...(TO_EMAIL ? { to_email: TO_EMAIL } : {}),
  }

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
    publicKey: PUBLIC_KEY,
  })
}



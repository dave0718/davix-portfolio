'use server'

import { Resend } from 'resend'

export type ContactState = {
  ok: boolean
  message: string
  errors?: Record<string, string>
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const errorMessage =
  "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."

export async function sendContact(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = 'Veuillez renseigner votre nom.'
  if (!emailRegex.test(email)) errors.email = 'Adresse email invalide.'
  if (message.length < 10)
    errors.message = 'Votre message doit contenir au moins 10 caractères.'

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: 'Veuillez corriger les erreurs.', errors }
  }

  const apiKey = process.env.RESEND_API_KEY
  const contactEmail = process.env.CONTACT_EMAIL

  if (!apiKey || !contactEmail) {
    return { ok: false, message: errorMessage }
  }

  const resend = new Resend(apiKey)
  const date = new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(new Date())

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: email,
      subject: `[Nouveau message Portfolio] ${name}`,
      text: `Nom :
${name}

Email :
${email}

Date :
${date}

Message :
${message}`,
    })

    if (error) {
      return { ok: false, message: errorMessage }
    }
  } catch {
    return { ok: false, message: errorMessage }
  }

  return {
    ok: true,
    message:
      'Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.',
  }
}

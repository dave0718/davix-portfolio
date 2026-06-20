'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2, Send } from 'lucide-react'
import { toast } from 'sonner'
import { sendContact, type ContactState } from '@/app/actions'
import { SectionHeading } from '@/components/reveal'
import { socialLinks } from '@/lib/site'
import { cn } from '@/lib/utils'

const fields = [
  { name: 'name', label: 'Nom', type: 'text', placeholder: 'Votre nom' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'vous@email.com' },
  { name: 'subject', label: 'Sujet', type: 'text', placeholder: 'Sujet du message' },
] as const

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, action, pending] = useActionState<ContactState | null, FormData>(
    sendContact,
    null,
  )
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (state?.ok) {
      toast.success(state.message)
      setSuccess(true)
      formRef.current?.reset()
      const t = setTimeout(() => setSuccess(false), 2600)
      return () => clearTimeout(t)
    }
    if (state && !state.ok) toast.error(state.message)
  }, [state])

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Travaillons ensemble"
          description="Une idée, un projet ou simplement envie d'échanger ? Écrivez-moi."
        />

        <motion.form
          ref={formRef}
          action={action}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-border bg-card p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((f) => (
              <div
                key={f.name}
                className={f.name === 'subject' ? 'sm:col-span-2' : ''}
              >
                <label
                  htmlFor={f.name}
                  className="mb-1.5 block text-sm font-medium"
                >
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                {state?.errors?.[f.name] && (
                  <p className="mt-1 text-xs text-destructive">
                    {state.errors[f.name]}
                  </p>
                )}
              </div>
            ))}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Décrivez votre projet..."
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              {state?.errors?.message && (
                <p className="mt-1 text-xs text-destructive">
                  {state.errors.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={pending || success}
            className={cn(
              'mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all sm:w-auto',
              success
                ? 'bg-primary text-primary-foreground'
                : 'bg-primary text-primary-foreground hover:scale-[1.02] disabled:opacity-70',
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              {pending ? (
                <motion.span
                  key="pending"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2"
                >
                  <Loader2 className="size-4 animate-spin" /> Envoi...
                </motion.span>
              ) : success ? (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2"
                >
                  <Check className="size-4" /> Envoyé !
                </motion.span>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-2"
                >
                  <Send className="size-4" /> Envoyer le message
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {socialLinks.email && (
            <p className="mt-4 text-center text-sm text-muted-foreground sm:text-left">
              Ou écrivez-moi directement à{' '}
              <a
                href={`mailto:${socialLinks.email}`}
                className="text-primary underline-offset-4 hover:underline"
              >
                {socialLinks.email}
              </a>
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}

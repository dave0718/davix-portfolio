'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/lib/site'
import { SectionHeading } from '@/components/reveal'

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ils me font confiance"
          description="Retours de clients, encadrants et collaborateurs rencontrés au fil des projets."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <Quote className="size-7 text-primary/40" />
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-accent font-heading text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

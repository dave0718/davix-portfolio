'use client'

import { motion } from 'framer-motion'
import { Globe, Server, Smartphone, Wrench, type LucideIcon } from 'lucide-react'
import { services } from '@/lib/site'
import { SectionHeading } from '@/components/reveal'

const icons: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Server,
  Wrench,
}

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Ce que je peux faire pour vous"
          description="Un accompagnement complet, de la conception au déploiement et à la maintenance."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
              >
                <div className="absolute -right-8 -top-8 size-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
                <div className="relative flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="size-6" />
                </div>
                <h3 className="relative mt-5 font-heading text-lg font-bold">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

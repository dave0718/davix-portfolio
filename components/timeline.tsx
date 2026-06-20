'use client'

import { motion } from 'framer-motion'
import { timeline } from '@/lib/site'
import { SectionHeading } from '@/components/reveal'

export function Timeline() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Parcours"
          title="Mon évolution"
          description="Du premier jour à We.Code jusqu'à mon objectif de développeur Full-Stack Senior."
        />

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-1/2" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute left-4 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-primary to-accent sm:left-1/2"
          />

          <ul className="space-y-8">
            {timeline.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className={`relative pl-12 sm:w-1/2 ${
                  i % 2 === 0
                    ? 'sm:pl-0 sm:pr-12 sm:text-right'
                    : 'sm:ml-auto sm:pl-12'
                }`}
              >
                <span
                  className={`absolute left-[9px] top-1.5 size-3.5 rounded-full border-2 border-background bg-primary sm:left-auto ${
                    i % 2 === 0 ? 'sm:-right-[7px]' : 'sm:-left-[7px]'
                  }`}
                />
                <div className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
                  <span className="font-mono text-xs text-primary">
                    Étape {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 font-heading font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

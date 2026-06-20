'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { projects } from '@/lib/site'
import { SectionHeading } from '@/components/reveal'

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Réalisations"
          title="Projets sélectionnés"
          description="Une sélection d'applications web et mobiles construites avec des stacks modernes."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={`Aperçu du projet ${p.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span
                  className={`absolute left-3 top-3 rounded-full px-2.5 py-1 font-mono text-[10px] font-medium backdrop-blur ${
                    p.accent === 'primary'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-accent/20 text-accent'
                  }`}
                >
                  {p.tech[0]}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 4 && (
                    <span className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      +{p.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

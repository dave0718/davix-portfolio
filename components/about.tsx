'use client'

import { GraduationCap, Code2, Rocket, Download } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack',
    text: 'Du frontend au backend, je maîtrise toute la chaîne de développement.',
  },
  {
    icon: GraduationCap,
    title: 'We.Code · Epitech',
    text: 'Formation intensive en développement web, mobile et architecture logicielle.',
  },
  {
    icon: Rocket,
    title: 'Orienté produit',
    text: 'Des expériences intuitives, performantes et pensées pour l’utilisateur.',
  },
]

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-6 flex justify-center">
          <a
            href="/CV_Molo_Koffi_David.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-shadow hover:shadow-primary/40"
          >
            <Download className="size-4" />
            Téléchargez mon CV
          </a>
        </Reveal>

        <SectionHeading
          eyebrow="À propos"
          title="Passionné par la création de solutions numériques"
        />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Développeur Full-Stack passionné par la conception de solutions
              numériques innovantes. Formé à la{' '}
              <span className="font-medium text-foreground">
                Coding Academy by Epitech
              </span>{' '}
              à travers le programme{' '}
              <span className="font-medium text-foreground">We.Code</span>, j’ai
              développé plusieurs applications web et mobiles en utilisant les
              technologies les plus modernes du marché.
            </p>
            <p>
              Mon objectif est de concevoir des expériences numériques
              intuitives, performantes et parfaitement adaptées aux besoins des
              utilisateurs — en alliant rigueur technique et sens du détail.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Clean Code', 'Component Driven', 'Performance', 'Accessibilité'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-foreground"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i}>
                <div className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <h.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {h.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

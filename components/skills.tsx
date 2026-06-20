'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills, skillCategories } from '@/lib/site'
import { SectionHeading } from '@/components/reveal'
import { cn } from '@/lib/utils'

const filters = ['Tous', ...skillCategories] as const

export function Skills() {
  const [active, setActive] = useState<(typeof filters)[number]>('Tous')

  const filtered = useMemo(
    () => (active === 'Tous' ? skills : skills.filter((s) => s.category === active)),
    [active],
  )

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Stack technique"
          title="Compétences techniques"
          description="Un éventail de technologies modernes côté frontend, backend, mobile et infrastructure."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm transition-colors',
                active === f
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.ul layout className="flex flex-wrap justify-center gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.li
                key={s.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50"
              >
                <span className="size-1.5 rounded-full bg-primary transition-transform group-hover:scale-150" />
                {s.name}
                <span className="font-mono text-[10px] text-muted-foreground">
                  {s.category === 'Bases de données' ? 'DB' : s.category}
                </span>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}

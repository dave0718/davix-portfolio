'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Sparkles } from 'lucide-react'
import { Particles } from '@/components/particles'
import { Typewriter } from '@/components/typewriter'
import { Magnetic } from '@/components/magnetic'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* layered animated background */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute inset-0 -z-10">
        <Particles />
      </div>
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-24 top-24 -z-10 size-[28rem] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-24 bottom-12 -z-10 size-[26rem] rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur"
          >
            <Sparkles className="size-3.5 text-primary" />
            Disponible pour de nouveaux projets
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-balance font-heading text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            DAVIX
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-3 font-heading text-2xl font-semibold sm:text-3xl"
          >
            <span className="text-gradient">
              <Typewriter
                words={[
                  'Développeur Full-Stack',
                  'Développeur Mobile',
                  'Créateur d’API',
                  'Architecte logiciel',
                ]}
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground"
          >
            Je transforme des idées en applications web et mobiles modernes,
            performantes et évolutives. Formé à la Coding Academy by Epitech via
            le programme We.Code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-shadow hover:shadow-primary/40"
              >
                Voir mes projets
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="size-4" />
                Me contacter
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex items-center gap-2 font-mono text-xs text-muted-foreground"
          >
            <MapPin className="size-3.5" />
            Full-Stack &amp; Mobile · Web · API
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-[2rem] border border-dashed border-primary/30"
          />
          <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 blur-2xl" />
          <div className="group relative overflow-hidden rounded-[1.75rem] border border-border glass p-2 transition-transform duration-500 hover:-translate-y-1">
            <div className="overflow-hidden rounded-[1.4rem]">
              <Image
                src="/davix.png"
                alt="Portrait de DAVIX, développeur Full-Stack et Mobile"
                width={640}
                height={853}
                priority
                className="h-auto w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="pointer-events-none absolute inset-2 rounded-[1.4rem] ring-1 ring-inset ring-white/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-4 left-4 rounded-2xl glass border border-border px-4 py-2 shadow-lg"
          >
            <p className="font-heading text-sm font-bold">We.Code</p>
            <p className="font-mono text-[10px] text-muted-foreground">
              Coding Academy by Epitech
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

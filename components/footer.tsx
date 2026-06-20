'use client'

import { Mail, MessageCircle, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { socialLinks, navItems } from '@/lib/site'

const socials = [
  { key: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon, href: socialLinks.linkedin },
  { key: 'github', label: 'GitHub', icon: GithubIcon, href: socialLinks.github },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    icon: MessageCircle,
    href: socialLinks.whatsapp,
  },
  {
    key: 'email',
    label: 'Email',
    icon: Mail,
    href: socialLinks.email ? `mailto:${socialLinks.email}` : '',
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <a href="#hero" className="font-heading text-xl font-bold">
              DA<span className="text-primary">VIX</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Développeur Full-Stack &amp; Mobile. Je transforme des idées en
              produits numériques performants.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href || '#'}
                target={s.href && !s.href.startsWith('mailto') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <s.icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} DAVIX. Tous droits réservés.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Retour en haut
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

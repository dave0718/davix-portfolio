import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Stats } from '@/components/stats'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { Timeline } from '@/components/timeline'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Cursor } from '@/components/cursor'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'DAVIX',
  jobTitle: 'Développeur Full-Stack & Mobile',
  description:
    'Développeur Full-Stack & Mobile formé à la Coding Academy by Epitech (We.Code).',
  knowsAbout: [
    'React',
    'Next.js',
    'Vue.js',
    'Laravel',
    'NestJS',
    'React Native',
    'TypeScript',
    'PHP',
    'Python',
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Coding Academy by Epitech',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Services />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

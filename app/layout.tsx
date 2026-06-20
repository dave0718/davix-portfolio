import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://davix.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DAVIX — Développeur Full-Stack & Mobile',
    template: '%s — DAVIX',
  },
  description:
    'Portfolio de DAVIX, développeur Full-Stack & Mobile formé à la Coding Academy by Epitech (We.Code). Je transforme des idées en applications web et mobiles modernes, performantes et évolutives.',
  keywords: [
    'DAVIX',
    'développeur full-stack',
    'développeur mobile',
    'React',
    'Next.js',
    'Laravel',
    'NestJS',
    'Epitech',
    'We.Code',
    'portfolio développeur',
  ],
  authors: [{ name: 'DAVIX' }],
  creator: 'DAVIX',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    title: 'DAVIX — Développeur Full-Stack & Mobile',
    description:
      'Je transforme des idées en applications web et mobiles modernes, performantes et évolutives.',
    siteName: 'DAVIX Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DAVIX — Développeur Full-Stack & Mobile',
    description:
      'Je transforme des idées en applications web et mobiles modernes, performantes et évolutives.',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f9fb' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1014' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast:
                  'group glass border border-border text-foreground rounded-xl',
              },
            }}
          />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

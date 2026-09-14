import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from '@/lib/i18n/LocaleContext'
import { AudienceProvider } from '@/lib/audience/AudienceContext'
import { SITE_URL } from '@/lib/constants'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Équipements et dispositifs pour le bloc opératoire — Medicaris Maroc',
  description:
    "Medicaris SARL, Casablanca — équipements et dispositifs pour le bloc opératoire au Maroc : proctologie, urologie, phlébologie, pain management, ablation tissulaire. Plateformes laser et générateurs de radiofréquence, en relation directe avec les fabricants. Installation, formation, consommables.",
  alternates: { canonical: '/' },
  openGraph: {
    siteName: 'Medicaris SARL',
    locale: 'fr_MA',
    title: 'Équipements et dispositifs pour le bloc opératoire — Medicaris Maroc',
    description:
      'Proctologie, urologie, phlébologie, pain management, ablation tissulaire. Plateformes laser et générateurs de radiofréquence. Casablanca, Maroc.',
    type: 'website',
    url: '/',
    images: ['/img/logo.webp'],
  },
  twitter: { card: 'summary' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Medicaris SARL',
  legalName: 'MEDICARIS S.A.R.L.',
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo.webp`,
  description:
    'Distribution d’équipements et de dispositifs pour le bloc opératoire au Maroc : proctologie, urologie, phlébologie, pain management, ablation tissulaire. Plateformes laser et générateurs de radiofréquence, en relation directe avec les fabricants.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rue Soumaya, Résidence Shehrazade 3, 5e étage, N° 22, Palmiers',
    addressLocality: 'Casablanca',
    addressCountry: 'MA',
  },
  telephone: '+212669182123',
  areaServed: { '@type': 'Country', name: 'Maroc' },
  identifier: [
    { '@type': 'PropertyValue', name: 'ICE', value: '003701741000047' },
    { '@type': 'PropertyValue', name: 'RC', value: '677593' },
    { '@type': 'PropertyValue', name: 'IF', value: '66972543' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: '+212669182123',
    areaServed: 'MA',
    availableLanguage: ['fr', 'en', 'ar'],
  },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LocaleProvider>
          <AudienceProvider>{children}</AudienceProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}

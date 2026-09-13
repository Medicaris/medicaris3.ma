import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { IS_PREVIEW } from '@/lib/preview'

export default function robots(): MetadataRoute.Robots {
  // Préversion : rien ne doit être exploré ni indexé, sinon Google verrait deux
  // fois le même contenu et la liste des fournisseurs partirait en ligne avant
  // l'accord du client.
  if (IS_PREVIEW) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/maintenance'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}

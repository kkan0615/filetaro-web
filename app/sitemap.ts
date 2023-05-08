import { MetadataRoute } from 'next'
import { i18n } from '@/i18n-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_URL
  if (!url) return []

  const fieldsByLang = i18n.locales.map(localeEl => {
    return {
      url: url + '/' + localeEl,
      lastModified: new Date(),
    }
  })

  return [
    {
      url: url,
      lastModified: new Date(),
    },
  ].concat(fieldsByLang)
}

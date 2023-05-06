import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.NEXT_PUBLIC_URL
  if (!url) return []

  return [
    {
      url: url,
      lastModified: new Date(),
    },
  ]
}

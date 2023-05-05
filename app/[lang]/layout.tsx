import { i18n } from '@/i18n-config'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'

export const metadata = {
  title: {
    default: 'Filetaro',
    template: '%s | Filetaro',
  },
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

interface Props {
  children: React.ReactNode
  params: { lang: string }
}

function Layout({ children, params }: Props) {
  return (
    <html lang={ params.lang }>
      <body className="min-h-screen">
        <Navbar />
        { children }
        <Footer />
      </body>
    </html>
  )
}
export default Layout

import './globals.css'
import 'animate.css'

export const metadata = {
  title: 'Filetaro',
  description: 'Filetaro official website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      { children }
    </>
  )
}

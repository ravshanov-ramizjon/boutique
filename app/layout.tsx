import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/castom/Header'
import Footer from '@/components/castom/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kamola Boutique',
  description: 'Женский бутик',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

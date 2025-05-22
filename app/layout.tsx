import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/castom/Header'
import Footer from '@/components/castom/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kamola Boutique | Элегантность и стиль',
  description: 'Kamola Boutique — это сочетание изысканности, женственности и модных тенденций. Мы предлагаем только лучшее для наших клиенток.',
  keywords: ['Kamola Boutique', 'женская одежда', 'бутик Самарканд', 'мода Узбекистан', 'стиль для женщин'],
  metadataBase: new URL('https://kamolaboutique.uz'),

  authors: [{ name: 'Kamola Boutique Team', url: 'https://kamolaboutique.uz' }],
  creator: 'Kamola Boutique',

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.jpg',
  },

  openGraph: {
    title: 'Kamola Boutique | Элегантность и стиль',
    description: 'Изысканная женская одежда в Самарканде. Камола Бутик — мода, которая вдохновляет.',
    url: 'https://kamolaboutique.uz',
    siteName: 'Kamola Boutique',
    images: [
      {
        url: '/og-image.jpg', // обязательно
        width: 1200,
        height: 630,
        alt: 'Kamola Boutique – логотип и стиль',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
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

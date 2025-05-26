import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/castom/Header'
import Footer from '@/components/castom/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kamola Boutique | Элегантность и стиль',
  description:
    'Kamola Boutique — это сочетание изысканности, женственности и модных тенденций. Мы предлагаем только лучшее для наших клиенток.',
  keywords: [
    'Kamola Boutique', 'женская одежда', 'бутик Самарканд', 'мода Узбекистан',
    'стиль для женщин', 'элегантная одежда', 'модные тенденции', 'качественная одежда',
    'стильные аксессуары', 'женская мода', 'одежда для женщин', 'бутик в Самарканде',
    'мода и стиль', 'элегантность', 'женская элегантность', 'бутик', 'бутики', 'бутик уз',
    'Kamola Boutique uz', 'Kamola Boutique Samarkand', 'Kamola Boutique Uzbekistan',
    'kamola boutique uz', 'kamola boutique samarkand', 'kamola boutique uzbekistan',
    'элегантная одежда уз', 'элегантная одежда узбекистан', 'элегантная одежда самарканд',
    'элегантная одежда самарканде'
  ],

  metadataBase: new URL('https://www.kamolaboutique.uz', 'https://kamolaboutique.uz'),

  authors: [{ name: 'Kamola Boutique Team', url: 'https://www.kamolaboutique.uz' }],
  creator: 'Kamola Boutique',
  publisher: 'Kamola Boutique',

  category: 'fashion', // категория сайта

  applicationName: 'Kamola Boutique', // название сайта как приложения

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  openGraph: {
    title: 'Kamola Boutique | Элегантность и стиль',
    description: 'Изысканная женская одежда в Самарканде. Камола Бутик — мода, которая вдохновляет.',
    url: 'https://www.kamolaboutique.uz',
    siteName: 'Kamola Boutique',
    images: [
      {
        url: 'https://www.kamolaboutique.uz/og-image.png', // абсолютный путь
        width: 1200,
        height: 630,
        alt: 'Kamola Boutique – логотип и стиль',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image', // для большого превью
    title: 'Kamola Boutique | Элегантность и стиль',
    description: 'Изысканная женская одежда в Самарканде. Камола Бутик — мода, которая вдохновляет.',
    creator: '@kamolaboutique', // укажи, если есть Twitter-аккаунт
    images: ['https://www.kamolaboutique.uz/og-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.jpg',
  },

  other: {
    'google-site-verification': 'x43P9N4U5DHLBhmSjIXNT1BHQovQGXVAzP_Jfq1-IeI',
    'yandex-verification': 'f70ebfd4500a65a4',
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

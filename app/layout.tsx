import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Meridions Life | Acupuntura',
  description: 'Tratamentos de acupuntura, medicina tradicional chinesa e terapias integrativas. Equilibre corpo e mente com profissionais especializados.',
  keywords: ['acupuntura', 'medicina integrativa', 'medicina chinesa', 'bem-estar', 'saude', 'terapia'],
  icons: {
    icon: [
      {
        url: '/meridions-icon.svg?v=3',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/meridions-icon.svg?v=3',
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

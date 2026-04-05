import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '../styles/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'T2B Architects — Architecture & Interior Design Firm',
  description:
    'T2B Architects crafts architecture that balances form and humanity — where every structure tells a story rooted in place, culture, and light.',
  keywords: 'architecture, interior design, landscape, urban planning, residential, commercial, T2B Architects',
  openGraph: {
    title: 'T2B Architects — Architecture & Interior Design Firm',
    description: 'We design spaces that endure.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script async src="//www.instagram.com/embed.js" />
      </head>
      <body>{children}</body>
    </html>
  )
}

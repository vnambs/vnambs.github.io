import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const title = 'Jonathan Voary - Professional Web Developer Portfolio'
const description =
  "Explore Jonathan Voary's professional portfolio showcasing expertise in web development, including projects on modern frameworks like Next.js, React, and more."
const project = 'Jonathan Voary Portfolio'
const url = 'https://vnambs.github.io'
const name = 'Jonathan Voary'

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s | Jonathan Voary',
  },
  description,
  applicationName: project,
  authors: [{ name, url }],
  generator: 'Next.js',
  keywords: [name, 'Web Developer', 'Next.js', 'React', 'Portfolio'],
  referrer: 'origin',
  creator: name,
  publisher: name,
  robots: 'index, follow',
  alternates: {
    canonical: url,
  },
  icons: {
    icon: '/images/favicon-32x32.png',
    apple: '/images/icon/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: project,
    images: [
      {
        url: 'https://vnambs.github.io/images/portfolio-thumbnail.jpg',
        alt: "Jonathan Voary's Portfolio Thumbnail",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jonathanvoary',
    creator: '@jonathanvoary',
    title,
    description,
    images: 'https://vnambs.github.io/images/portfolio-thumbnail.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

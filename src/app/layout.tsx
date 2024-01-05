import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import { NextAuthProvider } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Healer Buddy',
  description: 'Theraphy scheduling and appointment platform',
  icons: "./favicon.ico"
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <script src="//embed.typeform.com/next/embed.js"></script>
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/dialog.js"></script>
        <link rel="shortcut icon" href="./favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
        />
      </Head>
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}

import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pratik Nikale',
  description: 'Pratik portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap" rel="stylesheet" /> */}

      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

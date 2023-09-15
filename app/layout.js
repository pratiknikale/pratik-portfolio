import './globals.css'
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pratik Nikale',
  description: 'Pratik portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='absolute'>
          <Image
            className="w-[100%] imageFade opacity-[0.04] fixed"
            src="/coding1-bg.jpg"
            width={0}
            height={0}
            alt="background"
            sizes='100vw'
          />
        </div>
        <div className='relative'>
          {children}
        </div>
        <div className="myFooter bg-[#1395BA]/[15%] h-[50px] sm:text-[14px] text-[10px] text-[#bebebe] flex justify-center items-center">@ Copyright 2023. Developed by Pratik Nikale. All rights reserved.</div>
      </body>
    </html>
  )
}

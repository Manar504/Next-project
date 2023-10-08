import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google' 
import Navbar from './components/Navbar'
import Footer from "./components/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flexibble',
  description: 'Showcase and discover remarable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> 
        <Navbar/>
        <main>
        {children}
        </main> 
        <Footer/>
        </body>
    </html>
  )
}

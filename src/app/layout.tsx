import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Viva Pharmacy',
  description: 'Your trusted online pharmacy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  )
}

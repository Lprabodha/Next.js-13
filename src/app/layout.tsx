import { Poppins } from 'next/font/google';
import './globals.css'

const poppins =  Poppins({
  weight : ['400', '700'],
  subsets : ['latin']
});

export const metadata = {
  title: 'Rightmo Web',
  description: 'Web Development company',
  keywords: 'Rightmo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

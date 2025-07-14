import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Batatas Recheadas',
  description: 'Batatas recheadas com sabor, crocância e alegria irresistível.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
